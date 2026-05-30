---
description: Generate implementation tasks for a Salla plan
argument-hint: "<plan path>"
---

# Purpose

Break a Salla implementation plan into ordered, testable tasks that can be executed by an agent without guessing.

Input:

```text
$ARGUMENTS
```

# When to use

Use this command after `salla.plan` and before `salla.implement`.

# Files to read first

1. `AGENTS.md`
2. `.salla/templates/tasks-template.md`
3. The target `plan.md`
4. The target `spec.md`
5. The target `clarify.md`, if present
6. `references/salla-technical-review-rules.md`

# Step-by-step workflow

1. Read the plan and extract all file changes.
2. Group work into phases: discovery, schema, Twig, CSS, JS, validation, report.
3. Create small tasks with IDs like `T001`.
4. Mark parallel-safe tasks with `[P]`.
5. Ensure every task names a file or concrete verification action.
6. Add dependencies when a task cannot start before another.
7. Add final validation and reporting tasks.
8. Produce or update `tasks.md`.

# Output format

```text
# Tasks: <feature>
## Phase 1: Discovery
## Phase 2: Schema
## Phase 3: Twig
## Phase 4: CSS
## Phase 5: JavaScript
## Phase 6: Validation
## Phase 7: Report
```

Each task format:

```text
- [ ] T001 [P] Read <file> to confirm <fact>.
```

# Validation checklist

- [ ] Tasks are ordered by dependency.
- [ ] Each task has a file or concrete action.
- [ ] Schema tasks occur before Twig tasks when Twig reads new fields.
- [ ] CSS/JS tasks reference exact paths.
- [ ] Validation tasks include build command when available.

# Stop/warn conditions

- Stop if no plan is available.
- Warn if the plan does not name exact files.
- Warn if tasks ask to edit generated `public/` output.
- Warn if tasks skip validation.

# Example usage

```text
/salla.tasks specs/hero-video/plan.md
```
