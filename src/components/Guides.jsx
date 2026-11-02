import { useState } from 'react'
import { BUS_CHECKED, busRoutes, busHowItWorks, housingGuide, hairGuide, temuGuide } from '../data/guides'

function Times({ value }) {
  const parts = value.split('·').map((s) => s.trim())
  const allTimes = parts.length > 1 && parts.every((p) => /^\d{1,2}:\d{2}$/.test(p))
  if (!allTimes) return <>{value}</>
  return (
    <span className="time-chips">
      {parts.map((t) => (
        <span className="time-chip" key={t}>{t}</span>
      ))}
    </span>
  )
}

function BusGuide() {
  const [open, setOpen] = useState(true)
  return (
    <div className="faq-item">
      <button className="faq-q" onClick={() => setOpen(!open)} aria-expanded={open}>
        <span><span className="chap-num">01</span> Bus Schedule Guide</span>
        <span className="faq-arrow">{open ? '−' : '+'}</span>
      </button>
      {open && (
        <div className="faq-a">
          <p className="meta">{BUS_CHECKED}. Sources: Tirana Airport's published bus list + Gjirafa Travel booking pages. Where they disagreed, this guide says so.</p>
          {busRoutes.map((r) => (
            <div key={r.route} className="route">
              <p className="route-name">{r.route}</p>
              <p className="route-line"><strong>Times:</strong> <Times value={r.times} /></p>
              <p className="route-line"><strong>Ride:</strong> {r.duration} · <strong>Price:</strong> {r.price} · {r.operator}</p>
              <p className="route-notes">{r.notes}</p>
            </div>
          ))}
          <p className="guide-h">How buses work here</p>
          <ul className="guide-list">
            {busHowItWorks.map((t) => <li key={t}>{t}</li>)}
          </ul>
        </div>
      )}
    </div>
  )
}

function TextGuide({ icon, num, guide }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="faq-item">
      <button className="faq-q" onClick={() => setOpen(!open)} aria-expanded={open}>
        <span><span className="chap-num">{String(num).padStart(2, '0')}</span> {guide.title}</span>
        <span className="faq-arrow">{open ? '−' : '+'}</span>
      </button>
      {open && (
        <div className="faq-a">
          <p>{guide.intro}</p>
          {guide.sections.map((s) => (
            <div key={s.h}>
              <p className="guide-h">{s.h}</p>
              <ul className="guide-list">
                {s.points.map((t) => <li key={t}>{t}</li>)}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Guides() {
  return (
    <div className="faq-list">
      <BusGuide />
      <TextGuide icon="🏠" num={2} guide={housingGuide} />
      <TextGuide icon="💇🏾" num={3} guide={hairGuide} />
      <TextGuide icon="🛍️" num={4} guide={temuGuide} />
    </div>
  )
}
