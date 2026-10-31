# Answers found so far (web research, 31 Oct 2026)

Answers to the question list in docs/QUESTIONS.md that could be found without calling anyone. Status: **answered**, **partly**, or **not found** (needs a person). Confidence: [B] secondary or official translation, [C] vendor or weak.

## The five questions that matter most

### 1. Who collects used EV traction batteries in Latvia, and who pays? — **not found**
- No Latvian collector of EV traction batteries found. Eco Baltia vide offers management of "environmentally hazardous products" and collects small batteries at Rimi stores [B]. Latvijas Zaļais punkts (LZP) is described as running the producer-responsibility system for packaging and electrical/electronic waste; batteries and EV packs are not mentioned in what I found [B].
- Compliance pages say a distributor that brings batteries into Latvia acts as the importer and carries the legal duty to meet collection and recycling requirements [C].
- Under Cabinet Regulation No. 485 (hazardous waste, Section IV, paras 14-33), battery producers must ensure the storage, treatment and recycling of collected batteries; the text does **not** say that take-back is free of charge or who pays [B, English translation dated 2014-15, later amendments exist — check the current Latvian text on likumi.lv].
- Still to ask: Latvijas Zaļais punkts, importers, dealers.

### 2. Would anyone pay for a battery health test or a trade-in? — **partly (not for Latvia)**
- Vendor data (Aviloo, 2024 European study): certified used EVs sold for about **EUR 550-1,100 more** depending on the country and up to **36% faster**; 81% of buyers said they trust a dealer more with an independent certificate [C: vendor].
- Survey (Startline, UK, 60 dealers and 300 consumers): 90% of dealers want an industry-wide battery health scheme; 88% of buyers say an independent certified assessment matters [B/C].
- Auction data (Manheim Australia): EVs with a health test sold 15% more often and drew 22% more bids [B].
- Test price: about EUR 99 retail incl. VAT (Aviloo certificate) [C].
- Counterpoint: other research (ADAC, Geotab) suggests battery-health fears are overstated; average degradation about 1.8% per year [B].
- Latvia: used-EV buyers can get a EUR 3,000 subsidy (new BEV: EUR 4,000) [B: EU Alternative Fuels Observatory]. **No Latvian demand data found.**

### 3. Does ENGYcell buy second-life packs? — **partly (cannot be confirmed without asking)**
- ENGYcell is a Riga energy-management start-up founded in 2024; EUR 450,000 funding in March 2025 (EUR 250,000 pre-seed from Change Ventures plus an EU grant). It builds battery energy storage and management systems for commercial, industrial and utility use; software is its main focus; founders previously built the Tesla car-sharing business OX Drive [B: BeBeez, PitchBook].
- **Nothing found that confirms it buys used EV packs, or names its installations.** (An earlier repo note says its prototype used repurposed Tesla batteries.) Spec, volume, price and warranty: only ENGYcell can say.

### 4. What does recycling cost or pay per pack from Latvia? — **not found (needs quotes)**
- No recycler publishes prices. The ranges in docs/RECYCLING_ROUTES_AND_COSTS.md stand (NMC gate fees EUR 0-400 per tonne in 2024; LFP EUR 3,000-4,000 per tonne; 2026 gate fees fading outside China).
- The email draft in docs/QUESTIONS.md is ready; nothing has been sent.

