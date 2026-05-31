# Salla-Dev-Kit

**Spec-driven workflow kit for professional Salla Twilight theme development.**
عدة عمل احترافية لتطوير ثيمات سلة (Twilight) بمنهجية المواصفات أولاً.

Salla-Dev-Kit drops a complete, opinionated workflow into any Salla theme so your
AI agent (Claude Code or Codex) stops guessing and starts building like a senior
Salla developer. It ships the rules, schema references, templates, and slash
commands that turn a one-line request into a real spec, plan, implementation, and
technical review.

It follows the same spec-driven philosophy as [spec-kit](https://github.com/github/spec-kit):
you don't start with code — you go `specify → clarify → plan → tasks → analyze →
implement → review`.

---

## Why use it

- **Saves real time on theme work.** The agent already knows Salla's `twilight.json`
  rules, `settings` vs component `fields`, Twig conventions (`{% set c = component %}`,
  `theme.settings.get(...)`), and the Theme Raed file layout — so you skip the
  back-and-forth and the rookie mistakes.
- **Bakes in performance & template quality.** Built-in rules cover lazy/conditional
  JS, image dimensions, slider media, scoped CSS, and `public/` build output — the
  exact issues that hurt theme performance and review scores.
- **Produces professional components.** A single `/salla.component` command generates
  a full contract: schema, Twig, scoped CSS, conditional JS, validation checklist, and
  a delivery report.
- **Enforces quality gates** for performance, SEO, accessibility, and security before
  delivery.

---

## Quick start (30 seconds)

Inside your Salla theme project:

```bash
npx salla-dev-kit init .
```

That's it. Open the project in Claude Code or Codex and run your first command:

```text
/salla.specify Build a luxury perfume home page with a hero slider and brand strip
```

Then walk the workflow: `/salla.plan` → `/salla.tasks` → `/salla.implement` → `/salla.review`.

Verify the install at any time:

```bash
npx salla-dev-kit doctor .
```

---

## Install options

```bash
# Scaffold into a new folder
npx salla-dev-kit init my-salla-theme

# Choose which agent to set up (default: both)
npx salla-dev-kit init . --agent claude
npx salla-dev-kit init . --agent codex
npx salla-dev-kit init . --agent both

# Include the worked example workflow
npx salla-dev-kit init . --with-examples

# Overwrite existing kit files
npx salla-dev-kit init . --force
```

`init` only injects Salla-Dev-Kit workflow files (`AGENTS.md`, `.salla/`, `commands/`,
`references/`, `.claude/commands/` when relevant, and `examples/` with `--with-examples`).
It never scaffolds a Salla theme and never copies package internals into your project.

---

## The workflow

| Step | Command | What it does |
|------|---------|--------------|
| 1 | `specify` | Turn the request into a concrete specification |
| 2 | `clarify` | Resolve blocking ambiguity, record safe assumptions |
| 3 | `plan` | Map the spec to exact files, schema, Twig, CSS, JS |
| 4 | `tasks` | Split the plan into small, verifiable tasks |
| 5 | `analyze` | Inspect the current codebase and confirm the active theme baseline |
| 6 | `implement` | Edit the correct source files only |
| 7 | `review` | Technical review against Salla rules before delivery |

Small edits can compress the artifacts, but the thinking order stays the same.

---

## Commands

**Core**

```text
/salla.specify   /salla.clarify   /salla.plan   /salla.tasks
/salla.analyze   /salla.implement   /salla.review
```

**Specialized**

```text
/salla.component            Full component contract (schema + Twig + CSS + JS)
/salla.schema               Design twilight.json settings & fields
/salla.refactor             Refactor theme code while preserving behavior
/salla.audit.performance    Performance audit
/salla.audit.seo            SEO audit
/salla.audit.accessibility  Accessibility audit
```

Every command file documents its purpose, when to use it, the files to read first,
a step-by-step workflow, the output format, a validation checklist, stop/warn
conditions, and an example.

### Using it with Claude Code

Slash commands live in `.claude/commands/` and are picked up automatically. Just type
`/salla.specify`, `/salla.plan`, etc.

### Using it with Codex

Codex may not expose slash commands natively, so `AGENTS.md` includes a **command
router**. Write the command in any of these forms and Codex treats it as a
Salla-Dev-Kit command (not shell):

```text
/salla.plan
salla.plan
run salla.tasks
execute salla.review
```

---

## What gets installed

```text
your-theme/
├── AGENTS.md                 # rules + Codex command router
├── .salla/                   # workflow, templates, quality gates, checklists
│   └── templates/
├── .claude/commands/         # Claude Code slash commands (with --agent claude|both)
├── commands/                 # shared command source (Codex / other agents)
├── references/               # Salla rules + schema catalogs
└── examples/                 # worked end-to-end example (with --with-examples)
```

### References included

Twilight, schema, Twig, CSS, JS, performance, SEO, accessibility, security, and
technical-review rules, plus anti-patterns, the Theme Raed file structure, the theme
constitution, and two `twilight.json` schema catalogs
(`salla_schema_reference.json` compact, `salla_schema_reference_full.json` expanded).

---

## Core Salla rules (enforced by the kit)

- `twilight.json` is the theme control surface — edit only `settings` and `components`.
- Never invent a component `key` or `path`; new components are created in Salla
  Partners first.
- Global controls live in `settings`; component-instance controls live in
  `components[].fields`.
- New component Twig starts with `{% set c = component %}`; no `<script>` or `<style>`
  inside Twig.
- Read settings with `theme.settings.get('id', fallback)` and fields with `c.field_id`.
- Component CSS goes in the correct source stylesheet, scoped, with a component comment.
- Component JS goes in a separate service, loaded conditionally / lazily.
- Performance, security, accessibility, and SEO gates are required before delivery.

---

## Contributing

Working on the kit itself? See [CONTRIBUTING.md](./CONTRIBUTING.md) for the
single-source-of-truth layout, the `build:kit` step, and local testing.

## License

MIT
