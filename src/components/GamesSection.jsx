import { useState } from 'react'
import { GAMES_INTRO, GAMES_SOURCE, flamurtariGames } from '../data/games'

function fmtDate(iso) {
  return new Date(iso + 'T00:00:00').toLocaleDateString('en-GB', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

function shortDate(iso) {
  return new Date(iso + 'T00:00:00').toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
  })
}

export default function GamesSection() {
  const [open, setOpen] = useState(true)
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const isPast = (g) => new Date(g.date + 'T00:00:00') < today
  const nextHome = flamurtariGames.find((g) => g.home && !isPast(g))

  return (
    <div className="faq-item">
      <button className="faq-q" onClick={() => setOpen(!open)} aria-expanded={open}>
        <span><span className="chap-num">05</span> 🏀 Flamurtari — Girls' Basketball</span>
        <span className="faq-arrow">{open ? '−' : '+'}</span>
      </button>
      {open && (
        <div className="faq-a">
          <p>{GAMES_INTRO}</p>
          {nextHome && (
            <p className="game-next">
              <strong>Next home game:</strong> Flamurtari vs {nextHome.opp} —{' '}
              {fmtDate(nextHome.date)}, tip-off {nextHome.time} at {nextHome.venue},{' '}
              {nextHome.city}. See you in the stands.
            </p>
          )}
          <div>
            {flamurtariGames.map((g) => (
              <div key={g.md} className={isPast(g) ? 'game-row past' : 'game-row'}>
                <span className="game-date">{shortDate(g.date)}</span>
                <span className="game-main">
                  <span className="game-teams">
                    {g.home ? `Flamurtari vs ${g.opp}` : `${g.opp} vs Flamurtari`}
                  </span>
                  <span className="game-meta">
                    {' '}· {g.venue}, {g.city} · tip-off {g.time}
                    {isPast(g) ? ' · played' : ''}
                  </span>
                </span>
                {g.home && <span className="home-badge">🏠 Home</span>}
              </div>
            ))}
          </div>
          <p className="meta" style={{ marginTop: 12 }}>{GAMES_SOURCE}</p>
        </div>
      )}
    </div>
  )
}
