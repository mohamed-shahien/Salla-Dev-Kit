# AGENTS.md

Mandatory instructions for any AI agent or developer working in this repository.

## Project Identity

- The current repository root is the `salla-forge` project.
- Do not create a nested `salla-forge/` directory.
- Create workflow kit files directly in this repository root.
- Follow Salla Twilight theme structure; do not invent unsupported paths.

## Core Workflow

For substantial work, use this order:

1. `specify`: write or read the spec using `.salla/templates/spec-template.md`.
2. `clarify`: resolve ambiguity using `.salla/templates/clarify-template.md`.
3. `plan`: map the work to files using `.salla/templates/plan-template.md`.
4. `tasks`: split the plan using `.salla/templates/tasks-template.md`.
5. `analyze`: inspect the current codebase using `.salla/templates/analyze-template.md`.
6. `implement`: edit the correct source files only.
7. `review`: perform code review using `.salla/templates/review-template.md`.

Small changes may compress these artifacts, but the reasoning order must stay intact.

## Claude Code And Codex

- In Claude Code, use the slash commands in `.claude/commands/`.
- In Codex, manually follow the same workflow by reading templates and references.
- Large tasks should produce real artifacts, not generic summaries.
- Always identify the active theme root before editing theme files.

## Read Order

Read these first when working:

1. `AGENTS.md`
2. `README.md`
3. `.salla/workflow.md`
4. `.salla/templates/`
5. `.salla/quality-gates.md`
6. `references/salla-theme-constitution.md`
7. `references/salla-twilight-rules.md`
8. `references/salla-schema-rules.md`
9. `references/salla-twig-rules.md`
10. `references/salla-css-rules.md`
11. `references/salla-js-rules.md`
12. `references/salla-file-structure.md`
13. `references/salla_schema_reference.json`
14. `references/salla_schema_reference_full.json`
15. `examples/` only when a concrete pattern is needed.

## Theme Raed Baseline

The attached Theme Raed project is nested at:

```text
theme-raed-master/theme-raed-master/
```

This path exists on disk. Treat it as the Theme Raed root unless the user explicitly moves or chooses another root.

Important baseline facts:

- `public/` is generated build output. Do not edit it manually.
- Source CSS is in `src/assets/styles/`.
- `src/assets/styles/app.scss` is the main style entry.
- Home component styles are usually in `src/assets/styles/04-components/home-blocks.scss`.
- Home components are usually in `src/views/components/home/`.
- `src/assets/js/home.js` uses `BasePage.initiateWhenReady(['index'])`.
- `webpack.config.js` defines entries like `app`, `home`, `product`, and `checkout`.
- Build scripts in `package.json`: `pnpm production`, `pnpm prod`, `pnpm development`, `pnpm watch`.

## `twilight.json`

`twilight.json` is the theme control surface. Edit only:

- `settings`: global theme controls.
- `components`: page component definitions.

Do not create a component object manually. A new component must be created in Salla Partners first so Salla generates:

- `key`
- `path`
- the linked Twig component file

Only after that may you edit `title`, `icon`, `is_default`, and `fields`.

## `settings` vs `fields`

Use `settings` for shared theme-wide controls:

- Global button style.
- Global colors.
- Global radius values.
- Global spacing between components.
- Global animation toggles.

Read settings in Twig:

```twig
{{ theme.settings.get('button_style', 'F__two') }}
{{ theme.settings.get('has_animation', true) }}
```

Use `fields` for controls that belong to one component instance:

- Section title/subtitle.
- Slider speed.
- Component cards/images.
- This section background.
- This component container toggle.

Read fields in Twig:

```twig
{{ c.title }}
{{ c.autoplay_delay }}
```

## Twig Rules

Every new Salla Forge component Twig file must start with:

```twig
{% set c = component %}
```

Rules:

- Use lowercase Twig variable names.
- Do not write `<script>` inside component Twig.
- Do not write `<style>` inside component Twig.
- Use `c.field_id` for component fields.
- Use `theme.settings.get('id', fallback)` for global settings.
- Use `|default(...)` for optional values.
- Preserve localized/multilingual values from Salla fields.
- Do not hardcode customer-facing Arabic-only or English-only text unless it is an agreed fixed label.
- Use helper includes only after confirming they exist in the theme.

## CSS/SCSS Rules

For Theme Raed home components, source styles usually belong in:

```text
src/assets/styles/04-components/home-blocks.scss
```

For other themes, inspect the local structure first.

New Salla Forge component CSS must include:

```scss
/*------------------------------------------------------------------------
 *              COMPONENTS / F__COMPONENT_NAME
 *------------------------------------------------------------------------*/
```

Rules:

- Edit source SCSS/CSS, not generated `public/app.css`.
- Scope selectors under the component root class.
- Keep responsive behavior explicit.
- Avoid hover-only content.

## JavaScript Rules

Do not write JavaScript inside Twig.

For new Salla Forge home component JS:

1. Put component behavior in a separate service file.
2. Load it conditionally from the page entry.
3. Prefer lazy import when the project supports it or when it is intentionally introduced.

Example:

```javascript
lazyImportWhenExists({
  key: "F__component_name",
  selector: ".F__componentName",
  importer: () => import("./services/home/F__component_name"),
  init: (mod, hosts) => mod.default(hosts, helpers),
});
```

Theme Raed currently does not include `lazyImportWhenExists` by default. For small changes to existing Theme Raed behavior, follow the existing `BasePage` pattern. For new Salla Forge behavior, introduce conditional loading deliberately and document it.

## Quality Gates

Before delivery:

- No inline `<script>` or `<style>` in component Twig.
- New Salla Forge components start with `{% set c = component %}`.
- Twig variables are lowercase.
- `settings` are not duplicated inside component `fields`.
- Fields have clear `id`, `type`, `label`, defaults, and localization where needed.
- CSS has the required component comment and is scoped.
- JS is conditional/lazy where appropriate.
- Performance, security, accessibility, and SEO gates are checked.
- No unrelated files are changed.

## Delivery Report

End every implementation with:

- Files changed.
- What changed.
- Merchant/developer usage.
- Validation performed.
- Salla Partners dependencies or limitations.
