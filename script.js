(function () {
  var links = Array.prototype.slice.call(document.querySelectorAll('.index a'));
  var sections = links.map(function (a) {
    return document.querySelector(a.getAttribute('href'));
  });

  function setActive() {
    var y = window.scrollY + window.innerHeight * 0.3;
    var current = 0;
    sections.forEach(function (s, i) {
      if (s && s.offsetTop <= y) current = i;
    });
    // bottom of page -> last section
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) {
      current = sections.length - 1;
    }
    links.forEach(function (a, i) { a.classList.toggle('active', i === current); });
  }
  window.addEventListener('scroll', setActive, { passive: true });
  window.addEventListener('resize', setActive);
  setActive();

  // mobile menu
  var sidebar = document.querySelector('.sidebar');
  var toggle = document.querySelector('.menu-toggle');
  toggle.addEventListener('click', function () {
    var open = sidebar.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  links.forEach(function (a) {
    a.addEventListener('click', function () {
      sidebar.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
})();
