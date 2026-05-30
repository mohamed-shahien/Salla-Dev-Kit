# Salla Twilight Rules

## Purpose

`twilight.json` is the theme control surface for Salla. Treat it as schema, not as a free-form config file.

## Allowed edit zones

Edit only:

- `settings`
- `components`

Do not add arbitrary root keys unless Salla documentation or the existing theme already uses them.

## Settings

Use `settings` for theme-wide decisions:

- Header behavior.
- Footer behavior.
- Product page behavior.
- Shared image fit behavior.
- Shared button or card styles.
- Global performance toggles.

Theme Raed examples found in `theme-raed-master/theme-raed-master/twilight.json`:

- `header_is_sticky`
- `topnav_is_dark`
- `important_links`
- `enable_more_menu`
- `footer_is_dark`
- `enable_add_product_toast`
- `sticky_add_to_cart`
- `show_tags`
- `slider_background_size`
- `imageZoom`

## Components

Each object in `components` must represent a Salla-created component. Do not invent:

- `key`
- `path`

Theme Raed component paths found:

- `home.enhanced-slider`
- `home.main-links`
- `home.slider-products-with-header`
- `home.enhanced-square-banners`
- `home.brands`
- `home.custom-testimonials`

These map to:

```text
src/views/components/home/enhanced-slider.twig
src/views/components/home/main-links.twig
src/views/components/home/slider-products-with-header.twig
src/views/components/home/enhanced-square-banners.twig
src/views/components/home/brands.twig
src/views/components/home/custom-testimonials.twig
```

## Component object contract

```json
{
  "key": "from-salla-partners",
  "title": {
    "ar": "Arabic merchant title",
    "en": "English merchant title"
  },
  "icon": "sicon-image-carousel",
  "path": "home.example-component",
  "image": "optional preview image",
  "is_default": false,
  "fields": []
}
```

## Required discipline

- Keep merchant labels clear.
- Prefer defaults that render a working component.
- Use `static` description fields for merchant guidance and previews when the active theme already uses them.
- Avoid changing existing field IDs unless migration is planned.
- Validate JSON after every edit.

## Stop conditions

- New component without Salla Partners `key` and `path`.
- Unknown field type that cannot be verified.
- Required root-level Twilight changes not supported by current theme.
