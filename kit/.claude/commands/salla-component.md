---
description: Legacy alias for Salla component implementation
argument-hint: "<component request>"
---

# Purpose

Create or update a Salla component. Prefer `/salla.component` for new work; this alias remains for compatibility.

Input:

```text
$ARGUMENTS
```

# When to use

Use when a user calls the older hyphen command name for component work.

# Files to read first

1. `AGENTS.md`
2. `.salla/templates/component-template.md`
3. `references/salla-twilight-rules.md`
4. `references/salla-schema-rules.md`
5. `references/salla-twig-rules.md`
6. `references/salla-css-rules.md`
7. `references/salla-js-rules.md`
8. Existing component files.

# Step-by-step workflow

1. Determine whether the component is new or existing.
2. If new, require Salla Partners `key` and `path`.
3. Decide `settings` vs `fields`.
4. Update schema only in allowed areas.
5. Create/update Twig with safe fallbacks and no inline script/style.
6. Add source CSS with a component comment.
7. Add JS only when required and load it conditionally where supported.
8. Validate and report.

# Output format

```text
# Component Report
## Files Changed
## Settings
## Fields
## Twig
## CSS
## JS
## Validation
## Usage
```

# Validation checklist

- [ ] Real component key/path or existing component.
- [ ] Field IDs match Twig reads.
- [ ] CSS is source CSS/SCSS.
- [ ] JS selector matches Twig.
- [ ] Build/check status documented.

# Stop/warn conditions

- Stop if a new component lacks Salla Partners key/path.
- Warn if a global setting is duplicated as a component field.
- Warn if helper includes are assumed without checking.

# Example usage

```text
/salla-component Update the existing brands component layout.
```
