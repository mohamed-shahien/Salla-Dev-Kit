# Salla Schema Rules

## Attached schema catalog

This repository includes schema catalogs under `references/`. Read them before designing schema. They document the Twilight type system, including:

- `static`
- `boolean`
- `string`
- `number`
- `items`
- `collection`
- `conditions`

Use `references/salla_schema_reference.json` as the local compact reference and `references/salla_schema_reference_full.json` as the expanded catalog when available.

## Settings vs fields

Use `settings` when the control is shared across the theme. Use `fields` when it belongs to one component instance.

## Common field shapes in Theme Raed

### Boolean switch

```json
{
  "type": "boolean",
  "icon": "sicon-toggle-off",
  "label": "Label",
  "id": "field_id",
  "format": "switch",
  "required": false,
  "value": true,
  "selected": true
}
```

### Dropdown list

```json
{
  "id": "image_fit",
  "type": "items",
  "format": "dropdown-list",
  "label": "Image fit",
  "selected": [{ "label": "Contain", "value": "contain" }],
  "options": [
    { "label": "Cover", "value": "cover" },
    { "label": "Contain", "value": "contain" }
  ],
  "source": "Manual",
  "required": true
}
```

### String text

```json
{
  "type": "string",
  "icon": "sicon-format-text-alt",
  "label": "Title",
  "multilanguage": true,
  "id": "title",
  "value": null,
  "required": false,
  "format": "text",
  "minLength": 0,
  "maxLength": 100
}
```

### Image

```json
{
  "type": "string",
  "icon": "sicon-image",
  "id": "slides.image",
  "label": "Image",
  "format": "image",
  "required": true,
  "settings": {
    "width": 900,
    "height": 600
  }
}
```

### Variable link list

Theme Raed uses `items` with `format: variable-list` and sources such as:

- `products`
- `products_tags`
- `categories`
- `brands`
- `pages`
- `blog_articles`
- `blog_categories`
- `offers_link`
- `brands_link`
- `blog_link`
- `custom`

### Collection

```json
{
  "id": "slides",
  "type": "collection",
  "format": "collection",
  "required": true,
  "minLength": 1,
  "maxLength": 10,
  "item_label": "Slide",
  "value": [],
  "fields": []
}
```

Theme Raed nested collection item IDs often use dot notation like `slides.image` and values are keyed the same way.

## Rules

- Keep IDs stable.
- Prefer lowercase snake_case for normal fields.
- Follow existing dot notation for collection subfields when editing Theme Raed components.
- Use `multilanguage: true` for merchant-facing text.
- Treat localization as a schema decision: titles, subtitles, button labels, card text, and merchant-facing copy should be multilingual when the current field type supports it.
- Use `settings.width` and `settings.height` for image fields when dimensions matter.
- Use `conditions` to show/hide preview guidance when the existing component already follows that pattern.

## Validation

- JSON parses.
- Field IDs match Twig reads.
- Required fields have usable defaults or empty-state handling.
- Existing merchant data is not orphaned by renaming IDs.
