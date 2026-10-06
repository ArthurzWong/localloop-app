#!/usr/bin/env node
/**
 * build.mjs — zero-dependency build for the LocalLoop static PWA.
 *
 * - Serves src/*.tsx / *.ts through the standalone TypeScript compiler.
 * - Bundles compiled ESM + React's CJS runtime into one self-contained
 *   assets/app.js (strict-CSP hosting serves no external origins).
 * - Copies public/* into dist/ (manifest, icons).
 * - --smoke: emit dist/smoke.mjs self-check module.
 */
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import url from "node:url";

const ROOT = path.dirname(url.fileURLToPath(import.meta.url));
const NM = path.join(ROOT, "node_modules");
const PUB = path.join(ROOT, "public");
const DIST = path.join(ROOT, "dist");
const APP_OUT = path.join(DIST, "assets", "app.js");

const smoke = process.argv.includes("--smoke");
const tsc = path.join(NM, "typescript", "bin", "tsc");
const TSBUILD = path.join(ROOT, ".tsbuild");
const ENTRY = path.relative(ROOT, path.join(TSBUILD, "main.js")).replaceAll("\\", "/");

console.log("[build] compiling TypeScript…");
fs.rmSync(TSBUILD, { recursive: true, force: true });
execFileSync(process.execPath, [tsc, "--outDir", ".tsbuild", "--rootDir", "src", "--noEmit", "false", "--declaration", "false", "--sourceMap", "false"], {
  cwd: ROOT, stdio: "inherit",
});

// ── Module registry ──────────────────────────────────────────────────────────
const modules = new Map();

const BARE_MAP = {
  react: "virtual/react",
  "react/jsx-runtime": "virtual/react-jsx-runtime",
  "react-dom": "virtual/react-dom",
  "react-dom/client": "virtual/react-dom-client",
  scheduler: "virtual/scheduler",
};

function registerCjs(absFile, key) {
  if (modules.has(key)) return key;
  modules.set(key, null); // reserve
  // React dev builds are never executed (bundle pins NODE_ENV=production).
  // Register throwing stubs to keep the bundle slim.
  if (/\.development\.js$/.test(absFile)) {
    modules.set(key, {
      loaded: false, exports: {}, isCjs: true,
      factory: new Function("__req", `throw new Error("dev build excluded from production bundle: ${key}");`),
    });
    return key;
  }
  const body = fs.readFileSync(absFile, "utf8");
  const dir = path.dirname(absFile);
  const depMap = {};
  for (const m of body.matchAll(/require\(\s*["']([^"']+)["']\s*\)/g)) {
    const spec = m[1];
    if (depMap[spec]) continue;
    if (BARE_MAP[spec]) { depMap[spec] = BARE_MAP[spec]; continue; }
    if (spec.startsWith(".")) {
      let p = path.resolve(dir, spec);
      if (!fs.existsSync(p) && fs.existsSync(p + ".js")) p = p + ".js";
      if (!fs.existsSync(p)) throw new Error(`CJS require cannot resolve ${spec} from ${absFile}`);
      const depKey = "virtual/" + path.relative(NM, p).replaceAll("\\", "/");
      depMap[spec] = registerCjs(p, depKey);
    } else {
      throw new Error(`unmapped bare require "${spec}" in ${absFile}`);
    }
  }
  const dmSrc = JSON.stringify(depMap);
  modules.set(key, {
    loaded: false, exports: {}, isCjs: true,
    factory: new Function(
      "__req",
      `var module = { exports: {} }; var exports = module.exports; var require = function(s){ var k = (${dmSrc})[s]; if (!k) throw new Error("require miss: " + s); return __req(k); };\n${body}\nreturn module.exports;`
    ),
  });
  return key;
}

registerCjs(path.join(NM, "react", "index.js"), "virtual/react");
registerCjs(path.join(NM, "react", "jsx-runtime.js"), "virtual/react-jsx-runtime");
registerCjs(path.join(NM, "react-dom", "index.js"), "virtual/react-dom");
registerCjs(path.join(NM, "react-dom", "client.js"), "virtual/react-dom-client");
registerCjs(path.join(NM, "scheduler", "index.js"), "virtual/scheduler");

// ── ESM source modules (from compiled .tsbuild output) ───────────────────────
function resolveSpec(fromFile, spec) {
  if (BARE_MAP[spec]) return BARE_MAP[spec];
  if (!spec.startsWith(".")) throw new Error(`non-relative import not allowed: ${spec}`);
  const base = path.resolve(path.dirname(fromFile), spec);
  for (const e of [".js", ""]) {
    const p = base + e;
    if (fs.existsSync(p) && fs.statSync(p).isFile()) return p;
  }
  if (fs.existsSync(base) && fs.statSync(base).isDirectory()) {
    for (const e of [".js", ""]) {
      const idx = path.join(base, "index" + e);
      if (fs.existsSync(idx) && fs.statSync(idx).isFile()) return idx;
    }
  }
  throw new Error(`cannot resolve import "${spec}" from ${fromFile}`);
}

