(function () {
  // mobile menu
  var sidebar = document.querySelector('.sidebar');
  var toggle = document.querySelector('.menu-toggle');
  if (!sidebar || !toggle) return;
  toggle.addEventListener('click', function () {
    var open = sidebar.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
})();
