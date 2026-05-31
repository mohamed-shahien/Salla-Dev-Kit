# AGENTS.md

Mandatory instructions for any AI agent or developer working in **this** repository.

> This file governs development of the **Salla-Dev-Kit npm package itself**.
> It is **not** the file that ships to users. The agent rules that get installed
> into a user's Salla theme live in `templates/AGENTS.target.md` and are emitted
> as `kit/AGENTS.md` by the build. Do not confuse the two.

## Project Identity

- This repository is the `salla-dev-kit` npm package.
- Do **not** create a nested `salla-dev-kit/` directory inside it.
- It ships a spec-driven Salla theme workflow (commands, references, templates) into
  target themes via `npx salla-dev-kit init`.
- See `README.md` for the user-facing product and `CONTRIBUTING.md` for the full
  development guide.

## Single Source Of Truth

Edit only these committed sources:

- `.claude/commands/` — slash commands. Canonical superset: `salla.*` (shared) and
  `salla-*` (legacy, Claude-only).
- `.salla/` — workflow, templates, quality gates, checklists.
- `references/` — Salla rules and `twilight.json` schema catalogs.
- `examples/` — worked end-to-end example.
- `templates/` — `gitignore.template`, `gitattributes.template`, and
  `AGENTS.target.md` (the agent rules shipped into target themes).
- `README.md`, `bin/`, `scripts/`.

## Generated Artifacts — Never Edit By Hand

These are produced by `scripts/build-kit.mjs` and are git-ignored:

- `commands/` — shared (Codex/CLI) command set generated from `.claude/commands/`
  (drops the legacy `salla-*` aliases) plus a README.
- `kit/` — the npm distribution payload, including `kit/AGENTS.md` built from
  `templates/AGENTS.target.md`.

After editing any source, run:

```bash
npm run build:kit
```

`prepack` runs the build automatically, so `npm publish` / `npm pack` always ship a
fresh `kit/`.

## Adding Or Changing A Command

1. Edit (or add) the file in `.claude/commands/`.
   - Shared commands are `salla.<name>.md`; legacy Claude-only aliases are `salla-<name>.md`.
2. Run `npm run build:kit`.
3. If you added a shared command, list it in `templates/AGENTS.target.md` (command
   router) and in the `README.md` commands table.

## Local Testing Before Publishing

```bash
npm run build:kit
npm pack --dry-run
node bin/salla-dev-kit.js init ./tmp-test --agent both --with-examples
node bin/salla-dev-kit.js doctor ./tmp-test
```

`tmp-test/` is git-ignored. Verify the shipped `kit/AGENTS.md` describes a Salla theme
target project, not this package.

## Dogfooding

This repository keeps committed copies of `.claude/commands/`, `.salla/`, and
`references/` so the kit's own slash commands work while developing it. When you run a
`salla.*` command here, you are testing the kit — treat any generated theme artifacts
as test output, not as repository deliverables.