function visit(file) {
  const key = path.relative(ROOT, file).replaceAll("\\", "/");
  if (modules.has(key)) return key;
  modules.set(key, null); // cycle guard
  let code = fs.readFileSync(file, "utf8");

  // 0) strip side-effect CSS imports
  code = code.replace(/^[ \t]*import\s+["'][^"']*\.css["']\s*;?[^\n]*$/gm, "");

  // 1) collect & remove ALL import statements (dedupe dep declarations)
  const importClauses = [];
  code = code.replace(/^[ \t]*import\s+([\s\S]*?)\s+from\s+["']([^"']+)["'];?[^\n]*$/gm, (full, clause, spec) => {
    importClauses.push({ clause: clause.trim(), spec });
    return "";
  });

  const depVars = new Map();
  const bindings = [];
  for (const { clause, spec } of importClauses) {
    const dep = resolveSpec(file, spec);
    const depKey = dep.startsWith("virtual/") ? dep : visit(dep);
    if (!depVars.has(depKey)) depVars.set(depKey, "m_" + depKey.replace(/[^a-zA-Z0-9]/g, "_"));
    const depVar = depVars.get(depKey);
    const c = clause;
    if (!c) continue;
    const nsMatch = c.match(/\*\s+as\s+([A-Za-z_$][\w$]*)/);
    const defMatch = c.match(/(?:^|[,{\s])default(?:\s+as\s+([A-Za-z_$][\w$]*))?(?=$|[\s,}])/);
    if (!nsMatch && defMatch) {
      bindings.push(`const ${defMatch[1] || "default"} = ${depVar}.default !== undefined ? ${depVar}.default : ${depVar};`);
    }
    if (nsMatch) bindings.push(`const ${nsMatch[1]} = ${depVar};`);
    const braceIdx = c.indexOf("{");
    if (braceIdx >= 0) {
      const inner = c.slice(braceIdx + 1, c.lastIndexOf("}"));
      for (const part of inner.split(",")) {
        const p = part.trim();
        if (!p || /^default(\s+as\s+[\w$]+)?$/.test(p)) continue;
        const a = p.match(/^([A-Za-z_$][\w$]*)(?:\s+as\s+([A-Za-z_$][\w$]*))?$/);
        if (a) bindings.push(`const ${a[2] || a[1]} = ${depVar}.${a[1]};`);
      }
    } else if (!nsMatch && !defMatch) {
      const a = c.match(/^([A-Za-z_$][\w$]*)$/);
      if (a) bindings.push(`const ${a[1]} = ${depVar}.default !== undefined ? ${depVar}.default : ${depVar};`);
    }
  }

  const prelude = [...depVars.entries()].map(([k, v]) => `const ${v} = __req(${JSON.stringify(k)});`).join("\n");
  code = (prelude ? prelude + "\n" : "") + bindings.join("\n") + (bindings.length ? "\n" : "") + code;

  // 2) collect exported names before stripping
  const exportedNames = [];
  for (const m of code.matchAll(/export\s+(?:async\s+)?(?:function|class|const|let|var)\s+([A-Za-z_$][\w$]*)/g)) {
    exportedNames.push(m[1]);
  }
  const exportLists = [];
  code = code.replace(/export\s*\{([^}]*)\}\s*;?/g, (_, inner) => {
    for (const part of inner.split(",")) {
      const p = part.trim();
      if (!p) continue;
      const a = p.match(/^([A-Za-z_$][\w$]*)(?:\s+as\s+([A-Za-z_$][\w$]*))?$/);
      if (a) exportLists.push([a[1], a[2] || a[1]]);
    }
    return "";
  });

  // 3) strip export keyword prefixes
  code = code.replace(/export\s+(?=(?:async\s+)?(?:function|class|const|let|var)\b)/g, "");
  code = code.replace(/export\s+default\s+/g, "__exports.default = ");

  // 4) append export bindings
  let tail = "";
  for (const n of exportedNames) tail += `\n__exports[${JSON.stringify(n)}] = ${n};`;
  for (const [local, pub] of exportLists) tail += `\n__exports[${JSON.stringify(pub)}] = ${local};`;

  if (/\bexport\s+(?!default\b)/.test(code)) {
    const line = code.split("\n").findIndex((l) => /\bexport\s+(?!default\b)/.test(l));
    throw new Error(`unhandled export syntax in ${file} (line ${line + 1})`);
  }

  modules.set(key, {
    loaded: false, exports: {}, isCjs: false,
    factory: new Function("__req", `var __exports = {};\n${code}\n${tail}\nreturn __exports;`),
  });
  return key;
}

