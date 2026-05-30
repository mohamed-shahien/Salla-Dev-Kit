---
description: Create an implementation plan for a Salla feature
argument-hint: "<spec path or clarified feature>"
---

# Purpose

Create a concrete implementation plan that maps the spec to exact files, schema changes, Twig, CSS, JS, and validation steps.

Input:

```text
$ARGUMENTS
```

# When to use

Use this command after `salla.specify` and `salla.clarify`, before creating tasks or editing code.

# Files to read first

1. `AGENTS.md`
2. `.salla/templates/plan-template.md`
3. The target `spec.md`
4. The target `clarify.md`, if present
5. `references/salla-file-structure.md`
6. `references/salla-common-patterns.md`
7. `references/salla-twilight-rules.md`
8. `references/salla-twig-rules.md`
9. `references/salla-css-rules.md`
10. `references/salla-js-rules.md`
11. Current theme files needed to verify baseline.

# Step-by-step workflow

1. Read the spec and clarification.
2. Inspect the current theme structure. Do not assume paths from another project.
3. Identify whether the active baseline is Theme Raed style:
   - `src/assets/styles/app.scss`
   - `src/assets/styles/04-components/home-blocks.scss`
   - `src/assets/js/home.js` with `BasePage`
   - webpack entries writing to `public/`
4. Decide where every change belongs.
5. Define schema changes and mark any Salla Partners dependency.
6. Define Twig structure, root class, fallbacks, and helpers.
7. Define CSS strategy and required component comment.
8. Define JS strategy. Prefer conditional loading for new Salla-Dev-Kit work; preserve Theme Raed `BasePage` pattern when modifying existing Raed behavior unless the spec says otherwise.
9. Define validation commands from `package.json`.
10. Record risks and mitigation.
11. Produce or update `plan.md`.

# Output format

```text
# Implementation Plan: <feature>
## Plan Metadata
## Baseline Summary
## Architecture Decision
## Files To Read First
## Files To Change
## Data/Schema Plan
## Twig Plan
## CSS Plan
## JS Plan
## SEO Plan
## Accessibility Plan
## Performance Plan
## Validation Plan
## Risks
```

# Validation checklist

- [ ] Every planned file exists or is clearly marked as new.
- [ ] `public/` is not planned for manual edits unless explicitly justified.
- [ ] Schema plan separates `settings` and `fields`.
- [ ] Plan accounts for Theme Raed baseline if applicable.
- [ ] Validation commands come from actual `package.json`.

# Stop/warn conditions

- Stop if required spec is missing or contradictory.
- Stop if a new component needs a Salla-generated `key` and `path` that are unavailable.
- Warn if the plan requires changing global layout files for a component-only feature.
- Warn if the plan increases bundle size without lazy loading or justification.

# Example usage

```text
/salla.plan specs/hero-video/spec.md
```
