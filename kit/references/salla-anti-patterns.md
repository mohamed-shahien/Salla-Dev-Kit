# Salla Anti-Patterns

## Twilight

- Creating component objects manually without Salla Partners key/path.
- Duplicating global controls inside every component.
- Renaming field IDs without migration.
- Adding unsupported root keys.
- Leaving required fields without defaults or empty states.

## Twig

- Inline `<script>`.
- Inline `<style>`.
- Empty headings.
- `href="#"` as a real link.
- Reading a field that does not exist in `twilight.json`.
- Assuming helper includes exist without checking.
- Capitalized Twig variable names.

## CSS

- Editing `public/app.css` directly.
- Broad selectors that affect the whole storefront.
- Hover-only content.
- Layouts without stable dimensions for images/cards.
- One component overriding Salla web component internals globally.

## JS

- Loading component JS globally.
- Binding events repeatedly on every render.
- Querying selectors without guards.
- Handling click only when keyboard is also required.
- Importing heavy libraries for one component without lazy loading.

## Performance

- Eager loading all slider media.
- Using large background images without responsive alternatives.
- Adding global layout scripts for component behavior.

## Security

- Raw merchant HTML.
- Unsafe URL output.
- Inline event handlers.
