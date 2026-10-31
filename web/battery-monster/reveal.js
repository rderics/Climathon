// Battery Monster: scroll reveals, animated counters, mobile menu, and interactive triage simulator.
(function () {
  var root = document.documentElement;
  root.classList.add('js');
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // 1. Scroll reveals via IntersectionObserver
  var items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('in'); });
  }

  // 2. Count up numbers
  var counters = document.querySelectorAll('[data-count]');
  function fmt(n) { return Math.round(n).toLocaleString('en-US'); }
  function runCounter(el) {
    var target = parseFloat(el.getAttribute('data-count'));
    var suffix = el.getAttribute('data-suffix') || '';
    if (reduce || target === 0) { el.textContent = fmt(target) + suffix; return; }
    var start = null, dur = 1400;
    function tick(ts) {
      if (start === null) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
      el.textContent = fmt(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  if ('IntersectionObserver' in window) {
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          runCounter(e.target);
          cio.unobserve(e.target);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(function (el) { cio.observe(el); });
  }

  // 3. Navigation active section indicator
  var links = document.querySelectorAll('.nav a.link');
  var map = {};
  links.forEach(function (a) {
    var href = a.getAttribute('href');
    if (href && href.startsWith('#')) map[href.slice(1)] = a;
  });
  if ('IntersectionObserver' in window) {
    var nio = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting && map[e.target.id]) {
          links.forEach(function (a) { a.removeAttribute('aria-current'); });
          map[e.target.id].setAttribute('aria-current', 'true');
        }
      });
    }, { rootMargin: '-30% 0px -60% 0px' });
    Object.keys(map).forEach(function (id) {
      var s = document.getElementById(id);
      if (s) nio.observe(s);
    });
  }

  // 4. Mobile navigation menu
  var btn = document.querySelector('.menu-btn');
  var panel = document.getElementById('panel');
  function setMenu(open) {
    root.classList.toggle('menu-open', open);
    if (btn) {
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    }
    document.body.style.overflow = open ? 'hidden' : '';
  }
  if (btn && panel) {
    btn.addEventListener('click', function () { setMenu(!root.classList.contains('menu-open')); });
    panel.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });
  }

  // 5. Interactive Post-Crash Triage Simulator
  var state = {
    dent: 'safe',      // 'safe' (<10mm) or 'severe' (>=10mm)
    delta: 'good',     // 'good' (<30mV) or 'bad' (>100mV)
    iso: 'pass',       // 'pass' (>500k) or 'fail'
    chassis: 'ok'      // 'ok' (repairable) or 'total' (total loss)
  };

  // UI elements
  var btnDentSafe = document.getElementById('btn-dent-safe');
  var btnDentSevere = document.getElementById('btn-dent-severe');
  var btnDeltaGood = document.getElementById('btn-delta-good');
  var btnDeltaBad = document.getElementById('btn-delta-bad');
  var btnIsoPass = document.getElementById('btn-iso-pass');
  var btnIsoFail = document.getElementById('btn-iso-fail');
  var btnChassisOk = document.getElementById('btn-chassis-ok');
  var btnChassisTotal = document.getElementById('btn-chassis-total');

  var valDent = document.getElementById('val-dent');
  var valDelta = document.getElementById('val-delta');
  var valIso = document.getElementById('val-iso');
  var valChassis = document.getElementById('val-chassis');

  var vBadge = document.getElementById('verdict-badge');
  var vTitle = document.getElementById('verdict-title');
  var vDesc = document.getElementById('verdict-desc');
  var cDealer = document.getElementById('cost-dealer');
  var cBM = document.getElementById('cost-bm');
  var cSaved = document.getElementById('cost-saved');
  var destText = document.getElementById('dest-text');

  function updateVerdict() {
    var isSevere = (state.dent === 'severe' || state.delta === 'bad' || state.iso === 'fail');
    var isTotal = (state.chassis === 'total');

    // Reset badge classes
    if (vBadge) vBadge.className = 'verdict-tag';

    if (isSevere) {
      if (vBadge) {
        vBadge.classList.add('bad');
        vBadge.textContent = 'ACTION: OECD RECYCLING';
      }
      if (vTitle) vTitle.textContent = 'Critical Fault · Decommission & Recycle';
      if (vDesc) vDesc.textContent = 'Physical intrusion \u226510 mm, internal short circuit, or critical cell imbalance detected. Under Swiss SVV exclusion criteria, pack must be isolated and routed to certified hydrometallurgy.';
      if (cDealer) cDealer.textContent = '€28,000';
      if (cBM) cBM.textContent = '€1,200 (Safe disposal)';
      if (cSaved) cSaved.textContent = 'Thermal Hazard Eliminated';
      if (destText) destText.textContent = 'ADR container transport to Fortum (Finland) or AE Elemental (Poland) hydromet refinery.';
    } else if (isTotal) {
      if (vBadge) {
        vBadge.classList.add('info');
        vBadge.textContent = 'ACTION: SECOND-LIFE BESS';
      }
      if (vTitle) vTitle.textContent = 'Vehicle Total Loss · Battery Repurposing';
      if (vDesc) vDesc.textContent = 'Vehicle chassis is non-repairable, but battery passes all physical and telemetry tests (SoH >92%). Pack is unmounted and certified with Annex XIV digital test passport for stationary storage.';
      if (cDealer) cDealer.textContent = '€0 (Scrapped)';
      if (cBM) cBM.textContent = '€3,200 (Feedstock sale)';
      if (cSaved) cSaved.textContent = '€3,200 value + 400 kg virgin battery avoided';
      if (destText) destText.textContent = 'Certified for local second-life storage (ENGYcell Riga / fleet depot buffer charger).';
    } else if (state.dent === 'safe' && (valDent && valDent.textContent.indexOf('0 mm') !== -1)) {
      if (vBadge) {
        vBadge.classList.add('ok');
        vBadge.textContent = 'ACTION: KEEP IN VEHICLE';
      }
      if (vTitle) vTitle.textContent = 'Zero Defect · Return to Service';
      if (vDesc) vDesc.textContent = 'No structural casing deformation, 0 diagnostic fault codes, perfectly balanced cells, and >1000 k\u03a9 insulation. 100% roadworthy. Immediate return to service with 0 quarantine delay.';
      if (cDealer) cDealer.textContent = '€18,000 (Avoided swap)';
      if (cBM) cBM.textContent = '€180 (Inspection fee)';
      if (cSaved) cSaved.textContent = '€17,820 saved';
      if (destText) destText.textContent = 'Remains in existing vehicle on the road. No unnecessary claims cost.';
    } else {
      if (vBadge) {
        vBadge.classList.add('warn');
        vBadge.textContent = 'ACTION: CASING SWAP';
      }
      if (vTitle) vTitle.textContent = 'Authorized Casing Repair';
      if (vDesc) vDesc.textContent = 'Physical impact is localized to the lower aluminum tray (<10 mm). BMS reports healthy cell balance and high insulation resistance. Pack does not need replacement.';
      if (cDealer) cDealer.textContent = '€22,500 (Dealer swap)';
      if (cBM) cBM.textContent = '€1,650 (Casing swap)';
      if (cSaved) cSaved.textContent = '€20,850 saved';
      if (destText) destText.textContent = 'Keeps existing vehicle and battery on the road with 0 tons waste.';
    }
  }

  function setDent(type) {
    state.dent = type;
    if (btnDentSafe) btnDentSafe.className = 'sim-opt-btn' + (type === 'safe' ? ' active' : '');
    if (btnDentSevere) btnDentSevere.className = 'sim-opt-btn' + (type === 'severe' ? ' active bad' : '');
    if (valDent) valDent.textContent = type === 'safe' ? '6 mm (<10mm)' : '16 mm (\u226510mm)';
    updateVerdict();
  }

  function setDelta(type) {
    state.delta = type;
    if (btnDeltaGood) btnDeltaGood.className = 'sim-opt-btn' + (type === 'good' ? ' active' : '');
    if (btnDeltaBad) btnDeltaBad.className = 'sim-opt-btn' + (type === 'bad' ? ' active bad' : '');
    if (valDelta) valDelta.textContent = type === 'good' ? '18 mV (Healthy)' : '140 mV (Fault)';
    updateVerdict();
  }

  function setIso(type) {
    state.iso = type;
    if (btnIsoPass) btnIsoPass.className = 'sim-opt-btn' + (type === 'pass' ? ' active' : '');
    if (btnIsoFail) btnIsoFail.className = 'sim-opt-btn' + (type === 'fail' ? ' active bad' : '');
    if (valIso) valIso.textContent = type === 'pass' ? 'Pass (>500 k\u03a9)' : 'Fail (Short circuit)';
    updateVerdict();
  }

  function setChassis(type) {
    state.chassis = type;
    if (btnChassisOk) btnChassisOk.className = 'sim-opt-btn' + (type === 'ok' ? ' active' : '');
    if (btnChassisTotal) btnChassisTotal.className = 'sim-opt-btn' + (type === 'total' ? ' active warn' : '');
    if (valChassis) valChassis.textContent = type === 'ok' ? 'Repairable' : 'Total Loss';
    updateVerdict();
  }

  if (btnDentSafe) btnDentSafe.addEventListener('click', function () { setDent('safe'); });
  if (btnDentSevere) btnDentSevere.addEventListener('click', function () { setDent('severe'); });
  if (btnDeltaGood) btnDeltaGood.addEventListener('click', function () { setDelta('good'); });
  if (btnDeltaBad) btnDeltaBad.addEventListener('click', function () { setDelta('bad'); });
  if (btnIsoPass) btnIsoPass.addEventListener('click', function () { setIso('pass'); });
  if (btnIsoFail) btnIsoFail.addEventListener('click', function () { setIso('fail'); });
  if (btnChassisOk) btnChassisOk.addEventListener('click', function () { setChassis('ok'); });
  if (btnChassisTotal) btnChassisTotal.addEventListener('click', function () { setChassis('total'); });

  // Scenario presets
  var scenarioBtns = document.querySelectorAll('.sim-tab-btn');
  scenarioBtns.forEach(function (b) {
    b.addEventListener('click', function () {
      scenarioBtns.forEach(function (x) { x.classList.remove('active'); });
      b.classList.add('active');
      var sc = b.getAttribute('data-scenario');
      if (sc === 'scrape') {
        setDent('safe');
        setDelta('good');
        setIso('pass');
        setChassis('ok');
      } else if (sc === 'total') {
        setDent('safe');
        setDelta('good');
        setIso('pass');
        setChassis('total');
      } else if (sc === 'critical') {
        setDent('severe');
        setDelta('bad');
        setIso('fail');
        setChassis('total');
      }
    });
  });

  // Initial update
  updateVerdict();
})();
