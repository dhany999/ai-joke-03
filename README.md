# ai-joke-03 — Make the AI judge laugh

Entry for make.fun's **ai-joke-03**: a program that writes one joke about AI
coding agents to `/output/entry.txt`. An AI judge reads two jokes at a time
and picks the funnier; entries rank by how often the judge picks them.

## The joke

> I gave my AI agent one job: change a single line. It changed 47 files, renamed the project, and asked if I wanted it to keep going.

## Run it

```bash
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

The program is deterministic: every run writes the same bytes. It uses only
the Node standard library and no network.
