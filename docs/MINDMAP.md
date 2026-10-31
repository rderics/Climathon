# Mind map: the whole process A to Z

Live page: https://rderics.id.lv/battery-monster . Source: `web/battery-monster/` (`index.html` + `app.js`; serve the folder or open index.html, it needs app.js next to it). Answers found by research are in docs/ANSWERS.md. Click a stage to open it (it closes the others), drag to move, scroll to zoom. Dots: green = sourced in our research, amber = our estimate or assumption, red = unknown / to check.

## The 14 stages
1. Where batteries come from (materials, cell makers, pack, OEM as legal producer)
2. First life in the car (Latvia: 13,916 EVs end-2025; about half arrived as used imports)
3. Degradation and the swap (leaves the car at about 70-80%; dealer / garage / insurer)
4. Why used packs sit in storage (no collector found, freight, used-vs-waste limbo, storage rules unconfirmed)
5. Who must pay, how much, and what if they don't comply
6. Take-back: our hub intake
7. Test and grade
8. Certify: can we do it ourselves?
9. Route A: second life, who buys (ENGYcell, drivers needing a replacement, businesses, do it ourselves)
10. Route B: recycle mechanically (our own line, later)
11. Route C: send to Poland or Finland
12. Money: costs, revenue, profit
13. To check (who to ask)
14. Our pitch: what we sell (four income lines, the 3-minute story, honest caveats)

## Pilot money model (illustrative, per year, 100 packs)
Built by us from numbers elsewhere in the repo. **Not validated; replace with quotes.** Treats USD roughly as EUR.

Assumptions: pack 350 kg and 45 kWh nameplate (75% usable = 34 kWh); 30 packs sold to ENGYcell, 70 shipped whole to a recycler.

| Line | Low | Base | High | Basis |
|---|---|---|---|---|
| Take-back fee per pack | 0 | 70 | 140 | assumption: 0-400 EUR/t gate-fee range x 0.35 t (docs/RECYCLING_ROUTES_AND_COSTS.md) |
| ENGYcell price per usable kWh (USD) | 8 | 20 | 30 | 8 and 30 from a 2024 North American source (`data/`), 20 is our midpoint |
| Recycler charges (-) or pays (+) per recycled pack | -140 | -70 | +360 | NMC gate fee 0-400 EUR/t; +360 = 8 USD/kWh x 45 kWh |
| Freight per recycled pack | 600 | 475 | 350 | vendor estimate 350-600 EUR per pack in EU |
| Grading per pack (all 100) | 150 | 100 | 60 | assumption (module-level test benchmark is about 57 EUR/kWh) |

Result per year **before fixed costs and before the test service**:
- Low: 0 + 8,160 - 9,800 - 42,000 - 15,000 = **-58,640 EUR**
- Base: 7,000 + 20,400 - 4,900 - 33,250 - 10,000 = **-20,750 EUR**
- High: 14,000 + 30,600 + 25,200 - 24,500 - 6,000 = **+39,300 EUR**

Extra income: battery health test at 82 EUR net per test (99 EUR retail incl. 21% VAT, AVILOO price) x 100 / 300 / 600 tests = 8k / 25k / 49k EUR. Margin per test unknown.
Not included at all: people, storage, insurance, permits, equipment. At 100 packs a year these cannot be covered by pack economics alone.

**Reading:** shipping whole packs is the biggest cost. Profit needs producer fees, the test service, cheap packs and volume beyond 100, and later our own pre-processing (capex unknown).

## What the map says about the questions you asked
- **Who pays and how much:** the producer (carmaker or importer) must organise and finance take-back. The amount is not fixed by law; 2024 gate fees were about 0-140 EUR per NMC pack and about 1,050-1,400 EUR per LFP pack (350 kg), and they are moving.
- **If they don't comply:** the EU sets no fine scale. Member States must set effective, proportionate and dissuasive penalties (Art. 93); batteries can be restricted, withdrawn or recalled (Art. 83). Latvian fine amounts were **not found**.
- **Can we certify?** We can issue the "used, not waste" test record (Art. 73) and self-declare conformity as manufacturer of a repurposed battery (Module A), but independent certificates (UL 1974, IEC 63330-1, UL 9540) need an accredited lab.
- **Where to sell second-life packs:** ENGYcell and similar firms, drivers needing a replacement pack (with a test service and trade-in), businesses needing buffers or backup, or build units ourselves. European replacement-pack prices were not found.
- **Mechanical recycling outputs:** copper, aluminium, steel (scrap buyers), black mass (refiners such as Fortum, Umicore, BASF), residues (licensed waste handlers). Black-mass yield per pack is unknown.

Sources: see docs/RECYCLING_ROUTES_AND_COSTS.md, docs/FEEDSTOCK_AND_RULES.md, docs/PACK_SPECS_AND_RECYCLING.md, docs/SIZING_AND_COST.md, docs/IDEA.md and the teammate research in `data/` (regulation and certification: `data/second_life_tech_cost_rules.md`).
