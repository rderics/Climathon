# Profit-protected model: a structure built so a priced, prepaid pack should not lose money (31 Oct 2026)

Built from the real-data check in `docs/CHECKED_ITEMS.md` (sources there). **Honest framing (confirmed by a three-lens adversarial review, section 6):** nobody can promise "no way to lose money", and this model does not. What we can do is a structure where **every pack is sold at a price that already covers its full cost plus a margin, and fixed costs are close to zero**, so losses can only come from a few named risks (below), not from the pack economics. The price of that safety is lower volume and possibly **zero customers**, because the fee we must charge is high.

## 1. What the real data changed
- **Getting rid of a pack costs money.** The only published 2026 recycler-style tariff (GRS Germany, reference ceiling, excl. VAT): undamaged NMC/NCA modules **€1.31/kg**, LFP/LMO modules **€3.68/kg**, plus a pallet slot (€214.50 first, €125 further). A 400 kg NMC pack costs about **€738** to hand over; LFP about **€1,686**. Damaged packs: NMC €1.44/kg, LFP €4.38/kg; transport-critical packs need a safety container (€825 or a €3,000 deposit): **do not take damaged packs**.
- **Producer scheme fees are far below that.** Latvia (LZP) €0.23/kg = about **€92 per pack**; Estonia €0.29/kg. That money goes to the scheme, not to collectors. Our income must be a negotiated service fee.
- **Own shredding line is not a safe start.** An HHL Leipzig model puts recycling at about **−€1.90/kg** at market prices, RWTH Aachen calls European EV recycling unprofitable with transport up to 70% of cost, and black mass has no 2026 European payable (LFP is a cost). A small line is a seven-figure-class risk with unknown yields. **Defer it** until quotes and volume justify it.
- **ENGYcell is not a verified buyer** (EUR 450k total funding, nothing says it buys packs). No European second-life buyer publishes a price per kWh. **Second life is bonus income only when a signed order exists.** Asking prices seen: modules about €35–60/kWh nameplate; a clean Leaf 40 kWh pack €5,000 ex-VAT (about €125/kWh). These are asking prices.
- **Health tests are a cheap but crowded cash stream:** three Riga providers at €60–130 per car; about €78 ex-VAT; variable cost roughly €10–15 of labour. Use it to meet customers, not as the profit engine.
- **Volume:** 13,916 EVs; used imports outnumber new about 2:1 (3,505 used BEVs in 2025); no retirement count exists. A Latvian-only hub cannot reach volume for years.
- **Running a hub with a fixed base costs about €10–15k a month** (rent about €5/m², loaded staff about €2,331/month each, insurance unknown). At a 20% margin that needs about **45 packs a month**, which Latvia cannot supply.

## 2. The structure that cannot lose on a pack
**Broker / service model, zero fixed costs, pass-through pricing.** We sell a take-back service to producers, importers, dealers and fleets. We do not own packs, do not buy packs, do not run a shredder, do not rent a hub. Each pack is a separate back-to-back deal.

### Stop-loss rules (every one must hold or we say no)
1. **No pack without a signed order stating the fee**, and the fee is at least the price table below.
2. **A binding written recycler quote first** (valid for the shipment date), then our fee is quoted on top. No quote, no deal.
3. **Prepayment or a deposit** before pickup (at least the recycler cost plus freight). No credit to customers.
4. **Intact packs only** (no swelling, leaks, crash damage, unknown history); damaged packs are refused or quoted separately with the recycler's own price.
5. **Pass through freight and ADR at actual cost**; our margin is on top, never inside the freight.
6. **No inventory:** pack moves from customer to recycler (or customer to second-life buyer) under contracts signed in advance; we never hold stock we have not been paid to hold.
7. **No capital spending before cash in ("no capex", not "zero fixed cost"):** no lease, no equipment, no staff on payroll. Use a partner's site or the recycler's own collection, subcontracted ADR carrier, contractors paid per pack.
8. **Second-life sales only against a purchase order with price per kWh**; model them as zero in the base case.
9. **Fix the exposure window:** quotes valid for the shipment, price clauses for gate-fee changes, insurance per shipment.

