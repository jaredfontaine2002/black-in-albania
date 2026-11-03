import { useEffect, useMemo, useState } from 'react'
import ListingCard from './components/ListingCard'
import FaqItem from './components/FaqItem'
import Guides from './components/Guides'
import GamesSection from './components/GamesSection'
import EventsSection from './components/EventsSection'
import EventPopup from './components/EventPopup'
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
      <EventPopup />
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

      <div className="trust" aria-label="About this guide">
        <div><strong>{listings.length}</strong><span>member-vouched listings</span></div>
        <div><strong>{Math.max(cities.length - 1, 0)}</strong><span>cities covered</span></div>
        <div><strong>4</strong><span>guide chapters</span></div>
        <div><strong>1 Nov 2026</strong><span>bus times last checked</span></div>
      </div>

      <main>
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
