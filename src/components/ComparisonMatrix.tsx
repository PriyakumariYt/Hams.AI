import React from 'react';
import { Language } from '../types';
import { translations } from '../data/content';
import { Check, X } from 'lucide-react';

interface ComparisonMatrixProps {
  lang: Language;
}

export const ComparisonMatrix: React.FC<ComparisonMatrixProps> = ({ lang }) => {
  const t = translations[lang].comparison;

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 leading-snug">
            {t.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-2.5 max-w-lg mx-auto leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Two-column Comparison Matrix Mobile Stack */}
        <div className="border border-slate-200 rounded-2xl overflow-hidden divide-y divide-slate-200 shadow-xs">
          {/* Matrix Header */}
          <div className="grid grid-cols-2 bg-slate-50 text-xs sm:text-sm font-bold py-3.5 px-4 sm:px-6 text-slate-800">
            <div className="text-slate-500 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-slate-400"></span>
              <span>{t.oldWay}</span>
            </div>
            <div className="text-black flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>{t.hamsWay}</span>
            </div>
          </div>

          {/* Rows */}
          {t.rows.map((row, idx) => {
            const isEven = idx % 2 === 1;
            return (
              <div
                key={idx}
                className={`grid grid-cols-2 text-xs sm:text-sm p-4 sm:p-5 gap-3 sm:gap-6 items-center ${
                  isEven ? 'bg-slate-50/40' : 'bg-white'
                }`}
              >
                <div className="text-slate-500 flex items-start gap-2 leading-relaxed">
                  <X className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <span>{row.old}</span>
                </div>
                <div className="font-semibold text-slate-900 flex items-start gap-2 leading-relaxed">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5 stroke-[2.5]" />
                  <span>{row.hams}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
