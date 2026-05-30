---
description: Audit Salla theme SEO
argument-hint: "<scope or files>"
---

# Purpose

Audit SEO quality for Salla theme pages and components, focusing on semantic HTML, headings, links, image alt text, indexable content, and duplicate or hidden content risks.

Input:

```text
$ARGUMENTS
```

# When to use

Use this command before release, after changing page templates, or after adding content-heavy components.

# Files to read first

1. `AGENTS.md`
2. `references/salla-seo-rules.md`
3. `references/salla-twig-rules.md`
4. `src/views/layouts/master.twig`
5. Relevant files in `src/views/pages/`
6. Relevant files in `src/views/components/`

# Step-by-step workflow

1. Identify page/component scope.
2. Check heading hierarchy and avoid decorative headings that confuse document structure.
3. Check links for valid href, descriptive text, and merchant-provided URLs.
4. Check images for meaningful `alt`, width/height where possible, and lazy loading.
5. Check whether text content is available in HTML, not only JS.
6. Check pagination, product/category/blog semantics where relevant.
7. Report issues with file references and fixes.

# Output format

```text
# SEO Audit
## Scope
## Findings
## Headings
## Links
## Images
## Structured/Indexable Content
## Validation
## Required Fixes
```

# Validation checklist

- [ ] H1/H2 usage reviewed for page scope.
- [ ] Image alt text reviewed.
- [ ] Anchor text reviewed.
- [ ] Merchant URLs have fallbacks/guards.
- [ ] Content is not hidden from crawlers unnecessarily.

# Stop/warn conditions

- Warn if a component uses empty headings when fields are blank.
- Warn if links use `#` as default output.
- Warn if important text is injected only after JS.
- Stop if SEO requirement conflicts with Salla platform output and needs product decision.

# Example usage

```text
/salla.audit.seo Review product and blog templates for SEO regressions.
```
