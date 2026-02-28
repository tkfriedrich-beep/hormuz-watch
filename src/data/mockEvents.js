export const ESCALATION_LEVEL = 4;
export const ESCALATION_MAX = 5;
export const ESCALATION_LABEL = "MAJOR THEATER WAR";

export const marketData = [
  { symbol: "BRENT", label: "Brent Crude", value: 124.50, change: +8.72, unit: "$/bbl" },
  { symbol: "GOLD", label: "Gold", value: 2410.00, change: +45.30, unit: "$/oz" },
  { symbol: "DXY", label: "US Dollar Index", value: 108.34, change: +1.82, unit: "" },
  { symbol: "VIX", label: "VIX", value: 42.15, change: +12.60, unit: "" },
];

export const timelineEvents = [
  {
    id: "evt-001",
    timestamp: "2026-02-28T02:14:00Z",
    title: "Operation Epic Fury Initiated",
    summary: "Joint US-Israel decapitation strikes commence against Tehran command infrastructure.",
    category: "Kinetic",
    confidence: 0.92,
    source: "AP / Reuters / Pentagon Briefing",
    location: "Tehran, Iran",
    western: {
      headline: "Coalition launches precision strikes on IRGC command-and-control nodes",
      detail: "US CENTCOM confirms coordinated strikes targeting military infrastructure in Tehran. Civilian areas reportedly avoided. Operation Epic Fury aims to degrade Iranian command capability."
    },
    eastern: {
      headline: "Brutal aggression targets residential areas of Tehran at dawn",
      detail: "IRNA reports widespread explosions across Tehran. Reports of civilian casualties in southern districts. Iran's Supreme National Security Council convenes emergency session."
    },
    fogDelta: 0.68,
  },
  {
    id: "evt-002",
    timestamp: "2026-02-28T02:47:00Z",
    title: "Supreme Leader Compound Struck",
    summary: "Multiple bunker-busting munitions impact Khamenei's fortified compound in northern Tehran.",
    category: "Kinetic",
    confidence: 0.78,
    source: "Reuters / Satellite Imagery",
    location: "Northern Tehran, Iran",
    western: {
      headline: "Strike on Supreme Leader's compound; Khamenei status unconfirmed",
      detail: "Satellite imagery shows significant damage to the fortified leadership compound. No official confirmation of casualties. Israeli F-35I sorties detected over western Iran."
    },
    eastern: {
      headline: "Cowardly assassination attempt on spiritual leader of the revolution",
      detail: "IRGC confirms attack on leadership residence. Supreme Leader reported evacuated prior to strike. IRGC vows 'response that will reshape the region.'"
    },
    fogDelta: 0.82,
  },
  {
    id: "evt-003",
    timestamp: "2026-02-28T03:22:00Z",
    title: "IRGC Aerospace HQ Destroyed",
    summary: "IRGC Aerospace Force headquarters sustains direct hits. Missile command capability degraded.",
    category: "Kinetic",
    confidence: 0.95,
    source: "AP / US DoD",
    location: "Tehran, Iran",
    western: {
      headline: "Precision strike on IRGC Aerospace HQ eliminates missile coordination center",
      detail: "US DoD confirms destruction of IRGC Aerospace Force headquarters. Strike designed to prevent retaliatory ballistic missile launches. B-2 Spirit bombers employed."
    },
    eastern: {
      headline: "Strikes on IRGC facilities cause widespread damage to surrounding neighborhood",
      detail: "Iranian state media reports collateral damage to civilian structures near military site. Hospitals in eastern Tehran report influx of wounded."
    },
    fogDelta: 0.45,
  },
  {
    id: "evt-004",
    timestamp: "2026-02-28T04:05:00Z",
    title: "Ministry of Intelligence Targeted",
    summary: "Tehran's Ministry of Intelligence and Security (MOIS) hit by cruise missiles.",
    category: "Kinetic",
    confidence: 0.88,
    source: "Reuters / OSINT Analysts",
    location: "Central Tehran, Iran",
    western: {
      headline: "MOIS headquarters neutralized; intelligence archives likely destroyed",
      detail: "Coalition forces strike Iran's primary intelligence apparatus. Operation aims to disrupt proxy network coordination across the Middle East."
    },
    eastern: {
      headline: "Terrorists target government buildings in the heart of Tehran",
      detail: "Press TV reports destruction of government administrative buildings. Accusations of war crimes leveled at US and Israeli forces."
    },
    fogDelta: 0.55,
  },
  {
    id: "evt-005",
    timestamp: "2026-02-28T05:30:00Z",
    title: "Operation Roaring Lion — Israeli Phase",
    summary: "Israel confirms independent strike package under Operation Roaring Lion targeting nuclear sites.",
    category: "Kinetic",
    confidence: 0.90,
    source: "IDF Spokesperson / Haaretz",
    location: "Isfahan & Natanz, Iran",
    western: {
      headline: "IDF launches Operation Roaring Lion targeting nuclear enrichment facilities",
      detail: "Israeli Air Force confirms strikes on Isfahan and Natanz nuclear facilities. Objective: prevent Iranian breakout capability. GBU-57 MOP bunker busters employed."
    },
    eastern: {
      headline: "Zionist regime attacks civilian nuclear energy infrastructure",
      detail: "Iran's Atomic Energy Organization condemns attacks on peaceful nuclear facilities. Environmental contamination fears reported. IAEA monitoring stations offline."
    },
    fogDelta: 0.72,
  },
  {
    id: "evt-006",
    timestamp: "2026-02-28T07:15:00Z",
    title: "Iranian Retaliation — 5th Fleet (Bahrain)",
    summary: "Ballistic missiles strike US Naval Support Activity in Bahrain. Casualties reported.",
    category: "Kinetic",
    confidence: 0.85,
    source: "CENTCOM / Al Jazeera",
    location: "Manama, Bahrain",
    western: {
      headline: "Iranian ballistic missiles impact 5th Fleet HQ; Patriot intercepts partial",
      detail: "CENTCOM confirms multiple missile impacts on NSA Bahrain. THAAD and Patriot systems intercept majority but several penetrate. Casualty assessment ongoing."
    },
    eastern: {
      headline: "IRGC's righteous response devastates American naval base",
      detail: "Sepah News claims complete destruction of US naval command in Bahrain. 'Operation True Promise III has begun,' declares IRGC spokesperson."
    },
    fogDelta: 0.76,
  },
  {
    id: "evt-007",
    timestamp: "2026-02-28T07:45:00Z",
    title: "Al-Udeid Air Base Struck (Qatar)",
    summary: "IRGC launches medium-range ballistic missiles at Al-Udeid Air Base, Qatar.",
    category: "Kinetic",
    confidence: 0.82,
    source: "CENTCOM / Qatar MOD",
    location: "Al-Udeid, Qatar",
    western: {
      headline: "Al-Udeid Air Base targeted; air defense systems engage incoming missiles",
      detail: "US forces at Al-Udeid engage incoming Iranian MRBMs. Some runway damage reported. CAOC operations temporarily relocated to backup facility."
    },
    eastern: {
      headline: "American base in Qatar suffers heavy damage in IRGC missile barrage",
      detail: "Iranian media claims complete destruction of command center. Qatari government issues statement calling for immediate ceasefire."
    },
    fogDelta: 0.60,
  },
  {
    id: "evt-008",
    timestamp: "2026-02-28T08:20:00Z",
    title: "Al-Dhafra Base Struck (UAE)",
    summary: "Iranian cruise and ballistic missiles target Al-Dhafra Air Base in the UAE.",
    category: "Kinetic",
    confidence: 0.80,
    source: "Reuters / UAE WAM",
    location: "Abu Dhabi, UAE",
    western: {
      headline: "UAE's Al-Dhafra base sustains limited damage from Iranian missile volley",
      detail: "US and Emirati air defenses intercept majority of incoming threats. F-35 operations temporarily suspended. UAE activates civil defense protocols."
    },
    eastern: {
      headline: "IRGC missiles reach deep into UAE, striking American forces",
      detail: "Iranian state TV broadcasts purported satellite imagery of base damage. Abu Dhabi airport diversions reported."
    },
    fogDelta: 0.58,
  },
  {
    id: "evt-009",
    timestamp: "2026-02-28T09:00:00Z",
    title: "Strait of Hormuz — Mine Threat Declared",
    summary: "US Navy detects mine-laying activity near the Strait of Hormuz. IRGC fast boats active.",
    category: "Economic",
    confidence: 0.75,
    source: "NAVCENT / Lloyd's Maritime",
    location: "Strait of Hormuz",
    western: {
      headline: "NAVCENT warns of mine threat in Strait of Hormuz; shipping advisory issued",
      detail: "US 5th Fleet detects IRGC mine-laying operations. All commercial shipping advised to hold position. Lloyd's raises war risk premiums to historic levels."
    },
    eastern: {
      headline: "IRGC Navy secures Persian Gulf against hostile warships",
      detail: "IRGC Navy declares defensive perimeter in Strait of Hormuz. 'Any vessel supporting the aggression will be treated as hostile,' warns commander."
    },
    fogDelta: 0.50,
  },
  {
    id: "evt-010",
    timestamp: "2026-02-28T10:30:00Z",
    title: "UN Security Council Emergency Session",
    summary: "UNSC convenes emergency session. Russia and China block condemnation of Iran.",
    category: "Diplomatic",
    confidence: 0.95,
    source: "AP / UN Press",
    location: "New York, USA",
    western: {
      headline: "UNSC deadlocked as Russia and China veto resolution condemning Iranian strikes",
      detail: "US Ambassador presents evidence of Iranian escalation. Russia calls for 'immediate cessation of illegal US-Israeli aggression.' China calls for restraint from all parties."
    },
    eastern: {
      headline: "World community demands end to American-Zionist war of aggression",
      detail: "Iranian Ambassador at UN presents civilian casualty figures. Non-Aligned Movement issues statement condemning 'unilateral military action.'"
    },
    fogDelta: 0.40,
  },
  {
    id: "evt-011",
    timestamp: "2026-02-28T12:00:00Z",
    title: "Brent Crude Surges Past $124",
    summary: "Global oil markets in turmoil. Brent crude hits $124.50/bbl as Hormuz closure fears mount.",
    category: "Economic",
    confidence: 0.98,
    source: "Bloomberg / Reuters Markets",
    location: "Global",
    western: {
      headline: "Oil markets spike on Hormuz closure fears; SPR release under consideration",
      detail: "Brent crude surges 12.4% to $124.50. White House considers Strategic Petroleum Reserve release. G7 energy ministers in emergency coordination."
    },
    eastern: {
      headline: "Economic resistance weapon proves effective as oil prices soar",
      detail: "Iranian economic analysts herald oil price surge as proof of Iran's strategic leverage. 'The Strait belongs to Iran,' declares economy minister."
    },
    fogDelta: 0.25,
  },
  {
    id: "evt-012",
    timestamp: "2026-02-28T14:00:00Z",
    title: "Khamenei Status: Unconfirmed / Likely KIA",
    summary: "Multiple intelligence agencies assess Supreme Leader Khamenei likely killed. No official confirmation.",
    category: "Kinetic",
    confidence: 0.65,
    source: "OSINT Analysts / Unnamed Officials",
    location: "Tehran, Iran",
    western: {
      headline: "Intelligence assessment: Khamenei likely killed in compound strike",
      detail: "Three Western intelligence agencies independently assess high probability Khamenei was killed. Iranian state media has not aired new footage of Supreme Leader in 12 hours."
    },
    eastern: {
      headline: "Rumors of Supreme Leader's martyrdom are Zionist psychological warfare",
      detail: "IRGC spokesman dismisses reports as 'enemy propaganda.' However, no proof of life has been provided. Succession protocol discussions reportedly underway."
    },
    fogDelta: 0.90,
  },
];

export const categoryColors = {
  Kinetic: { bg: "bg-red-900/40", border: "border-red-600", text: "text-red-400", dot: "bg-red-500" },
  Diplomatic: { bg: "bg-blue-900/40", border: "border-blue-600", text: "text-blue-400", dot: "bg-blue-500" },
  Economic: { bg: "bg-amber-900/40", border: "border-amber-600", text: "text-amber-400", dot: "bg-amber-500" },
};
