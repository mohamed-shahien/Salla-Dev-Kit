# Salla Theme Constitution

هذا الملف هو المرجع التشغيلي الكامل لقواعد بناء ثيمات سلة داخل هذا الريبو.

## 1. `twilight.json`

`twilight.json` هو الملف المركزي لتعريف إعدادات الثيم ومكوناته.

المسموح تعديله داخله:

- `settings`
- `components`

لا تضف خصائص عشوائية على مستوى الجذر، ولا تعدل أي جزء لا يرتبط بالمهمة.

## 2. `settings`

استخدم `settings` للإعدادات العامة المشتركة بين الثيم كله.

أمثلة مناسبة:

- نمط الزر العام.
- ألوان المتجر العامة.
- radius عام للأزرار والصور والكروت.
- المسافات بين المكونات.
- تفعيل أو تعطيل الأنيميشن العام.

مثال:

```json
{
  "id": "button_style",
  "type": "items",
  "format": "dropdown-list",
  "label": "نمط الأزرار العام",
  "selected": [{ "label": "زر ممتلئ لون ثابت", "value": "F__two" }],
  "options": [
    { "label": "زر مخطط قلب الألوان عند التحويم", "value": "F__one" },
    { "label": "زر ممتلئ لون ثابت", "value": "F__two" },
    { "label": "زر شبح بدون خلفية", "value": "F__three" },
    { "label": "زر كبسولة زوايا كاملة", "value": "F__four" }
  ]
}
```

طريقة القراءة في Twig:

```twig
{{ theme.settings.get('button_style', 'F__two') }}
{{ theme.settings.get('has_animation', true) }}
{{ theme.settings.get('border_radius_btn', '0') }}
```

## 3. `components`

كل object داخل `components` يمثل مكونا واحدا.

قاعدة إلزامية: لا تنشئ object مكون يدويا قبل إنشائه في Salla Partners.

السبب: سلة تولد `key` فريدا وتربط `path` بملف Twig. هذه القيم لا يجب اختراعها.

تركيب المكون:

```json
{
  "key": "2ff5ab36-7f5f-4528-a6bb-4916d563be63",
  "title": {
    "ar": "بنرات وفيديوهات",
    "en": "Banners & Videos"
  },
  "icon": "sicon-image-carousel",
  "path": "theme-folder.F_main_slider",
  "is_default": true,
  "fields": []
}
```

شرح الخصائص:

| property | rule |
|----------|------|
| `key` | من Salla Partners فقط |
| `title.ar` | اسم واضح للتاجر بالعربية |
| `title.en` | اسم واضح للتاجر بالإنجليزية |
| `icon` | أيقونة مناسبة من Salla icons |
| `path` | يطابق مسار ملف Twig |
| `is_default` | يظهر تلقائيا عند تثبيت الثيم أو لا |
| `fields` | خيارات هذا المكون فقط |

## 4. الفرق بين `settings` و `fields`

ضع الخيار في `settings` إذا كان:

- مشتركا بين مكونات كثيرة.
- يمثل هوية بصرية عامة.
- يفضل أن يختاره التاجر مرة واحدة.

ضع الخيار في `fields` إذا كان:

- خاصا بسلوك مكون واحد.
- عنوانا أو صورة أو قائمة داخل مكون.
- يختلف من نسخة لأخرى من نفس المكون.

## 5. قواعد Twig

كل ملف مكون يبدأ بهذا السطر:

```twig
{% set c = component %}
```

بعدها اقرأ بيانات المكون من `c`:

```twig
{{ c.title }}
{{ c.subtitle }}
{{ c.slider_height_on_pc }}
```

واقرأ الإعدادات العامة من `theme.settings.get`:

```twig
{{ theme.settings.get('button_style', 'F__two') }}
```

ممنوع:

- استخدام حروف كبيرة في أسماء متغيرات Twig.
- كتابة `<script>` داخل Twig.
- كتابة `<style>` داخل Twig.
- نسخ كود زر أو عنوان في كل مكون إذا كان helper موجودا.

## 6. المكونات المساعدة

استخدم helpers عند الحاجة:

```twig
{% include 'components.custom.btn' with {
    text: 'عرض الكل',
    href: '/products',
    icon: true,
    color: '#fff',
    background_color: 'var(--color-primary)'
} %}
```

