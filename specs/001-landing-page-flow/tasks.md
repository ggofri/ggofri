# Tasks: Landing Page Flow Update

**Input**: Design documents from `/specs/001-landing-page-flow/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: The examples below include test tasks. Tests are OPTIONAL - only include them if explicitly requested in the feature specification.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Single project**: `src/`, `tests/` at repository root
- **Web app**: `backend/src/`, `frontend/src/`
- **Mobile**: `api/src/`, `ios/src/` or `android/src/`
- Paths shown below assume single project - adjust based on plan.md structure

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [x] T001 Checkout feature branch in git
- [x] T002 [P] Verify Astro and Tailwind dependencies are installed
- [x] T003 [P] Confirm existing project structure matches plan

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T004 Review existing landing page components in src/pages/index.astro
- [x] T005 [P] Identify navigation structure in src/components/layout/Nav.astro
- [x] T006 [P] Check existing social components in src/components/social/

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Navigate Within Landing Page (Priority: P1) 🎯 MVP

**Goal**: Enable seamless navigation within the landing page without redirects

**Independent Test**: Click navigation links and verify smooth scrolling to sections without URL changes

### Implementation for User Story 1

- [x] T007 [US1] Update navigation links in src/components/layout/Nav.astro to use anchor links
- [x] T008 [US1] Add smooth scrolling behavior to src/pages/index.astro
- [x] T009 [US1] Implement sticky navigation highlighting in src/components/layout/Nav.astro
- [x] T010 [US1] Add section fade-ins on scroll in src/pages/index.astro

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

---

## Phase 4: User Story 2 - Access Social Links (Priority: P2)

**Goal**: Display and enable access to social media links

**Independent Test**: Verify social links are visible and open in new tabs

### Implementation for User Story 2

- [x] T011 [P] [US2] Update SocialList component in src/components/social/SocialList.astro with platform links
- [x] T012 [US2] Add social links to header in src/components/layout/Nav.astro
- [x] T013 [US2] Add social links to footer in src/components/layout/Footer.astro
- [x] T014 [US2] Ensure links open in new tabs with proper attributes

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently

---

## Phase 5: User Story 3 - Book Meeting via Cal.com (Priority: P3)

**Goal**: Integrate cal.com booking functionality

**Independent Test**: Click booking button and verify cal.com interface opens

### Implementation for User Story 3

- [x] T015 [US3] Add cal.com inline embed to src/pages/index.astro
- [x] T016 [US3] Create booking section component in src/components/sections/Booking.astro
- [x] T017 [US3] Handle cal.com unavailability gracefully in src/components/sections/Booking.astro

**Checkpoint**: All user stories should now be independently functional

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [x] T018 [P] Run npm run lint and fix any issues
- [x] T019 Test page load time remains under 2 seconds
- [x] T020 [P] Validate responsive design on mobile devices
- [x] T021 Run quickstart.md validation

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
  - User stories can then proceed in parallel (if staffed)
  - Or sequentially in priority order (P1 → P2 → P3)
- **Polish (Final Phase)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P2)**: Can start after Foundational (Phase 2) - May integrate with US1 but should be independently testable
- **User Story 3 (P3)**: Can start after Foundational (Phase 2) - May integrate with US1/US2 but should be independently testable

### Within Each User Story

- Models before services (none here)
- Services before endpoints (none here)
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
# Launch navigation updates together:
Task: "Update navigation links in src/components/layout/Nav.astro to use anchor links"
Task: "Add smooth scrolling behavior to src/pages/index.astro"
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
4. Add User Story 3 → Test independently → Deploy/Demo
5. Each story adds value without breaking previous stories

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Developer A: User Story 1
   - Developer B: User Story 2
   - Developer C: User Story 3
3. Stories complete and integrate independently

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- Avoid: vague tasks, same file conflicts, cross-story dependencies that break independence