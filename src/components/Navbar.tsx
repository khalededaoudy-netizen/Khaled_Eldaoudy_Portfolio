import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Menu, X, Download, FileText, Globe } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { sound } from '../utils/soundEffects';

interface NavbarProps {
  soundEnabled: boolean;
  toggleSound: () => void;
  lang: 'en' | 'ar';
  toggleLang: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  soundEnabled,
  toggleSound,
  lang,
  toggleLang,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [egyptTime, setEgyptTime] = useState<string>('');
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Live Egypt Time
    const updateTime = () => {
      try {
        const now = new Date();
        const options: Intl.DateTimeFormatOptions = {
          timeZone: 'Africa/Cairo',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        };
        setEgyptTime(new Intl.DateTimeFormat('en-GB', options).format(now) + ' CAI');
      } catch {
        setEgyptTime('EGYPT UTC+2');
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  // Keyboard navigation & body scroll locking for mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: lang === 'en' ? 'About' : 'عن المهندس', href: '#about', index: '01' },
    { label: lang === 'en' ? 'Skills' : 'المهارات', href: '#skills', index: '02' },
    { label: lang === 'en' ? 'Projects' : 'المشاريع', href: '#projects', index: '03' },
    { label: lang === 'en' ? 'Competitions' : 'المسابقات', href: '#competitions', index: '04' },
    { label: lang === 'en' ? 'Leadership' : 'القيادة', href: '#leadership', index: '05' },
    { label: lang === 'en' ? 'Credentials' : 'الشهادات', href: '#certifications', index: '06' },
    { label: lang === 'en' ? 'Contact' : 'تواصل معي', href: '#contact', index: '07' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-dark-950/90 backdrop-blur-xl border-b border-steel-700/50 py-2.5 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'bg-transparent py-3 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Monogram */}
          <a
            href="#hero"
            onMouseEnter={() => sound.playHover()}
            onClick={() => sound.playClick()}
            className="flex items-center gap-2.5 sm:gap-3 group min-h-[44px] min-w-[44px] flex-shrink-0 focus-visible:ring-2 focus-visible:ring-lime"
          >
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-sm bg-dark-900 border border-steel-700/80 group-hover:border-lime flex items-center justify-center transition-colors">
              <span className="font-mono text-xs sm:text-sm font-bold tracking-tighter text-steel-100 group-hover:text-lime transition-colors">
                KE
              </span>
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-lime animate-ping" />
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-lime" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold tracking-wider text-steel-100 group-hover:text-white uppercase leading-tight">
                {lang === 'en' ? PERSONAL_INFO.shortName : PERSONAL_INFO.nameAr}
              </span>
              <span className="font-mono text-[9px] sm:text-[10px] text-steel-400 tracking-tight">
                MECHATRONICS // ZNU '26
              </span>
            </div>
          </a>

          {/* Center Telemetry Banner (Wide Desktop Only) */}
          <div className="hidden 2xl:flex items-center gap-3 px-3 py-1 rounded bg-dark-900/60 border border-steel-700/40 text-[11px] font-mono text-steel-400" aria-hidden="true">
            <span className="flex items-center gap-1.5 text-lime">
              <span className="w-1.5 h-1.5 rounded-full bg-lime" />
              SENIOR '26
            </span>
            <span className="text-steel-600">|</span>
            <span>10TH OF RAMADAN</span>
            <span className="text-steel-600">|</span>
            <span className="text-steel-200 tabular-nums">{egyptTime}</span>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-4 2xl:gap-5 text-xs font-mono" aria-label={lang === 'en' ? 'Desktop Main Navigation' : 'شريط التنقل الرئيسي'}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onMouseEnter={() => sound.playHover()}
                onClick={() => sound.playClick()}
                className="text-steel-400 hover:text-lime transition-colors flex items-center gap-1 py-1 focus-visible:ring-1 focus-visible:ring-lime"
              >
                <span className="text-[10px] text-steel-400">{link.index}.</span>
                <span>{link.label}</span>
              </a>
            ))}
          </nav>

