import { useState } from 'react'

export default function FaqItem({ faq }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="faq-item">
      <button className="faq-q" onClick={() => setOpen(!open)} aria-expanded={open}>
        <span>{faq.q}</span>
        <span className="faq-arrow">{open ? '−' : '+'}</span>
      </button>
      {open && (
        <div className="faq-a">
          <p>{faq.a}</p>
          <p className="meta">Source: {faq.source}</p>
        </div>
      )}
    </div>
  )
}
