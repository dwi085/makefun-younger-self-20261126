// One Line to Your Younger Self — make.fun entry
// Writes a single line, at most 200 characters, to /output/entry.txt.
// The line is fixed and deterministic: every run produces identical bytes.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Kid, she leaves, the job bores you, and the life you want starts the day you stop asking strangers for permission to live it.";

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

function main(): void {
  if (LINE.length < 1 || LINE.length > 200) {
    throw new Error(`line must be 1-200 characters, got ${LINE.length}`);
  }
  if (LINE.trim().length === 0) {
    throw new Error("line must not be only whitespace");
  }
  // Create /output if missing; never delete it (the grader owns it).
  mkdirSync(OUT_DIR, { recursive: true });
  writeFileSync(OUT_FILE, LINE, "utf8");
  console.log(`wrote ${LINE.length} characters to ${OUT_FILE}`);
}

main();
