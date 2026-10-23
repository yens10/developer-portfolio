// Browser-side enhancements and in-place EN/ES switching for the static Astro portfolio.
type Locale = 'en' | 'es';

const root = document.documentElement;
const localeKey = 'yemis-locale';
const parsedPages = new Map<string, Document>();
let activeLocale: Locale = root.lang === 'es' ? 'es' : 'en';
let pendingSwitch = 0;
let revealObserver: IntersectionObserver | undefined;
let toastTimeout: ReturnType<typeof setTimeout> | undefined;

function readLocale(): Locale | null {
  try {
    const value = localStorage.getItem(localeKey);
    return value === 'en' || value === 'es' ? value : null;
  } catch {
    return null;
  }
}

function saveLocale(locale: Locale): void {
  try { localStorage.setItem(localeKey, locale); }
  catch { /* The selector works even without storage. */ }
}

function canonicalPath(pathname: string): string {
  const normalized = pathname.replace(/^\/es(?=\/|$)/, '');
  return normalized || '/';
}

function sourcePath(locale: Locale): string {
  const pathname = canonicalPath(window.location.pathname);
  return locale === 'es' ? `/es${pathname}` : pathname;
}

function normalizeInternalLinks(): void {
  // Preserve the same public URLs regardless of the selected language.
  document.querySelectorAll<HTMLAnchorElement>('a[href^="/es/"]').forEach((anchor) => {
    const original = anchor.getAttribute('href');
    if (original) anchor.setAttribute('href', original.slice(3) || '/');
  });
}

function closeMenu(): void {
  const menuButton = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
  const menu = document.querySelector<HTMLElement>('[data-mobile-menu]');
  if (!menu || !menuButton) return;
  menu.hidden = true;
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', menuButton.dataset.openLabel ?? 'Open menu');
}

function updateScroll(): void {
  const progress = document.querySelector<HTMLElement>('[data-scroll-progress]');
  if (!progress) return;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.transform = `scaleX(${max > 0 ? Math.max(0, Math.min(1, window.scrollY / max)) : 0})`;
}

function setupPage(): void {
  // Bind handlers again after the localized page markup has been replaced.
  document.querySelector<HTMLButtonElement>('[data-theme-toggle]')?.addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    try { localStorage.setItem('yems-theme', next); }
    catch { /* The theme remains usable without storage. */ }
  });

  const menuButton = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
  const menu = document.querySelector<HTMLElement>('[data-mobile-menu]');
  menuButton?.addEventListener('click', () => {
    if (!menu) return;
    const open = menu.hidden;
    menu.hidden = !open;
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? menuButton.dataset.closeLabel ?? 'Close menu' : menuButton.dataset.openLabel ?? 'Open menu');
  });
  menu?.querySelectorAll<HTMLAnchorElement>('a').forEach((anchor) => {
    anchor.addEventListener('click', closeMenu);
  });

  const filterButtons = Array.from(document.querySelectorAll<HTMLButtonElement>('[data-filter]'));
  const projectCards = Array.from(document.querySelectorAll<HTMLElement>('[data-category]'));
  filterButtons.forEach((button) => button.addEventListener('click', () => {
    const category = button.dataset.filter;
    filterButtons.forEach((item) => {
      const selected = item === button;
      item.classList.toggle('active', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
    projectCards.forEach((card) => {
      card.hidden = category !== 'all' && card.dataset.category !== category;
    });
  }));

  revealObserver?.disconnect();
  const revealElements = document.querySelectorAll<HTMLElement>('[data-reveal]');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    revealObserver = new IntersectionObserver((entries, observerInstance) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observerInstance.unobserve(entry.target);
        }
      });
    }, { threshold: 0.06, rootMargin: '0px 0px -35px 0px' });
    revealElements.forEach((element) => revealObserver?.observe(element));
  } else {
    revealElements.forEach((element) => element.classList.add('is-visible'));
  }

  const toast = document.querySelector<HTMLElement>('[data-toast]');
  document.querySelectorAll<HTMLButtonElement>('[data-copy-email]').forEach((button) => {
    button.addEventListener('click', async () => {
      const email = button.dataset.copyEmail;
      if (!email) return;
      try {
        await navigator.clipboard.writeText(email);
        if (toast) {
          toast.textContent = document.body.dataset.copySuccess ?? 'Email copied to clipboard';
          toast.classList.add('show');
          if (toastTimeout) clearTimeout(toastTimeout);
          toastTimeout = setTimeout(() => toast.classList.remove('show'), 2800);
        }
      } catch {
        if (toast) { toast.textContent = email; toast.classList.add('show'); }
      }
    });
  });
  updateScroll();
}

