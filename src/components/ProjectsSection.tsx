import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS, Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { sound } from '../utils/soundEffects';

interface ProjectsProps {
  lang: 'en' | 'ar';
}

export const ProjectsSection: React.FC<ProjectsProps> = ({ lang }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Technical Schematic Illustration for each verified project
  const renderProjectIllustration = (projId: string) => {
    switch (projId) {
      case 'smart-home-iti':
        return (
          <div className="relative w-full h-48 sm:h-56 bg-dark-950 flex items-center justify-center border-b border-steel-800 overflow-hidden group p-4" aria-hidden="true">
            <div className="absolute inset-0 bg-tech-lines opacity-40 pointer-events-none" />
            
            {/* ATmega32 Architecture Schematic */}
            <div className="relative z-10 flex flex-col items-center w-full max-w-[280px]">
              <div className="relative w-full px-4 sm:px-6 py-3 sm:py-4 rounded bg-dark-900 border-2 border-lime/70 shadow-[0_0_20px_rgba(200,242,2,0.15)] flex flex-col items-center font-mono text-center">
                <div className="text-[10px] text-lime font-bold tracking-widest uppercase">
                  ATMEGA32 // AVR ARCHITECTURE
                </div>
                <div className="text-[9px] text-steel-400 mt-0.5">
                  AVR-GCC Bare-Metal C &middot; Proteus VSM
                </div>
                <div className="flex items-center gap-1.5 mt-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-telemetry animate-pulse" />
                  <span className="text-[8px] text-steel-300">HC-05 BLUETOOTH UART</span>
                </div>
              </div>

              {/* Connected Buses */}
              <div className="flex items-center justify-between w-full gap-2 mt-3 text-[8px] sm:text-[9px] font-mono">
                <div className="px-2 py-1 rounded bg-dark-900 border border-steel-700 text-steel-300 truncate">
                  LM35 & LDR (ADC)
                </div>
                <div className="flex-1 h-[1px] bg-lime/60 min-w-[12px]" />
                <div className="px-2 py-1 rounded bg-dark-900 border border-steel-700 text-steel-300 truncate">
                  RELAY & PWM FAN
                </div>
              </div>
            </div>

            <div className="absolute top-2.5 right-2.5 rtl:right-auto rtl:left-2.5 font-mono text-[8px] sm:text-[9px] text-lime/80 px-2 py-0.5 rounded bg-lime/10 border border-lime/20">
              SCHEMATIC ILLUSTRATION
            </div>
          </div>
        );

      case 'robotic-arm':
        return (
          <div className="relative w-full h-48 sm:h-56 bg-dark-950 flex items-center justify-center border-b border-steel-800 overflow-hidden group p-4" aria-hidden="true">
            <div className="absolute inset-0 bg-tech-lines opacity-40 pointer-events-none" />
            
            {/* Kinematic Linkage Diagram */}
            <div className="relative z-10 flex flex-col items-center font-mono w-full max-w-[280px]">
              <div className="relative w-32 sm:w-40 h-20 sm:h-24 border border-dashed border-steel-700 rounded-sm flex items-center justify-center">
                <div className="absolute top-1 left-1 rtl:left-auto rtl:right-1 text-[8px] text-steel-400">BASE AXIS</div>
                <div className="absolute bottom-1 right-1 rtl:right-auto rtl:left-1 text-[8px] text-cyan-telemetry">GRIPPER</div>
                <svg className="w-full h-full p-2" viewBox="0 0 100 60">
                  <circle cx="20" cy="50" r="4" fill="#c8f202" />
                  <line x1="20" y1="50" x2="50" y2="25" stroke="#c8f202" strokeWidth="2" />
                  <circle cx="50" cy="25" r="4" fill="#00e5ff" />
                  <line x1="50" y1="25" x2="80" y2="35" stroke="#00e5ff" strokeWidth="2" />
                  <circle cx="80" cy="35" r="3" fill="#ffffff" />
                </svg>
              </div>
              <span className="text-[8px] sm:text-[9px] text-steel-400 mt-2 text-center">
                MULTI-AXIS SERVO MOTION CONTROL
              </span>
            </div>

            <div className="absolute top-2.5 right-2.5 rtl:right-auto rtl:left-2.5 font-mono text-[8px] sm:text-[9px] text-steel-300 px-2 py-0.5 rounded bg-dark-900 border border-steel-700">
              KINEMATIC LINKAGE
            </div>
          </div>
        );

      case 'earthquake-simulation':
        return (
          <div className="relative w-full h-48 sm:h-56 bg-dark-950 flex items-center justify-center border-b border-steel-800 overflow-hidden group p-4" aria-hidden="true">
            <div className="absolute inset-0 bg-tech-lines opacity-40 pointer-events-none" />
            
            {/* Seismic Cam & Vibration Wave Graphic */}
            <div className="relative z-10 flex flex-col items-center font-mono text-center w-full max-w-[300px]">
              <div className="px-3 sm:px-4 py-1.5 sm:py-2 rounded bg-dark-900 border border-steel-700/80 mb-2 w-full">
                <span className="text-[9px] sm:text-[10px] text-lime font-bold block truncate">
                  GA25-370 GEAR MOTOR + CAM
                </span>
                <div className="text-[8px] sm:text-[9px] text-steel-400">PWM &rarr; SW-420 VIBRATION SENSOR</div>
              </div>
              <div className="flex items-center justify-center gap-1 h-7 sm:h-8">
                {[4, 12, 8, 22, 16, 28, 10, 6, 24, 18, 12, 5].map((h, i) => (
                  <span
                    key={i}
                    className="w-1.5 bg-lime/80 rounded-t"
                    style={{ height: `${h}px` }}
                  />
                ))}
              </div>
              <span className="text-[8px] sm:text-[9px] text-steel-400 mt-2 truncate max-w-full">
                SHAKING SIMULATION &middot; SG90 EMERGENCY DOOR
              </span>
            </div>

            <div className="absolute top-2.5 right-2.5 rtl:right-auto rtl:left-2.5 font-mono text-[8px] sm:text-[9px] text-lime px-2 py-0.5 rounded bg-lime/10 border border-lime/30">
              SEISMIC TEST RIG
            </div>
          </div>
        );

      case 'vibration-alarm':
        return (
          <div className="relative w-full h-48 sm:h-56 bg-dark-950 flex items-center justify-center border-b border-steel-800 overflow-hidden group p-4" aria-hidden="true">
            <div className="absolute inset-0 bg-tech-lines opacity-40 pointer-events-none" />
            
            {/* Intrusion Warning Graphic */}
            <div className="relative z-10 flex flex-col items-center font-mono">
              <div className="relative w-20 sm:w-24 h-20 sm:h-24 rounded-full border border-steel-700 flex items-center justify-center">
                <div className="w-14 sm:w-16 h-14 sm:h-16 rounded-full border border-dashed border-lime/60 animate-spin" style={{ animationDuration: '8s' }} />
                <div className="w-2 h-2 rounded-full bg-lime animate-pulse" />
                <span className="absolute -bottom-5 text-[8px] sm:text-[9px] text-steel-300 whitespace-nowrap">
                  SW-420 SENSOR ARMED
                </span>
              </div>
              <div className="text-[8px] sm:text-[9px] text-steel-400 mt-5">
                BUZZER + LEDS + SG90 DOOR MECHANISM
              </div>
            </div>

            <div className="absolute top-2.5 right-2.5 rtl:right-auto rtl:left-2.5 font-mono text-[8px] sm:text-[9px] text-cyan-telemetry px-2 py-0.5 rounded bg-cyan-telemetry/10 border border-cyan-telemetry/30">
              SAFETY SYSTEM
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="projects" className="relative py-16 sm:py-24 bg-dark-900/40 border-t border-steel-800/80" aria-labelledby="projects-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16 gap-4">
          <div>
            <div className="font-mono text-xs text-lime tracking-[0.2em] uppercase font-semibold flex items-center gap-2" aria-hidden="true">
              <span>{lang === 'en' ? '// 03. FEATURED ENGINEERING SYSTEMS' : '// 03. النظم والمشاريع الهندسية المنفذة'}</span>
            </div>
            <h2 id="projects-heading" className="text-2xl xs:text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight mt-2 uppercase">
              {lang === 'en' ? (
                <>Proven <span className="text-steel-400">Implementations.</span></>
              ) : (
                <>مشاريع <span className="text-steel-400">واقعية موثقة.</span></>
              )}
            </h2>
          </div>
          <p className="font-mono text-xs text-steel-400 max-w-md">
            {lang === 'en'
              ? 'REAL HARDWARE DELIVERABLES · ITI CAPSTONE · AUTONOMOUS CONTROLS · ACCURATE SPECIFICATIONS'
              : 'مشاريع حقيقية على أرض الواقع · مشروع تخرج ITI · تحكم آلي متقدم · مخططات هندسية'}
          </p>
        </div>

        {/* 2x2 Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {PROJECTS.map((project) => (
            <article
              key={project.id}
              onClick={() => {
                setSelectedProject(project);
                sound.playClick();
              }}
              onMouseEnter={() => sound.playHover()}
              className="group cursor-pointer rounded-lg bg-dark-950 border border-steel-800 hover:border-lime/60 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl hover:shadow-[0_0_30px_rgba(200,242,2,0.1)] tech-bracket"
              aria-labelledby={`project-title-${project.id}`}
            >
              {/* Top Technical Schematic Graphic */}
              {renderProjectIllustration(project.id)}

              {/* Card Body */}
              <div className="p-5 sm:p-8 flex-1 flex flex-col justify-between space-y-5 sm:space-y-6">
                <div className="space-y-2.5 sm:space-y-3">
                  {/* Category & Badge */}
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-lime font-bold">
                      {lang === 'en' ? `PROJECT ${project.number} // ${project.year}` : `مشروع ${project.number} // ${project.year}`}
                    </span>
                    <span className="text-steel-400 text-[11px] truncate max-w-[180px] sm:max-w-none">
                      {project.organization}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 id={`project-title-${project.id}`} className="text-lg sm:text-2xl font-bold text-white font-display group-hover:text-lime transition-colors">
                    {lang === 'en' ? project.title : project.titleAr}
                  </h3>

                  {/* Subtitle / Role */}
                  <p className="text-xs font-mono text-steel-400">
                    {lang === 'en' ? project.subtitle : project.subtitleAr}
                  </p>

                  {/* Short Description */}
                  <p className="text-steel-300 text-xs sm:text-sm leading-relaxed font-sans">
                    {lang === 'en' ? project.description : project.descriptionAr}
                  </p>
                </div>

                {/* Hardware Specs Micro Table */}
                <div className="bg-dark-900/90 p-3 sm:p-3.5 rounded border border-steel-800/80 font-mono text-[11px] space-y-1.5">
                  <div className="flex justify-between gap-2">
                    <span className="text-steel-400 uppercase">{lang === 'en' ? 'MCU:' : 'المتحكم:'}</span>
                    <span className="text-steel-200 text-right truncate">{project.hardwareSpecs.mcu}</span>
                  </div>
                  <div className="flex justify-between gap-2">
                    <span className="text-steel-400 uppercase">{lang === 'en' ? 'PROTOCOLS:' : 'بروتوكولات:'}</span>
                    <span className="text-steel-300 truncate max-w-[200px] text-right">
                      {project.hardwareSpecs.protocols.join(', ')}
                    </span>
                  </div>
                </div>

                {/* Card Footer: Tags & Action */}
                <div className="pt-3.5 sm:pt-4 border-t border-steel-800 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-dark-900 text-steel-400 border border-steel-800"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
                      sound.playClick();
                    }}
                    className="inline-flex items-center gap-1 text-xs font-mono font-bold text-lime group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform min-h-[44px] px-2 py-1 rounded focus-visible:ring-2 focus-visible:ring-lime"
                    aria-haspopup="dialog"
                    aria-label={`${lang === 'en' ? 'EXPLORE SPEC:' : 'استعراض المواصفات:'} ${lang === 'en' ? project.title : project.titleAr}`}
                  >
                    <span>{lang === 'en' ? 'EXPLORE SPEC' : 'استعراض المواصفات'}</span>
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Deep-Dive Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        lang={lang}
      />
    </section>
  );
};
