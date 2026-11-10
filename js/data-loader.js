/**
 * data-loader.js
 * 
 * Fetches all JSON data files asynchronously and renders into the
 * "Editorial Luxury" design system:
 * - Stately typographic metrics
 * - Asymmetric project showcases with luxury artwork
 * - Prestigious honors chronicle with gold laurel badges
 * - Architectural expertise grid with bespoke champagne gold technical symbols
 * - Industrial credentials & training monuments
 * - 6-part structured engineering specifications in project modal
 */

import { i18n } from './i18n.js';
import { generateBlueprintSVG } from './svg-placeholders.js';

function localizeDateStr(str, isAr) {
  if (!isAr || !str) return str;
  const monthMap = {
    'January': 'يناير', 'February': 'فبراير', 'March': 'مارس', 'April': 'أبريل',
    'May': 'مايو', 'June': 'يونيو', 'July': 'يوليو', 'August': 'أغسطس',
    'September': 'سبتمبر', 'October': 'أكتوبر', 'November': 'نوفمبر', 'December': 'ديسمبر',
    'Jan': 'يناير', 'Feb': 'فبراير', 'Mar': 'مارس', 'Apr': 'أبريل',
    'Jun': 'يونيو', 'Jul': 'يوليو', 'Aug': 'أغسطس',
    'Sep': 'سبتمبر', 'Oct': 'أكتوبر', 'Nov': 'نوفمبر', 'Dec': 'ديسمبر',
    'Present': 'حتى الآن'
  };
  let res = String(str);
  for (const [k, v] of Object.entries(monthMap)) {
    res = res.replace(new RegExp(`\\b${k}\\b`, 'g'), v);
  }
  return res;
}

const categoryMap = {
  embedded: { en: 'EMBEDDED', ar: 'أنظمة مدمجة' },
  robotics: { en: 'ROBOTICS', ar: 'روبوتات' },
  cad: { en: 'CAD / SIMULATION', ar: 'تصميم ومحاكاة' }
};

/**
 * Minimalist Technical Icons in Champagne Gold (replacing raw emojis)
 */
function getDisciplineIconSVG(catName = '', idx = 0) {
  const c = String(catName).toLowerCase();
  if (c.includes('embedded') || c.includes('firmware') || idx === 0) {
    return `<svg class="tech-symbol-gold" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C6A66B" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/></svg>`;
  }
  if (c.includes('control') || c.includes('simulation') || idx === 1) {
    return `<svg class="tech-symbol-gold" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C6A66B" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 12h4l3 8 4-16 3 8h4"/><circle cx="14" cy="4" r="1.5" fill="#C6A66B"/></svg>`;
  }
  if (c.includes('robotics') || c.includes('autonomous') || idx === 2) {
    return `<svg class="tech-symbol-gold" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C6A66B" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="5" r="2"/><circle cx="12" cy="19" r="2"/><circle cx="5" cy="12" r="2"/><circle cx="19" cy="12" r="2"/><path d="M12 7v10M7 12h10M6.5 6.5l11 11M6.5 17.5l11-11"/></svg>`;
  }
  if (c.includes('programming') || c.includes('ai') || idx === 3) {
    return `<svg class="tech-symbol-gold" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C6A66B" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/><line x1="14" y1="4" x2="10" y2="20"/></svg>`;
  }
  if (c.includes('cad') || c.includes('mechanical') || idx === 4) {
    return `<svg class="tech-symbol-gold" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C6A66B" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="8" y1="17" x2="16" y2="17"/></svg>`;
  }
  if (c.includes('multimedia') || c.includes('design') || idx === 5) {
    return `<svg class="tech-symbol-gold" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C6A66B" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m12 19 7-7 3 3-7 7-3-3z"/><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="m2 2 7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>`;
  }
  return `<svg class="tech-symbol-gold" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C6A66B" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="3"/><circle cx="19" cy="6" r="2"/><circle cx="5" cy="6" r="2"/><circle cx="19" cy="18" r="2"/><circle cx="5" cy="18" r="2"/><path d="M14.5 10.5 17.5 7.5M9.5 10.5 6.5 7.5M14.5 13.5 17.5 16.5M9.5 13.5 6.5 16.5"/></svg>`;
}

/**
 * 6-Part Architectural Engineering Specifications (100% strictly verified against CV & projects.json)
 */
