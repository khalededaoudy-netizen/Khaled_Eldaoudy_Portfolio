import React, { useState } from 'react';
import { CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';
import { sound } from '../utils/soundEffects';

interface CertificationsProps {
  lang: 'en' | 'ar';
}

export const CertificationsSection: React.FC<CertificationsProps> = ({ lang }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Credentials' },
    { id: 'Embedded & Firmware', label: 'Embedded & Firmware' },
    { id: 'AI & Data Science', label: 'AI & Data Science' },
    { id: 'CAD & Mechanical', label: 'CAD & Mechanical' },
  ];

  const filteredCerts = CERTIFICATIONS.filter((c) => {
    if (selectedCategory === 'all') return true;
    return c.category === selectedCategory;
  });

  return (
    <section id="certifications" className="relative py-24 bg-dark-950 border-t border-steel-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="font-mono text-xs text-lime tracking-[0.2em] uppercase font-semibold flex items-center gap-2">
              <span>{lang === 'en' ? '// 06. 400+ HOURS OF ACCREDITED RIGOR' : '// 06. أكثر من 400 ساعة تدريبية معتمدة'}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight mt-2 uppercase">
              {lang === 'en' ? (
                <>Training & <span className="text-lime">Credentials.</span></>
              ) : (
                <>التدريب التخصصي <span className="text-lime">والشهادات.</span></>
              )}
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-dark-900 p-1 rounded border border-steel-800 text-xs font-mono">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  sound.playClick();
                }}
                className={`px-3 py-1.5 rounded transition-colors ${
                  selectedCategory === cat.id
                    ? 'bg-lime text-dark-950 font-bold'
                    : 'text-steel-400 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3 Featured Key Programs Showcase: ITI (162h), NTI (120h), Obour Land (120h) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Card 1: ITI */}
          <div className="p-6 rounded-lg bg-dark-900 border border-lime/40 relative overflow-hidden flex flex-col justify-between space-y-4 tech-bracket shadow-lg">
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="px-2 py-0.5 rounded bg-lime/10 text-lime font-bold border border-lime/20">
                  162 HOURS
                </span>
                <span className="text-steel-400">JUL – AUG 2025</span>
              </div>
              <h3 className="text-lg font-bold text-white font-display">
                ITI Embedded Systems Summer Program
              </h3>
              <p className="text-xs font-mono text-steel-400">
                Information Technology Institute (ITI), Smart Village
              </p>
              <p className="text-xs text-steel-300 leading-relaxed font-sans">
                Intensive hands-on immersion in bare-metal C, microcontroller interfacing, communication protocols (UART, SPI, I2C), FreeRTOS, and circuit simulation in Proteus. Supervised by Dr. Heba Saleh, ITI Chairman.
              </p>
            </div>
            <div className="pt-3 border-t border-steel-800 text-[11px] font-mono text-lime flex items-center gap-1.5">
              <ShieldCheck size={14} />
              <span>Capstone Smart Home Defended</span>
            </div>
          </div>

          {/* Card 2: NTI */}
          <div className="p-6 rounded-lg bg-dark-900 border border-cyan-telemetry/40 relative overflow-hidden flex flex-col justify-between space-y-4 tech-bracket shadow-lg">
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="px-2 py-0.5 rounded bg-cyan-telemetry/10 text-cyan-telemetry font-bold border border-cyan-telemetry/20">
                  120 HOURS
                </span>
                <span className="text-steel-400">SCORE: 89%</span>
              </div>
              <h3 className="text-lg font-bold text-white font-display">
                NTI / ITIDA Machine Learning Program
              </h3>
              <p className="text-xs font-mono text-steel-400">
                National Telecommunication Institute (NTI)
              </p>
              <p className="text-xs text-steel-300 leading-relaxed font-sans">
                Comprehensive training encompassing ML algorithms, regression, classification, statistical validation, and Python computational pipelines (NumPy, Pandas, Scikit-learn).
              </p>
            </div>
            <div className="pt-3 border-t border-steel-800 text-[11px] font-mono text-cyan-telemetry flex items-center gap-1.5">
              <Sparkles size={14} />
              <span>Grade: 89% Distinction</span>
            </div>
          </div>

          {/* Card 3: Obour Land */}
          <div className="p-6 rounded-lg bg-dark-900 border border-steel-700 relative overflow-hidden flex flex-col justify-between space-y-4 tech-bracket shadow-lg">
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="px-2 py-0.5 rounded bg-dark-850 text-steel-200 font-bold border border-steel-700">
                  120 HOURS
                </span>
                <span className="text-steel-400">AUG – SEP 2025</span>
              </div>
              <h3 className="text-lg font-bold text-white font-display">
                Tetra Pak A3-Speed Industrial Systems
              </h3>
              <p className="text-xs font-mono text-steel-400">
                Obour Land for Food Industries Training Center
              </p>
              <p className="text-xs text-steel-300 leading-relaxed font-sans">
                Aseptic processing and packaging automation, pneumatic utilities (power, steam, air, H2O2), automatic splicing & tube forming, drive & jaw kinematics, and final folder operations.
              </p>
            </div>
            <div className="pt-3 border-t border-steel-800 text-[11px] font-mono text-steel-300 flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-lime" />
              <span>Large-Scale Factory Automation</span>
            </div>
          </div>

        </div>

        {/* Detailed Credentials List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredCerts.slice(3).map((cert) => (
            <div
              key={cert.id}
              onMouseEnter={() => sound.playHover()}
              className="p-5 rounded bg-dark-900/60 border border-steel-800 hover:border-steel-600 transition-colors flex flex-col justify-between space-y-3"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="text-steel-500">{cert.date}</span>
                  <span className="text-lime text-[10px] bg-dark-950 px-2 py-0.5 rounded border border-steel-800">
                    {cert.category}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-white font-sans">
                  {cert.title}
                </h4>
                <p className="text-xs font-mono text-steel-400">
                  {cert.issuer}
                </p>
                <p className="text-xs text-steel-400 leading-relaxed font-sans pt-1">
                  {cert.description}
                </p>
              </div>

              <div className="pt-2 border-t border-steel-800/60 flex items-center justify-between text-[10px] font-mono text-steel-500">
                <span>CREDENTIAL STATUS</span>
                <span className="text-steel-300">COMPLETED &bull;</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
