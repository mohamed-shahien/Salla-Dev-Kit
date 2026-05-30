---
description: Legacy alias for Salla component JavaScript work
argument-hint: "<component JS request>"
---

# Purpose

Add or review Salla component JavaScript safely. Prefer `/salla.component` or `/salla.implement` when JS is part of a full feature.

Input:

```text
$ARGUMENTS
```

# When to use

Use when the task is specifically about JavaScript behavior for a Salla component or page.

# Files to read first

1. `AGENTS.md`
2. `references/salla-js-rules.md`
3. `references/salla-performance-rules.md`
4. `references/salla-file-structure.md`
5. `src/assets/js/home.js` or relevant JS entry.
6. Matching Twig file for selectors.

# Step-by-step workflow

1. Identify page and component scope.
2. Read the Twig root class and selectors.
3. Determine whether the active baseline uses `BasePage` or `lazyImportWhenExists`.
4. Add service/conditional loading when supported or intentionally introduced.
5. Guard missing elements.
6. Guard double initialization.
7. Validate with build and behavior notes.

# Output format

```text
# JS Report
## Files Changed
## Entry Point
## Selector Contract
## Initialization Model
## Validation
## Risks
```

# Validation checklist

- [ ] No inline JS in Twig.
- [ ] JS runs only where needed.
- [ ] Selector exists.
- [ ] Multiple instances work.
- [ ] Build/check result documented.

# Stop/warn conditions

- Stop if requested behavior needs a library installation without approval.
- Warn if Theme Raed `BasePage` is being replaced.
- Warn if JS is added globally for one component.

# Example usage

```text
/salla-js Add keyboard support to FAQ tabs.
```
