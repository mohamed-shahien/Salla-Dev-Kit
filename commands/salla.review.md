---
description: Review Salla theme changes for correctness and rule compliance
argument-hint: "<changed files, diff, or scope>"
---

# Purpose

Review Salla theme changes in a code-review stance: find bugs, regressions, rule violations, missing validation, and risk before merge or handoff.

Input:

```text
$ARGUMENTS
```

# When to use

Use this command after implementation and before final delivery.

# Files to read first

1. `AGENTS.md`
2. `.salla/templates/review-template.md`
3. `references/salla-technical-review-rules.md`
4. `references/salla-anti-patterns.md`
5. `git diff` or the changed files.
6. Relevant baseline files for context.

# Step-by-step workflow

1. Identify changed files.
2. Read the relevant surrounding code.
3. Review `twilight.json` schema changes first.
4. Review Twig for Salla rule violations and runtime risks.
5. Review CSS scope and responsive risks.
6. Review JS loading, selectors, event lifecycle, and double init.
7. Review SEO, accessibility, performance, and security impact.
8. Verify validation evidence.
9. Report findings first, ordered by severity.
10. If no findings, say so and mention remaining test gaps.

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

- [ ] Findings include file and line when possible.
- [ ] Findings are actionable.
- [ ] No speculation is presented as fact.
- [ ] Missing tests/build are called out.
- [ ] Summary comes after findings.

# Stop/warn conditions

- Stop if there is no diff and no scope to review.
- Warn if generated `public/` files are included without source changes.
- Warn if user changes are mixed with implementation changes.
- Warn if review cannot verify runtime behavior.

# Example usage

```text
/salla.review Review current git diff before handoff.
```
