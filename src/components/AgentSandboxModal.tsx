import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import {
  X,
  Bot,
  User,
  Send,
  Volume2,
  Database,
  FileCheck,
  ShieldAlert,
  Sparkles,
  RefreshCw,
  PhoneCall,
  CheckCircle2,
} from 'lucide-react';

interface AgentSandboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  initialPrompt?: string;
}

interface Message {
  role: 'user' | 'agent' | 'system';
  content: string;
  sourceDoc?: string;
  confidence?: number;
  time: string;
}

export const AgentSandboxModal: React.FC<AgentSandboxModalProps> = ({
  isOpen,
  onClose,
  lang,
  initialPrompt,
}) => {
  const [selectedDialect, setSelectedDialect] = useState<'najdi' | 'hijazi' | 'msa' | 'english'>('najdi');
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [activeCall, setActiveCall] = useState(true);

  const defaultConversation: Message[] = [
    {
      role: 'agent',
      content:
        lang === 'en'
          ? 'Hello! Thank you for calling Hams Customer Center. How may I assist you with your orders or services today?'
          : 'أهلاً بك في مركز خدمة العملاء من همس. كيف أقدر أساعدك اليوم في طلباتك أو استفساراتك؟',
      time: '10:00 AM',
    },
    {
      role: 'user',
      content:
        initialPrompt ||
        (lang === 'en'
          ? 'Where is my order #9822? I was supposed to receive it yesterday.'
          : 'وين طلبي رقم 9822؟ كان المفروض يوصلني أمس وما وصل.'),
      time: '10:01 AM',
    },
    {
      role: 'agent',
      content:
        lang === 'en'
          ? 'I checked tracking for order #9822. It is currently with courier Naqel in Riyadh (Al-Malqa district) and out for delivery today before 4:00 PM. Would you like me to send you the driver live location link via WhatsApp?'
          : 'أبشر، شيكت لك على الطلب 9822 مع شركة ناقل بالرياض (حي الملقا) وهو حالياً في مرحلة التوصيل اليوم قبل الساعة 4 عصراً. تحب أرسل لك رابط موقع السائق المباشر على الواتساب؟',
      sourceDoc: 'Logistics_API_v2.1 + SLA_Policy.pdf',
      confidence: 99.4,
      time: '10:01 AM',
    },
  ];

  const [messages, setMessages] = useState<Message[]>(defaultConversation);

  useEffect(() => {
    if (initialPrompt) {
      setMessages([
        ...defaultConversation.slice(0, 1),
        {
          role: 'user',
          content: initialPrompt,
          time: 'Now',
        },
        {
          role: 'agent',
          content:
            lang === 'en'
              ? `I have processed your inquiry according to enterprise policy. Everything has been validated and synced across your CRM timeline.`
              : `تم التحقق من طلبك فوراً وتطبيق السياسة المعتمدة، وتم توثيق العملية بالكامل في نظام إدارة العملاء.`,
          sourceDoc: 'Enterprise_Policy_Matrix_2026.pdf',
          confidence: 99.8,
          time: 'Now',
        },
      ]);
    }
  }, [initialPrompt, lang]);

  if (!isOpen) return null;

  const handleSend = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputMessage.trim()) return;

    const userText = inputMessage;
    setInputMessage('');

    const newMsgs: Message[] = [
      ...messages,
      {
        role: 'user',
        content: userText,
        time: 'Just now',
      },
    ];
    setMessages(newMsgs);
    setIsTyping(true);

    setTimeout(() => {
      let agentReply = '';
      let source = 'KSA_Customer_Policy_Manual.pdf';

      if (userText.includes('سداد') || userText.includes('فاتورة') || userText.toLowerCase().includes('pay') || userText.toLowerCase().includes('bill')) {
        agentReply =
          lang === 'en'
            ? 'I generated a direct Sadad invoice reference #2940182 for 299 SAR. A payment link with Mada & Apple Pay has been dispatched to your verified mobile number.'
            : 'تم إنشاء فاتورة سداد برقم 2940182 بمبلغ 299 ريال، وأرسلت لك رابط السداد المباشر عبر مدى وأبل باي برسالة نصية.';
        source = 'Sadad_Billing_Engine_v4.pdf';
      } else if (userText.includes('موعد') || userText.toLowerCase().includes('book') || userText.toLowerCase().includes('appointment')) {
        agentReply =
          lang === 'en'
            ? 'I have confirmed your appointment for Tuesday at 4:30 PM. A calendar invite and WhatsApp reminder has been scheduled.'
            : 'تم تأكيد موعدك يوم الثلاثاء القادم الساعة 4:30 عصراً، وأرسلت لك تأكيد الحجز وموقع العيادة عبر واتساب.';
        source = 'Calendar_Integration_Hub.json';
      } else {
        agentReply =
          lang === 'en'
            ? `Thank you for your request. According to our approved internal procedures, this has been verified and registered. Is there anything else I can assist you with?`
            : `تسلم، استفسارك مسجل ومعتمد بموجب لائحة الخدمة لدينا. تم تنفيذ الإجراء المطلوب فوراً، هل تأمرني بشيء ثاني؟`;
      }

      setMessages([
        ...newMsgs,
        {
          role: 'agent',
          content: agentReply,
          sourceDoc: source,
          confidence: 99.6,
          time: 'Just now',
        },
      ]);
      setIsTyping(false);
    }, 900);
  };

  const presetScenarios = [
    {
      title: lang === 'en' ? 'Track Shipment' : 'تتبع الشحنة',
      text: lang === 'en' ? 'Where is my order #9822?' : 'وين شحنتي رقم 9822؟',
    },
    {
      title: lang === 'en' ? 'Reschedule Appointment' : 'تعديل موعد',
      text:
        lang === 'en'
          ? 'Can I postpone my appointment to Thursday morning?'
          : 'أبي أغير موعدي للخميس الصباح لو سمحت',
    },
    {
      title: lang === 'en' ? 'Pay Bill' : 'دفع الفاتورة',
      text:
        lang === 'en'
          ? 'Send me the Sadad code to pay my balance'
          : 'أرسل لي كود سداد عشان أدفع الفاتورة',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-2xl w-full flex flex-col max-h-[92vh] shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header Bar */}
        <div className="p-4 sm:p-5 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-black text-white flex items-center justify-center">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm sm:text-base font-bold text-slate-900">
                  Hams.AI Live Agent Simulator
                </h3>
                <span className="flex items-center gap-1 text-[10px] bg-emerald-100 text-emerald-800 font-semibold px-2 py-0.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>{lang === 'en' ? 'Connected' : 'متصل'}</span>
                </span>
              </div>
              <p className="text-[11px] text-slate-500">
                {lang === 'en'
                  ? 'Enterprise Knowledge Copilot • Saudi Dialect Neural Engine'
                  : 'مساعد المعرفة المؤسسي • محرك اللهجات السعودية'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-black hover:bg-slate-200/60"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Dialect / Voice selector bar */}
        <div className="px-4 py-2.5 bg-slate-100/70 border-b border-slate-200 flex flex-wrap items-center justify-between gap-2 text-xs">
          <span className="font-semibold text-slate-600">
            {lang === 'en' ? 'Dialect Model:' : 'نموذج اللهجة:'}
          </span>
          <div className="flex items-center gap-1.5 overflow-x-auto hide-scrollbar">
            {[
              { id: 'najdi', label: lang === 'en' ? 'Najdi (نجدي)' : 'نجدي' },
              { id: 'hijazi', label: lang === 'en' ? 'Hijazi (حجازي)' : 'حجازي' },
              { id: 'msa', label: lang === 'en' ? 'Arabic MSA (فصحى)' : 'فصحى' },
              { id: 'english', label: 'English' },
            ].map((d) => (
              <button
                key={d.id}
                onClick={() => setSelectedDialect(d.id as any)}
                className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition ${
                  selectedDialect === d.id
                    ? 'bg-black text-white'
                    : 'bg-white text-slate-700 hover:bg-slate-200'
                }`}
              >
                {d.label}
              </button>
            ))}
          </div>
        </div>

        {/* Audio Waveform Live Simulation Bar */}
        <div className="px-4 py-2 bg-slate-900 text-white flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <Volume2 className="w-4 h-4 text-emerald-400 animate-pulse" />
            <span className="text-[11px] text-slate-300 font-mono">
              {lang === 'en' ? 'Latency: 380ms' : 'زمن الاستجابة: 380 ملي ثانية'}
            </span>
          </div>

          {/* Audio bars */}
          <div className="flex items-center gap-1">
            <span className="w-1 h-3 bg-emerald-400 rounded-full animate-bounce"></span>
            <span className="w-1 h-5 bg-emerald-400 rounded-full animate-pulse"></span>
            <span className="w-1 h-2 bg-emerald-400 rounded-full animate-bounce"></span>
            <span className="w-1 h-4 bg-emerald-400 rounded-full animate-pulse"></span>
            <span className="w-1 h-3 bg-emerald-400 rounded-full animate-bounce"></span>
          </div>

          <div className="text-[11px] text-slate-300 flex items-center gap-1">
            <Database className="w-3.5 h-3.5 text-blue-400" />
            <span>KSA Sovereign Server</span>
          </div>
        </div>

        {/* Message Thread */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 bg-slate-50/50">
          {messages.map((m, idx) => (
            <div
              key={idx}
              className={`flex flex-col ${
                m.role === 'user' ? 'items-end' : 'items-start'
              }`}
            >
              <div className="flex items-center gap-1.5 mb-1 px-1">
                <span className="text-[10px] font-semibold text-slate-400">
                  {m.role === 'user'
                    ? lang === 'en'
                      ? 'Customer (Phone / WhatsApp)'
                      : 'العميل (اتصال / واتساب)'
                    : lang === 'en'
                    ? 'Hams AI Agent'
                    : 'وكيل همس الذكي'}
                </span>
                <span className="text-[10px] text-slate-400">• {m.time}</span>
              </div>

              <div
                className={`max-w-[88%] sm:max-w-[80%] rounded-2xl p-3.5 text-xs sm:text-sm leading-relaxed shadow-2xs ${
                  m.role === 'user'
                    ? 'bg-black text-white rounded-tr-none'
                    : 'bg-white text-slate-900 border border-slate-200 rounded-tl-none'
                }`}
              >
                <p>{m.content}</p>

                {/* Grounded Source Doc Citation */}
                {m.sourceDoc && (
                  <div className="mt-2.5 pt-2 border-t border-slate-100 flex flex-wrap items-center gap-2 text-[10px] text-slate-500">
                    <span className="flex items-center gap-1 font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                      <FileCheck className="w-3 h-3" />
                      <span>{m.sourceDoc}</span>
                    </span>
                    {m.confidence && (
                      <span className="text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded font-mono font-bold">
                        {m.confidence}% {lang === 'en' ? 'confidence' : 'دقة'}
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-2 text-xs text-slate-400 bg-white border border-slate-200 px-3 py-2 rounded-xl w-fit">
              <Sparkles className="w-3.5 h-3.5 text-blue-500 animate-spin" />
              <span>
                {lang === 'en'
                  ? 'Retrieving company knowledge & formulating response...'
                  : 'جاري استرجاع السياسات وتوليد الرد الصوتي...'}
              </span>
            </div>
          )}
        </div>

        {/* Quick prompt suggestions */}
        <div className="px-4 py-2 bg-slate-100/70 border-t border-slate-200 flex items-center gap-2 overflow-x-auto hide-scrollbar">
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider shrink-0">
            {lang === 'en' ? 'Try Scenario:' : 'جرّب استفسار:'}
          </span>
          {presetScenarios.map((sc, i) => (
            <button
              key={i}
              onClick={() => {
                setInputMessage(sc.text);
              }}
              className="text-[11px] px-2.5 py-1 bg-white border border-slate-200 rounded-lg text-slate-700 hover:bg-slate-200 font-medium whitespace-nowrap shrink-0 transition"
            >
              {sc.title}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <form onSubmit={handleSend} className="p-3 bg-white border-t border-slate-200 flex gap-2">
          <input
            type="text"
            placeholder={
              lang === 'en'
                ? 'Type customer message or inquiry...'
                : 'اكتب رسالة العميل أو استفساره...'
            }
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            className="flex-1 px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-black"
          />
          <button
            type="submit"
            disabled={!inputMessage.trim() || isTyping}
            className="bg-black text-white px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold hover:bg-neutral-800 disabled:opacity-40 transition flex items-center gap-1.5"
          >
            <span>{lang === 'en' ? 'Send' : 'إرسال'}</span>
            <Send className={`w-3.5 h-3.5 ${lang === 'ar' ? 'rotate-180' : ''}`} />
          </button>
        </form>
      </div>
    </div>
  );
};
