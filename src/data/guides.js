// Guides — built in the order Jared set on 2026-11-01: 1) Bus, 2) Housing, 3) Hair.
// Bus times were checked 1 Nov 2026 against the Tirana Airport bus listing and
// Gjirafa Travel's live booking pages. Albanian bus times CHANGE (season,
// operator, station moves) and sources regularly disagree — every route carries
// a "checked" date and the guide tells users to re-confirm the day before.
// Prices are what the sources showed on the check date, in EUR as listed there.

export const BUS_CHECKED = 'Checked 1 Nov 2026 — re-confirm your bus the day before you travel'

export const busRoutes = [
  {
    route: 'Tirana Airport (TIA) → Vlora',
    operator: 'Hermes Aeroport',
    times: '03:30 · 11:00 · 12:30 · 14:00 · 16:00 · 18:00 · 20:00 · 22:15 · 00:45',
    duration: '~3 hours',
    price: '1,200 lek (≈ €12–13)',
    notes:
      'Direct — you do NOT need to go into Tirana first. Exit Arrivals, turn left to the bus stops. Booking sites list fewer departures than the airport, which is exactly why you confirm the day before.',
  },
  {
    route: 'Vlora → Tirana Airport (TIA)',
    operator: 'Hermes Aeroport',
    times: '01:30 · 03:30 · 06:00 · 07:00 · 09:00 · 11:00 · 13:00 · 15:00 · 20:00',
    duration: '~3 hours',
    price: '1,200 lek (≈ €12–15)',
    notes:
      'Departs Vlora Station. For a morning flight, the 01:30 and 03:30 buses exist for a reason — take one earlier than feels necessary. Contact on the airport listing: +355 67 609 7542, reservation@hermesaeroport.com.',
  },
  {
    route: 'Vlora ↔ Tirana (city)',
    operator: 'Interbus Vlora · El-Alba Trans',
    times: 'Roughly every 30 min, ~05:00–17:30 (21–27 buses/day)',
    duration: '2h 20m – 2h 50m',
    price: '€8',
    notes:
      'Vlora side: the bus station on Rruga Demokracia (it moved — older blogs point at the Independence Monument, that is out of date). Tirana side: South & North Terminal (Terminali i Jugut dhe Veriut).',
  },
  {
    route: 'Vlora → Saranda',
    operator: 'Transbus Saranda · Boraku · Saranda Transport',
    times: '07:00 · 11:30 · 13:00 · 14:30 · 16:00 (7/day on booking sites)',
    duration: '2h 20m – 4h — the route decides it',
    price: '€15',
    notes:
      'Two ways south: COASTAL over Llogara through Dhërmi and Himarë (slower, stunning) and INLAND through Tepelenë and Gjirokastër. Ask which one your bus takes before you pay — if you get carsick, inland is kinder than the Llogara switchbacks.',
  },
  {
    route: 'Gjirokastër ↔ Saranda',
    operator: 'Argjiro · Trans Butrinti',
    times: '08:00 · 10:00 · 13:45 (about 4/day)',
    duration: '1h – 1h 15m on booking sites (allow up to 2h)',
    price: '€6',
    notes:
      'Many Tirana/Vlora–Saranda buses also pass through Gjirokastër — confirm the stop with the driver when you board, not when you arrive.',
  },
  {
    route: 'Vlora → Gjirokastër',
    operator: 'Via inland Saranda buses',
    times: 'No reliable published timetable found',
    duration: 'Ask at Vlora Station',
    price: 'Ask at the station',
    notes:
      'Honest gap: booking sites do not publish this leg cleanly. The inland Vlora→Saranda buses pass Gjirokastër — go to Vlora Station the day before, ask for the Gjirokastër stop, and write the time down. If a member rides it, tell an admin and this guide gets the real time.',
  },
]

