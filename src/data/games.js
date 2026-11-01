// Flamurtari (Vlora) women's basketball — Kampionati Kombëtar Femra 2026-27.
// Extracted 2026-11-01 from the league fixture list Jared supplied
// (Flamurtari_Games_Highlighted). All 20 regular-season Flamurtari games.
// `date` is ISO so the component can compute weekdays and past/next games.
// Times are tip-off, local time. Playoff dates exist (semis from 1 Apr 2027,
// finals from 18 Apr 2027) but the teams depend on the standings.
export const GAMES_INTRO =
  "Flamurtari is Vlora's own women's basketball team, playing in Albania's National Women's Championship. Home games are at the Flamurtari hall right here in Vlora — an easy, cheap night out and a good way to meet the city beyond the beach. All 20 regular-season fixtures are below and home games are marked. Get a group together and go support."

export const GAMES_SOURCE =
  'Source: league fixture list, Kampionati Kombëtar Femra 2026–27. Playoffs run April–May 2027 — who Flamurtari plays depends on the standings.'

const H = 'Flamurtari Hall'
export const flamurtariGames = [
  { md: 1, date: '2026-10-10', opp: 'KS Tirana', home: true, venue: H, city: 'Vlora', time: '17:00' },
  { md: 2, date: '2026-10-17', opp: 'Vllaznia', home: true, venue: H, city: 'Vlora', time: '15:00' },
  { md: 3, date: '2026-10-25', opp: 'KS Partizani', home: false, venue: 'Asllan Rusi', city: 'Tirana', time: '16:00' },
  { md: 4, date: '2026-10-31', opp: 'Sopoti Eagles', home: true, venue: H, city: 'Vlora', time: '16:00' },
  { md: 5, date: '2026-11-07', opp: 'Studenti', home: true, venue: H, city: 'Vlora', time: '11:00' },
  { md: 6, date: '2026-11-13', opp: 'KS Tirana', home: false, venue: 'Farie Hoti', city: 'Tirana', time: '19:00' },
  { md: 7, date: '2026-11-22', opp: 'Vllaznia', home: false, venue: 'Qazim Dervishi', city: 'Shkodër', time: '14:00' },
  { md: 8, date: '2026-12-06', opp: 'KS Partizani', home: true, venue: H, city: 'Vlora', time: '15:00' },
  { md: 9, date: '2026-12-12', opp: 'Sopoti Eagles', home: true, venue: H, city: 'Vlora', time: '13:00' },
  { md: 10, date: '2026-12-19', opp: 'Studenti', home: false, venue: 'Asllan Rusi', city: 'Tirana', time: '14:00' },
  { md: 11, date: '2027-01-16', opp: 'KS Tirana', home: true, venue: H, city: 'Vlora', time: '15:00' },
  { md: 12, date: '2027-01-23', opp: 'Vllaznia', home: true, venue: H, city: 'Vlora', time: '13:00' },
  { md: 13, date: '2027-02-01', opp: 'KS Partizani', home: false, venue: 'Asllan Rusi', city: 'Tirana', time: '16:00' },
  { md: 14, date: '2027-02-06', opp: 'Sopoti Eagles', home: false, venue: 'Salla Sportive', city: 'Librazhd', time: '12:00' },
  { md: 15, date: '2027-02-20', opp: 'Studenti', home: true, venue: H, city: 'Vlora', time: '14:00' },
  { md: 16, date: '2027-02-27', opp: 'KS Tirana', home: false, venue: 'Farie Hoti', city: 'Tirana', time: '19:00' },
  { md: 17, date: '2027-03-07', opp: 'Vllaznia', home: false, venue: 'Qazim Dervishi', city: 'Shkodër', time: '16:00' },
  { md: 18, date: '2027-03-13', opp: 'KS Partizani', home: true, venue: H, city: 'Vlora', time: '16:00' },
  { md: 19, date: '2027-03-20', opp: 'Sopoti Eagles', home: false, venue: 'Salla Sportive', city: 'Librazhd', time: '17:00' },
  { md: 20, date: '2027-03-27', opp: 'Studenti', home: false, venue: 'Asllan Rusi', city: 'Tirana', time: '12:00' },
]
