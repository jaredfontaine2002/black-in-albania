import { useEffect, useMemo, useState } from 'react'
import ListingCard from './components/ListingCard'
import FaqItem from './components/FaqItem'
import Guides from './components/Guides'
import GamesSection from './components/GamesSection'
import EventsSection from './components/EventsSection'
import { loadListings } from './lib/listingsSource'
import { faqs } from './data/faqs'
import { GET_LISTED_FORM_URL, COMMUNITY_NAME } from './config'
import './index.css'

function CoverArt() {
  return (
    <svg className="cover-art" viewBox="0 0 320 72" aria-hidden="true" focusable="false">
      <g fill="none" stroke="#C19A3D" strokeWidth="2" strokeLinecap="round">
        <circle cx="160" cy="26" r="11" />
        <path d="M160 6v6M160 40v6M140 26h-6M186 26h-6M146 12l4 4M174 12l-4 4" strokeWidth="1.6" />
        <path d="M8 52 L74 22 L118 44 L168 16 L226 42 L268 26 L312 50" />
        <path d="M8 62 q14-7 28 0 t28 0 t28 0 t28 0 t28 0 t28 0 t28 0 t28 0 t28 0 t28 0" strokeWidth="1.6" />
      </g>
    </svg>
  )
}

export default function App() {
  const [listings, setListings] = useState([])
  const [source, setSource] = useState('loading')
  const [query, setQuery] = useState('')
  const [city, setCity] = useState('All cities')
  const [category, setCategory] = useState('All categories')

  useEffect(() => {
    loadListings().then(({ listings, source }) => {
      setListings(listings)
      setSource(source)
    })
  }, [])

  const cities = useMemo(
    () => ['All cities', ...new Set(listings.map((l) => l.city))],
    [listings]
  )
  const categories = useMemo(
    () => ['All categories', ...new Set(listings.map((l) => l.category))],
    [listings]
  )

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    return listings.filter((l) => {
      if (city !== 'All cities' && l.city !== city) return false
      if (category !== 'All categories' && l.category !== category) return false
      if (!q) return true
      return [l.name, l.category, l.city, l.description]
        .join(' ')
        .toLowerCase()
        .includes(q)
    })
  }, [listings, query, city, category])

  return (
    <div className="page">
      <header className="hero">
        <div className="hero-frame">
          <p className="kicker">{COMMUNITY_NAME} presents</p>
          <CoverArt />
          <h1>Black in Albania</h1>
          <p className="sub">The Guide &amp; Directory</p>
          <span className="edition">2026 Edition · Vlora · Tirana · Saranda · Shkodër</span>
          <p className="lede">
            The services our community actually uses — hair, health, drivers, housing
            help and Black-owned businesses — found in 30 seconds, contacted in one tap.
            Built from our own group chats, where the same questions were asked for
            eight months because the answers kept scrolling away.
          </p>
          <div className="hero-actions">
            {GET_LISTED_FORM_URL ? (
              <a className="btn btn-gold" href={GET_LISTED_FORM_URL} target="_blank" rel="noreferrer">
                Get listed — free
              </a>
            ) : (
              <span className="badge badge-gold">Get Listed opens at launch — ask in the group</span>
            )}
          </div>
        </div>
      </header>

      <section className="watch-banner" aria-label="Watch the Healthy Lifestyle Meetup with Dr. Kiira Poux recording">
        <div className="watch-copy">
          <p className="watch-kicker">🎥 Fresh from the meetup · Fri 20 Nov 2026 · 16 min</p>
          <h2>Healthy Lifestyle Meetup with Dr. Kiira Poux</h2>
          <p>
            Missed it live? Watch Dr. Poux on overcoming gym anxiety, choosing
            movement you actually enjoy, and building sustainable health habits
            here in Albania — plus local gyms and affordable blood work.
          </p>
        </div>
        <a
          className="btn btn-watch"
          href="https://www.loom.com/share/5609dfee45f842fea26a98488698193f"
          target="_blank"
          rel="noreferrer"
        >
          ▶️ Watch Now
        </a>
      </section>

      <section className="watch-banner" aria-label="Watch the Black Muse Meetup recording">
        <div className="watch-copy">
          <p className="watch-kicker">🎥 Fresh from the meetup · Fri 13 Nov 2026 · 56 min</p>
          <h2>Black Muse Meetup — Learn the Basics of Muse</h2>
          <p>
            Missed it live? Watch Jared teach the basics of Muse — what it is,
            live demos, building websites, finding work, and editing video —
            and see the Black Wall Street incubator idea in action.
          </p>
        </div>
        <a
          className="btn btn-watch"
          href="https://www.loom.com/share/81cfdb64a6e84136b5cc4b1e71124faa"
          target="_blank"
          rel="noreferrer"
        >
          ▶️ Watch Now
        </a>
      </section>

      <div className="trust" aria-label="About this guide">
        <div><strong>{listings.length}</strong><span>member-vouched listings</span></div>
        <div><strong>{Math.max(cities.length - 1, 0)}</strong><span>cities covered</span></div>
        <div><strong>4</strong><span>guide chapters</span></div>
        <div><strong>1 Nov 2026</strong><span>bus times last checked</span></div>
      </div>

      <main>
        <section className="panel" id="poux-recap">
          <h2>📋 Meetup Recap — Healthy Lifestyle with Dr. Kiira Poux</h2>
          <p className="lede-sm">
            Fri Nov 20, 2026 · 7:30 PM · Google Meet · 16 min recording.
            Dr. Kiira Poux is a clinician (MA, MSE, PsyD) and IFBB Pro Figure
            bodybuilder based in Sarandë, offering personal training and mental
            performance coaching.
          </p>
          <p>
            <a className="btn btn-gold" href="https://www.loom.com/share/5609dfee45f842fea26a98488698193f" target="_blank" rel="noreferrer">▶️ Watch the recording</a>{' '}
            <a className="btn btn-gold" href="https://docs.google.com/document/d/1ALhaaEThMZUJUfue3B7Bnp3y_rU0xpg0NPblWiHOCRE/edit?usp=meet_tnfm_email" target="_blank" rel="noreferrer">📝 Gemini meeting notes (Google Doc)</a>
          </p>
          <p className="lede-sm">
            Below is what was said, from the Gemini meeting notes Jared
            forwarded on Nov 20, 2026 — the full detailed notes, topic by topic.
            Gemini notes are auto-generated and may contain errors in names
            and spellings. The recording above is the source of truth.
          </p>

          <h3 className="guide-h">Professional Background and Athletic Experience of Kiira Poux</h3>
          <p>Kiira Poux introduced themselves as a clinical psychologist based in Atlanta and currently living in the Saranda area, specializing in forensic work, addiction, and sport and exercise psychology. Kiira Poux noted that their master&apos;s degree was in sport and exercise psychology, which forms the basis of their published research and academic work. Additionally, Kiira Poux shared that they have been a professional bodybuilder competing for 11 to 12 years and holding pro status for about four years, while also bringing extensive experience in athletic marketing, mental skills training, coaching, and personal training.</p>

          <h3 className="guide-h">Travel Adaptability and Dietary Preparation During Competitions</h3>
          <p>Kiira Poux discussed the necessity of adaptability when traveling worldwide for professional bodybuilding competitions across approximately 20 divisions. Highlighting extreme conditions, Kiira Poux described staying in a surf hostel outside of Lisbon during peak week while consuming only 500 to 800 calories of egg whites, cucumbers, and rice cakes daily, performing daily cardio, and working a virtually full-time job for a health organization. Kiira Poux emphasized that achieving fitness goals relies heavily on establishing authentic goals and determining the front-end sacrifices individuals are willing to make.</p>

          <h3 className="guide-h">Nutritional Landscape and Food Accessibility in Albania</h3>
          <p>Kiira Poux addressed dietary navigation in Albania and the surrounding Saranda area, noting that being vegetarian presents specific challenges due to limited food variety. Kiira Poux explained that they supplemented their diet by bringing protein powders and utilizing efficient travel stocking methods across multiple trips. While restaurant menus offer pescatarian-friendly options and vegetables, fruit availability leans heavily toward higher glycemic index and higher sugar content. Kiira Poux stressed the importance of puzzle piecing individual activity levels, food aversions, and specific preferences like seasonings into a sustainable meal plan.</p>

          <h3 className="guide-h">Physiological Impact of Sleep, Cortisol, and Internal Health Metrics</h3>
          <p>Kiira Poux highlighted the critical role of physiological factors such as sleep and cortisol in managing traditional aesthetic fitness and internal performance. Poor sleep, high-sugar diets, and elevated cortisol contribute heavily to water weight retention and fat distribution, regardless of activity levels. Kiira Poux noted that internal markers such as cholesterol, heart health, and differing physical abilities must be monitored alongside external appearance, while recommending daily activities like walking to explore Saranda and maintain cardio routines.</p>

          <h3 className="guide-h">Individualized Nutritional Strategies and Habit Modification</h3>
          <p>Kiira Poux explained that no two bodies are alike and cautioned against one-size-fits-all fitness formulas, noting that factors like medications, hormones, and sleep alter basic energy expenditure. Kiira Poux uses eggs, legumes, and nuts as foundational protein sources while accounting for individual fat responsiveness and dietary triggers. To break ingrained human brain patterns, Kiira Poux suggested gaming habits through structured daily routines, such as walking longer routes or organizing meal prep before engaging in other tasks.</p>

          <h3 className="guide-h">Local Gym Options and Navigating Environment Barriers</h3>
          <p>Kiira Poux reviewed local fitness spaces in Saranda, identifying Silhouette for machinery, Bugam Hotel as a long-standing option with free weights and cardio machines priced at 4 euros per day, and noting plans to visit Petra. Drawing on past experience screening clients for bariatric surgery, Kiira Poux acknowledged that entering unfamiliar or male-dominated gyms can trigger mental barriers. To overcome gym intimidation, Kiira Poux recommended starting small by utilizing available cardio equipment and leveraging community networks, noting that experienced gymgoers are generally supportive rather than judgmental.</p>

          <h3 className="guide-h">Tailored Health Guidance for Diverse Demographics and Risk Factors</h3>
          <p>Responding to Jared Fontaine regarding specific health issues like hypertension, cholesterol, and diabetes prevalent in communities of color, Kiira Poux emphasized focusing on hormonal health, stress, and trauma markers. Kiira Poux recommended obtaining local blood work panels, noting they cost approximately $40 in the area, to check cholesterol, blood pressure, and pre-diabetic indicators. Kiira Poux advised against fad diets like keto, advocating instead for moderation, prioritizing protein for satiation, and combining movement with social activities to trick the brain. Kiira Poux shared contact details, including email at Dr. KMPU@gmail.com and an Instagram handle to be shared via WhatsApp.</p>

          <h3 className="guide-h">Group Mission and Future Weekly Educational Sessions</h3>
          <p>Jared Fontaine outlined the group&apos;s objective to rebuild Black Wall Street by hosting weekly educational speakers, noting that the previous week featured a session with Muse, while the current session featured Kiira Poux discussing health management. Jared Fontaine mentioned technical difficulties with the recording but confirmed that available footage and transcripts would be uploaded to the group website. Kiira Poux added a note about offering executive consulting for non-physical fitness applications for those interested in that niche.</p>

          <h3 className="guide-h">Next steps</h3>
          <ul className="guide-list">
            <li>Kiira Poux: Research gyms throughout Albania to provide comprehensive feedback to the group.</li>
            <li>Jared Fontaine: Publish meeting materials — upload the meeting recording and transcript to the website. Done, on this page.</li>
            <li>Kiira Poux: Obtain a blood panel to monitor metabolic and hormonal levels.</li>
            <li>Kiira Poux: Put her Instagram contact information in the WhatsApp group.</li>
          </ul>
        </section>

        <section className="panel">
          <div className="controls">
            <input
              type="search"
              placeholder="Search: braids, dentist, taxi…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search listings"
            />
            <select value={city} onChange={(e) => setCity(e.target.value)} aria-label="Filter by city">
              {cities.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </div>
          <div className="chips" role="group" aria-label="Filter by category">
            {categories.map((c) => (
              <button
                key={c}
                className={category === c ? 'chip on' : 'chip'}
                onClick={() => setCategory(c)}
              >
                {c === 'All categories' ? 'All' : c}
              </button>
            ))}
          </div>

          {source === 'loading' && <p className="empty">Loading the directory…</p>}
          {source !== 'loading' && results.length === 0 && (
            <p className="empty">
              No verified listing yet for that search. Ask in the WhatsApp group —
              and if you offer this service, get listed so the next person finds you here.
            </p>
          )}
          <div className="grid">
            {results.map((l) => (
              <ListingCard key={l.id} listing={l} />
            ))}
          </div>
        </section>

        <section className="panel" id="events">
          <h2>🎉 Events</h2>
          <p className="lede-sm">
            The community, in person. Addresses and phone numbers stay in the
            WhatsApp group — this page carries the what, when and how-to-join.
          </p>
          <EventsSection />
        </section>

        <section className="panel">
          <h2>Guides</h2>
          <p className="lede-sm">
            Built in the order the community asked for: buses first, then housing,
            then hair — and Temu, the one nobody warns you about.
          </p>
          <Guides />
        </section>

        <section className="panel">
          <h2>Community</h2>
          <p className="lede-sm">
            Things worth leaving the house for — starting with Vlora's own team.
          </p>
          <div className="faq-list">
            <GamesSection />
          </div>
        </section>

        <section className="panel">
          <h2>Know before you go</h2>
          <p className="lede-sm">
            The questions this community asked over and over, answered once — from
            members who learned it the hard way.
          </p>
          <div className="faq-list">
            {faqs.map((f) => (
              <FaqItem key={f.q} faq={f} />
            ))}
          </div>
        </section>
      </main>

      <footer>
        <p className="heritage">
          In the tradition of The Green Book (1936–1967) — the guide Black travellers
          carried so they could go anywhere, safely. This is ours, for Albania.
        </p>
        <p>
          Built by the {COMMUNITY_NAME} community. Listings are member-vouched, not
          paid ads — a listing only appears after a member vouches for it and the
          provider says yes. Wrong info or a bad experience? Tell an admin in the group.
        </p>
        <p className="meta">We buy Black first when we can. ✊🏾</p>
      </footer>
    </div>
  )
}
