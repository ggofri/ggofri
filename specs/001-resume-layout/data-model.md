# Data Model: Minimal Resume Layout

## Resume Entity

**Purpose**: Represents the professional resume data displayed on the /experience page.

**Fields**:
- **name**: String (required) - Full name, e.g., "Julian Ramirez"
- **title**: String (optional) - Professional title, e.g., "Senior Software Engineer"
- **contact**: Object
  - **email**: String (required)
  - **linkedin**: String (optional)
  - **github**: String (optional)
- **summary**: String (required) - Brief professional summary
- **experience**: Array of Objects
  - **role**: String (required)
  - **company**: String (required)
  - **dates**: String (required), e.g., "Feb 2025 - Present"
  - **description**: Array of Strings (responsibilities/achievements)
- **education**: Array of Objects
  - **degree**: String (required)
  - **institution**: String (required)
  - **dates**: String (required)
- **skills**: Array of Strings (technical skills)

**Validation Rules**:
- All required fields must be present and non-empty.
- Email must be valid format.
- Dates in consistent format (e.g., "Month YYYY - Month YYYY" or "Month YYYY - Present").
- Skills array limited to 10-15 items for minimalism.

**Relationships**: None (static data).

**State Transitions**: None (static page).

**Source**: Content from `content/resume/main.md`, parsed and structured in MDX.