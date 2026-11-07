import React from 'react';
import { Layers, Terminal, Compass, CheckCircle2, Shield, Wrench } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { sound } from '../utils/soundEffects';

interface AboutProps {
  lang: 'en' | 'ar';
}

export const AboutSection: React.FC<AboutProps> = ({ lang }) => {
  const pillars = [
    {
      icon: Terminal,
      title: "Embedded & Low-Level Firmware",
      desc: "Architecting deterministic bare-metal C on AVR and ARM Cortex-M microcontrollers with non-blocking timers and communication protocols.",
    },
    {
      icon: Layers,
      title: "Closed-Loop Control & Kinematics",
      desc: "Implementing discrete PID tuning, dynamic sensor arbitration, and forward/inverse kinematic solvers for robotic articulation.",
    },
    {
      icon: Wrench,
      title: "Precision CAD & Mechanical Assemblies",
      desc: "Translating engineering constraints into manufacturable SolidWorks assemblies, structural cam linkages, and functional prototypes.",
    },
    {
      icon: Shield,
      title: "Executive Leadership & Union Governance",
      desc: "Serving as President of the Engineering College Student Union at ZNU, bridging 1,000+ undergraduates with faculty and industrial bodies.",
    },
  ];

  return (
    <section id="about" className="relative py-24 bg-dark-900/60 border-t border-steel-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="font-mono text-xs text-lime tracking-[0.2em] uppercase font-semibold flex items-center gap-2">
              <span>// 01. PROFILE & METHODOLOGY</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight mt-2 uppercase">
              Engineering <span className="text-steel-400">Intelligence.</span>
            </h2>
          </div>
          <p className="font-mono text-xs text-steel-400 max-w-md">
            ZAGAZIG NATIONAL UNIVERSITY &middot; 4TH YEAR SENIOR &middot; MECHATRONICS CREDIT-HOUR PROGRAM
          </p>
        </div>

        {/* 2-Column Grid: Left Profile Blueprint Badge / Right Editorial Bio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Technical Blueprint Profile Card (Tasteful Designed Mechatronics Identity) */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-lg bg-dark-950 border border-steel-700/60 relative overflow-hidden tech-bracket shadow-xl">
            {/* Background Circuit Grid Accent */}
            <div className="absolute inset-0 bg-circuit-dots opacity-25 pointer-events-none" />

            {/* Top Identity Block */}
            <div className="relative z-10 space-y-4">
              <div className="flex items-center justify-between border-b border-steel-800 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded bg-dark-850 border border-lime/40 flex items-center justify-center font-mono font-bold text-lg text-lime">
                    KE
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white text-base">
                      {PERSONAL_INFO.name}
                    </h3>
                    <p className="font-mono text-[11px] text-steel-400">
                      ID: ZNU-ENG-2022-2026
                    </p>
                  </div>
                </div>
                <div className="text-right font-mono text-[10px] text-lime flex items-center gap-1.5 bg-lime/10 px-2 py-1 rounded border border-lime/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse" />
                  VERIFIED CV
                </div>
              </div>

              {/* Core Specifications */}
              <div className="space-y-2.5 font-mono text-xs pt-2">
                <div className="flex justify-between py-1 border-b border-steel-800/60">
                  <span className="text-steel-500">Degree:</span>
                  <span className="text-steel-200 text-right">B.Sc. Mechatronics Engineering</span>
                </div>
                <div className="flex justify-between py-1 border-b border-steel-800/60">
                  <span className="text-steel-500">Institution:</span>
                  <span className="text-steel-200 text-right">Zagazig National University</span>
                </div>
                <div className="flex justify-between py-1 border-b border-steel-800/60">
                  <span className="text-steel-500">Current Standing:</span>
                  <span className="text-lime text-right">Year 4 (Senior) // Graduating 2026</span>
                </div>
                <div className="flex justify-between py-1 border-b border-steel-800/60">
                  <span className="text-steel-500">Union Role:</span>
                  <span className="text-steel-200 text-right">President, Student Union</span>
                </div>
                <div className="flex justify-between py-1 border-b border-steel-800/60">
                  <span className="text-steel-500">Technical Hours:</span>
                  <span className="text-cyan-telemetry text-right">400+ Certified Training Hours</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-steel-500">Base Location:</span>
                  <span className="text-steel-200 text-right">10th of Ramadan City, Egypt</span>
                </div>
              </div>
            </div>

            {/* Bottom Statement Card */}
            <div className="relative z-10 mt-8 pt-4 border-t border-steel-800 bg-dark-900/60 p-3.5 rounded border border-steel-700/40">
              <div className="text-[10px] font-mono text-steel-500 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <Compass size={12} className="text-lime" />
                <span>CORE DIRECTIVE</span>
              </div>
              <p className="text-xs text-steel-300 italic font-mono leading-relaxed">
                "{PERSONAL_INFO.engineeringPhilosophy}"
              </p>
            </div>
          </div>

          {/* Right Column: Narrative Biography & 4 Core Pillars */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white font-sans">
                {lang === 'en'
                  ? 'Bridging Physical Mechanics, Deterministic Silicon, and Strategic Leadership'
                  : 'الجمع بين الهندسة الميكانيكية، البرمجة الصلبة، والقيادة الطلابية الفعالة'}
              </h3>
              
              <p className="text-steel-300 text-sm sm:text-base leading-relaxed">
                Khaled Hamdy Eldaoudy is a senior Mechatronics Engineering student at Zagazig National University, operating at the intersection of embedded firmware, control mathematics, and robotic automation. Across more than 10 competitive and academic engineering platforms, he has applied low-level C/C++ firmware, discrete PID feedback loops, and CAD finite modeling to create dependable hardware solutions.
              </p>

              <p className="text-steel-300 text-sm sm:text-base leading-relaxed">
                Backed by 400+ hours of rigorous technical training at the Information Technology Institute (ITI Embedded Systems, 162h) and the National Telecommunication Institute (NTI Machine Learning, 120h, 89% score), he brings a disciplined engineering workflow tested under competition pressures—securing 2nd place in national RoboSoccer (with Prime Minister commendation) and engineering three autonomous sumo robots qualifying for the international arena.
              </p>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={idx}
                    onMouseEnter={() => sound.playHover()}
                    className="p-4 rounded bg-dark-950 border border-steel-800 hover:border-steel-600 transition-colors group space-y-2"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="p-1.5 rounded bg-dark-850 text-lime group-hover:bg-lime group-hover:text-dark-950 transition-colors">
                        <Icon size={16} />
                      </div>
                      <h4 className="text-xs font-bold text-white font-mono tracking-tight">
                        {pillar.title}
                      </h4>
                    </div>
                    <p className="text-xs text-steel-400 leading-relaxed font-sans">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Quick Badges Checklist */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              {[
                'ITI Embedded Systems Certified (162h)',
                'NTI Machine Learning Certified (89%)',
                'ZNU Student Union President',
                'Prime Minister Commended (RoboSoccer)',
                'SolidWorks CAD Certified',
              ].map((badge, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-dark-950 border border-steel-800 text-[11px] font-mono text-steel-300"
                >
                  <CheckCircle2 size={12} className="text-lime" />
                  {badge}
                </span>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
