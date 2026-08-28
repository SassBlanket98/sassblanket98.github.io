// No animation-driven behavior beyond pure CSS (.cursor / .pulse-dot in
// style.css). Two bits of real JS: the mobile nav toggle below, and the
// screenshot lightbox, which intercepts clicks on project screenshots and
// shows them in-page with a close button instead of opening the raw image
// in a new tab. With JS disabled the <a target="_blank"> links still work
// exactly as before, and the mobile nav panel is simply absent (no toggle
// to reveal it), so nothing traps the user.
(function () {
  'use strict';

  var navToggle = document.getElementById('nav-toggle');
  var sidebar = document.querySelector('.sidebar');
  var sidebarPanel = document.getElementById('sidebar-panel');

  if (navToggle && sidebar && sidebarPanel) {
    var navLabel = navToggle.querySelector('.nav-toggle-label');

    var setNavOpen = function (open) {
      sidebar.classList.toggle('is-open', open);
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      if (navLabel) navLabel.textContent = open ? 'close' : 'menu';
    };

    navToggle.addEventListener('click', function () {
      setNavOpen(navToggle.getAttribute('aria-expanded') !== 'true');
    });

    sidebarPanel.addEventListener('click', function (event) {
      if (event.target.closest('a')) setNavOpen(false);
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && navToggle.getAttribute('aria-expanded') === 'true') {
        setNavOpen(false);
        navToggle.focus();
      }
    });

    document.addEventListener('click', function (event) {
      if (navToggle.getAttribute('aria-expanded') !== 'true') return;
      if (sidebar.contains(event.target)) return;
      setNavOpen(false);
    });
  }

  var lightbox = document.getElementById('lightbox');
  if (!lightbox) return;

  var img = lightbox.querySelector('.lightbox-img');
  var closeBtn = lightbox.querySelector('.lightbox-close');
  var lastFocused = null;

  function open(src, alt) {
    lastFocused = document.activeElement;
    img.src = src;
    img.alt = alt || '';
    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
    document.addEventListener('keydown', onKeydown);
  }

  function close() {
    lightbox.hidden = true;
    img.src = '';
    document.body.style.overflow = '';
    document.removeEventListener('keydown', onKeydown);
    if (lastFocused && typeof lastFocused.focus === 'function') lastFocused.focus();
  }

  function onKeydown(event) {
    if (event.key === 'Escape') close();
  }

  document.addEventListener('click', function (event) {
    var link = event.target.closest('.exhibit a, .shots-grid a');
    if (link) {
      event.preventDefault();
      var thumb = link.querySelector('img');
      open(link.getAttribute('href'), thumb ? thumb.alt : '');
      return;
    }
    if (event.target === lightbox || event.target === closeBtn) close();
  });
})();
