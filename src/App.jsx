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
            <a className="btn btn-gold" href="https://docs.google.com/document/d/1ALhaaEThMZUJUfue3B7Bnp3y_rU0xpg0NPblWiHOCRE/edit?usp=meet_tnfm_email" target="_blank" rel="noreferrer">📝 Meeting notes &amp; transcript (Google Doc)</a>
          </p>
          <p className="lede-sm">
            The full transcript is in the Google Doc above and on the recording
            page. The summary below is from the meeting recap and Gemini notes —
            auto-generated, so names and spellings may contain errors.
          </p>

          <h3 className="guide-h">What Dr. Poux covered</h3>
          <ul className="guide-list">
            <li><strong>Overcoming gym anxiety (0:00)</strong> — Experienced gym-goers are usually willing to help, not judge. Start simple: treadmill walking, the stair machine, watching how equipment works, then gradually try weights and classes. There is no single ideal activity — pick something accessible and enjoyable and build momentum with small experiments.</li>
            <li><strong>Foundations of health (2:15)</strong> — Move your body, watch energy in and out, and pay attention to what you consume. Sunshine and vitamin D support mood and metabolism. Track one change at a time — weigh consistently, drop one drink, change a meal habit, walk a different route — and keep what is sustainable.</li>
            <li><strong>Individualized nutrition (4:02)</strong> — Hormones, stress, trauma and access to information all affect progress. Get blood work and baselines for cholesterol, blood pressure and prediabetes — local pharmacies offer metabolic and hormonal panels for roughly $40. Adapt food to the person: fatty fish and olive oil for cholesterol concerns, watch sodium for blood pressure. Moderation beats fad diets — keto is not best for everyone. Protein and vegetables earlier in the day help you stay full.</li>
            <li><strong>Movement you enjoy, with people (9:22)</strong> — Walking groups, yoga, Zumba, Qigong, Tai Chi, fighting sports — combining social connection with movement makes it feel good, not like a burden. Dr. Poux offers virtual coaching and can be reached through WhatsApp, email, Instagram, or the coaching channels shared in the group.</li>
            <li><strong>Local gyms in Sarandë</strong> — Bugam Hotel: free weights and cardio, €4 per day. Silhouette: extensive machines, weekly and monthly packages. More gyms across Albania to be researched and reported back to the group.</li>
            <li><strong>What is next (12:32)</strong> — Weekly Black Wall Street meetings continue, with rotating business owners and educational presenters. Dr. Poux also offers executive consulting alongside fitness coaching.</li>
          </ul>

          <h3 className="guide-h">Action items</h3>
          <ul className="guide-list">
            <li>Dr. Poux: Put her Instagram contact information in the WhatsApp group.</li>
            <li>Dr. Poux: Research gyms throughout Albania and report back to the group.</li>
            <li>Jared: Upload the recorded meeting to the website — done, on this page.</li>
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
