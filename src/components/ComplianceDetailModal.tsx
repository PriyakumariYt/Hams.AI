import React from 'react';
import { Language } from '../types';
import { complianceBadges } from '../data/content';
import { X, ShieldCheck, CheckCircle2, Server, Lock, FileText } from 'lucide-react';

interface ComplianceDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const ComplianceDetailModal: React.FC<ComplianceDetailModalProps> = ({
  isOpen,
  onClose,
  lang,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-lg text-slate-400 hover:text-black hover:bg-slate-100 transition"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2.5 mb-4">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              {lang === 'en' ? 'Engineering Quality & Standards' : 'معايير الجودة والحوكمة الهندسية'}
            </h2>
            <p className="text-xs text-slate-500">
              {lang === 'en'
                ? 'ISO Certified Delivery & Structured Verification'
                : 'تسليم احترافي معتمد وإجراءات فحص هندسية دقيقة'}
            </p>
          </div>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed mt-4">
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
            <h4 className="font-bold text-slate-900 flex items-center gap-2 mb-1">
              <Server className="w-4 h-4 text-emerald-600" />
              <span>{lang === 'en' ? 'Quality Management & Structured Delivery' : 'إدارة الجودة والتسليم المنهجي'}</span>
            </h4>
            <p className="text-xs text-slate-600">
              {lang === 'en'
                ? 'Every project follows ISO 9001:2015 certified workflows. From the first site survey to final sign-off, we bring clear milestones, open communication, and single-point ownership.'
                : 'تتبع كافة مشاريعنا مسارات عمل معتمدة وفق ISO 9001:2015، مما يضمن معالم واضحة وتواصلاً شفافاً ومسؤولية كاملة من المعاينة الأولى وحتى التسليم.'}
            </p>
          </div>

          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
            <h4 className="font-bold text-slate-900 flex items-center gap-2 mb-1">
              <Lock className="w-4 h-4 text-blue-600" />
              <span>{lang === 'en' ? 'Network Security & Hardened Baseline' : 'أمن الشبكات وحماية البيئة الرقمية'}</span>
            </h4>
            <p className="text-xs text-slate-600">
              {lang === 'en'
                ? 'All network devices, firewalls, and server racks are configured using ISO 27001 aligned security baselines — with encrypted site-to-site VPNs, VLAN isolation, and hardened credentials.'
                : 'تُضبط أجهزة الشبكات وجدران الحماية وفق أفضل ممارسات أمن المعلومات ISO 27001 مع تشفير قنوات الاتصال وعزل الشبكات الافتراضية وحماية المنافذ.'}
            </p>
          </div>

          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
            <h4 className="font-bold text-slate-900 flex items-center gap-2 mb-1">
              <FileText className="w-4 h-4 text-purple-600" />
              <span>{lang === 'en' ? 'Certified Structured Cabling & Handover' : 'اعتماد التمديدات الهيكلية والتوثيق الشامل'}</span>
            </h4>
            <p className="text-xs text-slate-600">
              {lang === 'en'
                ? 'All Cat6/Cat6A copper runs and optical fiber backbones undergo Fluke calibration testing. Every project concludes with labeled patch diagrams and full administrative handover.'
                : 'تخضع كافة كابلات Cat6/Cat6A والألياف البصرية لفحص دقيق ومعايرة بأحدث الأجهزة. يُسلم كل مشروع بمخططات تفصيلية مرقمة للمنافذ وشهادات فحص موثقة.'}
            </p>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="w-full bg-black text-white text-xs sm:text-sm font-semibold py-3 rounded-xl hover:bg-neutral-800 transition"
          >
            {lang === 'en' ? 'Close Window' : 'إغلاق النافذة'}
          </button>
        </div>
      </div>
    </div>
  );
};
