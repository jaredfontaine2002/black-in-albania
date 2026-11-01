import { listings as seedListings } from '../data/listings'
import { GOOGLE_SHEET_CSV_URL } from '../config'

// Data layer: the directory can be backed by a free Google Sheet (see README)
// or by the bundled seed data. Either way, only `approved` listings render —
// that is the approval gate from the PRD, enforced in code, not by convention.

export function visibleListings(list) {
  return list.filter((l) => l.approved !== false && String(l.approved) !== 'false')
}

// Minimal CSV parser (handles quoted fields with commas / quotes inside).
export function parseCsv(text) {
  const rows = []
  let row = []
  let field = ''
  let inQuotes = false
  for (let i = 0; i < text.length; i++) {
    const c = text[i]
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') { field += '"'; i++ } else { inQuotes = false }
      } else field += c
    } else if (c === '"') inQuotes = true
    else if (c === ',') { row.push(field); field = '' }
    else if (c === '\n') { row.push(field); rows.push(row); row = []; field = '' }
    else if (c !== '\r') field += c
  }
  if (field.length || row.length) { row.push(field); rows.push(row) }
  return rows.filter((r) => r.some((cell) => cell.trim() !== ''))
}

function rowToListing(headers, cells) {
  const get = (name) => {
    const idx = headers.indexOf(name)
    return idx >= 0 ? (cells[idx] || '').trim() : ''
  }
  return {
    id: get('id') || get('name').toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    name: get('name'),
    category: get('category'),
    city: get('city'),
    description: get('description'),
    priceRange: get('pricerange'),
    whatsapp: get('whatsapp').replace(/[^0-9]/g, ''),
    url: get('url'),
    vouchedBy: get('vouchedby'),
    verified: get('verified'),
    spotlight: ['true', 'yes', '1'].includes(get('spotlight').toLowerCase()),
    approved: !['false', 'no', '0', 'pending', ''].includes(get('approved').toLowerCase()),
  }
}

export async function loadListings() {
  if (!GOOGLE_SHEET_CSV_URL) return { listings: visibleListings(seedListings), source: 'seed' }
  try {
    const res = await fetch(GOOGLE_SHEET_CSV_URL)
    if (!res.ok) throw new Error(`Sheet fetch ${res.status}`)
    const rows = parseCsv(await res.text())
    const headers = rows[0].map((h) => h.trim().toLowerCase())
    const parsed = rows.slice(1).map((cells) => rowToListing(headers, cells)).filter((l) => l.name)
    if (!parsed.length) throw new Error('Sheet returned no listings')
    return { listings: visibleListings(parsed), source: 'google-sheet' }
  } catch (err) {
    console.warn('Google Sheet backend unavailable, falling back to seed data:', err)
    return { listings: visibleListings(seedListings), source: 'seed-fallback' }
  }
}

export function waLink(listing) {
  if (!listing.whatsapp) return null
  const text = encodeURIComponent(
    `Hi ${listing.name}, I found you in the Black in Albania Directory. I'm looking for ${listing.category} in ${listing.city}.`
  )
  return `https://wa.me/${listing.whatsapp}?text=${text}`
}
