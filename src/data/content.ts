import { ComplianceItem, ProductTab, UseCaseItem, WorkflowStep } from '../types';

export const translations = {
  en: {
    nav: {
      platforms: 'Platforms',
      products: 'Products',
      useCases: 'Use Cases',
      compliance: 'Compliance',
      company: 'Company',
      signIn: 'Sign in →',
      bookDemo: 'Book a Demo',
      language: 'Language',
    },
    hero: {
      tag: 'GenAI Unified Customer Engine',
      title: 'One AI platform for every customer conversation.',
      subtitle:
        'One AI brain for your business. Across voice, chat, WhatsApp & more. Accomplish your tasks with agents that understand your policies and execute them efficiently.',
      bookDemo: 'Book a Demo',
      trySandbox: 'Try Live Agent Demo',
      trustedBy: 'Trusted by leading enterprises & government',
    },
    comparison: {
      title: "What happens when your channels aren't unified in one system?",
      subtitle: 'See what changes when every conversation, customer, and channel comes together.',
      oldWay: 'The old traditional way',
      hamsWay: 'The Hams.AI way',
      rows: [
        {
          old: 'Channels live in separate tools.',
          hams: 'Every channel lives in one inbox.',
        },
        {
          old: 'No one sees full customer history.',
          hams: 'One shared timeline for every customer.',
        },
        {
          old: 'Questions repeat, info gets lost.',
          hams: 'The system remembers every interaction.',
        },
        {
          old: 'Leaders only see topline numbers.',
          hams: 'Leaders see real conversations and reasons.',
        },
        {
          old: 'Customers feel ignored and tired.',
          hams: 'Customers feel known, heard, and helped.',
        },
      ],
    },
    metrics: {
      tag: 'Key Metrics',
      title: 'Our impact in numbers',
      items: [
        {
          value: '100,500,012+',
          label: 'AI-automated calls and conversations handled end-to-end.',
          detail: 'Across voice calls, WhatsApp, live chat, and support tickets.',
        },
        {
          value: '70%',
          title: 'Reduction in operational cost',
          label: 'through full automation and conversation intelligence across all customer channels.',
        },
        {
          value: '60%',
          title: 'Decrease in human agent workload',
          label: 'Through deflection, intelligent routing, and recommendation automation.',
        },
        {
          value: '98%',
          title: 'First-call resolution rate',
          label: 'across inbound and outbound scenarios—measured by built-in Agent QA Lab.',
        },
        {
          value: '100%',
          title: 'Instant answer rate, 0s average wait time',
          label: 'Every customer greeted in real time, even during peak loads.',
        },
      ],
    },
    testimonials: {
      title: 'Success stories from our clients',
      quote:
        '“Before Hams.AI, we struggled to maintain customer engagement after working hours. Most inquiries were left unanswered until the next day. Now, our AI voice agents handle conversations 24/7, providing instant responses, and increased our customer satisfaction. The result? Response times dropped to zero wait, customer satisfaction improved noticeably, and our support team can finally focus on complex cases.”',
      author: 'Mohammed Alshehri',
      role: 'Advisor, Government Sector',
      badge: 'Tamkeen Partner Deployment',
      verified: 'Verified Gov Client',
      bookDemo: 'Book a demo',
    },
    howItWorks: {
      title: 'From idea to live AI contact center in minutes',
      subtitle: 'Structured, governed implementation designed for high availability.',
    },
    useCasesSection: {
      title: 'Use Cases',
      subtitle: 'Real operations Hams runs end to end, from first contact to case closure.',
      seeAll: 'See all use cases',
      closeModal: 'Close',
    },
    businessImpact: {
      title: 'Real Business Impact',
      subtitle: 'Faster service, Lower cost, better experience',
      stats: [
        { value: '0s', label: 'Average wait time' },
        { value: '24/7', label: 'Customer service' },
        { value: '70%', label: 'Lower operating cost' },
        { value: '89%', label: 'Customer satisfaction' },
        { value: '<60s', label: 'Resolution speed' },
        { value: '+40%', label: 'Faster process execution' },
      ],
    },
    complianceSection: {
      title: "Security and compliance aren't optional. They're foundational.",
      desc: 'Hams.AI meets every requirement set by the National Cybersecurity Authority (NCA) in Saudi Arabia. Your data stays secure, compliant, and exactly where you want it.',
      trustTag: 'Compliance You Can Trust',
      viewPolicy: 'View our Security & Compliance →',
    },
    cta: {
      title: 'Ready to turn conversations into action?',
      desc: 'See how Hams.AI can unify your channels, deploy intelligent agents, automate workflows, and connect with your existing systems, all around your business needs.',
      button: 'Book a Demo',
    },
    footer: {
      desc: 'Create conversational AI agents that your customers love. Integrate across your website, app, WhatsApp, email, voice, and more.',
      companyName: 'Sawt Al Khafi Information Technology Company',
      unifiedNo: 'Unified National Number:',
      vatNo: 'VAT Registration Number:',
      address: 'National Address: Riyadh, Al Qairawan, Fares Al Azdi, KSA',
      rights: '© 2026 Hams.AI. All rights reserved.',
    },
  },
  ar: {
    nav: {
      platforms: 'المنصات',
      products: 'المنتجات',
      useCases: 'حالات الاستخدام',
      compliance: 'الامتثال والأمان',
      company: 'الشركة',
      signIn: 'تسجيل الدخول ←',
      bookDemo: 'طلب عرض توضيحي',
      language: 'اللغة',
    },
    hero: {
      tag: 'محرك خدمة العملاء الموحد بالذكاء الاصطناعي التوليدي',
      title: 'منصة ذكاء اصطناعي واحدة لكل محادثة مع عملائك.',
      subtitle:
        'عقل اصطناعي واحد لأعمالك عبر المكالمات الصوتية، المحادثات، واتساب، والمزيد. أنجز مهامك مع وكلاء يفهمون سياساتك وينفذونها بكفاءة تامة.',
      bookDemo: 'طلب عرض توضيحي',
      trySandbox: 'تجربة الوكيل الافتراضي الحي',
      trustedBy: 'موثوق به من قبل كبرى المؤسسات والجهات الحكومية',
    },
    comparison: {
      title: 'ماذا يحدث عندما لا تكون قنواتك موحدة في نظام واحد؟',
      subtitle: 'اكتشف الفرق عندما تجتمع كل محادثة، عميل، وقناة في منصة موحدة.',
      oldWay: 'الطريقة التقليدية القديمة',
      hamsWay: 'طريقة همس Hams.AI',
      rows: [
        {
          old: 'القنوات تعمل في أدوات منفصلة.',
          hams: 'كل القنوات تعمل في صندوق وارد موحد.',
        },
        {
          old: 'لا أحد يرى السجل الكامل للعميل.',
          hams: 'جدول زمني وسجل موحد لكل عميل.',
        },
        {
          old: 'الأسئلة تتكرر والبيانات تضيع.',
          hams: 'النظام يتذكر ويوثق كل تفاعل بدقة.',
        },
        {
          old: 'القادة يرون أرقاماً عامة فقط.',
          hams: 'القادة يرون تفاصيل المحادثات والأسباب الواقعية.',
        },
        {
          old: 'العميل يشعر بالإحباط والتجاهل.',
          hams: 'العميل يشعر بأنه مسموع ومقدّر ويتلقى مساعدة فورية.',
        },
      ],
    },
    metrics: {
      tag: 'مؤشرات الأداء',
      title: 'أثرنا بالأرقام',
      items: [
        {
          value: '+100,500,012',
          label: 'مكالمة ومحادثة ذكية تمت معالجتها بالكامل بواسطة الذكاء الاصطناعي.',
          detail: 'عبر المكالمات الصوتية وواتساب والمحادثة المباشرة وتذاكر الدعم.',
        },
        {
          value: '70%',
          title: 'انخفاض في التكاليف التشغيلية',
          label: 'من خلال الأتمتة الكاملة وتحليلات المحادثة الذكية عبر كل القنوات.',
        },
        {
          value: '60%',
          title: 'انخفاض عبء العمل على الموظفين',
          label: 'بفضل التحويل الذكي والتوجيه التلقائي واقتراحات المساعد الذكي.',
        },
        {
          value: '98%',
          title: 'معدل الحل من أول مكالمة',
          label: 'في جميع سيناريوهات الاتصال الواردة والصادرة عبر مختبر ضمان الجودة.',
        },
        {
          value: '100%',
          title: 'معدل استجابة فوري، صفر ثواني انتظار',
          label: 'كل عميل يتم الترحيب به والرد عليه فوراً حتى في أوقات الذروة.',
        },
      ],
    },
    testimonials: {
      title: 'قصص نجاح من عملائنا',
      quote:
        '“قبل همس Hams.AI، كنا نواجه تحدياً كبيراً في التفاعل مع العملاء بعد ساعات العمل الرسمية وكانت الاستفسارات تنتظر لليوم التالي. الآن، وكلاؤنا الصوتيون يعملون على مدار الساعة 24/7 بردود فورية وذكية. والنتيجة؟ انخفض وقت الانتظار إلى صفر، وارتفع رضا العملاء بشكل ملحوظ، وتفرغ فريقنا للحالات الأكثر تعقيداً.”',
      author: 'محمد الشهري',
      role: 'مستشار، القطاع الحكومي',
      badge: 'شريك تمكين للتقنيات',
      verified: 'عميل حكومي موثق',
      bookDemo: 'احجز عرضاً توضيحياً',
    },
    howItWorks: {
      title: 'من الفكرة إلى مركز اتصال ذكي متكامل في دقائق',
      subtitle: 'تنفيذ خاضع لحوكمة دقيقة ومصمم للتوافرية العالية والأمان التام.',
    },
    useCasesSection: {
      title: 'حالات الاستخدام',
      subtitle: 'عمليات حقيقية يديرها نظام همس من أول اتصال وحتى إغلاق الحالة.',
      seeAll: 'استعراض جميع حالات الاستخدام',
      closeModal: 'إغلاق',
    },
    businessImpact: {
      title: 'الأثر الحقيقي على الأعمال',
      subtitle: 'خدمة أسرع، تكلفة أقل، وتجربة عملاء استثنائية',
      stats: [
        { value: '0 ثانية', label: 'متوسط وقت الانتظار' },
        { value: '24/7', label: 'خدمة عملاء متواصلة' },
        { value: '70%', label: 'انخفاض التكاليف التشغيلية' },
        { value: '89%', label: 'نسبة رضا العملاء' },
        { value: 'أقل من 60 ثانية', label: 'سرعة حل الطلبات' },
        { value: '+40%', label: 'تسريع إنجاز العمليات' },
      ],
    },
    complianceSection: {
      title: 'الأمان والامتثال ليسا خياراً، بل أساس كل خدمة نقدمها.',
      desc: 'يتوافق نظام همس Hams.AI مع كافة متطلبات الهيئة الوطنية للأمن السيبراني (NCA) في المملكة العربية السعودية. بياناتك مشفرة ومحمية ومحفوظة داخل المملكة.',
      trustTag: 'امتثال يمكنك الوثوق به',
      viewPolicy: 'استعراض معايير الأمان والامتثال ←',
    },
    cta: {
      title: 'هل أنت جاهز لتحويل المحادثات إلى نتائج فورية؟',
      desc: 'اكتشف كيف يمكن لنظام همس توحيد قنواتك، وتدريب وكلائك الأذكياء، وأتمتة مسارات العمل وتكاملها مع أنظمتك الحالية بكل سلاسة.',
      button: 'طلب عرض توضيحي',
    },
    footer: {
      desc: 'اصنع وكلاء ذكاء اصطناعي محادثي يعشقهم عملاؤك. تكامل فوري عبر موقعك وتطبيقك وواتساب والبريد والمكالمات الصوتية.',
      companyName: 'شركة صوت الخفي لتقنية المعلومات',
      unifiedNo: 'الرقم الوطني الموحد:',
      vatNo: 'رقم التسجيل الضريبي:',
      address: 'العنوان الوطني: الرياض، حي القيروان، شارع فارس الأزدي، المملكة العربية السعودية',
      rights: '© 2026 همس Hams.AI. جميع الحقوق محفوظة.',
    },
  },
};