const PROJECT_SPECS = {
  'proj-smart-home': {
    problem: {
      en: 'Standard residential appliances lack unified responsive automation, requiring distinct manual switching and lacking integrated fire/temperature security failsafes or remote authorization.',
      ar: 'افتقار الأجهزة المنزلية التقليدية لنظام تحكم واستشعار موحد، مما يؤدي لغياب استجابة الطوارئ والتحكم اللاسلكي الآمن.'
    },
    concept: {
      en: 'Multi-peripheral microcontroller architecture with real-time sensory polling (ADC), UART serial packet parsing, and discrete state-machine safety logic.',
      ar: 'معمارية متعددة الأجهزة الطرفية للمتحكم مع قراءة لحظية للمستشعرات عبر ADC، ومعالجة حزم تسلسلية عبر UART، ومنطق أمان متعدد الحالات.'
    },
    contribution: {
      en: 'Embedded Systems Developer in a team of 3; developed low-level C firmware on ATmega32, integrated ADC drivers for LM35/LDR, wrote LCD display routine and UART Bluetooth transceiver protocol.',
      ar: 'مطور أنظمة مدمجة ضمن فريق مكون من 3 مهندسين؛ كتابة البرمجيات الدقيقة بلغة C على ATmega32، وتطوير مشغلات ADC لمستشعرات LM35 و LDR، وبرمجة شاشة LCD وبروتوكول بلوتوث UART.'
    },
    implementation: {
      en: 'Designed and simulated complete schematic in Proteus VSM; programmed keypad password authentication with LCD feedback, Bluetooth mobile telemetry via UART, and PWM fan/light dimming.',
      ar: 'تصميم ومحاكاة الدائرة الإلكترونية بالكامل في برنامج Proteus قبل التنفيذ العملي؛ وبرمجة مصادقة كلمة المرور عبر لوحة المفاتيح، والتحكم اللاسلكي بالهاتف، وتوليد نبضات PWM للتحكم في السرعة والإضاءة.'
    },
    outcome: {
      en: 'Defended and certified as ITI Capstone Project (2025) before Information Technology Institute instructors with zero circuit faults.',
      ar: 'تم تقديم ومناقشة المشروع واعتماده بنجاح كمشروع تخرج بمعهد تكنولوجيا المعلومات (ITI) لعام 2025 أمام مدربي المعهد.'
    }
  },
  'proj-robotic-arm': {
    problem: {
      en: 'Repetitive industrial sorting and precise spatial transfer of payloads requiring multi-axis coordinated motion without human manual intervention.',
      ar: 'فرز ونقل الأحمال بدقة في بيئات العمل الصناعية التي تتطلب حركة متعددة المحاور بدون تدخل يدوي مباشر.'
    },
    concept: {
      en: 'Multi-degree-of-freedom kinematic chain with coordinated servo angular displacement and inverse kinematic geometric trajectory mapping.',
      ar: 'سلسلة حركية (Kinematics) متعددة درجات الحرية مع توزيع زوايا محركات السيرفو وتخطيط المسارات المكانية الدقيقة.'
    },
    contribution: {
      en: 'Designer & Developer; assembled multi-linkage mechanical chassis, mapped multi-channel PWM servo timing, and programmed pick-and-place spatial actuation routines.',
      ar: 'تصميم وتطوير كامل؛ بناء وتجميع الهيكل الميكانيكي، وبرمجة إشارات PWM متعددة القنوات للتحكم في زوايا المحركات ومسار الالتقاط والوضع.'
    },
    implementation: {
      en: 'Constructed articulated mechanical arm with end-effector gripper; coded multi-joint servo routines ensuring smooth angular acceleration and payload stability.',
      ar: 'بناء ذراع ميكانيكي متمفصل مع مقبض طرفي (gripper)؛ وبرمجة تسلسلات حركية متزامنة للمفاصل لمنع الاهتزاز والقصور الذاتي أثناء النقل.'
    },
    outcome: {
      en: 'Validated automated pick-and-place manipulation for mechatronics educational and industrial automation simulation.',
      ar: 'التحقق العملي من دقة مناولة الأجسام والالتقاط والوضع لأغراض المحاكاة التعليمية والصناعية المتقدمة.'
    }
  },
  'proj-earthquake-house': {
    problem: {
      en: 'Physical demonstration of civil structural vulnerability during seismic excitation and evaluation of automated safety cut-off mechanisms.',
      ar: 'المحاكاة العملية لتأثر المنشآت الهندسية بالاهتزازات الزلزالية واختبار آليات الاستجابة الآلية للطوارئ.'
    },
    concept: {
      en: 'Mechanical cam conversion of rotational DC motor torque into oscillatory linear harmonic motion; dynamic frequency regulation via PWM.',
      ar: 'تحويل العزم الدوراني لمحرك DC إلى حركة اهتزازية ترددية عبر ميكانيزم كامة ميكانيكي مخصص، مع ضبط التردد بنبضات PWM.'
    },
    contribution: {
      en: 'Designer & Developer; designed mechanical cam shake-table mechanism, built L298N driver circuitry, and programmed real-time SW-420 seismic threshold monitoring.',
      ar: 'تصميم وتطوير؛ تصميم كامة ميكانيكية مخصصة لمنصة الاهتزاز، وبناء دائرة القدرة باستخدام مشغل L298N، وبرمجة منطق مراقبة عتبات الاهتزاز عبر SW-420.'
    },
    implementation: {
      en: 'Engineered multi-level shake platform driven by GA25-370 motor and custom eccentric cam; integrated analog potentiometer for dynamic seismic speed control and automated servo emergency response.',
      ar: 'هندسة منصة اهتزاز بمستويات متعددة ومحرك تروس GA25-370؛ ودمج مقاومة متغيرة لتعديل سرعة الزلزال آلياً مع استجابة فورية لمستشعر الاهتزاز ومحرك السيرفو.'
    },
    outcome: {
      en: 'Successfully demonstrated structural dynamic resonance and automated emergency response for civil engineering and mechatronics education.',
      ar: 'عرض توضيحي وتعليمي ناجح لمحاكاة الرنين الميكانيكي واستجابة الطوارئ المؤتمتة لتطبيقات الهندسة المدنية والميكاترونكس.'
    }
  },
  'proj-vibration-alarm': {
    problem: {
      en: 'Detecting structural tampering, perimeter breaches, or mechanical anomalies with rapid physical containment before damage escalates.',
      ar: 'كشف التسلل ومحاولات الاختراق أو الاضطرابات الميكانيكية بالمنشآت وتوفير استجابة احتواء فيزيائية فورية.'
    },
    concept: {
      en: 'Piezoelectric vibration sensor threshold trigger with digital noise filtering and multi-channel audiovisual / electromechanical alerting.',
      ar: 'استشعار الاهتزاز الكهروضغطي (Piezoelectric) مع فلترة رقمية للضوضاء وتفعيل فوري لمنظومة إنذار كهروميكانيكية وصوتية.'
    },
    contribution: {
      en: 'Designer & Developer; calibrated SW-420 sensitivity threshold, designed alert circuit with buzzer/LEDs, and integrated servo-driven automated security barrier.',
      ar: 'تصميم وتطوير؛ معايرة حساسية مستشعر SW-420 لمنع الإنذارات الكاذبة، وبناء دائرة التنبيه مع صفارة الإنذار وLEDs، وربط بوابة أمان مؤتمتة بمحرك سيرفو.'
    },
    implementation: {
      en: 'Wired high-sensitivity piezo sensor to interrupt-enabled Arduino pins; programmed logic to actuate buzzer siren and rotate SG90 safety latch within milliseconds of impact.',
      ar: 'توصيل مستشعر الاهتزاز بدبابيس المقاطعة اللحظية في Arduino؛ وبرمجة منطق تشغيل صفارات التحذير وإغلاق قفل الأمان في أجزاء من الثانية عند رصد الصدمات.'
    },
    outcome: {
      en: 'Achieved high-reliability intrusion detection with zero false triggers under ambient baseline conditions.',
      ar: 'تحقيق أداء عالي الموثوقية في رصد الاهتزازات مع تجنب الإنذارات الكاذبة في ظروف التشغيل العادية.'
    }
  },
  'proj-line-follower': {
    problem: {
      en: 'High-speed autonomous trajectory tracking along complex unknown track contours while detecting and dynamically circumventing track obstacles.',
      ar: 'تتبع مسار عالي السرعة وبشكل ذاتي على مسارات معقدة غير معلومة مسبقاً، مع رصد العوائق وتفاديها في بيئة تنافسية.'
    },
    concept: {
      en: 'Closed-loop Proportional-Integral-Derivative (PID) control algorithm continuously computing steering correction from differential infrared sensor array readings.',
      ar: 'خوارزمية تحكم مغلقة الحلقة PID تحسب التصحيح التوجيهي اللحظي من الفروق التحليلية لمصفوفة مستشعرات الأشعة تحت الحمراء.'
    },
    contribution: {
      en: 'Designer & Developer; programmed closed-loop PID control algorithm, tuned Kp, Ki, Kd coefficients, and developed real-time obstacle avoidance routines.',
      ar: 'تصميم وتطوير؛ برمجة خوارزمية التحكم PID، وضبط المعاملات الرياضية Kp و Ki و Kd، وتطوير خوارزمية تفادي العوائق في الوقت الحقيقي.'
    },
    implementation: {
      en: 'Engineered lightweight dual-motor differential drive robot; implemented high-frequency sensor sampling loop with PID error reduction for smooth high-speed curve handling.',
      ar: 'هندسة روبوت تفاضلي خفيف الوزن؛ وبرمجة حلقة أخذ عينات عالية التردد لتصحيح زاوية الانحراف وضمان ثبات الروبوت عند المنعطفات السريعة.'
    },
    outcome: {
      en: 'Ranked 4th place out of 30+ competing teams at the prestigious IEEE Robotics Competition 2023.',
      ar: 'حقق المركز الرابع من بين أكثر من 30 فريقاً مشاركاً في مسابقة IEEE للروبوتات المرموقة لعام 2023.'
    }
  }
};

