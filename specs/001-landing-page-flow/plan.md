# Implementation Plan: Landing Page Flow Update

**Branch**: `001-landing-page-flow` | **Date**: Thu Oct 23 2025 | **Spec**: [link to spec.md](spec.md)
**Input**: Feature specification from `/specs/001-landing-page-flow/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/commands/plan.md` for the execution workflow.

## Summary

Update the landing page to remove redirects to ggofri.com (unifying the site), add social links, integrate cal.com booking, ensuring a clean user flow focused on simplicity, engagement, and rhythm.

## Technical Context

**Language/Version**: JavaScript/TypeScript (Astro framework)  
**Primary Dependencies**: Astro, Tailwind CSS  
**Storage**: N/A (static site, no data persistence)  
**Testing**: npm test, npm run lint  
**Target Platform**: Web browsers  
**Project Type**: Web application (single-page site)  
**Performance Goals**: Page load under 2 seconds, minimal bundle size  
**Constraints**: Responsive design, accessibility compliance, fast loading times  
**Scale/Scope**: Single landing page with sections, social integrations

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- **Minimal UX**: Feature focuses on essential navigation, social links, and booking - no unnecessary elements.
- **Simplicity**: Straightforward updates to existing page structure, no complex logic.
- **Clean Code**: Follow existing Astro/Tailwind patterns, maintain readable code.
- **Vertical Slicing**: Implement in slices: navigation first, then social, then cal.com.
- **Content-Driven Approach**: Landing page adapts to content sections, no rigid structures forced.

All principles align; no violations.

## Project Structure

### Documentation (this feature)

```text
specs/001-landing-page-flow/
├── plan.md              # This file (/speckit.plan command output)
├── research.md          # Phase 0 output (/speckit.plan command)
├── data-model.md        # Phase 1 output (/speckit.plan command)
├── quickstart.md        # Phase 1 output (/speckit.plan command)
├── contracts/           # Phase 1 output (/speckit.plan command)
└── tasks.md             # Phase 2 output (/speckit.tasks command - NOT created by /speckit.plan)
```

### Source Code (repository root)

```text
src/
├── components/
│   ├── layout/
│   │   ├── Nav.astro
│   │   └── Footer.astro
│   ├── sections/
│   │   ├── Hero.astro
│   │   ├── Projects.astro
│   │   └── Resume.astro
│   └── ui/
│       ├── Logo.astro
│       └── SocialList.astro
├── pages/
│   ├── index.astro
│   └── blog/
├── lib/
│   └── utils.ts
└── content/
    ├── blog/
    └── projects/
```

**Structure Decision**: Uses existing Astro project structure with components for sections, pages for routes, and content for data.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

No violations; no complexity tracking needed.