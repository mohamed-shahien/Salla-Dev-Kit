# Quality Gates

هذه بوابات الجودة النهائية. لا تسلم العمل قبل المرور عليها.

## Gate 1: بنية Salla

- `twilight.json` لم يتغير خارج `settings` و `components`.
- أي مكون جديد له `key` حقيقي من Salla Partners.
- `path` يطابق مكان ملف Twig.
- `title.ar` و `title.en` واضحان للتاجر.
- `icon` مناسب لطبيعة المكون.

## Gate 2: تجربة التاجر

- لا توجد إعدادات مكررة بلا داع.
- الخيارات العامة في `settings`.
- خيارات المكون في `fields`.
- labels عربية واضحة.
- defaults تجعل المكون يعمل فور إضافته.

## Gate 3: Twig

- كل مكون يبدأ بـ `{% set c = component %}`.
- لا توجد متغيرات بحروف كبيرة.
- لا توجد tags `script` أو `style`.
- لا توجد قيم صلبة يمكن أن تكون setting أو field.
- توجد fallbacks عند قراءة بيانات اختيارية.

## Gate 4: CSS

- CSS في الملف المناسب للصفحة.
- تعليق المكون موجود قبل الكود.
- selectors محصورة تحت كلاس المكون.
- استخدام `var(--color-...)` و radius variables عند الحاجة.
- لا يوجد تأثير جانبي على مكونات أخرى.

## Gate 5: JS

- JS مفصول في service.
- تحميل JS شرطي.
- لا يوجد import ثقيل بلا داع.
- init آمن عند وجود أكثر من نسخة من المكون.
- لا يوجد اعتماد على عنصر قد لا يكون موجودا بدون guard.

## Gate 6: التحقق

نفذ المتاح من:

```text
npm run build
pnpm build
npm run lint
pnpm lint
```

إذا فشل أمر بسبب dependencies أو بيئة محلية، اذكر ذلك بوضوح ولا تخفيه.
