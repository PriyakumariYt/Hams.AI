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
  const [selectedTopic, setSelectedTopic] = useState<'network' | 'wifi' | 'cabling' | 'software'>('network');
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [activeCall, setActiveCall] = useState(true);

  const defaultConversation: Message[] = [
    {
      role: 'agent',
      content:
        lang === 'en'
          ? 'Hello! Welcome to NTS Network Solutions. How can we assist you with network infrastructure, enterprise WiFi, structured cabling, or custom web/mobile software today?'
          : 'أهلاً بك في NTS Network Solutions. كيف يمكننا مساعدتك في البنية التحتية للشبكات، الواي فاي المؤسسي، التمديدات الهيكلية، أو تطوير البرمجيات المخصصة اليوم؟',
      time: '10:00 AM',
    },
    {
      role: 'user',
      content:
        initialPrompt ||
        (lang === 'en'
          ? 'We need enterprise WiFi coverage and structured Cat6 cabling for our new 150-seat office.'
          : 'نحتاج إلى تغطية واي فاي مؤسسية وتمديدات كابلات Cat6 لمكتب جديد يتسع لـ 150 موظفاً.'),
      time: '10:01 AM',
    },
    {
      role: 'agent',
      content:
        lang === 'en'
          ? 'NTS provides end-to-end workplace deployments. We will conduct a precision RF site survey, install high-density access points with a central WLAN controller, and deploy certified Cat6A cabling with 42U rack integration. All runs will be Fluke-tested with full documentation provided at handover.'
          : 'توفر NTS تجهيزاً متكاملاً لبيئات العمل. سنجري مسحاً هندسياً للترددات اللاسلكية، ونركب نقاط وصول عالية الكثافة مع وحدة تحكم مركزية، ونمدد كابلات Cat6A معتمدة مع تنظيم رفوف الخوادم 42U واختبارها بأجهزة Fluke وتسليم تقارير كاملة.',
      sourceDoc: 'NTS_Infrastructure_Standards_2026.pdf',
      confidence: 99.6,
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
              ? `Our technical team has reviewed this requirement. We provide single-point ownership across hardware procurement, cabling installation, device provisioning, and custom software integration.`
              : `راجع فريقنا الهندسي هذا المطلب الفني. نقدم مسؤولية موحدة وشاملة تبدأ من توريد الأجهزة والتمديدات وحتى برمجة الأنظمة والتسليم النهائي.`,
          sourceDoc: 'NTS_Engineering_Delivery_Manual.pdf',
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
      let source = 'NTS_Engineering_Guidelines.pdf';

      const textLower = userText.toLowerCase();

      if (textLower.includes('wifi') || textLower.includes('wireless') || userText.includes('واي فاي') || userText.includes('لاسلكي')) {
        agentReply =
          lang === 'en'
            ? 'For enterprise wireless, we engineer high-density deployments using enterprise APs and centralized controllers. Our RF site survey ensures zero dead zones and seamless roaming across your entire facility.'
            : 'فيما يخص الشبكات اللاسلكية، نصمم شبكات عالية الكثافة بنقاط وصول مؤسسية ووحدات تحكم مركزية لضمان تنقل سلس وانعدام النقاط الميتة عبر كامل المنشأة.';
        source = 'NTS_WLAN_Deployment_Spec.pdf';
      } else if (textLower.includes('cable') || textLower.includes('cabling') || userText.includes('كابل') || userText.includes('تمديد')) {
        agentReply =
          lang === 'en'
            ? 'Our structured cabling covers Cat6, Cat6A, and optical fiber backbones. We handle 42U rack integration, patch panels, and provide certified Fluke test reports at project handover.'
            : 'تشمل حلولنا التمديدات الهيكلية Cat6 وCat6A والألياف البصرية مع تنظيم كبائن الخوادم 42U ولوحات التوزيع وتسليم شهادات فحص Fluke المعتمدة.';
        source = 'Structured_Cabling_TIA568.pdf';
      } else if (textLower.includes('app') || textLower.includes('software') || textLower.includes('web') || userText.includes('برمج') || userText.includes('تطبيق') || userText.includes('موقع')) {
        agentReply =
          lang === 'en'
            ? 'Our software team designs responsive web platforms, iOS/Android mobile apps, and custom business tools with API integrations connecting directly into your internal databases and ERPs.'
            : 'يطور فريقنا البرمجي منصات ويب متطورة وتطبيقات جوال لأنظمة iOS وأندرويد وبرمجيات مخصصة مع ربط كامل عبر واجهات برمجة التطبيقات APIs بأنظمتكم الداخلية.';
        source = 'NTS_Software_Architecture_Doc.pdf';
      } else {
        agentReply =
          lang === 'en'
            ? 'NTS Network Solutions offers unified physical IT deployment and digital software development. We would be happy to review your exact floorplans or functional requirements and provide a detailed delivery plan.'
            : 'تقدم NTS Network Solutions خدمات متكاملة تجمع بين البنية التحتية المادية وتطوير البرمجيات. يسعدنا استلام مخططات موقعك أو متطلباتك لتقديم مقترح فني مفصل.';
        source = 'NTS_Project_Scoping_Overview.pdf';
      }

      setMessages([
        ...newMsgs,
        {
          role: 'agent',
          content: agentReply,
          sourceDoc: source,
          confidence: 99.7,
          time: 'Just now',
        },
      ]);
      setIsTyping(false);
    }, 800);
  };

  const presetScenarios = [
    {
      title: lang === 'en' ? 'Warehouse Wireless' : 'واي فاي المستودعات',
      text:
        lang === 'en'
          ? 'How do you ensure zero dead zones for barcode scanners in high-bay warehouses?'
          : 'كيف تضمنون عدم انقطاع الاتصال لأجهزة الباركود في المستودعات ذات الأسقف العالية؟',
    },
    {
      title: lang === 'en' ? 'Structured Cabling' : 'فحص واعتماد الكابلات',
      text:
        lang === 'en'
          ? 'Do you provide Fluke test certification reports for Cat6A and fiber runs?'
          : 'هل تقدمون شهادات فحص واعتماد Fluke لتمديدات كابلات Cat6A والألياف البصرية؟',
    },
    {
      title: lang === 'en' ? 'Custom Web & Mobile' : 'تطوير البرمجيات والتطبيقات',
      text:
        lang === 'en'
          ? 'We want to build a custom customer portal and field-service mobile app.'
          : 'نريد تطوير بوابة عملاء مخصصة وتطبيق جوال للفرق الميدانية.',
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
                  {lang === 'en' ? 'NTS Interactive Solution Assistant' : 'المساعد التفاعلي لمشاريع NTS'}
                </h3>
                <span className="flex items-center gap-1 text-[10px] bg-emerald-100 text-emerald-800 font-semibold px-2 py-0.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>{lang === 'en' ? 'Online' : 'متصل'}</span>
                </span>
              </div>
              <p className="text-[11px] text-slate-500">
                {lang === 'en'
                  ? 'Infrastructure Architecture, Wireless Audits & Custom Software Delivery'
                  : 'استشارات البنية التحتية، فحص الشبكات، وتطوير البرمجيات المخصصة'}
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

        {/* Topic Selector Bar */}
        <div className="px-4 py-2.5 bg-slate-100/70 border-b border-slate-200 flex flex-wrap items-center justify-between gap-2 text-xs">
          <span className="font-semibold text-slate-600">
            {lang === 'en' ? 'Solution Domain:' : 'مجال الخدمة:'}
          </span>
          <div className="flex items-center gap-1.5 overflow-x-auto hide-scrollbar">
            {[
              { id: 'network', label: lang === 'en' ? 'Networks' : 'الشبكات' },
              { id: 'wifi', label: lang === 'en' ? 'Enterprise WiFi' : 'الواي فاي' },
              { id: 'cabling', label: lang === 'en' ? 'Cabling & CCTV' : 'الكابلات والمراقبة' },
              { id: 'software', label: lang === 'en' ? 'Custom Software' : 'البرمجيات' },
            ].map((d) => (
              <button
                key={d.id}
                onClick={() => setSelectedTopic(d.id as any)}
                className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition ${
                  selectedTopic === d.id
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
              {lang === 'en' ? 'Engineered for Performance' : 'مصمم لأعلى معايير الأداء'}
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
            <span>NTS Engineering Hub</span>
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
                      ? 'Client Inquiry'
                      : 'استفسار العميل'
                    : lang === 'en'
                    ? 'NTS Technical Assistant'
                    : 'مساعد NTS الهندسي'}
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
                        {m.confidence}% {lang === 'en' ? 'match' : 'تطابق'}
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
                  ? 'Consulting NTS engineering standards & formulating recommendation...'
                  : 'جاري مراجعة معايير NTS الهندسية وصياغة التوصية الفنية...'}
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
                ? 'Ask about networking, wireless, cabling, or custom software...'
                : 'اسأل عن الشبكات، الواي فاي، الكابلات، أو البرمجيات...'
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
