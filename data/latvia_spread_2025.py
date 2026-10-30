"""Latvia day-ahead spread analysis, 2025. Source: Elering Nord Pool API (EUR/MWh).
Fetch first:  curl -s "https://dashboard.elering.ee/api/nps/price?start=2024-12-31T22:00:00.000Z&end=2025-12-31T21:59:59.999Z" -o nps2025.json
Perfect-foresight upper bound; hourly aggregation; DST ignored (UTC+2). Results are in docs/ECONOMICS.md."""
import json, statistics, collections, datetime as dt
d = json.load(open("nps2025.json"))["data"]
print({k: len(v) for k, v in d.items()})
lv = d["lv"]
# aggregate to hourly mean (handles 15-min data after Oct 2025)
hours = collections.defaultdict(list)
for r in lv:
    t = dt.datetime.fromtimestamp(r["timestamp"], dt.timezone.utc) + dt.timedelta(hours=2)  # approx Riga time (EET); DST ignored
    hours[(t.date(), t.hour)].append(r["price"])
days = collections.defaultdict(list)
for (day, h), v in hours.items():
    days[day].append((h, statistics.mean(v)))
days = {k: v for k, v in days.items() if k.year == 2025 and len(v) >= 23}
print("days", len(days))
allp = [p for v in days.values() for _, p in v]
print("mean price", round(statistics.mean(allp), 1), "negative hours", sum(1 for p in allp if p < 0))

def spread(v, n):
    ps = sorted(p for _, p in v)
    return statistics.mean(ps[-n:]) - statistics.mean(ps[:n])

for n in (1, 2, 4):
    s = [spread(v, n) for v in days.values()]
    print(f"{n}h spread: mean {statistics.mean(s):.1f} median {statistics.median(s):.1f} p10 {sorted(s)[len(s)//10]:.1f} p90 {sorted(s)[9*len(s)//10]:.1f} EUR/MWh")

# gross arbitrage revenue for 1 MW / 2 MWh battery, 1 cycle/day, 85% round trip, 2h
s2 = [spread(v, 2) for v in days.values()]
rev = 0
for v in days.values():
    ps = sorted(p for _, p in v)
    charge = statistics.mean(ps[:2]) * 2          # buy 2 MWh
    sell = statistics.mean(ps[-2:]) * 2 * 0.85    # sell 1.7 MWh
    rev += sell - charge
print("gross 2h arbitrage revenue 1MW/2MWh/yr EUR (85% RTE, 1 cycle/day, perfect foresight, before fees/degradation):", round(rev))
bymonth = collections.defaultdict(list)
for k, v in days.items():
    bymonth[k.month].append(spread(v, 2))
print({m: round(statistics.mean(x), 1) for m, x in sorted(bymonth.items())})