### Price table (our arithmetic; recycler cost from the GRS reference; freight, handling and insurance are our estimates)
Fee = (recycler cost + freight + handling + insurance) × 1.20. Pack 400 kg. Recycler cost falls slightly with batch size (1, 5 or 10 packs per consignment).

| Pack | Batch | Recycler cost / pack | Freight + handling + insurance (low / base / high) | **Fee needed (base)** | per kg | Range (low–high) |
|---|---|---|---|---|---|---|
| NMC/NCA | 1 | €738 | €380 / €600 / €930 | **€1,606** | €4.0 | €1,342–2,002 |
| NMC/NCA | 5 | €667 | same | **€1,520** | €3.8 | €1,256–1,916 |
| NMC/NCA | 10 | €658 | same | **€1,510** | €3.8 | €1,246–1,906 |
| LFP | 1 | €1,686 | same | **€2,744** | €6.9 | €2,480–3,140 |
| LFP | 5 | €1,615 | same | **€2,658** | €6.6 | €2,394–3,054 |
| LFP | 10 | €1,606 | same | **€2,647** | €6.6 | €2,383–3,043 |
Assumptions to replace with quotes: freight €250/400/600 per pack (vendor estimate €350–600 within the EU; a full truck Riga-Warsaw might be only €50–70 per pack, but our early volume will not fill one), handling and testing €100/150/250, insurance allowance €30/50/80, margin 20%. Contribution per base NMC pack is about €270, which covers a €3,000/month cost base only at about 11 packs a month, and €12,000/month at about 45.

### The catch
The fee we need (about **€1,500–1,600 per NMC pack, about 17 times the Latvian scheme fee of €92**) is about **twice the recycler's own price**. A producer or importer will only pay it if their current alternative is as expensive or if our convenience, local paperwork and speed are worth the gap. **We do not yet know what producers, dealers or importers pay today.** That is the make-or-break question: the model is loss-proof per pack but may have no buyers.

## 3. Add profit layers only when funded by earned cash
1. **Triage and health test** (€60–130 market price; our variable cost about €10–15): a way to meet dealers and importers and learn their real take-back costs.
2. **Second-life sales against purchase orders:** a clean tested pack sold for second life avoids the recycler's fee (about €738 for a 400 kg NMC pack; freight to the buyer still applies) and brings the sale price, so these are the highest-margin packs, but only with a signed buyer.
3. **Own mechanical line only after** (a) written black-mass payable quotes, (b) measured yields on trial batches, (c) volume above a few hundred packs a year, (d) a permit decision. Today the data say it likely loses money.
4. **Grants** (EIT Urban Mobility, Norway Grants via LIAA) fund pilots; never use them to hide losses on packs.

## 4. Risks that stay (cannot be priced to zero)
- **No customers:** producers, dealers and importers may already have an OEM/recycler channel at a lower price. Test this first.
- **Regulation:** a waste-management permit (state fee about €120–240; trader/intermediary registration €100) is likely required to collect or store packs; a shredding line is a category B pollution permit; storage above 50 t of hazardous waste or longer than a year needs a B permit; Latvian fire rules have no lithium-specific clause found and the main fire regulation lapses on 2 Jan 2027 with no successor found. Verify with VVD before any physical handling. If we repurpose, we become the battery's manufacturer and producer.
- **Used-vs-waste status:** a pack moves as "used" only with the full Annex XIV evidence; otherwise it is waste and needs waste-shipment procedures.
- **Fire and liability:** one incident can exceed any margin; insurance availability and price are unknown.
- **Price swings** between quote and shipment; recycler refusal or capacity; payment default (prepayment mitigates it).
- **Penalties are small** (about €70–4,000 per the legal check) next to the cost of an accident.