export const productsData: ProductTab[] = [
  {
    id: 'copilot',
    label: {
      en: 'Enterprise Knowledge Copilot',
      ar: 'مساعد المعرفة المؤسسي',
    },
    title: {
      en: 'A copilot that knows your business',
      ar: 'مساعد ذكي يتقن سياسات وقواعد عملك',
    },
    desc: {
      en: 'Enterprise Knowledge Copilot brings approved policies, FAQs, and procedures into every conversation. Human and AI agents get the same grounded answer, in the moment, across every channel.',
      ar: 'يجلب مساعد المعرفة المؤسسي السياسات والأسئلة الشائعة والإجراءات المعتمدة إلى كل محادثة. يحصل الوكلاء البشريون والأذكياء على إجابة موحدة ودقيقة في اللحظة نفسها.',
    },
    benefits: [
      {
        title: {
          en: 'Copilot at the point of work',
          ar: 'مساعد في صلب المحادثة المباشرة',
        },
        desc: {
          en: "Surfaces the right guidance during a live call or chat, so agents don't hunt through documents or leave the conversation.",
          ar: 'يظهر التوجيه والإجابة الصحيحة أثناء المكالمة أو المحادثة دون الحاجة للبحث في المستندات أو مغادرة الشاشة.',
        },
      },
      {
        title: {
          en: 'Update once, assist everywhere',
          ar: 'تحديث واحد، وتطبيق فوري في كل القنوات',
        },
        desc: {
          en: 'Publish a policy change once and the copilot immediately uses the latest approved version for every team and channel.',
          ar: 'انشر تعديل السياسة لمرة واحدة ليستخدم الوكيل فوراً النسخة المعتمدة الأخيرة في جميع القنوات وفرق العمل.',
        },
      },
      {
        title: {
          en: 'Grounded in approved knowledge',
          ar: 'مستند تماماً إلى مصادرك المعتمدة',
        },
        desc: {
          en: 'Retrieve only company-approved sources, with access and guardrails that keep every answer inside your rules.',
          ar: 'استرجاع المعلومات فقط من مصادر الشركة الموثوقة مع حواجز حماية تضمن بقاء كل إجابة داخل الأنظمة الرسمية.',
        },
      },
    ],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDRvxH3OvLb0jhWDMDCZ0UQDqp36rvSMx27VLlyyVY2BaVkrv05ma5i6RkAQ6iuBQjHLT86_Pfmv7W0KkkR7wijSLApHpy-e77lsjCQN1iPb_RDgavmszu6ONnLbmioxeMpt1ngB3OSjfq6AZF3kQ0gTk2MGoIG9Rsiaz87a3PND_upZ8T0osn-iE9ybmCjxk18Kklpo-7EN6-y03SO4NUoNZyKH3tF1o24SQ4Dbd2jMQ2qKKHtKRc',
    tag: {
      en: 'Live Conversation Context & Policy Retrieval',
      ar: 'سياق المحادثة المباشر واسترجاع السياسات',
    },
  },
  {
    id: 'voice-chat',
    label: {
      en: 'AI Voice & Chat',
      ar: 'المكالمات والمحادثات الصوتية الذكية',
    },
    title: {
      en: 'Natural Saudi & Gulf Arabic Voice Intelligence',
      ar: 'ذكاء صوتي يفهم اللهجات السعودية والخليجية بطلاقة',
    },
    desc: {
      en: 'Sub-second latency voice agents speaking Najdi, Hijazi, Gulf, and MSA dialects with human inflection. Handles complete phone inquiries and routes smoothly when human escalation is needed.',
      ar: 'وكلاء صوتيون بزمن استجابة أقل من ثانية يتحدثون باللهجات النجدية والحجازية والخليجية والفصحى. ينفذون المكالمات بالكامل مع تحويل فوري وسلس للموظف عند الحاجة.',
    },
    benefits: [
      {
        title: {
          en: 'Sub-600ms latency voice response',
          ar: 'استجابة صوتية في أقل من 600 ملي ثانية',
        },
        desc: {
          en: 'Natural voice cadence with automatic interruption handling, just like talking to a real expert agent.',
          ar: 'تدفق صوتي طبيعي يدعم المقاطعة التلقائية والتجاوب الفوري كما في المكالمات الحقيقية.',
        },
      },
      {
        title: {
          en: 'Native Saudi & regional dialect understanding',
          ar: 'إتقان تام للهجات المحلية والمصطلحات الدارجة',
        },
        desc: {
          en: 'Trained on nuanced regional vocabulary, common slang, and formal Arabic enterprise terms.',
          ar: 'مدرب على المفردات الإقليمية والمصطلحات الشائعة واللغة المؤسسية المعتمدة.',
        },
      },
      {
        title: {
          en: 'Intelligent warm handoff to human staff',
          ar: 'تسليم ذكي للموظف مع ملخص كامل',
        },
        desc: {
          en: 'When complex issues arise, call transfers carry the full transcript and sentiment analysis to the human specialist.',
          ar: 'عند ظهور مشكلة معقدة، تنتقل المكالمة للموظف مع سجل نصي وتحليل كامل للمشاعر.',
        },
      },
    ],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuALWeLCRZMVUaqBK-QodunnS7y_HVkQokQ_yYWvGsVgbc-J47063Dy6uZWk5xGRLVKqHksQgoVhSnPGRStWpayFdrGA0y8alAaPo0I7q0DCKsI1zZvmfUqdy_IOxnCJ1xacKquoZYQOaXKIiBk2rekWQsN6qFyuBXGUowbJ9SjzVryFN1g-pc7ORmtySB9VBX43m5cbZxnITPOyHJlOXUZ6QR9PO1YiI1xwckJalrmeNGjOVGuIKus',
    tag: {
      en: 'Agentic Voice Engine & Real-time Synthesis',
      ar: 'محرك الصوت الذكي وتوليد الكلام الفوري',
    },
  },
  {
    id: 'contact-center',
    label: {
      en: 'Cloud Contact Center',
      ar: 'مركز الاتصال السحابي',
    },
    title: {
      en: 'Unified Omnichannel Hub for enterprise scale',
      ar: 'مركز اتصالات سحابي موحد لكبرى المؤسسات',
    },
    desc: {
      en: 'Replace fragmented tools with an all-in-one cloud platform. Queue management, live supervisor whispering, sentiment telemetry, and native integrations with Salesforce, Zendesk, and local CRMs.',
      ar: 'استبدل الأدوات المتفرقة بمنصة سحابية متكاملة تشمل إدارة الطوابير، ومراقبة المشرفين الحية، وتحليل المشاعر، والتكامل مع سيلزفورس وزيندسك.',
    },
    benefits: [
      {
        title: {
          en: 'Unified Inbox across WhatsApp, Voice, and Web',
          ar: 'صندوق وارد موحد لواتساب والمكالمات والويب',
        },
        desc: {
          en: 'Manage customer journeys across every touchpoint on one responsive timeline.',
          ar: 'إدارة رحلة العميل عبر جميع نقاط التواصل في خط زمني موحد وتفاعلي.',
        },
      },
      {
        title: {
          en: 'Live supervisor oversight and analytics',
          ar: 'إشراف مباشر ولوحات تحكم تفاعلية للمشرفين',
        },
        desc: {
          en: 'Monitor live calls, whisper to agents in real time, or step in with one click.',
          ar: 'متابعة المكالمات الحية، وتوجيه الموظفين صوتياً بنقرة زر واحدة.',
        },
      },
      {
        title: {
          en: 'Automated QA scoring on 100% of calls',
          ar: 'تقييم جودة آلي لـ 100% من المحادثات والمكالمات',
        },
        desc: {
          en: 'Say goodbye to sample auditing. QA Lab checks every conversation for compliance and courtesy.',
          ar: 'تقييم آلي شامل لكل المحادثات للتأكد من الالتزام بالسياسات واللباقة المهنية.',
        },
      },
    ],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAgJz_PrJbJTX2HeGqDyyA97tEAXVCkg-k3Qm3KlfOX1M3u30LqqYGfyLfh0aB7gsAiK11gIwk-Ylc3tMzKiv2yaTs9hSaChoEVHEDFJjzW_UkFWlXjwSCgSap6h9BFYuCtFcFImR2WujShfv-K9PkjBtz5Tztlcm-5HhzoNCF3oDY2LPzLkxGpFFt2ayh4FpRNLlqJIOvaMU9T9JgOJAlJZZj7pXpughM4k9nJ0Piiw4COzucE0h4',
    tag: {
      en: 'Real-time Omnichannel Supervision & SLA Tracking',
      ar: 'إشراف مباشر متعدد القنوات وتتبع معايير الخدمة',
    },
  },
  {
    id: 'social-listening',
    label: {
      en: 'Social Listening',
      ar: 'الرصد والاستماع الاجتماعي',
    },
    title: {
      en: 'Proactive sentiment detection on X & TikTok',
      ar: 'رصد فوري لآراء العملاء على منصة إكس وتيك توك',
    },
    desc: {
      en: 'Detect customer feedback, negative sentiment spikes, and brand mentions across social channels in Saudi Arabia. Trigger automated AI outreach or create priority tickets before issues escalate.',
      ar: 'اكتشف آراء العملاء وتصاعد الشكاوى والإشارات لعلامتك التجارية عبر منصات التواصل في المملكة وتدخل فوراً بحلول ذكية قبل تفاقم المشكلة.',
    },
    benefits: [
      {
        title: {
          en: 'Real-time brand sentiment telemetry',
          ar: 'رصد مباشر لانطباعات الجمهور ومشاعرهم',
        },
        desc: {
          en: 'Instant alerts when social mentions spike or customer dissatisfaction is detected in public threads.',
          ar: 'تنبيهات فورية عند ارتفاع الشكاوى أو رصد استياء في المنشورات العامة.',
        },
      },
      {
        title: {
          en: 'Auto-drafted verified public responses',
          ar: 'اقتراح ردود رسمية فورية وموثوقة',
        },
        desc: {
          en: 'Generate polite, approved responses ready for PR approval or automated publishing.',
          ar: 'توليد ردود لبقة معتمدة من العلاقات العامة للرد السريع.',
        },
      },
      {
        title: {
          en: 'Direct conversion into private support tickets',
          ar: 'تحويل التغريدات العامة إلى تذاكر دعم خاصة',
        },
        desc: {
          en: 'Invite customers into secure WhatsApp or chat channels to resolve their concerns privately.',
          ar: 'دعوة العميل لمحادثة خاصة آمنة عبر واتساب لحل المشكلة بسرعة وسرية.',
        },
      },
    ],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAJ4ceRpb4wqaVmgT3miKZyYIjGhyz-JiayDxxSOEJXf6TDs7Y5uYFHL0p3dV3-exPJT7Ht7fsm0MSDHgpENhd1G9jU18YkHekwVA9OrI0O-jBURKLS5LNNNbRHwoxBpE6Ye1axcWTQMt90Bs4QnXlVMBRpXiTHxNMUX-Q-LrhMi39mTL95nBoWyEX5R6al3mHdoNMhw5jdbS9_aP-16hk6T5dC_7kYksOa7gt22ndLL47ZL8OWY0g',
    tag: {
      en: 'Social Sentiment & Ticket Ingestion',
      ar: 'تحليل المشاعر الاجتماعية وإنشاء تذاكر الخدمة',
    },
  },
];