### 5. Permits and fire rules for storing, discharging and shipping used packs in Latvia — **partly**
Source: Cabinet Regulation No. 485 of 21 June 2011 (procedure for certain types of hazardous waste), English translation [B]:
- Batteries must be collected separately and never disposed of with household waste (para 14).
- Storage sites, including temporary ones, need a water- and pollutant-proof surface or a suitable container and a weatherproof cover; where oil may leak, surface-water collection and oil traps (para 19).
- Treatment facilities (sorting, preparation for processing and disposal) need scales, an impermeable surface with water collection, weatherproof cover, space for disassembled parts and wastewater treatment; all fluids including acids must be separated (paras 18, 20-21).
- The regional environmental board of the State Environmental Service must inspect treatment facilities at least once a year (para 22).
- Producers report sales, collection and recycling figures to the battery register by 20 April each year (para 31); treatment abroad is allowed under the EU waste-shipment regulation 1013/2006 (para 29).
- Waste traders and waste-management intermediaries must register with the State Environmental Service before starting; battery producers register in the battery producer register within one month of starting [B].
- Cabinet Regulation No. 302 of 2011 sets how waste is classified and what makes it hazardous [B].
- **Not found:** which exact waste-management permit a collection or storage hub needs, any lithium-specific fire rule (the general building fire norm is LBN 201-10; whether it covers stationary or stored lithium packs is unconfirmed), and ADR specifics beyond what docs/FEEDSTOCK_AND_RULES.md says. Ask the State Environmental Service and the fire service (VUGD).

## Other questions

| Question | Answer | Status |
|---|---|---|
| What happens if a producer does not comply (Latvia)? | EU: no fine scale; Member States set "effective, proportionate, dissuasive" penalties (Art. 93, due 18 Aug 2025); batteries can be restricted, withdrawn or recalled (Art. 83). Latvian fine amounts: **not found** (the Administrative Liability Law and the Waste Management Law on likumi.lv are the places to read). Cabinet Reg. 485 itself states no penalties. | not found |
| How much must producers pay? | Not set by law; contract or market price. See docs/RECYCLING_ROUTES_AND_COSTS.md. | answered (as "not fixed") |
| What are Latvia's used-EV imports per year? | Not found. 13,916 registered electric cars at end-2025; 1,602 new BEVs registered in 2025 (7.1% of new cars). The repo note that about half of the stock arrived used comes from teammate research. A third of used cars imported in 2022 came from Germany (not EV-specific). | not found |
| Which make/model/chemistry does Latvia have? | Not found; popular used EVs per one article: Tesla Model 3 and Y, Audi e-tron, Hyundai Kona [C]. | not found |
| What do dealers and importers do with swapped packs? | Nothing published found. Needs phone calls. | not found |
| Penalties and registration name in Latvia? | The battery producer register is run under the Environmental Service; vendors call the register "Elektroregistrs" (LETERA). Spelling and procedure to verify. | partly |

## What this changes
- The health-test idea has real demand evidence elsewhere (vendor-heavy), but none yet for Latvia. Test it with 3-5 Latvian dealers or importers.
- The legal picture for a Latvian hub is clearer: storage and treatment have concrete site requirements (sealed surfaces, containment, water and wastewater handling) and yearly inspections. Budget for them in the hub design and capex.
- Still no answer on who pays the producer's share in Latvia. That remains the single most important call to make.

## Sources
- Cabinet Regulation 485 (English translation): https://likumi.lv/ta/en/en/id/232554
- Waste Management Law and battery rules (Latvian): https://likumi.lv/ta/id/246591
- Eco Baltia: https://www.ecobaltiavide.lv/en/pakalpojumi/management-of-various-types-of-batteries/
- ENGYcell: https://bebeez.eu/2025/03/19/baltic-startup-engycell-lands-funding-to-optimize-commercial-energy-storage-and-trading/ · https://pitchbook.com/profiles/company/719844-76
- Health-test demand: https://evfleetworld.co.uk/dealers-call-for-battery-health-check-scheme-for-used-car-sector/ · https://www.am-online.com/news/wide-battery-health-gaps-show-why-dealers-must-test-used-evs · https://transportandenergy.com/2025/02/19/battery-health-tests-fundamental-to-used-ev-market/ · https://www.hl.co.uk/news/reuters-the-battery-test-race-to-work-out-what-used-evs-are-really-worth
- Latvian EV market: https://alternative-fuels-observatory.ec.europa.eu/node/1498 · https://data.stat.gov.lv/sq/24973
- EU penalties: https://www.arianee.com/en/blog/battery-passport-penalties-non-compliance
