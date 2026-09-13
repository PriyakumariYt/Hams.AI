import React from 'react';
import { Language } from '../types';
import { translations } from '../data/content';

interface ImpactNumbersProps {
  lang: Language;
}

export const ImpactNumbers: React.FC<ImpactNumbersProps> = ({ lang }) => {
  const t = translations[lang].metrics;

  return (
    <section className="px-3.5 sm:px-6 my-6 sm:my-10 max-w-4xl mx-auto">
      <div className="py-12 px-6 sm:px-10 bg-gradient-to-b from-stone-900 via-neutral-900 to-black text-white rounded-3xl shadow-xl">
        <div className="text-start mb-8 sm:mb-10">
          <span className="text-xs uppercase tracking-widest text-neutral-400 font-bold">
            {t.tag}
          </span>
          <h2 className="text-2xl sm:text-3xl font-black mt-1.5 text-white tracking-tight">
            {t.title}
          </h2>
        </div>

        <div className="space-y-8 sm:space-y-10">
          {/* Metric 1 */}
          <div className="border-b border-neutral-800 pb-6 sm:pb-8">
            <div className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-mono">
              {t.items[0].value}
            </div>
            <p className="text-xs sm:text-sm font-normal text-neutral-300 mt-2 leading-relaxed">
              {t.items[0].label}
            </p>
          </div>

          {/* Metric 2 */}
          <div className="border-b border-neutral-800 pb-6 sm:pb-8">
            <div className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-mono">
              {t.items[1].value}
            </div>
            <h3 className="text-sm sm:text-base font-semibold text-neutral-200 mt-2">
              {t.items[1].title}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1 leading-relaxed">
              {t.items[1].label}
            </p>
          </div>

          {/* Metric 3 */}
          <div className="border-b border-neutral-800 pb-6 sm:pb-8">
            <div className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-mono">
              {t.items[2].value}
            </div>
            <h3 className="text-sm sm:text-base font-semibold text-neutral-200 mt-2">
              {t.items[2].title}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1 leading-relaxed">
              {t.items[2].label}
            </p>
          </div>

          {/* Metric 4 */}
          <div className="border-b border-neutral-800 pb-6 sm:pb-8">
            <div className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-mono">
              {t.items[3].value}
            </div>
            <h3 className="text-sm sm:text-base font-semibold text-neutral-200 mt-2">
              {t.items[3].title}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1 leading-relaxed">
              {t.items[3].label}
            </p>
          </div>

          {/* Metric 5 */}
          <div>
            <div className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-mono">
              {t.items[4].value}
            </div>
            <h3 className="text-sm sm:text-base font-semibold text-neutral-200 mt-2">
              {t.items[4].title}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1 leading-relaxed">
              {t.items[4].label}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
