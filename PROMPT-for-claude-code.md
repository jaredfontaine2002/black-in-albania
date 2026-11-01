# Paste this into Claude Code with the project open

You are polishing the DESIGN of an existing, working React + Vite app called
"Black in Albania" — a guide & directory for the Black American expat community
in Albania (Vlora, Tirana, Saranda, Shkodër). The data, content and logic are
finished and correct. Your job is visual design only: make it look genuinely
beautiful, like a modern printed guidebook brought to the web.

## The design direction (already chosen — do not change it)
"MODERN GREEN BOOK": a homage to The Negro Motorist Green Book (1936–1967).
- Palette: warm cream paper #FAF5EC, deep green #17352A, gold #C19A3D,
  terracotta accent #C96F4A. (Defined as CSS variables in src/index.css.)
- Type: Fraunces (serif display) for headlines, Inter for UI/body.
- The hero is a guidebook COVER: deep-green panel, gold double-rule frame,
  masthead title, "2026 Edition" badge.
- Guides are numbered CHAPTERS (01 Bus · 02 Housing · 03 Hair); bus routes
  are timetable-style rows.
- Full rationale and references are in DESIGN.md — read it first.

## What to improve
1. Cover art treatment: give the hero a richer, more "printed cover" feel —
   subtle texture, ornament rules, maybe a simple inline-SVG motif (Albanian
   Riviera coastline / mountains / sun) drawn in gold line on green. No stock
   photos, no external image URLs.
2. Vertical rhythm & spacing polish across cover, trust strip, panels, footer.
3. Listing cards: refine the vouched seal, spotlight frame, price treatment;
   category icons (inline SVG or unicode) would help scanning.
4. Bus timetable rows: make departures read like a real timetable (mono or
   tabular figures for times, route badge chips for COASTAL / INLAND).
5. Chapter headers for the three guides: big serif numerals, gold rules.
6. Micro-details: favicon (green square, gold B?), selection color, focus
   states, print stylesheet would be a nice nod to a printed guide.
7. Keep it fast: no new heavy dependencies; system-respecting dark text on
   cream must pass WCAG AA contrast.

## HARD RULES — do not break these
- Do NOT change any content, listings data, prices, bus times, or FAQ text.
- Do NOT touch the data layer logic: src/lib/listingsSource.js, the approval
  gate (approved:false listings must never render), src/config.js, or the
  Google Sheets CSV fallback behaviour.
- PRIVACY: never add personal phone numbers. One listing (a Vlora braider)
  is deliberately number-free in code — her number must never appear in this
  repo. Only business contacts already in the data may be shown.
- Do NOT change vite.config.js base handling or .github/workflows/deploy.yml
  (GitHub Pages deploy depends on them).
- Keep everything one page (no router), keep it mobile-first, and keep the
  build passing: `npm run build` must succeed when you are done.
- When finished, summarise what you changed file-by-file in under 200 words,
  and flag anything you wanted to change but didn't because of the rules.
