---
description: Audit Salla theme performance
argument-hint: "<scope or URL/files>"
---

# Purpose

Audit performance risks in a Salla theme: bundle size, lazy loading, images, render blocking assets, repeated JS initialization, and generated assets.

Input:

```text
$ARGUMENTS
```

# When to use

Use this command before release, after adding a component, or when performance issues are suspected.

# Files to read first

1. `AGENTS.md`
2. `references/salla-performance-rules.md`
3. `references/salla-js-rules.md`
4. `references/salla-css-rules.md`
5. `webpack.config.js`
6. `package.json`
7. `src/views/layouts/master.twig`
8. Relevant Twig/CSS/JS files.

# Step-by-step workflow

1. Identify asset entries and generated output.
2. Check whether JS is loaded only on pages/components that need it.
3. Inspect images for lazy loading, dimensions, and object-fit strategy.
4. Check sliders and third-party libraries for unnecessary eager loading.
5. Check CSS scope and whether component CSS bloats global styles.
6. Check repeated event binding or double initialization.
7. Run build if available.
8. Report findings with severity and fixes.

# Output format

```text
# Performance Audit
## Scope
## Findings
## Bundle/Asset Notes
## Image Notes
## JS Notes
## CSS Notes
## Validation
## Required Fixes
```

# Validation checklist

- [ ] Build command identified.
- [ ] Render-blocking additions reviewed.
- [ ] Component JS loading reviewed.
- [ ] Images have dimensions or stable aspect ratios where possible.
- [ ] Repeated initialization risks checked.

# Stop/warn conditions

- Warn if source files are missing and only `public/` files exist.
- Warn if a new library is loaded globally for one component.
- Warn if hero media is too large or eagerly loads multiple slides.
- Stop if requested fix requires network dependency installation without approval.

# Example usage

```text
/salla.audit.performance Audit the home page components after adding product reels.
```
