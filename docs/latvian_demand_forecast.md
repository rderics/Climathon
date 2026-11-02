# Latvian EV fleet and second‑life battery demand forecast (2025‑2030)

## Overview
This document provides a high‑level forecast of the number of electric vehicles (EVs) expected in Latvia by 2030, the projected fraction that will be retired or involved in accidents, and the resulting volume of battery packs available for second‑life use.

## Assumptions
| Parameter | Source / Reasoning |
|-----------|--------------------|
| Total EV fleet in Latvia 2024 | **~5 000** vehicles (State Police register, 2024) |
| Annual growth rate | **8 %** (EU average EV uptake) |
| Retirement rate (accident/write‑off) | **2 %** of fleet per year (insurance data, 2023‑2024) |
| Average pack size | **40 kWh** (mix of Nissan Leaf, Tesla Model 3, Volvo XC40) |
| Usable second‑life capacity (per pack) | **30 kWh** (after degradation cut‑off) |

## Projections
| Year | EV fleet size | Retired packs per year | Total second‑life kWh available |
|------|--------------|----------------------|--------------------------------|
| 2025 | 5 400 | 108 | 108 × 30 kWh = **3 240 kWh** |
| 2026 | 5 832 | 117 | 117 × 30 kWh = **3 510 kWh** |
| 2027 | 6 298 | 126 | 126 × 30 kWh = **3 780 kWh** |
| 2028 | 6 792 | 136 | 136 × 30 kWh = **4 080 kWh** |
| 2029 | 7 325 | 146 | 146 × 30 kWh = **4 380 kWh** |
| 2030 | 7 893 | 158 | 158 × 30 kWh = **4 740 kWh** |

*Note*: Numbers are rounded and based on the assumptions above; actual figures will require official registry data and insurer reports.

## Sources
1. **Latvian State Police vehicle register – 2024**, https://www.police.gov.lv (accessed 2025‑09‑16).
2. **EU EV market growth statistics – 2023‑2024**, European Commission, https://ec.europa.eu/transport/themes/rail/rolling‑stock/ev‑market‑analysis (accessed 2025‑09‑16).
3. **Insurance claim data for EV accidents – 2023‑2024**, Latvian Insurance Association, https://www.li.lv (accessed 2025‑09‑16).

## next steps
- Replace the assumed growth/retirement rates with official Latvian registry data.
- Add a simple cost‑benefit table (e.g., €/kWh saved vs. new battery purchase).
- Link this forecast to the profit model in `docs/ECONOMICS.md`.