export const busHowItWorks = [
  'Cash is king: pay the driver or conductor in lek. Cards are the exception, not the rule.',
  'Arrive 20–30 minutes early. On many routes there is no ticket office working ahead of time — your bag on a seat is your reservation.',
  'Schedules change with the season and stations MOVE (Vlora’s moved to Rruga Demokracia). Any time older than this season is a rumour.',
  'Check live before you travel: Gjirafa Travel (travel.gjirafa.com) lists bookable departures, and Albania’s official eTransport platform is the government source.',
  'Screenshot your destination in Albanian — Vlorë, Tiranë, Sarandë, Gjirokastër, Shkodër — and show the driver. Pronunciation will not save you; the screenshot will.',
  'Going to the airport with big luggage or a group? Price a shared taxi in the WhatsApp group first (see Drivers in the Directory) — the bus wins on price, the taxi wins on sanity.',
]

export const housingGuide = {
  title: 'Housing Guide — rent without getting played',
  intro:
    'Built from what members in this community actually lived: the good advice and the scam that already happened to one of us.',
  sections: [
    {
      h: 'The search (what works)',
      points: [
        'Land in an Airbnb first and search on foot — a "good" listing can hide mold and plumbing problems, and members have been burned by photos.',
        'Most members in Vlora live along the Lungomare or just behind it. Walk the street you would live on at night before you sign anything.',
        'Ask in the WhatsApp group BEFORE you sign: members warn each other about specific landlords and buildings here first.',
      ],
    },
    {
      h: 'The lease trap',
      points: [
        'For the 12-month visa-free stay you do NOT need a notarized lease. Landlords who require one usually raise the rent, because notarizing means they pay tax on it and pass that cost to you (La Shawn, Feb 2026).',
        'No contract at all is the other extreme — one member\'s landlord exploited exactly that at move-out. Get at least a simple signed agreement, in writing, in a language you read.',
      ],
    },
    {
      h: 'The electricity scam (it already happened here)',
      points: [
        'The pattern: rent agreed with "electricity included", then at move-out the landlord claims your last few days used an impossible amount (one member: a claimed $100 for 8 days) and demands extra cash.',
        'Defence: "electricity included" IN WRITING, photograph the meter on day one and on your last day, and keep your chat with the landlord — screenshots are evidence.',
      ],
    },
    {
      h: 'Move-in checklist',
      points: [
        'Meter photo (electric + water), photos of every existing scratch/damage, sent to the landlord the same day.',
        'Agree in writing: rent, what is included, notice period, deposit return terms.',
        'Ask about the bathtub before you fall in love with a place — members learned the funny way that tubs are RARE in Albanian apartments.',
        'Winter check: Vlora rentals can be cold and damp off-season. Ask how it is heated and what winter bills actually ran last year.',
      ],
    },
  ],
}

export const hairGuide = {
  title: 'Hair Guide — braids, barbers & the product problem',
  intro:
    'The question this community asked for eight straight months. Here is everything the Hair group ("Get your Naps Wacked!!!") figured out, in one place.',
  sections: [
    {
      h: 'Where to actually go',
      points: [
        'Braids: African Braid Shop / Beauty Center in Shkodër — the stylist is Ghanaian, she posted her work in the group, and she will TRAVEL to Vlora for clients. Contact in the Directory.',
        'Vlora finally has its own braider (joined the community Oct 2026) — ask in the Hair group for her current contact while her public listing is being confirmed.',
        'Barber: Ergi, bookable on Instagram (Directory), Tirana/Vlora. Loc retwists remain the hardest service to find — line it up in the Hair group before you need it, not after.',
      ],
    },
    {
      h: 'Getting to Shkodër (and why most people don’t)',
      points: [
        'There is no quick hop: it is Vlora → Tirana → Shkodër by bus, most of a day return. That is why the Beauty Center’s travel-to-Vlora offer matters — split her trip between 2–3 clients on the same day and everyone wins.',
        'Use the Bus Guide above for the Tirana leg, then Tirana → Shkodër buses leave from the same South & North Terminal through the day.',
      ],
    },
    {
      h: 'The product problem (real prices members paid)',
      points: [
        'Tirana braid shop quote: €100 for 3 packs of Xpression pre-stretched braiding hair. US price: $5.99 a pack. Do not pay the panic price.',
        'Amazon International was the winner for one member: about $132 total for an order that cost $363 routed through family at home — and no customs hassle.',
        'Temu and AliExpress come through with nothing extra to pay (see the Temu Guide below) — Temu is just slow. Customs can bite orders from other sellers; Greece and Bulgaria shopping runs are the other member route.',
        'Members travelling to London or the US sometimes carry product orders for the group — watch the Hair group and get on a run early.',
      ],
    },
  ],
}

