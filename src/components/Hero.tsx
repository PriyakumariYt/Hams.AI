import React from 'react';
import { Language } from '../types';
import { translations } from '../data/content';
import { Bot, Sparkles } from 'lucide-react';

interface HeroProps {
  lang: Language;
  onOpenDemo: () => void;
  onOpenSandbox: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onOpenDemo, onOpenSandbox }) => {
  const t = translations[lang];

  return (
    <section className="pt-8 sm:pt-14 pb-12 sm:pb-16 px-4 sm:px-6 text-center flex flex-col items-center max-w-4xl mx-auto">
      {/* Platform Highlight Pill */}
      <div className="inline-flex items-center gap-2 bg-slate-100 border border-slate-200/80 px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-700 mb-6 shadow-2xs">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        <span className="font-semibold">{t.hero.tag}</span>
      </div>

      {/* Main Hero Heading */}
      <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight text-slate-950 leading-[1.18] sm:leading-tight mb-5 max-w-2xl">
        {t.hero.title}
      </h1>

      {/* Subtitle */}
      <p className="text-sm sm:text-base leading-relaxed text-slate-600 max-w-xl mx-auto mb-8 font-normal">
        {t.hero.subtitle}
      </p>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-md">
        <button
          id="hero-book-demo-btn"
          onClick={onOpenDemo}
          className="w-full sm:w-auto flex-1 bg-black text-white text-center py-3.5 px-6 rounded-xl font-semibold text-sm tracking-wide shadow-md hover:bg-neutral-800 active:scale-98 transition transform duration-150"
        >
          {t.hero.bookDemo}
        </button>
        <button
          id="hero-open-sandbox-btn"
          onClick={onOpenSandbox}
          className="w-full sm:w-auto flex-1 bg-white text-slate-900 border border-slate-300 hover:border-slate-400 text-center py-3.5 px-5 rounded-xl font-semibold text-sm tracking-wide shadow-xs hover:bg-slate-50 transition flex items-center justify-center gap-2"
        >
          <Bot className="w-4 h-4 text-blue-600" />
          <span>{t.hero.trySandbox}</span>
        </button>
      </div>

      {/* Trusted Organizations Logos Strip */}
      <div className="w-full mt-12 sm:mt-16 pt-8 border-t border-slate-100">
        <p className="text-[11px] uppercase tracking-wider text-slate-400 font-bold mb-6">
          {t.hero.trustedBy}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 opacity-80 grayscale hover:grayscale-0 transition-all duration-300">
          {/* Tamkeen Tech Logo text mark */}
          <div className="flex items-center gap-1.5 font-bold text-sm tracking-tight text-slate-700">
            <span className="text-orange-500 font-black text-base">❯❮</span> Tamkeen Technologies
          </div>
          {/* SDAIA Partner representation */}
          <div className="flex items-center gap-1.5 font-bold text-xs sm:text-sm text-slate-700">
            <span className="text-blue-600 font-black">✦</span> SDAIA Partner
          </div>
          {/* Rewaa POS */}
          <div className="font-bold text-sm sm:text-base tracking-tight text-purple-800 flex items-center gap-1">
            <span>Rewaa</span>
            <span className="text-xs text-purple-600 font-semibold">رواء</span>
          </div>
          {/* Ashley Furniture */}
          <div className="font-bold text-sm sm:text-base text-slate-800 tracking-tight">
            Ashley.
          </div>
        </div>
      </div>
    </section>
  );
};
