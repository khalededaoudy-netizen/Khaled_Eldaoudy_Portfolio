/**
 * config.js
 * 
 * Global configuration constants for Khaled Eldaoudy Portfolio.
 * Replace FORMSPREE_ENDPOINT with your active Formspree form ID.
 */

export const CONFIG = {
  // Replace this with your actual Formspree endpoint (e.g. "https://formspree.io/f/mqazklow")
  FORMSPREE_ENDPOINT: "https://formspree.io/f/placeholder_mechatronics",

  DEFAULT_LANG: "en",
  DEFAULT_THEME: "dark",

  // Social and contact links (Email & LinkedIn only; NO PHONE NUMBER)
  CONTACT: {
    email: "KhaledEdaoudy@gmail.com",
    linkedin: "https://linkedin.com/in/khaledeldaoudy",
    cvPath: "/assets/cv/Khaled_CV.pdf"
  },

  // Animation settings
  ANIMATION: {
    bootDurationMs: 1400,
    counterDurationSec: 1.8,
    circuitNodeCount: 38
  }
};

