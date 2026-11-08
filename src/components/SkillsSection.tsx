import React, { useState } from 'react';
import { Cpu, Sliders, Bot, Code2, Box, Factory, Activity, Terminal } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { sound } from '../utils/soundEffects';

interface SkillsProps {
  lang: 'en' | 'ar';
}

export const SkillsSection: React.FC<SkillsProps> = ({ lang }) => {
  const [activeTab, setActiveTab] = useState<string>(SKILL_CATEGORIES[0].id);

  const activeCategory = SKILL_CATEGORIES.find((cat) => cat.id === activeTab) || SKILL_CATEGORIES[0];

  const categoryIcons: Record<string, React.ElementType> = {
    embedded: Cpu,
    control: Sliders,
    robotics: Bot,
    programming: Code2,
    cad: Box,
    industrial: Factory,
  };

  return (
    <section id="skills" className="relative py-16 sm:py-24 bg-dark-950 border-t border-steel-800/80" aria-labelledby="skills-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-4">
          <div>
            <div className="font-mono text-xs text-lime tracking-[0.2em] uppercase font-semibold flex items-center gap-2" aria-hidden="true">
              <span>{lang === 'en' ? '// 02. TECHNICAL MATRIX & TOOLCHAINS' : '// 02. مصفوفة القدرات التقنية والأدوات'}</span>
            </div>
            <h2 id="skills-heading" className="text-2xl xs:text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight mt-2 uppercase">
              {lang === 'en' ? (
                <>System <span className="text-lime">Capabilities.</span></>
              ) : (
                <>القدرات <span className="text-lime">الهندسية والنظم.</span></>
              )}
            </h2>
          </div>
          <p className="font-mono text-xs text-steel-400 max-w-md">
            {lang === 'en'
              ? 'NO ARBITRARY PERCENTAGES · CATEGORIZED BY ARCHITECTURAL DOMAIN · TESTED ON SILICON'
              : 'دون نسب مئوية وهمية · مصنفة حسب البنية الهندسية · مجربة على أرض الواقع'}
          </p>
        </div>

        {/* Category Tabs Strip */}
        <div
          className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-steel-800 scrollbar-none"
          role="tablist"
          aria-label={lang === 'en' ? 'Technical skill domains' : 'مجالات المهارات التقنية'}
        >
          {SKILL_CATEGORIES.map((category) => {
            const Icon = categoryIcons[category.id] || Cpu;
            const isActive = category.id === activeTab;
            return (
              <button
                key={category.id}
                role="tab"
                id={`tab-${category.id}`}
                aria-selected={isActive}
                aria-controls={`tabpanel-${category.id}`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => {
                  setActiveTab(category.id);
                  sound.playClick();
                }}
                onMouseEnter={() => sound.playHover()}
                className={`min-h-[44px] flex items-center gap-2 px-3.5 sm:px-4 py-2.5 rounded-t text-xs font-mono font-medium transition-all whitespace-nowrap border-b-2 ${
                  isActive
                    ? 'border-lime text-lime bg-dark-900 shadow-[0_-2px_10px_rgba(200,242,2,0.1)]'
                    : 'border-transparent text-steel-400 hover:text-steel-200 hover:bg-dark-900/40'
                }`}
              >
                <Icon size={16} />
                <span>{lang === 'en' ? category.name : category.nameAr}</span>
              </button>
            );
          })}
        </div>

        {/* Active Domain Panel */}
        <div
          role="tabpanel"
          id={`tabpanel-${activeCategory.id}`}
          aria-labelledby={`tab-${activeCategory.id}`}
          className="mt-6 sm:mt-8 bg-dark-900/70 border border-steel-800 rounded-lg p-5 sm:p-8 tech-bracket backdrop-blur-md"
        >
          {/* Domain Header & Telemetry Specs */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-steel-800">
            <div>
              <div className="font-mono text-xs text-cyan-telemetry flex items-center gap-2 mb-1" aria-hidden="true">
                <Activity size={13} className="animate-pulse" />
                <span>ACTIVE DOMAIN // {activeCategory.id.toUpperCase()}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-sans">
                {lang === 'en' ? activeCategory.headline : activeCategory.headlineAr}
              </h3>
              <p className="text-xs sm:text-sm text-steel-300 mt-2 max-w-3xl leading-relaxed">
                {lang === 'en' ? activeCategory.description : activeCategory.descriptionAr}
              </p>
            </div>

            {/* Hardware Metrics Box */}
            <div className="bg-dark-950 p-3.5 rounded border border-steel-700/60 font-mono text-xs space-y-1.5 w-full lg:min-w-[260px] lg:w-auto">
              <div className="text-[10px] text-lime uppercase font-semibold flex items-center gap-1 border-b border-steel-800 pb-1">
                <Terminal size={12} />
                <span>{lang === 'en' ? 'HARDWARE METRICS' : 'المعايير العتادية'}</span>
              </div>
              {Object.entries(activeCategory.telemetry).map(([key, val]) => (
                <div key={key} className="flex justify-between text-[11px] gap-2">
                  <span className="text-steel-400 uppercase">{key}:</span>
                  <span className="text-steel-200 text-right">{val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Detailed Skill Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 pt-6 sm:pt-8">
            {activeCategory.skills.map((skill, idx) => (
              <div
                key={idx}
                onMouseEnter={() => sound.playHover()}
                className="p-4 rounded bg-dark-950/80 border border-steel-800 hover:border-lime/50 transition-all group flex flex-col justify-between space-y-3"
              >
                <div className="flex items-start justify-between gap-2">
                  <h4 className="text-xs font-mono font-bold text-steel-100 group-hover:text-lime transition-colors">
                    {skill.name}
                  </h4>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-dark-850 text-steel-300 border border-steel-700/60 flex-shrink-0">
                    {skill.level}
                  </span>
                </div>
                <p className="text-xs text-steel-400 leading-snug font-sans">
                  {skill.detail}
                </p>
                <div className="pt-2 border-t border-steel-800/60 flex items-center justify-between text-[10px] font-mono text-steel-400" aria-hidden="true">
                  <span>SPEC // PINOUT</span>
                  <span className="text-lime group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5 transition-transform">
                    ACTIVE &bull;
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Global Toolchain Matrix */}
        <div className="mt-8 sm:mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3">
          {[
            { label: 'STM32 / ARM', sub: 'Cortex-M Architecture' },
            { label: 'ATmega32 / AVR', sub: 'Bare-Metal C & GCC' },
            { label: 'ESP32 IoT', sub: 'FreeRTOS & Dual-Core' },
            { label: 'SolidWorks CAD', sub: 'Parametric Assemblies' },
            { label: 'PID Tuning', sub: 'Control & Dynamic Loops' },
            { label: 'Proteus VSM', sub: 'Hardware EDA Verification' },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-2.5 sm:p-3 rounded bg-dark-900 border border-steel-800/80 text-center font-mono hover:border-steel-600 transition-colors"
            >
              <div className="text-xs font-bold text-steel-200">{item.label}</div>
              <div className="text-[10px] text-steel-400 mt-0.5">{item.sub}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
