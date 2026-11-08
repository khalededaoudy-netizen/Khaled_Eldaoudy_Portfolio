import React from 'react';
import { ArrowDown, Download, ChevronRight, Cpu, Compass, Activity, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ThreeHeroCanvas } from './ThreeHeroCanvas';
import { sound } from '../utils/soundEffects';

interface HeroProps {
  lang: 'en' | 'ar';
}

export const Hero: React.FC<HeroProps> = ({ lang }) => {
  return (
    <section id="hero" className="relative min-h-screen w-full pt-20 sm:pt-24 pb-12 flex flex-col justify-between overflow-hidden bg-tech-grid" aria-labelledby="hero-title">
      {/* Subtle Ambient Radial Lighting */}
      <div className="absolute top-1/4 right-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-lime/5 rounded-full blur-[100px] sm:blur-[130px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-10 left-10 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-cyan-telemetry/5 rounded-full blur-[90px] sm:blur-[110px] pointer-events-none" aria-hidden="true" />

      {/* Main Grid Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Expressive Editorial Typography & Copy */}
          <div className="lg:col-span-7 flex flex-col space-y-5 sm:space-y-6 pt-2 sm:pt-4 lg:pt-0">
            
            {/* Status Line */}
            <div
              className="inline-flex items-center gap-2.5 sm:gap-3 w-fit px-3 sm:px-3.5 py-1.5 rounded-full bg-dark-900/90 border border-steel-700/60 shadow-inner max-w-full"
              role="status"
            >
              <span className="relative flex h-2 w-2 flex-shrink-0" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-lime" />
              </span>
              <span className="font-mono text-[11px] sm:text-xs text-steel-300 tracking-wide font-medium truncate">
                {lang === 'en' ? PERSONAL_INFO.status : PERSONAL_INFO.statusAr}
              </span>
            </div>

            {/* Editorial Title */}
            <div className="space-y-1">
              <div className="font-mono text-[11px] sm:text-xs text-lime tracking-[0.2em] sm:tracking-[0.25em] uppercase font-semibold flex items-center gap-2" aria-hidden="true">
                <span>{lang === 'en' ? '[ 001 // PERSONAL IDENTITY ]' : '[ 001 // الهوية المهنية ]'}</span>
                <span className="h-[1px] w-8 sm:w-12 bg-lime/40" />
              </div>
              <h1 id="hero-title" className="text-3xl xs:text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white font-display uppercase leading-[0.98] sm:leading-[0.95] break-words">
                {lang === 'en' ? (
                  <>
                    Khaled <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-steel-100 via-steel-200 to-steel-400">
                      Hamdy
                    </span> <br />
                    <span className="text-lime-bright relative inline-block">
                      Eldaoudy
                      <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-lime/30" />
                    </span>
                  </>
                ) : (
                  <>
                    خالد <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-steel-100 via-steel-200 to-steel-400">
                      حمدي
                    </span> <br />
                    <span className="text-lime-bright relative inline-block">
                      الداودي
                      <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-lime/30" />
                    </span>
                  </>
                )}
              </h1>
            </div>

            {/* Professional Headline */}
            <div className="border-l-2 rtl:border-l-0 rtl:border-r-2 border-lime/80 pl-3.5 sm:pl-4 rtl:pl-0 rtl:pr-3.5 sm:rtl:pr-4 py-1">
              <p className="text-base sm:text-xl font-medium text-steel-200 font-sans tracking-wide">
                {lang === 'en' ? PERSONAL_INFO.title : PERSONAL_INFO.titleAr}
              </p>
              <p className="text-xs sm:text-sm font-mono text-steel-300 mt-1 flex flex-wrap items-center gap-2">
                <span className="text-cyan-telemetry">
                  {lang === 'en' ? '# Embedded Firmware' : '# برمجيات مدمجة'}
                </span>
                <span aria-hidden="true">&bull;</span>
                <span className="text-lime">
                  {lang === 'en' ? '# Autonomous Robotics' : '# روبوتات ذاتية القيادة'}
                </span>
                <span aria-hidden="true">&bull;</span>
                <span className="text-steel-300">
                  {lang === 'en' ? '# Control Systems' : '# نظم تحكم'}
                </span>
              </p>
            </div>

            {/* Introduction */}
            <p className="text-steel-300 text-xs sm:text-sm md:text-base leading-relaxed max-w-xl">
              {lang === 'en' ? PERSONAL_INFO.bioIntro : PERSONAL_INFO.bioIntroAr}
            </p>

            {/* Quick Metrics Bar from CV */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-1">
              {PERSONAL_INFO.stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-dark-900/80 border border-steel-700/50 p-2 sm:p-2.5 rounded tech-bracket transition-colors hover:border-steel-500"
                >
                  <div className="flex items-baseline gap-1">
                    <span className="text-lg sm:text-2xl font-bold font-mono text-steel-100">
                      {stat.value}
                    </span>
                    <span className="text-[10px] font-mono text-lime font-medium">
                      {lang === 'en' ? stat.unit : stat.unitAr}
                    </span>
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-steel-300 font-medium tracking-tight mt-0.5">
                    {lang === 'en' ? stat.label : stat.labelAr}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
              <a
                href="#projects"
                onMouseEnter={() => sound.playHover()}
                onClick={() => sound.playClick()}
                className="inline-flex items-center justify-center gap-2 min-h-[44px] px-5 sm:px-6 py-3 rounded bg-lime hover:bg-lime-bright text-dark-950 font-bold font-mono text-xs uppercase tracking-wider transition-all shadow-[0_0_25px_rgba(200,242,2,0.25)] hover:shadow-[0_0_35px_rgba(200,242,2,0.45)] w-full xs:w-auto text-center"
              >
                <span>{lang === 'en' ? 'EXPLORE TECHNICAL WORK' : 'استعراض المشاريع الهندسية'}</span>
                <ChevronRight size={16} strokeWidth={3} className="rtl:rotate-180" />
              </a>

              <a
                href={PERSONAL_INFO.cvFile}
                download="Khaled_Hamdy_Eldaoudy_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => sound.playHover()}
                onClick={() => sound.playSuccess()}
                className="inline-flex items-center justify-center gap-2 min-h-[44px] px-5 sm:px-6 py-3 rounded bg-dark-900 hover:bg-dark-850 border border-steel-700 hover:border-lime/60 text-steel-200 hover:text-white font-mono text-xs uppercase tracking-wider transition-all w-full xs:w-auto text-center"
              >
                <Download size={15} />
                <span>{lang === 'en' ? 'DOWNLOAD CV (PDF)' : 'تحميل السيرة الذاتية (PDF)'}</span>
              </a>

              <a
                href="#contact"
                onMouseEnter={() => sound.playHover()}
                onClick={() => sound.playClick()}
                className="inline-flex items-center justify-center gap-1.5 min-h-[44px] px-4 py-3 text-steel-300 hover:text-lime font-mono text-xs uppercase tracking-wider transition-colors w-full xs:w-auto text-center"
              >
                <span>{lang === 'en' ? 'GET IN TOUCH' : 'تواصل معي'}</span>
                <ExternalLink size={13} />
              </a>
            </div>

          </div>

          {/* Right Column: Interactive 3D Gimbal Conceptual Visualization */}
          <div className="lg:col-span-5 relative w-full flex items-center justify-center mt-4 lg:mt-0">
            {/* Architectural Frame Border */}
            <div className="relative w-full h-[360px] xs:h-[420px] sm:h-[500px] lg:h-[580px] rounded-lg bg-dark-900/40 border border-steel-700/50 backdrop-blur-md overflow-hidden shadow-2xl flex flex-col justify-between">
              
              {/* Header: Transparently Labeled as Conceptual 3D Model */}
              <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-2.5 border-b border-steel-700/40 bg-dark-900/80 text-[10px] font-mono text-steel-400">
                <div className="flex items-center gap-2">
                  <Cpu size={13} className="text-lime" />
                  <span className="text-steel-200 font-semibold tracking-wider text-[9px] sm:text-[10px]">
                    {lang === 'en' ? 'CONCEPTUAL 3D VISUALIZATION' : 'محاكاة بصرية ثلاثية الأبعاد'}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-steel-400 text-[9px] sm:text-[10px]">
                  <Activity size={12} className="text-cyan-telemetry animate-pulse" />
                  <span>{lang === 'en' ? 'INTERACTIVE' : 'تفاعلي'}</span>
                </div>
              </div>

              {/* 3D Three.js Viewport */}
              <div className="relative flex-1 w-full h-full min-h-0">
                <ThreeHeroCanvas />
              </div>

              {/* Footer: Honest Graphic Render Specification */}
              <div className="grid grid-cols-3 border-t border-steel-700/40 bg-dark-900/80 text-[9px] sm:text-[10px] font-mono text-steel-400 divide-x rtl:divide-x-reverse divide-steel-700/40 text-center py-1.5 sm:py-2">
                <div>
                  <span className="text-steel-400 block text-[8px] sm:text-[9px]">RENDER:</span>
                  <span className="text-steel-200 font-medium">Three.js WebGL</span>
                </div>
                <div>
                  <span className="text-steel-400 block text-[8px] sm:text-[9px]">FREEDOM:</span>
                  <span className="text-lime font-medium">3-Axis Rotation</span>
                </div>
                <div>
                  <span className="text-steel-400 block text-[8px] sm:text-[9px]">INPUT:</span>
                  <span className="text-cyan-telemetry font-medium">Cursor Responsive</span>
                </div>
              </div>

              {/* Technical Notch Corner Markers */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-lime pointer-events-none" aria-hidden="true" />
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-lime pointer-events-none" aria-hidden="true" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-lime pointer-events-none" aria-hidden="true" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-lime pointer-events-none" aria-hidden="true" />
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Information Bar */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 z-10 border-t border-steel-800/60 mt-6 sm:mt-8">
        <div className="flex items-center gap-2.5 sm:gap-3 text-steel-400 font-mono text-xs text-center sm:text-left rtl:sm:text-right">
          <Compass size={14} className="text-lime flex-shrink-0" />
          <span className="text-[11px] sm:text-xs">
            {lang === 'en'
              ? `LOCATION: ${PERSONAL_INFO.location.toUpperCase()} · ${PERSONAL_INFO.university.toUpperCase()}`
              : `الموقع: ${PERSONAL_INFO.locationAr} · ${PERSONAL_INFO.universityAr}`}
          </span>
        </div>

        <a
          href="#about"
          onMouseEnter={() => sound.playHover()}
          onClick={() => sound.playClick()}
          className="flex items-center gap-2 text-steel-400 hover:text-lime font-mono text-xs transition-colors group min-h-[44px] px-2"
        >
          <span>{lang === 'en' ? 'EXPLORE DOSSIER' : 'استعراض الملف الشخصي'}</span>
          <ArrowDown size={14} className="group-hover:translate-y-1 transition-transform" />
        </a>
      </div>
    </section>
  );
};
