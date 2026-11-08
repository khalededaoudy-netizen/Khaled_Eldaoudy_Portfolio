import React, { useEffect, useRef } from 'react';
import { X, Cpu, Radio, CheckCircle, Activity } from 'lucide-react';
import { Project } from '../data/portfolioData';
import { sound } from '../utils/soundEffects';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  lang?: 'en' | 'ar';
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, lang = 'en' }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previouslyFocusedElementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (project) {
      previouslyFocusedElementRef.current = document.activeElement as HTMLElement;
      document.body.style.overflow = 'hidden';

      // Focus close button on mount
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 50);

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
          return;
        }

        // Focus trap
        if (e.key === 'Tab' && modalRef.current) {
          const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          if (focusableElements.length === 0) return;

          const firstElement = focusableElements[0];
          const lastElement = focusableElements[focusableElements.length - 1];

          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              e.preventDefault();
              lastElement.focus();
            }
          } else {
            if (document.activeElement === lastElement) {
              e.preventDefault();
              firstElement.focus();
            }
          }
        }
      };

      window.addEventListener('keydown', handleKeyDown);

      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
        // Restore focus to trigger element
        previouslyFocusedElementRef.current?.focus();
      };
    }
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-10 bg-dark-950/85 backdrop-blur-md animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      {/* Backdrop click */}
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Dialog Window */}
      <div
        ref={modalRef}
        tabIndex={-1}
        className="relative w-full max-w-4xl max-h-[92vh] bg-dark-900 border border-steel-700/80 rounded-lg shadow-2xl flex flex-col overflow-hidden z-10 tech-bracket outline-none"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-steel-800 bg-dark-950 text-xs font-mono">
          <div className="flex items-center gap-2 sm:gap-3 truncate pr-2 rtl:pr-0 rtl:pl-2">
            <span className="w-2 h-2 rounded-full bg-lime animate-ping flex-shrink-0" aria-hidden="true" />
            <span className="text-lime font-bold truncate">
              {lang === 'en' ? `PROJECT ${project.number} // SPECIFICATION` : `المشروع ${project.number} // المواصفات الهندسية`}
            </span>
            <span className="text-steel-600 hidden sm:inline" aria-hidden="true">|</span>
            <span className="text-steel-400 hidden sm:inline truncate">{lang === 'en' ? project.category : project.categoryAr}</span>
          </div>
          <button
            ref={closeButtonRef}
            onClick={() => {
              onClose();
              sound.playClick();
            }}
            className="min-h-[44px] min-w-[44px] p-2 rounded text-steel-400 hover:text-white hover:bg-steel-800 transition-colors flex items-center justify-center focus-visible:ring-2 focus-visible:ring-lime"
            aria-label={lang === 'en' ? 'Close project specifications modal' : 'إغلاق نافذة المواصفات'}
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-4 sm:p-6 lg:p-8 overflow-y-auto space-y-6 sm:space-y-8 scrollbar-thin">
          
          {/* Title & Badge */}
          <div className="space-y-2">
            <div className="inline-block px-2.5 py-1 rounded bg-lime/10 border border-lime/30 text-lime font-mono text-[11px] font-semibold">
              {project.badgeText}
            </div>
            <h2 id="modal-project-title" className="text-xl xs:text-2xl sm:text-4xl font-extrabold text-white font-display uppercase tracking-tight break-words">
              {lang === 'en' ? project.title : project.titleAr}
            </h2>
            <p className="text-steel-400 font-mono text-xs">
              {lang === 'en' ? project.subtitle : project.subtitleAr} &middot; {project.year} &middot; {project.organization}
            </p>
          </div>

          {/* Hardware Signal Flow Schematic Block Diagram */}
          <div className="bg-dark-950 p-4 sm:p-5 rounded-lg border border-steel-800 space-y-3 sm:space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-steel-800 pb-2 gap-1.5 sm:gap-2">
              <span className="text-xs font-mono text-lime font-bold flex items-center gap-1.5">
                <Activity size={13} aria-hidden="true" />
                {lang === 'en' ? 'HARDWARE ARCHITECTURE & SIGNAL FLOW' : 'المخطط الهندسي وتدفق الإشارات العتادية'}
              </span>
              <span className="text-[10px] font-mono text-steel-400">
                {lang === 'en' ? 'SCHEMATIC BLOCK DIAGRAM' : 'رسم تخطيطي لبنية المشروع'}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3 pt-2">
              {/* Inputs */}
              <div className="bg-dark-900 p-3 rounded border border-steel-800 text-xs font-mono space-y-2">
                <div className="text-[10px] text-steel-400 uppercase font-bold border-b border-steel-800 pb-1">
                  <span>{lang === 'en' ? '1. INPUTS / SENSORS' : '1. المدخلات والحساسات'}</span>
                </div>
                <div className="space-y-1">
                  {project.schematicDiagram.inputs.map((inp, idx) => (
                    <div key={idx} className="text-steel-300 text-[11px] bg-dark-950 px-2 py-1 rounded border border-steel-800/80">
                      {inp}
                    </div>
                  ))}
                </div>
              </div>

              {/* Processing Core */}
              <div className="bg-dark-900 p-3 rounded border border-lime/30 text-xs font-mono space-y-2">
                <div className="text-[10px] text-lime uppercase font-bold border-b border-steel-800 pb-1 flex items-center gap-1">
                  <Cpu size={12} aria-hidden="true" />
                  <span>{lang === 'en' ? '2. MCU / FIRMWARE' : '2. المتحكم والبرمجيات'}</span>
                </div>
                <div className="space-y-1">
                  {project.schematicDiagram.processing.map((prc, idx) => (
                    <div key={idx} className="text-lime-bright text-[11px] bg-dark-950 px-2 py-1 rounded border border-lime/20">
                      {prc}
                    </div>
                  ))}
                </div>
              </div>

              {/* Outputs */}
              <div className="bg-dark-900 p-3 rounded border border-steel-800 text-xs font-mono space-y-2">
                <div className="text-[10px] text-steel-400 uppercase font-bold border-b border-steel-800 pb-1">
                  <span>{lang === 'en' ? '3. ACTUATORS / OUTPUTS' : '3. المشغلات والمخرجات'}</span>
                </div>
                <div className="space-y-1">
                  {project.schematicDiagram.outputs.map((out, idx) => (
                    <div key={idx} className="text-steel-300 text-[11px] bg-dark-950 px-2 py-1 rounded border border-steel-800/80">
                      {out}
                    </div>
                  ))}
                </div>
              </div>

              {/* Communication */}
              <div className="bg-dark-900 p-3 rounded border border-steel-800 text-xs font-mono space-y-2">
                <div className="text-[10px] text-cyan-telemetry uppercase font-bold border-b border-steel-800 pb-1 flex items-center gap-1">
                  <Radio size={12} aria-hidden="true" />
                  <span>{lang === 'en' ? '4. PROTOCOLS / BUS' : '4. بروتوكولات الاتصال'}</span>
                </div>
                <div className="space-y-1">
                  {project.schematicDiagram.communication.map((com, idx) => (
                    <div key={idx} className="text-cyan-telemetry text-[11px] bg-dark-950 px-2 py-1 rounded border border-steel-800/80">
                      {com}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="text-[9px] font-mono text-steel-400 pt-1">
              * {lang === 'en'
                ? 'Architectural block diagram reflecting authentic project hardware configuration.'
                : 'رسم تخطيطي يعكس التكوين العتادي الفعلي الموثق للمشروع.'}
            </div>
          </div>

          {/* Full Narrative Overview */}
          <div className="space-y-2.5 font-sans">
            <h3 className="text-sm font-bold text-white uppercase font-mono tracking-wider">
              {lang === 'en' ? 'Technical Description & Implementation' : 'الوصف الفني والتنفيذ العملي'}
            </h3>
            <p className="text-steel-300 text-sm leading-relaxed">
              {lang === 'en' ? project.fullOverview : project.fullOverviewAr}
            </p>
          </div>

          {/* Key Implementation Highlights */}
          <div className="space-y-2.5">
            <h3 className="text-sm font-bold text-white uppercase font-mono tracking-wider">
              {lang === 'en' ? 'Technical Highlights & Deliverables' : 'أبرز مميزات ومخرجات المشروع'}
            </h3>
            <ul className="space-y-2">
              {(lang === 'en' ? project.highlights : project.highlightsAr).map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-steel-300">
                  <CheckCircle size={15} className="text-lime flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Hardware Bill of Materials (BOM) Specs */}
          <div className="bg-dark-950 p-4 sm:p-5 rounded border border-steel-800 space-y-3">
            <div className="text-xs font-mono text-steel-300 uppercase font-bold border-b border-steel-800 pb-2">
              {lang === 'en' ? 'HARDWARE SPECIFICATIONS & COMPONENTS' : 'المواصفات العتادية والمكونات المستخدمة'}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
              <div className="space-y-1">
                <span className="text-steel-400 block text-[10px]">{lang === 'en' ? 'MICROCONTROLLER:' : 'المتحكم الدقيق:'}</span>
                <span className="text-steel-100 font-bold">{project.hardwareSpecs.mcu}</span>
              </div>
              <div className="space-y-1">
                <span className="text-steel-400 block text-[10px]">{lang === 'en' ? 'SIMULATION / CAD:' : 'المحاكاة والتصميم:'}</span>
                <span className="text-steel-100">{project.hardwareSpecs.simulation}</span>
              </div>
              <div className="space-y-1">
                <span className="text-steel-400 block text-[10px]">{lang === 'en' ? 'SENSORS:' : 'الحساسات المستخدمة:'}</span>
                <span className="text-steel-300">{project.hardwareSpecs.sensors.join(', ')}</span>
              </div>
              <div className="space-y-1">
                <span className="text-steel-400 block text-[10px]">{lang === 'en' ? 'ACTUATORS & MOTORS:' : 'المحركات والمشغلات:'}</span>
                <span className="text-steel-300">{project.hardwareSpecs.actuators.join(', ')}</span>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2 pt-1" aria-label="Project tags">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded bg-dark-950 border border-steel-800 text-[11px] font-mono text-steel-400"
              >
                #{tag}
              </span>
            ))}
          </div>

        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-t border-steel-800 bg-dark-950">
          <span className="text-[11px] font-mono text-steel-400 hidden xs:inline">
            KHALED HAMDY ELDAOUDY
          </span>
          <button
            onClick={() => {
              onClose();
              sound.playClick();
            }}
            className="min-h-[44px] px-5 py-2.5 rounded bg-steel-800 hover:bg-steel-700 text-steel-200 text-xs font-mono transition-colors focus-visible:ring-2 focus-visible:ring-lime ml-auto rtl:ml-0 rtl:mr-auto"
          >
            {lang === 'en' ? 'CLOSE SPECIFICATION' : 'إغلاق المواصفات'}
          </button>
        </div>

      </div>
    </div>
  );
};