## 5. What to do next (in order)
1. Ask 3-5 producers/importers/dealers/fleets: what do you pay now to get an EV pack away, and would you pay €1,500? (script in `docs/QUESTIONS.md`.)
2. Get **binding recycler quotes** (GRS-type tariffs are only a ceiling): Fortum, Stena, Eneris, AE Elemental, GRS.
3. Ask VVD about the exact permit and whether a broker that never stores packs needs one; get an insurance quote for per-shipment cover.
4. Only then change the pitch from a hub to a service with a price.

## 6. Review findings (three skeptics: finance, legal, market; 31 Oct 2026)
**Verdict:** the per-pack arithmetic is correct (finance recomputed every row), but **"no pack can lose money" is not supported** and we must not say it. Honest wording: *"We accept a pack only against a signed order with customer prepayment covering the recycler's binding quote, the carrier's binding quote and our fee, so the base-case contribution per pack is about €270 on our assumptions. Open risks: whether anyone will pay, and unquantified regulatory and fixed costs."* Legal points were not checked against EUR-Lex and need a lawyer and a written VVD answer.

**Critical problems and the fix to adopt**
1. **No proven payer.** Under EU law the pack holder may already have a free take-back route, so the biggest risk is zero revenue. Fix: find out who the obligated producer is for four origins (new car, used import, insurer write-off, end-of-life vehicle) and who pays pickup today; test prices on real prospects.
2. **A broker may be a regulated actor** (permit, registration, possibly notifier with a financial guarantee; a 2020 slide mentioned EUR 10,000 security x 2.5 for hazardous waste transport, unverified). Fix: written VVD answer; make the recycler or the producer scheme the collector, carrier, consignor and notifier of record by contract; add the costs.
3. **Fixed fee quoted on assumed freight, weight and chemistry.** Fix: rule 2 now needs a **binding carrier quote as well**; quote **per kg plus pallet fee** with the recycler's weighbridge weight governing and a tolerance clause; check chemistry and VIN before ordering; surcharge clause.
4. **Reclassification, refusal and return have no price.** LFP declared as NMC (400 kg) costs 948 EUR more (3.5x the margin); a 540 kg NMC pack costs 922 instead of 738; damaged-but-safe adds 52 (NMC) or 280 (LFP); transport-critical packs add 700 to 3,000 with a safety container; a return leg costs another 250-930. Fix: hold back margin plus a contingency until the recycler's acceptance note, add a per-pack loss reserve (start with 5-10% of fees; not sourced), return-freight and storage charges in the contract, and get the recycler's commitment to accept.
5. **The fee is anchored to a ceiling tariff**: about 17x the Latvian scheme fee (EUR 92) and 2.2x the recycler price. Fix: test a visible service fee (for example EUR 150-400) on top of the recycler's own quote, instead of x1.20 on everything.

**Major fixes:** replace "zero fixed cost" with "no capex" and build an annual fixed-cost list (permit and security, liability and environmental insurance, ADR safety adviser, accountant, lawyer), then recompute break-even against a realistic first-year volume of tens of packs, not 11 a month; ADR consignor duties and the adviser fall on the broker unless the recycler or an ADR carrier is consignor; the insurance allowance of EUR 30/50/80 has no evidence (get one written quote); freight base of EUR 400-600 needs two written ADR quotes (model 1, 5 and 20 packs per trip); the intact-only rule excludes the orphan and damaged packs where a gap may exist (decide scope); a recycler or scheme can bypass us (ask about agent terms and exclusivity); state all fees excl. VAT and confirm treatment with an accountant; "never stores packs" does not remove holder status (keep the customer as holder until the recycler's vehicle takes custody); keep second life at zero and out of the pitch as profit.

**Other corrections:** the 20% multiplier is a markup on cost (about 16.7% of the fee) and must absorb all unpriced events; replace "penalties are small" with "administrative fines are small; failed-shipment cost is not quantified"; require 100% bank-transfer prepayment and keep customer funds separate; fleet and bus demand is unchecked.
