# Idea: Second-life battery storage-as-a-service

## Concept
Used car batteries → tested & graded → pooled in one containerised block → leased as storage capacity to electricity companies (suppliers, traders, DSO/TSO).

## Value chain
1. **Sourcing** — scrapyards, dismantlers, dealers, EV fleets, OEM take-back.
2. **Testing & grading** — state of health (SoH), cell/module balance, safety screening.
3. **Pack integration** — modules into racks; BMS + inverter; cooling & fire safety; one block.
4. **Operation** — dispatch software; grid connection; monitoring.
5. **Service sale** — capacity/peak-shaving/arbitrage/balancing contracts to energy companies.
6. **End of life** — recycling of cells after second life (closes the loop).

## Why it fits the challenge
Extends battery life, avoids new-cell manufacturing, supports renewables integration.

## Open questions (validate at the carousel / with mentors)
- Which customer pays: supplier (arbitrage), DSO (Sadales tīkls — peak shaving, deferral), TSO (balancing/FCR)?
- Heterogeneous packs: how to mix different chemistries/SoH in one block safely and cost-effectively?
- Regulation/certification for second-life stationary storage in Latvia/EU; EU Battery Regulation (passport).
- Sourcing volume in Latvia — how many EV batteries retire per year, and when?
- Unit economics: €/kWh capacity vs. new LFP stationary; revenue per kWh-cycle; degradation.
- Fire/safety & insurance.

## Prototype candidates (pick one by Sat noon)
- **A. Techno-economic model** (`model/`): inputs = #batteries, SoH, price paid, electricity spreads → output = payback, LCOS, CO₂ avoided vs. new battery.
- **B. Dispatch simulator**: simulate the block charging on cheap/surplus hours, discharging at peak using Nord Pool price data (Latvia).
- **C. Intake/grading tool**: SoH-based grading + pack-assembly planner.

## Assumptions (all unverified — replace with sourced numbers in `data/`)
- Retired EV packs typically retain roughly 70–80 % capacity.  *(verify)*
