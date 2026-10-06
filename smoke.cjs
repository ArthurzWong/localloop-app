const { execFileSync } = require("node:child_process");
execFileSync(process.execPath, ["dist/smoke.mjs"], { stdio: "inherit" });
