# Research Findings: Landing Page Flow Update

## Cal.com Integration

**Decision**: Use Cal.com inline embed for booking functionality, placed in a dedicated section on the landing page.

**Rationale**: Maintains user engagement by keeping bookings on-site, aligns with simplicity (easy embed setup), and preserves page rhythm through seamless integration without redirects. Supports minimal UX by avoiding external navigation.

**Alternatives Considered**:
- Linking to external Cal.com page: Simpler but disrupts flow with redirects, lower engagement.
- Button embed with modal: Good for space-saving but less prominent than inline for conversions.

## Social Links Display

**Decision**: Display social icons in a horizontal row in the footer and header, using SVG icons, opening in new tabs.

**Rationale**: Promotes simplicity with clean icons, enhances engagement through easy access, and maintains visual rhythm with consistent spacing and alignment. Prioritize platforms like LinkedIn, GitHub, Twitter based on professional/tech audience.

**Alternatives Considered**:
- Vertical list: Less rhythmic, takes more space.
- Embedded feeds: Adds complexity and load time, against minimal UX.

## User Flow Patterns

**Decision**: Implement sticky navigation with smooth scrolling, section fade-ins on scroll, and anchor links for internal navigation.

**Rationale**: Ensures clean flow focused on simplicity (no complex interactions), boosts engagement with visual feedback, and creates rhythm through progressive disclosure and animations. Avoids redirects entirely.

**Alternatives Considered**:
- Single-page scroll without nav: Simple but hard to navigate long pages.
- Multi-page flow: Introduces redirects, against spec requirements.