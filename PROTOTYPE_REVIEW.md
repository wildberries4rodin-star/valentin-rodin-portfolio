# Prototype Review

## Source

This review is based on the HTML prototype provided in chat on 2026-03-23.

## Overall Verdict

The prototype is strong as a visual and strategic direction.
It is not yet ready to be attached to a production domain.

The right next move is:

1. build a clean editing architecture first
2. port this prototype into that structure
3. only then attach it to the domain

## What Is Already Strong

- Clear premium visual direction
  - dark cinematic palette
  - elegant serif + modern sans pairing
  - strong first-screen impression
- Good section logic
  - hero
  - profile
  - credits
  - gallery
  - skills
  - AI block
  - contact
- Multilingual thinking is already present
  - English
  - Korean
  - Chinese
  - Japanese
- The prototype already feels more premium than a generic actor-template site
- Gallery and credits sections create immediate casting relevance
- The page already reflects actor + model + content creator positioning

## Main Problems Before Domain Launch

### 1. It is one giant monolithic HTML file

Everything is mixed together:
- layout
- styling
- copy
- translations
- AI logic
- embedded media

This is hard to maintain and hard to edit through the agent.

### 2. Browser-side AI is not production-safe

The current `Claude AI` block calls Anthropic directly from browser JavaScript.

Problems:
- no secure API key handling
- not ready for public deployment
- fragile network behavior
- no request validation
- no usage control

This must be replaced by a server-side or controlled assistant layer later.

### 3. Content is hardcoded and partly diverges from canonical HR profile

The prototype includes profile values and copy inline in HTML.
That creates drift risk against:

- `/Users/knighthr/Documents/Playground/hr_knight_recovered/desktop_hr/user_profile.json`
- `/Users/knighthr/Documents/Playground/hr_knight_recovered/portfolio_site/content/site_content.json`

If the site goes live now, future edits will become inconsistent.

### 4. Embedded base64 images make the prototype heavy and hard to manage

This is fine for a prototype snapshot but not for a modern editable site.

Problems:
- poor maintainability
- harder optimization
- harder image replacement
- harder performance tuning

### 5. There is no real editing model yet

Right now the page is editable only by manually rewriting the HTML.
That is exactly what we want to avoid.

We need:
- structured content
- reusable sections
- clear file boundaries
- easy agent-driven updates

### 6. Deployment would freeze the wrong architecture

If we connect a domain now, we will be deploying a prototype implementation, not a proper product foundation.

That creates rework later.

## Product Risks To Fix During Rebuild

- keep the premium mood
- avoid generic actor-template design
- preserve multilingual capability
- preserve strong credits storytelling
- preserve gallery-led visual impact
- remove insecure browser AI pattern
- align all facts with canonical profile data
- make the site agent-editable

## Recommended Build Order

### Step A

Create the editing architecture first:
- separate content from layout
- define reusable sections
- prepare the site for AI-assisted editing

### Step B

Port this prototype into the new architecture:
- keep the mood
- keep the structure
- improve weak parts
- normalize content

### Step C

Only after that:
- attach domain
- add production deployment
- optimize performance
- add safe assistant features

## Decision

Do not attach the prototype to the domain yet.

First build the editing and content architecture.
This is the correct next step.
