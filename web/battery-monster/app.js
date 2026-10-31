// Battery Monster: short step-by-step explainer. Plain DOM, no libraries (the site CSP only allows scripts from the same origin).
var TAGS = { s: ["Sourced", "#3ddc97"], a: ["Estimate", "#ffbe0b"], c: ["To check", "#ff6b6b"] };
var PH = [
  { name: "Life of the battery", color: "#4ea8ff", n: 3 },
  { name: "The problem", color: "#ff8f8f", n: 2 },
  { name: "What we do", color: "#3ddc97", n: 3 },
  { name: "Where batteries go", color: "#ffbe0b", n: 3 },
  { name: "Money and next", color: "#b79cff", n: 3 }
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
  { icon: "⛏️", short: "Made", title: "Where batteries come from", line: "Metals become cells, cells become a pack, and the carmaker builds it into the car.",
    viz: function () { return flow([["⛏️", "Metals", ""], ["🔋", "Cells", ""], ["📦", "Pack", ""], ["🚗", "Car", ""]], "#4ea8ff"); },
    stats: [["~10%", "of EU EV batteries are LFP; most are nickel-based", "s"]],
    pts: [["🏭", "The carmaker is the legal 'producer' of the battery.", "s"]] },
  { icon: "🚗", short: "In the car", title: "First life: driving", line: "The battery powers the car for years. Latvia has few electric cars, many bought used from abroad.",
    viz: function () { return '<div class="stack"><div style="font-size:60px">🚗🔋</div>' + gauge(100, "Full health", "100%") + "</div>"; },
    stats: [["13,916", "electric cars in Latvia, end of 2025", "s"]],
    pts: [["⏳", "Most packs stay in cars until the mid-2030s.", "s"]] },
  { icon: "📉", short: "Wears out", title: "The battery gets weaker and is swapped", line: "At about 70–80% capacity it is swapped. It is not dead, just too weak for a car.",
    viz: function () { return '<div class="stack" style="width:100%">' + gauge(100, "New", "100%") + '<div style="font-size:24px">⬇️</div>' + gauge(75, "When swapped", "about 70–80%") + "</div>"; },
    stats: [["70–80%", "capacity left when a pack leaves the car", "s"]],
    pts: [["🔧", "A dealer, garage or insurer swaps it.", "a"]] },
  { icon: "📦", short: "Stuck", title: "Old packs sit in storage", line: "Nobody takes them, shipping is costly, and the rules are unclear.",
    viz: function () { return '<div class="grid2">' + tile("🚚", "Costly to ship", "about €350–600 per pack", "#ff8f8f") + tile("🕳️", "No collector", "none found in Latvia", "#ff8f8f") + tile("📄", "Used or waste?", "must be proven", "#ff8f8f") + tile("🔥", "Storage rules", "fire rules unconfirmed", "#ff8f8f") + "</div>"; },
    stats: [["€350–600", "freight per pack inside the EU", "a"]],
    pts: [["📞", "What dealers really do with old packs: we must ask.", "c"]] },
  { icon: "💶", short: "Who pays", title: "Who has to pay?", line: "By EU law the carmaker or importer must take old batteries back and pay for it. The price is agreed, not fixed.",
    viz: function () { return flow([["🏭", "Carmaker or importer", "pays"], ["🏢", "Us", "take it back"]], "#ff8f8f") + chips(["Nickel-based pack: about €0–140", "LFP pack: about €1,050–1,400 (2024)"], "#ffbe0b"); },
    stats: [["€0–1,400", "per pack, depending on chemistry (2024 scrap fees)", "s"]],
    pts: [["⚖️", "If they don't comply, each country sets the penalty. Latvia's: not found.", "c"]] },
  { icon: "🏭", short: "Our hub", title: "Our take-back hub", line: "We collect used packs from many places into one safe site and check them in.",
    viz: function () { return '<div class="flow">' + ["🚌|Fleets", "🔧|Dealers", "🚨|Insurers", "🧰|Dismantlers", "📦|Carmaker surplus", "🌍|Imports"].map(function (x) { var p = x.split("|"); return node(p[0], p[1], "", "#3ddc97"); }).join("") + "</div><div style='text-align:center;font-size:26px;margin:6px 0'>⬇️</div>" + '<div class="flow">' + node("🏭", "Our hub", "", "#3ddc97") + "</div>"; },
    stats: [],
    pts: [["🌍", "Latvia alone is too small, so we plan a Baltic hub.", "a"], ["🚫", "No damaged packs at the start.", "a"]] },
  { icon: "🔬", short: "Test", title: "We test every pack", line: "Each pack gets a check-up, then a grade: reuse, take apart, or recycle.",
    viz: function () { return flow([["📖", "Read data", ""], ["👀", "Damage", ""], ["⚡", "Insulation", ""], ["🔋", "Capacity", ""]], "#3ddc97") + '<div class="chips" style="margin-top:14px"><span class="chip" style="--c:#3ddc97">A · reuse</span><span class="chip" style="--c:#ffbe0b">B · take apart</span><span class="chip" style="--c:#b79cff">C · recycle</span></div>'; },
    stats: [["~€99", "price of a consumer battery health test", "s"]],
    pts: [["💶", "We can charge a fee for each test and certificate.", "a"]] },
  { icon: "✅", short: "Certify", title: "Approvals", line: "Three kinds of approval. We can do some ourselves.",
    viz: function () { return '<div class="grid3">' + tile("📝", "Used, not waste", "A test record and a sale contract. We can issue it.", "#3ddc97") + tile("📋", "New product", "A repurposed battery is a new product. We are its maker.", "#ffbe0b") + tile("🏅", "Lab certificate", "Needs an outside lab.", "#b79cff") + "</div>"; },
    stats: [["Feb 2027", "battery passport becomes mandatory", "s"]],
    pts: [] },
  { icon: "⚡", short: "Reuse", title: "Route A: a second life. Who buys?", line: "Good packs live again as storage or as replacement packs.",
    viz: function () { return '<div class="grid2">' + tile("⚡", "ENGYcell", "Riga storage start-up", "#ffbe0b") + tile("🚗", "Drivers", "Tested replacement pack", "#ffbe0b") + tile("🏭", "Businesses", "Chargers, backup, farms", "#ffbe0b") + tile("🔍", "Health test", "For dealers and importers", "#ffbe0b") + "</div>"; },
    stats: [["€550–1,100", "extra price for a certified used EV (vendor data)", "s"]],
    pts: [["🛡️", "We offer buyers a take-back guarantee.", "a"], ["❓", "Does ENGYcell buy packs, and at what price?", "c"]] },
  { icon: "♻️", short: "Recycle", title: "Route B: recycle mechanically in Latvia", line: "We take packs apart and shred them here as far as we can. We sell the metals and ship the rest.",
    viz: function () { return flow([["📦", "Pack", ""], ["🔧", "Take apart", ""], ["⚙️", "Shred", ""]], "#ffbe0b") + '<div style="text-align:center;font-size:24px;margin:6px 0">⬇️</div><div class="grid2"><div class="tile" style="--c:#d68250"><div class="t">🟠 Copper, aluminium, steel</div><div class="s">sold locally</div></div><div class="tile" style="--c:#fff"><div class="t">⚫ Black mass</div><div class="s">shipped to a refiner</div></div></div>'; },
    stats: [["40–50%", "of a battery's weight ends up as black mass", "s"]],
    pts: [["📉", "Nickel-based black mass has value; LFP black mass is worth little.", "s"], ["🚫", "We do not refine.", "s"]] },
  { icon: "🚚", short: "Send", title: "Route C: ship the rest abroad", line: "Black mass and what we can't process go to recyclers in Finland or Poland.",
    viz: function () { return flow([["🏭", "Our hub", "Latvia"], ["🇫🇮", "Finland", "Fortum"]], "#ffbe0b") + '<div style="height:10px"></div>' + flow([["🏭", "Our hub", "Latvia"], ["🇵🇱", "Poland", "AE Elemental, Eneris"]], "#ffbe0b"); },
    stats: [["about half", "the weight shipped if we shred first (estimate)", "a"]],
    pts: [["💬", "Nobody publishes prices. We need written quotes.", "c"]] },
  { icon: "📊", short: "Money", title: "A first rough pilot: 100 packs a year", line: "Before staff and rent, this rough pilot loses money. Shipping whole packs is the biggest cost.",
    viz: function () { function bar(l, v, col) { var w = Math.abs(v) / 60 * 50; var s = v < 0 ? "right:50%;width:" + w + "%" : "left:50%;width:" + w + "%"; return '<div class="bar"><span>' + l + '</span><div class="track"><div class="fill" style="' + s + ";background:" + col + '"></div></div><b>' + (v > 0 ? "+" : "") + v + "k €</b></div>"; } return '<div class="bars">' + bar("Low case", -58.6, "#ff6b6b") + bar("Base case", -20.8, "#ffbe0b") + bar("High case", 39.3, "#3ddc97") + '</div><div class="gl" style="margin-top:8px"><span>Result per year, before staff, rent and equipment</span></div>'; },
    stats: [["+€8k–49k", "extra per year from a health-test service", "a"]],
    pts: [["📝", "Rough estimates. Our own shredding line is not counted.", "c"]] },
  { icon: "🔎", short: "Next", title: "What we know, and what is open", line: "We found part of the answers. The rest needs phone calls and quotes.",
    viz: function () { return '<div class="grid2"><div class="tile" style="--c:#3ddc97"><div class="t">✅ Found</div><div class="s">Latvian storage rules. Health tests sell used EVs for more. ENGYcell exists.</div></div><div class="tile" style="--c:#ff6b6b"><div class="t">❓ Open</div><div class="s">Penalties. Recycler quotes. Permits. Demand in Latvia.</div></div></div>'; },
    stats: [],
    pts: [["📞", "Call dealers, importers and ENGYcell. Ask recyclers for quotes.", "a"], ["📝", "Get letters of intent.", "a"]] },
  { icon: "🎤", short: "Pitch", title: "Our pitch: what we sell", line: "We take old EV batteries off carmakers' and dealers' hands, test them, and give the good ones a second life.",
    viz: function () { return '<div class="grid2">' + tile("🏭", "Take-back service", "Carmakers, dealers, fleets pay us. Main income.", "#b79cff") + tile("⚡", "Tested packs", "Storage buyers and drivers pay.", "#b79cff") + tile("🔍", "Health tests", "Dealers and importers pay.", "#b79cff") + tile("♻️", "Recycled materials", "Scrap buyers and refiners pay.", "#b79cff") + "</div>"; },
    stats: [["3 + 3 min", "pitch and questions (Sunday 1 Nov, 12:30)", "s"]],
    pts: [["⚠️", "Be honest: the 30/70 split is a guess, and we have no quotes yet.", "a"], ["❓", "Still to decide: first customer and demo.", "c"]] }
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
    '<div class="cols"><div class="viz" style="--c:' + s.color + '">' + s.viz() + '</div><div>' + (stats ? '<div class="stats">' + stats + "</div>" : "") + (pts ? '<ul class="pts">' + pts + "</ul>" : "") + "</div></div>";
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
