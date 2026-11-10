/**
 * main.js
 * 
 * Application entry point for Khaled Eldaoudy's "Editorial Luxury" Portfolio.
 * Initializes bilingual data loading, Three.js Kinematic WebGL Gimbal,
 * cinematic scroll animations, project filters, modal interactions, and Formspree inquiries.
 */

import { CONFIG } from './config.js';
import { i18n } from './i18n.js';
import { dataManager } from './data-loader.js';
import { initLuxuryGimbal } from './three-gimbal.js';

let isInitialized = false;

async function initApp() {
  if (isInitialized) return;
  isInitialized = true;

  try {
    // 1. Initialize i18n
    await i18n.init();

    // 2. Load & Render Portfolio Data
    await dataManager.loadAll();
    dataManager.renderAll();

    // Re-render dynamic sections when language changes
    i18n.onLanguageChange(() => {
      dataManager.renderAll();
    });

    // 3. Initialize Three.js Kinematic Gimbal
    try {
      initLuxuryGimbal('heroCanvasMount');
    } catch (e) {
      console.warn('Gimbal canvas bypass:', e);
    }

    // 4. Setup Project Category Filters
    initProjectFilters();

    // 5. Setup Project Modal Listeners
    initModalListeners();

    // 6. Setup Cinematic Scroll Animations & Counters (Progressive Enhancement)
    initAnimations();

    // 7. Formspree Contact Form Integration
    initContactForm();

    // 8. Navigation & Header Scrolled State
    initNavigation();
  } catch (err) {
    console.error('Fatal initialization error in initApp:', err);
  }
}

// Ensure execution whether DOM is already parsed or still loading
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

/* ==========================================================================
   1. Project Category Filters
   ========================================================================== */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-tab');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-filter') || 'all';
      dataManager.setProjectFilter(cat);
    });
  });
}

/* ==========================================================================
   2. Modal & Lightbox Listeners
   ========================================================================== */
function initModalListeners() {
  const modal = document.getElementById('projectModal');
  const closeBtn = document.getElementById('modalCloseBtn');

  if (closeBtn) closeBtn.addEventListener('click', () => dataManager.closeProjectModal());
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) dataManager.closeProjectModal();
    });
  }

  // Certificate Preview Modal Listeners
  const certModal = document.getElementById('certificateModal');
  const certCloseBtn = document.getElementById('certModalCloseBtn');

  if (certCloseBtn) certCloseBtn.addEventListener('click', () => dataManager.closeCertificateModal());
  if (certModal) {
    certModal.addEventListener('click', (e) => {
      if (e.target === certModal) dataManager.closeCertificateModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (modal && modal.classList.contains('active')) {
        dataManager.closeProjectModal();
      }
      if (certModal && certModal.classList.contains('active')) {
        dataManager.closeCertificateModal();
      }
    }
  });
}

/* ==========================================================================
   3. Cinematic Scroll Animations & Metric Counters
   ========================================================================== */
function initAnimations() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Progressive enhancement: ensure all elements are visible by default
  const revealElements = document.querySelectorAll('.editorial-section-tag, .section-heading-block, .project-editorial-card, .honor-entry, .discipline-card, .academic-credential-card, .training-program-card, .leadership-editorial-card, .venture-editorial-card, .metric-block');
  revealElements.forEach(el => {
    el.style.opacity = '1';
    el.style.visibility = 'visible';
  });

  // Fallback timeout to guarantee visibility
  setTimeout(() => {
    revealElements.forEach(el => {
      el.style.opacity = '1';
      el.style.visibility = 'visible';
      el.classList.add('is-revealed');
    });
  }, 1500);

  if (!prefersReduced && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    revealElements.forEach(el => observer.observe(el));
  }

  // Animate Metric Counters
  animateMetricCounters();
}

function animateMetricCounters() {
  const metricValues = document.querySelectorAll('.metric-val');
  metricValues.forEach(el => {
    const block = el.closest('.metric-block');
    const statId = block ? block.getAttribute('data-stat-id') : '';
    const rawText = el.textContent.trim();

    // NEVER animate graduation year, 4-digit years, or placements
    if (
      statId === 'graduation' || 
      statId === 'robosoccer-place' || 
      rawText.includes('2026') || 
      rawText.includes('2027') || 
      rawText.includes('2nd') || 
      rawText.includes('🥈')
    ) {
      return;
    }

    const num = parseInt(rawText.replace(/[^0-9]/g, ''), 10);
    if (!isNaN(num) && num > 0 && num < 1000) {
      if ('IntersectionObserver' in window) {
        const obs = new IntersectionObserver(([entry]) => {
          if (entry.isIntersecting) {
            obs.disconnect();
            let current = 0;
            const step = Math.max(1, Math.ceil(num / 18));
            const timer = setInterval(() => {
              current += step;
              if (current >= num) {
                el.textContent = rawText;
                clearInterval(timer);
              } else {
                el.textContent = rawText.includes('+') ? `${current}+` : current;
              }
            }, 30);
          }
        }, { threshold: 0.2 });
        obs.observe(el);
      }
    }
  });
}

/* ==========================================================================
   4. Formspree Contact Form Integration
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const statusMsg = document.getElementById('formStatusMsg');
  const submitBtn = document.getElementById('formSubmitBtn');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Honeypot anti-spam check
    const honeypot = form.querySelector('input[name="_gotcha"]');
    if (honeypot && honeypot.value) {
      console.warn('Bot submission blocked.');
      return;
    }

    const formData = new FormData(form);
    const originalBtnText = submitBtn.innerHTML;

    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span>${i18n.t('contact.sending')}</span>`;
    if (statusMsg) {
      statusMsg.className = 'form-status-msg font-mono';
      statusMsg.textContent = '';
    }

    try {
      const response = await fetch(CONFIG.FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        form.reset();
        if (statusMsg) {
          statusMsg.className = 'form-status-msg status-success font-mono';
          statusMsg.textContent = i18n.t('contact.success_msg');
        }
      } else {
        throw new Error('Formspree returned an error');
      }
    } catch (err) {
      if (statusMsg) {
        statusMsg.className = 'form-status-msg status-error font-mono';
        statusMsg.textContent = i18n.t('contact.error_msg');
      }
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;
    }
  });
}

/* ==========================================================================
   5. Navigation & Header Blur Behavior
   ========================================================================== */
function initNavigation() {
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');
  const header = document.getElementById('navbar');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !isExpanded);
      navMenu.classList.toggle('active');
      navToggle.classList.toggle('active');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Language switch triggers
  const langBtns = document.querySelectorAll('.lang-toggle-btn');
  langBtns.forEach(btn => {
    btn.addEventListener('click', () => i18n.toggleLanguage());
  });

  // Header glass/blur on scroll
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (header) {
      if (scrollTop > 30) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  }, { passive: true });
}
