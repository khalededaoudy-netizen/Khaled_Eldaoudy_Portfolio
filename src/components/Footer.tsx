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
    <footer className="relative bg-dark-950 border-t border-steel-800/80 pt-16 pb-12 font-mono text-xs text-steel-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-steel-800">
          
          {/* Identity & Mission */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2 text-white font-bold text-sm">
              <span className="w-2 h-2 rounded-full bg-lime" />
              <span>KHALED HAMDY ELDAOUDY</span>
            </div>
            <p className="text-xs text-steel-400 max-w-sm leading-relaxed font-sans">
              {lang === 'en'
                ? 'Mechatronics Engineer synthesizing low-latency embedded C firmware, closed-loop robotic kinematics, and student union leadership at Zagazig National University.'
                : 'مهندس ميكاترونكس يجمع بين برمجة المتحكمات الدقيقة بلغة C، حركيات الروبوتات والتحكم المغلق، وقيادة اتحاد الطلاب بجامعة الزقازيق الأهلية.'}
            </p>
            <div className="text-[11px] text-steel-500">
              LOCATION: {PERSONAL_INFO.location} &middot; {PERSONAL_INFO.coordinates}
            </div>
          </div>

          {/* Quick Navigation Anchors */}
          <div className="md:col-span-4 grid grid-cols-2 gap-2 text-xs">
            <div className="space-y-2">
              <span className="text-[10px] text-steel-500 uppercase font-bold block">
                SYSTEM SECTIONS
              </span>
              <a href="#about" className="block hover:text-lime transition-colors">01. About</a>
              <a href="#skills" className="block hover:text-lime transition-colors">02. Skills</a>
              <a href="#projects" className="block hover:text-lime transition-colors">03. Projects</a>
              <a href="#competitions" className="block hover:text-lime transition-colors">04. Competitions</a>
            </div>
            <div className="space-y-2">
              <span className="text-[10px] text-steel-500 uppercase font-bold block">
                CREDENTIALS
              </span>
              <a href="#leadership" className="block hover:text-lime transition-colors">05. Leadership</a>
              <a href="#certifications" className="block hover:text-lime transition-colors">06. Certifications</a>
              <a href="#entrepreneurial" className="block hover:text-lime transition-colors">07. Commerce</a>
              <a href="#contact" className="block hover:text-lime transition-colors">08. Contact</a>
            </div>
          </div>

          {/* Back to Top & Telemetry Box */}
          <div className="md:col-span-3 flex flex-col justify-between items-start md:items-end">
            <button
              onClick={scrollToTop}
              onMouseEnter={() => sound.playHover()}
              className="px-4 py-2.5 rounded bg-dark-900 border border-steel-700 hover:border-lime text-steel-200 hover:text-lime transition-colors flex items-center gap-2"
            >
              <span>BACK TO APEX</span>
              <ArrowUp size={14} />
            </button>
            <div className="text-[10px] text-steel-500 text-left md:text-right pt-4">
              STATUS: NOMINAL<br />
              SERVER: LOCALHOST:3000<br />
              STACK: REACT 18 + TS + THREE.JS
            </div>
          </div>

        </div>

        {/* Bottom Legal & Colophon Strip */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-steel-500">
          <div>
            &copy; {new Date().getFullYear()} Khaled Hamdy Eldaoudy. All technical schematics & code verified.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-steel-600">|</span>
            <span>DESIGNED WITH ENGINEERING PRECISION</span>
            <span className="text-steel-600">|</span>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-steel-300">
              LINKEDIN
            </a>
            <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:text-steel-300">
              GITHUB
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
