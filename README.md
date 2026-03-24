# Valentin Portfolio Site

This module is the standalone portfolio website workstream for Valentin Rodin.

It lives in the same workspace as the Knight HR system, but it must remain separate from:
- `/Users/knighthr/Desktop/AI_Assistant`
- `/Users/knighthr/Documents/Playground/hr_knight_recovered/desktop_hr`
- `/Users/knighthr/Documents/Playground/hr_knight_recovered/outreach_agent`

## Purpose

Build a high-quality portfolio website that:
- presents Valentin Rodin as an international actor working across Asia
- supports acting, commercial, spokesperson, and on-camera positioning
- gives casting directors and agencies a strong first impression
- makes materials easy to review quickly
- complements the HR agent instead of competing with it

## Working Rules

- Keep the portfolio site as its own product module.
- Do not mix dashboard files and portfolio site files.
- Reuse canonical profile data and materials from the HR system where helpful.
- Prefer strong visual direction over generic template aesthetics.
- Optimize for casting readability, not just visual decoration.

## Current Starting Point

Canonical profile data:
- `/Users/knighthr/Documents/Playground/hr_knight_recovered/desktop_hr/user_profile.json`

Recovery prompt:
- `/Users/knighthr/Documents/Playground/hr_knight_recovered/desktop_hr/HR_AGENT_FULL_RECOVERY_PROMPT.md`

Current content brief:
- `/Users/knighthr/Documents/Playground/hr_knight_recovered/portfolio_site/content/site_brief.md`

Portfolio structure map:
- `/Users/knighthr/Documents/Playground/hr_knight_recovered/portfolio_site/content/portfolio_structure_map.md`

Current prototype assessment:
- `/Users/knighthr/Documents/Playground/hr_knight_recovered/portfolio_site/PROTOTYPE_REVIEW.md`

Current prototype notes:
- `/Users/knighthr/Documents/Playground/hr_knight_recovered/portfolio_site/prototype/CHAT_PROTOTYPE_NOTES.md`

## Immediate Goals

1. Define the site structure and visual direction.
2. Build a strong homepage / hero section.
3. Translate portfolio archetypes into clear sections or visual stories.
4. Make IMDb, intro video, PDF portfolio, and contact flow easy to reach.

## Site System

This module now uses a simple editing-first structure:

- `content/site_content.json`
  - canonical editable content model for the website
- `content/site_brief.md`
  - creative direction and product brief
- `EDITING_MODEL.md`
  - how the site should be edited through the agent
- `prototype/`
  - drop-in area for the current prototype files before integration

The goal is to make the website:
- easy to evolve section by section
- safe to edit through Codex / the agent
- ready for later domain deployment
- separate from HR agent runtime and dashboard code

## Current Site Scaffold

Homepage scaffold files:
- `/Users/knighthr/Documents/Playground/hr_knight_recovered/portfolio_site/index.html`
- `/Users/knighthr/Documents/Playground/hr_knight_recovered/portfolio_site/assets/styles.css`
- `/Users/knighthr/Documents/Playground/hr_knight_recovered/portfolio_site/assets/site.js`

This scaffold already:
- reads from `content/site_content.json`
- follows the PDF portfolio structure
- includes a dedicated presentation video section
- includes a dedicated YouTube section
- avoids unsafe browser-side AI calls

## Preview

Run a simple local server from:
- `/Users/knighthr/Documents/Playground/hr_knight_recovered/portfolio_site`

Example:
- `python3 -m http.server 8080`

Then open:
- `http://localhost:8080`

## GitHub Setup

This site is ready to live in its own GitHub repository.

Recommended repository root:
- `/Users/knighthr/Documents/Playground/hr_knight_recovered/portfolio_site`

Suggested flow:
- initialize git inside this folder only
- add a GitHub remote
- push `main`
- let GitHub Actions deploy the static site through GitHub Pages

If GitHub Pages is not enabled yet on the repository:
- open the repository on GitHub
- go to `Settings -> Pages`
- set the build source to `GitHub Actions`

After the first successful workflow run, the site will be published on the repository Pages URL.

## Current Archetype Direction

- detective
- romantic
- business / James Bond
- lover
- macho
- sportsman
