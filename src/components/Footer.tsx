import React from 'react';
import { Language } from '../types';
import { translations } from '../data/content';
import { Mail, Phone } from 'lucide-react';

interface FooterProps {
  lang: Language;
  onOpenDemo: () => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onOpenDemo }) => {
  const t = translations[lang].footer;

  return (
    <footer
      id="company"
      className="pt-12 pb-14 px-4 sm:px-6 bg-slate-50 border-t border-slate-200 text-slate-600 text-xs"
    >
      <div className="max-w-4xl mx-auto">
        {/* Footer Links Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Solutions */}
          <div className="space-y-2.5">
            <h4 className="font-bold text-slate-900 text-xs tracking-wide">
              {lang === 'en' ? 'Solutions' : 'الحلول'}
            </h4>
            <ul className="space-y-2 text-[11px]">
              <li>
                <a className="hover:text-black transition-colors" href="#products">
                  {lang === 'en' ? 'Network Infrastructure' : 'البنية التحتية للشبكات'}
                </a>
              </li>
              <li>
                <a className="hover:text-black transition-colors" href="#products">
                  {lang === 'en' ? 'Enterprise Wireless' : 'الشبكات اللاسلكية المؤسسية'}
                </a>
              </li>
              <li>
                <a className="hover:text-black transition-colors" href="#products">
                  {lang === 'en' ? 'CCTV & Surveillance' : 'المراقبة بالكاميرات'}
                </a>
              </li>
              <li>
                <a className="hover:text-black transition-colors" href="#products">
                  {lang === 'en' ? 'Structured Cabling' : 'التمديدات الهيكلية'}
                </a>
              </li>
              <li>
                <a className="hover:text-black transition-colors" href="#products">
                  {lang === 'en' ? 'Workplace Technology' : 'أجهزة بيئة العمل'}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Development */}
          <div className="space-y-2.5">
            <h4 className="font-bold text-slate-900 text-xs tracking-wide">
              {lang === 'en' ? 'Development' : 'التطوير البرمجي'}
            </h4>
            <ul className="space-y-2 text-[11px]">
              <li>
                <a className="hover:text-black transition-colors" href="#products">
                  {lang === 'en' ? 'Web Development' : 'تطوير المواقع'}
                </a>
              </li>
              <li>
                <a className="hover:text-black transition-colors" href="#products">
                  {lang === 'en' ? 'Mobile App Development' : 'تطبيقات الجوال'}
                </a>
              </li>
              <li>
                <a className="hover:text-black transition-colors" href="#products">
                  {lang === 'en' ? 'Custom Software' : 'برمجيات مخصصة'}
                </a>
              </li>
              <li>
                <a className="hover:text-black transition-colors" href="#products">
                  {lang === 'en' ? 'E-Commerce Solutions' : 'حلول المتاجر الإلكترونية'}
                </a>
              </li>
              <li>
                <a className="hover:text-black transition-colors" href="#products">
                  {lang === 'en' ? 'APIs & Integrations' : 'الربط والتكامل البرمجي'}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="space-y-2.5">
            <h4 className="font-bold text-slate-900 text-xs tracking-wide">
              {lang === 'en' ? 'Company' : 'الشركة'}
            </h4>
            <ul className="space-y-2 text-[11px]">
              <li>
                <a className="hover:text-black transition-colors" href="#how-it-works">
                  {lang === 'en' ? 'Our Approach' : 'منهجية العمل'}
                </a>
              </li>
              <li>
                <a className="hover:text-black transition-colors" href="#products">
                  {lang === 'en' ? 'Why NTS' : 'لماذا NTS'}
                </a>
              </li>
              <li>
                <a className="hover:text-black transition-colors" href="#use-cases">
                  {lang === 'en' ? 'Industries Served' : 'القطاعات المخدومة'}
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenDemo}
                  className="text-blue-600 hover:text-blue-800 font-semibold text-start"
                >
                  {lang === 'en' ? 'Discuss Your Project' : 'ناقش مشروعك'}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Standards */}
          <div className="space-y-2.5">
            <h4 className="font-bold text-slate-900 text-xs tracking-wide">
              {lang === 'en' ? 'Standards & Quality' : 'المعايير والجودة'}
            </h4>
            <ul className="space-y-2 text-[11px]">
              <li>
                <a className="hover:text-black transition-colors" href="#compliance">
                  {lang === 'en' ? 'ISO 9001:2015 Quality' : 'إدارة الجودة ISO 9001'}
                </a>
              </li>
              <li>
                <a className="hover:text-black transition-colors" href="#compliance">
                  {lang === 'en' ? 'ISO 27001 Security' : 'أمن المعلومات ISO 27001'}
                </a>
              </li>
              <li>
                <a className="hover:text-black transition-colors" href="#compliance">
                  {lang === 'en' ? 'TIA-568 Certified Cabling' : 'اعتماد الكابلات TIA-568'}
                </a>
              </li>
              <li>
                <a className="hover:text-black transition-colors" href="#compliance">
                  {lang === 'en' ? 'Nationwide Rollout Standards' : 'معايير النشر الوطني'}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Center Brand Branding & Social Media */}
        <div className="border-t border-slate-200/80 pt-8 flex flex-col items-center text-center">
          <div className="flex items-center gap-1 font-black text-2xl tracking-tight text-slate-900">
            <span>NTS</span>
            <span className="text-sm font-semibold text-slate-700">.NETWORK</span>
            <svg
              className="w-5 h-4 ml-0.5 text-black"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path d="M2 12h2l3-6 4 12 4-8 3 4h4" />
            </svg>
          </div>
          <p className="text-[11px] text-slate-500 mt-2 max-w-sm leading-relaxed">
            {t.desc}
          </p>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-slate-600 text-[11px] my-5">
            <a
              className="hover:text-black flex items-center gap-1.5 transition-colors font-medium"
              href="mailto:info@ntsnetwork.in"
            >
              <Mail className="w-3.5 h-3.5 text-slate-500" />
              <span>info@ntsnetwork.in</span>
            </a>
            <span className="hidden sm:inline text-slate-300">|</span>
            <a
              className="hover:text-black flex items-center gap-1.5 transition-colors font-medium"
              href="https://ntsnetwork.in"
              target="_blank"
              rel="noreferrer"
            >
              <span>www.ntsnetwork.in</span>
            </a>
          </div>

          {/* Company Details */}
          <div className="bg-white p-3.5 sm:p-4 rounded-xl border border-slate-200 text-[10px] text-slate-500 max-w-sm space-y-1 text-center shadow-2xs">
            <p className="font-semibold text-slate-800">{t.companyName}</p>
            <p>
              {t.unifiedNo}{' '}
              <span className="font-mono text-slate-700 font-medium">
                Mumbai, Maharashtra
              </span>
            </p>
            <p>
              {t.vatNo}{' '}
              <span className="font-mono text-slate-700 font-medium">
                Pan-India Enterprise Delivery
              </span>
            </p>
            <p>{t.address}</p>
          </div>

          <div className="mt-6 text-[10px] text-slate-400">{t.rights}</div>
        </div>
      </div>
    </footer>
  );
};
