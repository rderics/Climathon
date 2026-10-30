# Feedstock, safety and regulation research (2026-10-30)

Confidence: **[A]** primary · **[B]** secondary, plausible · **[C]** weak. **Not legal advice** — each item below needs a check with the named authority before we claim it in the pitch.

## 1. Latvian feedstock: how many EVs, which ones
- New battery-electric passenger cars registered in Latvia 2025: **1,602** (~7.1 % of new registrations, +27 % vs 2024) [A: EU Alternative Fuels Observatory, https://alternative-fuels-observatory.ec.europa.eu/node/1498].
- **Registered electric passenger cars, end 2025: 13,916** (9,234 a year earlier) [A: Latvian CSB table https://data.stat.gov.lv/sq/24973]. (EIT UM brief uses ~1.8 % of fleet and ~5,600 subsidised vehicles — different measures; do not mix.)
- Popular used EVs in Latvia per one article: Tesla Model 3, Audi e-tron, Hyundai Kona, Tesla Model Y [C: archyde.com, no CSDD backing]. So the Latvian pool is dominated by **NMC/NCA nickel chemistry** (Tesla 3/Y are NCA/NMC or LFP depending on version; Kona NMC; e-tron NMC) — consistent with IEA (EU LFP ≈ 10 %). Early Nissan Leaf (LMO) share unknown.
- **Gap:** no CSDD/CSB ranking by make/model/year found. Get it from CSB (data.stat.gov.lv, registrations by make) or ask CSDD; ask dismantlers what packs they actually see.
- Arithmetic (ours, for scale, *not* a forecast): 13,916 EVs x an assumed ~60 kWh average pack ≈ **~0.8 GWh** of capacity in the whole Latvian fleet today, almost all still in cars until the mid-2030s (IEA). Retirements per year are a small fraction of that. => the Latvian EV-car pool alone supports only **pilot-scale (low MWh)** storage for years. Average pack size is our assumption: replace with fleet data.
- Better-volume feedstock to investigate: Riga trolleybus/e-bus batteries (Rīgas satiksme plans up to 100 trolleybuses and 24 trams [A: EIT UM brief]), taxi/delivery fleets, dismantlers and write-offs/crashed EVs (insurers), imports of used packs from Nordics/Germany, OEM take-back/hybrid packs.

## 2. Battery Regulation (EU) 2023/1542 — what applies to us as a repurposer
(Secondary sources; read the text on EUR-Lex: https://eur-lex.europa.eu/eli/reg/2023/1542/oj)
- A battery that is **repurposed is treated as a new battery** placed on the market: it needs conformity, labelling, and a **new battery passport linked to the original's passport** (Art. 77(7)); passport mandatory **from 18 Feb 2027** for EV, light-means-of-transport and industrial batteries > 2 kWh [B + A: EIT UM brief].
- Art. 46 covers economic operators placing on the market batteries that underwent repurposing/remanufacturing; Art. 56 puts such operators under **extended producer responsibility** like producers/importers [B].
- An implementing act on who is responsible for the passport of repurposed batteries was due by 18 Aug 2026; one commentary says it had **not** been adopted — check current status [B, possibly outdated].
- Chapter VIII: conditions under which batteries are **not waste** [B].
- Practical effect: we need (a) the original battery's data (often locked by manufacturers — the EIT UM sheet lists "locked manufacturer data"), (b) a testing/certification route, (c) EPR registration, (d) passport infrastructure. This is both a cost and an entry barrier — and a potential differentiator if we solve the data/grading side.
- Source on governance gaps: TalTech/FinEst study (CONECT 2026, RTU) — barriers are governance, not technology [A: https://ect-journals.rtu.lv/conect/article/view/CONECT.2026.025].

## 3. Safety and fire
- Thermal runaway is possible in both LFP and NMC; LFP has a higher onset temperature but is not immune; higher energy density = lower thermal stability [B: CEA-Liten/PowerUp]. Pack-level severity depends on state of charge and design [B].
- Insurers' fear of fire deters second-life projects [A: TalTech via EIT UM sheet].
- **Latvia:** no BESS-specific fire rule found. General building fire norm **LBN 201-10 "Būvju ugunsdrošība"** and Cabinet Regulation **No. 238 "Ugunsdrošības noteikumi"** (in force since 1 Sep 2016) exist, but whether they address stationary Li-ion storage is **unconfirmed** [B/C]. State Fire and Rescue Service (VUGD) reported **39 fires linked to batteries/accumulators in 2025** (all types) [B: lvportals.lv].
- Industry guidance: EASE "Guidelines on Safety Best Practices for BESS" (EU, utility-scale outdoor Li-ion) [B]; UK/US fire-service BESS guidance exists as templates (container spacing, detection, suppression, deflagration venting).
- **To do:** ask VUGD and a Latvian insurer what they require for a stationary Li-ion system; ask Aleksandrs Mihailovs (MAA intelengineering, heavy industry) and Līga Pūķe (Jauda) at the carousel/sessions.

## 4. Transport and handling of used packs
- Used/defective lithium batteries are dangerous goods under ADR. For recycling/disposal, cells/modules/batteries move under **packing instruction P909**; defective, safety-relevant batteries installed in a vehicle that cannot be safely removed move **installed** under **special provision 667 (b)(i), UN 3171**; damaged/defective batteries are covered via **special provisions 310/376** [B: German BAM-derived pages; verify against the ADR edition in force].
- Implication: the *logistics and screening of damaged packs* (crash vehicles) is a real cost and a licence issue — pick feedstock that arrives undamaged (fleet take-back, planned replacement) to avoid it.
- Dismantling EVs safely and at speed is itself an open challenge in the EIT UM sheet (Autocirc, Fraunhofer RoB@t2Cell) [A].

## 5. What this means for the idea
1. Feedstock in Latvia is small and mostly NMC/NCA — design the business around **fleets and buses + cross-border sourcing**, start **pilot-scale** (hundreds of kWh to a few MWh), and say that openly.
2. Repurposed = new product legally => **we must handle passport, testing, EPR and liability**; this is where a service business (grading + certification + monitoring) could be more defensible than only selling kWh.
3. Safety/insurance approach needs to be a slide, not a footnote (design: separated strings, outdoor container, spacing, gas/thermal detection, remote monitoring).
4. Verify with experts: **Mihailovs / Jauda / VINCI Energies (safety, permitting); Puzule (LCA, passport data); Jeļinsks (DSO need).**
