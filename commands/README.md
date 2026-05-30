# Salla-Dev-Kit Commands

`commands/` is the canonical command source for Salla-Dev-Kit.

It is shared by:

- Codex, through the command router in `AGENTS.md`.
- Claude Code, through the adapter files in `.claude/commands/`.

## How Codex Should Use This Directory

When the user writes a command-like message such as:

```text
/salla.specify Build a luxury perfume Salla theme
salla.plan
$salla.tasks
run salla.review
execute salla.audit.performance
```

Codex must treat it as a Salla-Dev-Kit command, not shell syntax.

Execution rule:

1. Match the command name to a file in `commands/`.
2. Read the command file.
3. Execute its workflow using the current project context.
4. Create the expected artifact path when the command implies an artifact and enough context exists.
5. Ask only if blocked.
6. Produce the command output directly.

## Canonical Command Files

- `salla.specify.md`
- `salla.clarify.md`
- `salla.plan.md`
- `salla.tasks.md`
- `salla.analyze.md`
- `salla.implement.md`
- `salla.component.md`
- `salla.schema.md`
- `salla.refactor.md`
- `salla.audit.performance.md`
- `salla.audit.seo.md`
- `salla.audit.accessibility.md`
- `salla.review.md`

## Adapter Policy

`.claude/commands/` remains supported for Claude Code. The canonical command behavior should be kept in sync with this directory.
