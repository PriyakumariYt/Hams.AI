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
              {lang === 'en' ? 'Security & Sovereign Governance' : 'الأمان والحوكمة السيادية'}
            </h2>
            <p className="text-xs text-slate-500">
              {lang === 'en'
                ? 'NCA Certified & Saudi Data Residency'
                : 'معتمد من الهيئة الوطنية للأمن السيبراني واستضافة داخل المملكة'}
            </p>
          </div>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed mt-4">
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
            <h4 className="font-bold text-slate-900 flex items-center gap-2 mb-1">
              <Server className="w-4 h-4 text-emerald-600" />
              <span>{lang === 'en' ? 'Local Data Residency (Saudi Arabia)' : 'استضافة البيانات محلياً (المملكة العربية السعودية)'}</span>
            </h4>
            <p className="text-xs text-slate-600">
              {lang === 'en'
                ? 'All call recordings, transcripts, embeddings, and customer PII are securely processed and stored in ISO-certified Tier IV data centers located in Riyadh, Saudi Arabia.'
                : 'تتم معالجة وتخزين جميع التسجيلات الصوتية والنصوص والبيانات الشخصية للعملاء داخل مراكز بيانات معتمدة من الفئة الرابعة (Tier IV) بالرياض.'}
            </p>
          </div>

          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
            <h4 className="font-bold text-slate-900 flex items-center gap-2 mb-1">
              <Lock className="w-4 h-4 text-blue-600" />
              <span>{lang === 'en' ? 'Encryption & Key Management' : 'التشفير وإدارة المفاتيح'}</span>
            </h4>
            <p className="text-xs text-slate-600">
              {lang === 'en'
                ? 'End-to-end encryption in transit (TLS 1.3) and at rest (AES-256) with enterprise customer-managed keys (BYOK) support.'
                : 'تشفير كامل للبيانات أثناء النقل (TLS 1.3) وأثناء التخزين (AES-256) مع دعم مفاتيح التشفير الخاصة بالعميل (BYOK).'}
            </p>
          </div>

          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
            <h4 className="font-bold text-slate-900 flex items-center gap-2 mb-1">
              <FileText className="w-4 h-4 text-purple-600" />
              <span>{lang === 'en' ? 'PDPL & NCA Essential Controls (ECC)' : 'ضوابط الأمن السيبراني الأساسية (ECC) ونظام PDPL'}</span>
            </h4>
            <p className="text-xs text-slate-600">
              {lang === 'en'
                ? 'Full alignment with the National Cybersecurity Authority Essential Cybersecurity Controls (NCA ECC) and Cloud Cybersecurity Controls (CCC).'
                : 'مطابقة تامة لضوابط الأمن السيبراني الأساسية (ECC) وضوابط الأمن السيبراني للحوسبة السحابية (CCC) الصادرة عن الهيئة الوطنية للأمن السيبراني.'}
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