function replaceMeta(selector: string, source: Document): void {
  const current = document.head.querySelector<HTMLMetaElement>(selector);
  const translated = source.head.querySelector<HTMLMetaElement>(selector);
  if (current && translated) current.content = translated.content;
}

async function switchLocale(locale: Locale): Promise<void> {
  const requestId = ++pendingSwitch;
  if (locale === activeLocale) {
    delete root.dataset.localeLoading;
    return;
  }

  const path = sourcePath(locale);
  try {
    let translation = parsedPages.get(path);
    if (!translation) {
      const response = await fetch(path, { credentials: 'same-origin' });
      if (!response.ok) throw new Error(`Cannot load ${path}: HTTP ${response.status}`);
      translation = new DOMParser().parseFromString(await response.text(), 'text/html');
      parsedPages.set(path, translation);
    }
    if (requestId !== pendingSwitch) return;

    const selectors = ['header.site-header', 'main#main-content', 'footer.site-footer'];
    const incoming = selectors.map((selector) => translation!.querySelector<HTMLElement>(selector));
    if (incoming.some((item) => !item)) throw new Error(`Incomplete localized page: ${path}`);
    selectors.forEach((selector, index) => {
      document.querySelector(selector)?.replaceWith(incoming[index]!.cloneNode(true));
    });

    document.title = translation.title;
    replaceMeta('meta[name="description"]', translation);
    replaceMeta('meta[property="og:title"]', translation);
    replaceMeta('meta[property="og:description"]', translation);
    replaceMeta('meta[property="og:locale"]', translation);
    document.body.dataset.copySuccess = translation.body.dataset.copySuccess ?? '';
    root.lang = locale;
    activeLocale = locale;
    saveLocale(locale);
    normalizeInternalLinks();
    setupPage();

    const hash = decodeURIComponent(window.location.hash.slice(1));
    if (hash) document.getElementById(hash)?.scrollIntoView({ behavior: 'instant' });
  } catch (error) {
    // Do not change the URL, current content, or stored preference on a failed fetch.
    console.error('Unable to switch portfolio language:', error);
  } finally {
    if (requestId === pendingSwitch) delete root.dataset.localeLoading;
  }
}

document.addEventListener('click', (event) => {
  const element = event.target;
  if (!(element instanceof Element)) return;
  const toggle = element.closest<HTMLButtonElement>('button[data-language-target]');
  if (!toggle || event.defaultPrevented) return;
  if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  const locale = toggle.dataset.languageTarget;
  if (locale !== 'en' && locale !== 'es') return;
  event.preventDefault();
  void switchLocale(locale);
});

window.addEventListener('scroll', updateScroll, { passive: true });
window.addEventListener('resize', () => {
  if (window.innerWidth > 760) closeMenu();
  updateScroll();
});
window.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeMenu(); });

// Cache the server-rendered initial language, so toggling back is instantaneous.
parsedPages.set(sourcePath(activeLocale), new DOMParser().parseFromString(root.outerHTML, 'text/html'));

// Existing /es/ URLs remain usable as static fallbacks, but are not shown to visitors.
const currentPath = canonicalPath(window.location.pathname);
if (window.location.pathname !== currentPath) {
  window.history.replaceState(window.history.state, '', currentPath + window.location.search + window.location.hash);
}
normalizeInternalLinks();
setupPage();

if (activeLocale === 'es') {
  saveLocale('es');
  delete root.dataset.localeLoading;
} else if (readLocale() === 'es') {
  void switchLocale('es');
} else {
  delete root.dataset.localeLoading;
}