export const workflowSteps: WorkflowStep[] = [
  {
    step: 'Step 01',
    title: {
      en: 'Discover & align',
      ar: 'الاستكشاف والمواءمة الاستراتيجية',
    },
    desc: {
      en: 'We map your current channels, volumes, and KPIs, then define AI use cases with your team.',
      ar: 'نقوم بدراسة قنواتك الحالية، وأحجام المكالمات، ومؤشرات الأداء، ثم نحدد مسارات الذكاء الاصطناعي مع فريقك.',
    },
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDU1xhfBubLIu_T2Hz0d8viMwIHWHVN8VNHn-bm6cx2kh5rc9bPcG_3fMr8lbFRckT3HDnyP-FDTcG1BpDTN8LEw7zjtx81SBa92r-j1zCDdg_UW2dkQdw96hY1b6bYf4507gYkcMWox7-t7-bYw6Prty6iq-xBu-5yfh9ep7B3qvhXzuKc6guA2VBOYm-86L8NtRmOgI1aug9UfU7IDRXrbERfxbvEFaNm-XVdWKZ98p1iSLKSTkg',
    alt: 'AI Neural Architecture Mapping',
  },
  {
    step: 'Step 02',
    title: {
      en: 'Design conversations & workflows',
      ar: 'تصميم المحادثات ومسارات العمل',
    },
    desc: {
      en: 'Together we design what customers say, what AI does, and when humans step in.',
      ar: 'نصمم معاً سيناريوهات أسئلة العملاء، وتصرفات الوكيل الذكي، ولحظة تحويل المكالمة للموظف المختص.',
    },
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAa54tqHlbrw1EF1F1vAWy72_FAyEgduC1SVcfX5d3920qvJTRDBfv1Mqw4f9VgywUo3fNvbC125fhIk3sd_J8t3xZ5ME9SSwqABmyaqOA13YT9KEhspHNL8-cKTv1B8jAuc2nqArcqDh8gkBU98xwKClttK3p6zCXYVAAgoa80I-Ni39IPxYXffnVwFKkhHNt5gChyKBUTNb9VRIskUfrTsOEzoS-4d04ENOXvr41r6AU4iuKaFWw',
    alt: 'Agentic Warm Transfer Configuration',
  },
  {
    step: 'Step 03',
    title: {
      en: 'Connect your tools & data',
      ar: 'ربط الأنظمة وقواعد البيانات',
    },
    desc: {
      en: 'Hams.AI plugs into your tools, and knowledge base so AI can act, not just answer.',
      ar: 'يتكامل نظام همس مع أدواتك وأنظمة إدارة العملاء وقواعد المعرفة لتنفيذ الإجراءات وليس مجرد الرد.',
    },
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBAfTRjUJ8W7EXRkdKffoZyutC_sQgxbDZCeylb1w4aIYIBQrM3JE0TWvCFGtddwHUB9FmyNIQ0N1dy5z3hRdjf8wjq2MNV_xl83rYN3mmsl9Dt7OuHWZmWFsyaGN3Vd2lOq5INcqyGBaoKS4aHO2jOyXhNRW-o1zRuRTh2EyUcvb2qw48UmQqphbQq55uouV83RhfZ89wCPsYbZMhq6uLMcsxzHHFMgea5SZgkf9aAzD34AKcW28g',
    alt: 'Integrations with AWS, Zendesk, Salesforce',
  },
  {
    step: 'Step 04',
    title: {
      en: 'Build, test, and train agents',
      ar: 'بناء واختبار وتدريب الوكلاء',
    },
    desc: {
      en: 'We configure flows, guardrails, and prompts, then test on real conversations before going fully live.',
      ar: 'نقوم بضبط ضوابط الأمان وحواجز الحماية ثم نجري اختبارات محاكاة على مكالمات حقيقية قبل الإطلاق الكامل.',
    },
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuALWeLCRZMVUaqBK-QodunnS7y_HVkQokQ_yYWvGsVgbc-J47063Dy6uZWk5xGRLVKqHksQgoVhSnPGRStWpayFdrGA0y8alAaPo0I7q0DCKsI1zZvmfUqdy_IOxnCJ1xacKquoZYQOaXKIiBk2rekWQsN6qFyuBXGUowbJ9SjzVryFN1g-pc7ORmtySB9VBX43m5cbZxnITPOyHJlOXUZ6QR9PO1YiI1xwckJalrmeNGjOVGuIKus',
    alt: 'Test your voice & text agent',
  },
  {
    step: 'Step 05',
    title: {
      en: 'Scale Across Channels',
      ar: 'التوسع عبر جميع القنوات',
    },
    desc: {
      en: 'Deploy AI agents across voice, WhatsApp, and more, then expand as your business grows.',
      ar: 'أطلق وكلاء الذكاء الاصطناعي عبر المكالمات، وواتساب، والبريد، ووسع نطاق الخدمة بسهولة مع نمو عملك.',
    },
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAJ4ceRpb4wqaVmgT3miKZyYIjGhyz-JiayDxxSOEJXf6TDs7Y5uYFHL0p3dV3-exPJT7Ht7fsm0MSDHgpENhd1G9jU18YkHekwVA9OrI0O-jBURKLS5LNNNbRHwoxBpE6Ye1axcWTQMt90Bs4QnXlVMBRpXiTHxNMUX-Q-LrhMi39mTL95nBoWyEX5R6al3mHdoNMhw5jdbS9_aP-16hk6T5dC_7kYksOa7gt22ndLL47ZL8OWY0g',
    alt: 'Omnichannel deployment WhatsApp, phone, email',
  },
  {
    step: 'Step 06',
    title: {
      en: 'Monitor, learn, and expand',
      ar: 'المتابعة والتعلم المستمر والتطوير',
    },
    desc: {
      en: 'Live dashboards show containment, CSAT, and more so you can improve flows and add use cases.',
      ar: 'لوحات تحكم مباشرة تعرض نسبة احتواء المكالمات ورضا العملاء لتطوير الأداء وإضافة حالات استخدام جديدة.',
    },
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAgJz_PrJbJTX2HeGqDyyA97tEAXVCkg-k3Qm3KlfOX1M3u30LqqYGfyLfh0aB7gsAiK11gIwk-Ylc3tMzKiv2yaTs9hSaChoEVHEDFJjzW_UkFWlXjwSCgSap6h9BFYuCtFcFImR2WujShfv-K9PkjBtz5Tztlcm-5HhzoNCF3oDY2LPzLkxGpFFt2ayh4FpRNLlqJIOvaMU9T9JgOJAlJZZj7pXpughM4k9nJ0Piiw4COzucE0h4',
    alt: 'Customer satisfaction dashboard metrics',
  },
];

