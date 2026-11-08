import React from 'react';
import { Users, Shield, Compass, Landmark, Plane, CheckCircle2 } from 'lucide-react';
import { LEADERSHIP_EXPERIENCE } from '../data/portfolioData';
import { sound } from '../utils/soundEffects';

interface LeadershipProps {
  lang: 'en' | 'ar';
}

export const LeadershipSection: React.FC<LeadershipProps> = ({ lang }) => {
  const leadershipIcons: Record<string, React.ElementType> = {
    'union-president': Shield,
    'znu-robotics': Users,
    'build-yourself': Compass,
    'leaders-forum': Landmark,
    'labtronic-visit': Plane,
  };

  const flagshipRole = LEADERSHIP_EXPERIENCE[0];

  return (
    <section id="leadership" className="relative py-24 bg-dark-900/40 border-t border-steel-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="font-mono text-xs text-lime tracking-[0.2em] uppercase font-semibold flex items-center gap-2">
              <span>{lang === 'en' ? '// 05. EXECUTIVE GOVERNANCE & COMMUNITY IMPACT' : '// 05. القيادة الطلابية والتمثيل الأكاديمي'}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight mt-2 uppercase">
              {lang === 'en' ? (
                <>Leadership <span className="text-steel-400">Record.</span></>
              ) : (
                <>السجل <span className="text-steel-400">القيادي والمسؤولية.</span></>
              )}
            </h2>
          </div>
          <p className="font-mono text-xs text-steel-400 max-w-md">
            {lang === 'en'
              ? 'STUDENT UNION PRESIDENCY · ROBOTICS COMMUNITY CO-FOUNDER · MINISTERIAL COMMENDATION'
              : 'رئاسة اتحاد طلاب الهندسة · شريك مؤسس لمجتمع الروبوتات · إشادة وزير التعليم العالي'}
          </p>
        </div>

        {/* Featured Card: Engineering College Student Union Presidency */}
        <div className="mb-10 p-6 sm:p-8 rounded-lg bg-dark-950 border border-steel-700 relative overflow-hidden tech-bracket shadow-2xl">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
            <div className="space-y-4 max-w-3xl">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded bg-lime/10 text-lime border border-lime/30">
                  <Shield size={24} />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-lime font-bold uppercase tracking-wider block">
                    {lang === 'en' ? 'ELECTED EXECUTIVE ROLE // 2023 – PRESENT' : 'منصب قيادي تنفيذي منتخب // 2023 - حتى الآن'}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                    {lang === 'en' ? flagshipRole.title : flagshipRole.titleAr}
                  </h3>
                  <p className="text-xs font-mono text-steel-400">
                    {flagshipRole.organization}
                  </p>
                </div>
              </div>

              <p className="text-sm text-steel-300 leading-relaxed font-sans">
                {lang === 'en'
                  ? 'Serving as President of the Engineering College Student Union at Zagazig National University, acting as the primary liaison between students and faculty leadership.'
                  : 'رئيس اتحاد طلاب كلية الهندسة بجامعة الزقازيق الأهلية، والممثل الرسمي للطلاب لتنسيق التواصل مع عمادة الكلية وإدارة الجامعة.'}
              </p>

              <div className="space-y-2 pt-2">
                {(lang === 'en' ? flagshipRole.achievements : flagshipRole.achievementsAr).map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-steel-300 font-sans">
                    <CheckCircle2 size={15} className="text-lime flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Authentic Governance Stats (No Invented Numbers) */}
            <div className="bg-dark-900 p-4 rounded border border-steel-800 font-mono text-xs space-y-2 min-w-[240px]">
              <span className="text-[10px] text-steel-400 uppercase font-bold block border-b border-steel-800 pb-1">
                {lang === 'en' ? 'GOVERNANCE OVERVIEW' : 'بيانات المنصب'}
              </span>
              <div className="flex justify-between">
                <span className="text-steel-400">{lang === 'en' ? 'ENTITY:' : 'الجهة:'}</span>
                <span className="text-white font-bold">{lang === 'en' ? 'Faculty of Engineering' : 'كلية الهندسة'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-steel-400">{lang === 'en' ? 'TENURE:' : 'الفترة:'}</span>
                <span className="text-lime">2023 – Present</span>
              </div>
              <div className="flex justify-between">
                <span className="text-steel-400">{lang === 'en' ? 'EXPO COMMENDATION:' : 'المعرض القومي:'}</span>
                <span className="text-cyan-telemetry">9th UniEgypt Expo</span>
              </div>
            </div>
          </div>
        </div>

        {/* 2x2 Grid of Other Leadership & Impact Roles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {LEADERSHIP_EXPERIENCE.slice(1).map((item) => {
            const Icon = leadershipIcons[item.id] || Users;
            return (
              <div
                key={item.id}
                onMouseEnter={() => sound.playHover()}
                className="p-6 rounded-lg bg-dark-950 border border-steel-800/80 hover:border-steel-600 transition-all flex flex-col justify-between space-y-4 group tech-bracket"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-lime font-medium">{item.period}</span>
                    <span className="text-steel-400 text-[10px] bg-dark-900 px-2 py-0.5 rounded border border-steel-800">
                      {lang === 'en' ? item.roleType : item.roleTypeAr}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded bg-dark-900 border border-steel-800 text-steel-300 group-hover:text-lime group-hover:border-lime/40 transition-colors">
                      <Icon size={18} />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white font-display group-hover:text-lime transition-colors">
                        {lang === 'en' ? item.title : item.titleAr}
                      </h4>
                      <p className="text-xs font-mono text-steel-400">
                        {item.organization}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2 pt-2">
                    {(lang === 'en' ? item.achievements : item.achievementsAr).map((ach, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-steel-300 leading-relaxed font-sans">
                        <span className="text-lime font-mono text-sm leading-none">&bull;</span>
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-steel-800/60 text-[10px] font-mono text-steel-400 uppercase flex justify-between">
                  <span>{lang === 'en' ? 'LEADERSHIP & GOVERNANCE' : 'القيادة والتمثيل'}</span>
                  <span className="text-steel-400">{lang === 'en' ? 'STUDENT LEADERSHIP' : 'العمل الطلابي'}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
