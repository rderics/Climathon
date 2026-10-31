// Battery Monster: step-by-step explainer. Plain DOM, no libraries (the site CSP only allows scripts from the same origin).
var TAGS = { s: ["Sourced", "#3ddc97"], a: ["Estimate", "#ffbe0b"], c: ["To check", "#ff6b6b"] };
var PH = [
  { name: "Life of the battery", color: "#4ea8ff", n: 3 },
  { name: "The problem", color: "#ff8f8f", n: 2 },
  { name: "What we do", color: "#3ddc97", n: 3 },
  { name: "Where batteries go", color: "#ffbe0b", n: 3 },
  { name: "Money and next", color: "#b79cff", n: 2 }
];

function tg(k) { return k ? '<span class="tg" style="background:' + TAGS[k][1] + '">' + TAGS[k][0] + "</span>" : ""; }
function node(e, t, s, c) { return '<div class="node" style="--c:' + (c || "#4ea8ff") + '"><div class="e">' + e + '</div><div class="t">' + t + "</div>" + (s ? '<div class="s">' + s + "</div>" : "") + "</div>"; }
function arr() { return '<span class="arr">➜</span>'; }
function flow(items, c) {
  var out = [];
  items.forEach(function (it, i) { if (i) out.push(arr()); out.push(node(it[0], it[1], it[2], c)); });
  return '<div class="flow">' + out.join("") + "</div>";
}
function tile(e, t, s, c) { return '<div class="tile" style="--c:' + (c || "#4ea8ff") + '"><div class="e">' + e + '</div><div class="t">' + t + '</div><div class="s">' + s + "</div></div>"; }
function chips(list, c) { return '<div class="chips">' + list.map(function (x) { return '<span class="chip" style="--c:' + (c || "#ffbe0b") + '">' + x + "</span>"; }).join("") + "</div>"; }
function gauge(pct, l1, l2) { return '<div class="gauge"><i style="width:' + pct + '%"></i></div><div class="gl"><span>' + l1 + "</span><span>" + l2 + "</span></div>"; }

