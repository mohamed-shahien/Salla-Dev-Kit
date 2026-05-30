# Salla Twig Rules

## Component baseline

Salla Forge preferred component start:

```twig
{% set c = component %}
```

Then read component fields through `c`:

```twig
{{ c.title }}
{{ c.items|default([]) }}
```

Read global settings through:

```twig
{{ theme.settings.get('header_is_sticky', true) }}
```

## Theme Raed baseline

Theme Raed existing components often read `component` directly and include a variable documentation comment at the top. Example pattern:

```twig
{#
| component.title | ?string |
#}
<section class="s-block">
  {{ component.title }}
</section>
```

When creating new Salla Forge components, use `{% set c = component %}`. When modifying existing Theme Raed components, prefer a minimal change that does not rewrite the full file unless requested.

## Rules

- No `<script>` inside component Twig.
- No `<style>` inside component Twig.
- Lowercase variable names.
- Add fallbacks using `|default(...)`.
- Guard optional links and images.
- Preserve localized values from Salla fields. Do not hardcode customer-facing Arabic-only or English-only text unless it is an agreed fixed label.
- Use semantic elements: `section`, `article`, `h2`, `h3`, `a`, `button`.
- Use Salla web components such as `salla-slider` when the existing theme uses them.
- Keep `position` based IDs unique.

## Page pattern

Theme Raed `index.twig`:

```twig
{% extends "layouts.master" %}
{% block content %}
    {% component home %}
{% endblock %}
{% block scripts %}
    <script defer src="{{ 'home.js' | asset }}"></script>
{% endblock %}
```

## Layout pattern

Theme Raed `master.twig`:

- Sets `placeholder` through `theme.settings.set`.
- Loads `product-card.js`, `main-menu.js`, and optional `add-product-toast.js` in the head.
- Loads `app.css`, theme font, and Salla icons.
- Defines CSS variables inline in `:root`.
- Calls header/footer components.
- Injects page scripts through `{% block scripts %}`.

## Anti-rules

- Do not output empty headings.
- Do not use `href="#"` as a real fallback.
- Do not assume helper includes exist. Search first.
- Do not add global scripts to `master.twig` for component-only behavior.
