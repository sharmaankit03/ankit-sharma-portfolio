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
