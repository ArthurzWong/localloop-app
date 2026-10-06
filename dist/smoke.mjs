import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';
const DIST = path.dirname(url.fileURLToPath(import.meta.url));
const app = fs.readFileSync(path.join(DIST, 'assets', 'app.js'), 'utf8');
const html = fs.readFileSync(path.join(DIST, 'index.html'), 'utf8');
const checks = [
  ['bundle has entry', app.includes('__req(') ],
  ['jsx runtime bundled', app.includes('react-jsx-runtime')],
  ['production react bundled', app.includes('react.production.min')],
  ['production process stub precedes modules', app.indexOf('NODE_ENV') > -1 && app.indexOf('NODE_ENV') < 220],
  ['no external scripts in html', !/<script[^>]+src=["']https?:/i.test(html)],
  ['no leftover import-from statements', !/^\s*import\s+[^;]*from\s*["']\./m.test(app)],
  ['manifest exists', fs.existsSync(path.join(DIST, 'manifest.webmanifest'))],
  ['icon svg exists', fs.existsSync(path.join(DIST, 'assets', 'icons', 'icon.svg'))],
  ['icon 192 exists', fs.existsSync(path.join(DIST, 'assets', 'icons', 'icon-192.png'))],
  ['icon 512 exists', fs.existsSync(path.join(DIST, 'assets', 'icons', 'icon-512.png'))],
  ['seed registry present', app.includes('biz-ahmei') || app.includes('Ah Mei')],
  ['assistant present', app.includes('LocalLoop assistant')],
  ['admin console present', app.includes('Verification queue')],
  ['map renderer present', app.includes('Illustrated demo map')],
  ['entry html references app.js', html.includes('./assets/app.js')],
];
let fail = 0;
for (const [name, ok] of checks) { console.log((ok ? 'PASS' : 'FAIL') + ' — ' + name); if (!ok) fail++; }
if (fail) process.exit(1);
console.log('smoke OK');