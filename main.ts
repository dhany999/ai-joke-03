// ai-joke-03 entry: a program that writes one joke about AI coding agents
// to /output/entry.txt. The joke is fixed, so the program is deterministic:
// every run writes exactly the same bytes. Outside the grader's container,
// MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// The joke must stay 1-280 characters (competition rule) and never change:
// the grader runs the program twice and both runs must write the same bytes.
const JOKE =
  'I gave my AI agent one job: change a single line. It changed 47 files, renamed the project, and asked if I wanted it to keep going.';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Write the joke to entry.txt inside dir, creating it if needed.
function writeEntry(dir: string, text: string): void {
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, 'entry.txt'), text);
}

writeEntry(OUTPUT_DIR, JOKE);
