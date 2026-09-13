import React, { useState } from 'react';
import { Language } from '../types';
import { X, CheckCircle, Calendar, Building, Mail, Phone, ExternalLink } from 'lucide-react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose, lang }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    volume: '50k-250k',
    channels: ['Voice', 'WhatsApp'],
    preferredTime: 'morning',
  });

  if (!isOpen) return null;

  const toggleChannel = (channel: string) => {
    if (formData.channels.includes(channel)) {
      setFormData({
        ...formData,
        channels: formData.channels.filter((c) => c !== channel),
      });
    } else {
      setFormData({
        ...formData,
        channels: [...formData.channels, channel],
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-lg text-slate-400 hover:text-black hover:bg-slate-100 transition"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-6">
              <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider">
                {lang === 'en' ? 'Enterprise Consultation' : 'استشارة مؤسسية مخصصة'}
              </span>
              <h2 className="text-2xl font-bold text-slate-900 mt-1">
                {lang === 'en' ? 'Book a Hams.AI Demo' : 'حجز عرض توضيحي لمنصة همس'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1.5 leading-relaxed">
                {lang === 'en'
                  ? 'Experience live Saudi Arabic voice agents and discover how much operational cost your organization will save.'
                  : 'شاهد الوكلاء الصوتيين باللهجة السعودية حياً واكتشف حجم التكاليف التشغيلية التي ستوفرها لمنشأتك.'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {lang === 'en' ? 'Full Name' : 'الاسم الكامل'} *
                </label>
                <input
                  type="text"
                  required
                  placeholder={lang === 'en' ? 'e.g. Faisal Al-Otaibi' : 'مثال: فيصل العتيبي'}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {lang === 'en' ? 'Work Email' : 'البريد المؤسسي'} *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {lang === 'en' ? 'Phone (KSA / Gulf)' : 'رقم الجوال'} *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+966 5x xxx xxxx"
                    dir="ltr"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-black text-start"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {lang === 'en' ? 'Company / Government Entity' : 'اسم المنشأة أو الجهة الحكومية'} *
                </label>
                <input
                  type="text"
                  required
                  placeholder={lang === 'en' ? 'e.g. Ministry of Health, STC, Retail Group' : 'مثال: جهة حكومية، بنك، شركة تجزئة'}
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  {lang === 'en' ? 'Channels Required' : 'القنوات المستهدفة'}
                </label>
                <div className="flex flex-wrap gap-2">
                  {['Voice Inbound/Outbound', 'WhatsApp Business', 'Web Chat', 'Cloud Contact Center', 'Social Listening'].map(
                    (channel) => {
                      const selected = formData.channels.includes(channel);
                      return (
                        <button
                          type="button"
                          key={channel}
                          onClick={() => toggleChannel(channel)}
                          className={`text-xs px-3 py-1.5 rounded-lg border font-medium transition ${
                            selected
                              ? 'bg-black text-white border-black'
                              : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                          }`}
                        >
                          {channel}
                        </button>
                      );
                    }
                  )}
                </div>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full bg-black text-white text-sm font-bold py-3.5 rounded-xl shadow-md hover:bg-neutral-800 transition"
                >
                  {lang === 'en' ? 'Confirm Demo Request' : 'تأكيد طلب العرض التوضيحي'}
                </button>
              </div>

              <div className="text-center pt-1">
                <a
                  href="https://form.asana.com/?k=8X--BtWqSWONj2cooRnwXA&d=1210838775195077"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] text-slate-500 hover:text-black"
                >
                  <span>{lang === 'en' ? 'Or open official Asana scheduling form' : 'أو افتح نموذج أسانا الرسمي'}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              {lang === 'en' ? 'Demo Scheduled Successfully!' : 'تم تأكيد موعد العرض بنجاح!'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-sm mx-auto leading-relaxed">
              {lang === 'en'
                ? `Thank you ${formData.name}. Our enterprise team will contact you at ${formData.email} and ${formData.phone} to present a live pilot demonstration for ${formData.company}.`
                : `شكراً لك ${formData.name}. سيتواصل معك مستشار حلول همس عبر البريد ${formData.email} ورقم الجوال ${formData.phone} لتقديم عرض حي مخصص لمنشأة ${formData.company}.`}
            </p>

            <div className="mt-6 p-4 bg-slate-50 rounded-2xl border border-slate-200 text-start text-xs space-y-1.5 text-slate-700">
              <div className="font-semibold text-slate-900 mb-1">
                {lang === 'en' ? 'Meeting Overview:' : 'ملخص الجلسة:'}
              </div>
              <p>• {lang === 'en' ? 'Duration: 30 minutes via Google Meet' : 'المدة: 30 دقيقة عبر Google Meet'}</p>
              <p>• {lang === 'en' ? 'Channels:' : 'القنوات:'} {formData.channels.join(', ')}</p>
              <p>• {lang === 'en' ? 'KSA Sovereign Cloud & PDPL compliance audit included' : 'شامل تقرير التوافق مع نظام حماية البيانات السعودي'}</p>
            </div>

            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-6 w-full bg-black text-white text-xs sm:text-sm font-semibold py-3 rounded-xl hover:bg-neutral-800"
            >
              {lang === 'en' ? 'Close Window' : 'إغلاق النافذة'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