export const useCasesData: UseCaseItem[] = [
  {
    id: 'collections',
    icon: '💳',
    category: 'finance',
    title: {
      en: 'Collections',
      ar: 'تحصيل المبالغ والمدفوعات',
    },
    desc: {
      en: 'Automated gentle payment notices and follow-ups with instant payment links.',
      ar: 'إشعارات لطيفة ومتابعة سداد تلقائية مع روابط دفع سريعة ومعتمدة.',
    },
    samplePrompt: {
      en: '"Hello Sarah, this is a quick reminder regarding invoice #4920 due on Sunday. Would you like me to send an Mada payment link to your WhatsApp?"',
      ar: '"مرحباً سارة، اتصال للتذكير بالفاتورة رقم 4920 المستحقة يوم الأحد. هل تحبين إرسال رابط دفع مدى عبر واتساب؟"',
    },
    channels: ['Voice', 'WhatsApp', 'SMS'],
    impactMetric: {
      en: '38% increase in on-time collection',
      ar: 'زيادة 38% في سرعة التحصيل بالموعد',
    },
  },
  {
    id: 'complaints',
    icon: '💬',
    category: 'support',
    title: {
      en: 'Customer complaints',
      ar: 'إدارة شكاوى العملاء',
    },
    desc: {
      en: 'Instant escalation, sentiment classification, and empathetic resolution.',
      ar: 'تصعيد فوري وتصنيف تلقائي للمشاعر وتقديم حلول متوافقة مع السياسات.',
    },
    samplePrompt: {
      en: '"I understand your frustration about the delivery delay. I have raised ticket #9822 with high priority and applied a 20 SAR credit to your wallet."',
      ar: '"أقدّر تماماً انزعاجك بسبب تأخر الشحنة. قمت بفتح تذكرة أولوية برقم 9822 وإضافة رصيد 20 ريال لمحفظتك فوراً."',
    },
    channels: ['Voice', 'Chat', 'WhatsApp'],
    impactMetric: {
      en: '92% faster grievance handling',
      ar: 'معالجة الشكاوى أسرع بنسبة 92%',
    },
  },
  {
    id: 'followup',
    icon: '🔄',
    category: 'operations',
    title: {
      en: 'Complaint follow-up',
      ar: 'متابعة الشكاوى المفتوحة',
    },
    desc: {
      en: 'Keep tickets updated without human agent overhead or long hold times.',
      ar: 'تحديث العملاء بحالة التذاكر تلقائياً دون الحاجة لانتظار موظف الخدمة.',
    },
    samplePrompt: {
      en: '"Your technical support ticket #7104 was inspected by maintenance. Would you like to confirm that your connection is restored?"',
      ar: '"بخصوص تذكرتك رقم 7104، تم فحص الخط من قبل الصيانة. هل ترغب بالتأكيد على عودة الخدمة لديك بشكل سليم؟"',
    },
    channels: ['WhatsApp', 'Voice'],
    impactMetric: {
      en: '0 backlog in status checks',
      ar: 'صفر تأخير في تحديثات الحالات',
    },
  },
  {
    id: 'csat',
    icon: '⭐',
    category: 'operations',
    title: {
      en: 'Customer satisfaction',
      ar: 'قياس رضا العملاء (CSAT)',
    },
    desc: {
      en: 'Post-call automated surveys, NPS tracking, and deep sentiment analysis.',
      ar: 'استبيانات ذكية مباشرة بعد الخدمة مع تحليل دقيق لانطباعات العميل.',
    },
    samplePrompt: {
      en: '"How satisfied were you with today\'s service on a scale of 1 to 5? Any suggestions for our team?"',
      ar: '"كيف تقيّم خدمتنا اليوم من 1 إلى 5؟ وهل لديك أي ملاحظة نطور بها تجربتك؟"',
    },
    channels: ['Voice IVR', 'WhatsApp'],
    impactMetric: {
      en: '4.8x higher survey response rate',
      ar: 'تضاعف معدل التجاوب مع الاستبيانات 4.8 مرات',
    },
  },
  {
    id: 'lead-qualification',
    icon: '🎯',
    category: 'sales',
    title: {
      en: 'Lead qualification',
      ar: 'تأهيل العملاء المحتملين',
    },
    desc: {
      en: 'Instant pre-qualification, budget checks, and immediate CRM entry.',
      ar: 'تأهيل فوري وتحديد الميزانية والمتطلبات وإدخال البيانات في الـ CRM.',
    },
    samplePrompt: {
      en: '"Great to connect! How many agents currently operate in your contact center, and what tools are you using?"',
      ar: '"أهلاً بك! كم عدد موظفي خدمة العملاء لديكم حالياً، وما هي الأنظمة التي تستخدمونها؟"',
    },
    channels: ['Web Chat', 'Voice', 'LinkedIn'],
    impactMetric: {
      en: '3x higher sales conversion speed',
      ar: 'تسريع تحويل الفرص البيعية 3 أضعاف',
    },
  },
  {
    id: 'booking',
    icon: '📅',
    category: 'operations',
    title: {
      en: 'Appointment booking',
      ar: 'حجز وتأكيد المواعيد',
    },
    desc: {
      en: 'Direct scheduling into your calendar software with automated reminders.',
      ar: 'جدولة مباشرة في تقويم العمل مع تأكيد وإشعارات تذكير قبل الموعد.',
    },
    samplePrompt: {
      en: '"I have Dr. Khalid available this Tuesday at 4:30 PM or Wednesday at 10:00 AM. Which one works best for you?"',
      ar: '"المواعيد المتاحة لدى الدكتور خالد: الثلاثاء 4:30 عصراً أو الأربعاء 10:00 صباحاً. أيهما يناسبك؟"',
    },
    channels: ['Voice', 'WhatsApp'],
    impactMetric: {
      en: '45% reduction in no-shows',
      ar: 'انخفاض نسبة عدم الحضور للمواعيد بـ 45%',
    },
  },
  {
    id: 'orders',
    icon: '📦',
    category: 'support',
    title: {
      en: 'Order status',
      ar: 'تتبع وحالة الطلبات والشحنات',
    },
    desc: {
      en: 'Real-time parcel tracking via WhatsApp and automated voice updates.',
      ar: 'تتبع فوري للشحنات وتعديل العنوان وأوقات التوصيل عبر واتساب والهاتف.',
    },
    samplePrompt: {
      en: '"Your shipment is with courier Naqel and scheduled for delivery today between 2:00 PM and 6:00 PM."',
      ar: '"شحنتك حالياً مع مندوب التوصيل ومجدولة للتسليم اليوم بين الساعة 2 و 6 مساءً."',
    },
    channels: ['WhatsApp', 'Voice', 'Chat'],
    impactMetric: {
      en: '85% WISMO query deflection',
      ar: 'حل 85% من استفسارات أين شحنتي آلياً',
    },
  },
  {
    id: 'reminders',
    icon: '🔔',
    category: 'finance',
    title: {
      en: 'Payment reminders',
      ar: 'التذكير بمواعيد السداد',
    },
    desc: {
      en: 'Multi-channel friendly reminders with direct payment integration.',
      ar: 'تذكيرات مرنة ومتعددة القنوات مع بوابة دفع سداد ومدى وبطاقات الائتمان.',
    },
    samplePrompt: {
      en: '"Reminder: Your subscription renewal of 299 SAR will process tomorrow. Manage payment preferences here: [Link]"',
      ar: '"تذكير: تجديد اشتراككم بقيمة 299 ريال غداً. يمكنكم مراجعة طريقة الدفع عبر الرابط: [الرابط]"',
    },
    channels: ['WhatsApp', 'SMS', 'Voice'],
    impactMetric: {
      en: '99.2% prompt notification delivery',
      ar: 'وصول الإشعارات بنسبة 99.2%',
    },
  },
];