          {/* Quick Action Controls */}
          <div className="flex items-center gap-2 sm:gap-2.5 flex-shrink-0">
            {/* Audio Toggle */}
            <button
              onClick={() => {
                toggleSound();
                sound.playClick();
              }}
              onMouseEnter={() => sound.playHover()}
              className={`min-h-[44px] min-w-[44px] px-2.5 sm:px-3 py-2 rounded border text-xs transition-colors flex items-center justify-center gap-1.5 ${
                soundEnabled
                  ? 'border-lime/60 text-lime bg-lime/10'
                  : 'border-steel-700 text-steel-400 hover:text-steel-200 bg-dark-900'
              }`}
              title={soundEnabled ? (lang === 'en' ? 'SFX ON: Mute sound effects' : 'SFX ON: كتم المؤثرات الصوتية') : (lang === 'en' ? 'SFX: Enable sound effects' : 'SFX: تشغيل المؤثرات الصوتية')}
              aria-label={soundEnabled ? (lang === 'en' ? 'SFX ON: Mute audio cues' : 'SFX ON: كتم المؤثرات الصوتية') : (lang === 'en' ? 'SFX: Enable mechanical audio feedback' : 'SFX: تشغيل المؤثرات الصوتية')}
              aria-pressed={soundEnabled}
            >
              {soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
              <span className="hidden md:inline font-mono text-[10px]">
                {soundEnabled ? 'SFX ON' : 'SFX'}
              </span>
            </button>

            {/* Language / RTL Preview Toggle */}
            <button
              onClick={() => {
                toggleLang();
                sound.playClick();
              }}
              onMouseEnter={() => sound.playHover()}
              className="min-h-[44px] min-w-[44px] px-2.5 sm:px-3 py-2 rounded border border-steel-700 hover:border-steel-500 text-steel-300 hover:text-white bg-dark-900 flex items-center justify-center gap-1.5 transition-colors"
              title={lang === 'en' ? 'عربي - Switch to Arabic mode' : 'EN - Switch to English mode'}
              aria-label={lang === 'en' ? 'عربي - Switch to Arabic language mode' : 'EN - Switch to English language mode'}
            >
              <Globe size={16} />
              <span className="font-mono text-[10px] font-semibold uppercase">
                {lang === 'en' ? 'عربي' : 'EN'}
              </span>
            </button>

            {/* Download CV Button */}
            <a
              href={PERSONAL_INFO.cvFile}
              download="Khaled_Hamdy_Eldaoudy_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => sound.playHover()}
              onClick={() => sound.playSuccess()}
              className="hidden sm:inline-flex items-center gap-1.5 min-h-[44px] px-3.5 py-2 rounded bg-lime hover:bg-lime-bright text-dark-950 font-mono text-xs font-bold transition-all shadow-[0_0_15px_rgba(200,242,2,0.25)] hover:shadow-[0_0_20px_rgba(200,242,2,0.45)]"
              aria-label={lang === 'en' ? 'CV (PDF) - Download Khaled Eldaoudy Resume' : 'CV (PDF) - تحميل السيرة الذاتية'}
            >
              <Download size={14} strokeWidth={2.5} />
              <span>CV (PDF)</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => {
                setMobileMenuOpen(!mobileMenuOpen);
                sound.playClick();
              }}
              className="xl:hidden min-h-[44px] min-w-[44px] p-2.5 rounded border border-steel-700 text-steel-200 hover:text-lime bg-dark-900 flex items-center justify-center transition-colors"
              aria-label={mobileMenuOpen ? (lang === 'en' ? 'Close navigation menu' : 'إغلاق القائمة') : (lang === 'en' ? 'Open navigation menu' : 'فتح القائمة')}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          ref={mobileMenuRef}
          className="xl:hidden bg-dark-950/98 backdrop-blur-2xl border-b border-steel-700/80 px-4 sm:px-6 py-6 transition-all duration-300 max-h-[85vh] overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label={lang === 'en' ? 'Mobile Navigation Menu' : 'قائمة التنقل للهواتف'}
        >
          <div className="flex flex-col gap-2 font-mono text-sm max-w-md mx-auto">
            <div className="pb-3 border-b border-steel-800 flex items-center justify-between text-xs text-steel-400">
              <span className="text-lime flex items-center gap-1.5 font-semibold">
                <span className="w-2 h-2 rounded-full bg-lime animate-pulse" />
                SYSTEM OPERATIONAL
              </span>
              <span className="tabular-nums">{egyptTime}</span>
            </div>

            <nav className="flex flex-col py-2" aria-label={lang === 'en' ? 'Mobile Navigation Links' : 'روابط القائمة'}>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    sound.playClick();
                  }}
                  className="flex items-center justify-between min-h-[44px] py-2.5 px-3 text-steel-300 hover:text-lime hover:bg-dark-900/60 rounded transition-colors border-b border-steel-900/80"
                >
                  <span className="font-sans font-medium text-base">{link.label}</span>
                  <span className="text-xs text-steel-400 font-mono">{link.index}</span>
                </a>
              ))}
            </nav>

            <div className="pt-3 flex flex-col gap-3">
              <a
                href={PERSONAL_INFO.cvFile}
                download="Khaled_Hamdy_Eldaoudy_CV.pdf"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full min-h-[44px] flex items-center justify-center gap-2 px-4 py-3 rounded bg-lime text-dark-950 font-bold text-xs font-mono"
              >
                <FileText size={16} />
                <span>{lang === 'en' ? 'DOWNLOAD OFFICIAL CV (PDF)' : 'تحميل السيرة الذاتية الرسمية (PDF)'}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
