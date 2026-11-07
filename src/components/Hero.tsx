import React from 'react';
import { ArrowDown, Download, ChevronRight, Cpu, Compass, Activity, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ThreeHeroCanvas } from './ThreeHeroCanvas';
import { sound } from '../utils/soundEffects';

interface HeroProps {
  lang: 'en' | 'ar';
}

export const Hero: React.FC<HeroProps> = ({ lang }) => {
  return (
    <section className="relative min-h-screen w-full pt-24 pb-12 flex flex-col justify-between overflow-hidden bg-tech-grid">
      {/* Subtle Ambient Radial Lighting Behind 3D Object */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-lime/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-cyan-telemetry/5 rounded-full blur-[110px] pointer-events-none" />

      {/* Main Grid Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Expressive Editorial Typography & Copy */}
          <div className="lg:col-span-7 flex flex-col space-y-6 pt-4 lg:pt-0">
            
            {/* Telemetry Status Line */}
            <div className="inline-flex items-center gap-3 w-fit px-3 py-1.5 rounded-full bg-dark-900/90 border border-steel-700/60 shadow-inner">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-lime" />
              </span>
              <span className="font-mono text-xs text-steel-300 tracking-wide font-medium">
                {lang === 'en'
                  ? 'AVAILABLE FOR GRADUATION R&D & EMBEDDED INTERNSHIPS'
                  : 'متاح لمشاريع التخرج وفرص التدريب الهندسي وأنظمة التحكم'}
              </span>
            </div>

            {/* Huge Expressive Editorial Title */}
            <div className="space-y-1">
              <div className="font-mono text-xs text-lime tracking-[0.25em] uppercase font-semibold flex items-center gap-2">
                <span>[ 001 // SYSTEM SPECIFICATION ]</span>
                <span className="h-[1px] w-12 bg-lime/40" />
              </div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white font-display uppercase leading-[0.95]">
                Khaled <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-steel-100 via-steel-200 to-steel-400">
                  Hamdy
                </span> <br />
                <span className="text-lime-bright relative inline-block">
                  Eldaoudy
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-lime/30" />
                </span>
              </h1>
            </div>

            {/* Professional Headline */}
            <div className="border-l-2 border-lime/80 pl-4 py-1">
              <p className="text-lg sm:text-xl font-medium text-steel-200 font-sans tracking-wide">
                Mechatronics Engineering Senior &middot; Zagazig National University
              </p>
              <p className="text-sm font-mono text-steel-400 mt-1 flex flex-wrap items-center gap-2">
                <span className="text-cyan-telemetry"># Embedded Firmware</span>
                <span>&bull;</span>
                <span className="text-lime"># Autonomous Robotics</span>
                <span>&bull;</span>
                <span className="text-steel-300"># Closed-Loop Control</span>
              </p>
            </div>

            {/* Compelling Short Intro */}
            <p className="text-steel-300 text-sm sm:text-base leading-relaxed max-w-xl">
              {lang === 'en' ? (
                <>
                  Fourth-year Mechatronics Engineer synthesizing low-latency bare-metal C, 
                  sensor-fused autonomous robotics, and solid mechanical kinematics. 
                  President of the Engineering College Student Union with 400+ hours of advanced 
                  technical training at ITI and NTI.
                </>
              ) : (
                <>
                  مهندس ميكاترونكس بالسنة النهائية بجامعة الزقازيق الأهلية، يجمع بين برمجة الأنظمة المدمجة 
                  عالية الدقة، الروبوتات ذاتية القيادة، والتصميم الميكانيكي. رئيس اتحاد طلاب كلية الهندسة 
                  وحاصل على أكثر من 400 ساعة تدريبية مكثفة في معهد تكنولوجيا المعلومات ITI والمعهد القومي للاتصالات NTI.
                </>
              )}
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {PERSONAL_INFO.stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-dark-900/80 border border-steel-700/50 p-2.5 rounded tech-bracket transition-colors hover:border-steel-500"
                >
                  <div className="flex items-baseline gap-1">
                    <span className="text-xl sm:text-2xl font-bold font-mono text-steel-100">
                      {stat.value}
                    </span>
                    <span className="text-[10px] font-mono text-lime font-medium">
                      {stat.unit}
                    </span>
                  </div>
                  <div className="text-[11px] text-steel-400 font-medium tracking-tight mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Action Cluster */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a
                href="#projects"
                onMouseEnter={() => sound.playHover()}
                onClick={() => sound.playClick()}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded bg-lime hover:bg-lime-bright text-dark-950 font-bold font-mono text-xs uppercase tracking-wider transition-all shadow-[0_0_25px_rgba(200,242,2,0.25)] hover:shadow-[0_0_35px_rgba(200,242,2,0.45)]"
              >
                <span>EXPLORE TECHNICAL WORK</span>
                <ChevronRight size={16} strokeWidth={3} />
              </a>

              <a
                href={PERSONAL_INFO.cvFile}
                download="Khaled_Hamdy_Eldaoudy_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => sound.playHover()}
                onClick={() => {
                  sound.playSuccess();
                }}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded bg-dark-900 hover:bg-dark-850 border border-steel-700 hover:border-lime/60 text-steel-200 hover:text-white font-mono text-xs uppercase tracking-wider transition-all"
              >
                <Download size={15} />
                <span>DOWNLOAD CV (PDF)</span>
              </a>

              <a
                href="#contact"
                onMouseEnter={() => sound.playHover()}
                onClick={() => sound.playClick()}
                className="inline-flex items-center gap-1.5 px-4 py-3.5 text-steel-400 hover:text-lime font-mono text-xs uppercase tracking-wider transition-colors"
              >
                <span>GET IN TOUCH</span>
                <ExternalLink size={13} />
              </a>
            </div>

          </div>

          {/* Right Column: 3D Mechatronic Gimbal Interactive Canvas */}
          <div className="lg:col-span-5 relative w-full flex items-center justify-center">
            {/* Architectural Frame Border */}
            <div className="relative w-full h-[460px] sm:h-[540px] lg:h-[600px] rounded-lg bg-dark-900/40 border border-steel-700/50 backdrop-blur-md overflow-hidden shadow-2xl flex flex-col justify-between">
              
              {/* Header Telemetry Strip */}
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-steel-700/40 bg-dark-900/80 text-[10px] font-mono text-steel-400">
                <div className="flex items-center gap-2">
                  <Cpu size={13} className="text-lime" />
                  <span className="text-steel-200 font-semibold tracking-wider">
                    SIMULATION MATRIX // 3-AXIS GIMBAL
                  </span>
                </div>
                <div className="flex items-center gap-2 text-steel-400">
                  <Activity size={12} className="text-cyan-telemetry animate-pulse" />
                  <span>INTERACTIVE 3D</span>
                </div>
              </div>

              {/* 3D Three.js Viewport */}
              <div className="relative flex-1 w-full h-full">
                <ThreeHeroCanvas />
              </div>

              {/* Footer Specs Strip */}
              <div className="grid grid-cols-3 border-t border-steel-700/40 bg-dark-900/80 text-[10px] font-mono text-steel-400 divide-x divide-steel-700/40 text-center py-2">
                <div>
                  <span className="text-steel-500 block">ARM CORTEX:</span>
                  <span className="text-steel-200 font-medium">STM32 168MHz</span>
                </div>
                <div>
                  <span className="text-steel-500 block">CONTROL LOOP:</span>
                  <span className="text-lime font-medium">PID 1000 Hz</span>
                </div>
                <div>
                  <span className="text-steel-500 block">KINEMATICS:</span>
                  <span className="text-cyan-telemetry font-medium">3-DOF CLOSED</span>
                </div>
              </div>

              {/* Technical Notch Corner Markers */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-lime pointer-events-none" />
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-lime pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-lime pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-lime pointer-events-none" />
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Scroll Prompt Bar */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8 flex items-center justify-between z-10 border-t border-steel-800/60 mt-8">
        <div className="flex items-center gap-3 text-steel-500 font-mono text-xs">
          <Compass size={14} className="text-lime" />
          <span>COORDINATES: {PERSONAL_INFO.coordinates} // ZAGAZIG NATIONAL UNIV</span>
        </div>

        <a
          href="#about"
          onMouseEnter={() => sound.playHover()}
          onClick={() => sound.playClick()}
          className="flex items-center gap-2 text-steel-400 hover:text-lime font-mono text-xs transition-colors group"
        >
          <span>SCROLL FOR ARCHITECTURE</span>
          <ArrowDown size={14} className="group-hover:translate-y-1 transition-transform" />
        </a>
      </div>
    </section>
  );
};
