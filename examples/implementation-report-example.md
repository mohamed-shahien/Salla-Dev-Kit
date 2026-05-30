# Implementation Report Example

## الملفات

- `twilight.json`: إضافة fields لمكون `F_example_component`.
- `src/views/components/theme-folder/F_example_component.twig`: بناء HTML المكون.
- `src/assets/scss/home.scss`: إضافة تنسيقات المكون.
- `src/assets/js/services/home/F__example_component.js`: إضافة تفاعل المكون.
- `src/assets/js/home.js`: تحميل JS شرطيا.

## طريقة الاستخدام

يضيف التاجر المكون من لوحة تحكم سلة، ثم يضبط:

- العنوان.
- الوصف.
- البطاقات.
- شكل العرض.
- رابط عرض الكل.

## التحقق

- تم التأكد من عدم وجود `script` أو `style` داخل Twig.
- تم التأكد من أن JS لا يحمل إلا عند وجود `.F__exampleComponent`.
- تم تشغيل build بنجاح.

## ملاحظات

إذا كان المكون جديدا بالكامل، يجب إنشاؤه في Salla Partners قبل استخدام هذا التعريف.
