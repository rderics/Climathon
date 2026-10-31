# Pitch — Sun 1 Nov, 12:30 (3 min presentation + 3 min Q&A)

Team 5: **Battery Monster**  
Challenge: **EIT Urban Mobility Hub — Giving EV Batteries a Second Life**  
Judging Rubric: 5 criteria x 20 % each (docs/RULES.md)  
Live Site & Demo: **https://rderics.id.lv/battery-monster/**  

---

## 3-Minute Presentation Script (Strict 180 Seconds)

### Slide 1: The Bottleneck — Why Second Life is Stalled (0:00 – 0:35 · 35 s)
- **Visual:** A crashed EV sitting in a cordoned quarantine yard next to a €30,000 replacement bill.
- **Narrative:**
  > "The circular economy wants EV batteries to have a second life. But today, the second-life pipeline is completely choked at the intake gate.
  > In Latvia and across Europe, when an EV is in an accident, insurers panic. Fear of battery fires means cars sit in quarantine yards for weeks at €76–100/day. And even after minor underbody scrapes or bracket damage, entire €13,000 to €43,000 battery packs are written off because nobody on the ground has an independent diagnostic standard.
  > In 2% of EV collisions, the battery is involved—but it drives 7% of total claim costs (AZT data).
  > Second-life storage projects have no certified feedstock, while insurers are bleeding cash discarding good batteries."

### Slide 2: Value Proposition — The Triage Protocol (0:35 – 1:05 · 30 s)
- **Visual:** The 3-way decision fork: KEEP (Save €25k) · REPAIR (Casing swap €1.5k) · SECOND LIFE (Buffer storage).
- **Narrative:**
  > "Meet **Battery Monster**: the 24-hour post-incident triage protocol for electric vehicles.
  > We solve the insurer's immediate liability problem on Day 1: a fast, standardized inspection that tells them whether to **Keep**, **Repair**, or **Decommission**.
  > For every assessed claim, the insurer saves an average of **€435** in avoided quarantine and needless pack swaps.
  > And for total-loss cars with healthy cells, we don't send them to a shredder—we certify and route them directly to second-life energy storage."

### Slide 3: Solution & Live Demo (1:05 – 1:55 · 50 s)
- **Visual:** Live screen share of **rderics.id.lv/battery-monster** running the **Interactive Triage Simulator**.
- **Narrative:**
  > "How does it work? We don't guess, and we don't rely on cameras alone. Our protocol builds on the official Swiss SVV insurer standard:
  > 1. Physical inspection of the underbody tray (<10 mm casing deformation threshold).
  > 2. Direct BMS telemetry link: reading cell-to-cell delta voltage, pyrofuse status, and insulation resistance.
  > *(Switch to simulator)*: Here is a live claim. A 2024 EV with an underbody impact. The casing has an 8 mm dent, but the BMS reports 0 fault codes and cell balance is within 15 mV.
  > Standard body shop recommendation? Replace the entire pack for €19,000.
  > Battery Monster verdict: **Repairable Casing Swap**. Cost: €1,500. Insurer saves €17,500 on a single case.
  > If the vehicle is a structural write-off, the battery is graded for **Second-Life Edge Storage** at bus depots or EV fast-charging hubs."

### Slide 4: Business Model, Unit Economics & Circular Impact (1:55 – 2:40 · 45 s)
- **Visual:** Unit economics bar chart + Circular flow diagram (ENGYcell / depot storage).
- **Narrative:**
  > "Our business model has zero capex at the start. No expensive shredders, no multi-million euro real estate.
  > We operate mobile diagnostic kits costing €2,000–4,000.
  > - **Fee:** €150–200 per assessment, paid by the insurer.
  > - **Our delivery cost:** €120–200 (technician time, equipment, insurance).
  > - **Market size:** ~57 triggered cases/yr in Latvia, 200–300 in the Baltics (~€40k–60k service line), scaling as the EV fleet expands (up 51% last year).
  > - **Circular Impact:** A pack kept or repurposed is a 400 kg virgin battery that doesn't need to be manufactured, directly supporting EU Battery Regulation 2023/1542 passport readiness."

### Slide 5: The Pilot Plan & The Ask (2:40 – 3:00 · 20 s)
- **Visual:** 8-week pilot timeline with Go/Stop gates.
- **Narrative:**
  > "We are not asking insurers to trust a black box. Our pilot is an 8-week retrospective audit of 20–40 past claim files with one Latvian insurer (e.g., Balta, BTA, or ERGO) to benchmark our protocol against dealer teardowns.
  > Our go/stop rule: exactly **zero false all-clears**.
  > The €1,000 prize directly funds our specialized high-voltage insulation testing equipment and data-sharing agreements.
  > **Battery Monster: After a crash, know the battery.** Thank you."

---

## 3-Minute Q&A Defense (Cheat Sheet)

### Q1: "What if the car manufacturer (OEM) mandates full pack replacement after an airbag deploy?"
- **Answer:** *"OEM repair instructions legally prevail and we never override them. In fact, our protocol checks pyrofuse and airbag deployment as Stage 1. However, Allianz/AZT research shows that in many EV collision claims, the pack is undamaged or only requires a casing swap (€1,100–2,200 vs €13k–43k). OEMs like VW have published battery assessment catalogues specifically to enable this. Our triage identifies precisely those cases."*

### Q2: "Can your tool certify that a battery is 100% safe to drive?"
- **Answer:** *"No, and our legal protocol strictly prohibits using the word 'safe'. We report: 'No gross mechanical, electrical, or thermal damage detected under test conditions at this date.' We provide defensible technical advice with an audit trail, shifting the burden off panic and onto data."*

### Q3: "Volume in Latvia is tiny (only ~13,900 EVs). How is this a real business?"
- **Answer:** *"That is why we start with zero fixed costs and a mobile kit (€2–4k), not a €15M recycling plant. Latvia has ~57 triggered battery crash cases a year; the Baltics have 200–300. At €200/check, that is a profitable niche service line today. More importantly, it secures our position as the certified gatekeeper for second-life feedstock as the fleet doubles by 2028."*

### Q4: "Where do the batteries actually go for their second life?"
- **Answer:** *"Unlike competitors trying to build their own storage containers, we partner with existing repurposers. In Riga, we route Grade A packs to players like ENGYcell (who already build second-life storage) and edge depot buffer chargers for fleet operators (like Rīgas satiksme). Degraded packs are routed via ADR transport to certified OECD hydrometallurgical recyclers (Fortum in Finland or AE Elemental in Poland)."*

### Q5: "How does this comply with the EU Battery Regulation (2023/1542)?"
- **Answer:** *"Annex XIV of the EU Battery Regulation requires documented state-of-health and safety testing for any pack moving across borders or entering second life; without it, packs are classified as illegal waste shipments. Our protocol generates the digital inspection record that satisfies Annex XIV and prepares packs for the mandatory Feb 2027 Battery Passport."*

---

## Pitch Checklist
- [x] Slide deck mirrors the 5 criteria in `docs/RULES.md`
- [x] Live simulator embedded and tested on `rderics.id.lv/battery-monster`
- [x] Offline fallback: local copy of web page or screenshot carousel ready
- [x] Every statistic verified against `docs/INVESTOR_VIEW.md` and `docs/CHECKED_ITEMS.md`
- [x] Strict 3:00 minute timer rehearsed