---
description: Clarify a Salla spec and resolve blocking ambiguity
argument-hint: "<spec path or feature request>"
---

# Purpose

Find ambiguity in a Salla feature request or spec, ask only the questions needed to unblock planning, and record assumptions that are safe to proceed with.

Input:

```text
$ARGUMENTS
```

# When to use

Use this command after `salla.specify` and before `salla.plan` when:

- The spec has open questions.
- Settings vs fields are unclear.
- Salla Partners key/path status is unknown.
- UX behavior differs across desktop/mobile.
- SEO, accessibility, performance, or security requirements are incomplete.

# Files to read first

1. `AGENTS.md`
2. `.salla/templates/clarify-template.md`
3. The target `spec.md`, if present.
4. `references/salla-anti-patterns.md`
5. `references/salla-schema-rules.md`
6. `references/salla-file-structure.md`

# Step-by-step workflow

1. Read the spec or request fully.
2. Extract all vague terms, missing defaults, and hidden dependencies.
3. Group ambiguities by category: product, schema, Twig, CSS, JS, SEO, accessibility, performance, security.
4. Decide whether each ambiguity blocks planning or can be handled as an assumption.
5. Ask up to three high-impact questions if user input is required.
6. If questions are not required, write assumptions and continue-ready notes.
7. Update or produce `clarify.md` using `.salla/templates/clarify-template.md`.
8. Make the final recommendation: ready for plan, ready with assumptions, or blocked.

# Output format

```text
# Clarification: <feature>
## Ambiguity Inventory
## Required Decisions
## Assumptions
## Blockers
## Updated Requirements
## Ready For Plan
```

# Validation checklist

- [ ] No more than three user questions are asked.
- [ ] Every question explains why it matters.
- [ ] Every blocker is concrete.
- [ ] Safe assumptions are documented.
- [ ] Salla Partners key/path status is explicit.

# Stop/warn conditions

- Stop if implementation depends on a new component key/path that has not been created in Salla Partners.
- Warn if the spec requests behavior Salla components cannot support without custom JS.
- Warn if the desired schema field type is not present in the current Salla schema reference.
- Warn if the request would change shared settings without migration notes.

# Example usage

```text
/salla.clarify specs/hero-video/spec.md
```
