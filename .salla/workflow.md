# Salla Forge Workflow

هذا workflow قريب من فلسفة spec-kit: لا نبدأ بالكود، بل نحول الطلب إلى مواصفة ثم خطة ثم مهام ثم تنفيذ ومراجعة.

## Core sequence

1. `specify`
2. `clarify`
3. `plan`
4. `tasks`
5. `analyze`
6. `implement`
7. `review`

استخدم `.salla/templates/` لكل مرحلة.

## 0. Specify

اكتب أو استوعب المواصفة باستخدام:

```text
.salla/templates/spec-template.md
```

يجب أن توضح:

- المشكلة.
- الأهداف وغير الأهداف.
- المتطلبات الوظيفية.
- إعدادات التاجر.
- SEO/accessibility/performance/security.
- acceptance criteria.

## 0.1 Clarify

استخدم:

```text
.salla/templates/clarify-template.md
```

هدف المرحلة هو حصر الغموض. اسأل فقط الأسئلة الحاجزة، وسجل الافتراضات الآمنة.

## 0.2 Plan

استخدم:

```text
.salla/templates/plan-template.md
```

الخطة يجب أن تحدد الملفات الفعلية التي ستتغير، وتوضح هل baseline هو Theme Raed أو بنية أخرى.

## 0.3 Tasks

استخدم:

```text
.salla/templates/tasks-template.md
```

قسم التنفيذ إلى مهام صغيرة قابلة للتحقق.

## 0.4 Analyze

استخدم:

```text
.salla/templates/analyze-template.md
```

اقرأ الكود الحالي قبل التنفيذ. في هذا الريبو، baseline المهم موجود داخل:

```text
theme-raed-master/theme-raed-master/
```

## 0.5 Implement

نفذ المهام بالترتيب. لا تعدل `public/` يدويا إذا كان build output.

## 0.6 Review

استخدم:

```text
.salla/templates/review-template.md
```

ابدأ بالعثور على المشاكل والمخاطر ثم اذكر الملخص.

---

اتبع الخطوات التالية عند بناء أو تعديل أي جزء في ثيم سلة.

## 1. فهم الطلب

حدد نوع التغيير:

- إعداد عام للثيم.
- مكون صفحة رئيسية.
- تعديل مكون موجود.
- CSS فقط.
- JS فقط.
- صفحة كاملة مثل السلة أو المنتج.

إذا كان الطلب يتعلق بمكون جديد، لا تبدأ من `twilight.json` قبل التأكد من أن المكون تم إنشاؤه في Salla Partners.

## 2. تحديد مكان الكود

استخدم هذه القاعدة:

- إعداد مشترك بين الثيم كله: `twilight.json > settings`.
- إعداد خاص بمكون: `twilight.json > components[].fields`.
- HTML/Twig للمكون: `src/views/components/[theme-folder]/[component].twig`.
- CSS للصفحة الرئيسية: `src/assets/scss/home.scss` أو ملف الصفحة المناسب في المشروع.
- JS للصفحة الرئيسية: `src/assets/js/services/home/[component].js`.
- ربط JS: `src/assets/js/home.js`.

## 3. تحديث `twilight.json`

### للإعدادات العامة

أضف حقلا داخل `settings` فقط عندما يكون عاما:

```json
{
  "id": "button_style",
  "type": "items",
  "format": "dropdown-list",
  "label": "نمط الأزرار العام",
  "selected": [{ "label": "زر ممتلئ", "value": "F__two" }],
  "options": [
    { "label": "زر مخطط", "value": "F__one" },
    { "label": "زر ممتلئ", "value": "F__two" }
  ]
}
```

### لحقول المكون

أضف الحقول داخل `fields` للمكون نفسه:

```json
{
  "id": "autoplay_delay",
  "type": "number",
  "label": "زمن التشغيل التلقائي",
  "value": 7000
}
```

## 4. كتابة Twig

كل مكون يبدأ بـ:

```twig
{% set c = component %}
```

ثم عرف متغيرات واضحة:

```twig
{% set secid = 'F_example-' ~ position %}
{% set title = c.title|default('') %}
{% set items = c.items|default([]) %}
```

ممنوع:

- `<script>`
- `<style>`
- متغيرات بحروف كبيرة

## 5. كتابة CSS

قبل CSS الخاص بالمكون:

```scss
/*------------------------------------------------------------------------
 *              COMPONENTS / F__EXAMPLE
 *------------------------------------------------------------------------*/
```

استخدم variables الموجودة في `layouts/css.twig` مثل:

```scss
color: var(--color-primary);
border-radius: var(--card-radius);
```

## 6. كتابة JS

إذا احتجت JS:

1. أنشئ ملف service منفصل.
2. اجعله export default function.
3. اربطه شرطيا في `home.js`.

مثال:

```javascript
export default function initExample(hosts) {
  hosts.forEach((host) => {
    if (host.dataset.ready === "true") return;
    host.dataset.ready = "true";
  });
}
```

## 7. التحقق

قبل التسليم:

- راجع `.salla/component-checklist.md`.
- راجع `.salla/quality-gates.md`.
- شغل build أو lint إذا كان المشروع يوفرهما.
- إذا لم يمكن تشغيل التحقق، اذكر السبب في التقرير.

## 8. تقرير التسليم

يجب أن يذكر:

- الملفات المعدلة.
- الحقول أو الإعدادات الجديدة.
- مكان CSS و JS.
- طريقة الاستخدام.
- أي خطوة تعتمد على Salla Partners.
