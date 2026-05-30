---
description: Create a Salla feature/component specification before implementation
argument-hint: "<feature or component request>"
---

# Purpose

Create a complete Salla feature spec from the request, using the workflow in `AGENTS.md` and `.salla/templates/spec-template.md`. The output should make the desired behavior, merchant controls, technical boundaries, and acceptance criteria explicit before planning or implementation.

Request:

```text
$ARGUMENTS
```

# When to use

Use this command when:

- A new Salla component, page feature, theme setting, or workflow is requested.
- The request has product, UX, customization, SEO, accessibility, or performance implications.
- The implementation should not start until requirements are written clearly.

# Files to read first

1. `AGENTS.md`
2. `README.md`
3. `.salla/templates/spec-template.md`
4. `references/salla-theme-constitution.md`
5. `references/salla-twilight-rules.md`
6. `references/salla-file-structure.md`
7. Relevant files in the current theme, especially `twilight.json`, `src/views/pages/`, `src/views/components/`, `src/assets/styles/`, and `src/assets/js/`.

# Step-by-step workflow

1. Inspect the request and classify it as component, page, schema, styling, behavior, or audit.
2. Inspect the current repo structure before writing the spec. If `theme-raed-master/` is the active baseline, record Theme Raed conventions.
3. Identify target users: merchant, shopper, and developer.
4. Write goals, non-goals, and user stories.
5. Separate global customization requirements from component-specific requirements.
6. Define functional requirements with stable IDs like `FR-001`.
7. Define content fields and schema expectations without inventing Salla Partners keys.
8. Add UX, SEO, accessibility, performance, and security requirements.
9. Add acceptance criteria that can be tested.
10. List open questions and mark whether each blocks planning.
11. Save the spec only if the user requested file creation or the repo workflow clearly expects it. Use `specs/<feature>/spec.md` if no local convention exists.

# Output format

Return or create a markdown spec using:

```text
# Feature Spec: <name>
## Metadata
## Problem Statement
## Goals
## Non-Goals
## Users
## User Stories
## Functional Requirements
## Customization Requirements
## Content Model
## UX Requirements
## SEO Requirements
## Accessibility Requirements
## Performance Requirements
## Security Requirements
## Acceptance Criteria
## Dependencies
## Open Questions
```

# Validation checklist

- [ ] The spec distinguishes `settings` from `fields`.
- [ ] The spec does not invent a Salla Partners `key`.
- [ ] Requirements have stable IDs.
- [ ] Acceptance criteria are testable.
- [ ] SEO, accessibility, performance, and security are not omitted.
- [ ] Open questions are explicitly blocking or non-blocking.

# Stop/warn conditions

- Stop if the user asks to implement immediately but the component is new and no Salla Partners `key`/`path` is available.
- Warn if requirements imply editing generated `public/` assets directly.
- Warn if the request asks for inline Twig scripts or styles.
- Warn if a global setting is being duplicated in several component fields.

# Example usage

```text
/salla.specify Build a hero video banner component with mobile image fallback, CTA button, autoplay toggle, and SEO-friendly heading.
```
