# Contributing to Salla-Dev-Kit

This document is for people working on the kit itself. If you just want to *use*
Salla-Dev-Kit in a theme, read [README.md](./README.md) instead.

## Repository layout

This repository is the `salla-dev-kit` package. Do **not** create a nested
`salla-dev-kit/` folder inside it.

### Single source of truth (committed, hand-edited)

Edit these — they are the only place content lives:

```text
.claude/commands/   Slash commands. The canonical, superset set:
                    salla.* core/specialized + salla-* legacy Claude aliases.
.salla/             Workflow, templates, quality gates, checklists.
references/         Salla rules and the twilight.json schema catalogs.
examples/           Worked end-to-end example workflow.
AGENTS.md           Agent rules + the Codex command router.
templates/          gitignore.template and gitattributes.template shipped to targets.
README.md           The npm front page.
bin/                The CLI.
scripts/            The build script.
```

### Generated (git-ignored — never edit by hand)

```text
commands/   The shared (Codex/CLI) command set: every `salla.*` file from
            .claude/commands/, minus the legacy `salla-*` aliases, plus a README.
kit/        The npm distribution payload that `init` copies into target themes.
```

Both are produced by `scripts/build-kit.mjs` and listed in `.gitignore`.

## The build step

After editing **any** source file, regenerate the artifacts:

```bash
npm run build:kit   # or: npm run dev
```

This is also wired to `prepack`, so `npm publish` / `npm pack` always ship a fresh
`kit/`. Because `kit/` is git-ignored, it won't exist on a fresh clone until you run
the build once — run `npm run build:kit` before testing the CLI locally.

### Why generate instead of commit two copies?

Previously every file existed three times (root, `kit/`, and `.claude` vs `commands`),
all kept in sync by hand. Now there is one editable copy; `commands/` and `kit/` are
derived. Edit once, build, done.

## Local testing before publishing

```bash
npm run build:kit
node bin/salla-dev-kit.js --help
node bin/salla-dev-kit.js --version
node bin/salla-dev-kit.js init ./tmp-test --agent both --with-examples
node bin/salla-dev-kit.js doctor ./tmp-test
rm -rf tmp-test
```

`tmp-test/` is git-ignored.

## Adding or changing a command

1. Edit (or add) the file in `.claude/commands/`.
   - Core/specialized commands are named `salla.<name>.md` and are shared with Codex.
   - Legacy Claude-only aliases are named `salla-<name>.md` and stay Claude-only.
2. Run `npm run build:kit`.
3. If you added a shared command, also list it in the `AGENTS.md` command router and
   the README commands table.

## Theme Raed baseline

The Theme Raed baseline, when attached, lives at:

```text
theme-raed-master/theme-raed-master/
```

It is git-ignored. Treat it as the reference theme root unless the user chooses
another. Key facts (source CSS under `src/assets/styles/`, `home.js` page entry,
webpack entries, `public/` is build output) are documented in
`references/salla-file-structure.md` and `AGENTS.md`.