export const complianceBadges: ComplianceItem[] = [
  {
    code: 'ISO 27001',
    standard: 'ISO/IEC 27001:2022',
    title: {
      en: 'Information Security',
      ar: 'أمن المعلومات وحماية البيانات',
    },
    desc: {
      en: 'Certified information security management covering data protection, access controls, risk management, and secure handling of enterprise data.',
      ar: 'شهادة معتمدة في إدارة أمن المعلومات، تشمل حماية البيانات، والتحكم في الوصول، وإدارة المخاطر، والمعالجة الآمنة للبيانات المؤسسية.',
    },
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-100',
  },
  {
    code: 'ISO 9001',
    standard: 'ISO 9001:2015',
    title: {
      en: 'Quality Management',
      ar: 'إدارة الجودة المؤسسية',
    },
    desc: {
      en: 'Certified quality management processes that support consistent service delivery, reliable performance, and continuous operational improvement.',
      ar: 'إجراءات إدارة جودة معتمدة تدعم استمرارية تقديم الخدمة بأعلى موثوقية والتطوير التشغيلي المستمر.',
    },
    badgeColor: 'bg-slate-50 text-slate-800 border-slate-200',
  },
  {
    code: 'ISO 22301',
    standard: 'ISO 22301:2019',
    title: {
      en: 'Business Continuity',
      ar: 'استمرارية الأعمال والتعافي',
    },
    desc: {
      en: 'Certified business continuity practices designed to reduce disruption, support disaster recovery, and maintain critical operations.',
      ar: 'ممارسات معتمدة لاستمرارية الأعمال وتقليل الانقطاعات ودعم خطط التعافي من الكوارث والحفاظ على العمليات الحيوية.',
    },
    badgeColor: 'bg-slate-50 text-slate-800 border-slate-200',
  },
  {
    code: '🇸🇦 PDPL',
    standard: 'PDPL READY',
    title: {
      en: 'Saudi Data Protection Law',
      ar: 'نظام حماية البيانات الشخصية السعودي',
    },
    desc: {
      en: "Aligned with Saudi Arabia's Personal Data Protection Law, including secure local data processing, controlled access, and KSA data residency.",
      ar: 'توافق كامل مع نظام حماية البيانات الشخصية بالمملكة، واستضافة محلية آمنة داخل مراكز بيانات معتمدة في السعودية.',
    },
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-100',
  },
  {
    code: 'GDPR',
    standard: 'GDPR COMPLIANT',
    title: {
      en: 'Global Data Protection',
      ar: 'حماية البيانات الأوروبية والدولية',
    },
    desc: {
      en: 'Designed to support European data protection requirements for multinational organizations and cross-border enterprise operations.',
      ar: 'مصمم لدعم معايير حماية البيانات الأوروبية والدولية للمؤسسات متعددة الجنسيات والعمليات عبر الحدود.',
    },
    badgeColor: 'bg-slate-50 text-slate-800 border-slate-200',
  },
  {
    code: 'AUDIT',
    standard: 'FULL AUDIT TRAIL',
    title: {
      en: 'Access Control & Governance',
      ar: 'سجل تدقيق كامل وحوكمة الصلاحيات',
    },
    desc: {
      en: 'Role-based access, complete audit logs, traceable actions, and governance controls built into every Hams.AI deployment.',
      ar: 'صلاحيات وصول مبنية على الأدوار، وسجلات تدقيق تفصيلية غير قابلة للتعديل، وحوكمة صارمة مدمجة في كل عملية.',
    },
    badgeColor: 'bg-slate-50 text-slate-800 border-slate-200',
  },
];
