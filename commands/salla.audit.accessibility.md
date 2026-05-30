---
description: Audit Salla theme accessibility
argument-hint: "<scope or files>"
---

# Purpose

Audit accessibility of Salla pages and components: semantic structure, keyboard support, focus states, ARIA, forms, media controls, contrast, and reduced motion.

Input:

```text
$ARGUMENTS
```

# When to use

Use this command after adding interactive UI, sliders, tabs, modals, accordions, filters, navigation, or custom buttons.

# Files to read first

1. `AGENTS.md`
2. `references/salla-accessibility-rules.md`
3. `references/salla-twig-rules.md`
4. `references/salla-js-rules.md`
5. Relevant Twig/CSS/JS files.

# Step-by-step workflow

1. Identify interactive elements in the scope.
2. Check native elements first: buttons for actions, anchors for navigation.
3. Check keyboard access and focus order.
4. Check focus styles are visible.
5. Check ARIA only where needed and ensure states update.
6. Check alt text and decorative images.
7. Check reduced motion for animations and sliders.
8. Report issues with fixes.

# Output format

```text
# Accessibility Audit
## Scope
## Findings
## Semantics
## Keyboard
## Focus
## ARIA
## Media/Images
## Motion
## Required Fixes
```

# Validation checklist

- [ ] Clickable div/span patterns reviewed.
- [ ] Keyboard interaction reviewed.
- [ ] Focus visibility reviewed.
- [ ] ARIA states reviewed.
- [ ] Reduced motion considered.

# Stop/warn conditions

- Warn if custom controls replace native controls without keyboard support.
- Warn if hover-only content is inaccessible.
- Warn if autoplay media has no control.
- Stop if requested design hides focus indicators.

# Example usage

```text
/salla.audit.accessibility Audit FAQ tabs and mobile menu interactions.
```
