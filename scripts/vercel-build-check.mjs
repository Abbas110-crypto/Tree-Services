import { existsSync } from "node:fs";
import { spawnSync } from "node:child_process";

const result = spawnSync("npx", ["next", "build"], {
  stdio: "inherit",
  shell: process.platform === "win32",
});

if (result.status !== 0) {
  process.exit(result.status ?? 1);
}

if (!existsSync(".next")) {
  console.error('Build finished, but the ".next" directory was not created.');
  console.error("Check that Vercel is deploying the folder containing package.json.");
  process.exit(1);
}

console.log('Verified Next.js output directory: ".next"');
