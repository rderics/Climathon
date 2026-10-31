// Battery Monster page: scroll reveals, tagline word reveal, mobile menu. No libraries.
(function () {
  var root = document.documentElement;
  root.classList.add('js');
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Scroll reveals: once per element, via IntersectionObserver
  var items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('in'); });
  }

  // Tagline: each word goes from muted to full colour as it crosses the trigger line
  var tag = document.getElementById('tagline');
  if (tag) {
    var words = tag.textContent.trim().split(/\s+/);
    tag.textContent = '';
    var spans = words.map(function (w, i) {
      var s = document.createElement('span');
      s.className = 'w';
      s.textContent = w;
      tag.appendChild(s);
      if (i < words.length - 1) tag.appendChild(document.createTextNode(' '));
      return s;
    });
    if (reduce || !('IntersectionObserver' in window)) {
      spans.forEach(function (s) { s.classList.add('on'); });
    } else {
      var wio = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { e.target.classList.add('on'); wio.unobserve(e.target); }
        });
      }, { rootMargin: '0px 0px -35% 0px', threshold: 0.6 });
      spans.forEach(function (s) { wio.observe(s); });
    }
  }

  // Current section in the navigation
  var links = document.querySelectorAll('.nav a.link');
  var map = {};
  links.forEach(function (a) { map[a.getAttribute('href').slice(1)] = a; });
  if ('IntersectionObserver' in window) {
    var nio = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting && map[e.target.id]) {
          links.forEach(function (a) { a.removeAttribute('aria-current'); });
          map[e.target.id].setAttribute('aria-current', 'true');
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px' });
    Object.keys(map).forEach(function (id) { var s = document.getElementById(id); if (s) nio.observe(s); });
  }

  // Mobile menu
  var btn = document.querySelector('.menu-btn');
  var panel = document.getElementById('panel');
  function setMenu(open) {
    root.classList.toggle('menu-open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    document.body.style.overflow = open ? 'hidden' : '';
  }
  if (btn && panel) {
    btn.addEventListener('click', function () { setMenu(!root.classList.contains('menu-open')); });
    panel.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });
  }
})();