var STEPS = [
  { icon: "⛏️", short: "Made", title: "Where batteries come from", line: "A battery starts as metals like lithium and nickel. They become cells, the cells become a pack, and the carmaker fits the pack into the car.",
    viz: function () { return flow([["⛏️", "Metals", "lithium, nickel, cobalt"], ["🔋", "Cells", "LG, CATL, Panasonic..."], ["📦", "Pack", "cells + computer + cooling"], ["🚗", "Car", "built by the carmaker"]], "#4ea8ff") + chips(["The carmaker is the legal 'producer' of the battery"], "#4ea8ff"); },
    stats: [["40–80 kWh", "typical car pack", "s"], ["300–480 kg", "weight of a pack", "s"], ["~10%", "LFP share in the EU (2025); the rest is nickel-based", "s"]],
    pts: [["🏭", "Because the carmaker is the 'producer', the law makes it responsible for the battery at the end of its life.", "s"], ["🔋", "Most European cars use nickel-based batteries (NMC/NCA). Cheaper LFP batteries are still rare here.", "s"]] },
  { icon: "🚗", short: "In the car", title: "First life: driving", line: "The battery powers the car for years. Latvia has few electric cars so far, and many arrived second-hand from abroad.",
    viz: function () { return '<div class="stack"><div style="font-size:70px">🚗🔋</div>' + gauge(100, "Battery full health", "100%") + "</div>"; },
    stats: [["13,916", "electric cars in Latvia, end of 2025", "s"], ["1,602", "new electric cars registered in 2025", "s"], ["about half", "of the stock came as used imports", "a"]],
    pts: [["⏳", "Most batteries stay in cars until the mid-2030s, so only a few come out now.", "s"], ["🌍", "Latvia has to bring many packs in from other countries to have enough volume.", "a"]] },
  { icon: "📉", short: "Wears out", title: "The battery gets weaker and is swapped", line: "After years the battery holds less energy. At about 70–80% left it is swapped. It is not dead, just too weak for a car.",
    viz: function () { return '<div class="stack" style="width:100%">' + gauge(100, "New", "100%") + '<div style="font-size:26px">⬇️</div>' + gauge(75, "When swapped", "about 70–80% left") + "</div>" + flow([["🔧", "Dealer or garage", "swaps the pack"], ["📦", "Old pack", "comes out"], ["🆕", "New pack", "goes in"]], "#4ea8ff"); },
    stats: [["70–80%", "capacity left when a pack leaves the car", "s"], ["60–67%", "measured on real first-generation Nissan Leaf packs", "s"]],
    pts: [["🔧", "Who swaps it: a dealer, a garage, or an insurer after a crash.", "a"], ["❓", "What a replacement pack costs in Europe: not found yet.", "c"]] },
  { icon: "📦", short: "Stuck", title: "Old packs sit in storage", line: "The swapped pack often just sits. There is nobody to hand it to, shipping is expensive, and the rules are unclear.",
    viz: function () { return '<div class="grid2">' + tile("🚚", "Shipping is costly", "about €350–600 per pack; damaged packs far more", "#ff8f8f") + tile("🕳️", "No collector", "no Latvian collector for EV packs found", "#ff8f8f") + tile("📄", "Used or waste?", "must be proven with a test record and a contract", "#ff8f8f") + tile("🔥", "Storage rules", "permit and fire rules for lithium not confirmed", "#ff8f8f") + "</div>"; },
    stats: [["€350–600", "freight per pack inside the EU", "a"]],
    pts: [["📄", "A pack counts as 'used' only with a health test, a sale contract and safe packaging. Otherwise it is waste.", "s"], ["🔥", "Latvian law asks for a sealed, weatherproof storage surface or container.", "s"], ["📞", "What dealers and importers really do with swapped packs: we must ask them.", "c"]] },
  { icon: "💶", short: "Who pays", title: "Who has to pay, and what if they don't?", line: "By EU law the carmaker or importer must take old batteries back and pay for it. The price is not fixed by law. It is agreed between companies.",
    viz: function () { return flow([["🏭", "Carmaker or importer", "must organise and pay"], ["💶", "Take-back fee", "agreed price"], ["🏢", "Us", "collect and handle it"]], "#ff8f8f") + chips(["Nickel-based (NMC) pack: about €0–140 per pack", "LFP pack: about €1,050–1,400 per pack (2024, moving)"], "#ffbe0b"); },
    stats: [["€0–140", "per NMC pack (2024 gate fees)", "s"], ["€1,050–1,400", "per LFP pack (2024)", "s"]],
    pts: [["⚖️", "If a producer doesn't comply, each country sets the penalty. Batteries can also be recalled or banned from sale.", "s"], ["❓", "Latvian fine amounts: not found yet.", "c"], ["🔄", "If we repurpose a battery, we become its 'producer' ourselves.", "s"], ["🤝", "Our pitch to producers: we do your take-back duty for you.", "a"]] },
  { icon: "🏭", short: "Our hub", title: "Our take-back hub", line: "We collect used packs from many places into one safe site in Latvia and check them in.",
    viz: function () { return '<div class="flow">' + ["🚌|Fleets and buses", "🔧|Dealers and garages", "🚨|Insurers", "🧰|Dismantlers", "🌍|Imports"].map(function (x) { var p = x.split("|"); return node(p[0], p[1], "", "#3ddc97"); }).join("") + "</div><div style='text-align:center;font-size:28px;margin:6px 0'>⬇️</div>" + '<div class="flow">' + node("🏭", "Our hub", "intake · safe storage · paperwork", "#3ddc97") + "</div>"; },
    stats: [["4,570", "batteries taken out of scrapped cars in Norway in 2024: a big nearby source", "s"]],
    pts: [["🧠", "We read the battery's history from its own computer (BMS). The law gives us access.", "s"], ["🚫", "At the start we do not take damaged packs. They are very costly and risky.", "a"], ["🧯", "Safe storage means a fire-safe room, a sealed floor and a low charge.", "a"], ["❓", "Which exact waste permit we need: to check.", "c"]] },
  { icon: "🔬", short: "Test", title: "We test every pack", line: "Each pack gets a check-up. The result decides: live again, take apart, or recycle.",
    viz: function () { return flow([["📖", "Read data", ""], ["👀", "Look for damage", ""], ["⚡", "Insulation", ""], ["🔋", "Self-discharge", ""], ["📏", "Capacity", ""], ["⚖️", "Balance", ""]], "#3ddc97") + '<div class="chips" style="margin-top:14px"><span class="chip" style="--c:#3ddc97">A · reuse</span><span class="chip" style="--c:#ffbe0b">B · take apart</span><span class="chip" style="--c:#b79cff">C · recycle</span></div>'; },
    stats: [["minutes", "a quick health test", "s"], ["hours", "a full capacity test", "s"], ["~€99", "price of a consumer health test", "s"]],
    pts: [["🎯", "A single health number is not enough. A 90% pack can still fail on leaks, imbalance or hidden damage.", "s"], ["💶", "At module level, a test costs about €57 per kWh in one study.", "s"], ["🧰", "Our equipment list and the cost per pack: to work out.", "c"]] },
  { icon: "✅", short: "Certify", title: "Approvals: what we can do ourselves", line: "There are three kinds of approval. We can do some ourselves; for others we need an outside lab.",
    viz: function () { return '<div class="grid3">' + tile("📝", "Used, not waste", "A test record, a sale contract and safe packaging. <b>We can issue this.</b>", "#3ddc97") + tile("📋", "New product", "A repurposed battery is a new product and we are its maker: self-declared conformity, safety tests, new label, new battery passport from Feb 2027.", "#ffbe0b") + tile("🏅", "Lab certificates", "Standards like UL 1974 and IEC 63330. <b>Needs an accredited lab.</b>", "#b79cff") + "</div>"; },
    stats: [["18 Feb 2027", "battery passport becomes mandatory", "s"]],
    pts: [["🛡️", "Insurers prefer LFP, outdoor sites and monitoring. Nickel-based second life is harder to insure.", "a"], ["⏳", "Some EU rules are still being finished (end-of-waste, passport access).", "s"]] },
  { icon: "⚡", short: "Reuse", title: "Route A: a second life. Who buys?", line: "The good packs live again, mostly as stationary storage or as replacement packs.",
    viz: function () { return '<div class="grid2">' + tile("⚡", "ENGYcell", "Riga storage start-up. To confirm: do they buy used packs?", "#ffbe0b") + tile("🚗", "Drivers", "A tested used pack as a replacement, plus a trade-in of the old one.", "#ffbe0b") + tile("🏭", "Businesses", "EV charger and bus-depot buffers, backup for clinics and schools, farms with solar.", "#ffbe0b") + tile("🔍", "Health test service", "For dealers and importers who sell used electric cars.", "#ffbe0b") + "</div>"; },
    stats: [["€550–1,100", "extra price for a certified used EV (vendor data)", "s"], ["36%", "faster sale with a health certificate (vendor data)", "s"], ["~$8 vs ~$30", "per kWh: what recyclers vs second-life firms pay (2024)", "a"]],
    pts: [["📊", "90% of 60 UK dealers want a standard battery test.", "s"], ["🇱🇻", "Latvia gives a €3,000 subsidy for used electric cars. Local demand for a test is not yet tested.", "c"], ["❓", "ENGYcell's spec, volume and price: only they can say.", "c"]] },
  { icon: "♻️", short: "Recycle", title: "Route B: recycle in our own line (later)", line: "Packs that can't be reused are taken apart and shredded. We sell what comes out.",
    viz: function () { return flow([["📦", "Pack", ""], ["🔧", "Modules", "take apart"], ["⚙️", "Shred", "safe, controlled"]], "#ffbe0b") + '<div style="text-align:center;font-size:26px;margin:6px 0">⬇️</div>' + '<div class="grid2"><div class="tile" style="--c:#d68250"><div class="t">🟠 Copper</div><div class="s">to scrap buyers</div></div><div class="tile" style="--c:#c0cad4"><div class="t">⚪ Aluminium</div><div class="s">to scrap buyers</div></div><div class="tile" style="--c:#788796"><div class="t">⬜ Steel</div><div class="s">to scrap buyers</div></div><div class="tile" style="--c:#fff"><div class="t">⚫ Black mass</div><div class="s">to a refiner: nickel, cobalt, lithium powder</div></div></div>'; },
    stats: [["60–72%", "of nickel and cobalt value paid for black mass (2024)", "s"], ["3–5%", "paid for the lithium (2024)", "s"]],
    pts: [["🚫", "We do not refine. Refining is a huge chemical plant (tens or hundreds of millions of euros).", "s"], ["❓", "How much black mass one pack gives, what the line costs, and the permits: not known yet.", "c"]] },
  { icon: "🚚", short: "Send", title: "Route C: send to Poland or Finland", line: "What we can't process ourselves goes to big recyclers abroad.",
    viz: function () { return flow([["🏭", "Our hub", "Latvia"], ["🇫🇮", "Fortum", "Finland"]], "#ffbe0b") + '<div style="height:10px"></div>' + flow([["🏭", "Our hub", "Latvia"], ["🇵🇱", "AE Elemental, Eneris", "Poland"]], "#ffbe0b"); },
    stats: [["€350–600", "freight per pack", "a"], ["≈ break-even", "for nickel-based packs", "a"], ["we pay", "for LFP packs (about €1,250–1,800 per pack)", "a"]],
    pts: [["📜", "Dangerous-goods transport rules apply, and cross-border waste needs consent.", "s"], ["💬", "Nobody publishes prices. We need written quotes.", "c"]] },
  { icon: "📊", short: "Money", title: "A first rough pilot: 100 packs a year", line: "Before staff and rent, a small pilot loses money in the base case. Shipping whole packs abroad is the biggest cost.",
    viz: function () { function bar(l, v, col) { var w = Math.abs(v) / 60 * 50; var s = v < 0 ? "right:50%;width:" + w + "%" : "left:50%;width:" + w + "%"; return '<div class="bar"><span>' + l + '</span><div class="track"><div class="fill" style="' + s + ";background:" + col + '"></div></div><b>' + (v > 0 ? "+" : "") + v + "k €</b></div>"; } return '<div class="bars">' + bar("Low case", -58.6, "#ff6b6b") + bar("Base case", -20.8, "#ffbe0b") + bar("High case", 39.3, "#3ddc97") + '</div><div class="gl" style="margin-top:8px"><span>Result per year, before staff, rent, insurance and equipment</span></div>'; },
    stats: [["+€8k–49k", "extra per year from a health-test service (100–600 tests)", "a"], ["not counted", "staff, storage, insurance, permits, equipment", "c"]],
    pts: [["🧮", "Assumes 30 packs sold to ENGYcell and 70 shipped whole to a recycler.", "a"], ["💡", "What helps: fees from producers, a paid test service, cheap packs, more volume, and later our own processing.", "a"], ["📝", "All numbers are rough estimates built from our research. We will replace them with quotes.", "a"]] },
  { icon: "🔎", short: "Next", title: "What we know, and what is still open", line: "We found part of the answers on the web. The rest needs phone calls and quotes.",
    viz: function () { return '<div class="grid2"><div class="tile" style="--c:#3ddc97"><div class="t">✅ Found</div><div class="s">Latvian law asks for sealed storage and yearly inspection. Health tests sell used EVs for more (vendor data). ENGYcell is a Riga start-up with €450k funding.</div></div><div class="tile" style="--c:#ff6b6b"><div class="t">❓ Still open</div><div class="s">Latvian penalty amounts. Recycler quotes. Waste permit and fire rules. Whether ENGYcell buys packs. What dealers do with old packs. Demand for a health test in Latvia.</div></div></div>'; },
    stats: [],
    pts: [["📞", "Next: call dealers, importers and ENGYcell, and ask three recyclers for written quotes.", "a"]] }
];

