# Naming Conventions

## أسماء المكونات

يفضل استخدام prefix واضح للمكونات المخصصة:

```text
F_main_slider
F_heroBanner
F_categoryGrid
F_customerReviews
F_faqTabs
F_blogArticles
```

## كلاس الجذر

استخدم كلاس واحد واضح على جذر المكون:

```twig
<section class="s-block F__exampleComponent">
```

## IDs في `fields`

استخدم lowercase و snake_case:

```text
title
subtitle
button_text
button_url
autoplay_delay
has_container
cards_slider
```

لا تستخدم:

```text
Title
buttonText
AutoPlayDelay
```

## متغيرات Twig

كلها lowercase:

```twig
{% set secid = 'F_example-' ~ position %}
{% set hascontainer = c.has_container|default(false) %}
{% set autoplaydelay = c.autoplay_delay|default(7000) %}
```

## ملفات JS

ضع ملفات مكونات home هنا:

```text
src/assets/js/services/home/F__component_name.js
```

واستخدم key مطابقا في `home.js`:

```javascript
key: "F__component_name"
```

## تعليقات CSS

استخدم اسم المكون uppercase في التعليق:

```scss
/*------------------------------------------------------------------------
 *              COMPONENTS / F__COMPONENT_NAME
 *------------------------------------------------------------------------*/
```
