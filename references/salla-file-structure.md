# Salla File Structure

## Current repository note

The current root contains a nested Theme Raed baseline at:

```text
theme-raed-master/theme-raed-master/
```

The workflow kit itself lives at the repository root.

## Theme Raed baseline

```text
theme-raed-master/theme-raed-master/
|-- package.json
|-- twilight.json
|-- webpack.config.js
|-- tailwind.config.js
|-- public/
|-- src/
|   |-- assets/
|   |   |-- images/
|   |   |-- js/
|   |   |   |-- app.js
|   |   |   |-- base-page.js
|   |   |   |-- home.js
|   |   |   |-- product.js
|   |   |   |-- products.js
|   |   |   |-- cart.js
|   |   |   |-- partials/
|   |   |-- styles/
|   |       |-- app.scss
|   |       |-- 01-settings/
|   |       |-- 02-generic/
|   |       |-- 03-elements/
|   |       |-- 04-components/
|   |       |-- 05-utilities/
|   |-- locales/
|   |-- views/
|       |-- layouts/
|       |-- pages/
|       |-- components/
```

## Important Theme Raed files

| file | purpose |
|------|---------|
| `twilight.json` | Theme settings and component schema |
| `webpack.config.js` | Asset entry/output config |
| `src/views/layouts/master.twig` | Global layout |
| `src/views/pages/index.twig` | Home page, injects `{% component home %}` and `home.js` |
| `src/assets/styles/app.scss` | Main SCSS entry |
| `src/assets/styles/04-components/home-blocks.scss` | Home component styles |
| `src/assets/js/home.js` | Home page behavior |
| `src/assets/js/base-page.js` | Page-specific initialization helper |
| `public/` | Generated output from webpack |

## Build scripts

Theme Raed `package.json` includes:

```text
pnpm production
pnpm prod
pnpm development
pnpm watch
```

The package enforces pnpm through `preinstall`.

## Rule

Before editing, determine whether the active target is the root workflow kit or the nested Theme Raed theme.
