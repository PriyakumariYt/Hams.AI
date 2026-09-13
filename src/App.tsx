/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { Header } from './components/Header';
import { MobileDrawer } from './components/MobileDrawer';
import { Hero } from './components/Hero';
import { ProductTabs } from './components/ProductTabs';
import { ComparisonMatrix } from './components/ComparisonMatrix';
import { ImpactNumbers } from './components/ImpactNumbers';
import { Testimonials } from './components/Testimonials';
import { HowItWorks } from './components/HowItWorks';
import { UseCases } from './components/UseCases';
import { BusinessImpact } from './components/BusinessImpact';
import { Compliance } from './components/Compliance';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';
import { DemoModal } from './components/DemoModal';
import { AgentSandboxModal } from './components/AgentSandboxModal';
import { ComplianceDetailModal } from './components/ComplianceDetailModal';

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState<boolean>(false);
  const [isSandboxModalOpen, setIsSandboxModalOpen] = useState<boolean>(false);
  const [sandboxPrompt, setSandboxPrompt] = useState<string>('');
  const [isComplianceModalOpen, setIsComplianceModalOpen] = useState<boolean>(false);

  // Sync RTL and document language
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'en' ? 'ar' : 'en'));
  };

  const openSandbox = (topicOrPrompt?: string) => {
    if (topicOrPrompt) {
      setSandboxPrompt(topicOrPrompt);
    }
    setIsSandboxModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans transition-colors selection:bg-slate-900 selection:text-white">
      {/* Mobile Slide-out Drawer */}
      <MobileDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        lang={lang}
        onToggleLang={toggleLanguage}
        onOpenDemo={() => setIsDemoModalOpen(true)}
      />

      {/* Main Sticky Header */}
      <Header
        lang={lang}
        onToggleLang={toggleLanguage}
        onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
        onOpenDemo={() => setIsDemoModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          lang={lang}
          onOpenDemo={() => setIsDemoModalOpen(true)}
          onOpenSandbox={() => openSandbox()}
        />

        {/* Product Showcase Tabs */}
        <ProductTabs
          lang={lang}
          onOpenSandbox={(id) => {
            const prompt =
              id === 'enterprise-wifi'
                ? lang === 'en'
                  ? 'How do you prevent dead zones in high-density office buildings and warehouses?'
                  : 'كيف تضمنون تغطية لاسلكية بدون نقاط ميتة في المكاتب والمستودعات؟'
                : id === 'software-dev'
                ? lang === 'en'
                  ? 'Can you develop a custom web application and mobile app with API integrations?'
                  : 'هل يمكنكم تطوير تطبيق ويب وجوال مخصص مع ربط واجهات برمجة التطبيقات؟'
                : undefined;
            openSandbox(prompt);
          }}
          onOpenDemo={() => setIsDemoModalOpen(true)}
        />

        {/* Comparison Matrix */}
        <ComparisonMatrix lang={lang} />

        {/* Impact Numbers Section */}
        <ImpactNumbers lang={lang} />

        {/* Client Testimonials */}
        <Testimonials
          lang={lang}
          onOpenDemo={() => setIsDemoModalOpen(true)}
        />

        {/* How It Works Step By Step */}
        <HowItWorks lang={lang} />

        {/* Use Cases Grid with interactive details */}
        <UseCases
          lang={lang}
          onOpenSandboxWithPrompt={(prompt) => openSandbox(prompt)}
        />

        {/* Real Business Impact Grid */}
        <BusinessImpact lang={lang} />

        {/* Security and Sovereign Compliance */}
        <Compliance
          lang={lang}
          onOpenComplianceModal={() => setIsComplianceModalOpen(true)}
        />

        {/* Call to Action Banner */}
        <CallToAction
          lang={lang}
          onOpenDemo={() => setIsDemoModalOpen(true)}
        />
      </main>

      {/* Main Footer */}
      <Footer
        lang={lang}
        onOpenDemo={() => setIsDemoModalOpen(true)}
      />

      {/* Interactive Modals */}
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        lang={lang}
      />

      <AgentSandboxModal
        isOpen={isSandboxModalOpen}
        onClose={() => setIsSandboxModalOpen(false)}
        lang={lang}
        initialPrompt={sandboxPrompt}
      />

      <ComplianceDetailModal
        isOpen={isComplianceModalOpen}
        onClose={() => setIsComplianceModalOpen(false)}
        lang={lang}
      />
    </div>
  );
}