var cur = -1;
var phasesEl = document.getElementById("phases"), stripEl = document.getElementById("strip"), panelEl = document.getElementById("panel"), pinEl = document.getElementById("pin"), hintEl = document.getElementById("hint");

function build() {
  var idx = 0, html = "";
  PH.forEach(function (p) {
    for (var k = 0; k < p.n; k++) { STEPS[idx + k].color = p.color; STEPS[idx + k].phase = p.name; }
    html += '<div class="phase" style="flex:' + p.n + ";background:" + p.color + '">' + p.name + "</div>";
    idx += p.n;
  });
  phasesEl.innerHTML = html;
  stripEl.innerHTML = STEPS.map(function (s, i) {
    return '<button class="step" data-i="' + i + '" style="--c:' + s.color + '" aria-label="Step ' + (i + 1) + ": " + s.title + '"><div class="badge" style="background:' + s.color + '">' + (i + 1) + '</div><div class="card"><div class="ico">' + s.icon + '</div><div class="lab">' + s.short + "</div></div></button>";
  }).join("");
  Array.prototype.forEach.call(stripEl.children, function (b) { b.addEventListener("click", function () { show(parseInt(b.getAttribute("data-i"), 10)); }); });
}

function show(i) {
  if (i < 0 || i >= STEPS.length) return;
  cur = i; var s = STEPS[i];
  Array.prototype.forEach.call(stripEl.children, function (b, k) { b.classList.toggle("on", k === i); });
  panelEl.style.setProperty("--c", s.color);
  var stats = s.stats.map(function (x) { return '<div class="stat" style="--c:' + s.color + '"><b>' + x[0] + "</b><span>" + x[1] + " " + tg(x[2]) + "</span></div>"; }).join("");
  var pts = s.pts.map(function (x) { return '<li><span class="pi">' + x[0] + "</span><span>" + x[1] + tg(x[2]) + "</span></li>"; }).join("");
  pinEl.innerHTML =
    '<div class="phead"><span class="big">' + s.icon + '</span><div><div style="font-size:13px;color:' + s.color + ';font-weight:700">STEP ' + (i + 1) + " OF " + STEPS.length + " · " + s.phase.toUpperCase() + '</div><h2 class="ptitle">' + s.title + '</h2></div>' +
    '<div class="nav"><button class="nb" id="prev">← Back</button><button class="nb" id="next">Next →</button><button class="nb" id="close">Close</button></div></div>' +
    '<p class="line">' + s.line + "</p>" +
    '<div class="cols"><div class="viz" style="--c:' + s.color + '">' + s.viz() + '</div><div>' + (stats ? '<div class="stats">' + stats + "</div>" : "") + '<ul class="pts">' + pts + "</ul></div></div>";
  document.getElementById("prev").addEventListener("click", function () { show(cur - 1); });
  document.getElementById("next").addEventListener("click", function () { show(cur + 1); });
  document.getElementById("close").addEventListener("click", closePanel);
  document.getElementById("prev").disabled = i === 0; document.getElementById("next").disabled = i === STEPS.length - 1;
  panelEl.classList.add("open"); panelEl.scrollTop = 0; hintEl.style.display = "none";
  var b = stripEl.children[i]; if (b.scrollIntoView) b.scrollIntoView({ inline: "center", block: "nearest", behavior: "smooth" });
}
function closePanel() { panelEl.classList.remove("open"); cur = -1; Array.prototype.forEach.call(stripEl.children, function (b) { b.classList.remove("on"); }); hintEl.style.display = ""; }

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") show(cur < 0 ? 0 : Math.min(cur + 1, STEPS.length - 1));
  else if (e.key === "ArrowLeft") show(cur < 0 ? 0 : Math.max(cur - 1, 0));
  else if (e.key === "Escape") closePanel();
});
build();
