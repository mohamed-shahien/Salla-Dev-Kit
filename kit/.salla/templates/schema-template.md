# Schema Template

Use this for schema design or schema implementation reports. The goal is to prevent settings/fields confusion and protect existing merchant data.

## Schema Metadata

- Target file:
- Scope: settings/components.fields
- Component path:
- Salla Partners key:
- Existing component: yes/no
- New component: yes/no

## Settings Additions

```json
[]
```

## Component Fields Additions

```json
[]
```

## Rules Applied

- [ ] Shared controls are in `settings`.
- [ ] Component-only controls are in `fields`.
- [ ] IDs are lowercase snake_case.
- [ ] Existing field IDs are not renamed without migration notes.
- [ ] Labels are clear for merchants.
- [ ] Defaults are usable.
- [ ] Customer-facing text fields use `multilanguage: true` when supported.
- [ ] Collection item ids use the existing project pattern.
- [ ] Image fields include width/height settings when dimensions matter.
- [ ] Conditions are documented when used.

## Twig Read Examples

```twig
{{ theme.settings.get('setting_id', 'fallback') }}
{{ c.field_id|default('fallback') }}
```

## Migration Notes

- Existing data impact:
- Backward compatibility:
- Fields renamed:

## Validation

- JSON parsed:
- Field IDs checked against Twig:
- Salla Partners key/path required:
- Risks:
