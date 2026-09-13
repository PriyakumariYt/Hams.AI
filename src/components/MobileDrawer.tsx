import React from 'react';
import { Language } from '../types';
import { translations } from '../data/content';
import { X } from 'lucide-react';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  onToggleLang: () => void;
  onOpenDemo: () => void;
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({
  isOpen,
  onClose,
  lang,
  onToggleLang,
  onOpenDemo,
}) => {
  const t = translations[lang];

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-xs transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        id="mobile-menu-drawer"
        className={`fixed inset-y-0 ${
          lang === 'ar' ? 'left-0' : 'right-0'
        } z-50 w-full max-w-xs bg-white shadow-2xl flex flex-col justify-between p-6 transform transition-transform duration-300 ease-in-out ${
          isOpen
            ? 'translate-x-0'
            : lang === 'ar'
            ? '-translate-x-full'
            : 'translate-x-full'
        }`}
      >
        <div>
          {/* Drawer Header */}
          <div className="flex items-center justify-between pb-6 border-b border-gray-100">
            <a
              href="#"
              onClick={onClose}
              className="flex items-center gap-1.5 font-black text-xl tracking-tight text-neutral-950"
            >
              NTS
              <span className="inline-block text-sm font-semibold tracking-normal text-slate-700">
                .NETWORK
              </span>
              <svg
                className="w-4 h-4 ml-0.5 text-black inline-block"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path d="M2 12h2l3-6 4 12 4-8 3 4h4" />
              </svg>
            </a>
            <button
              id="close-menu-btn"
              onClick={onClose}
              aria-label="Close navigation menu"
              className="p-2 rounded-lg text-gray-500 hover:text-black hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Nav Links */}
          <nav className="mt-8 flex flex-col space-y-4 text-base font-semibold text-gray-800">
            <a
              href="#products"
              onClick={onClose}
              className="hover:text-black py-1 transition-colors"
            >
              {t.nav.products}
            </a>
            <a
              href="#use-cases"
              onClick={onClose}
              className="hover:text-black py-1 transition-colors"
            >
              {t.nav.useCases}
            </a>
            <a
              href="#how-it-works"
              onClick={onClose}
              className="hover:text-black py-1 transition-colors"
            >
              {lang === 'en' ? 'How It Works' : 'كيف يعمل'}
            </a>
            <a
              href="#compliance"
              onClick={onClose}
              className="hover:text-black py-1 transition-colors"
            >
              {t.nav.compliance}
            </a>
            <a
              href="#company"
              onClick={onClose}
              className="hover:text-black py-1 transition-colors"
            >
              {t.nav.company}
            </a>
            <a
              href="mailto:info@ntsnetwork.in"
              className="text-blue-600 font-medium pt-2"
            >
              {t.nav.signIn}
            </a>
          </nav>
        </div>

        {/* Drawer Bottom Controls */}
        <div className="pt-6 border-t border-gray-100 flex flex-col gap-4">
          <div className="flex items-center justify-between text-sm font-medium text-gray-600">
            <span>{t.nav.language}</span>
            <div className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-full text-xs font-semibold">
              <button
                onClick={() => {
                  if (lang !== 'en') onToggleLang();
                }}
                className={`${lang === 'en' ? 'text-black font-bold' : 'text-gray-500 hover:text-black'}`}
              >
                English
              </button>
              <span className="text-gray-300">|</span>
              <button
                onClick={() => {
                  if (lang !== 'ar') onToggleLang();
                }}
                className={`${lang === 'ar' ? 'text-black font-bold' : 'text-gray-500 hover:text-black'}`}
              >
                العربية
              </button>
            </div>
          </div>

          <button
            id="drawer-book-demo-btn"
            onClick={() => {
              onClose();
              onOpenDemo();
            }}
            className="w-full bg-black text-white text-center py-3.5 rounded-xl text-sm font-semibold shadow hover:bg-neutral-800 transition"
          >
            {t.nav.bookDemo}
          </button>
        </div>
      </div>
    </>
  );
};