visit(path.join(TSBUILD, "main.js"));

// ── Assemble bundle ──────────────────────────────────────────────────────────
console.log("[build] bundling…");
let bundle = `var __modules = Object.create(null);\n`;
bundle += `var process = { env: { NODE_ENV: "production" } };\n`;
bundle += `function __req(key){ var m = __modules[key]; if (m === null) throw new Error("circular import: " + key); if (!m.loaded) { m.loaded = true; m.exports = m.factory(__req); if (m.isCjs && m.exports && typeof m.exports === "object" && m.exports.default === undefined) { m.exports.default = m.exports; } } return m.exports; }\n`;
for (const [key, m] of modules) {
  if (!m) continue;
  const body = m.factory.toString().replace(/^function(?:\s+\w+)?\s*\(/, "function(");
  bundle += `__modules[${JSON.stringify(key)}] = { loaded: false, exports: {}, isCjs: ${m.isCjs ? "true" : "false"}, factory: ${body} };\n`;
}
bundle += `__req(${JSON.stringify(ENTRY)});\n`;

// ── Emit dist ────────────────────────────────────────────────────────────────
fs.rmSync(DIST, { recursive: true, force: true });
fs.mkdirSync(path.join(DIST, "assets"), { recursive: true });
fs.writeFileSync(APP_OUT, bundle);
fs.writeFileSync(
  path.join(DIST, "index.html"),
  fs.readFileSync(path.join(ROOT, "index.html"), "utf8").replace(
    '<script type="module" src="./src/main.tsx"></script>',
    '<script src="./assets/app.js" defer></script>'
  )
);
fs.cpSync(PUB, DIST, { recursive: true });

let total = 0;
const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).forEach((e) => {
  const p = path.join(d, e.name);
  if (e.isDirectory()) walk(p); else total += fs.statSync(p).size;
});
walk(DIST);
console.log(`[build] dist ready — ${modules.size} modules, ${(total / 1024).toFixed(0)} KB total`);

if (smoke) {
  fs.writeFileSync(
    path.join(DIST, "smoke.mjs"),
    [
      "import fs from 'node:fs';",
      "import path from 'node:path';",
      "import url from 'node:url';",
      "const DIST = path.dirname(url.fileURLToPath(import.meta.url));",
      "const app = fs.readFileSync(path.join(DIST, 'assets', 'app.js'), 'utf8');",
      "const html = fs.readFileSync(path.join(DIST, 'index.html'), 'utf8');",
      "const checks = [",
      "  ['bundle has entry', app.includes('__req(') ],",
      "  ['jsx runtime bundled', app.includes('react-jsx-runtime')],",
      "  ['production react bundled', app.includes('react.production.min')],",
      "  ['production process stub precedes modules', app.indexOf('NODE_ENV') > -1 && app.indexOf('NODE_ENV') < 220],",
      "  ['no external scripts in html', !/<script[^>]+src=[\"']https?:/i.test(html)],",
      "  ['no leftover import-from statements', !/^\\s*import\\s+[^;]*from\\s*[\"']\\./m.test(app)],",
      "  ['manifest exists', fs.existsSync(path.join(DIST, 'manifest.webmanifest'))],",
      "  ['icon svg exists', fs.existsSync(path.join(DIST, 'assets', 'icons', 'icon.svg'))],",
      "  ['icon 192 exists', fs.existsSync(path.join(DIST, 'assets', 'icons', 'icon-192.png'))],",
      "  ['icon 512 exists', fs.existsSync(path.join(DIST, 'assets', 'icons', 'icon-512.png'))],",
      "  ['seed registry present', app.includes('biz-ahmei') || app.includes('Ah Mei')],",
      "  ['assistant present', app.includes('LocalLoop assistant')],",
      "  ['admin console present', app.includes('Verification queue')],",
      "  ['map renderer present', app.includes('Illustrated demo map')],",
      "  ['entry html references app.js', html.includes('./assets/app.js')],",
      "];",
      "let fail = 0;",
      "for (const [name, ok] of checks) { console.log((ok ? 'PASS' : 'FAIL') + ' — ' + name); if (!ok) fail++; }",
      "if (fail) process.exit(1);",
      "console.log('smoke OK');",
    ].join("\n")
  );
}
