---
description: Implement a Salla feature from tasks and plan
argument-hint: "<tasks path or feature scope>"
---

# Purpose

Implement approved Salla tasks end to end, respecting the spec-kit workflow and all Salla-Dev-Kit rules.

Input:

```text
$ARGUMENTS
```

# When to use

Use this command after `salla.specify`, `salla.clarify`, `salla.plan`, `salla.tasks`, and `salla.analyze` have produced enough context.

# Files to read first

1. `AGENTS.md`
2. `.salla/workflow.md`
3. `.salla/templates/implementation-report-template.md`
4. Target `tasks.md`
5. Target `plan.md`
6. Target `spec.md`
7. `references/salla-twilight-rules.md`
8. `references/salla-twig-rules.md`
9. `references/salla-css-rules.md`
10. `references/salla-js-rules.md`
11. Target implementation files.

# Step-by-step workflow

1. Read tasks, plan, and spec.
2. Confirm no blocking conditions remain.
3. Check git status and avoid reverting unrelated changes.
4. Execute tasks in order.
5. For schema edits, update only allowed `twilight.json` sections.
6. For Twig, start components with `{% set c = component %}` and avoid inline scripts/styles.
7. For CSS, edit the correct source SCSS/CSS file and add the required component comment.
8. For JS, create service files and conditional loaders when required by the plan.
9. Run validation commands from the plan/package scripts.
10. Fix issues introduced by the implementation.
11. Produce an implementation report using the template.

# Output format

```text
# Implementation Report
## Summary
## Files Created
## Files Modified
## Schema Changes
## Twig Changes
## CSS Changes
## JavaScript Changes
## Usage
## Validation
## Warnings
```

# Validation checklist

- [ ] Tasks completed or explicitly deferred with reason.
- [ ] No unrelated files changed.
- [ ] Twig has no inline `script` or `style`.
- [ ] CSS is source CSS/SCSS, not generated `public/app.css`.
- [ ] JS is loaded conditionally where required.
- [ ] Build or relevant validation was run, or inability is documented.

# Stop/warn conditions

- Stop if a new component lacks Salla Partners `key` and `path`.
- Stop if tasks require destructive git or filesystem operations not requested by the user.
- Warn if the existing baseline uses Theme Raed `BasePage` and the plan asks for a different JS model.
- Warn if build dependencies are missing and installation is required.

# Example usage

```text
/salla.implement specs/hero-video/tasks.md
```
