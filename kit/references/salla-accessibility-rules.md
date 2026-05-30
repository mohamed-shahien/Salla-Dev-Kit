# Salla Accessibility Rules

## Core rules

- Use native controls first.
- Use `<button>` for actions and `<a>` for navigation.
- Keep focus states visible.
- Ensure keyboard users can reach and operate controls.
- Avoid hover-only information.
- Provide alt text for meaningful images and empty alt for decorative images.
- Respect reduced motion for animations and autoplay.

## Sliders and tabs

- Sliders should expose controls when multiple slides exist.
- Tabs need button semantics and state changes.
- Autoplay should not trap attention or prevent interaction.

## Images

```twig
<img src="{{ image }}" alt="{{ title|default('') }}" loading="lazy">
```

If decorative:

```twig
<img src="{{ image }}" alt="" aria-hidden="true">
```

## JS interactions

- Update `aria-expanded`, `aria-selected`, or `hidden` when custom controls need them.
- Do not rely on mouse events only.
- Avoid double-bound event listeners.

## Audit checks

- Keyboard path.
- Focus order.
- Focus style.
- ARIA correctness.
- Contrast and reduced motion.
