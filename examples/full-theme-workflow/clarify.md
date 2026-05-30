# Clarification: Main Links Display Controls

## Ambiguity Inventory

| id | ambiguity | impact | options | recommendation | status |
|----|-----------|--------|---------|----------------|--------|
| CL-001 | Compact style exact visual treatment | Medium | reduce height / reduce typography only | reduce height and icon size | Assumed |
| CL-002 | New component or existing component | High | new component / update `home.main-links` | update existing component | Resolved |
| CL-003 | JS required | Low | add JS / no JS | no JS | Resolved |

## Required Decisions

No blocking decisions remain.

## Assumptions

- This is an update to the existing `home.main-links` component.
- The Salla Partners key and path already exist.
- No JavaScript is required.
- Compact style can be implemented with CSS classes and Twig conditionals.

## Blockers

- None.

## Updated Requirements

| requirement id | old | new |
|----------------|-----|-----|
| FR-002 | Add visual style | Add `display_style` dropdown with `icon`, `image`, `compact` |

## Ready For Plan

- [x] No blocking questions remain.
- [x] Salla Partners key/path status is known.
- [x] Required settings vs fields are clear.
- [x] Acceptance criteria are testable.
