import React, { useEffect } from 'react';
import { X, Cpu, Radio, CheckCircle, Activity } from 'lucide-react';
import { Project } from '../data/portfolioData';
import { sound } from '../utils/soundEffects';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-dark-950/80 backdrop-blur-md animate-fadeIn">
      {/* Backdrop click */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Dialog Window */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-dark-900 border border-steel-700/80 rounded-lg shadow-2xl flex flex-col overflow-hidden z-10 tech-bracket">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-steel-800 bg-dark-950 text-xs font-mono">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-lime animate-ping" />
            <span className="text-lime font-bold">SYSTEM SPECIFICATION // PROJECT {project.number}</span>
            <span className="text-steel-600">|</span>
            <span className="text-steel-400">{project.category}</span>
          </div>
          <button
            onClick={() => {
              onClose();
              sound.playClick();
            }}
            className="p-1 rounded text-steel-400 hover:text-white hover:bg-steel-800 transition-colors"
            aria-label="Close Modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 scrollbar-thin">
          
          {/* Title & Badge */}
          <div className="space-y-2">
            <div className="inline-block px-2.5 py-1 rounded bg-lime/10 border border-lime/30 text-lime font-mono text-[11px] font-semibold">
              {project.badgeText}
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display uppercase tracking-tight">
              {project.title}
            </h2>
            <p className="text-steel-400 font-mono text-xs">
              {project.subtitle} &middot; {project.year} &middot; {project.organization}
            </p>
          </div>

          {/* Hardware Signal Flow Schematic Block Diagram */}
          <div className="bg-dark-950 p-5 rounded-lg border border-steel-800 space-y-4">
            <div className="flex items-center justify-between border-b border-steel-800 pb-2">
              <span className="text-xs font-mono text-lime font-bold flex items-center gap-1.5">
                <Activity size={13} />
                HARDWARE ARCHITECTURE & SIGNAL FLOW
              </span>
              <span className="text-[10px] font-mono text-steel-500">SCHEMATIC BLOCK DIAGRAM</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 pt-2">
              {/* Inputs */}
              <div className="bg-dark-900 p-3 rounded border border-steel-800 text-xs font-mono space-y-2">
                <div className="text-[10px] text-steel-400 uppercase font-bold border-b border-steel-800 pb-1 flex items-center gap-1">
                  <span>1. INPUTS / SENSORS</span>
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
                  <Cpu size={12} />
                  <span>2. MCU / FIRMWARE</span>
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
                <div className="text-[10px] text-steel-400 uppercase font-bold border-b border-steel-800 pb-1 flex items-center gap-1">
                  <span>3. ACTUATORS / OUTPUTS</span>
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
                  <Radio size={12} />
                  <span>4. PROTOCOLS / BUS</span>
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
          </div>

          {/* Full Narrative Overview */}
          <div className="space-y-3 font-sans">
            <h4 className="text-sm font-bold text-white uppercase font-mono tracking-wider">
              Technical Description & Problem Scope
            </h4>
            <p className="text-steel-300 text-sm leading-relaxed">
              {project.fullOverview}
            </p>
          </div>

          {/* Key Implementation Highlights */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase font-mono tracking-wider">
              Engineering Deliverables & Circuit Validation
            </h4>
            <ul className="space-y-2">
              {project.highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-steel-300">
                  <CheckCircle size={15} className="text-lime flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Hardware Bill of Materials (BOM) Specs */}
          <div className="bg-dark-950 p-5 rounded border border-steel-800 space-y-3">
            <div className="text-xs font-mono text-steel-400 uppercase font-bold border-b border-steel-800 pb-2">
              HARDWARE BILL OF MATERIALS (BOM) & INTERFACING
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
              <div className="space-y-1">
                <span className="text-steel-500 block text-[10px]">MICROCONTROLLER CORE:</span>
                <span className="text-steel-100 font-bold">{project.hardwareSpecs.mcu}</span>
              </div>
              <div className="space-y-1">
                <span className="text-steel-500 block text-[10px]">SIMULATION & EDA:</span>
                <span className="text-steel-100">{project.hardwareSpecs.simulation}</span>
              </div>
              <div className="space-y-1">
                <span className="text-steel-500 block text-[10px]">SENSORS CONNECTED:</span>
                <span className="text-steel-300">{project.hardwareSpecs.sensors.join(', ')}</span>
              </div>
              <div className="space-y-1">
                <span className="text-steel-500 block text-[10px]">ACTUATORS & MOTORS:</span>
                <span className="text-steel-300">{project.hardwareSpecs.actuators.join(', ')}</span>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
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
        <div className="flex items-center justify-between px-6 py-4 border-t border-steel-800 bg-dark-950">
          <span className="text-[11px] font-mono text-steel-500">
            KHALED HAMDY ELDAOUDY // PROJECT ARCHIVE
          </span>
          <button
            onClick={() => {
              onClose();
              sound.playClick();
            }}
            className="px-4 py-2 rounded bg-steel-800 hover:bg-steel-700 text-steel-200 text-xs font-mono transition-colors"
          >
            CLOSE SPECIFICATION
          </button>
        </div>

      </div>
    </div>
  );
};
