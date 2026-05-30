---
description: Legacy alias for Salla schema field design
argument-hint: "<schema request>"
---

# Purpose

Design Salla `twilight.json` settings and component fields. Prefer `/salla.schema` for new work.

Input:

```text
$ARGUMENTS
```

# When to use

Use when the user asks for field/schema design using the older command name.

# Files to read first

1. `AGENTS.md`
2. `.salla/templates/schema-template.md`
3. `references/salla-schema-rules.md`
4. `references/salla-twilight-rules.md`
5. `references/salla_schema_reference.json`
6. Current `twilight.json`.

# Step-by-step workflow

1. Classify each requested control as global setting or component field.
2. Search existing schema for similar controls.
3. Choose field types and formats from references and existing theme patterns.
4. Define defaults, labels, required flags, and conditions.
5. Provide Twig read examples.
6. Apply changes only if requested.
7. Validate JSON if files are changed.

# Output format

```text
# Schema Fields
## Settings
## Fields
## Reasoning
## Twig Read Examples
## Validation
```

# Validation checklist

- [ ] Shared controls are in `settings`.
- [ ] Component-only controls are in `fields`.
- [ ] IDs are stable and valid.
- [ ] Defaults are usable.
- [ ] JSON parses when applied.

# Stop/warn conditions

- Stop if asked to create a new component object without key/path.
- Warn if changing existing IDs could lose merchant data.
- Warn if field type is not confirmed by current references.

# Example usage

```text
/salla-fields Add FAQ fields with questions collection and section title.
```
