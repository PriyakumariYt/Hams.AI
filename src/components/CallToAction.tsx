import React from 'react';
import { Language } from '../types';
import { translations } from '../data/content';

interface CallToActionProps {
  lang: Language;
  onOpenDemo: () => void;
}

export const CallToAction: React.FC<CallToActionProps> = ({ lang, onOpenDemo }) => {
  const t = translations[lang].cta;

  return (
    <section className="py-8 sm:py-12 px-4 sm:px-6 max-w-3xl mx-auto">
      <div className="bg-black text-white rounded-3xl p-7 sm:p-10 text-center shadow-xl relative overflow-hidden">
        {/* Decorative soft glow */}
        <div className="absolute -top-16 -right-16 w-44 h-44 rounded-full bg-neutral-800/50 blur-2xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-44 h-44 rounded-full bg-neutral-800/40 blur-2xl pointer-events-none" />

        <h2 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight relative z-10">
          {t.title}
        </h2>
        <p className="text-xs sm:text-sm text-neutral-300 mt-3.5 max-w-md mx-auto leading-relaxed relative z-10">
          {t.desc}
        </p>
        <div className="mt-6 sm:mt-8 relative z-10">
          <button
            onClick={onOpenDemo}
            className="inline-block w-full max-w-xs bg-white text-black text-xs sm:text-sm font-bold py-3.5 px-6 rounded-xl hover:bg-neutral-100 active:scale-98 transition shadow-md"
          >
            {t.button}
          </button>
        </div>
      </div>
    </section>
  );
};
