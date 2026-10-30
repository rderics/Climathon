# Sizing and cost of one second-life container (illustrative, 2026-10-30)

**This is a first-pass estimate to frame the pitch, not a quote.** Inputs are sourced where marked; everything marked **(assumption)** is ours and must be replaced by supplier quotes/expert input. Currencies are mixed (USD and EUR) and treated as roughly equal here — fix this in the real model.

## 1. The building block: one retired car pack
- Car packs: Germany's 2023 sales-weighted average (incl. hybrids) was **42.3 kWh** [B: Adamas Intelligence]; the most common European size band by market value is **60–80 kWh** [C: Mordor]. No clean 2025 European average found.
- Worked example, **Nissan Leaf 40 kWh: pack weight ~303 kg** (user-reported ~320 kg), 37 kWh usable, ~400 V, pouch NMC [B: evkx.net / LCA table].
- Retired at **~70–80 %** of original capacity [A: EIT UM brief] => a 40 kWh pack gives **~28–32 kWh** (assume **30 kWh** per pack). Packs from larger cars (60–80 kWh) give ~45–60 kWh each.
- Energy per weight of a retired Leaf pack: ~30 kWh / 303 kg ≈ **0.1 kWh/kg** (our arithmetic).
- Power: in a car a pack can deliver a lot of power, but second-life systems typically run packs at **low current** to protect aged cells (B2U approach, `data/second_life_tech_cost_rules.md`). Assume **~0.5C** (2-hour system): **30 kWh pack ≈ 15 kW** **(assumption)**.

## 2. The container
- A new-cell **20 ft LFP BESS container**: 6,058 x 2,438 x 2,896 mm, about **5.0 MWh, ~42–45 tonnes** loaded [B: manufacturer datasheets, enfsolar.com / billion.com; modern 314 Ah cells]. Older/lower-density designs: 2.7–3.4 MWh, ~28.5 t.
- 40 ft high-cube is about 12.2 x 2.4 x 2.9 m, roughly double the volume; a blog quotes 2–3 MWh and 24–33 t [C].
- **Second-life packs are less dense than new LFP containers**: the packs are bulkier per kWh, aged (70–80 %) and run at low C. **Our estimate for one 20 ft container: ~1–2 MWh usable** **(assumption — needs a rack layout from an engineer)**.
  - 1 MWh ≈ 33 packs of 30 kWh; 2 MWh ≈ 67 packs. Weight of packs alone for 1–2 MWh ≈ 10–20 t at 0.1 kWh/kg; with racks, power electronics and cooling the loaded container is plausibly **25–40 t** **(assumption)**.
- **Power per 20 ft container: ~0.5–1 MW** at 2-hour duration (0.5C); one-hour duty (~1C) is harder on aged cells **(assumption)**.
- Compare: AST's Rēzekne battery is 60 MW / 120 MWh and Tume 20 MW / 40 MWh — dozens of containers. A depot/charger pilot would be 1–2 containers.

## 3. The ground (the concrete)
- A 20 ft BESS unit often has a dead load **> 30,000 kg**; bearing pressure on the subgrade is the first design calculation; reinforced shallow slabs are common if soil is stable, piles/piers if not [B: epcland.com, Heldenfels foundation guide]. A US guide gives a minimum slab of ~42 x 10 ft for a 2–3 MWh container [B].
- Our arithmetic: 40 t over a 6.06 x 2.44 m footprint (14.8 m²) ≈ 2.7 t/m² average (concentrated at corners).
- Cost: generic UK slab prices ~**£65–85/m²** plus mesh **£25–30/m²** [B: mybuilder.com]. A 25 m² pad (container plus margin) is therefore **~£2–3 k** at generic prices; a heavy-duty engineered pad (thicker, soil survey, possibly piles) costs more — **no sourced figure; get a local contractor quote**. Still **small compared with the system** (well under a few % of a six-figure container) **(assumption)**.
- Also needed: cable trenches, earthing, fencing, crane for placement (a ~40 t lift), spacing from buildings (fire-safety) — see docs/FEEDSTOCK_AND_RULES.md.

