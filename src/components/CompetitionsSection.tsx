import React, { useState } from 'react';
import { Trophy, Sparkles } from 'lucide-react';
import { COMPETITIONS } from '../data/portfolioData';
import { sound } from '../utils/soundEffects';

interface CompetitionsProps {
  lang: 'en' | 'ar';
}

export const CompetitionsSection: React.FC<CompetitionsProps> = ({ lang }) => {
  const [filter, setFilter] = useState<string>('all');

  const filteredCompetitions = COMPETITIONS.filter((comp) => {
    if (filter === 'all') return true;
    if (filter === 'personal') return comp.isPersonalVsTeam === 'Personal Contribution & Leadership';
    if (filter === 'team') return comp.isPersonalVsTeam !== 'Personal Contribution & Leadership';
    return true;
  });

  return (
    <section id="competitions" className="relative py-24 bg-dark-950 border-t border-steel-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="font-mono text-xs text-lime tracking-[0.2em] uppercase font-semibold flex items-center gap-2">
              <span>{lang === 'en' ? '// 04. COMPETITIVE RECORD & HONORS' : '// 04. سجل المسابقات والمراكز المتقدمة'}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight mt-2 uppercase">
              {lang === 'en' ? (
                <>Trophy <span className="text-lime">Logbook.</span></>
              ) : (
                <>سجل <span className="text-lime">البطولات والجوائز.</span></>
              )}
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 bg-dark-900 p-1 rounded border border-steel-800 text-xs font-mono">
            <button
              onClick={() => {
                setFilter('all');
                sound.playClick();
              }}
              className={`px-3 py-1.5 rounded transition-colors ${
                filter === 'all' ? 'bg-lime text-dark-950 font-bold' : 'text-steel-400 hover:text-white'
              }`}
            >
              {lang === 'en' ? `ALL (${COMPETITIONS.length})` : `الكل (${COMPETITIONS.length})`}
            </button>
            <button
              onClick={() => {
                setFilter('personal');
                sound.playClick();
              }}
              className={`px-3 py-1.5 rounded transition-colors ${
                filter === 'personal' ? 'bg-lime text-dark-950 font-bold' : 'text-steel-400 hover:text-white'
              }`}
            >
              {lang === 'en' ? 'INDIVIDUAL HONORS' : 'الجوائز الفردية'}
            </button>
            <button
              onClick={() => {
                setFilter('team');
                sound.playClick();
              }}
              className={`px-3 py-1.5 rounded transition-colors ${
                filter === 'team' ? 'bg-lime text-dark-950 font-bold' : 'text-steel-400 hover:text-white'
              }`}
            >
              {lang === 'en' ? 'TEAM PODIUMS' : 'منصات تتويج الفرق'}
            </button>
          </div>
        </div>

        {/* Featured Prime Minister Recognition Banner */}
        <div className="mb-12 p-6 sm:p-8 rounded-lg bg-gradient-to-r from-dark-900 via-dark-850 to-dark-900 border border-lime/40 shadow-[0_0_35px_rgba(200,242,2,0.08)] relative overflow-hidden tech-bracket">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-lime/10 border border-lime/30 text-lime font-mono text-xs font-bold">
                <Trophy size={14} />
                <span>{lang === 'en' ? 'EXECUTIVE NATIONAL DISTINCTION' : 'تكريم رسمي على المستوى القومي'}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                {lang === 'en'
                  ? "National RoboSoccer 2nd Place · Certificate Signed by Egypt's Prime Minister"
                  : 'المركز الثاني بمسابقة RoboSoccer القومية · شهادة موقعة من رئيس مجلس الوزراء المصري'}
              </h3>
              <p className="text-steel-300 text-sm max-w-3xl leading-relaxed font-sans">
                {lang === 'en'
                  ? "Secured 2nd place with Team ZNUS and 5th place with Team ZUNBots among premier Egyptian engineering universities. Khaled led control system design and motor tuning for stable, precise robot performance during matches, receiving an official certificate signed by Egypt's Prime Minister, Dr. Mostafa Madbouly."
                  : 'حقق المركز الثاني مع فريق ZNUS والمركز الخامس مع فريق ZUNBots بين كبرى كليات الهندسة بالجامعات المصرية. قاد خالد تصميم وضبط نظام التحكم لتوفير ثبات ودقة عالية في حركة الروبوتات أثناء المباريات، ونال شهادة تقدير رسمية موقعة من دولة رئيس مجلس الوزراء الدكتور مصطفى مدبولي.'}
              </p>
            </div>

            <div className="flex-shrink-0 bg-dark-950/80 p-4 rounded border border-steel-700 font-mono text-xs text-right rtl:text-left space-y-1">
              <span className="text-lime text-[11px] font-bold block">
                {lang === 'en' ? 'SIGNED BY:' : 'توقيع:'}
              </span>
              <span className="text-white font-medium text-sm block">
                {lang === 'en' ? 'Dr. Mostafa Madbouly' : 'د. مصطفى مدبولي'}
              </span>
              <span className="text-steel-400 text-[10px] block">
                {lang === 'en' ? 'Prime Minister of Egypt' : 'رئيس مجلس الوزراء المصري'}
              </span>
              <div className="pt-2 text-[10px] text-cyan-telemetry">
                IEEE HTI &middot; AUG 2025
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCompetitions.map((comp) => (
            <div
              key={comp.id}
              onMouseEnter={() => sound.playHover()}
              className="p-6 rounded-lg bg-dark-900/60 border border-steel-800 hover:border-steel-600 transition-all flex flex-col justify-between space-y-4 group tech-bracket"
            >
              <div className="space-y-3">
                {/* Meta Header */}
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-steel-300 font-semibold">{comp.date}</span>
                  <span
                    className={`px-2.5 py-0.5 rounded text-[10px] border ${
                      comp.isPersonalVsTeam === 'Personal Contribution & Leadership'
                        ? 'border-lime/30 text-lime bg-lime/10'
                        : 'border-cyan-telemetry/30 text-cyan-telemetry bg-cyan-telemetry/10'
                    }`}
                  >
                    {lang === 'en'
                      ? comp.isPersonalVsTeam
                      : comp.isPersonalVsTeam === 'Personal Contribution & Leadership'
                      ? 'مساهمة فردية وقيادة'
                      : comp.isPersonalVsTeam === 'Team Award & Lead Engineering'
                      ? 'جائزة للفريق وقيادة هندسية'
                      : 'تكريم فريق مجتمعي'}
                  </span>
                </div>

                {/* Title & Badge */}
                <div>
                  <h4 className="text-lg font-bold text-white font-display group-hover:text-lime transition-colors">
                    {lang === 'en' ? comp.title : comp.titleAr}
                  </h4>
                  <div className="text-xs font-mono text-steel-400 mt-0.5">
                    {comp.organizer} &middot; <span className="text-steel-300 font-medium">{lang === 'en' ? comp.role : comp.roleAr}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-steel-300 leading-relaxed font-sans">
                  {lang === 'en' ? comp.description : comp.descriptionAr}
                </p>

                {/* Technical Impact Highlight */}
                <div className="p-3 rounded bg-dark-950 border border-steel-800/80 text-xs font-mono space-y-1">
                  <span className="text-[10px] text-lime uppercase font-semibold flex items-center gap-1">
                    <Sparkles size={11} />
                    {lang === 'en' ? 'KEY ACHIEVEMENT' : 'الإنجاز الأبرز'}
                  </span>
                  <p className="text-steel-300 leading-normal">
                    {lang === 'en' ? comp.technicalImpact : comp.technicalImpactAr}
                  </p>
                </div>
              </div>

              {/* Card Footer Result Pill */}
              <div className="pt-3 border-t border-steel-800/60 flex items-center justify-between text-xs font-mono">
                <span className="text-steel-400 font-medium">{lang === 'en' ? 'RESULT:' : 'النتيجة:'}</span>
                <span className="text-lime font-bold">
                  {lang === 'en' ? comp.badge : comp.badgeAr}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
