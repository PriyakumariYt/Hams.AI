import React from 'react';
import { Language } from '../types';
import { translations, workflowSteps } from '../data/content';

interface HowItWorksProps {
  lang: Language;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ lang }) => {
  const t = translations[lang].howItWorks;

  return (
    <section id="how-it-works" className="py-12 sm:py-16 px-4 sm:px-6 bg-slate-50 border-t border-slate-100">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 leading-snug">
            {t.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-2 max-w-md mx-auto leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {workflowSteps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-xs hover:shadow-sm transition duration-200"
            >
              <span className="text-[10px] sm:text-xs font-bold text-blue-600 uppercase tracking-widest">
                {step.step}
              </span>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-1">
                {step.title[lang]}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                {step.desc[lang]}
              </p>

              <div className="mt-4 sm:mt-5 rounded-xl overflow-hidden bg-slate-50 border border-slate-100 flex items-center justify-center p-3 sm:p-4">
                <img
                  src={step.image}
                  alt={step.alt}
                  className="w-full max-h-56 sm:max-h-72 object-contain"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
