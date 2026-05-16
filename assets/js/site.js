// The Bush Group — site.js
// Vanilla JS. No build step. Loaded with `defer` so DOM is parsed.

(function () {
  'use strict';

  // ------------------------------------------------------------------
  // 1. Inject shared header + footer
  //    Pages include <div data-include="header"></div> at top of <body>.
  //    We fetch /assets/partials/header.html and inject it. Same for footer.
  //
  //    To avoid the FOUC, the partials are kept tiny and we run this ASAP.
  // ------------------------------------------------------------------

  async function inject(target, url) {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(res.statusText);
      target.outerHTML = await res.text();
    } catch (e) {
      target.innerHTML = '<!-- ' + url + ' failed: ' + e.message + ' -->';
    }
  }

  async function runIncludes() {
    const nodes = document.querySelectorAll('[data-include]');
    await Promise.all(Array.from(nodes).map(node => {
      const name = node.getAttribute('data-include');
      return inject(node, '/assets/partials/' + name + '.html');
    }));
    // After header/footer are in the DOM, set up nav behaviors.
    initNav();
    markActiveNav();
  }

  // ------------------------------------------------------------------
  // 2. Sticky nav scroll behavior + mobile menu toggle
  // ------------------------------------------------------------------

  function initNav() {
    const header = document.querySelector('.site-header');
    if (header) {
      const onScroll = () => {
        if (window.scrollY > 16) header.classList.add('is-scrolled');
        else header.classList.remove('is-scrolled');
      };
      onScroll();
      window.addEventListener('scroll', onScroll, { passive: true });
    }
    const toggle = document.querySelector('.nav-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    if (toggle && mobileNav) {
      toggle.addEventListener('click', () => {
        const isOpen = mobileNav.classList.toggle('is-open');
        toggle.setAttribute('aria-expanded', String(isOpen));
        toggle.querySelector('.icon-open').style.display = isOpen ? 'none' : '';
        toggle.querySelector('.icon-close').style.display = isOpen ? '' : 'none';
      });
    }
  }

  function markActiveNav() {
    const path = window.location.pathname.replace(/\/index\.html$/, '/').replace(/\/+$/, '/') || '/';
    document.querySelectorAll('.nav-links a, .mobile-nav a').forEach(a => {
      const href = a.getAttribute('href');
      if (!href || href === '/contact/') return; // CTA stays styled separately
      const norm = href.replace(/\/+$/, '/') || '/';
      if (norm === path || (norm !== '/' && path.indexOf(norm) === 0)) {
        a.style.color = 'var(--ink)';
      }
    });
  }

  // ------------------------------------------------------------------
  // 3. Reveal-on-scroll via IntersectionObserver
  //    Auto-applies .reveal to any element with [data-reveal].
  // ------------------------------------------------------------------

  function initReveal() {
    const items = document.querySelectorAll('[data-reveal]');
    items.forEach(el => el.classList.add('reveal'));
    if (!('IntersectionObserver' in window)) {
      items.forEach(el => el.classList.add('is-visible'));
      return;
    }
    // Anything already in viewport on initial load: reveal it immediately.
    const vh = window.innerHeight || 0;
    items.forEach(el => {
      const r = el.getBoundingClientRect();
      if (r.top < vh && r.bottom > 0) el.classList.add('is-visible');
    });
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0, rootMargin: '0px 0px -5% 0px' });
    items.forEach(el => { if (!el.classList.contains('is-visible')) io.observe(el); });
    // Safety: 2.5s after load, reveal anything still hidden (covers headless
    // captures, prefers-reduced-motion, or any edge case where IO misses).
    window.setTimeout(() => {
      document.querySelectorAll('[data-reveal]:not(.is-visible)').forEach(el => el.classList.add('is-visible'));
    }, 2500);
  }

  // ------------------------------------------------------------------
  // 4. Core Eight wheel hover interactivity
  // ------------------------------------------------------------------

  function initWheel() {
    const wraps = document.querySelectorAll('.wheel-wrap');
    wraps.forEach(wrap => {
      const slices = wrap.querySelectorAll('.wheel-slice');
      const tip = wrap.querySelector('.wheel-tooltip');
      slices.forEach(slice => {
        const enter = () => {
          slices.forEach(s => s.classList.add('is-dim'));
          slice.classList.remove('is-dim');
          slice.classList.add('is-active');
          if (tip) {
            tip.querySelector('strong').textContent = slice.dataset.title || '';
            tip.querySelector('span').textContent = slice.dataset.desc || '';
            tip.classList.add('is-visible');
          }
        };
        const leave = () => {
          slices.forEach(s => { s.classList.remove('is-dim'); s.classList.remove('is-active'); });
          if (tip) tip.classList.remove('is-visible');
        };
        slice.addEventListener('mouseenter', enter);
        slice.addEventListener('mouseleave', leave);
        slice.addEventListener('focus', enter);
        slice.addEventListener('blur', leave);
      });
    });
  }

  // ------------------------------------------------------------------
  // 5. Contact form (mailto)
  // ------------------------------------------------------------------

  function initContactForm() {
    const form = document.querySelector('[data-contact-form]');
    if (!form) return;
    const success = document.querySelector('[data-contact-success]');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const subject = '[Website] ' + (data.get('topic') || 'Inquiry') + ' — ' + (data.get('name') || '');
      const lines = [
        'Name: ' + (data.get('name') || ''),
        'Email: ' + (data.get('email') || ''),
        data.get('company') ? 'Company: ' + data.get('company') : '',
        'Topic: ' + (data.get('topic') || ''),
        '',
        data.get('message') || '',
      ].filter(Boolean);
      const href = 'mailto:info@thebushgroupinc.com?subject=' +
        encodeURIComponent(subject) + '&body=' + encodeURIComponent(lines.join('\n'));
      window.location.href = href;
      if (success) {
        form.style.display = 'none';
        success.style.display = '';
      }
    });
    const reset = document.querySelector('[data-contact-reset]');
    if (reset) reset.addEventListener('click', () => {
      form.reset();
      form.style.display = '';
      if (success) success.style.display = 'none';
    });
  }

  // ------------------------------------------------------------------
  // Boot
  // ------------------------------------------------------------------

  function boot() {
    runIncludes(); // async — header may pop in shortly after
    initReveal();
    initWheel();
    initContactForm();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
