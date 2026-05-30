# Component Patterns

أنماط عملية لبناء مكونات قابلة للتخصيص في سلة.

## Pattern 1: مكون ثابت بدون JS

استخدمه عندما يكون المكون HTML/CSS فقط.

```twig
{% set c = component %}
{% set secid = 'F_static-' ~ position %}
{% set title = c.title|default('') %}

<section id="{{ secid }}" class="s-block F__static">
  <div class="container">
    {% if title %}
      <h2>{{ title }}</h2>
    {% endif %}
  </div>
</section>
```

## Pattern 2: مكون قائمة أو كروت

```twig
{% set c = component %}
{% set secid = 'F_cards-' ~ position %}
{% set cards = c.cards|default([]) %}

<section id="{{ secid }}" class="s-block F__cards">
  <div class="container">
    {% for card in cards %}
      <article class="F__cards-item">
        {% if card.image %}
          <img src="{{ card.image }}" alt="{{ card.title|default('') }}">
        {% endif %}
        {% if card.title %}
          <h3>{{ card.title }}</h3>
        {% endif %}
      </article>
    {% else %}
      <div class="F__cards-empty"></div>
    {% endfor %}
  </div>
</section>
```

## Pattern 3: مكون يقرأ setting عام

```twig
{% set c = component %}
{% set buttonstyle = theme.settings.get('button_style', 'F__two') %}

<section class="s-block F__withButton" data-button-style="{{ buttonstyle }}">
  ...
</section>
```

## Pattern 4: مكون يحتاج JS

Twig:

```twig
{% set c = component %}

<section class="s-block F__tabs" data-active-index="0">
  ...
</section>
```

`home.js`:

```javascript
lazyImportWhenExists({
  key: "F__tabs",
  selector: ".F__tabs",
  importer: () => import("./services/home/F__tabs"),
  init: (mod, hosts) => mod.default(hosts, helpers),
});
```

Service:

```javascript
export default function initTabs(hosts) {
  hosts.forEach((host) => {
    if (host.dataset.ready === "true") return;
    host.dataset.ready = "true";
  });
}
```

## Pattern 5: spacing عام

إذا كان `layouts/css.twig` يحفظ spacing في `sp_com_cu`:

```twig
{% set space = (c.notmrb is not defined or not c.notmrb) ? (theme.settings.get('sp_com_cu') ?? '') : '' %}

<section class="s-block F__example {{ space }}">
  ...
</section>
```

## Pattern 6: container اختياري

```twig
{% set c = component %}
{% set hascontainer = c.has_container|default(true) %}

<section class="s-block F__example">
  <div class="{{ hascontainer ? 'container' : '' }}">
    ...
  </div>
</section>
```
