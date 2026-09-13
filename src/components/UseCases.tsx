import React, { useState } from 'react';
import { Language, UseCaseItem } from '../types';
import { translations, useCasesData } from '../data/content';
import { Sparkles, MessageSquare, ChevronRight, X, ArrowUpRight } from 'lucide-react';

interface UseCasesProps {
  lang: Language;
  onOpenSandboxWithPrompt: (promptText: string) => void;
}

export const UseCases: React.FC<UseCasesProps> = ({
  lang,
  onOpenSandboxWithPrompt,
}) => {
  const t = translations[lang].useCasesSection;
  const [selectedCase, setSelectedCase] = useState<UseCaseItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: lang === 'en' ? 'All Operations' : 'كافة العمليات' },
    { id: 'support', label: lang === 'en' ? 'Support & CSAT' : 'الدعم ورضا العملاء' },
    { id: 'finance', label: lang === 'en' ? 'Finance & Collections' : 'المالية والتحصيل' },
    { id: 'operations', label: lang === 'en' ? 'Booking & Operations' : 'الحجوزات والعمليات' },
    { id: 'sales', label: lang === 'en' ? 'Sales & Leads' : 'المبيعات وتأهيل العملاء' },
  ];

  const filteredCases =
    activeCategory === 'all'
      ? useCasesData
      : useCasesData.filter((item) => item.category === activeCategory);

  return (
    <section id="use-cases" className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            {t.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1.5 leading-relaxed">
            {t.subtitle}
          </p>

          {/* Quick Category filter pills */}
          <div className="flex overflow-x-auto hide-scrollbar gap-2 mt-4 pb-1">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition ${
                  activeCategory === cat.id
                    ? 'bg-slate-900 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 2-column Grid of Use Cases */}
        <div className="grid grid-cols-2 gap-2.5 sm:gap-4">
          {filteredCases.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedCase(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') setSelectedCase(item);
              }}
              className="p-3.5 sm:p-4 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-slate-100/80 hover:border-slate-300 transition-all cursor-pointer flex flex-col justify-between group shadow-2xs"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xl sm:text-2xl">{item.icon}</span>
                  <span className="text-[10px] text-slate-400 group-hover:text-blue-600 flex items-center transition">
                    <span className="hidden sm:inline">{lang === 'en' ? 'Details' : 'التفاصيل'}</span>
                    <ChevronRight className={`w-3.5 h-3.5 ${lang === 'ar' ? 'rotate-180' : ''}`} />
                  </span>
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 mt-2">
                  {item.title[lang]}
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-500 mt-1 leading-relaxed">
                  {item.desc[lang]}
                </p>
              </div>

              <div className="mt-3 pt-2 border-t border-slate-200/60 flex items-center justify-between text-[10px] text-slate-600">
                <span className="font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
                  {item.impactMetric[lang]}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* See all / reset button */}
        <div className="mt-6 sm:mt-8">
          <button
            onClick={() => {
              setActiveCategory('all');
              setSelectedCase(useCasesData[0]);
            }}
            className="w-full bg-black text-white text-xs sm:text-sm font-bold py-3.5 rounded-xl shadow hover:bg-neutral-800 transition"
          >
            {t.seeAll}
          </button>
        </div>
      </div>

      {/* Detail Modal for a selected use case */}
      {selectedCase && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 relative animate-in fade-in duration-200">
            <button
              onClick={() => setSelectedCase(null)}
              className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-black hover:bg-slate-100"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <span className="text-3xl">{selectedCase.icon}</span>
              <div>
                <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">
                  {selectedCase.category}
                </span>
                <h3 className="text-lg font-bold text-slate-900">
                  {selectedCase.title[lang]}
                </h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
              {selectedCase.desc[lang]}
            </p>

            <div className="mt-4 p-3.5 bg-slate-50 rounded-xl border border-slate-200">
              <span className="text-[11px] font-bold text-slate-700 block mb-1">
                {lang === 'en' ? 'Real Customer Voice / Chat Prompt:' : 'نص المحادثة الافتراضي للوكيل:'}
              </span>
              <p className="text-xs text-slate-800 italic font-medium leading-relaxed">
                {selectedCase.samplePrompt[lang]}
              </p>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold text-slate-500">
                {lang === 'en' ? 'Supported Channels:' : 'القنوات المدعومة:'}
              </span>
              {selectedCase.channels.map((ch) => (
                <span
                  key={ch}
                  className="bg-slate-100 text-slate-800 px-2.5 py-1 rounded-md text-[11px] font-semibold"
                >
                  {ch}
                </span>
              ))}
            </div>

            <div className="mt-6 flex gap-2">
              <button
                onClick={() => {
                  const prompt = selectedCase.samplePrompt[lang];
                  setSelectedCase(null);
                  onOpenSandboxWithPrompt(prompt);
                }}
                className="flex-1 bg-black text-white text-xs font-bold py-3 rounded-xl shadow hover:bg-neutral-800 transition flex items-center justify-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>{lang === 'en' ? 'Test This Use Case Live' : 'تجربة هذا السيناريو حياً'}</span>
              </button>
              <button
                onClick={() => setSelectedCase(null)}
                className="px-4 py-3 bg-slate-100 text-slate-700 text-xs font-semibold rounded-xl hover:bg-slate-200 transition"
              >
                {t.closeModal}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
