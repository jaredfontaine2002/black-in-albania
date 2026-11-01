// ── Site configuration ──────────────────────────────────────────────────────
// GOOGLE BACKEND (free, no server needed):
// 1. Create a Google Sheet with the columns in README.md ("Google Sheets backend").
// 2. In the Sheet: File → Share → "Anyone with the link can view".
// 3. Paste its CSV feed URL below. Format:
//    https://docs.google.com/spreadsheets/d/<SHEET_ID>/gviz/tq?tqx=out:csv&sheet=Listings
// While this is empty, the app uses the bundled seed data in src/data/listings.js.
//
// GET LISTED FORM: create a free Google Form with the fields in the README and
// paste its share link below. Submissions land in a Google Sheet; a listing only
// goes public after the admin copies it into the Listings sheet (approval gate).

export const GOOGLE_SHEET_CSV_URL = ''
export const GET_LISTED_FORM_URL = ''

// Fallback contact when a listing has no direct number: the community invite.
export const COMMUNITY_NAME = 'Black American Expats in Albania'
