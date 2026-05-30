---
description: Legacy alias for a full Salla technical audit
argument-hint: "[scope or files]"
---

# Purpose

Run a broad Salla technical audit. This legacy alias should follow the same depth as the newer audit commands and can route findings to performance, SEO, accessibility, schema, Twig, CSS, JS, and security categories.

Input:

```text
$ARGUMENTS
```

# When to use

Use when the user asks for a general audit and does not specify performance, SEO, or accessibility only.

# Files to read first

1. `AGENTS.md`
2. `.salla/templates/audit-template.md`
3. `references/salla-technical-review-rules.md`
4. `references/salla-anti-patterns.md`
5. `references/salla-file-structure.md`
6. Relevant `twilight.json`, Twig, CSS, and JS files.

# Step-by-step workflow

1. Identify the audit scope.
2. Locate the active theme root.
3. Review `twilight.json` for allowed sections, field IDs, and component paths.
4. Review Twig for runtime risks and inline script/style violations.
5. Review CSS for source location, scope, and responsive risks.
6. Review JS for page/component loading and double-init risks.
7. Review performance, SEO, accessibility, and security concerns.
8. Report findings ordered by severity.

# Output format

```text
# Salla Audit
## Findings
## Performance
## SEO
## Accessibility
## Security
## Technical Debt
## Passed Checks
## Not Checked
## Final Recommendation
```

# Validation checklist

- [ ] Findings include file references when possible.
- [ ] Generated `public/` edits are flagged.
- [ ] Schema and Twig values are cross-checked.
- [ ] Validation gaps are explicit.

# Stop/warn conditions

- Stop if no scope and no theme files can be found.
- Warn if duplicate theme roots exist.
- Warn if build cannot be run.
- Warn if the target files appear generated.

# Example usage

```text
/salla-audit theme-raed-master/theme-raed-master
```
