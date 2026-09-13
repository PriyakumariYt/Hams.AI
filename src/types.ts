export type Language = 'en' | 'ar';

export interface UseCaseItem {
  id: string;
  icon: string;
  title: { en: string; ar: string };
  desc: { en: string; ar: string };
  category: 'operations' | 'support' | 'sales' | 'finance';
  samplePrompt: { en: string; ar: string };
  channels: string[];
  impactMetric: { en: string; ar: string };
}

export interface WorkflowStep {
  step: string;
  title: { en: string; ar: string };
  desc: { en: string; ar: string };
  image: string;
  alt: string;
}

export interface ProductTab {
  id: string;
  label: { en: string; ar: string };
  title: { en: string; ar: string };
  desc: { en: string; ar: string };
  benefits: {
    title: { en: string; ar: string };
    desc: { en: string; ar: string };
  }[];
  image: string;
  tag: { en: string; ar: string };
}

export interface ComplianceItem {
  code: string;
  standard: string;
  title: { en: string; ar: string };
  desc: { en: string; ar: string };
  badgeColor: string;
}
