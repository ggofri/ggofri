# Research: Minimal Resume Layout for Experience Page

## Design Inspiration and Recommendations

**Decision**: Adopt a minimal, zen-like design inspired by "the quiet place at web" principles, focusing on simplicity, essentialism, and calm focus.

**Rationale**: The design should evoke tranquility and professionalism, aligning with the user's request for an essentialist, quiet feel. Research shows minimal designs use ample whitespace, subtle typography, and restrained colors to reduce cognitive load and highlight content.

**Alternatives Considered**:
- Modern portfolio styles with animations: Rejected for complexity and distraction from zen aesthetic.
- Traditional resume templates with borders/boxes: Rejected for adding visual noise; opted for clean, open layouts.

**Concrete Recommendations**:
- **Color Scheme**: White background (#FFFFFF), black text (#000000), gray accents (#666666).
- **Typography**: Sans-serif font like Inter (28-36px for headings, 16px for body), 1.6 line height.
- **Layout**: Centered, max-width 800px, sections separated by 60px margins.
- **Spacing**: Generous whitespace for breathing room.

## MDX and Astro Implementation

**Decision**: Use MDX for the resume page with Page.astro layout, frontmatter for metadata, and minimal component imports.

**Rationale**: MDX allows content-driven structure with Markdown simplicity, integrated with Astro's layout system for themes and SEO. Supports frontmatter for title/description, and JSX for components if needed.

**Alternatives Considered**:
- Plain Astro component: Rejected as less content-focused; MDX better for resume text.
- External CMS: Rejected for overkill; static MDX suffices.

**Best Practices**:
- Frontmatter: `layout: ../layouts/Page.astro`, `title: "Resume"`.
- Structure: Headings for sections, lists for skills/experience.
- Themes: Leverage existing Page.astro dark/light mode detection.
- Components: Import Resume.astro if complex sections needed.