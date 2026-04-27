const routes = {
  'index.html': { modulePath: '/src/app.js', initName: 'initHomePage' },
  'explore.html': { modulePath: '/src/explore.js', initName: 'initExplorePage' },
  'bookings.html': { modulePath: '/src/bookings.js', initName: 'initBookingsPage' },
  'contact.html': { modulePath: '/src/contact.js', initName: 'initContactPage' }
};

function getPageName(pathname) {
  const path = pathname || window.location.pathname;
  const cleanPath = path.split('?')[0].split('#')[0];

  if (cleanPath === '/' || cleanPath.endsWith('/')) {
    return 'index.html';
  }

  return cleanPath.split('/').pop();
}

function ensureInlineStyleElement() {
  let styleEl = document.getElementById('page-inline-style');
  if (!styleEl) {
    styleEl = document.createElement('style');
    styleEl.id = 'page-inline-style';
    document.head.appendChild(styleEl);
  }
  return styleEl;
}

function applyInlineStyles(documentFragment) {
  const styleNodes = Array.from(documentFragment.querySelectorAll('head style'));
  const styleText = styleNodes.map(node => node.textContent || '').join('\n').trim();
  const styleEl = ensureInlineStyleElement();
  styleEl.textContent = styleText;
}

function updateActiveNav(pageName) {
  const links = document.querySelectorAll('.nav-links a[href]');
  links.forEach(link => {
    const linkPage = getPageName(link.getAttribute('href'));
    if (linkPage === pageName) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    } else {
      link.classList.remove('active');
      link.removeAttribute('aria-current');
    }
  });
}

async function runRouteInit(pageName) {
  const route = routes[pageName];
  if (!route) return;

  try {
    await import(route.modulePath);
  } catch (error) {
    console.error('Failed to load route module:', error);
  }

  const initFn = window[route.initName];
  if (typeof initFn === 'function') {
    initFn();
  }
}

async function navigateTo(targetUrl, options = {}) {
  const { pushState = true } = options;
  const pageName = getPageName(targetUrl);

  if (!routes[pageName]) {
    window.location.href = targetUrl;
    return;
  }

  let response;
  try {
    response = await fetch(pageName, { headers: { 'X-Requested-With': 'spa' } });
  } catch (error) {
    window.location.href = targetUrl;
    return;
  }

  if (!response.ok) {
    window.location.href = targetUrl;
    return;
  }

  const html = await response.text();
  const parsed = new DOMParser().parseFromString(html, 'text/html');
  const newMain = parsed.querySelector('main');
  const currentMain = document.querySelector('main');

  if (!newMain || !currentMain) {
    window.location.href = targetUrl;
    return;
  }

  currentMain.innerHTML = newMain.innerHTML;
  document.title = parsed.title || document.title;
  applyInlineStyles(parsed);
  updateActiveNav(pageName);

  if (pushState) {
    history.pushState({ page: pageName }, '', pageName);
  }

  window.scrollTo({ top: 0, behavior: 'auto' });
  await runRouteInit(pageName);
}

function handleLinkClick(event) {
  if (event.defaultPrevented || event.button !== 0) return;
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

  const link = event.target.closest('a');
  if (!link) return;

  const href = link.getAttribute('href');
  if (!href || href.startsWith('#') || href.startsWith('mailto:')) return;

  const linkUrl = new URL(href, window.location.origin);
  if (linkUrl.origin !== window.location.origin) return;

  const pageName = getPageName(linkUrl.pathname);
  if (!routes[pageName]) return;

  event.preventDefault();
  navigateTo(linkUrl.pathname);
}

window.addEventListener('popstate', () => {
  navigateTo(window.location.pathname, { pushState: false });
});

window.addEventListener('load', () => {
  const pageName = getPageName();
  updateActiveNav(pageName);
  runRouteInit(pageName);
});

document.addEventListener('click', handleLinkClick);
