# Portfolio Site Editing Model

## Purpose

The site must be easy to edit through:
- Codex
- future assistant workflows
- small targeted updates instead of fragile full rewrites

## Editing Principle

The website should be built from structured content blocks, not from scattered hardcoded text.

Primary source for site copy:
- `content/site_content.json`

Creative / product direction:
- `content/site_brief.md`

Structure source:
- `content/portfolio_structure_map.md`

## Planned Build Layers

1. Presentation layer
- the actual site UI and animations

2. Content layer
- hero copy
- profile facts
- intro video
- YouTube section
- archetypes
- materials
- contact data
- CTA text
- SEO / metadata

3. Editing layer
- future UI or agent-driven controls for changing section content safely

## How We Will Work

Step-by-step:

1. Import or recreate the current prototype into this module
2. Align the structure with the PDF portfolio
3. Separate content from layout
4. Build a modern homepage-first experience
5. Add intro video and YouTube modules as editable sections
6. Add an editing workflow so changes can be made quickly through the agent
7. Prepare deployment to a real domain

## Important Rule

Do not edit future site copy directly inside random components if it belongs in the shared content model.
Whenever possible:
- update `content/site_content.json`
- then update the UI that renders it

This keeps the site maintainable and AI-editable.
