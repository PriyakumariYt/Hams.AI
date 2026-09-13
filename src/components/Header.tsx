import React from 'react';
import { Language } from '../types';
import { translations } from '../data/content';
import { Globe, Menu } from 'lucide-react';

interface HeaderProps {
  lang: Language;
  onToggleLang: () => void;
  onOpenMobileMenu: () => void;
  onOpenDemo: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  lang,
  onToggleLang,
  onOpenMobileMenu,
  onOpenDemo,
}) => {
  const t = translations[lang];

  return (
    <header
      id="main-header"
      className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 px-4 sm:px-8 py-3.5 transition-colors"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Brand Logo with soundwave icon */}
        <a
          id="brand-logo"
          href="#"
          className="flex items-center gap-1.5 font-extrabold text-xl tracking-tight text-neutral-950 focus:outline-none"
        >
          <span>
            NTS<span className="text-xs font-semibold text-slate-700">.NETWORK</span>
          </span>
          {/* Soundwave mark symbol */}
          <svg
            className="w-5 h-4 text-black inline-block"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M2 12h2l3-6 4 12 4-8 3 4h4" />
          </svg>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-semibold text-slate-600">
          <a href="#products" className="hover:text-black transition-colors">
            {t.nav.products}
          </a>
          <a href="#use-cases" className="hover:text-black transition-colors">
            {t.nav.useCases}
          </a>
          <a href="#how-it-works" className="hover:text-black transition-colors">
            {lang === 'en' ? 'How it Works' : 'كيف يعمل'}
          </a>
          <a href="#compliance" className="hover:text-black transition-colors">
            {t.nav.compliance}
          </a>
          <a href="#company" className="hover:text-black transition-colors">
            {t.nav.company}
          </a>
        </nav>

        {/* Right Controls */}
        <div className="flex items-center gap-2.5 sm:gap-4">
          {/* Language Switcher */}
          <button
            id="language-toggle-btn"
            onClick={onToggleLang}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-black px-2.5 py-1.5 border border-gray-200 rounded-lg bg-gray-50/70 hover:bg-gray-100 transition-all"
            title={lang === 'en' ? 'التبديل إلى العربية' : 'Switch to English'}
          >
            <Globe className="w-3.5 h-3.5 text-slate-500" />
            <span>{lang === 'en' ? 'العربية' : 'English'}</span>
          </button>

          {/* Book a Demo desktop CTA */}
          <button
            id="header-book-demo-btn"
            onClick={onOpenDemo}
            className="hidden sm:inline-flex items-center justify-center bg-black text-white text-xs font-semibold px-4 py-2 rounded-xl shadow-xs hover:bg-neutral-800 transition-colors"
          >
            {t.nav.bookDemo}
          </button>

          {/* Mobile hamburger menu toggle */}
          <button
            id="open-menu-btn"
            onClick={onOpenMobileMenu}
            aria-label="Open Navigation"
            className="md:hidden p-1.5 text-gray-700 hover:text-black focus:outline-none rounded-lg hover:bg-gray-100"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
};