export class PortfolioDataManager {
  constructor() {
    this.data = {
      profile: null,
      projects: [],
      competitions: [],
      leadership: [],
      training: [],
      certificates: [],
      entrepreneurship: []
    };

    this.activeProjectFilter = 'all';
    this.selectedProject = null;
  }

  async fetchJSON(name) {
    // 1. Primary relative path
    try {
      const res = await fetch(`data/${name}`);
      if (res.ok) return await res.json();
    } catch {
      // Primary fetch threw a network error; fall through to fallback
    }

    // 2. Fallback absolute root path (executed at most once)
    try {
      const fallbackRes = await fetch(`/data/${name}`);
      if (fallbackRes.ok) return await fallbackRes.json();
      console.warn(`Could not load data/${name}: HTTP ${fallbackRes.status}`);
    } catch (err) {
      console.warn(`Could not load data/${name}:`, err);
    }

    return null;
  }

  async loadAll() {
    try {
      const [
        profile,
        projects,
        competitions,
        leadership,
        training,
        certificates,
        entrepreneurship
      ] = await Promise.all([
        this.fetchJSON('profile.json'),
        this.fetchJSON('projects.json'),
        this.fetchJSON('competitions.json'),
        this.fetchJSON('leadership.json'),
        this.fetchJSON('training.json'),
        this.fetchJSON('certificates.json'),
        this.fetchJSON('entrepreneurship.json')
      ]);

      if (profile) this.data.profile = profile;
      if (Array.isArray(projects)) this.data.projects = projects;
      if (Array.isArray(competitions)) this.data.competitions = competitions;
      if (Array.isArray(leadership)) this.data.leadership = leadership;
      if (Array.isArray(training)) this.data.training = training;
      if (Array.isArray(certificates)) this.data.certificates = certificates;
      if (Array.isArray(entrepreneurship)) this.data.entrepreneurship = entrepreneurship;
    } catch (err) {
      console.error('Failed to load portfolio data:', err);
    }
  }

  renderAll() {
    this.renderHero();
    this.renderAbout();
    this.renderSkills();
    this.renderProjects();
    this.renderCompetitions();
    this.renderLeadership();
    this.renderTraining();
    this.renderCertificates();
    this.renderEntrepreneurship();
  }

  // 1. Hero Metrics Rendering
  renderHero() {
    const profile = this.data.profile;
    if (!profile) return;

    // Bilingual Grand Editorial Title
    const grandTitle = document.getElementById('heroGrandTitle');
    if (grandTitle) {
      const isAr = i18n.getLang() === 'ar';
      if (isAr) {
        grandTitle.innerHTML = `
          <span class="title-serif-main">${i18n.t('hero.greeting')}</span>
          <span class="title-serif-italic">${i18n.t('hero.title_highlight')}</span>
          <span class="title-serif-sub">${i18n.t('hero.title_sub')}</span>
        `;
      } else {
        grandTitle.innerHTML = `
          <span class="title-serif-main">Engineering</span>
          <span class="title-serif-italic">Intelligence</span>
          <span class="title-serif-sub">at the Convergence of Mechanics &amp; Code.</span>
        `;
      }
    }

    // Lead text
    const leadEl = document.getElementById('heroLeadText');
    if (leadEl) {
      leadEl.textContent = i18n.t('hero.lead');
    }

    // Metrics Strip
    const statsContainer = document.getElementById('heroStats');
    if (statsContainer && Array.isArray(profile.stats)) {
      statsContainer.innerHTML = profile.stats.map(stat => `
        <div class="metric-block" data-stat-id="${stat.id}">
          <div class="metric-val font-mono">${stat.value}</div>
          <div class="metric-lbl font-mono">${i18n.getText(stat.label)}</div>
        </div>
      `).join('');
    }
  }

  // 2. About Section
  renderAbout() {
    const profile = this.data.profile;
    if (!profile) return;

    const bioEl = document.getElementById('aboutBioText');
    if (bioEl) {
      bioEl.textContent = i18n.getText(profile.bio);
    }

    const quoteEl = document.getElementById('aboutGrandQuote');
    if (quoteEl) {
      quoteEl.textContent = `“${i18n.t('about.quote')}”`;
    }

    const eduDegreeEl = document.getElementById('aboutEduDegree');
    const eduInstEl = document.getElementById('aboutEduInst');
    const eduStatusEl = document.getElementById('aboutEduStatus');

    if (profile.education) {
      if (eduDegreeEl) eduDegreeEl.textContent = i18n.getText(profile.education.degree);
      if (eduInstEl) eduInstEl.textContent = i18n.getText(profile.education.institution);
      if (eduStatusEl) eduStatusEl.textContent = i18n.getText(profile.education.status);
    }
  }

  // 3. Technical Expertise Matrix (Minimal Technical Symbols)
  renderSkills() {
    const profile = this.data.profile;
    if (!profile) return;

    const skillsContainer = document.getElementById('skillsGrid');
    if (skillsContainer && Array.isArray(profile.skills)) {
      skillsContainer.innerHTML = profile.skills.map((cat, idx) => `
        <article class="discipline-card">
          <div class="discipline-top font-mono">
            <span class="disc-num">0${idx + 1}</span>
            <span class="disc-icon" aria-hidden="true">${getDisciplineIconSVG(cat.category.en, idx)}</span>
          </div>
          <h3 class="discipline-title">${i18n.getText(cat.category)}</h3>
          <div class="discipline-tags-list font-mono">
            ${cat.items.map(item => `<span class="disc-tag">${item}</span>`).join('')}
          </div>
        </article>
      `).join('');
    }
  }

