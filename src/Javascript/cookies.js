// Shared cookie consent handling for Courserr
(function () {
  const background = document.getElementById('background-blur');
  const banner = document.getElementById('cookie-banner');

  if (!background || !banner) {
    return;
  }

  const focusableSelectors = [
    'button',
    '[href]',
    'input',
    'select',
    'textarea',
    '[tabindex]:not([tabindex="-1"])'
  ].join(',');

  let lastFocusedBeforeBanner = null;

  function getFocusableElements() {
    return banner.querySelectorAll(focusableSelectors);
  }

  function handleKeydown(event) {
    if (event.key === 'Escape') {
      event.preventDefault();
      doDeclineCookies();
      return;
    }

    if (event.key !== 'Tab') return;

    const focusable = getFocusableElements();
    if (!focusable.length) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey) {
      if (document.activeElement === first) {
        event.preventDefault();
        last.focus();
      }
    } else {
      if (document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  }

  function hideBanner() {
    background.style.display = 'none';
    banner.style.display = 'none';
    background.setAttribute('aria-hidden', 'true');
    document.removeEventListener('keydown', handleKeydown);

    if (lastFocusedBeforeBanner && typeof lastFocusedBeforeBanner.focus === 'function') {
      lastFocusedBeforeBanner.focus();
    }
  }

  function showBanner() {
    background.style.display = '';
    banner.style.display = '';
    background.removeAttribute('aria-hidden');

    lastFocusedBeforeBanner = document.activeElement;

    const focusable = getFocusableElements();
    const first = focusable[0];
    if (first) {
      first.focus();
    }

    document.addEventListener('keydown', handleKeydown);
  }

  function doEnableAnalytics() {
    localStorage.setItem('ga-consent', 'granted');
    if (typeof gtag === 'function') {
      try {
        gtag('consent', 'update', { 'analytics_storage': 'granted' });
      } catch (_e) {
        // Ignore analytics errors
      }
    }
  }

  function doAcceptCookies() {
    localStorage.setItem('ga-consent', 'granted');
    hideBanner();
    doEnableAnalytics();
  }

  function doDeclineCookies() {
    localStorage.setItem('ga-consent', 'denied');
    hideBanner();
  }

  // Expose public functions for inline handlers, if any remain
  window.enableAnalytics = doEnableAnalytics;
  window.acceptCookies = doAcceptCookies;
  window.declineCookies = doDeclineCookies;

  const storedConsent = localStorage.getItem('ga-consent');
  if (storedConsent === 'granted' || storedConsent === 'denied') {
    hideBanner();
  } else {
    showBanner();
  }
})();

