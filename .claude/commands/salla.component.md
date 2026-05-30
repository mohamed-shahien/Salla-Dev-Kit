---
description: Create or update a Salla component contract and implementation
argument-hint: "<component request, key/path if available>"
---

# Purpose

Create or update a Salla component using a complete component contract: schema, Twig, CSS, JS, validation, and report.

Input:

```text
$ARGUMENTS
```

# When to use

Use this command for a concrete component request, especially a home page component.

# Files to read first

1. `AGENTS.md`
2. `.salla/templates/component-template.md`
3. `references/salla-twilight-rules.md`
4. `references/salla-schema-rules.md`
5. `references/salla-twig-rules.md`
6. `references/salla-css-rules.md`
7. `references/salla-js-rules.md`
8. `references/salla-common-patterns.md`
9. Current `twilight.json`
10. Matching Twig/CSS/JS files if component exists.

# Step-by-step workflow

1. Determine whether the component is new or existing.
2. If new, require Salla Partners `key` and `path`; do not invent them.
3. Build a component contract from `.salla/templates/component-template.md`.
4. Decide global `settings` vs component `fields`.
5. Update `twilight.json` only where allowed.
6. Create/update Twig with `{% set c = component %}`.
7. Add CSS in the correct source file with required component comment.
8. Add JS only if needed and load it conditionally.
9. Validate and report.

# Output format

```text
# Component Report: <name>
## Contract
## Files Changed
## Settings
## Fields
## Twig
## CSS
## JS
## Validation
## Merchant Usage
```

# Validation checklist

- [ ] Component key/path are real or existing.
- [ ] Root class is stable.
- [ ] Fields have defaults and clear labels.
- [ ] Twig has fallbacks and empty state.
- [ ] CSS scoped under root class.
- [ ] JS selector matches root class.

# Stop/warn conditions

- Stop if a new component has no Salla Partners key/path.
- Warn if the request duplicates a shared setting as a field.
- Warn if component needs data unavailable in Salla storefront context.
- Warn if a helper include is assumed but not present in the repo.

# Example usage

```text
/salla.component Update existing home.brands component with logo shape and autoplay controls.
```
