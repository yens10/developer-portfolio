// Progressive enhancement. All user-facing copy comes from the active page's locale.
const root = document.documentElement;
const themeButton = document.querySelector<HTMLButtonElement>('[data-theme-toggle]');

themeButton?.addEventListener('click', () => {
  const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
  root.dataset.theme = next;
  try { localStorage.setItem('yems-theme', next); } catch { /* Theme still works without storage. */ }
});

const menuButton = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
const menu = document.querySelector<HTMLElement>('[data-mobile-menu]');
function closeMenu() {
  if (!menu || !menuButton) return;
  menu.hidden = true;
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', menuButton.dataset.openLabel ?? 'Open menu');
}
menuButton?.addEventListener('click', () => {
  if (!menu) return;
  const open = menu.hidden;
  menu.hidden = !open;
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? menuButton.dataset.closeLabel ?? 'Close menu' : menuButton.dataset.openLabel ?? 'Open menu');
});
menu?.querySelectorAll<HTMLAnchorElement>('a').forEach((link) => link.addEventListener('click', closeMenu));
window.addEventListener('resize', () => { if (window.innerWidth > 760) closeMenu(); });
window.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeMenu(); });

const filterButtons = Array.from(document.querySelectorAll<HTMLButtonElement>('[data-filter]'));
const projectCards = Array.from(document.querySelectorAll<HTMLElement>('[data-category]'));
filterButtons.forEach((button) => button.addEventListener('click', () => {
  const category = button.dataset.filter;
  filterButtons.forEach((item) => {
    const active = item === button;
    item.classList.toggle('active', active);
    item.setAttribute('aria-pressed', String(active));
  });
  projectCards.forEach((card) => {
    card.hidden = category !== 'all' && card.dataset.category !== category;
  });
}));

const progress = document.querySelector<HTMLElement>('[data-scroll-progress]');
function updateScroll() {
  if (!progress) return;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.transform = `scaleX(${max > 0 ? Math.max(0, Math.min(1, window.scrollY / max)) : 0})`;
}
window.addEventListener('scroll', updateScroll, { passive: true });
window.addEventListener('resize', updateScroll);
updateScroll();

const revealElements = document.querySelectorAll<HTMLElement>('[data-reveal]');
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver((entries, observerInstance) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observerInstance.unobserve(entry.target); }
    });
  }, { threshold: 0.06, rootMargin: '0px 0px -35px 0px' });
  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add('is-visible'));
}

const toast = document.querySelector<HTMLElement>('[data-toast]');
let toastTimeout: ReturnType<typeof setTimeout> | undefined;
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
