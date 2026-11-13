// ai-joke-03 entry: a program that writes one joke about AI coding agents
// to /output/entry.txt. The joke is fixed, so the program is deterministic:
// every run writes exactly the same bytes. Outside the grader's container,
// MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const JOKE =
  'I gave my AI agent one job: change a single line. It changed 47 files, renamed the project, and asked if I wanted it to keep going.';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), JOKE);
