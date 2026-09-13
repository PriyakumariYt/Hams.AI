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
          {/* Column 1: Platform & Products */}
          <div className="space-y-2.5">
            <h4 className="font-bold text-slate-900 text-xs tracking-wide">
              {lang === 'en' ? 'Platform' : 'المنصة'}
            </h4>
            <ul className="space-y-2 text-[11px]">
              <li>
                <a className="hover:text-black transition-colors" href="#products">
                  GenAI Cloud Contact Center
                </a>
              </li>
              <li>
                <a className="hover:text-black transition-colors" href="#products">
                  AI Agents (Voice & Chat)
                </a>
              </li>
              <li>
                <a className="hover:text-black transition-colors" href="#products">
                  Omnichannel Hub
                </a>
              </li>
              <li>
                <a className="hover:text-black transition-colors" href="#products">
                  Social Listening
                </a>
              </li>
              <li>
                <a className="hover:text-black transition-colors" href="#products">
                  AI Brain Knowledge Bank
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Use Cases */}
          <div className="space-y-2.5">
            <h4 className="font-bold text-slate-900 text-xs tracking-wide">
              {lang === 'en' ? 'Use Cases' : 'حالات الاستخدام'}
            </h4>
            <ul className="space-y-2 text-[11px]">
              <li>
                <a className="hover:text-black transition-colors" href="#use-cases">
                  {lang === 'en' ? 'Collections' : 'التحصيل والسداد'}
                </a>
              </li>
              <li>
                <a className="hover:text-black transition-colors" href="#use-cases">
                  {lang === 'en' ? 'Customer Complaints' : 'شكاوى العملاء'}
                </a>
              </li>
              <li>
                <a className="hover:text-black transition-colors" href="#use-cases">
                  {lang === 'en' ? 'Complaint Follow-up' : 'متابعة الشكاوى'}
                </a>
              </li>
              <li>
                <a className="hover:text-black transition-colors" href="#use-cases">
                  {lang === 'en' ? 'Customer Satisfaction' : 'رضا العملاء'}
                </a>
              </li>
              <li>
                <a className="hover:text-black transition-colors" href="#use-cases">
                  {lang === 'en' ? 'Appointment Booking' : 'حجز المواعيد'}
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
                <a className="hover:text-black transition-colors" href="#company">
                  {lang === 'en' ? 'About Us' : 'من نحن'}
                </a>
              </li>
              <li>
                <a className="hover:text-black transition-colors" href="#company">
                  {lang === 'en' ? 'Careers (Riyadh)' : 'الوظائف (الرياض)'}
                </a>
              </li>
              <li>
                <a className="hover:text-black transition-colors" href="#company">
                  {lang === 'en' ? 'Blog & Research' : 'المدونة والأبحاث'}
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenDemo}
                  className="text-blue-600 hover:text-blue-800 font-semibold text-start"
                >
                  {lang === 'en' ? 'Book a Demo' : 'طلب عرض تجريبي'}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Compliance */}
          <div className="space-y-2.5">
            <h4 className="font-bold text-slate-900 text-xs tracking-wide">
              {lang === 'en' ? 'Compliance' : 'الامتثال'}
            </h4>
            <ul className="space-y-2 text-[11px]">
              <li>
                <a className="hover:text-black transition-colors" href="#compliance">
                  {lang === 'en' ? 'Privacy Policy' : 'سياسة الخصوصية'}
                </a>
              </li>
              <li>
                <a className="hover:text-black transition-colors" href="#compliance">
                  {lang === 'en' ? 'Terms of Service' : 'شروط الخدمة'}
                </a>
              </li>
              <li>
                <a className="hover:text-black transition-colors" href="#compliance">
                  {lang === 'en' ? 'Security Center' : 'مركز الأمان'}
                </a>
              </li>
              <li>
                <a className="hover:text-black transition-colors" href="#compliance">
                  {lang === 'en' ? 'NCA Alignment' : 'مطابقة الأمن السيبراني'}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Center Brand Branding & Social Media */}
        <div className="border-t border-slate-200/80 pt-8 flex flex-col items-center text-center">
          <div className="flex items-center gap-1 font-black text-2xl tracking-tight text-slate-900">
            <span>HAMS.AI</span>
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

          {/* Social Icons Strip */}
          <div className="flex items-center gap-5 my-5 text-slate-700">
            {/* X (Twitter) */}
            <a
              className="hover:text-black p-1 transition-colors"
              href="https://x.com/usehamsai"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a
              className="hover:text-black p-1 transition-colors"
              href="https://www.linkedin.com/company/hamsaisa"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            {/* Instagram */}
            <a
              className="hover:text-black p-1 transition-colors"
              href="https://www.instagram.com/usehamsai"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            {/* TikTok */}
            <a
              className="hover:text-black p-1 transition-colors"
              href="https://www.tiktok.com/@usehamsai"
              target="_blank"
              rel="noreferrer"
              aria-label="TikTok"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 2.89 3.5 2.75 1.35-.04 2.56-.89 3-2.14.28-.79.31-1.64.31-2.48.01-4.67.01-9.33 0-14z" />
              </svg>
            </a>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-slate-600 text-[11px] mb-5">
            <a
              className="hover:text-black flex items-center gap-1.5 transition-colors"
              href="mailto:info@hams.ai"
            >
              <Mail className="w-3.5 h-3.5 text-slate-500" />
              <span>info@hams.ai</span>
            </a>
            <span className="hidden sm:inline text-slate-300">|</span>
            <a
              className="hover:text-black flex items-center gap-1.5 transition-colors"
              href="tel:+966114147266"
              dir="ltr"
            >
              <Phone className="w-3.5 h-3.5 text-slate-500" />
              <span>+966 11 414 7266</span>
            </a>
          </div>

          {/* Legal Entity Details (KSA) */}
          <div className="bg-white p-3.5 sm:p-4 rounded-xl border border-slate-200 text-[10px] text-slate-500 max-w-sm space-y-1 text-center shadow-2xs">
            <p className="font-semibold text-slate-800">{t.companyName}</p>
            <p>
              {t.unifiedNo}{' '}
              <span className="font-mono text-slate-700 font-medium">
                7041141123
              </span>
            </p>
            <p>
              {t.vatNo}{' '}
              <span className="font-mono text-slate-700 font-medium">
                312425413600003
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
