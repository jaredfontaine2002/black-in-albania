import { useEffect, useState } from 'react'
import { events } from '../data/events'

// Shows once per browser session when the app opens, if an event is coming up.
export default function EventPopup() {
  const [open, setOpen] = useState(false)
  const next = events[0]

  useEffect(() => {
    if (!next) return
    try {
      if (!sessionStorage.getItem('bia-event-popup-seen')) {
        const t = setTimeout(() => setOpen(true), 600)
        return () => clearTimeout(t)
      }
    } catch {
      setOpen(true)
    }
  }, [next])

  if (!next || !open) return null

  const close = () => {
    setOpen(false)
    try {
      sessionStorage.setItem('bia-event-popup-seen', '1')
    } catch {
      /* private mode — popup just won't persist its dismissal */
    }
  }

  return (
    <div className="popup-overlay" role="dialog" aria-modal="true" aria-label={`Upcoming event: ${next.title}`}>
      <div className="popup-card">
        <button className="popup-x" onClick={close} aria-label="Close">✕</button>
        <p className="popup-kicker">🎉 Coming up in the community</p>
        <h3>{next.emoji} {next.title}</h3>
        <p className="popup-when"><strong>{next.dateLabel}</strong> · {next.where}</p>
        <p className="popup-blurb">{next.bring}</p>
        <div className="popup-actions">
          <a className="btn btn-gold" href="#events" onClick={close}>See the Events section</a>
          <button className="btn btn-web" onClick={close}>Close</button>
        </div>
      </div>
    </div>
  )
}
