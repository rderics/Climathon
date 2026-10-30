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

## Fit with the challenge (see docs/CHALLENGE.md, docs/RULES.md)
Our idea = the **"specific application: grid-scale / energy-company storage"** link. Evidence it is real: Waymo -> B2U grid storage, Rivian/VW/Redwood 10 MWh from >100 packs, Connected Energy 5 MWh grid-services BESS, Moment Energy 1 GWh factory.

## Known weak points — judges and experts will probe these
1. **Feedstock volume**: Latvia gets about 1,600 new EVs/yr, so few retired packs. Need an answer: Baltic/Nordic sourcing, buses/trolleybuses (Rigas satiksme), fleets, dismantlers.
2. **Economics vs new LFP**: new stationary storage keeps getting cheaper; we need a use case where second life is clearly cheaper/better (price paid per pack, grading cost, integration cost).
3. **Safety, liability, insurance**: insurers fear fire; a repurposed battery is a new product with its own passport (EU 2023/1542, from 18 Feb 2027).
4. **Heterogeneous packs** (voltages, BMS, cooling): "too many pack designs" — we must say how one block copes (pack-family grading, DC-DC per module, standard cabinet).
5. **Why would an electricity company pay us** instead of buying new batteries? (capex-free storage-as-a-service, ESG, CO2 avoided).

## Assumptions
- Retired EV packs leave the car at about 70-80 % capacity (EIT UM brief, cited).
- All other numbers: TBD, must be sourced in `data/` before use.
