---

description: "Task list for minimal resume layout implementation"
---

# Tasks: Minimal Resume Layout for Experience Page

**Input**: Design documents from `/specs/001-resume-layout/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, quickstart.md

**Tests**: Tests are OPTIONAL - none requested in specification.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Web app**: pages/, components/, content/ at repository root

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Ensure project is ready for resume page addition

- [x] T001 Verify MDX support in Astro configuration

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

No foundational tasks required for this static page feature.

**Checkpoint**: Foundation ready - user story implementation can now begin

---

## Phase 3: User Story 1 - View Resume on Experience Page (Priority: P1) 🎯 MVP

**Goal**: Enable visitors to access and view a professional resume on the /experience page with minimal, zen-like design.

**Independent Test**: Navigate to /experience in browser; verify resume displays with proper title, sections, and theme adaptation.

### Implementation for User Story 1

- [x] T002 [US1] Create pages/experience.mdx with frontmatter and basic MDX structure
- [x] T003 [US1] Add resume header section (name, title, contact) in pages/experience.mdx
- [x] T004 [US1] Add professional summary section in pages/experience.mdx
- [x] T005 [US1] Add experience section with job history in pages/experience.mdx
- [x] T006 [US1] Add education section in pages/experience.mdx
- [x] T007 [US1] Add skills section in pages/experience.mdx
- [x] T008 [US1] Apply minimal design styles (whitespace, typography) in pages/experience.mdx
- [x] T009 [US1] Ensure responsive layout and theme support in pages/experience.mdx

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

---

## Phase N: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect the resume page

- [x] T010 [P] Review and optimize content for selling points without lying
- [x] T011 [P] Test page load performance under 2 seconds

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS user stories
- **User Stories (Phase 3+)**: Depend on Foundational phase completion
  - User stories can proceed sequentially in priority order (P1 only)
- **Polish (Final Phase)**: Depends on all user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories

### Within Each User Story

- Implementation tasks in logical order: structure → content sections → styling → theming
- Story complete before moving to polish

### Parallel Opportunities

- All polish tasks marked [P] can run in parallel
- Within US1: Content sections (T003-T007) can be parallel if editing different parts

---

## Parallel Example: User Story 1

```bash
# Launch content sections together:
Task: "Add professional summary section in pages/experience.mdx"
Task: "Add experience section with job history in pages/experience.mdx"
Task: "Add education section in pages/experience.mdx"
Task: "Add skills section in pages/experience.mdx"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (minimal)
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Test User Story 1 independently
5. Deploy/demo if ready

### Incremental Delivery

1. Complete Setup + Foundational → Ready for resume
2. Add User Story 1 → Test independently → Deploy/Demo (MVP!)
3. Polish if needed

---

## Notes

- [P] tasks = different files, no dependencies
- [US1] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- Avoid: vague tasks, cross-story dependencies that break independence