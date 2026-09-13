import React from 'react';
import { Language } from '../types';
import { translations } from '../data/content';
import { CheckCircle2, Quote } from 'lucide-react';

interface TestimonialsProps {
  lang: Language;
  onOpenDemo: () => void;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ lang, onOpenDemo }) => {
  const t = translations[lang].testimonials;

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            {t.title}
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3.5 mb-5">
              <div className="w-11 h-11 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm shadow-xs">
                MA
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900">
                  {t.author}
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  {t.role}
                </p>
              </div>
            </div>

            <blockquote
              className={`text-xs sm:text-sm text-slate-700 leading-relaxed italic ${
                lang === 'ar'
                  ? 'border-r-2 border-slate-300 pr-3 sm:pr-4'
                  : 'border-l-2 border-slate-300 pl-3 sm:pl-4'
              }`}
            >
              {t.quote}
            </blockquote>
          </div>

          <div className="mt-6 pt-5 border-t border-slate-200/70 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
              <span className="text-orange-500 font-bold">✦</span>
              <span>{t.badge}</span>
            </div>
            <span className="inline-flex items-center gap-1 text-[11px] bg-emerald-100 text-emerald-800 font-semibold px-2.5 py-0.5 rounded-md">
              <CheckCircle2 className="w-3 h-3 text-emerald-600" />
              <span>{t.verified}</span>
            </span>
          </div>
        </div>

        {/* Client Logo Matrix */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4 sm:mt-6">
          <div className="border border-slate-200 rounded-xl p-3.5 flex items-center justify-center bg-white text-xs font-bold text-slate-700 shadow-2xs hover:border-slate-300 transition">
            Tamkeen Technologies
          </div>
          <div className="border border-slate-200 rounded-xl p-3.5 flex items-center justify-center bg-white text-xs font-bold text-slate-700 shadow-2xs hover:border-slate-300 transition">
            Ashley Furniture
          </div>
          <div className="border border-slate-200 rounded-xl p-3.5 flex items-center justify-center bg-white text-xs font-bold text-slate-700 shadow-2xs hover:border-slate-300 transition">
            SDAIA Ecosystem
          </div>
          <div className="border border-slate-200 rounded-xl p-3.5 flex items-center justify-center bg-white text-xs font-bold text-slate-700 shadow-2xs hover:border-slate-300 transition">
            Rewaa POS
          </div>
        </div>

        <div className="mt-6 sm:mt-8">
          <button
            onClick={onOpenDemo}
            className="w-full bg-black text-white text-center py-3.5 rounded-xl text-xs sm:text-sm font-semibold shadow hover:bg-neutral-800 transition"
          >
            {t.bookDemo}
          </button>
        </div>
      </div>
    </section>
  );
};