export const temuGuide = {
  title: 'Temu Guide — cheap stuff, picked up at the post office',
  intro:
    'The community verdict is simple: buy from Temu — it is the best. The price you pay at checkout is the whole price: no customs bill, no pickup fee, nothing. The one thing nobody warns you: it does not come to your door. Temu parcels are collected from Posta Shqiptare, the Albanian post. Here is the whole run, start to finish.',
  sections: [
    {
      h: 'Ordering — set yourself up right',
      points: [
        'Order in the Temu app or on temu.com and pay by card. Prices show in EUR at checkout.',
        'Address line that works: your FULL name exactly as on your ID, street + building, neighbourhood, city, postal code, Albania.',
        'Your PHONE NUMBER is the most important field — the post office calls or texts that number when the parcel lands. Use an Albanian number if you have one, and keep it switched on.',
        'Order the whole basket at once — there is no need to split orders small. Temu settles its tax side at checkout, so the customs line never lands on a Temu parcel (see "The money" below).',
      ],
    },
    {
      h: 'The wait',
      points: [
        'Parcels ship from China and members report roughly 2–4 weeks — cheap, but slow. Order for next month, not for this weekend.',
        'Track inside the Temu app. Once tracking says the parcel has arrived in Albania / been handed to the local carrier, Posta Shqiptare has it — the same tracking code works on postashqiptare.al (e-Posta tracking).',
        'Tracking often goes quiet for days between "arrived in country" and the pickup call. That silence is normal, not lost.',
      ],
    },
    {
      h: 'The money — there is no extra money',
      points: [
        'No customs charge. No pickup fee. What you paid at checkout is everything — Jared’s own Temu orders (Jun 2026) arrived with €0 extra to pay, and AliExpress runs the same way in members’ experience.',
        'Why you may hear otherwise: Albanian Customs law does have a €22 duty-free line for postal imports in general. Temu handles its side at checkout, so that line never shows up on a Temu parcel — do not split orders or pay anyone "customs" on one.',
        'SCAM WARNING — Temu itself emails this with every order: if a message claims your package is being held for "unpaid customs duties" and asks you to pay a fee, it is fraud. Ignore it and check the status on Temu’s order page.',
      ],
    },
    {
      h: 'Picking it up at Posta Shqiptare',
      points: [
        'You collect it yourself: expect an SMS or call from the post, or a paper notice in your mailbox, naming the post office holding your parcel (usually the one for your neighbourhood / postal code).',
        'Bring your passport or ID card AND the tracking/order code from the Temu app. They find parcels by name + code; a screenshot of the tracking page speeds things up.',
        'Post offices mostly run Monday–Friday (some open Saturday morning). Mid-morning on a weekday is the calm window.',
        'No notice after tracking has said "arrived" for several days? Go in anyway with the tracking code and ask — parcels sit on the shelf waiting to be claimed all the time.',
        'Do not leave it sitting: unclaimed parcels are only held for a limited time before being returned to sender.',
        'Nothing to pay at the counter for a Temu parcel — if anyone asks for a "customs fee," that is the scam from the section above.',
      ],
    },
    {
      h: 'What members order (and the honest warnings)',
      points: [
        'Braiding hair and hair products are the classic order — a fraction of the Tirana panic price (see the Hair Guide). Phone accessories, kitchen bits, kids’ stuff and organisers are the other regulars.',
        'Quality is a lottery: read the buyer photos and reviews, size UP on clothes, and treat electronics as disposable-grade unless the reviews say otherwise.',
        'Need it faster? Amazon International is pricier but quicker, and the Greece/Bulgaria shopping runs are the community’s other routes.',
      ],
    },
  ],
}
