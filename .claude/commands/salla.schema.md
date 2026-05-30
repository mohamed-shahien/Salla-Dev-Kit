---
description: Design or update Salla twilight.json settings and fields
argument-hint: "<schema need or component path>"
---

# Purpose

Design or modify `twilight.json` schema safely, separating theme-wide settings from component-specific fields.

Input:

```text
$ARGUMENTS
```

# When to use

Use this command when:

- Adding theme settings.
- Adding or revising component fields.
- Reviewing field types, defaults, labels, or collection structures.

# Files to read first

1. `AGENTS.md`
2. `.salla/templates/schema-template.md`
3. `references/salla-schema-rules.md`
4. `references/salla-twilight-rules.md`
5. `references/salla_schema_reference.json`
6. `references/salla_schema_reference_full.json`, if the compact reference is not enough
7. Current `twilight.json`
8. Twig file that will read the values.

# Step-by-step workflow

1. Identify the target schema scope: `settings` or `components[].fields`.
2. Search existing schema for similar controls.
3. Reuse existing IDs or patterns where appropriate.
4. Define field IDs, types, formats, labels, defaults, required flags, and conditions.
5. Validate collection item ID naming against the current theme.
6. Add Twig read examples.
7. If applying changes, edit only allowed sections.
8. Validate JSON syntax.

# Output format

```text
# Schema Plan/Report
## Target
## Settings Additions
## Fields Additions
## Rules Applied
## Twig Read Examples
## Migration Notes
## Validation
```

# Validation checklist

- [ ] JSON is valid.
- [ ] IDs are lowercase snake_case except nested collection IDs that follow existing pattern.
- [ ] Shared controls are not duplicated in fields.
- [ ] Defaults are compatible with Twig fallbacks.
- [ ] Existing merchant data impact is considered.
- [ ] Customer-facing and merchant-facing text fields use `multilanguage: true` when supported.

# Stop/warn conditions

- Stop if asked to create a new component object without Salla Partners key/path.
- Warn if a field type is not confirmed by available schema references.
- Warn if changing an existing field ID would break merchant data.
- Warn if static HTML labels include unsafe or unnecessary inline CSS.

# Example usage

```text
/salla.schema Add fields for a FAQ tabs component: title, subtitle, questions collection, first tab open, section background.
```
