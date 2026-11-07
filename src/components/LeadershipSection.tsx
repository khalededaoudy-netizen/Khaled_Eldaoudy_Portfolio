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
                    FLAGSHIP EXECUTIVE POSITION // 2023 – PRESENT
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                    President, Engineering College Student Union
                  </h3>
                  <p className="text-xs font-mono text-steel-400">
                    Zagazig National University (ZNU) &middot; Faculty of Engineering
                  </p>
                </div>
              </div>

              <p className="text-sm text-steel-300 leading-relaxed font-sans">
                Elected to direct student governance for one of Egypt's foremost national engineering institutions. Serves as the primary bridge between the university deanship, academic departments, and the engineering student body.
              </p>

              <div className="space-y-2 pt-2">
                {[
                  "Represented Zagazig National University at the 9th UniEgypt Higher Education Expo, presenting student Mechatronics & Civil Engineering projects and receiving commendations from the Minister of Higher Education for student innovation.",
                  "Orchestrated campus-wide engineering symposiums, robotics workshops, peer-tutoring networks, and industrial field trips.",
                  "Managed high-level communications and administrative problem-solving to advocate for engineering undergraduates across all departments."
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-steel-300 font-sans">
                    <CheckCircle2 size={15} className="text-lime flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Badges Box */}
            <div className="bg-dark-900 p-4 rounded border border-steel-800 font-mono text-xs space-y-2 min-w-[240px]">
              <span className="text-[10px] text-steel-500 uppercase font-bold block border-b border-steel-800 pb-1">
                GOVERNANCE STATS
              </span>
              <div className="flex justify-between">
                <span className="text-steel-400">CONSTITUENCY:</span>
                <span className="text-white font-bold">1,000+ Engineers</span>
              </div>
              <div className="flex justify-between">
                <span className="text-steel-400">TENURE:</span>
                <span className="text-lime">2023 – Present</span>
              </div>
              <div className="flex justify-between">
                <span className="text-steel-400">KEY FORUM:</span>
                <span className="text-cyan-telemetry">UniEgypt Expo</span>
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
                      {item.roleType}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded bg-dark-900 border border-steel-800 text-steel-300 group-hover:text-lime group-hover:border-lime/40 transition-colors">
                      <Icon size={18} />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white font-display group-hover:text-lime transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs font-mono text-steel-400">
                        {item.organization}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2 pt-2">
                    {item.achievements.map((ach, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-steel-300 leading-relaxed font-sans">
                        <span className="text-lime font-mono text-sm leading-none">&bull;</span>
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-steel-800/60 text-[10px] font-mono text-steel-500 uppercase flex justify-between">
                  <span>IMPACT VERIFIED</span>
                  <span className="text-steel-400">ZNU LEADERSHIP LOG</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
