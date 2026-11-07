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
    <section id="entrepreneurial" className="relative py-24 bg-dark-900/40 border-t border-steel-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <div className="font-mono text-xs text-lime tracking-[0.2em] uppercase font-semibold flex items-center gap-2">
              <span>{lang === 'en' ? '// 07. THE MULTIDISCIPLINARY ADVANTAGE' : '// 07. الميزة المزدوجة: دمج الهندسة بالتجارة'}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight mt-2 uppercase">
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

        {/* Narrative Banner: Why this matters to engineering */}
        <div className="mb-10 p-6 rounded-lg bg-dark-950 border border-steel-800 text-xs sm:text-sm text-steel-300 leading-relaxed font-sans flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1 max-w-3xl">
            <span className="font-mono text-lime font-bold text-xs uppercase tracking-wider block">
              THE HARDWARE + COMMERCE SYNERGY
            </span>
            <p>
              Before and throughout his engineering degree, Khaled founded and operated profitable e-commerce brands, managed paid advertising budgets with rigorous ROAS metrics, and coordinated direct-to-consumer logistics. This commercial acumen ensures he approaches engineering challenges not as isolated code, but as viable, user-focused, and cost-optimized products.
            </p>
          </div>
          <div className="flex-shrink-0 font-mono text-xs text-steel-400 bg-dark-900 p-3 rounded border border-steel-800 text-center">
            <span className="text-lime font-bold block text-base">3+ STORES</span>
            <span className="text-[10px] text-steel-500">SCALED PROFITABLY</span>
          </div>
        </div>

        {/* Ventures Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ENTREPRENEURIAL_EXPERIENCE.map((item) => {
            const Icon = icons[item.id] || ShoppingBag;
            return (
              <div
                key={item.id}
                onMouseEnter={() => sound.playHover()}
                className="p-6 rounded-lg bg-dark-950 border border-steel-800 hover:border-steel-600 transition-all flex flex-col justify-between space-y-4 group tech-bracket"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-lime font-medium">{item.period}</span>
                    <span className="text-steel-500 text-[10px]">{item.metrics}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded bg-dark-900 border border-steel-800 text-steel-300 group-hover:text-lime group-hover:border-lime/40 transition-colors">
                      <Icon size={18} />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white font-display group-hover:text-lime transition-colors">
                        {item.role}
                      </h3>
                      <p className="text-xs font-mono text-steel-400">
                        {item.entity}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs font-mono text-steel-400 italic">
                    "{item.tagline}"
                  </p>

                  <div className="space-y-2 pt-2">
                    {item.points.map((pt, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-steel-300 leading-relaxed font-sans">
                        <span className="text-lime font-mono text-xs">&rarr;</span>
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-steel-800/60 flex items-center justify-between text-[10px] font-mono text-steel-500">
                  <span>MARKET TRACK RECORD</span>
                  <span className="text-steel-300 font-medium">VERIFIED</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
