# Salla CSS Rules

## Theme Raed CSS baseline

Theme Raed uses:

```text
src/assets/styles/app.scss
src/assets/styles/01-settings/
src/assets/styles/02-generic/
src/assets/styles/03-elements/
src/assets/styles/04-components/
src/assets/styles/05-utilities/
```

`app.scss` imports source SCSS and webpack builds `public/app.css`.

Do not edit `public/app.css` manually.

## Component CSS location

For Theme Raed home blocks, use:

```text
src/assets/styles/04-components/home-blocks.scss
```

For other domains, use the closest existing component file:

- `header.scss`
- `footer.scss`
- `product.scss`
- `brands.scss`
- `landing-page.scss`
- `filters.scss`

## Required comment

For new Salla Forge component blocks:

```scss
/*------------------------------------------------------------------------
 *              COMPONENTS / F__COMPONENT_NAME
 *------------------------------------------------------------------------*/
```

Theme Raed existing comments are shorter, such as:

```scss
/*
  Main slider
*/
```

For new work, use the stronger Salla Forge comment unless preserving a local section.

## Tailwind and SCSS

Theme Raed relies on Tailwind and `@apply` in SCSS. Match the existing style when editing Theme Raed files.

## Rules

- Scope selectors under the component root.
- Avoid broad selectors like `.container img`.
- Use CSS variables such as `--color-primary` where available.
- Keep responsive behavior explicit.
- Avoid layout shifts with stable dimensions, aspect ratios, or fixed tracks.
- Keep hover-only content accessible.

## Validation

- Source SCSS compiles.
- Selectors do not affect unrelated blocks.
- Mobile and desktop layouts remain stable.
