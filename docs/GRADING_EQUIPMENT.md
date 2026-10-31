# Grading equipment: Topsound and alternatives (31 Oct 2026)

Multi-agent research (four angles, one skeptic, one synthesis; run wf_a6831742-bc3). Prices are listings or order-of-magnitude figures; **no quote exists for anything below unless stated**. Nothing has been sent to any vendor.

## Topsound (Wuxi Topsound Technology, en.top-sound.net)
**Price: not published, quote only.** No price, minimum order or shop on any page. Contact: xumingkang@top-sound.tech, hotline 0510-83695869 (mainland China number). No Alibaba/Made-in-China listing, tender notice or paper naming a purchase was found. Comparable ultrasonic cell scanners from other vendors are also "RFQ" (e.g. MTI Corp). General lab acoustic-microscope prices on a Chinese portal run CNY 100k-2M (undated, unverified); treat as order of magnitude only (five to six figures USD/EUR). Any single-number guess has no source.
**Do the products fit whole EV packs? No (our reading of Topsound's own specs).**
| Product | What it is | Fits a 30-100 kWh pack? |
|---|---|---|
| TOPS-RD60A / B / C / X | Lab ultrasonic imaging of single cells in a silicone-oil bath; scan areas 300x300, 300x600, 150x150 mm; up to 50-80 mm thick | No (cell-sized) |
| TOPS-PL-20B "Retired Battery Classification" | Inline scanner for pouch/prismatic cells with "cascade evaluation", ">50 PPM" (undefined); no grading scheme or thresholds given | Not stated; implies cell level on a production line |
| UBMS-ST-50 (power / household / large storage) | Ultrasonic battery management system: monitoring, SOC/SOH accuracy 3% claimed, method unexplained | Unclear; reads as a fitted monitor, not a one-off grading tool |
| TOPS-PL-20A, PL-20B (wetting), TOPS-SLU | Cell-manufacturing line monitors | No |
**Company:** founded June 2022, subsidiaries in Shenyang and Wuhan; claims 50+ customers and 80+ patents (no names). Independent 36Kr listing: seed 2022, angel 2022, Pre-A 2024, A round Sep 2025 (investors incl. Asahi Kasei China). Exhibited at The smarter E Europe; no European distributor, CE marking or EU service found. No independent evidence of its products working for retired-battery grading. In the literature, ultrasonic grading is single-cell lab work; no example of ultrasonic scanning of an intact module or sealed pack was found.

## Alternatives (listing prices, 31 Oct 2026)
| Item | Purpose | Price | Confidence |
|---|---|---|---|
| Insulation tester 1000 V class (Fluke 1535 / 1537) | HV isolation, safety gate | USD 1,560-2,496; rental about USD 50/day | medium-low |
| Thermal camera (FLIR E54 / E96) | hot spots, damage | USD 6,499 / USD 14,849 (E96 about EUR 11,999 excl. VAT, France) | medium-low |
| Battery impedance meter (Hioki BT4560) | module/cell grading after opening packs (cell/module only, not whole pack) | EUR 5,408 (-50, Hioki EU shop) to EUR 8,158 (-60) | medium |
| Pack cycler, 100 kW class, 200-1000 V (Keysight Scienlab, NH Research, EA, Neware PACK) | real capacity (SoH) test | **not found, quote only**; a branded 100 kW unit is probably high five to six figures EUR (our inference); a Chinese 400-800 V unit would be cheaper but must be quoted | very low |
| Explosion-proof / fire-safe test chamber | containment for unknown or damaged packs | Chinese FOB listings USD 60-90k walk-in; USD 4.5-20k others; benchtop about USD 2k (too small for a pack) | low |
| AVILOO battery test | SoH of packs still in cars (OBD-II) | EUR 79 (ADAC) / EUR 99 retail; B2B price not public | good for the consumer price |
| Whole-process repurposing cost benchmark | sanity check | EUR 27.2-38.3 per kWh (Finland modelled case; not testing alone) | medium |

## Rough budget for a grading station (our own sum, not a quote; confidence low)
- **Tier 1, triage: about EUR 10-20k.** Insulation tester, thermal camera, PPE/tools, fire-safe rack or cabinet (placeholder), BMS data reads, resting-voltage and self-discharge tracking. Cannot measure true capacity (SoH). Renting the tester cuts cost.
- **Tier 2, adds module-level impedance: about EUR 15-30k.** Needs opening packs and handling modules (labour, safety, training unpriced).
- **Tier 3, adds real capacity testing: probably EUR 100k+.** Cycler and fire-safe enclosure are quote-only; not affordable without a grant or customer-funded pilot.
- Excluded: Topsound equipment, room fit-out, permits, staff, software, insurance, transport.

## Recommendation
1. Do not budget for Topsound; nothing it publishes handles whole packs, and prices are unknown.
2. Start with the Tier 1 triage station and run the hub as take-back and triage; route packs using visible data and BMS history.
3. For true SoH, rent time at a test lab or partner, or fund a cycler through a pilot customer or grant; request quotes for a 400-800 V unit from Neware or similar to size future capex.
4. Optional, zero cost: one email to Topsound (draft below) to settle whether PL-20B or UBMS has any pack or module use. Low priority; do not let it delay the pitch (Sun 1 Nov, 12:30).

## Draft email (not sent; the team decides)
Subject: Enquiry: ultrasonic grading of retired EV battery packs (Riga, Latvia)
Dear Mr Xu / Topsound sales team, we are a start-up in Riga preparing a take-back and testing hub for retired EV battery packs (mainly NMC/NCA, some LFP; 30-100 kWh, 300-500 kg, 350-800 V). We found TOPS-PL-20B Retired Battery Classification, UBMS-ST-50 and the TOPS-RD60 scanners on en.top-sound.net. Please tell us: (1) can any product assess whole packs or modules, or only single cells, and what is the largest object and weight? (2) what does TOPS-PL-20B output (SOH metric, grades, thresholds) and what does ">50PPM" mean? (3) an indicative price range in EUR with Incoterm for delivery to Riga, and lead time? (4) do you have a European distributor or service partner, and CE marking? (5) is a paid trial on sample cells or modules possible? We are early-stage and would value a rough budget figure. Best regards, Rinalds Dērics.

## Sources
Topsound pages: https://en.top-sound.net/list_8/62.html · /list_11/70.html · /list_10/69.html · /aboutus/ · 36Kr: https://pitchhub.36kr.com/project/2016359583799561 · MTI RFQ example: https://mtixtl.com/products/desktop-ultrasonic-scanning-system-for-non-destructive-testing-of-pouch-cells-ubsc-dt10 · Hioki EU shop: https://shop.hioki.eu/HIOKI-BT4560-60-Battery-Impedance-Meter-0.01-Hz-to-10-kHz · Warwick EIS grading: https://www.bestmag.co.uk/test-quickens-identification-ev-packs-second-life-use/ · AVILOO/ADAC: https://www.adac.de/der-adac/regionalclubs/schleswig-holstein/sho-verkehr-technik/news-aviloo-batterie-test/ · Keysight pack tester: https://www.keysight.com/zz/en/product/SL1710A/sl1710a-scienlab-battery-test-system-pack-level-100-kw-compact-version.html · ultrasonic SoH paper: https://pmc.ncbi.nlm.nih.gov/articles/PMC11599900/ · repurposing cost study: https://research.abo.fi/files/59422029/batteries-10-00036.pdf
