import { events } from '../data/events'

export default function EventsSection() {
  if (!events.length) return null
  return (
    <div className="events-grid">
      {events.map((e) => (
        <article key={e.id} className="event-card">
          <div className="event-date">
            <span className="event-emoji">{e.emoji}</span>
            <strong>{e.dateLabel}</strong>
            <span>{e.timeLabel}</span>
          </div>
          <div className="event-body">
            <h3>{e.title}</h3>
            <p className="event-where">📍 {e.where}</p>
            <p className="event-host">{e.host}</p>
            <p className="event-blurb">{e.blurb}</p>
            <p className="event-bring">🍽️ {e.bring}</p>
            <p className="event-rsvp">✋🏾 {e.rsvp}</p>
          </div>
        </article>
      ))}
    </div>
  )
}