  // 4. Curated Projects Showcase (Asymmetric Editorial Layout)
  renderProjects() {
    const container = document.getElementById('projectsGrid');
    if (!container) return;

    const filtered = this.data.projects.filter(proj => {
      if (this.activeProjectFilter === 'all') return true;
      if (this.activeProjectFilter === 'embedded') return proj.category === 'embedded';
      if (this.activeProjectFilter === 'robotics') return proj.category === 'robotics';
      if (this.activeProjectFilter === 'cad') {
        return proj.category === 'cad' || proj.tech.some(t => /cam|cad|proteus|solidworks/i.test(t));
      }
      return true;
    });

    if (filtered.length === 0) {
      container.innerHTML = `<div class="empty-state-editorial font-mono">// NO SPECIFICATIONS REGISTERED UNDER THIS CATEGORY //</div>`;
      return;
    }

    const isRtl = i18n.getLang() === 'ar';

    container.innerHTML = filtered.map((proj, idx) => {
      const coverSrc = proj.cover || generateBlueprintSVG(i18n.getText(proj.title), proj.category, proj.platform, proj.slug);
      const isAlt = idx % 2 === 1;
      const catObj = categoryMap[proj.category];
      const catLabel = catObj ? (isRtl ? catObj.ar : catObj.en) : proj.category.toUpperCase();

      return `
        <article class="project-editorial-card ${isAlt ? 'layout-reversed' : ''}" data-project-id="${proj.id}">
          
          <!-- Visual Media Column -->
          <div class="project-media-column">
            <div class="project-artwork-frame">
              <img 
                src="${coverSrc}" 
                alt="${i18n.getText(proj.title)}" 
                loading="lazy" 
                class="project-artwork-img"
                onerror="this.src='${generateBlueprintSVG(i18n.getText(proj.title), proj.category, proj.platform, proj.slug)}'"
              />
              <div class="artwork-overlay-hairline" aria-hidden="true"></div>
            </div>
          </div>

          <!-- Editorial Meta & Narrative Column -->
          <div class="project-narrative-column">
            <div class="project-top-indices font-mono">
              <span class="project-seq">${isRtl ? 'مواصفة // 0' : 'SPEC // 0'}${idx + 1}</span>
              <span class="project-cat-badge">[ ${catLabel} ]</span>
              ${proj.year ? `<span class="project-yr-badge">${proj.year}</span>` : ''}
            </div>

            <h3 class="project-editorial-title" dir="auto">${i18n.getText(proj.title).replace(/\(([^)]+)\)/g, m => m.replace(/\s+/g, '\u00A0'))}</h3>
            
            ${proj.platform ? `
            <div class="project-platform-indicator font-mono">
              <span class="indicator-dot"></span>
              <span>${isRtl ? 'المنصة:' : 'PLATFORM:'} ${proj.platform}</span>
            </div>` : ''}

            <p class="project-brief-desc">${i18n.getText(proj.summary || proj.description)}</p>

            <div class="project-tags-row font-mono">
              ${proj.tech.slice(0, 5).map(t => `<span class="tech-tag">${t}</span>`).join('')}
              ${proj.tech.length > 5 ? `<span class="tech-tag-overflow">+${proj.tech.length - 5}</span>` : ''}
            </div>

            <div class="project-action-row">
              <button class="luxury-btn luxury-btn-sm luxury-btn-ghost font-mono editorial-view-btn" data-open-project="${proj.id}">
                <span>${isRtl ? 'فتح المواصفات الهندسية' : 'View Specification'}</span>
                <span class="btn-arrow" aria-hidden="true">&rarr;</span>
              </button>
            </div>
          </div>

        </article>
      `;
    }).join('');

    // Attach Click Events for Detail Modal
    container.querySelectorAll('[data-open-project]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-open-project');
        this.openProjectModal(id);
      });
    });
  }

  setProjectFilter(filter) {
    this.activeProjectFilter = filter;
    this.renderProjects();
  }

  // 6-Part Structured Engineering Project Modal
  openProjectModal(id) {
    const proj = this.data.projects.find(p => p.id === id);
    if (!proj) return;

    this.selectedProject = proj;
    const modal = document.getElementById('projectModal');
    if (!modal) return;

    const modalTitle = document.getElementById('modalTitle');
    const modalCategory = document.getElementById('modalCategory');
    const modalYear = document.getElementById('modalYear');
    const modalRole = document.getElementById('modalRole');
    const modalPlatform = document.getElementById('modalPlatform');
    const modalDescription = document.getElementById('modalDescription');
    const modalTech = document.getElementById('modalTechList');
    const modalGallery = document.getElementById('modalGallery');

    // Section text elements
    const modalProblem = document.getElementById('modalProblem');
    const modalConcept = document.getElementById('modalConcept');
    const modalContribution = document.getElementById('modalContribution');
    const modalImplementation = document.getElementById('modalImplementation');
    const modalOutcome = document.getElementById('modalOutcome');

    // Section label elements
    const modalLblProblem = document.getElementById('modalLblProblem');
    const modalLblConcept = document.getElementById('modalLblConcept');
    const modalLblContribution = document.getElementById('modalLblContribution');
    const modalLblStack = document.getElementById('modalLblStack');
    const modalLblImplementation = document.getElementById('modalLblImplementation');
    const modalLblOutcome = document.getElementById('modalLblOutcome');

    const isRtl = i18n.getLang() === 'ar';
    const catObj = categoryMap[proj.category];

    if (modalTitle) modalTitle.textContent = i18n.getText(proj.title);
    if (modalCategory) modalCategory.textContent = catObj ? (isRtl ? catObj.ar : catObj.en) : proj.category.toUpperCase();
    if (modalYear) {
      modalYear.textContent = proj.year || '';
      modalYear.style.display = proj.year ? 'inline-block' : 'none';
    }
    if (modalRole) modalRole.textContent = i18n.getText(proj.role);
    if (modalPlatform) modalPlatform.textContent = proj.platform;
    if (modalDescription) modalDescription.textContent = i18n.getText(proj.description);

    // Update Section Headings based on Language
    if (modalLblProblem) modalLblProblem.textContent = isRtl ? 'المشكلة والهدف الهندسي' : 'PROBLEM & OBJECTIVE';
    if (modalLblConcept) modalLblConcept.textContent = isRtl ? 'المفهوم الهندسي ونظرية العمل' : 'ENGINEERING CONCEPT & THEORY';
    if (modalLblContribution) modalLblContribution.textContent = isRtl ? 'المساهمة الفردية والدور التقني' : 'PERSONAL CONTRIBUTION & ROLE';
    if (modalLblStack) modalLblStack.textContent = isRtl ? 'العتاد والأدوات البرمجية المستخدمة' : 'HARDWARE & SOFTWARE STACK';
    if (modalLblImplementation) modalLblImplementation.textContent = isRtl ? 'التنفيذ والربط المعماري' : 'IMPLEMENTATION & ARCHITECTURE';
    if (modalLblOutcome) modalLblOutcome.textContent = isRtl ? 'النتائج الميدانية والتحقق العملي' : 'VALIDATION & VERIFIED OUTCOME';

    // Populate the 6 Structured Specifications
    const specData = PROJECT_SPECS[proj.id];
    if (specData) {
      if (modalProblem) modalProblem.textContent = isRtl ? specData.problem.ar : specData.problem.en;
      if (modalConcept) modalConcept.textContent = isRtl ? specData.concept.ar : specData.concept.en;
      if (modalContribution) modalContribution.textContent = isRtl ? specData.contribution.ar : specData.contribution.en;
      if (modalImplementation) modalImplementation.textContent = isRtl ? specData.implementation.ar : specData.implementation.en;
      if (modalOutcome) modalOutcome.textContent = isRtl ? specData.outcome.ar : specData.outcome.en;
    } else {
      // Graceful fallback for any additional projects
      if (modalProblem) modalProblem.textContent = i18n.getText(proj.summary || proj.description);
      if (modalConcept) modalConcept.textContent = proj.platform || 'Embedded Mechatronics Systems';
      if (modalContribution) modalContribution.textContent = i18n.getText(proj.role);
      if (modalImplementation) modalImplementation.textContent = i18n.getText(proj.description);
      if (modalOutcome) modalOutcome.textContent = isRtl ? 'تم التحقق من الوظائف الهندسية بنجاح.' : 'Engineering functionality successfully validated.';
    }

    if (modalTech) {
      modalTech.innerHTML = proj.tech.map(t => `<span class="tag-monochrome font-mono">${t}</span>`).join('');
    }

    if (modalGallery) {
      const images = (Array.isArray(proj.images) && proj.images.length > 0)
        ? proj.images
        : [proj.cover || generateBlueprintSVG(i18n.getText(proj.title), proj.category, proj.platform, proj.slug)];

      modalGallery.innerHTML = images.map(img => `
        <div class="modal-gallery-slide">
          <img 
            src="${img}" 
            alt="${i18n.getText(proj.title)}" 
            loading="lazy" 
            class="modal-gallery-img"
            onerror="this.src='${generateBlueprintSVG(i18n.getText(proj.title), proj.category, proj.platform, proj.slug)}'"
          />
        </div>
      `).join('');
    }

    modal.classList.add('active');
    document.body.classList.add('modal-open');
    modal.focus();
  }

  closeProjectModal() {
    const modal = document.getElementById('projectModal');
    if (modal) {
      modal.classList.remove('active');
      document.body.classList.remove('modal-open');
    }
  }

  // Certificate Preview Modal
  openCertificateModal(id) {
    const cert = this.data.certificates.find(c => c.id === id);
    if (!cert) return;

    const modal = document.getElementById('certificateModal');
    if (!modal) return;

    const isRtl = i18n.getLang() === 'ar';
    const modalTitle = document.getElementById('certModalTitle');
    const modalBadge = document.getElementById('certModalBadge');
    const modalYear = document.getElementById('certModalYear');
    const modalIssuerLbl = document.getElementById('certModalIssuerLbl');
    const modalIssuer = document.getElementById('certModalIssuer');
    const modalHostItem = document.getElementById('certModalHostItem');
    const modalHostLbl = document.getElementById('certModalHostLbl');
    const modalHost = document.getElementById('certModalHost');
    const modalTypeItem = document.getElementById('certModalTypeItem');
    const modalTypeLbl = document.getElementById('certModalTypeLbl');
    const modalType = document.getElementById('certModalType');
    const modalImage = document.getElementById('certModalImage');
    const modalSkillsContainer = document.getElementById('certModalSkillsContainer');
    const modalSkillsLbl = document.getElementById('certModalSkillsLbl');
    const modalSkillsList = document.getElementById('certModalSkillsList');

    if (modalTitle) modalTitle.textContent = i18n.getText(cert.title);
    if (modalBadge) {
      modalBadge.textContent = cert.type ? i18n.getText(cert.type) : (isRtl ? 'شهادة معتمدة' : 'VERIFIED CREDENTIAL');
    }
    if (modalYear) {
      if (cert.date) {
        modalYear.style.display = '';
        modalYear.textContent = localizeDateStr(cert.date, isRtl);
      } else {
        modalYear.style.display = 'none';
      }
    }

    if (modalIssuerLbl) modalIssuerLbl.textContent = isRtl ? 'الجهة المانحة:' : 'ISSUING BODY:';
    if (modalIssuer) modalIssuer.textContent = i18n.getText(cert.issuer);

    if (modalHostItem) {
      if (cert.host) {
        modalHostItem.style.display = '';
        if (modalHostLbl) modalHostLbl.textContent = isRtl ? 'الجهة المستضيفة:' : 'EVENT HOST:';
        if (modalHost) modalHost.textContent = i18n.getText(cert.host);
      } else {
        modalHostItem.style.display = 'none';
      }
    }

    if (modalTypeItem) {
      if (cert.type) {
        modalTypeItem.style.display = '';
        if (modalTypeLbl) modalTypeLbl.textContent = isRtl ? 'نوع الاعتماد:' : 'TYPE:';
        if (modalType) modalType.textContent = i18n.getText(cert.type);
      } else {
        modalTypeItem.style.display = 'none';
      }
    }

    const modalCategoryItem = document.getElementById('certModalCategoryItem');
    const modalCategoryLbl = document.getElementById('certModalCategoryLbl');
    const modalCategory = document.getElementById('certModalCategory');
    if (modalCategoryItem) {
      if (cert.category) {
        modalCategoryItem.style.display = '';
        if (modalCategoryLbl) modalCategoryLbl.textContent = isRtl ? 'المجال:' : 'CATEGORY:';
        if (modalCategory) modalCategory.textContent = i18n.getText(cert.category);
      } else {
        modalCategoryItem.style.display = 'none';
      }
    }

    const modalIdItem = document.getElementById('certModalIdItem');
    const modalIdLbl = document.getElementById('certModalIdLbl');
    const modalId = document.getElementById('certModalId');
    if (modalIdItem) {
      if (cert.credential_id) {
        modalIdItem.style.display = '';
        if (modalIdLbl) modalIdLbl.textContent = isRtl ? 'رقم الاعتماد:' : 'CERTIFICATE ID:';
        if (modalId) modalId.textContent = cert.credential_id;
      } else {
        modalIdItem.style.display = 'none';
      }
    }

    const modalTrainerItem = document.getElementById('certModalTrainerItem');
    const modalTrainerLbl = document.getElementById('certModalTrainerLbl');
    const modalTrainer = document.getElementById('certModalTrainer');
    if (modalTrainerItem) {
      if (cert.trainer) {
        modalTrainerItem.style.display = '';
        if (modalTrainerLbl) modalTrainerLbl.textContent = isRtl ? 'المدرب المشرف:' : 'INSTRUCTOR:';
        if (modalTrainer) modalTrainer.textContent = i18n.getText(cert.trainer);
      } else {
        modalTrainerItem.style.display = 'none';
      }
    }

    const modalDurationItem = document.getElementById('certModalDurationItem');
    const modalDurationLbl = document.getElementById('certModalDurationLbl');
    const modalDuration = document.getElementById('certModalDuration');
    if (modalDurationItem) {
      if (cert.duration) {
        modalDurationItem.style.display = '';
        if (modalDurationLbl) modalDurationLbl.textContent = isRtl ? 'المدة:' : 'DURATION:';
        if (modalDuration) modalDuration.textContent = i18n.getText(cert.duration);
      } else {
        modalDurationItem.style.display = 'none';
      }
    }

    const modalDesc = document.getElementById('certModalDescription');
    if (modalDesc) {
      if (cert.description) {
        modalDesc.style.display = '';
        modalDesc.textContent = i18n.getText(cert.description);
      } else {
        modalDesc.style.display = 'none';
      }
    }

    if (modalImage && cert.image) {
      modalImage.src = cert.image;
      modalImage.alt = i18n.getText(cert.title);
    }

    if (modalSkillsContainer) {
      if (Array.isArray(cert.skills) && cert.skills.length > 0) {
        modalSkillsContainer.style.display = '';
        if (modalSkillsLbl) modalSkillsLbl.textContent = isRtl ? 'المهارات والخبرات المرتبطة' : 'RELATED COMPETENCIES & SKILLS';
        if (modalSkillsList) {
          modalSkillsList.innerHTML = cert.skills.map(s => `<span class="tag-monochrome font-mono">${s}</span>`).join('');
        }
      } else {
        modalSkillsContainer.style.display = 'none';
      }
    }

    modal.classList.add('active');
    document.body.classList.add('modal-open');
    modal.focus();
  }

  closeCertificateModal() {
    const modal = document.getElementById('certificateModal');
    if (modal) {
      modal.classList.remove('active');
      document.body.classList.remove('modal-open');
    }
  }

  // Lightbox Modal for Event Galleries
  openLightbox(src, caption) {
    const modal = document.getElementById('imageLightboxModal');
    if (!modal) return;

    const img = document.getElementById('lightboxImage');
    const cap = document.getElementById('lightboxCaption');

    if (img && src) {
      img.src = src;
      img.alt = caption || 'Event Photograph';
    }
    if (cap && caption) {
      cap.textContent = caption;
    }

    modal.classList.add('active');
    document.body.classList.add('modal-open');
    modal.focus();
  }

  closeLightbox() {
    const modal = document.getElementById('imageLightboxModal');
    if (modal) {
      modal.classList.remove('active');
      document.body.classList.remove('modal-open');
    }
  }

  // 5. Honors & Competitions (Prestigious Chronicle)
  renderCompetitions() {
    const container = document.getElementById('competitionsTimeline');
    if (!container) return;

    const isRtl = i18n.getLang() === 'ar';
    const romanNumerals = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII'];

    container.innerHTML = this.data.competitions.map((comp, idx) => {
      const isRank2 = comp.rank === 2;
      const hasRank = comp.rank !== null && comp.rank !== undefined;

      const rawDateStr = (comp.month && comp.month !== String(comp.year) && comp.month.trim() !== '')
        ? `${comp.month} ${comp.year}`
        : String(comp.year);
      const dateStr = localizeDateStr(rawDateStr, isRtl);

      let awardBadge = '';
      if (isRank2) {
        awardBadge = `<span class="award-laurel-badge gold-laurel font-mono">🥈 ${isRtl ? 'المركز الثاني' : '2ND PLACE'}</span>`;
      } else if (hasRank) {
        awardBadge = `<span class="award-laurel-badge font-mono">${isRtl ? `المركز ${comp.rank}` : `RANK ${comp.rank}`}</span>`;
      } else {
        awardBadge = `<span class="award-laurel-badge neutral-laurel font-mono">⭐ ${isRtl ? 'شهادة تقدير' : 'RECOGNITION'}</span>`;
      }

      return `
        <article class="honor-entry ${isRank2 ? 'honor-featured' : ''}" data-comp-id="${comp.id}">
          <div class="honor-header font-mono">
            <span class="honor-roman">${romanNumerals[idx] || `0${idx + 1}`}</span>
            <span class="honor-date">${dateStr}</span>
            ${awardBadge}
          </div>

          <h3 class="honor-title">${i18n.getText(comp.name)}</h3>
          <div class="honor-organizer font-mono">
            <span>🏛️ ${i18n.getText(comp.organizer)}</span>
            ${comp.team ? ` &bull; <span class="honor-team-label">👥 ${i18n.getText(comp.team)}</span>` : ''}
          </div>
          
          <div class="honor-citation font-mono">
            <span class="citation-icon" aria-hidden="true">🏆</span>
            <span class="citation-text">${i18n.getText(comp.result)}</span>
          </div>

          ${comp.role ? `
            <div class="honor-role-line font-mono">
              <span>⚙️ ${isRtl ? 'الدور والمسؤولية:' : 'Role & Responsibility:'} <strong>${i18n.getText(comp.role)}</strong></span>
            </div>
          ` : ''}

          ${Array.isArray(comp.images) && comp.images.length > 0 ? `
            <div class="competition-gallery-grid">
              ${comp.images.map((imgSrc, imgIdx) => `
                <div class="competition-gallery-item"
                     role="button"
                     tabindex="0"
                     data-img-src="${imgSrc}"
                     data-caption="${i18n.getText(comp.name)}"
                     aria-label="${isRtl ? 'تكبير صورة المسابقة ' + (imgIdx + 1) : 'Enlarge competition photograph ' + (imgIdx + 1)}">
                  <img src="${imgSrc}" alt="${i18n.getText(comp.name)} - ${imgIdx + 1}" class="competition-gallery-thumb" loading="lazy" />
                  <div class="gallery-item-overlay">
                    <span class="gallery-zoom-icon font-mono">
                      <span>🔍</span>
                      <span>${isRtl ? 'تكبير' : 'Enlarge'}</span>
                    </span>
                  </div>
                </div>
              `).join('')}
            </div>
          ` : ''}

          <p class="honor-narrative">${i18n.getText(comp.description)}</p>

          ${Array.isArray(comp.skills) && comp.skills.length > 0 ? `
            <div class="honor-tags font-mono">
              ${comp.skills.map(s => `<span class="tag-monochrome">${s}</span>`).join('')}
            </div>
          ` : ''}
        </article>
      `;
    }).join('');

    // Attach click and keyboard listeners for competition gallery thumbnails
    container.querySelectorAll('.competition-gallery-item').forEach(itemEl => {
      const src = itemEl.getAttribute('data-img-src');
      const caption = itemEl.getAttribute('data-caption') || '';
      itemEl.addEventListener('click', () => this.openLightbox(src, caption));
      itemEl.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.openLightbox(src, caption);
        }
      });
    });
  }

  // 6. Leadership & Governance
  renderLeadership() {
    const container = document.getElementById('leadershipGrid');
    if (!container) return;

    const isRtl = i18n.getLang() === 'ar';

    container.innerHTML = this.data.leadership.map((item, idx) => {
      const hasGallery = Array.isArray(item.images) && item.images.length > 0;
      const displayTitle = item.title ? i18n.getText(item.title) : i18n.getText(item.role);
      const descText = i18n.getText(item.description);
      const descHtml = descText
        .split('\n\n')
        .map(paragraph => `<p class="leadership-narrative-text">${paragraph.replace(/\n/g, '<br>')}</p>`)
        .join('');

      return `
        <article class="leadership-editorial-card ${hasGallery ? 'has-gallery' : ''}" data-lead-id="${item.id}">
          <div class="leadership-top font-mono">
            <span class="gov-idx">${isRtl ? 'القيادة والمجتمع // 0' : 'GOVERNANCE // 0'}${idx + 1}</span>
            <span class="gov-period">${localizeDateStr(item.period, isRtl)}</span>
          </div>

          <h3 class="leadership-role-title">${displayTitle}</h3>

          ${item.title && item.role ? `
            <div class="leadership-role-badge font-mono">
              <span>🎖️ ${i18n.getText(item.role)}</span>
            </div>
          ` : ''}

          <div class="leadership-meta-strip font-mono">
            <span class="leadership-org-label">🏛️ ${i18n.getText(item.organization)}</span>
            ${item.event ? `<span class="leadership-event-tag">• 📍 ${i18n.getText(item.event)}</span>` : ''}
          </div>

          ${item.patronage ? `
            <div class="leadership-patronage">
              <p class="patronage-text font-mono">✦ ${i18n.getText(item.patronage)}</p>
            </div>
          ` : ''}

          ${hasGallery ? `
            <div class="leadership-gallery-grid">
              ${item.images.map((imgSrc, imgIdx) => `
                <div class="leadership-gallery-item"
                     role="button"
                     tabindex="0"
                     data-img-src="${imgSrc}"
                     data-caption="${displayTitle}"
                     aria-label="${isRtl ? 'عرض صورة المعرض ' + (imgIdx + 1) + ' بدقة كاملة' : 'View event photograph ' + (imgIdx + 1) + ' in full resolution'}">
                  <img src="${imgSrc}" alt="${displayTitle} - ${imgIdx + 1}" class="leadership-gallery-thumb" loading="lazy" />
                  <div class="gallery-item-overlay">
                    <span class="gallery-zoom-icon font-mono">
                      <span>🔍</span>
                      <span>${isRtl ? 'تكبير' : 'Enlarge'}</span>
                    </span>
                  </div>
                </div>
              `).join('')}
            </div>
          ` : ''}

          <div class="leadership-narrative-group">
            ${descHtml}
          </div>
        </article>
      `;
    }).join('');

    // Attach click and keyboard listeners for gallery thumbnails
    container.querySelectorAll('.leadership-gallery-item').forEach(itemEl => {
      const src = itemEl.getAttribute('data-img-src');
      const caption = itemEl.getAttribute('data-caption') || '';
      itemEl.addEventListener('click', () => this.openLightbox(src, caption));
      itemEl.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.openLightbox(src, caption);
        }
      });
    });
  }

  // 7. Industrial Training & Credentials
  renderTraining() {
    const container = document.getElementById('trainingCards');
    if (!container) return;

    const isRtl = i18n.getLang() === 'ar';

    container.innerHTML = this.data.training.map(item => {
      const isFeatured = Boolean(item.topics || item.image || (item.images && item.images.length > 0) || item.final_project);
      const descText = i18n.getText(item.description);
      const descHtml = descText
        .split('\n\n')
        .map(paragraph => `<p>${paragraph.replace(/\n/g, '<br>')}</p>`)
        .join('');

      const hasMultiGallery = Array.isArray(item.images) && item.images.length > 1;
      const singleImage = item.image || (Array.isArray(item.images) && item.images.length === 1 ? item.images[0] : null);

      return `
        <article class="training-program-card ${isFeatured ? 'featured-training' : ''}" data-train-id="${item.id}">
          <div class="training-top-row font-mono">
            <div class="training-badges-group">
              ${item.duration ? `<span class="training-duration-tag">⏱️ ${i18n.getText(item.duration)}</span>` : ''}
              ${item.format ? `<span class="training-format-tag">📡 ${i18n.getText(item.format)}</span>` : ''}
              ${item.type ? `<span class="training-type-tag">⚙️ ${i18n.getText(item.type)}</span>` : ''}
              ${item.location ? `<span class="training-location-tag">📍 ${i18n.getText(item.location)}</span>` : ''}
              ${item.period ? `<span class="training-period-tag">${localizeDateStr(item.period, isRtl)}</span>` : ''}
            </div>
            ${item.hours ? `<span class="training-monument-hours"><strong>${item.hours}</strong> ${i18n.t('training.hours_suffix')}</span>` : ''}
          </div>

          <h3 class="training-program-title">${i18n.getText(item.program)}</h3>

          <div class="training-provider-line font-mono">
            <span>🏢 ${i18n.getText(item.provider || item.organization)}</span>
            ${item.training_center ? `<span class="training-center-span">• 🏛️ ${i18n.getText(item.training_center)}</span>` : ''}
            ${item.parent_organization ? `<span class="training-parent-org">• 🏛️ ${i18n.getText(item.parent_organization)}</span>` : ''}
          </div>

          ${item.trainer ? `
            <div class="training-trainer-line font-mono">
              <span>👨‍🏫 ${isRtl ? 'المدرب المشرف:' : 'Instructor / Trainer:'} <strong>${i18n.getText(item.trainer)}</strong></span>
            </div>
          ` : ''}

          ${item.score ? `
            <div class="training-score-badge font-mono">
              ${isRtl ? 'النتيجة:' : 'SCORE:'} <strong>${item.score}</strong>
            </div>
          ` : ''}

          ${hasMultiGallery ? `
            <div class="training-gallery-grid">
              ${item.images.map((imgSrc, imgIdx) => `
                <div class="training-gallery-item"
                     role="button"
                     tabindex="0"
                     data-img-src="${imgSrc}"
                     data-caption="${i18n.getText(item.program)}"
                     aria-label="${isRtl ? 'تكبير صورة التدريب ' + (imgIdx + 1) : 'Enlarge training photograph ' + (imgIdx + 1)}">
                  <img src="${imgSrc}" alt="${i18n.getText(item.program)} - ${imgIdx + 1}" class="training-gallery-thumb" loading="lazy" />
                  <div class="gallery-item-overlay">
                    <span class="gallery-zoom-icon font-mono">
                      <span>🔍</span>
                      <span>${isRtl ? 'تكبير' : 'Enlarge'}</span>
                    </span>
                  </div>
                </div>
              `).join('')}
            </div>
          ` : singleImage ? `
            <div class="training-visual-preview"
                 role="button"
                 tabindex="0"
                 data-img-src="${singleImage}"
                 data-caption="${i18n.getText(item.program)}"
                 aria-label="${isRtl ? 'تكبير صورة التدريب بدقة كاملة' : 'Enlarge training photograph in full resolution'}">
              <img src="${singleImage}" alt="${i18n.getText(item.program)}" class="training-img-thumb" loading="lazy" />
              <div class="training-img-overlay">
                <span class="gallery-zoom-icon font-mono">
                  <span>🔍</span>
                  <span>${isRtl ? 'تكبير الصورة' : 'View Full Image'}</span>
                </span>
              </div>
            </div>
          ` : ''}

          <div class="training-narrative-group">
            ${descHtml}
          </div>

          ${Array.isArray(item.topics) && item.topics.length > 0 ? `
            <div class="training-curriculum-block">
              <h4 class="curriculum-heading font-mono">
                <span>⚡ ${isRtl ? 'الموضوعات التي تعلمتها (Core Curriculum)' : 'Core Curriculum & Technical Competencies'}</span>
              </h4>
              <div class="curriculum-grid">
                ${item.topics.map(t => {
                  const points = i18n.getText(t.points);
                  const pointsArr = Array.isArray(points) ? points : [];
                  return `
                    <div class="curriculum-topic-card">
                      <h5 class="topic-title font-mono">${i18n.getText(t.title)}</h5>
                      <ul class="topic-points-list">
                        ${pointsArr.map(pt => `<li>${pt}</li>`).join('')}
                      </ul>
                    </div>
                  `;
                }).join('')}
              </div>
            </div>
          ` : ''}

          ${item.final_project ? `
            <div class="training-capstone-showcase">
              <div class="capstone-header">
                ${item.final_project.badge ? `<span class="capstone-badge font-mono">🏆 ${i18n.getText(item.final_project.badge)}</span>` : ''}
                <h4 class="capstone-title font-mono">${i18n.getText(item.final_project.title)}</h4>
              </div>
              <p class="capstone-desc">${i18n.getText(item.final_project.description)}</p>
            </div>
          ` : ''}

          ${item.certificate_id ? `
            <div class="training-certificate-action">
              <button type="button" class="training-cert-btn font-mono" data-open-cert="${item.certificate_id}">
                <span>📜 ${isRtl ? 'عرض الشهادة المعتمدة' : 'View Accredited Certificate'}</span>
                <span class="cert-btn-arrow" aria-hidden="true">&rarr;</span>
              </button>
            </div>
          ` : ''}
        </article>
      `;
    }).join('');

    // Attach click and keyboard listeners for training visual preview
    container.querySelectorAll('.training-visual-preview').forEach(previewEl => {
      const src = previewEl.getAttribute('data-img-src');
      const caption = previewEl.getAttribute('data-caption') || '';
      previewEl.addEventListener('click', () => this.openLightbox(src, caption));
      previewEl.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.openLightbox(src, caption);
        }
      });
    });

    // Attach click and keyboard listeners for training gallery thumbnails
    container.querySelectorAll('.training-gallery-item').forEach(itemEl => {
      const src = itemEl.getAttribute('data-img-src');
      const caption = itemEl.getAttribute('data-caption') || '';
      itemEl.addEventListener('click', () => this.openLightbox(src, caption));
      itemEl.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.openLightbox(src, caption);
        }
      });
    });

    // Attach click listeners for training certificate buttons
    container.querySelectorAll('.training-cert-btn').forEach(btn => {
      const certId = btn.getAttribute('data-open-cert');
      btn.addEventListener('click', () => this.openCertificateModal(certId));
    });
  }

  renderCertificates() {
    const container = document.getElementById('certsGrid');
    if (!container) return;

    const isRtl = i18n.getLang() === 'ar';

    container.innerHTML = this.data.certificates.map(cert => {
      const hasImage = Boolean(cert.image && cert.image.trim() !== '');
      const typeBadge = cert.type ? i18n.getText(cert.type) : (isRtl ? 'معتمد' : 'ACCREDITED');
      const isTeam2nd = cert.type && (i18n.getText(cert.type).includes('2nd') || i18n.getText(cert.type).includes('الثاني'));
      const stampIcon = isTeam2nd ? '🥈' : '✦';

      return `
        <article class="credential-item-card ${hasImage ? 'has-image' : ''}" data-cert-id="${cert.id}" ${hasImage ? 'role="button" tabindex="0" aria-label="' + (isRtl ? 'عرض الشهادة المعتمدة' : 'View Verified Credential') + '"' : ''}>
          <div class="credential-stamp font-mono ${isTeam2nd ? 'gold-stamp' : ''}">
            <span class="stamp-seal">${stampIcon}</span>
            <span>${typeBadge}</span>
          </div>

          ${hasImage ? `
            <div class="credential-preview-frame">
              <img src="${cert.image}" alt="${i18n.getText(cert.title)}" loading="lazy" />
              <div class="credential-preview-overlay">
                <span class="credential-zoom-badge font-mono">
                  <span>🔍</span>
                  <span>${isRtl ? 'عرض الشهادة بدقة كاملة' : 'Click to View Full Certificate'}</span>
                </span>
              </div>
            </div>
          ` : ''}

          <h4 class="credential-name">${i18n.getText(cert.title)}</h4>
          <p class="credential-issuer font-mono">
            🏛️ ${i18n.getText(cert.issuer)}
            ${cert.team ? ` &bull; <span class="credential-team-badge">👥 ${i18n.getText(cert.team)}</span>` : ''}
            ${cert.host ? ` &bull; ${isRtl ? 'المستضيف:' : 'Host:'} ${i18n.getText(cert.host)}` : ''}
            ${cert.trainer ? ` &bull; ${isRtl ? 'المدرب:' : 'Trainer:'} ${i18n.getText(cert.trainer)}` : ''}
            ${cert.duration ? ` &bull; ⏱️ ${i18n.getText(cert.duration)}` : ''}
            ${cert.date ? ` &bull; ${localizeDateStr(cert.date, isRtl)}` : ''}
          </p>

          ${cert.category ? `
            <div class="credential-category-tag font-mono">
              <span>🌐 ${i18n.getText(cert.category)}</span>
            </div>
          ` : ''}

          ${cert.score ? `
            <div class="training-score-badge font-mono" style="margin: 0.35rem 0;">
              ${isRtl ? 'النتيجة النهائية:' : 'FINAL SCORE:'} <strong>${cert.score}</strong>
            </div>
          ` : ''}

          ${cert.credential_id ? `
            <div class="credential-id-badge font-mono">
              <span class="cert-id-label">${isRtl ? 'رقم الاعتماد:' : 'ID:'}</span>
              <code class="cert-id-code">${cert.credential_id}</code>
            </div>
          ` : ''}

          ${cert.description ? `
            <p class="credential-summary-p">${i18n.getText(cert.description).split('\n\n')[0]}</p>
          ` : ''}

          ${cert.role ? `
            <div class="credential-role-line font-mono">
              <span>⚙️ ${isRtl ? 'المسؤولية الشخصية:' : 'Personal Responsibility:'} <strong>${i18n.getText(cert.role)}</strong></span>
            </div>
          ` : ''}

          ${cert.competition_id ? `
            <div class="credential-honor-link font-mono">
              <a href="#competitions" class="honor-anchor-link">
                <span>🏆 ${
                  cert.competition_id === 'comp-robosoccer-2025'
                    ? (isRtl ? 'مرتبط بإنجاز مسابقة RoboSoccer' : 'Linked to RoboSoccer Honor')
                    : cert.competition_id === 'comp-error-sumo-2025'
                      ? (isRtl ? 'مرتبط بمسابقة Error 2025 – تحدي السومو' : 'Linked to Error Competition 2025 – Sumo Robot')
                      : (isRtl ? 'مرتبط بإنجاز المسابقات' : 'Linked to Competition Honor')
                } &rarr;</span>
              </a>
            </div>
          ` : ''}

          ${cert.training_id ? `
            <div class="credential-honor-link font-mono">
              <a href="#training" class="honor-anchor-link">
                <span>⚙️ ${isRtl ? 'مرتبط ببرنامج التدريب الفني' : 'Linked to Technical Training Experience'} &rarr;</span>
              </a>
            </div>
          ` : ''}

          ${Array.isArray(cert.skills) && cert.skills.length > 0 ? `
            <div class="credential-tags-row font-mono">
              ${cert.skills.slice(0, 4).map(s => `<span class="tag-monochrome">${s}</span>`).join('')}
              ${cert.skills.length > 4 ? `<span class="tag-monochrome tag-more">+${cert.skills.length - 4}</span>` : ''}
            </div>
          ` : ''}
        </article>
      `;
    }).join('');

    // Attach click and keyboard listeners for certificate preview
    container.querySelectorAll('.credential-item-card.has-image').forEach(card => {
      const id = card.getAttribute('data-cert-id');
      card.addEventListener('click', () => this.openCertificateModal(id));
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.openCertificateModal(id);
        }
      });
    });
  }

  // 8. Entrepreneurship & Commercial Ventures
  renderEntrepreneurship() {
    const container = document.getElementById('entrepreneurshipGrid');
    if (!container) return;

    const isRtl = i18n.getLang() === 'ar';

    container.innerHTML = this.data.entrepreneurship.map((item, idx) => `
      <article class="venture-editorial-card">
        <div class="venture-top-bar font-mono">
          <span class="venture-idx">${isRtl ? 'مبادرة تجارية // 0' : 'COMMERCIAL INITIATIVE // 0'}${idx + 1}</span>
          <span class="venture-period">${localizeDateStr(item.period, isRtl)}</span>
        </div>
        <h3 class="venture-title">${i18n.getText(item.title)}</h3>
        <div class="venture-role font-mono">${i18n.getText(item.role)} &bull; <span class="venture-platform-tag">${item.platform}</span></div>
        <p class="venture-summary">${i18n.getText(item.description)}</p>
        <div class="venture-tag-list font-mono">
          ${item.tags.map(t => `<span class="tag-monochrome">${t}</span>`).join('')}
        </div>
      </article>
    `).join('');
  }
}

export const dataManager = new PortfolioDataManager();
