# Salla Technical Review Rules

## Review priority

Find issues in this order:

1. Runtime breakage.
2. Salla schema breakage.
3. Merchant data loss.
4. Twig rule violations.
5. CSS leakage.
6. JS loading or lifecycle bugs.
7. Performance regressions.
8. SEO/accessibility/security issues.
9. Missing validation.

## Required review areas

### Twilight

- Valid JSON.
- Edits limited to allowed areas.
- New component key/path are real.
- Field IDs match Twig.

### Twig

- Component starts with `{% set c = component %}` for new Salla Forge work.
- No inline script/style.
- Fallbacks for optional values.
- Empty states.

### CSS

- Source file edited, not generated public CSS.
- Component comment present.
- Selectors scoped.
- Responsive behavior checked.

### JS

- Correct entry file.
- Selector exists.
- Component/page guard exists.
- No double initialization.

### Validation

- Build/lint/check results included.
- If not run, reason is stated.

## Output style

Findings first. Each finding should include:

- Severity.
- File and line where possible.
- Issue.
- Impact.
- Recommended fix.
