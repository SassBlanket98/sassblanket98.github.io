// No animation-driven behavior beyond pure CSS (.cursor / .pulse-dot in
// style.css) and the CSS-only mobile sidebar collapse. The one bit of real
// JS is the screenshot lightbox below: it intercepts clicks on project
// screenshots and shows them in-page with a close button, instead of
// opening the raw image in a new tab. With JS disabled the <a target=
// "_blank"> links still work exactly as before.
(function () {
  'use strict';

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
