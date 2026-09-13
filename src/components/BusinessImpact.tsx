import React from 'react';
import { Language } from '../types';
import { translations } from '../data/content';

interface BusinessImpactProps {
  lang: Language;
}

export const BusinessImpact: React.FC<BusinessImpactProps> = ({ lang }) => {
  const t = translations[lang].businessImpact;

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 bg-slate-50 border-t border-b border-slate-200/80">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            {t.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1.5 font-medium">
            {t.subtitle}
          </p>
        </div>

        {/* Impact Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {t.stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200 text-center shadow-2xs hover:shadow-xs transition"
            >
              <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-mono">
                {stat.value}
              </div>
              <div className="text-[11px] sm:text-xs font-medium text-slate-500 mt-1.5 leading-snug">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
