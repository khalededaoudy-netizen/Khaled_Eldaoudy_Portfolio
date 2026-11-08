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
      title: lang === 'en' ? "Embedded Systems & Firmware" : "الأنظمة المدمجة والبرمجيات الدقيقة",
      desc: lang === 'en'
        ? "Developing firmware in C, C++, and Embedded C across Arduino, ESP32, STM32, and AVR (ATmega32) microcontrollers."
        : "تطوير البرمجيات المدمجة بلغات C وC++ وEmbedded C لمتحكمات Arduino وESP32 وSTM32 وAVR.",
    },
    {
      icon: Layers,
      title: lang === 'en' ? "Control & Dynamic Simulation" : "نظم التحكم والمحاكاة الديناميكية",
      desc: lang === 'en'
        ? "Applying closed-loop PID control and system modeling using MATLAB and Simulink for mobile robots and test rigs."
        : "تطبيق خوارزميات التحكم في الحلقة المغلقة PID والنمذجة الرياضية ببرنامجي MATLAB وSimulink للروبوتات المتنقلة.",
    },
    {
      icon: Wrench,
      title: lang === 'en' ? "Robotics & CAD Mechanical Design" : "الروبوتات والتصميم الميكانيكي CAD",
      desc: lang === 'en'
        ? "Designing autonomous sumo robots, soccer robots, multi-DOF arms, and mechanical cam mechanisms in SolidWorks."
        : "تصميم روبوتات السومو وكرة القدم والأذرع الروبوتية والكامات الميكانيكية ببرنامج SolidWorks.",
    },
    {
      icon: Shield,
      title: lang === 'en' ? "Student Union Leadership & Representation" : "القيادة الطلابية والتمثيل المؤسسي",
      desc: lang === 'en'
        ? "Serving as President of the Engineering College Student Union at Zagazig National University, organizing major events and expo representation."
        : "رئاسة اتحاد طلاب كلية الهندسة بجامعة الزقازيق الأهلية، وتمثيل الكلية في المحافل والمعارض القومية وتنظيم الأنشطة.",
    },
  ];

  const badges = lang === 'en' ? [
    'ITI Embedded Systems (162 Hours)',
    'NTI Machine Learning (120 Hours, 89%)',
    'Student Union President (ZNU)',
    'Prime Minister Commended (RoboSoccer)',
    'SolidWorks CAD Workshop (2B Digital)',
  ] : [
    'تدريب الأنظمة المدمجة ITI (162 ساعة)',
    'تدريب تعلم الآلة NTI (120 ساعة - 89%)',
    'رئيس اتحاد طلاب هندسة الزقازيق الأهلية',
    'تكريم رئيس الوزراء (روبوسوكر)',
    'ورشة عمل SolidWorks المعتمدة',
  ];

  return (
    <section id="about" className="relative py-24 bg-dark-900/60 border-t border-steel-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="font-mono text-xs text-lime tracking-[0.2em] uppercase font-semibold flex items-center gap-2">
              <span>{lang === 'en' ? '// 01. PROFILE & METHODOLOGY' : '// 01. الملف التعريفي والمنهجية'}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight mt-2 uppercase">
              {lang === 'en' ? (
                <>Engineering <span className="text-steel-400">Intelligence.</span></>
              ) : (
                <>الرؤية <span className="text-steel-400">الهندسية والخبرة.</span></>
              )}
            </h2>
          </div>
          <p className="font-mono text-xs text-steel-400 max-w-md">
            {lang === 'en'
              ? 'ZAGAZIG NATIONAL UNIVERSITY · 4TH YEAR SENIOR · MECHATRONICS CREDIT-HOUR PROGRAM'
              : 'جامعة الزقازيق الأهلية · السنة الرابعة · برنامج هندسة الميكاترونكس بنظام الساعات المعتمدة'}
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Authentic Technical Profile Card (No Fabricated ID or Coordinates) */}
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
                      {lang === 'en' ? PERSONAL_INFO.name : PERSONAL_INFO.nameAr}
                    </h3>
                    <p className="font-mono text-[11px] text-steel-400">
                      {lang === 'en' ? 'Mechatronics Engineering Senior' : 'طالب بالسنة الرابعة - هندسة ميكاترونكس'}
                    </p>
                  </div>
                </div>
                <div className="text-right font-mono text-[10px] text-lime flex items-center gap-1.5 bg-lime/10 px-2 py-1 rounded border border-lime/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse" />
                  {lang === 'en' ? 'VERIFIED CV' : 'بيانات معتمدة'}
                </div>
              </div>

              {/* Core Specifications Strictly From CV */}
              <div className="space-y-2.5 font-mono text-xs pt-2">
                <div className="flex justify-between py-1 border-b border-steel-800/60">
                  <span className="text-steel-400">{lang === 'en' ? 'Degree:' : 'الدرجة العلمية:'}</span>
                  <span className="text-steel-200 text-right">{lang === 'en' ? PERSONAL_INFO.degree : PERSONAL_INFO.degreeAr}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-steel-800/60">
                  <span className="text-steel-400">{lang === 'en' ? 'Institution:' : 'الجامعة والكلية:'}</span>
                  <span className="text-steel-200 text-right">{lang === 'en' ? `${PERSONAL_INFO.university}` : `${PERSONAL_INFO.universityAr}`}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-steel-800/60">
                  <span className="text-steel-400">{lang === 'en' ? 'Academic Standing:' : 'السنة الدراسية:'}</span>
                  <span className="text-lime text-right">{lang === 'en' ? `${PERSONAL_INFO.yearOfStudy} // Class of 2026` : `${PERSONAL_INFO.yearOfStudyAr} // تخرج 2026`}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-steel-800/60">
                  <span className="text-steel-400">{lang === 'en' ? 'Union Role:' : 'المنصب الطلابي:'}</span>
                  <span className="text-steel-200 text-right">{lang === 'en' ? 'President, Student Union (2023–Present)' : 'رئيس اتحاد الطلاب (2023 - حتى الآن)'}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-steel-800/60">
                  <span className="text-steel-400">{lang === 'en' ? 'Technical Training:' : 'التدريب التخصصي:'}</span>
                  <span className="text-cyan-telemetry text-right">{lang === 'en' ? '400+ Certified Hours (ITI, NTI, Obour Land)' : '400+ ساعة معتمدة (ITI، NTI، عبور لاند)'}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-steel-400">{lang === 'en' ? 'Location:' : 'الموقع:'}</span>
                  <span className="text-steel-200 text-right">{lang === 'en' ? PERSONAL_INFO.location : PERSONAL_INFO.locationAr}</span>
                </div>
              </div>
            </div>

            {/* Bottom Statement Card */}
            <div className="relative z-10 mt-8 pt-4 border-t border-steel-800 bg-dark-900/60 p-3.5 rounded border border-steel-700/40">
              <div className="text-[10px] font-mono text-steel-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <Compass size={12} className="text-lime" />
                <span>{lang === 'en' ? 'ENGINEERING POSITIONING' : 'التوجه المهني'}</span>
              </div>
              <p className="text-xs text-steel-300 italic font-mono leading-relaxed">
                "{lang === 'en' ? PERSONAL_INFO.engineeringPhilosophy : PERSONAL_INFO.engineeringPhilosophyAr}"
              </p>
            </div>
          </div>

          {/* Right Column: Narrative Biography & 4 Core Pillars */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white font-sans">
                {lang === 'en'
                  ? 'Multidisciplinary Engineering Mindset With Leadership & Competition Grit'
                  : 'عقلية هندسية متعددة التخصصات تجمع بين الإتقان التقني وروح التنافس والقيادة'}
              </h3>
              
              <p className="text-steel-300 text-sm sm:text-base leading-relaxed">
                {lang === 'en'
                  ? 'Khaled Hamdy Eldaoudy is a fourth-year Mechatronics Engineering student at Zagazig National University with proven practical experience in embedded systems, control engineering, and robotics. Having led 10+ technical projects across competitive university arenas, he bridges C/C++ firmware development, discrete PID control, and SolidWorks CAD modeling into functional physical systems.'
                  : 'خالد حمدي الداودي طالب بالسنة الرابعة في هندسة الميكاترونكس بجامعة الزقازيق الأهلية، يمتلك خبرة عملية مؤكدة في الأنظمة المدمجة وهندسة التحكم والروبوتات. قاد أكثر من 10 مشاريع تقنية في ساحات المسابقات الجامعية، جامعاً بين برمجة المتحكمات بلغات C/C++، وتطبيق خوارزميات التحكم PID، والتصميم الميكانيكي ببرنامج SolidWorks.'}
              </p>

              <p className="text-steel-300 text-sm sm:text-base leading-relaxed">
                {lang === 'en'
                  ? 'His profile is reinforced by 400+ hours of accredited technical training, including the intensive 162-hour Embedded Systems Summer Program at ITI (Smart Village) and the 120-hour Machine Learning Program at NTI/ITIDA (achieving an 89% final score). As President of the Engineering College Student Union, he demonstrates leadership, organization, and teamwork alongside his technical pursuits.'
                  : 'وتتعزز خبرته بأكثر من 400 ساعة تدريب تقني معتمد، تشمل تدريب الأنظمة المدمجة المكثف بمعهد تكنولوجيا المعلومات ITI (162 ساعة) وتدريب تعلم الآلة بالمعهد القومي للاتصالات NTI (120 ساعة بدرجة 89%). وبصفته رئيساً لاتحاد طلاب كلية الهندسة، يجمع بين الكفاءة التقنية ومهارات القيادة والتواصل والعمل الجماعي.'}
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

            {/* Badges Checklist */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              {badges.map((badge, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-dark-950 border border-steel-800 text-[11px] font-mono text-steel-300"
                >
                  <CheckCircle2 size={12} className="text-lime flex-shrink-0" />
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
