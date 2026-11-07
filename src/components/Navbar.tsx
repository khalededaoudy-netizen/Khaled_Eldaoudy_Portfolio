import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Live Egypt Time (UTC+2)
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

  const navLinks = [
    { label: lang === 'en' ? 'About' : 'عن المهندس', href: '#about', index: '01' },
    { label: lang === 'en' ? 'Skills' : 'المهارات التقنية', href: '#skills', index: '02' },
    { label: lang === 'en' ? 'Projects' : 'المشاريع الهندسية', href: '#projects', index: '03' },
    { label: lang === 'en' ? 'Competitions' : 'المسابقات والجوائز', href: '#competitions', index: '04' },
    { label: lang === 'en' ? 'Leadership' : 'القيادة والخبرات', href: '#leadership', index: '05' },
    { label: lang === 'en' ? 'Credentials' : 'الشهادات والتدريب', href: '#certifications', index: '06' },
    { label: lang === 'en' ? 'Contact' : 'تواصل معي', href: '#contact', index: '07' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-dark-950/85 backdrop-blur-xl border-b border-steel-700/50 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#"
            onMouseEnter={() => sound.playHover()}
            onClick={() => sound.playClick()}
            className="flex items-center gap-3 group"
          >
            <div className="relative w-10 h-10 rounded-sm bg-dark-900 border border-steel-700/80 group-hover:border-lime flex items-center justify-center transition-colors">
              <span className="font-mono text-sm font-bold tracking-tighter text-steel-100 group-hover:text-lime transition-colors">
                KE
              </span>
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-lime animate-ping" />
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-lime" />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-xs font-bold tracking-wider text-steel-100 group-hover:text-white uppercase">
                Khaled Eldaoudy
              </span>
              <span className="font-mono text-[10px] text-steel-500 tracking-tight">
                MECHATRONICS // EMBEDDED
              </span>
            </div>
          </a>

          {/* Center Telemetry Banner (Desktop) */}
          <div className="hidden lg:flex items-center gap-4 px-3 py-1 rounded bg-dark-900/60 border border-steel-700/40 text-[11px] font-mono">
            <span className="flex items-center gap-1.5 text-lime">
              <span className="w-1.5 h-1.5 rounded-full bg-lime" />
              ZNU SENIOR '26
            </span>
            <span className="text-steel-600">|</span>
            <span className="text-steel-400">LOC: 10TH OF RAMADAN</span>
            <span className="text-steel-600">|</span>
            <span className="text-steel-300 tabular-nums">{egyptTime}</span>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-6 text-xs font-mono">
            {navLinks.slice(0, 5).map((link) => (
              <a
                key={link.href}
                href={link.href}
                onMouseEnter={() => sound.playHover()}
                onClick={() => sound.playClick()}
                className="text-steel-400 hover:text-lime transition-colors flex items-center gap-1 py-1"
              >
                <span className="text-[10px] text-steel-600">{link.index}.</span>
                <span>{link.label}</span>
              </a>
            ))}
          </nav>

          {/* Quick Action Controls */}
          <div className="flex items-center gap-2.5">
            {/* Audio Toggle */}
            <button
              onClick={() => {
                toggleSound();
                sound.playClick();
              }}
              onMouseEnter={() => sound.playHover()}
              className={`p-2 rounded border text-xs transition-colors flex items-center gap-1.5 ${
                soundEnabled
                  ? 'border-lime/60 text-lime bg-lime/10'
                  : 'border-steel-700 text-steel-400 hover:text-steel-200 bg-dark-900'
              }`}
              title={soundEnabled ? 'Mute audio cues' : 'Enable mechanical audio feedback'}
              aria-label="Toggle Sound"
            >
              {soundEnabled ? <Volume2 size={15} /> : <VolumeX size={15} />}
              <span className="hidden sm:inline font-mono text-[10px]">
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
              className="p-2 rounded border border-steel-700 hover:border-steel-500 text-steel-300 hover:text-white bg-dark-900 flex items-center gap-1.5 transition-colors"
              title="Toggle English / Arabic Mode"
              aria-label="Toggle Language"
            >
              <Globe size={15} />
              <span className="font-mono text-[10px] font-semibold uppercase">
                {lang === 'en' ? 'AR' : 'EN'}
              </span>
            </button>

            {/* Download CV Button */}
            <a
              href={PERSONAL_INFO.cvFile}
              download="Khaled_Hamdy_Eldaoudy_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => sound.playHover()}
              onClick={() => {
                sound.playSuccess();
              }}
              className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded bg-lime hover:bg-lime-bright text-dark-950 font-mono text-xs font-bold transition-all shadow-[0_0_15px_rgba(200,242,2,0.25)] hover:shadow-[0_0_20px_rgba(200,242,2,0.45)]"
            >
              <Download size={13} strokeWidth={2.5} />
              <span>DOWNLOAD CV</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => {
                setMobileMenuOpen(!mobileMenuOpen);
                sound.playClick();
              }}
              className="xl:hidden p-2 rounded border border-steel-700 text-steel-200 hover:text-lime bg-dark-900 transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-dark-950/98 backdrop-blur-2xl border-b border-steel-700/80 px-6 py-6 transition-all duration-300">
          <div className="flex flex-col gap-4 font-mono text-sm">
            <div className="pb-3 border-b border-steel-800 flex items-center justify-between text-xs text-steel-400">
              <span className="text-lime flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-lime animate-pulse" />
                SYSTEM OPERATIONAL
              </span>
              <span>{egyptTime}</span>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => {
                  setMobileMenuOpen(false);
                  sound.playClick();
                }}
                className="flex items-center justify-between py-2 text-steel-300 hover:text-lime transition-colors border-b border-steel-900"
              >
                <span>{link.label}</span>
                <span className="text-xs text-steel-600">{link.index}</span>
              </a>
            ))}

            <div className="pt-2 flex flex-col gap-3">
              <a
                href={PERSONAL_INFO.cvFile}
                download="Khaled_Hamdy_Eldaoudy_CV.pdf"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded bg-lime text-dark-950 font-bold text-xs font-mono"
              >
                <FileText size={15} />
                DOWNLOAD OFFICIAL CV (PDF)
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
