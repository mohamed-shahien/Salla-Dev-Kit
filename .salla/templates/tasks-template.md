# Tasks Template

## Feature

- Name:
- Spec:
- Plan:

## Task Rules

- Tasks must be small and independently verifiable.
- Each task should name the target file.
- Mark tasks that can run in parallel with `[P]`.
- Do not implement before prerequisite research tasks are complete.

## Phase 1: Discovery

- [ ] T001 Read `AGENTS.md`.
- [ ] T002 Read the relevant files listed in the plan.
- [ ] T003 Confirm Theme Raed or current theme file structure.

## Phase 2: Schema

- [ ] T010 Update `twilight.json` settings if required.
- [ ] T011 Update `twilight.json` component fields if required.
- [ ] T012 Verify schema ids, formats, defaults, and labels.

## Phase 3: Twig

- [ ] T020 Create or update the component Twig file.
- [ ] T021 Ensure first executable line is `{% set c = component %}`.
- [ ] T022 Add empty state and fallbacks.
- [ ] T023 Remove any inline script/style.

## Phase 4: CSS

- [ ] T030 Add SCSS/CSS in the page-appropriate file.
- [ ] T031 Add required component comment.
- [ ] T032 Scope selectors under the root class.
- [ ] T033 Verify responsive behavior.

## Phase 5: JavaScript

- [ ] T040 Create JS service only if needed.
- [ ] T041 Add conditional loader in the correct entry file.
- [ ] T042 Guard against double initialization.
- [ ] T043 Verify behavior with multiple component instances.

## Phase 6: Validation

- [ ] T050 Run available build command.
- [ ] T051 Run available lint/static checks.
- [ ] T052 Inspect generated output or local preview when possible.
- [ ] T053 Check performance, SEO, accessibility gates.

## Phase 7: Report

- [ ] T060 Write implementation report.
- [ ] T061 List files changed.
- [ ] T062 List validation results and known limitations.
