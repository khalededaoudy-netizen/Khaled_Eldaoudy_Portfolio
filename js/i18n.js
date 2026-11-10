/**
 * i18n.js
 * 
 * Manages bilingual language switching (English LTR <-> Arabic RTL).
 * Loads translation strings from /data/i18n.json, manages document direction,
 * and notifies active renderers to re-draw bilingual content dynamically.
 */

function getStoredLang() {
  try {
    return localStorage.getItem('khaled_portfolio_lang');
  } catch (err) {
    console.warn('localStorage read bypassed (privacy/restricted environment):', err && err.message);
    return null;
  }
}

function setStoredLang(lang) {
  try {
    localStorage.setItem('khaled_portfolio_lang', lang);
  } catch (err) {
    console.warn('localStorage write bypassed (privacy/restricted environment):', err && err.message);
  }
}

class I18nManager {
  constructor() {
    let urlLang = null;
    try {
      urlLang = new URLSearchParams(window.location.search).get('lang');
    } catch {
      urlLang = null;
    }
    this.currentLang = (urlLang === 'ar' || urlLang === 'en')
      ? urlLang
      : (getStoredLang() || 'en');
    this.translations = {};
    this.subscribers = [];
  }

  async init() {
    let loadedTranslations = null;

    // 1. Primary relative path
    try {
      const res = await fetch('data/i18n.json');
      if (res.ok) loadedTranslations = await res.json();
    } catch {
      // Primary fetch threw a network error; fall through to fallback
    }

    // 2. Fallback absolute root path (executed at most once)
    if (!loadedTranslations) {
      try {
        const fallbackRes = await fetch('/data/i18n.json');
        if (fallbackRes.ok) {
          loadedTranslations = await fallbackRes.json();
        } else {
          console.warn(`Could not load i18n.json: HTTP ${fallbackRes.status}`);
        }
      } catch (err) {
        console.warn('Could not load i18n.json, fallback in place:', err);
      }
    }

    this.translations = loadedTranslations || {};
    this.applyLanguage(this.currentLang, false);
  }

  getLang() {
    return this.currentLang;
  }

  t(path, fallback = '') {
    const keys = path.split('.');
    let curr = this.translations;
    for (const k of keys) {
      if (!curr || typeof curr !== 'object') return fallback;
      curr = curr[k];
    }

    if (curr && typeof curr === 'object') {
      return curr[this.currentLang] || curr['en'] || fallback;
    }
    return curr || fallback;
  }

  getText(bilingualObj, fallback = '') {
    if (!bilingualObj) return fallback;
    if (typeof bilingualObj === 'string') return bilingualObj;
    return bilingualObj[this.currentLang] || bilingualObj['en'] || fallback;
  }

  toggleLanguage() {
    const nextLang = this.currentLang === 'en' ? 'ar' : 'en';
    this.applyLanguage(nextLang, true);
  }

  applyLanguage(lang, triggerSubscribers = true) {
    this.currentLang = lang;
    setStoredLang(lang);

    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    // Update body class for specific font and layout styling
    if (lang === 'ar') {
      document.body.classList.add('lang-ar');
      document.body.classList.remove('lang-en');
    } else {
      document.body.classList.add('lang-en');
      document.body.classList.remove('lang-ar');
    }

    // Update static DOM elements tagged with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = this.t(key, el.textContent);
      if (val) el.textContent = val;
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      const val = this.t(key);
      if (val) el.setAttribute('placeholder', val);
    });

    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      const key = el.getAttribute('data-i18n-title');
      const val = this.t(key);
      if (val) el.setAttribute('title', val);
    });

    // Update Language toggle button label
    const toggleBtns = document.querySelectorAll('.lang-toggle-btn');
    toggleBtns.forEach(btn => {
      const label = btn.querySelector('.lang-label');
      if (label) {
        label.textContent = lang === 'en' ? 'العربية' : 'English';
      }
    });

    if (triggerSubscribers) {
      this.subscribers.forEach(cb => cb(lang));
    }
  }

  onLanguageChange(callback) {
    if (typeof callback === 'function') {
      this.subscribers.push(callback);
    }
  }
}

export const i18n = new I18nManager();