## 4. Connectors, power electronics and everything around the packs
No separate sourced price exists for "connectors". They sit inside these cost lines:
- **Cabinet controllers and string switching** (B2U-style: connect/disconnect series and parallel strings so weak packs do not limit strong ones), DC-DC converters, BMS gateways: counted under repurposing: **$25–73/kWh** at module level; **~0 + cabinets and controls** if whole packs are reused (teammate note, `data/second_life_tech_cost_rules.md`).
- **Inverter (PCS), EMS, enclosure/cooling/fire systems, installation**: Ember puts new large systems outside China/US at **~$75/kWh core equipment + ~$50/kWh installation = ~$125/kWh all-in**, excluding grid connection [B: Ember Dec 2025]; **grid connection fees $30–100/kWh** extra [B: Ember via teammate note].

## 5. Rough cost of 1 MWh usable (≈ 33 retired 30 kWh packs, one 20 ft container)
Per kWh of **usable** capacity; low = every input at the cheap end, high = expensive end:
| Item | Low | High | Source |
|---|---|---|---|
| Used packs purchased | $8 | $63 | [B/C] used-pack range (`data/`) |
| Repurposing, controllers, DC-DC, testing | $25 | $73 | [B] module-level range |
| PCS, EMS, enclosure, install (BOS) | $125 | $200 | low [B] Ember; high **(assumption: small-site loss of scale)** |
| **Subtotal** | **~$158/kWh** | **~$336/kWh** | |
| Grid connection (site-specific) | $30 | $100 | [B] Ember |
| Concrete pad, civils | small, quote needed | | see 3 |
=> **about $160–340k per MWh before grid connection; $190–440k with it.** For a 1 MW / 2 MWh unit double it.
Benchmarks to compare with (new storage): **BNEF Europe turnkey $177/kWh (2025)** [B]; **Enefit Latvia: 500 kWh installed ~€120,000 (= €240/kWh)**, claimed ~€35k/yr profit [B/C, 2024 data]; **AST: 80 MW/160 MWh for €77.07 M (≈ €482/kWh)** [B, security-grade project].
**Reading:** our cost range overlaps and mostly exceeds new storage. Only the cheapest case (nearly free packs, whole-pack reuse, big-scale BOS) undercuts it.

## 6. What could we sell it for
We should not set price by our cost; it is capped by the customer's alternative — new storage at **~$177–240/kWh installed** (large vs small site) — and by the revenue they can earn.
- **Customer value per year:** our computed Latvia 2025 day-ahead arbitrage upper bound **≈ €90k per MW (2 MWh) per year ≈ €45/kWh-year** (docs/ECONOMICS.md); Enefit's example ≈ €70/kWh-year profit (incl. reserve revenue, older data). Reserve revenue in Latvia has since fallen sharply (teammate research).
- **Break-even price for the customer:** a buyer expecting €45–70/kWh-year and wanting a 5–7 year payback would pay roughly **€225–490/kWh over 5–7 years of revenue**, but only if that revenue persists — it is falling, so assume the low end, around **€150–240/kWh installed-equivalent**, i.e. about the price of new storage.
- **Illustrative result:** sale/lease price at ~$150–240/kWh vs our cost $160–340/kWh => **margin only in the low-cost case; losses in the high-cost case.** This confirms docs/IDEA.md section 3: we cannot win on kWh price alone.
- **Ways to make it work:** (1) near-zero feedstock cost (fleet/OEM take-back, even paid disposal), (2) whole-pack reuse to cut repurposing, (3) customers who value the circular/liability service and pay a premium, (4) sites where new containers do not fit or grid limits make small units attractive (plus avoided grid upgrade), (5) service fees on top of kWh (grading, passport, monitoring, take-back).

## 7. To replace with real numbers
Supplier quote for a second-life container (Connected Energy, Moment, BeePlanet, Allye; EIT UM contacts); rack layout and weight from an engineer (Mihailovs); local pad and grid-connection quote (Sadales tīkls / contractor); real pack purchase price from a fleet or dismantler; current European average pack size from Adamas/JATO/Dataforce.
