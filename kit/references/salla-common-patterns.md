# Salla Common Patterns

## Home page injection

```twig
{% extends "layouts.master" %}
{% block content %}
    {% component home %}
{% endblock %}
{% block scripts %}
    <script defer src="{{ 'home.js' | asset }}"></script>
{% endblock %}
```

## Theme setting passed to JS

```twig
<script data-cfasync="false">
    window.header_is_sticky = "{{ theme.settings.get('header_is_sticky', true) }}"
</script>
```

## CSS variables in Theme Raed

`master.twig` defines:

```css
:root {
  --font-main: '{{ theme.font.name }}';
  --color-primary: {{ theme.color.primary }};
  --color-primary-dark: {{ theme.color.darker(0.15) }};
  --color-primary-light: {{ theme.color.lighter(0.15) }};
  --color-primary-reverse: {{ theme.color.reverse_text }};
}
```

## Slider component

```twig
<salla-slider
  id="main-slider-{{ position }}"
  auto-play
  static-when-single
  type="fullwidth">
  <div slot="items">
    ...
  </div>
</salla-slider>
```

## Variable-list link fields

Use Salla source lists for merchant-selectable links instead of plain text URLs when a component should link to products, categories, brands, pages, or blog.

## Theme Raed page JS

```javascript
class Home extends BasePage {
  onReady() {
    this.initFeaturedTabs();
  }
}

Home.initiateWhenReady(['index']);
```

## New Salla-Dev-Kit component Twig

```twig
{% set c = component %}
{% set secid = 'F_component-' ~ position %}
{% set items = c.items|default([]) %}

<section id="{{ secid }}" class="s-block F__component">
  ...
</section>
```

## New Salla-Dev-Kit component CSS

```scss
/*------------------------------------------------------------------------
 *              COMPONENTS / F__COMPONENT
 *------------------------------------------------------------------------*/
.F__component {
  ...
}
```

## New Salla-Dev-Kit component JS

Use conditional loading when the helper exists or is introduced intentionally.
