---
description: Analyze the current Salla codebase before implementation
argument-hint: "<feature, component, or scope>"
---

# Purpose

Inspect the current repository and produce factual implementation guidance based on the actual Salla theme structure, with special attention to Theme Raed baseline.

Input:

```text
$ARGUMENTS
```

# When to use

Use this command before planning or implementing when:

- The active theme structure is unknown.
- The task touches `twilight.json`, Twig, CSS, or JS.
- You need to know whether this project follows Theme Raed conventions.
- You are about to refactor or audit existing code.

# Files to read first

1. `AGENTS.md`
2. `.salla/templates/analyze-template.md`
3. `references/salla-file-structure.md`
4. `references/salla-common-patterns.md`
5. `package.json` or nested theme `package.json`
6. `twilight.json` or nested theme `twilight.json`
7. `webpack.config.js`
8. `src/views/layouts/master.twig`
9. `src/views/pages/index.twig`
10. `src/assets/styles/app.scss`
11. `src/assets/js/home.js`

# Step-by-step workflow

1. Locate the active theme root. If there is a nested `theme-raed-master/theme-raed-master`, identify it clearly.
2. Read package scripts and build tool configuration.
3. Read `twilight.json` and summarize settings, components, field patterns, and component paths.
4. Read layout and page entry files.
5. Read CSS entry and component style files.
6. Read JS entry files and initialization model.
7. Identify reusable helpers and conventions.
8. Identify anti-patterns or risks relevant to the requested feature.
9. Produce a concise analysis with file references.

# Output format

```text
# Analysis: <scope>
## Codebase Facts
## Theme Baseline
## Current Patterns
## Reusable Helpers
## Constraints
## Anti-Patterns Found
## Recommended Implementation Approach
## Validation Commands
## Analysis Outcome
```

# Validation checklist

- [ ] Findings are based on files read, not assumptions.
- [ ] Active theme root is identified.
- [ ] Build command is taken from `package.json`.
- [ ] CSS and JS entries are named.
- [ ] Theme Raed baseline differences are called out.

# Stop/warn conditions

- Stop if the active theme root cannot be determined.
- Warn if there are duplicate theme roots and the user did not specify which one is active.
- Warn if files appear generated or encoded incorrectly.
- Warn if the requested change conflicts with the current asset pipeline.

# Example usage

```text
/salla.analyze Theme Raed home components and asset structure
```
