# Implementation Plan: Main Links Display Controls

## Plan Metadata

- Feature: Main Links Display Controls
- Spec: `examples/full-theme-workflow/spec.md`
- Theme baseline: Theme Raed

## Baseline Summary

- Theme root: `theme-raed-master/theme-raed-master/`
- Schema: `twilight.json`
- Component: `src/views/components/home/main-links.twig`
- CSS: `src/assets/styles/04-components/home-blocks.scss`
- JS: no change
- Build command: `pnpm production`

## Architecture Decision

Update the existing `home.main-links` component instead of creating a new component. This avoids a new Salla Partners dependency and preserves merchant data.

## Files To Read First

- `AGENTS.md`
- `references/salla-file-structure.md`
- `references/salla-schema-rules.md`
- `references/salla-twig-rules.md`
- `references/salla-css-rules.md`
- `theme-raed-master/theme-raed-master/twilight.json`
- `theme-raed-master/theme-raed-master/src/views/components/home/main-links.twig`
- `theme-raed-master/theme-raed-master/src/assets/styles/04-components/home-blocks.scss`

## Files To Change

| file | action | reason |
|------|--------|--------|
| `twilight.json` | update | Add `display_style` to `home.main-links` fields |
| `src/views/components/home/main-links.twig` | update | Add root modifier class and safe empty handling |
| `src/assets/styles/04-components/home-blocks.scss` | update | Style compact/image variants |

## Data/Schema Plan

- Add component field `display_style`.
- Do not add a global `settings` entry because this is specific to `home.main-links`.
- Keep existing field IDs unchanged.

## Twig Plan

- Introduce `{% set c = component %}` at the top if refactoring the file.
- Add `displaystyle = c.display_style|default('icon')`.
- Add root modifier class like `main-links--{{ displaystyle }}`.
- Skip link items without titles.

## CSS Plan

- Edit source SCSS only.
- Add comment:

```scss
/*------------------------------------------------------------------------
 *              COMPONENTS / HOME MAIN LINKS DISPLAY CONTROLS
 *------------------------------------------------------------------------*/
```

## JS Plan

- No JS changes.

## SEO Plan

- Preserve link text.
- Avoid empty section title.

## Accessibility Plan

- Preserve anchor elements.
- Keep visible text labels.

## Performance Plan

- CSS-only visual change.
- No bundle JS growth.

## Validation Plan

- Run `pnpm production` from theme root.
- Validate `twilight.json` parses.

## Risks

| risk | probability | impact | mitigation |
|------|-------------|--------|------------|
| Existing merchant data affected | Low | High | Do not rename existing field IDs |
| Style leakage | Medium | Medium | Scope under main-links classes |
