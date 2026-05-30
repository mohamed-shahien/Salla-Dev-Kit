# Salla JavaScript Rules

## Theme Raed JS baseline

Theme Raed uses webpack entries:

- `app`: global app, wishlist, blog, and `app.scss`.
- `home`: `src/assets/js/home.js`.
- `product-card`
- `main-menu`
- `wishlist-card`
- `add-product-toast`
- `digital-files`
- `checkout`
- `pages`
- `product`
- `order`
- `testimonials`

Output goes to `public/`.

## Existing initialization model

`src/assets/js/base-page.js` provides:

```javascript
BasePage.initiateWhenReady(['index']);
```

`src/assets/js/home.js` uses a `Home extends BasePage` class and initializes only on the `index` page.

## Salla-Dev-Kit preferred model for new component JS

For new component-specific JS, prefer service files and conditional loading when the project has or accepts `lazyImportWhenExists`:

```javascript
lazyImportWhenExists({
  key: "F__component",
  selector: ".F__component",
  importer: () => import("./services/home/F__component"),
  init: (mod, hosts) => mod.default(hosts, helpers),
});
```

If the current Theme Raed baseline does not have this helper, either:

- add it deliberately in `home.js`, or
- follow the existing `BasePage` pattern for small changes.

Do not silently mix patterns without documenting the decision.

## Rules

- No inline JS in Twig.
- Use page-specific entries instead of global app JS when possible.
- Guard selectors.
- Avoid double initialization.
- Use passive listeners for scroll/touch where appropriate.
- Keep component JS safe with multiple component instances.
- Avoid loading heavy libraries for a single component unless lazy loaded.

## Validation

- Selector exists in Twig.
- JS runs only on intended page/component.
- Multiple component instances work.
- Build passes.
