# Design research — Black in Albania (researched 1 Nov 2026)

## What was studied
1. **Travel Noire** (design case study of its revamp, hasanityus.com) — Black travel platform.
2. **Green Book Global** — modern successor to the Negro Motorist Green Book; "Traveling While Black" city scores, community reviews.
3. **Nomad List / Nomads.com** — the benchmark filterable city database.
4. **Directory UX best-practice guides** (Bdazzil directory UX; directory layout conversion studies).

## Patterns worth stealing
- **Travel Noire:** design goal was "aspirational but inviting," big real photography, bold color drawn from water, sky, earth, vegetation; city guides rebuilt as a mobile app-like experience, not PDFs; content organised by the visitor's job (plan a trip / buy a guide / read a story) and tagged by destination + topic.
- **Green Book Global:** heritage is the brand — the name itself carries the 1936–1967 Green Book. Trust mechanic = a community score per city ("Traveling While Black") and reviews from people with the same lived experience, not generic stars.
- **Nomad List:** photo city cards in a filterable grid; every city page leads with scannable scores/chips (cost, safety, internet...) instead of paragraphs. Data density is the aesthetic.
- **Directory UX research:** directory quality is judged in seconds — search front and centre with example placeholder text, popular categories as tappable chips under it, a plain statement of coverage ("N listings · M cities · checked [date]") as proof, phone/contact one tap away, mobile-first (60%+ of directory searches are mobile), featured listings visually distinct without breaking the grid.

## Three directions for Black in Albania

### A — "Modern Green Book" (RECOMMENDED)
Heritage editorial shell + directory utility.
- Palette: warm cream paper `#FAF5EC`, deep green ink `#17352A`, gold `#C19A3D`, terracotta accent `#C96F4A`.
- Type: Fraunces (serif display, has that printed-guide feel) + Inter for UI/body.
- Hero: full-width real photo (Vlora Lungomare / Llogara — Jared's own tour photos), masthead like a guidebook cover: "BLACK IN ALBania — The Green Book for Albania, est. 2026", trust strip under it: listings count · cities · last-checked date.
- Guides become numbered CHAPTERS with cover rows (01 Bus · 02 Housing · 03 Hair), bus routes as timetable cards with green route badges.
- Listing cards: cream cards, gold "Vouched" seal, big one-tap WhatsApp button; spotlight card gets the terracotta frame.
- Why: nobody else can copy this identity; it ties straight into Jared's Black Wall Street / heritage goals (and even his board game audience). Utility patterns from Nomad List + directory UX sit inside it.

### B — "Nomad utility"
Dark dashboard, dense score chips on every card (price level, city, category, vouched-by), filter bar sticky on top, map pins later.
- Pros: fastest to scan, very "React portfolio" looking. Cons: cold; looks like every other nomad tool; wastes the heritage story.

### C — "Travel Noire magazine"
Oversized photography, bold color blocks, stories first, directory second.
- Pros: most beautiful screenshots. Cons: needs lots of consented photos we don't have yet; pushes the practical tools (bus times!) below the fold — wrong for members mid-journey at a bus station.

## Recommendation
Build A, borrowing B's sticky filter bar and chip system. Save C's photography treatment for a later "Stories" section once members consent to photos.

## Concrete changes in A (implementation checklist)
1. Swap palette + fonts (Google Fonts: Fraunces + Inter), paper-textured cream background.
2. New hero: photo, guidebook masthead, trust strip with live counts from the data.
3. Category chips row under search (All, Hair, Health, Drivers, Food, Housing help...).
4. Listing cards restyled: seal for vouched/verified, spotlight frame, sticky-bottom WhatsApp bar on mobile listing view.
5. Guides restyled as chapters; bus routes as timetable rows with departure chips.
6. Footer: "In the tradition of the Green Book (1936–1967) — built by the community, for the community."
