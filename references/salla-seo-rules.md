# Salla SEO Rules

## General rules

- Use semantic headings.
- Do not output empty `h1`, `h2`, or `h3`.
- Use descriptive anchor text.
- Avoid `href="#"` for real navigation.
- Add meaningful `alt` text for content images.
- Keep important content in server-rendered Twig output where possible.
- Do not rely on JS-only content for core category/product/blog text.

## Components

Home components should normally use section headings such as `h2`, not `h1`.

Card titles should use `h3` only when they are subordinate to a section heading.

Images:

```twig
<img src="{{ image }}" alt="{{ title|default(store.name) }}" loading="lazy">
```

Links:

```twig
{% if url %}
  <a href="{{ url }}">{{ text }}</a>
{% endif %}
```

## Theme Raed notes

Existing home components use `salla-slider` and visual cards. When editing them, preserve indexable text in Twig and guard blank title fields.

## Audit checks

- Heading hierarchy.
- Alt text.
- Anchor validity.
- Crawlable content.
- Duplicate hidden text.
