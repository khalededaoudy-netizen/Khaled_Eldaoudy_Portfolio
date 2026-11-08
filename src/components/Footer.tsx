import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { sound } from '../utils/soundEffects';

interface FooterProps {
  lang: 'en' | 'ar';
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const scrollToTop = () => {
    sound.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-dark-950 border-t border-steel-800/80 pt-12 sm:pt-16 pb-10 sm:pb-12 font-mono text-xs text-steel-400" aria-label={lang === 'en' ? 'Page Footer' : 'تذييل الصفحة'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 sm:pb-12 border-b border-steel-800">
          
          {/* Identity & Mission */}
          <div className="md:col-span-5 space-y-3 sm:space-y-4">
            <div className="flex items-center gap-2 text-white font-bold text-sm">
              <span className="w-2 h-2 rounded-full bg-lime" aria-hidden="true" />
              <span>{lang === 'en' ? PERSONAL_INFO.name.toUpperCase() : PERSONAL_INFO.nameAr}</span>
            </div>
            <p className="text-xs text-steel-400 max-w-sm leading-relaxed font-sans">
              {lang === 'en'
                ? 'Mechatronics Engineer synthesizing low-latency embedded C firmware, closed-loop robotic kinematics, and student union leadership at Zagazig National University.'
                : 'مهندس ميكاترونكس يجمع بين برمجة المتحكمات الدقيقة بلغة C، حركيات الروبوتات والتحكم المغلق، وقيادة اتحاد الطلاب بجامعة الزقازيق الأهلية.'}
            </p>
            <div className="text-[11px] text-steel-400">
              {lang === 'en' ? `LOCATION: ${PERSONAL_INFO.location}` : `الموقع: ${PERSONAL_INFO.locationAr}`}
            </div>
          </div>

          {/* Quick Navigation Anchors */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4 text-xs">
            <div className="space-y-2.5">
              <span className="text-[10px] text-steel-400 uppercase font-bold block" id="footer-system-heading">
                {lang === 'en' ? 'SYSTEM SECTIONS' : 'أقسام الموقع'}
              </span>
              <nav aria-labelledby="footer-system-heading" className="space-y-2">
                <a href="#about" className="block text-steel-400 hover:text-lime transition-colors py-1">{lang === 'en' ? '01. About' : '01. عن المهندس'}</a>
                <a href="#skills" className="block text-steel-400 hover:text-lime transition-colors py-1">{lang === 'en' ? '02. Skills' : '02. المهارات'}</a>
                <a href="#projects" className="block text-steel-400 hover:text-lime transition-colors py-1">{lang === 'en' ? '03. Projects' : '03. المشاريع'}</a>
                <a href="#competitions" className="block text-steel-400 hover:text-lime transition-colors py-1">{lang === 'en' ? '04. Competitions' : '04. المسابقات'}</a>
              </nav>
            </div>
            <div className="space-y-2.5">
              <span className="text-[10px] text-steel-400 uppercase font-bold block" id="footer-records-heading">
                {lang === 'en' ? 'CREDENTIALS' : 'السجلات'}
              </span>
              <nav aria-labelledby="footer-records-heading" className="space-y-2">
                <a href="#leadership" className="block text-steel-400 hover:text-lime transition-colors py-1">{lang === 'en' ? '05. Leadership' : '05. القيادة'}</a>
                <a href="#certifications" className="block text-steel-400 hover:text-lime transition-colors py-1">{lang === 'en' ? '06. Credentials' : '06. الشهادات'}</a>
                <a href="#entrepreneurial" className="block text-steel-400 hover:text-lime transition-colors py-1">{lang === 'en' ? '07. Commerce' : '07. التجارة'}</a>
                <a href="#contact" className="block text-steel-400 hover:text-lime transition-colors py-1">{lang === 'en' ? '08. Contact' : '08. تواصل'}</a>
              </nav>
            </div>
          </div>

          {/* Back to Top & Telemetry Box */}
          <div className="md:col-span-3 flex flex-col justify-between items-start md:items-end gap-4">
            <button
              onClick={scrollToTop}
              onMouseEnter={() => sound.playHover()}
              className="min-h-[44px] px-4 py-2.5 rounded bg-dark-900 border border-steel-700 hover:border-lime text-steel-200 hover:text-lime transition-colors flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-lime"
              aria-label={lang === 'en' ? 'BACK TO APEX: Return to top of page' : 'العودة للقمة: الانتقال إلى أعلى الصفحة'}
            >
              <span>{lang === 'en' ? 'BACK TO APEX' : 'العودة للقمة'}</span>
              <ArrowUp size={14} aria-hidden="true" />
            </button>
            <div className="text-[10px] text-steel-400 text-left md:text-right rtl:md:text-left">
              STATUS: NOMINAL<br />
              FRAMEWORK: REACT 18 + TS + THREE.JS<br />
              ACCESSIBILITY: WCAG 2.2 AA VERIFIED
            </div>
          </div>

        </div>

        {/* Bottom Legal Strip */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-steel-400 text-center sm:text-left rtl:sm:text-right">
          <div>
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. {lang === 'en' ? 'All technical rights reserved.' : 'جميع الحقوق الهندسية محفوظة.'}
          </div>
          <div className="flex items-center gap-4">
            <span className="text-steel-600 hidden sm:inline" aria-hidden="true">|</span>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-steel-200 min-h-[44px] inline-flex items-center"
              aria-label="Khaled's LinkedIn profile"
            >
              LINKEDIN
            </a>
            <span className="text-steel-600" aria-hidden="true">•</span>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-steel-200 min-h-[44px] inline-flex items-center"
              aria-label="Khaled's GitHub profile"
            >
              GITHUB
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
