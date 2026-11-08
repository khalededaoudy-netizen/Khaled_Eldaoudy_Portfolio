import React from 'react';
import { ShoppingBag, TrendingUp, Palette, PackageCheck, Layers } from 'lucide-react';
import { ENTREPRENEURIAL_EXPERIENCE } from '../data/portfolioData';
import { sound } from '../utils/soundEffects';

interface EntrepreneurialProps {
  lang: 'en' | 'ar';
}

export const EntrepreneurialSection: React.FC<EntrepreneurialProps> = ({ lang }) => {
  const icons: Record<string, React.ElementType> = {
    'ctrl-store': ShoppingBag,
    'accessory-stores': Layers,
    'media-buyer': TrendingUp,
    'graphic-designer': Palette,
    'noon-amazon': PackageCheck,
  };

  return (
    <section id="entrepreneurial" className="relative py-16 sm:py-24 bg-dark-900/40 border-t border-steel-800/80" aria-labelledby="commerce-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-4">
          <div>
            <div className="font-mono text-xs text-lime tracking-[0.2em] uppercase font-semibold flex items-center gap-2" aria-hidden="true">
              <span>{lang === 'en' ? '// 07. THE MULTIDISCIPLINARY ADVANTAGE' : '// 07. الميزة المزدوجة: دمج الهندسة بالتجارة'}</span>
            </div>
            <h2 id="commerce-heading" className="text-2xl xs:text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight mt-2 uppercase">
              {lang === 'en' ? (
                <>Commercial <span className="text-steel-400">Execution.</span></>
              ) : (
                <>التنفيذ <span className="text-steel-400">التجاري والتسويقي.</span></>
              )}
            </h2>
          </div>
          <p className="font-mono text-xs text-steel-400 max-w-md">
            {lang === 'en'
              ? 'ENGINEERING PRECISION MEETS MARKET VIABILITY · E-COMMERCE · DIGITAL MEDIA BUYING · SUPPLY CHAIN'
              : 'دقة هندسية تقترن بالجدوى التجارية · التجارة الإلكترونية · الإعلانات الرقمية الموجهة'}
          </p>
        </div>

        {/* Narrative Banner */}
        <div className="mb-8 sm:mb-10 p-5 sm:p-6 rounded-lg bg-dark-950 border border-steel-800 text-xs sm:text-sm text-steel-300 leading-relaxed font-sans flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6">
          <div className="space-y-1 max-w-3xl">
            <span className="font-mono text-lime font-bold text-xs uppercase tracking-wider block">
              {lang === 'en' ? 'THE HARDWARE + COMMERCE SYNERGY' : 'التكامل بين الهندسة والتجارة الرقمية'}
            </span>
            <p>
              {lang === 'en'
                ? 'Khaled has founded and operated e-commerce brands, managed paid advertising with rigorous return-on-ad-spend (ROAS) analysis, and coordinated direct-to-consumer logistics. This commercial background ensures he approaches engineering challenges not as isolated code, but as viable, user-focused, and cost-optimized deliverables.'
                : 'أطلق خالد وأدار علامات تجارية إلكترونية، وأدار حملات إعلانية ممولة مع تحليل دقيق للعائد الإعلاني ROAS وسلاسل الإمداد. هذه الخبرة تمكنه من التعامل مع التحديات الهندسية برؤية شاملة توازن بين الدقة التقنية والجدوى الاقتصادية واحتياجات المستخدمين.'}
            </p>
          </div>
          <div className="flex-shrink-0 font-mono text-xs text-steel-400 bg-dark-900 p-3 rounded border border-steel-800 text-center w-full md:w-auto">
            <span className="text-lime font-bold block text-base">3+ STORES</span>
            <span className="text-[10px] text-steel-400">
              {lang === 'en' ? 'E-COMMERCE TRACK RECORD' : 'سجل تجاري مثبت'}
            </span>
          </div>
        </div>

        {/* Ventures Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {ENTREPRENEURIAL_EXPERIENCE.map((item) => {
            const Icon = icons[item.id] || ShoppingBag;
            return (
              <div
                key={item.id}
                onMouseEnter={() => sound.playHover()}
                className="p-5 sm:p-6 rounded-lg bg-dark-950 border border-steel-800 hover:border-steel-600 transition-all flex flex-col justify-between space-y-4 group tech-bracket"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-lime font-medium">{item.period}</span>
                    <span className="text-steel-400 text-[10px]">{lang === 'en' ? item.metrics : item.metricsAr}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded bg-dark-900 border border-steel-800 text-steel-300 group-hover:text-lime group-hover:border-lime/40 transition-colors">
                      <Icon size={18} aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white font-display group-hover:text-lime transition-colors">
                        {lang === 'en' ? item.role : item.roleAr}
                      </h3>
                      <p className="text-xs font-mono text-steel-400">
                        {item.entity}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs font-mono text-steel-400 italic">
                    "{lang === 'en' ? item.tagline : item.taglineAr}"
                  </p>

                  <div className="space-y-2 pt-1">
                    {(lang === 'en' ? item.points : item.pointsAr).map((pt, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-steel-300 leading-relaxed font-sans">
                        <span className="text-lime font-mono text-xs rtl:rotate-180" aria-hidden="true">&rarr;</span>
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-steel-800/60 flex items-center justify-between text-[10px] font-mono text-steel-400">
                  <span>{lang === 'en' ? 'OPERATIONAL RECORD' : 'السجل التشغيلي'}</span>
                  <span className="text-lime font-mono">{lang === 'en' ? 'COMMERCIAL VENTURE' : 'نشاط تجاري واقعي'}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
