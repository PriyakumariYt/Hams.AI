import React, { useState } from 'react';
import { Language } from '../types';
import { productsData } from '../data/content';
import { Check, ArrowRight, Sparkles, Radio } from 'lucide-react';

interface ProductTabsProps {
  lang: Language;
  onOpenSandbox: (topic?: string) => void;
  onOpenDemo: () => void;
}

export const ProductTabs: React.FC<ProductTabsProps> = ({
  lang,
  onOpenSandbox,
  onOpenDemo,
}) => {
  const [activeTabId, setActiveTabId] = useState<string>(
    productsData[0]?.id || 'network-infra'
  );

  const activeProduct =
    productsData.find((p) => p.id === activeTabId) || productsData[0];

  return (
    <section
      id="products"
      className="py-12 sm:py-16 px-4 sm:px-6 bg-slate-50/70 border-t border-b border-slate-100"
    >
      <div className="max-w-4xl mx-auto">
        {/* Horizontal Filter Chips / Tabs */}
        <div className="flex overflow-x-auto hide-scrollbar gap-2 pb-4 text-xs font-medium -mx-2 px-2 scroll-smooth">
          {productsData.map((prod) => {
            const isActive = prod.id === activeTabId;
            return (
              <button
                key={prod.id}
                id={`tab-${prod.id}`}
                onClick={() => setActiveTabId(prod.id)}
                className={`px-4 py-2.5 rounded-full whitespace-nowrap font-semibold text-xs sm:text-sm transition-all duration-150 flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-black text-white shadow-sm'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100/80 hover:text-black'
                }`}
              >
                {prod.label[lang]}
              </button>
            );
          })}
        </div>

        {/* Product Details Content */}
        <div className="mt-6 sm:mt-8">
          <div className="flex items-center gap-2 mb-2 text-xs font-semibold text-blue-600 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{activeProduct.tag[lang]}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 leading-snug">
            {activeProduct.title[lang]}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
            {activeProduct.desc[lang]}
          </p>

          {/* Key Benefits List */}
          <div className="mt-8 space-y-4 max-w-2xl">
            {activeProduct.benefits.map((b, idx) => (
              <div key={idx} className="flex items-start gap-3.5">
                <div className="mt-0.5 w-5 h-5 rounded-full bg-slate-100 text-slate-900 flex items-center justify-center shrink-0 border border-slate-200">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    {b.title[lang]}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5 leading-relaxed">
                    {b.desc[lang]}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Action Links */}
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={onOpenDemo}
              className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 bg-black text-white text-xs sm:text-sm font-semibold rounded-xl shadow-xs hover:bg-neutral-800 transition gap-2"
            >
              <span>{lang === 'en' ? 'Discuss This Solution' : 'ناقش هذا الحل معنا'}</span>
              <ArrowRight className={`w-4 h-4 ${lang === 'ar' ? 'rotate-180' : ''}`} />
            </button>
            <button
              onClick={() => onOpenSandbox(activeProduct.id)}
              className="inline-flex items-center justify-center w-full sm:w-auto px-5 py-3 bg-white text-slate-800 border border-slate-200 text-xs sm:text-sm font-semibold rounded-xl hover:bg-slate-50 transition gap-2"
            >
              <Radio className="w-3.5 h-3.5 text-emerald-600 animate-pulse" />
              <span>{lang === 'en' ? 'Interactive Solution Assistant' : 'المساعد التفاعلي للحلول'}</span>
            </button>
          </div>

          {/* Feature Visual Card (Interactive Context preview) */}
          <div className="mt-10 bg-white p-3 sm:p-4 rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="text-[11px] font-semibold text-slate-400 mb-2 px-1 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                <span>{lang === 'en' ? 'Enterprise Infrastructure & Deployment Telemetry' : 'بيانات البنية التحتية والتشغيل المباشر'}</span>
              </span>
              <span className="text-emerald-600 font-medium flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                <span>{lang === 'en' ? 'Active Sync' : 'مزامنة نشطة'}</span>
              </span>
            </div>

            <div className="relative group overflow-hidden rounded-xl border border-slate-100 bg-slate-900">
              <img
                src={activeProduct.image}
                alt={activeProduct.title[lang]}
                className="w-full h-auto max-h-[460px] object-cover transition duration-300 group-hover:scale-[1.01]"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <button
                  onClick={() => onOpenSandbox(activeProduct.id)}
                  className="bg-white/95 text-black px-4 py-2 rounded-lg text-xs font-bold shadow hover:bg-white transition"
                >
                  {lang === 'en' ? 'Explore Capability Overview →' : 'استعراض تفاصيل القدرات ←'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
