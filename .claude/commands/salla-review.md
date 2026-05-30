---
description: Legacy alias for Salla code review
argument-hint: "<diff, files, or scope>"
---

# Purpose

Review Salla theme changes for bugs, regressions, and rule violations. Prefer `/salla.review` for new work.

Input:

```text
$ARGUMENTS
```

# When to use

Use after implementation or when the user asks for a review with the older command name.

# Files to read first

1. `AGENTS.md`
2. `.salla/templates/review-template.md`
3. `references/salla-technical-review-rules.md`
4. `references/salla-anti-patterns.md`
5. Changed files or git diff.

# Step-by-step workflow

1. Identify changed files.
2. Read relevant surrounding context.
3. Review schema first.
4. Review Twig, CSS, and JS contracts.
5. Review performance, SEO, accessibility, and security impact.
6. Check validation evidence.
7. Report findings first, ordered by severity.

# Output format

```text
# Review
## Findings
### High
### Medium
### Low
## Open Questions
## Test Gaps
## Summary
```

# Validation checklist

- [ ] Findings are actionable.
- [ ] File/line references are included when possible.
- [ ] Missing validation is called out.
- [ ] No fixes are applied unless requested.

# Stop/warn conditions

- Stop if there is no diff and no review scope.
- Warn if generated assets are changed without source changes.
- Warn if review cannot verify runtime behavior.

# Example usage

```text
/salla-review current git diff
```
