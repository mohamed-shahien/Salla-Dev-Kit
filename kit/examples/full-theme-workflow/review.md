# Review: Main Links Display Controls

## Findings

### High

- None.

### Medium

- None.

### Low

- `home-blocks.scss` - The compact variant should be checked with long Arabic and English titles to confirm no overflow.

## Rule Compliance

- Twilight: component field only, no global setting added.
- Twig: no inline script/style.
- CSS: source SCSS edited, scoped styles added.
- JS: no JS added.
- Performance: no JS bundle increase.
- SEO: link text preserved.
- Accessibility: anchors preserved.
- Security: no raw merchant HTML added.

## Test Gaps

- Needs visual verification in Salla preview.
- Needs mobile screenshot check with long labels.

## Open Questions

- Should compact style reduce visible item count per slide on mobile?

## Summary

The change is low risk because it updates an existing component without changing component key/path or existing field IDs.
