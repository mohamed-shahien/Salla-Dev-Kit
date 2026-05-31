# Salla-Dev-Kit

Spec-driven workflow kit for professional Salla Twilight theme development.

This repository root is the `salla-dev-kit` project. Do not create a nested `salla-dev-kit/` folder inside it.

## Core Workflow

Use this sequence for features, components, audits, and refactors:

1. `specify` - turn the request into a concrete specification.
2. `clarify` - resolve blocking ambiguity and record assumptions.
3. `plan` - map the spec to exact files, schema, Twig, CSS, JS, and validation.
4. `tasks` - split the plan into small verifiable tasks.
5. `analyze` - inspect the current codebase and confirm the active theme baseline.
6. `implement` - edit the correct source files.
7. `review` - perform a technical review before delivery.

Small edits can compress the artifacts, but the thinking order must remain the same.

## Claude Code Usage

Claude Code commands live in `.claude/commands/`.

Core commands:

```text
/salla.specify
/salla.clarify
/salla.plan
/salla.tasks
/salla.analyze
/salla.implement
/salla.review
```

Specialized commands:

```text
/salla.component
/salla.schema
/salla.refactor
/salla.audit.performance
/salla.audit.seo
/salla.audit.accessibility
```

Legacy aliases are also present:

```text
/salla-audit
/salla-component
/salla-fields
/salla-js
/salla-review
```

Every command includes:

- Purpose
- When to use
- Files to read first
- Step-by-step workflow
- Output format
- Validation checklist
- Stop/warn conditions
- Example usage

## Install With npx

After publishing to npm, install the workflow kit into any Salla theme project with:

```bash
npx salla-dev-kit init .
```

`init` only injects Salla-Dev-Kit workflow files. It does not scaffold a Salla theme and does not copy package files such as `bin/`, `kit/`, `package.json`, or this package `README.md` into the target project.

Initialize a new target folder:

```bash
npx salla-dev-kit init my-salla-theme
```

Choose agent support:

```bash
npx salla-dev-kit init . --agent codex
npx salla-dev-kit init . --agent claude
npx salla-dev-kit init . --agent both
```

Install examples only when needed:

```bash
npx salla-dev-kit init . --with-examples
```

Run diagnostics:

```bash
npx salla-dev-kit doctor .
```

Local package test before publishing:

```bash
node bin/salla-dev-kit.js --help
node bin/salla-dev-kit.js --version
node bin/salla-dev-kit.js init ./tmp-test --agent both
node bin/salla-dev-kit.js init ./tmp-test --agent both --with-examples
node bin/salla-dev-kit.js doctor ./tmp-test
```

## Using Salla-Dev-Kit with Codex

Codex may not expose slash commands natively. In Codex, the `AGENTS.md` command router must interpret command text and execute the matching file from `commands/`.

Examples:

```text
/salla.specify Build a luxury perfume Salla theme
```

```text
salla.plan
```

```text
run salla.tasks
```

```text
execute salla.review
```

Codex execution rule:

1. Match the command name to `commands/<name>.md`.
2. Read the command file.
3. Execute its workflow with the current project context.
4. Create expected artifact paths when enough context exists.
5. Ask only if blocked.
6. Produce the command output directly.

## Command Sources

- `commands/` is the canonical command source shared by Codex and other agents.
- `.claude/commands/` remains supported as the Claude Code adapter.
- `kit/` is the distribution payload used by the CLI. `init` copies only workflow files into target projects: `AGENTS.md`, `.salla/`, `commands/`, `references/`, `.claude/commands/` when requested, and `examples/` only with `--with-examples`.

## Repository Structure

```text
.
|-- README.md
|-- AGENTS.md
|-- .salla/
|   |-- templates/
|   |-- workflow.md
|   |-- quality-gates.md
|   |-- component-checklist.md
|   |-- component-blueprint.md
|   `-- naming-conventions.md
|-- .claude/
|   `-- commands/
|-- bin/
|   `-- salla-dev-kit.js
|-- commands/
|-- kit/
|-- references/
|-- examples/
|   `-- full-theme-workflow/
`-- theme-raed-master/
    `-- theme-raed-master/
```

## Templates

Artifacts are generated from `.salla/templates/`:

- `spec-template.md`
- `clarify-template.md`
- `plan-template.md`
- `tasks-template.md`
- `analyze-template.md`
- `audit-template.md`
- `component-template.md`
- `schema-template.md`
- `review-template.md`
- `implementation-report-template.md`

## References

Important references in `references/`:

- Twilight rules: `salla-twilight-rules.md`
- Schema rules: `salla-schema-rules.md`
- Compact schema catalog: `salla_schema_reference.json`
- Full schema catalog: `salla_schema_reference_full.json`
- Twig rules: `salla-twig-rules.md`
- CSS rules: `salla-css-rules.md`
- JS rules: `salla-js-rules.md`
- Performance rules: `salla-performance-rules.md`
- SEO rules: `salla-seo-rules.md`
- Accessibility rules: `salla-accessibility-rules.md`
- Security rules: `salla-security-rules.md`
- Technical review rules: `salla-technical-review-rules.md`
- Anti-patterns: `salla-anti-patterns.md`
- File structure and Theme Raed baseline: `salla-file-structure.md`

## Theme Raed Baseline

The current attached Theme Raed baseline is actually nested here:

```text
theme-raed-master/theme-raed-master/
```

That nested path is present on disk and is not just a documentation mistake.

Key facts extracted from it:

- Source CSS is under `src/assets/styles/`.
- `src/assets/styles/app.scss` is the main SCSS entry.
- Home component styles are in `src/assets/styles/04-components/home-blocks.scss`.
- Home page JS is `src/assets/js/home.js`.
- Existing home JS uses `BasePage.initiateWhenReady(['index'])`.
- `webpack.config.js` builds entries such as `app`, `home`, `product`, and `checkout`.
- `public/` is build output and should not be manually edited.
- Existing component paths include `home.enhanced-slider`, `home.main-links`, and `home.brands`.

## Strict Salla Rules

- `twilight.json` is the theme control surface.
- Only `settings` and `components` should be edited unless the current theme already proves another root-level key is valid.
- Never invent a component `key` or `path`; new components must be created in Salla Partners first.
- Global/shared controls belong in `settings`.
- Component-instance controls belong in `components[].fields`.
- New Salla-Dev-Kit component Twig starts with `{% set c = component %}`.
- Do not write `<script>` or `<style>` inside component Twig.
- Read settings with `theme.settings.get('id', fallback)`.
- Read component fields with `c.field_id`.
- Use `multilanguage: true` for merchant-facing and customer-facing text fields when supported.
- Put component CSS in the correct source stylesheet with a component comment.
- Put component JS in a separate service when needed and load it conditionally; prefer lazy import for new Salla-Dev-Kit components.
- Performance, security, accessibility, and SEO gates are required before delivery.

## Example Workflow

See:

```text
examples/full-theme-workflow/
|-- spec.md
|-- clarify.md
|-- plan.md
|-- tasks.md
|-- analyze.md
|-- implementation-report.md
`-- review.md
```

## Delivery Report

Every delivery should include:

- Files created and modified.
- Schema changes in `settings` and `fields`.
- Twig/CSS/JS changes.
- Validation commands and results.
- Salla Partners dependencies or limitations.
