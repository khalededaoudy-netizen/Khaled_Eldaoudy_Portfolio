import React, { useState } from 'react';
import { CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';
import { sound } from '../utils/soundEffects';

interface CertificationsProps {
  lang: 'en' | 'ar';
}

export const CertificationsSection: React.FC<CertificationsProps> = ({ lang }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: lang === 'en' ? 'All Credentials' : 'جميع الشهادات' },
    { id: 'Embedded & Firmware', label: lang === 'en' ? 'Embedded & Firmware' : 'الأنظمة المدمجة' },
    { id: 'AI & Data Science', label: lang === 'en' ? 'AI & Data Science' : 'الذكاء الاصطناعي والبيانات' },
    { id: 'CAD & Mechanical', label: lang === 'en' ? 'CAD & Mechanical' : 'التصميم الميكانيكي' },
  ];

  const filteredCerts = CERTIFICATIONS.filter((c) => {
    if (selectedCategory === 'all') return true;
    return c.category === selectedCategory;
  });

  return (
    <section id="certifications" className="relative py-16 sm:py-24 bg-dark-950 border-t border-steel-800/80" aria-labelledby="certs-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-4">
          <div>
            <div className="font-mono text-xs text-lime tracking-[0.2em] uppercase font-semibold flex items-center gap-2" aria-hidden="true">
              <span>{lang === 'en' ? '// 06. 400+ HOURS OF ACCREDITED RIGOR' : '// 06. أكثر من 400 ساعة تدريبية معتمدة'}</span>
            </div>
            <h2 id="certs-heading" className="text-2xl xs:text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight mt-2 uppercase">
              {lang === 'en' ? (
                <>Training & <span className="text-lime">Credentials.</span></>
              ) : (
                <>التدريب التخصصي <span className="text-lime">والشهادات.</span></>
              )}
            </h2>
          </div>

          {/* Filter Pills with 44px touch targets */}
          <div
            className="flex flex-wrap items-center gap-2 bg-dark-900 p-1.5 rounded border border-steel-800 text-xs font-mono"
            role="toolbar"
            aria-label={lang === 'en' ? 'Filter certifications by category' : 'تصفية الشهادات حسب التخصص'}
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  sound.playClick();
                }}
                className={`min-h-[44px] px-3.5 py-2 rounded transition-colors focus-visible:ring-1 focus-visible:ring-lime ${
                  selectedCategory === cat.id
                    ? 'bg-lime text-dark-950 font-bold'
                    : 'text-steel-400 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3 Featured Key Programs Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-8 sm:mb-12">
          
          {/* Card 1: ITI */}
          <div className="p-5 sm:p-6 rounded-lg bg-dark-900 border border-lime/40 relative overflow-hidden flex flex-col justify-between space-y-4 tech-bracket shadow-lg">
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="px-2 py-0.5 rounded bg-lime/10 text-lime font-bold border border-lime/20">
                  162 HOURS
                </span>
                <span className="text-steel-400">JUL – AUG 2025</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white font-display">
                {lang === 'en' ? 'ITI Embedded Systems Summer Program' : 'برنامج التدريب الصيفي في الأنظمة المدمجة (ITI)'}
              </h3>
              <p className="text-xs font-mono text-steel-400">
                Information Technology Institute (ITI), Smart Village
              </p>
              <p className="text-xs text-steel-300 leading-relaxed font-sans">
                {lang === 'en'
                  ? 'Intensive practical training covering C Programming, Microcontroller Interfacing, Protocols, FreeRTOS, and Embedded Testing. Built and defended Smart Home capstone project supervised by Dr. Heba Saleh.'
                  : 'تدريب عملي مكثف شمل برمجة C، توصيل المتحكمات، بروتوكولات الاتصال، نظم التشغيل الفورية RTOS، واختبار الأنظمة المدمجة، وتصميم ومناقشة مشروع منزل ذكي بإشراف الدكتورة هبة صالح رئيس معهد ITI.'}
              </p>
            </div>
            <div className="pt-3 border-t border-steel-800 text-[11px] font-mono text-lime flex items-center gap-1.5">
              <ShieldCheck size={14} aria-hidden="true" />
              <span>{lang === 'en' ? 'Capstone Smart Home Defended' : 'مشروع التخرج دوفع عنه بامتياز'}</span>
            </div>
          </div>

          {/* Card 2: NTI */}
          <div className="p-5 sm:p-6 rounded-lg bg-dark-900 border border-cyan-telemetry/40 relative overflow-hidden flex flex-col justify-between space-y-4 tech-bracket shadow-lg">
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="px-2 py-0.5 rounded bg-cyan-telemetry/10 text-cyan-telemetry font-bold border border-cyan-telemetry/20">
                  120 HOURS
                </span>
                <span className="text-steel-400">SCORE: 89%</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white font-display">
                {lang === 'en' ? 'NTI / ITIDA Machine Learning Program' : 'تدريب تعلم الآلة المعتمد من NTI وITIDA'}
              </h3>
              <p className="text-xs font-mono text-steel-400">
                National Telecommunication Institute (NTI)
              </p>
              <p className="text-xs text-steel-300 leading-relaxed font-sans">
                {lang === 'en'
                  ? 'Completed intensive summer training covering Machine Learning fundamentals and applications combined with freelancing and professional skills. Achieved a final score of 89%.'
                  : 'إتمام برنامج تدريبي صيفي مكثف غطى أساسيات وتطبيقات تعلم الآلة مع مهارات العمل الحر والتطوير المهني، محققاً درجة نهائية 89%.'}
              </p>
            </div>
            <div className="pt-3 border-t border-steel-800 text-[11px] font-mono text-cyan-telemetry flex items-center gap-1.5">
              <Sparkles size={14} aria-hidden="true" />
              <span>{lang === 'en' ? 'Grade: 89% Final Score' : 'النتيجة النهائية: 89%'}</span>
            </div>
          </div>

          {/* Card 3: Obour Land */}
          <div className="p-5 sm:p-6 rounded-lg bg-dark-900 border border-steel-700 relative overflow-hidden flex flex-col justify-between space-y-4 tech-bracket shadow-lg">
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="px-2 py-0.5 rounded bg-dark-850 text-steel-200 font-bold border border-steel-700">
                  120 HOURS
                </span>
                <span className="text-steel-400">AUG – SEP 2025</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white font-display">
                {lang === 'en' ? 'Tetra Pak A3-Speed Industrial Systems' : 'تدريب أنظمة ماكينات تترا باك الصناعية'}
              </h3>
              <p className="text-xs font-mono text-steel-400">
                Obour Land for Food Industries Training Center
              </p>
              <p className="text-xs text-steel-300 leading-relaxed font-sans">
                {lang === 'en'
                  ? 'Practical training in packaging technology and aseptic processing, machine utilities, splicing, tube forming, sterilization, jaw mechanisms, and large-scale factory automation.'
                  : 'تدريب عملي على تكنولوجيا التعبئة والتغليف والمعالجة المعقمة، مرافق الماكينات (الكهرباء، البخار، الهواء المضغوط، H2O2)، آليات التشكيل، والتحكم الآلي في خطوط الإنتاج.'}
              </p>
            </div>
            <div className="pt-3 border-t border-steel-800 text-[11px] font-mono text-steel-300 flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-lime" aria-hidden="true" />
              <span>{lang === 'en' ? 'Factory Automation Training' : 'تدريب عملي على أتمتة المصانع'}</span>
            </div>
          </div>

        </div>

        {/* Detailed Credentials List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
          {filteredCerts.slice(3).map((cert) => (
            <div
              key={cert.id}
              onMouseEnter={() => sound.playHover()}
              className="p-4 sm:p-5 rounded bg-dark-900/60 border border-steel-800 hover:border-steel-600 transition-colors flex flex-col justify-between space-y-3"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="text-steel-400">{cert.date}</span>
                  <span className="text-lime text-[10px] bg-dark-950 px-2 py-0.5 rounded border border-steel-800">
                    {cert.category}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-white font-sans">
                  {lang === 'en' ? cert.title : cert.titleAr}
                </h3>
                <p className="text-xs font-mono text-steel-400">
                  {cert.issuer}
                </p>
                <p className="text-xs text-steel-400 leading-relaxed font-sans pt-1">
                  {lang === 'en' ? cert.description : cert.descriptionAr}
                </p>
              </div>

              <div className="pt-2 border-t border-steel-800/60 flex items-center justify-between text-[10px] font-mono text-steel-400">
                <span>{lang === 'en' ? 'CREDENTIAL STATUS' : 'حالة الشهادة'}</span>
                <span className="text-steel-300 font-medium">{lang === 'en' ? 'COMPLETED •' : 'معتمدة ومكتملة •'}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
