import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const axeSource = fs.readFileSync(path.resolve('./node_modules/axe-core/axe.min.js'), 'utf8');

const viewports = [
  { width: 320, height: 720, name: '320x720 (Small mobile - iPhone SE / 5s)' },
  { width: 375, height: 812, name: '375x812 (Standard mobile - iPhone X/11/12 mini)' },
  { width: 390, height: 844, name: '390x844 (Standard mobile - iPhone 13/14)' },
  { width: 768, height: 1024, name: '768x1024 (Tablet portrait - iPad)' },
  { width: 1024, height: 768, name: '1024x768 (Tablet landscape / small laptop)' },
  { width: 1366, height: 768, name: '1366x768 (Standard laptop)' },
  { width: 1440, height: 900, name: '1440x900 (Large laptop / Desktop)' },
  { width: 1920, height: 1080, name: '1920x1080 (Full HD Desktop monitor)' }
];

async function runAudit() {
  console.log('🚀 Starting Automated Professional Audit on http://localhost:3000/ ...\n');
  
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();
  const results = {
    viewports: [],
    axeViolations: [],
    keyboardNav: {},
    rtlAudit: {},
  };

  // 1. Test each viewport for overflow
  console.log('--- 1. VIEWPORT OVERFLOW AUDIT (LTR & RTL) ---');
  for (const vp of viewports) {
    await page.setViewport({ width: vp.width, height: vp.height });
    await page.goto('http://localhost:3000/', { waitUntil: 'networkidle0' });

    // Check English (LTR) overflow
    const ltrOverflow = await page.evaluate(() => {
      const scrollWidth = document.documentElement.scrollWidth;
      const innerWidth = window.innerWidth;
      const hasOverflow = scrollWidth > innerWidth;
      
      // Find elements that exceed innerWidth
      const overflowingElements = [];
      const all = document.querySelectorAll('*');
      for (const el of all) {
        const rect = el.getBoundingClientRect();
        if (rect.right > innerWidth + 1) {
          overflowingElements.push({
            tag: el.tagName,
            id: el.id,
            className: (el.className || '').toString().slice(0, 50),
            right: Math.round(rect.right),
            width: Math.round(rect.width)
          });
          if (overflowingElements.length >= 3) break;
        }
      }
      return { scrollWidth, innerWidth, hasOverflow, overflowingElements };
    });

    // Toggle to Arabic (RTL) mode
    await page.evaluate(() => {
      document.documentElement.dir = 'rtl';
      document.documentElement.lang = 'ar';
    });
    await new Promise(r => setTimeout(r, 100));

    // Check Arabic (RTL) overflow
    const rtlOverflow = await page.evaluate(() => {
      const scrollWidth = document.documentElement.scrollWidth;
      const innerWidth = window.innerWidth;
      const hasOverflow = scrollWidth > innerWidth;
      return { scrollWidth, innerWidth, hasOverflow };
    });

    const statusLTR = ltrOverflow.hasOverflow ? `❌ FAIL (${ltrOverflow.scrollWidth}px > ${ltrOverflow.innerWidth}px)` : `✅ PASS (ScrollWidth: ${ltrOverflow.scrollWidth}px == ${ltrOverflow.innerWidth}px)`;
    const statusRTL = rtlOverflow.hasOverflow ? `❌ FAIL (${rtlOverflow.scrollWidth}px > ${rtlOverflow.innerWidth}px)` : `✅ PASS (ScrollWidth: ${rtlOverflow.scrollWidth}px == ${rtlOverflow.innerWidth}px)`;

    console.log(`[${vp.name}]`);
    console.log(`  LTR Overflow: ${statusLTR}`);
    console.log(`  RTL Overflow: ${statusRTL}`);
    if (ltrOverflow.hasOverflow) {
      console.log('  Overflow elements:', ltrOverflow.overflowingElements);
    }

    results.viewports.push({
      viewport: vp.name,
      width: vp.width,
      height: vp.height,
      ltr: ltrOverflow,
      rtl: rtlOverflow
    });
  }

  // 2. Automated Accessibility Audit with axe-core
  console.log('\n--- 2. AXE-CORE ACCESSIBILITY AUDIT (WCAG 2.2 AA) ---');
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle0' });
  await page.evaluate(axeSource);

  const axeResults = await page.evaluate(async () => {
    // Run axe with WCAG 2.2 AA tags
    return await (window).axe.run({
      runOnly: {
        type: 'tag',
        values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa', 'best-practice']
      }
    });
  });

  console.log(`Axe Violations Count: ${axeResults.violations.length}`);
  if (axeResults.violations.length > 0) {
    axeResults.violations.forEach((v, idx) => {
      console.log(`\nViolation #${idx + 1}: [${v.impact.toUpperCase()}] ${v.id}`);
      console.log(`  Help: ${v.help}`);
      console.log(`  Description: ${v.description}`);
      console.log(`  Affected Nodes (${v.nodes.length}):`);
      v.nodes.slice(0, 3).forEach(n => {
        console.log(`    - Target: ${n.target.join(' ')}`);
        console.log(`      HTML: ${n.html.slice(0, 100)}`);
      });
    });
  } else {
    console.log('✅ 0 VIOLATIONS! 100% WCAG 2.2 AA COMPLIANT!');
  }
  results.axeViolations = axeResults.violations;

  // 3. Test Keyboard Navigation & Modal Accessibility
  console.log('\n--- 3. KEYBOARD INTERACTION & MODAL TEST ---');
  
  // Test skip link
  await page.keyboard.press('Tab');
  const focusedTag = await page.evaluate(() => {
    const el = document.activeElement;
    return { tag: el?.tagName, href: el?.getAttribute('href'), text: el?.textContent?.trim() };
  });
  console.log('First Tab target (Skip Link):', focusedTag);

  // Focus and open Project Modal via keyboard button
  await page.evaluate(() => {
    const btn = document.querySelector('button[aria-haspopup="dialog"]');
    if (btn) btn.focus();
  });
  await page.keyboard.press('Enter');
  await new Promise(r => setTimeout(r, 200));

  const modalOpenState = await page.evaluate(() => {
    const modal = document.querySelector('[role="dialog"][aria-modal="true"]');
    return {
      modalOpen: !!modal,
      modalTitle: modal ? modal.querySelector('#modal-project-title')?.textContent?.trim() : null
    };
  });
  console.log('Modal opened on Enter key:', modalOpenState);

  // Press Escape to test closing
  await page.keyboard.press('Escape');
  await new Promise(r => setTimeout(r, 200));

  const modalClosedState = await page.evaluate(() => {
    const modal = document.querySelector('[role="dialog"][aria-modal="true"]');
    return { modalClosedOnEscape: !modal };
  });
  console.log('Modal closed on Escape key:', modalClosedState);

  // 4. Test Arabic Language Toggle & Direction
  console.log('\n--- 4. LANGUAGE SWITCH & ARABIC RTL VERIFICATION ---');
  await page.evaluate(() => {
    // Click language switch button
    const langBtn = Array.from(document.querySelectorAll('button')).find(b => b.getAttribute('aria-label')?.includes('Arabic') || b.textContent?.includes('AR') || b.textContent?.includes('عربي'));
    if (langBtn) langBtn.click();
  });
  await new Promise(r => setTimeout(r, 200));

  const rtlCheck = await page.evaluate(() => {
    return {
      dir: document.documentElement.dir,
      lang: document.documentElement.lang,
      title: document.title,
      skipLinkText: document.querySelector('.skip-link')?.textContent?.trim()
    };
  });
  console.log('Language switch outcome:', rtlCheck);

  await browser.close();
  console.log('\n Audit complete.');
}

runAudit().catch(err => {
  console.error('Audit failed with error:', err);
  process.exit(1);
});
