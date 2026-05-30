# Project Map

هذا مرجع لمسارات ثيم سلة المتوقعة. استخدمه لتحديد مكان الكود قبل التعديل.

## ملفات الجذر

| path | purpose |
|------|---------|
| `twilight.json` | تعريف إعدادات الثيم والمكونات |
| `package.json` | أوامر build و dependencies |
| `tailwind.config.js` | إعدادات Tailwind إذا كان مستخدما |
| `webpack.config.js` | إعدادات البناء |

## Layouts

| path | purpose |
|------|---------|
| `src/views/layouts/master.twig` | القالب الأب لكل الصفحات |
| `src/views/layouts/css.twig` | CSS variables وإعدادات الألوان |
| `src/views/layouts/settings.twig` | سكريبتات الإعدادات العامة |
| `src/views/layouts/customer.twig` | Layout خاص بصفحات العميل إذا وجد |

## Pages

| path | purpose |
|------|---------|
| `src/views/pages/index.twig` | الصفحة الرئيسية |
| `src/views/pages/cart.twig` | السلة |
| `src/views/pages/product/single.twig` | صفحة المنتج |
| `src/views/pages/product/index.twig` | قائمة المنتجات |
| `src/views/pages/blog/index.twig` | قائمة المقالات |
| `src/views/pages/blog/single.twig` | المقال |
| `src/views/pages/landing-page.twig` | صفحة الهبوط |
| `src/views/pages/loyalty.twig` | الولاء |
| `src/views/pages/thank-you.twig` | شكرا لك |

## Components

| path | purpose |
|------|---------|
| `src/views/components/[theme-folder]/` | مكونات الثيم المخصصة |
| `src/views/components/home/` | مكونات home الافتراضية أو القديمة |
| `src/views/components/header/header.twig` | الترويسة |
| `src/views/components/footer/footer.twig` | التذييل |
| `src/views/components/custom/` | helpers مثل الأزرار والعناوين إذا وجدت |

## Assets

| path | purpose |
|------|---------|
| `src/assets/scss/home.scss` | CSS للصفحة الرئيسية في بعض الثيمات |
| `src/assets/styles/04-components/home-blocks.scss` | CSS لمكونات home في بعض الثيمات |
| `src/assets/js/home.js` | مدخل JS للصفحة الرئيسية |
| `src/assets/js/services/home/` | خدمات JS منفصلة لمكونات home |
| `src/assets/js/app.js` | JS عام |
| `public/` | ملفات مبنية أو عامة، لا تعدلها يدويا إذا كانت generated |

## ملاحظة مهمة

قد يختلف اسم مجلد SCSS أو components حسب الثيم المستورد. افحص الهيكل الموجود أولا ثم اتبع النمط المحلي.
