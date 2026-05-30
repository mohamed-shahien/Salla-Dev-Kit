# Salla Performance Rules

## Asset pipeline

Theme Raed builds source assets with webpack into `public/`. Source edits belong in:

- `src/assets/styles/`
- `src/assets/js/`
- `src/assets/images/`

Manual edits to `public/` are usually wrong.

## Rules

- Load page-specific JS only on pages that need it.
- Load component-specific JS only when the component exists.
- Do not add third-party libraries globally for a single component.
- Use `defer` for scripts in Twig.
- Use lazy images outside the first viewport.
- Provide stable image dimensions or aspect ratios.
- Prefer `salla-slider` lazy/static options when using sliders.
- Avoid repeated listeners on scroll or resize without throttling/debouncing.
- Avoid DOM-heavy work before `theme::ready` unless required.

## Theme Raed observations

- `master.twig` loads core scripts and `app.css`.
- `index.twig` loads `home.js`.
- `home.js` imports `lite-youtube-embed` and `fslightbox`.
- `BasePage.initiateWhenReady(['index'])` limits Home behavior to the index page.

## Audit checks

- Bundle entry affected.
- Generated public assets are build output.
- Largest images have sensible dimensions.
- Slider media is not all eagerly loaded.
- Component JS has an existence guard.
