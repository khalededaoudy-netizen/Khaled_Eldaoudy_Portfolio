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

  // Custom Technical Blueprint Vector Graphic for each project
  const renderProjectIllustration = (projId: string) => {
    switch (projId) {
      case 'smart-home-iti':
        return (
          <div className="relative w-full h-56 bg-dark-950 flex items-center justify-center border-b border-steel-800 overflow-hidden group">
            {/* Background PCB Trace Grid */}
            <div className="absolute inset-0 bg-tech-lines opacity-40 pointer-events-none" />
            
            {/* Stylized ATmega32 Chip Schematic Visual */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="relative px-6 py-4 rounded bg-dark-900 border-2 border-lime/70 shadow-[0_0_20px_rgba(200,242,2,0.15)] flex flex-col items-center font-mono">
                <div className="text-[10px] text-lime font-bold tracking-widest uppercase">
                  ATMEGA32-16PU // AVR
                </div>
                <div className="text-[9px] text-steel-400 mt-0.5">
                  16MHz &middot; 32KB FLASH &middot; UART/ADC
                </div>
                {/* Pin indicators */}
                <div className="flex gap-2 mt-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-telemetry animate-ping" />
                  <span className="text-[8px] text-steel-300">HC-05 BT: 9600 BAUD</span>
                </div>
              </div>

              {/* Connected Buses to Peripherals */}
              <div className="flex items-center gap-6 mt-4 text-[9px] font-mono">
                <div className="px-2 py-1 rounded bg-dark-900 border border-steel-700 text-steel-300">
                  LM35 + LDR (ADC)
                </div>
                <div className="w-8 h-[1px] bg-lime/60" />
                <div className="px-2 py-1 rounded bg-dark-900 border border-steel-700 text-steel-300">
                  RELAYS & PWM MOTOR
                </div>
              </div>
            </div>

            <div className="absolute top-3 right-3 font-mono text-[9px] text-lime/80 px-2 py-0.5 rounded bg-lime/10 border border-lime/20">
              TECHNICAL SCHEMATIC // PROTEUS VALIDATED
            </div>
          </div>
        );

      case 'robotic-arm':
        return (
          <div className="relative w-full h-56 bg-dark-950 flex items-center justify-center border-b border-steel-800 overflow-hidden group">
            <div className="absolute inset-0 bg-tech-lines opacity-40 pointer-events-none" />
            
            {/* Kinematic Linkage Diagram */}
            <div className="relative z-10 flex flex-col items-center font-mono">
              <div className="relative w-36 h-24 border border-dashed border-steel-700 rounded-sm flex items-center justify-center">
                <div className="absolute top-2 left-2 text-[8px] text-steel-500">JOINT &theta;1 BASE</div>
                <div className="absolute bottom-2 right-2 text-[8px] text-cyan-telemetry">JOINT &theta;3 GRIPPER</div>
                {/* Visual kinematic links */}
                <svg className="w-full h-full p-2" viewBox="0 0 100 60">
                  <circle cx="20" cy="50" r="4" fill="#c8f202" />
                  <line x1="20" y1="50" x2="50" y2="25" stroke="#c8f202" strokeWidth="2" />
                  <circle cx="50" cy="25" r="4" fill="#00e5ff" />
                  <line x1="50" y1="25" x2="80" y2="35" stroke="#00e5ff" strokeWidth="2" />
                  <circle cx="80" cy="35" r="3" fill="#ffffff" />
                </svg>
              </div>
              <span className="text-[9px] text-steel-400 mt-2">
                MULTI-AXIS SERVO TRAJECTORY INTERPOLATION
              </span>
            </div>

            <div className="absolute top-3 right-3 font-mono text-[9px] text-steel-300 px-2 py-0.5 rounded bg-dark-900 border border-steel-700">
              KINEMATIC MODEL // CAD SOLIDWORKS
            </div>
          </div>
        );

      case 'earthquake-simulation':
        return (
          <div className="relative w-full h-56 bg-dark-950 flex items-center justify-center border-b border-steel-800 overflow-hidden group">
            <div className="absolute inset-0 bg-tech-lines opacity-40 pointer-events-none" />
            
            {/* Seismic Cam & Vibration Wave Graphic */}
            <div className="relative z-10 flex flex-col items-center font-mono text-center">
              <div className="px-4 py-2 rounded bg-dark-900 border border-steel-700/80 mb-2">
                <span className="text-[10px] text-lime font-bold">
                  GA25-370 GEAR MOTOR + CAM MECHANISM
                </span>
                <div className="text-[9px] text-steel-400">PWM OSCILLATION &rarr; SW-420 SEISMIC SENSOR</div>
              </div>
              <div className="flex items-center gap-1 h-8">
                {[4, 12, 8, 22, 16, 28, 10, 6, 24, 18, 12, 5].map((h, i) => (
                  <span
                    key={i}
                    className="w-1.5 bg-lime/80 rounded-t"
                    style={{ height: `${h}px` }}
                  />
                ))}
              </div>
              <span className="text-[9px] text-steel-400 mt-2">
                VARIABLE RICHTER INTENSITY (3.0 - 8.5)
              </span>
            </div>

            <div className="absolute top-3 right-3 font-mono text-[9px] text-lime px-2 py-0.5 rounded bg-lime/10 border border-lime/30">
              SEISMIC DYNAMICS // FAIL-SAFE ESCAPE
            </div>
          </div>
        );

      case 'vibration-alarm':
        return (
          <div className="relative w-full h-56 bg-dark-950 flex items-center justify-center border-b border-steel-800 overflow-hidden group">
            <div className="absolute inset-0 bg-tech-lines opacity-40 pointer-events-none" />
            
            {/* Radar / Intrusion Warning Vector Visual */}
            <div className="relative z-10 flex flex-col items-center font-mono">
              <div className="relative w-24 h-24 rounded-full border border-steel-700 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full border border-dashed border-lime/60 animate-spin" style={{ animationDuration: '8s' }} />
                <div className="w-2 h-2 rounded-full bg-lime animate-ping" />
                <span className="absolute -bottom-5 text-[9px] text-steel-300">
                  SW-420 THRESHOLD: ARMED
                </span>
              </div>
              <div className="text-[9px] text-steel-500 mt-4">
                SUB-MS RESPONSE // SG90 AUTOMATED LOCKDOWN
              </div>
            </div>

            <div className="absolute top-3 right-3 font-mono text-[9px] text-cyan-telemetry px-2 py-0.5 rounded bg-cyan-telemetry/10 border border-cyan-telemetry/30">
              INTERRUPT VECTOR // INT0 ACTIVE
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="projects" className="relative py-24 bg-dark-900/40 border-t border-steel-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="font-mono text-xs text-lime tracking-[0.2em] uppercase font-semibold flex items-center gap-2">
              <span>{lang === 'en' ? '// 03. FEATURED ENGINEERING SYSTEMS' : '// 03. النظم والمشاريع الهندسية المنفذة'}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight mt-2 uppercase">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              onClick={() => {
                setSelectedProject(project);
                sound.playClick();
              }}
              onMouseEnter={() => sound.playHover()}
              className="group cursor-pointer rounded-lg bg-dark-950 border border-steel-800 hover:border-lime/60 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl hover:shadow-[0_0_30px_rgba(200,242,2,0.1)] tech-bracket"
            >
              {/* Top Technical Schematic Graphic */}
              {renderProjectIllustration(project.id)}

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  {/* Category & Badge */}
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-lime font-bold">
                      PROJECT {project.number} // {project.year}
                    </span>
                    <span className="text-steel-400 text-[11px]">
                      {project.organization}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-display group-hover:text-lime transition-colors">
                    {project.title}
                  </h3>

                  {/* Subtitle / Role */}
                  <p className="text-xs font-mono text-steel-400">
                    {project.subtitle}
                  </p>

                  {/* Short Description */}
                  <p className="text-steel-300 text-xs sm:text-sm leading-relaxed font-sans">
                    {project.description}
                  </p>
                </div>

                {/* Hardware Specs Micro Table */}
                <div className="bg-dark-900/90 p-3.5 rounded border border-steel-800/80 font-mono text-[11px] space-y-1.5">
                  <div className="flex justify-between">
                    <span className="text-steel-500">CORE MCU:</span>
                    <span className="text-steel-200">{project.hardwareSpecs.mcu}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-steel-500">INTERFACING:</span>
                    <span className="text-steel-300 truncate max-w-[220px]">
                      {project.hardwareSpecs.protocols.join(', ')}
                    </span>
                  </div>
                </div>

                {/* Card Footer: Tags & Action */}
                <div className="pt-4 border-t border-steel-800 flex items-center justify-between">
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

                  <span className="inline-flex items-center gap-1 text-xs font-mono font-bold text-lime group-hover:translate-x-1 transition-transform">
                    <span>EXPLORE SPEC</span>
                    <ArrowUpRight size={15} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Deep-Dive Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
