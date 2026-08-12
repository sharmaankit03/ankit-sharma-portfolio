document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var tabs = document.querySelector('.nav-tabs');

  if (toggle && tabs) {
    toggle.addEventListener('click', function () {
      tabs.classList.toggle('open');
    });
    tabs.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        tabs.classList.remove('open');
      });
    });
  }

  var nav = document.querySelector('.site-nav');

  function setNavHeight() {
    if (nav) {
      document.documentElement.style.setProperty('--nav-h', nav.offsetHeight + 'px');
    }
  }

  setNavHeight();
  window.addEventListener('resize', setNavHeight);

  var cvDropdown = document.querySelector('.cv-dropdown');
  var cvToggle = document.querySelector('.cv-toggle');

  if (cvDropdown && cvToggle) {
    var closeCv = function () {
      cvDropdown.classList.remove('open');
      cvToggle.setAttribute('aria-expanded', 'false');
    };

    cvToggle.addEventListener('click', function (e) {
      e.stopPropagation();
      var isOpen = cvDropdown.classList.toggle('open');
      cvToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    document.addEventListener('click', function (e) {
      if (!cvDropdown.contains(e.target)) closeCv();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && cvDropdown.classList.contains('open')) {
        closeCv();
        cvToggle.focus();
      }
    });
  }

  var links = document.querySelectorAll('.nav-tabs a[href^="#"]');
  var sections = [];
  links.forEach(function (link) {
    var id = link.getAttribute('href').slice(1);
    var el = document.getElementById(id);
    if (el) sections.push({ id: id, el: el, link: link });
  });

  function setActive() {
    var pos = window.scrollY + 120;
    var current = sections[0];
    sections.forEach(function (s) {
      if (s.el.offsetTop <= pos) current = s;
    });
    links.forEach(function (l) { l.classList.remove('active'); });
    if (current) current.link.classList.add('active');
  }

  window.addEventListener('scroll', setActive, { passive: true });
  setActive();
});
