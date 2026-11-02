import { waLink } from '../lib/listingsSource'

const CATEGORY_ICONS = {
  'Hair & Beauty': '💇🏾',
  'Health & Dental': '🦷',
  'Drivers & Transport': '🚕',
  'Food & Places': '☕',
  'Businesses & Tours': '🧭',
  'Kids & Family': '🧸',
  'Housing & Real Estate': '🏠',
}

export default function ListingCard({ listing }) {
  const wa = waLink(listing)
  return (
    <article className={listing.spotlight ? 'card card-spot' : 'card'}>
      <div className="card-top">
        <h3>{listing.name}</h3>
        {listing.spotlight && <span className="badge badge-spot">★ Spotlight</span>}
      </div>
      <p className="badges">
        <span className="badge">{CATEGORY_ICONS[listing.category] ? `${CATEGORY_ICONS[listing.category]} ` : ''}{listing.category}</span>
        <span className="badge badge-city">{listing.city}</span>
        {listing.vouchedBy && <span className="badge badge-seal">✦ Vouched</span>}
        {listing.blackOwned && <span className="badge badge-owned">✊🏾 Black-owned</span>}
      </p>
      <p className="desc">{listing.description}</p>
      {listing.priceRange && <p className="price">{listing.priceRange}</p>}
      <p className="meta">
        Verified {listing.verified} · Vouched by {listing.vouchedBy}
      </p>
      <div className="actions">
        {wa && (
          <a className="btn btn-wa" href={wa} target="_blank" rel="noreferrer">
            Message on WhatsApp
          </a>
        )}
        {!wa && listing.url && (
          <a className="btn btn-web" href={listing.url} target="_blank" rel="noreferrer">
            {listing.url.includes('maps') ? 'View on Google Maps' : 'Visit website'}
          </a>
        )}
        {!wa && !listing.url && <span className="badge badge-rec">Member-recommended — ask in the group</span>}
      </div>
    </article>
  )
}
