# Tasks: Code Readability and GitHub Inbound Enhancement

**Input**: Design documents from `/specs/001-improve-code-readability/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, quickstart.md

**Tests**: No test tasks included as not requested in specification.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2)
- Include exact file paths in descriptions

## Path Conventions

- Single project: `src/`, `README.md` at repository root

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [x] T001 Create feature branch and verify setup per implementation plan
- [x] T002 Review existing codebase structure in src/

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T003 Identify unused components and files not related to landing, /blog, or /journey pages

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Code Cleanup for Readability (Priority: P1) 🎯 MVP

**Goal**: Clean up code for better readability and remove unused elements

**Independent Test**: Code passes linting, formatting is consistent, and unused files are removed without breaking functionality

### Implementation for User Story 1

- [x] T004 [P] [US1] Refactor complex functions in src/components/ for simplicity and clarity
- [x] T005 [P] [US1] Add JSDoc comments to key functions in src/lib/utils.ts
- [x] T006 [P] [US1] Ensure consistent formatting with Prettier across src/
- [x] T007 [US1] Delete unused components not used in landing, /blog, or /journey pages from src/components/
- [x] T008 [US1] Remove unused assets from src/assets/ not referenced in landing, /blog, or /journey
- [x] T009 [US1] Clean up unused styles in src/styles/global.css
- [x] T010 [US1] Update README.md to clearly showcase personal profile and services

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

---

## Phase 4: User Story 2 - Enable GitHub Inbound Functionality (Priority: P2)

**Goal**: Allow inbound access from GitHub to the services

**Independent Test**: Hosting allows GitHub webhooks and inbound traffic

### Implementation for User Story 2

- [x] T011 [US2] Configure hosting platform to whitelist GitHub IP ranges
- [x] T012 [US2] Set up webhook for repository pushes to trigger rebuilds
- [x] T013 [US2] Test inbound access by verifying site rebuilds on GitHub pushes

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently

---

## Phase 5: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [x] T014 Run npm test && npm run lint to ensure code quality
- [x] T015 Validate quickstart.md implementation steps
- [x] T016 Final review of README.md for profile showcase

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
  - User stories can then proceed in parallel (if staffed)
  - Or sequentially in priority order (P1 → P2)
- **Polish (Final Phase)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P2)**: Can start after Foundational (Phase 2) - Independent of US1

### Within Each User Story

- Core implementation before integration
- Story complete before moving to next priority

### Parallel Opportunities

- All Setup tasks marked [P] can run in parallel
- All Foundational tasks marked [P] can run in parallel (within Phase 2)
- Once Foundational phase completes, all user stories can start in parallel (if team capacity allows)
- Different user stories can be worked on in parallel by different team members

---

## Parallel Example: User Story 1

```bash
# Launch refactoring tasks together:
Task: "Refactor complex functions in src/components/ for simplicity and clarity"
Task: "Add JSDoc comments to key functions in src/lib/utils.ts"
Task: "Ensure consistent formatting with Prettier across src/"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Test User Story 1 independently
5. Deploy/demo if ready

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Test independently → Deploy/Demo (MVP!)
3. Add User Story 2 → Test independently → Deploy/Demo
4. Each story adds value without breaking previous stories

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Developer A: User Story 1
   - Developer B: User Story 2
3. Stories complete and integrate independently

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- Avoid: vague tasks, same file conflicts, cross-story dependencies that break independence