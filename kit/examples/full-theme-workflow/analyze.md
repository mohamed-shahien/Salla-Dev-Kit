# Analysis: Main Links Display Controls

## Codebase Facts

| topic | finding | source file |
|-------|---------|-------------|
| Theme root | Nested Theme Raed project | `theme-raed-master/theme-raed-master/` |
| Build tool | webpack | `webpack.config.js` |
| Build commands | `pnpm production`, `pnpm prod`, `pnpm development`, `pnpm watch` | `package.json` |
| CSS entry | `src/assets/styles/app.scss` | `webpack.config.js` |
| Home CSS | `src/assets/styles/04-components/home-blocks.scss` | `app.scss` |
| Home JS | `src/assets/js/home.js` | `webpack.config.js` |
| Home page | `{% component home %}` plus `home.js` | `src/views/pages/index.twig` |

## Theme Baseline

- Theme name: Theme Raed.
- Component paths use `home.<component-name>`.
- Existing components often read `component` directly.
- Existing home JS uses `BasePage.initiateWhenReady(['index'])`.
- `public/` is webpack output.

## Current Patterns

### Twig

- `main-links.twig` uses `salla-slider`.
- It already supports `show_cats`, `categories`, `links`, `show_controls`, and `merge_with_top_component`.

### CSS

- Home block styles are grouped in `home-blocks.scss`.
- Tailwind `@apply` is common.

### JS

- No JS needed for this feature.

### Schema

- Existing field patterns include `items/dropdown-list`, `boolean/switch`, `collection`, and `variable-list`.

## Constraints

- Must not create a new component.
- Must not edit `public/` manually.
- Must preserve existing field IDs.

## Anti-Patterns Found

- None blocking for this example.

## Recommended Implementation Approach

Add a component field and use CSS/Twig modifiers. Avoid JS.

## Validation Commands

```text
pnpm production
```

## Analysis Outcome

- Ready for implementation: yes
- Blocking issues: none
- Warnings: build requires pnpm dependencies installed.
