# Feature Spec: Main Links Display Controls

## Metadata

- Feature name: Main Links Display Controls
- Target theme: Theme Raed baseline
- Component: `home.main-links`
- Component file: `theme-raed-master/theme-raed-master/src/views/components/home/main-links.twig`
- Schema file: `theme-raed-master/theme-raed-master/twilight.json`
- Date: 2026-05-30

## Problem Statement

Merchants can add quick links/categories on the home page, but they need clearer control over title visibility, controls visibility, and image/icon presentation without editing code.

## Goals

- Add merchant controls for quick link display style.
- Preserve existing `home.main-links` behavior and data.
- Keep the feature compatible with Theme Raed asset structure.

## Non-Goals

- Do not create a new component.
- Do not change the Salla Partners `key` or `path`.
- Do not edit generated `public/` assets.

## Users

- Merchant: configures quick links from the theme editor.
- Shopper: browses categories or curated links.
- Developer: maintains schema, Twig, and source SCSS.

## User Stories

1. As a merchant, I want to choose whether quick links display icons or category images so that the section matches my brand.
2. As a merchant, I want to hide carousel controls when I have few links so that the section looks cleaner.
3. As a shopper, I want quick links to be readable and tappable on mobile.

## Functional Requirements

| id | requirement | priority |
|----|-------------|----------|
| FR-001 | Preserve existing `show_cats`, `categories`, and `links` behavior. | Must |
| FR-002 | Add a component field for visual style: icon, image, or compact. | Should |
| FR-003 | Keep `show_controls` respected in Twig. | Must |
| FR-004 | Add empty-state safe behavior when no links/categories exist. | Must |

## Customization Requirements

| id | setting/field | scope | default |
|----|---------------|-------|---------|
| CR-001 | `display_style` | fields | `icon` |

## Content Model

| field id | type | required | default | validation |
|----------|------|----------|---------|------------|
| display_style | items/dropdown-list | no | icon | values: icon, image, compact |

## UX Requirements

- Desktop: keep carousel layout.
- Mobile: keep each item tappable and readable.
- Empty state: render no broken slider items.
- RTL/LTR: keep existing Salla slider behavior.

## SEO Requirements

- Link titles must remain text in HTML.
- Do not output empty headings.
- Category/link URLs should remain valid Salla URLs.

## Accessibility Requirements

- Links must remain anchors.
- Icons should be decorative when text is present.
- Focus states must remain visible through existing styles.

## Performance Requirements

- No new global JS.
- No edits to `public/`.
- Use source SCSS only.

## Security Requirements

- Do not output raw merchant content.
- Guard optional URLs.

## Acceptance Criteria

1. Given `display_style = compact`, quick links render without large icon/image treatment.
2. Given no component title, no empty heading is rendered.
3. Given no link title, that link item is skipped.
4. Given the build runs, generated assets are produced from source changes only.

## Dependencies

- Existing Salla component `home.main-links`.
- Existing Theme Raed `home-blocks.scss`.
- Existing `salla-slider`.

## Open Questions

| id | question | blocking | owner |
|----|----------|----------|-------|
| Q-001 | Should compact style reduce item height or only typography? | no | merchant/design |
