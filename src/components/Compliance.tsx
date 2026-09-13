import React from 'react';
import { Language } from '../types';
import { translations, complianceBadges } from '../data/content';
import { ShieldCheck, Lock, CheckCircle2 } from 'lucide-react';

interface ComplianceProps {
  lang: Language;
  onOpenComplianceModal: () => void;
}

export const Compliance: React.FC<ComplianceProps> = ({
  lang,
  onOpenComplianceModal,
}) => {
  const t = translations[lang].complianceSection;

  return (
    <section id="compliance" className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 text-blue-600 text-xs font-bold uppercase tracking-wider mb-2">
            <ShieldCheck className="w-4 h-4" />
            <span>{lang === 'en' ? 'Engineering Excellence & Quality Standards' : 'معايير الجودة والاعتماد الهندسي'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 leading-snug">
            {t.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
            {t.desc}
          </p>
        </div>

        {/* Compliance Cards Stack / Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {complianceBadges.map((badge, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs flex flex-col items-start hover:border-slate-300 transition"
            >
              <div
                className={`w-12 h-12 rounded-xl border flex items-center justify-center font-extrabold text-xs mb-3 shadow-2xs ${badge.badgeColor}`}
              >
                {badge.code}
              </div>
              <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                {badge.standard}
              </span>
              <h3 className="text-sm font-bold text-slate-900 mt-0.5">
                {badge.title[lang]}
              </h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                {badge.desc[lang]}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Link */}
        <div className="mt-8 text-center">
          <p className="text-xs font-semibold text-slate-500">{t.trustTag}</p>
          <button
            onClick={onOpenComplianceModal}
            className="inline-flex items-center text-xs font-bold text-slate-900 mt-1.5 hover:underline focus:outline-none"
          >
            {t.viewPolicy}
          </button>
        </div>
      </div>
    </section>
  );
};