```twig
{% include 'components.custom.titles' with {
    title: c.title,
    sub: c.subtitle,
    more: true,
    more_url: '/products',
    more_alt: 'عرض الكل',
    jocer: true
} %}
```

إذا لم تكن helpers موجودة في الثيم الحالي، لا تفترض وجودها. ابحث أولا، ثم استخدم النمط المحلي الموجود.

## 7. قواعد CSS/SCSS

CSS الخاص بالمكون لا يكتب داخل Twig.

ضعه في ملف الصفحة المناسب، مثل:

```text
src/assets/scss/home.scss
```

أو حسب هيكل الثيم الحالي:

```text
src/assets/styles/04-components/home-blocks.scss
```

قبل كود المكون، أضف:

```scss
/*------------------------------------------------------------------------
 *              COMPONENTS / F__BLOGARTICLES
 *------------------------------------------------------------------------*/
```

كل selectors الخاصة بالمكون يجب أن تكون محصورة تحت كلاس الجذر.

## 8. قواعد JavaScript

لا تكتب JavaScript داخل Twig.

إذا احتاج مكون الصفحة الرئيسية JS:

1. أنشئ ملفا في:

```text
src/assets/js/services/home/[component_name].js
```

2. اربطه شرطيا من:

```text
src/assets/js/home.js
```

باستخدام `lazyImportWhenExists`:

```javascript
lazyImportWhenExists({
  key: "F__Fqa",
  selector: ".F__faqTabs",
  importer: () => import("./services/home/F__Fqa"),
  init: (mod, hosts) => mod.default(hosts, helpers),
});
```

النظام يجب أن يحمل ملف JS فقط إذا كان selector موجودا في الصفحة.

## 9. `master.twig`

`src/views/layouts/master.twig` هو القالب الأب.

مسؤول عن:

- `head`.
- تحميل CSS حسب نوع الصفحة.
- تضمين `layouts.css`.
- تمرير settings إلى JavaScript.
- استدعاء header و footer.
- حقن محتوى الصفحة عبر `{% block content %}`.
- حقن سكريبتات الصفحة عبر `{% block scripts %}`.

لا تضف CSS أو JS عشوائيا في `master.twig` إلا إذا كان عاما ومبررا.

## 10. `layouts/css.twig`

هذا الملف يحول إعدادات التاجر إلى CSS variables.

أمثلة:

```css
html[data-theme="light"] {
  --color-primary: {{ theme.color.primary }};
  --color-bg: {{ theme.settings.get('store_bg_color', '#FFFFFF') }};
}

:root {
  --btn-radius: {{ theme.settings.get('border_radius_btn', '0') }}px;
}
```

أي قيمة بصرية عامة ومتكررة يفضل تحويلها إلى variable هنا بدلا من تكرارها.

## 11. `layouts/settings.twig`

يستخدم لسكريبتات الإعدادات العامة:

- الجزء العلوي `top: true` للوضع الداكن والفاتح مبكرا.
- الجزء السفلي `bottom: true` لإعدادات مثل scroll to top، الواتساب، الأنيميشن، وإعدادات product card.

لا تضع سكريبت مكون داخله.

## 12. الصفحات

كل صفحة تتبع النمط:

```twig
{% extends "layouts.master" %}

{% block content %}
  ...
{% endblock %}

{% block scripts %}
  ...
{% endblock %}
```

الصفحة الرئيسية غالبا:

```twig
{% extends "layouts.master" %}
{% block content %}
    {% component home %}
{% endblock %}
{% block scripts %}
    <script defer src="{{ 'home.js' | asset }}"></script>
{% endblock %}
```

## 13. مبدأ التخصيص العالي

المكون الاحترافي في هذا المشروع يجب أن يعطي التاجر تحكما واضحا بدون إرباك:

- خيارات عامة قليلة في `settings`.
- خيارات خاصة دقيقة في `fields`.
- defaults جيدة.
- empty states جيدة.
- دعم responsive.
- عدم تحميل JS غير مستخدم.

## 14. تقرير العمل

أي تسليم يجب أن يذكر:

- الملفات المعدلة.
- أين وضعت الإعدادات.
- أين وضعت fields.
- أين وضعت CSS.
- أين وضعت JS.
- ما تم التحقق منه.
- ما يحتاج اعتمادا من Salla Partners.
