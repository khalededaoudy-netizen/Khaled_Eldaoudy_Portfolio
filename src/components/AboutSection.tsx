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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Refined Editorial Portrait & Specifications */}
          <div className="lg:col-span-5 rounded-lg bg-dark-950 border border-steel-800 relative overflow-hidden tech-bracket shadow-xl">
            {/* Background Subtle Circuit Accent */}
            <div className="absolute inset-0 bg-circuit-dots opacity-20 pointer-events-none" />

            {/* Editorial Portrait Frame */}
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-dark-900 group border-b border-steel-800">
              <img
                src={PERSONAL_INFO.profileImage}
                alt={lang === 'en' ? 'Portrait of Khaled Hamdy Eldaoudy' : 'صورة شخصية رسمية للمهندس خالد حمدي الداودي'}
                className="w-full h-full object-cover object-[50%_18%] transition-transform duration-700 group-hover:scale-[1.02]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/25 to-transparent pointer-events-none" />
              
              {/* Refined Inset Caption at Photo Base */}
              <div className="absolute bottom-4 left-4 right-4 z-10">
                <div className="bg-dark-950/90 backdrop-blur-md border border-steel-800/80 px-4 py-2.5 rounded shadow-lg">
                  <div className="font-display font-bold text-white text-base tracking-wide">
                    {lang === 'en' ? PERSONAL_INFO.name : PERSONAL_INFO.nameAr}
                  </div>
                  <div className="font-mono text-[11px] text-lime flex items-center justify-between mt-0.5">
                    <span>{lang === 'en' ? 'Mechatronics Engineer' : 'مهندس ميكاترونكس'}</span>
                    <span className="text-steel-400">Class of 2026</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Specifications Table */}
            <div className="relative z-10 p-6 space-y-3 font-mono text-xs">
              <div className="flex justify-between py-1.5 border-b border-steel-800/70">
                <span className="text-steel-400">{lang === 'en' ? 'Degree:' : 'الدرجة العلمية:'}</span>
                <span className="text-steel-200 text-right font-medium">{lang === 'en' ? PERSONAL_INFO.degree : PERSONAL_INFO.degreeAr}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-steel-800/70">
                <span className="text-steel-400">{lang === 'en' ? 'Institution:' : 'الجامعة:'}</span>
                <span className="text-steel-200 text-right font-medium">{lang === 'en' ? PERSONAL_INFO.university : PERSONAL_INFO.universityAr}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-steel-800/70">
                <span className="text-steel-400">{lang === 'en' ? 'Specialization:' : 'التخصص الدقيق:'}</span>
                <span className="text-steel-200 text-right font-medium">{lang === 'en' ? 'Embedded Systems & Robotics' : 'الأنظمة المدمجة والروبوتات'}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-steel-800/70">
                <span className="text-steel-400">{lang === 'en' ? 'Student Leadership:' : 'المنصب الطلابي:'}</span>
                <span className="text-steel-200 text-right font-medium">{lang === 'en' ? 'President, Student Union (2023–Present)' : 'رئيس اتحاد الطلاب (2023 - حتى الآن)'}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-steel-800/70">
                <span className="text-steel-400">{lang === 'en' ? 'Accredited Training:' : 'التدريب التخصصي:'}</span>
                <span className="text-cyan-telemetry text-right font-medium">{lang === 'en' ? '400+ Certified Hours (ITI, NTI)' : '400+ ساعة معتمدة (ITI، NTI)'}</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-steel-400">{lang === 'en' ? 'Location:' : 'الموقع:'}</span>
                <span className="text-steel-200 text-right font-medium">{lang === 'en' ? PERSONAL_INFO.location : PERSONAL_INFO.locationAr}</span>
              </div>

              {/* Engineering Philosophy Quote */}
              <div className="pt-4 mt-2 border-t border-steel-800">
                <div className="text-[10px] text-steel-400 uppercase tracking-widest flex items-center gap-1.5 mb-1.5">
                  <Compass size={12} className="text-lime" />
                  <span>{lang === 'en' ? 'ENGINEERING PHILOSOPHY' : 'الفلسفة الهندسية'}</span>
                </div>
                <p className="text-xs text-steel-300 italic leading-relaxed">
                  "{lang === 'en' ? PERSONAL_INFO.engineeringPhilosophy : PERSONAL_INFO.engineeringPhilosophyAr}"
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Biography & 4 Core Pillars */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-sans leading-tight">
                {lang === 'en'
                  ? 'Disciplined fusion of embedded firmware, control loops, and autonomous physical machines.'
                  : 'تكامل دقيق بين البرمجيات المدمجة، ونظم التحكم المغلقة، والآلات الميكانيكية ذاتية التشغيل.'}
              </h3>
              
              <div className="space-y-4 text-steel-300 text-sm sm:text-base leading-relaxed">
                <p>
                  {lang === 'en'
                    ? 'Khaled Hamdy Eldaoudy is a fourth-year Mechatronics Engineering student at Zagazig National University with proven practical experience in embedded systems, control engineering, and robotics. Having led 10+ technical builds across competitive university arenas, he bridges low-level C/C++ firmware, discrete PID control, and SolidWorks CAD modeling into functional physical systems.'
                    : 'خالد حمدي الداودي طالب بالسنة الرابعة في هندسة الميكاترونكس بجامعة الزقازيق الأهلية، يمتلك خبرة عملية مؤكدة في الأنظمة المدمجة وهندسة التحكم والروبوتات. قاد أكثر من 10 مشاريع تقنية في ساحات المسابقات الجامعية، جامعاً بين برمجة المتحكمات بلغات C/C++، وتطبيق خوارزميات التحكم PID، والتصميم الميكانيكي ببرنامج SolidWorks.'}
                </p>

                <p>
                  {lang === 'en'
                    ? 'His engineering foundation is reinforced by 400+ hours of accredited technical training, including the intensive 162-hour Embedded Systems Summer Program at ITI (Smart Village) and the 120-hour Machine Learning Program at NTI/ITIDA (achieving an 89% final score). As President of the Engineering College Student Union, he demonstrates executive leadership, team organization, and technical representation alongside his core engineering work.'
                    : 'وتتعزز خبرته بأكثر من 400 ساعة تدريب تقني معتمد، تشمل تدريب الأنظمة المدمجة المكثف بمعهد تكنولوجيا المعلومات ITI (162 ساعة) وتدريب تعلم الآلة بالمعهد القومي للاتصالات NTI (120 ساعة بدرجة 89%). وبصفته رئيساً لاتحاد طلاب كلية الهندسة، يجمع بين الكفاءة التقنية ومهارات القيادة والتواصل والعمل الجماعي.'}
                </p>
              </div>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={idx}
                    onMouseEnter={() => sound.playHover()}
                    className="p-4 sm:p-5 rounded-lg bg-dark-950 border border-steel-800 hover:border-steel-600 transition-colors group space-y-2.5"
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
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-dark-950 border border-steel-800 text-[11px] font-mono text-steel-300"
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
