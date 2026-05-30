---
description: Refactor Salla theme code while preserving behavior
argument-hint: "<scope or files>"
---

# Purpose

Improve structure, duplication, or maintainability in a Salla theme without changing merchant-facing behavior unless explicitly requested.

Input:

```text
$ARGUMENTS
```

# When to use

Use this command when:

- Twig, CSS, or JS is duplicated.
- A component needs cleanup before extension.
- Generated assets or global files have accidental manual edits.
- Existing code should be aligned with Salla-Dev-Kit conventions.

# Files to read first

1. `AGENTS.md`
2. `references/salla-technical-review-rules.md`
3. `references/salla-anti-patterns.md`
4. Relevant Twig/CSS/JS files.
5. `twilight.json` if schema is involved.
6. `package.json` for validation commands.

# Step-by-step workflow

1. Define the refactor scope and expected unchanged behavior.
2. Inspect current code and note dependencies.
3. Identify safe, small refactor steps.
4. Avoid renaming schema IDs unless migration is planned.
5. Avoid broad CSS selector changes that affect unrelated components.
6. Preserve public API: classes, field IDs, and data attributes used by JS.
7. Implement in small edits.
8. Run validation.
9. Report before/after behavior and risks.

# Output format

```text
# Refactor Report
## Scope
## Behavior Preserved
## Files Modified
## Changes
## Validation
## Risks
```

# Validation checklist

- [ ] No behavior change unless requested.
- [ ] No unrelated files changed.
- [ ] Field IDs and component paths preserved.
- [ ] JS selectors still match Twig.
- [ ] CSS selectors remain scoped.
- [ ] Build or relevant check run.

# Stop/warn conditions

- Stop if requested refactor requires deleting user work.
- Stop if behavior change is unavoidable and not approved.
- Warn if tests/build are unavailable.
- Warn if generated `public/` files differ after source refactor.

# Example usage

```text
/salla.refactor Clean up repeated card markup in home custom testimonials without changing output.
```
