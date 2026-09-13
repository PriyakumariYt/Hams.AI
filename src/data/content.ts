import { ComplianceItem, ProductTab, UseCaseItem, WorkflowStep } from '../types';

export const translations = {
  en: {
    nav: {
      platforms: 'Solutions',
      products: 'Capabilities',
      useCases: 'Industries',
      compliance: 'Standards',
      company: 'Company',
      signIn: 'Client Portal →',
      bookDemo: 'Discuss Project',
      language: 'Language',
    },
    hero: {
      tag: 'Infrastructure & Digital Development Partner',
      title: 'Infrastructure that keeps you connected. Websites, apps & software that move you forward.',
      subtitle:
        'One experienced partner, from idea to delivery. Secure enterprise networks, wireless coverage, connected workplaces, and tailored web & mobile applications.',
      bookDemo: 'Discuss Your Project',
      trySandbox: 'Explore Solutions',
      trustedBy: 'Serving organizations across Banking, Manufacturing, Retail & Healthcare',
    },
    comparison: {
      title: 'Why choose a single infrastructure & development partner?',
      subtitle: 'See what changes when physical IT infrastructure and custom software are built to work together from day one.',
      oldWay: 'The Fragmented Multi-Vendor Way',
      hamsWay: 'The NTS Network Advantage',
      rows: [
        {
          old: 'Multiple disjointed vendors for cabling, networking, and software.',
          hams: 'One accountable partner from physical cabling to custom web and mobile apps.',
        },
        {
          old: 'Finger-pointing between vendors when performance issues occur.',
          hams: 'Clear, end-to-end ownership from initial discovery to final handover.',
        },
        {
          old: 'Inconsistent execution and undocumented setups across branch sites.',
          hams: 'A disciplined standard of quality whether delivering one site or 100+ branches.',
        },
        {
          old: 'Lack of practical on-the-ground technical field experience.',
          hams: 'Experienced technical teams with hands-on field expertise across India.',
        },
        {
          old: 'Rigid off-the-shelf tools that do not fit your operational workflow.',
          hams: 'Custom software, intuitive web & mobile apps tailored to your business needs.',
        },
      ],
    },
    metrics: {
      tag: 'Our Scale & Track Record',
      title: 'Delivering consistency across India',
      items: [
        {
          value: '100+',
          label: 'Locations & branches supported with coordinated IT deployments.',
          detail: 'From single office refreshes to nationwide multi-location rollouts.',
        },
        {
          value: '6',
          title: 'Core infrastructure domains',
          label: 'Networks, Enterprise WiFi, CCTV, Structured Cabling, Workplace Tech, and Multi-Site Rollouts.',
        },
        {
          value: '100%',
          title: 'Single-point accountability',
          label: 'One coordinated team from project kickoff through testing, documentation, and handover.',
        },
        {
          value: '5-Layer',
          title: 'End-to-end technology stack',
          label: 'L1 Routing & Firewalls, L2 Wireless, L3 CCTV/Security, L4 Structured Cabling, L5 Workplace Tech.',
        },
        {
          value: '99.9%',
          title: 'Uptime & performance standard',
          label: 'High-availability infrastructure engineered for demanding corporate and industrial environments.',
        },
      ],
    },
    testimonials: {
      title: 'What our clients say about partnering with NTS',
      quote:
        '“Before working with NTS Network Solutions, managing IT rollouts across our branch locations meant juggling multiple hardware vendors, cabling technicians, and software agencies. NTS completely transformed our execution. They took total ownership of our enterprise network backbone, wireless access points, and developed a custom internal portal for our operations. Every site was delivered on schedule, fully tested, and documented. Having one reliable partner who understands both physical infrastructure and software engineering is a game-changer.”',
      author: 'Rajesh Sharma',
      role: 'VP of Technology & Infrastructure, Enterprise Retail Group',
      badge: 'Multi-Location Rollout Partner',
      verified: 'Verified Enterprise Client',
      bookDemo: 'Discuss your project',
    },
    howItWorks: {
      title: 'From your first idea to your next location',
      subtitle: 'From infrastructure to custom software, good delivery starts with a clear plan. We bring structure, communication, and ownership to every stage.',
    },
    useCasesSection: {
      title: 'Built for Your World: Industries We Serve',
      subtitle: 'Different environments. Different demands. Infrastructure and custom software shaped around what matters to your business.',
      seeAll: 'View all industry solutions',
      closeModal: 'Close',
    },
    businessImpact: {
      title: 'Engineered for Real Business Impact',
      subtitle: 'Reliable infrastructure, custom digital tools, and seamless rollouts',
      stats: [
        { value: '100+', label: 'Locations supported' },
        { value: '24/7', label: 'Network reliability' },
        { value: '6', label: 'Core service domains' },
        { value: '5-Layer', label: 'Unified tech stack' },
        { value: '0', label: 'Vendor finger-pointing' },
        { value: '100%', label: 'Documented handover' },
      ],
    },
    complianceSection: {
      title: 'Disciplined engineering, rigorous standards, and clear ownership.',
      desc: 'Behind every productive business is technology that works for its people. NTS Network Solutions adheres to international quality, cabling, and security standards to ensure your systems perform reliably from day one.',
      trustTag: 'Quality & Standards You Can Rely On',
      viewPolicy: 'View our Engineering & Quality Standards →',
    },
    cta: {
      title: 'Great things start with a conversation.',
      desc: 'A new website. An app idea. Custom software or a stronger network. Tell us what you have in mind, and let\'s work out the next step.',
      button: 'Discuss Your Project',
    },
    footer: {
      desc: 'Your infrastructure and development partner. Websites, mobile apps, custom software, and connected workplaces — from idea to delivery.',
      companyName: 'NTS Network Solutions',
      unifiedNo: 'Headquarters:',
      vatNo: 'Service Reach:',
      address: 'Mumbai, Maharashtra, India — Serving Enterprises Nationwide',
      rights: '© 2026 NTS Network Solutions. All rights reserved.',
    },
  },
  ar: {
    nav: {
      platforms: 'الحلول',
      products: 'القدرات والخدمات',
      useCases: 'القطاعات',
      compliance: 'المعايير والجودة',
      company: 'الشركة',
      signIn: 'بوابة العملاء ←',
      bookDemo: 'ناقش مشروعك',
      language: 'اللغة',
    },
    hero: {
      tag: 'شريك البنية التحتية والتحول الرقمي',
      title: 'بنية تحتية تبقيك متصلاً. مواقع وتطبيقات وبرمجيات تدفع أعمالك للأمام.',
      subtitle:
        'شريك تقني متكامل من الفكرة وحتى التسليم. شبكات مؤسسية آمنة، تغطية لاسلكية متطورة، بيئات عمل متصلة، وتطبيقات ويب وجوال مخصصة.',
      bookDemo: 'ناقش مشروعك',
      trySandbox: 'استكشف الحلول',
      trustedBy: 'نخدم كبرى المؤسسات في قطاعات البنوك، التصنيع، التجزئة، والرعاية الصحية',
    },
    comparison: {
      title: 'لماذا تختار شريكاً واحداً للبنية التحتية والبرمجيات؟',
      subtitle: 'اكتشف الفرق عندما تعمل شبكاتك وتجهيزاتك الميدانية وبرمجياتك بتناغم كامل منذ اليوم الأول.',
      oldWay: 'الأسلوب التقليدي (موردون متعددون وغير متناسقين)',
      hamsWay: 'ميزة NTS Network المتكاملة',
      rows: [
        {
          old: 'موردون منفصلون للكابلات، وتجهيز الشبكات، وتطوير البرمجيات.',
          hams: 'شريك تقني واحد مسؤول من التمديدات المادية وحتى التطبيقات المخصصة.',
        },
        {
          old: 'إلقاء اللوم بين الأطراف عند حدوث أي خلل في الأداء.',
          hams: 'ملكية ومسؤولية كاملة ومباشرة من بداية الدراسة وحتى التسليم النهائي.',
        },
        {
          old: 'تنفيذ متباين وغياب التوثيق الدقيق بين الفروع المختلفة.',
          hams: 'معيار جودة هندسي موحد سواء كنا ننفذ موقعاً واحداً أو 100 فرع.',
        },
        {
          old: 'ضعف الخبرة الميدانية التطبيقية والاعتماد على التنظير.',
          hams: 'فرق هندسية تمتلك خبرة عملية ميدانية عميقة في مختلف المواقع.',
        },
        {
          old: 'برمجيات جاهزة غير مرنة لا تتوافق مع طبيعة وسير أعمالك.',
          hams: 'برمجيات وتطبيقات مخصصة بالكامل صُممت لتناسب احتياجات منشأتك بدقة.',
        },
      ],
    },
    metrics: {
      tag: 'نطاق أعمالنا وسجل إنجازاتنا',
      title: 'تنفيذ احترافي وموثوق في كافة المواقع',
      items: [
        {
          value: '+100',
          label: 'موقع وفرع تم تجهيزها بعمليات نشر وتحديث تقنية منسقة.',
          detail: 'من تجهيز مكاتب فردية إلى عمليات النشر الشاملة على مستوى الدولة.',
        },
        {
          value: '6',
          title: 'مجالات بنية تحتية رئيسية',
          label: 'الشبكات، شبكات الواي فاي المؤسسية، المراقبة، التمديدات الهيكلية، وأجهزة بيئة العمل.',
        },
        {
          value: '100%',
          title: 'مسؤولية ونقطة تواصل موحدة',
          label: 'فريق عمل متكامل يدير المشروع من الفكرة حتى الاختبار والتوثيق والتسليم.',
        },
        {
          value: '5-طبقات',
          title: 'حزمة تقنية متكاملة وشاملة',
          label: 'توجيه وحماية L1، لاسلكي L2، مراقبة L3، كابلات هيكلية L4، وأجهزة بيئة العمل L5.',
        },
        {
          value: '99.9%',
          title: 'معيار جاهزية وموثوقية عالية',
          label: 'بنية تحتية عالية التوافرية مصممة للبيئات المؤسسية والصناعية الأكثر تطلباً.',
        },
      ],
    },
    testimonials: {
      title: 'آراء عملائنا وشركائنا في NTS',
      quote:
        '“قبل التعاون مع NTS Network Solutions، كانت إدارة مشاريع تقنية المعلومات عبر فروعنا تعني التنسيق الصعب بين موردي الأجهزة، وفنيي الكابلات، وشركات البرمجة. أحدثت NTS فارقاً جذرياً في أسلوب العمل؛ حيث تولت المسؤولية الكاملة عن العمود الفقري لشبكتنا، ونقاط الوصول اللاسلكية، وطوّرت بوابة تشغيل داخلية مخصصة. سُلّم كل موقع في موعده المحدد مع اختبارات وتوثيق هندسي شامل. وجود شريك يفهم البنية المادية والبرمجيات هو مكسب كبير لأي منشأة.”',
      author: 'راجيش شارما',
      role: 'نائب رئيس البنية التحتية والتقنية، مجموعة تجزئة كبرى',
      badge: 'شريك نشر الفروع المتعددة',
      verified: 'عميل مؤسسي موثق',
      bookDemo: 'ناقش مشروعك معنا',
    },
    howItWorks: {
      title: 'من فكرتك الأولى وحتى موقعك التالي',
      subtitle: 'من البنية التحتية المادية إلى البرمجيات المخصصة، يبدأ النجاح بخطة واضحة. نمنح كل مرحلة الهيكلية والتواصل والمسؤولية الكاملة.',
    },
    useCasesSection: {
      title: 'مُصمم لعالمك: القطاعات التي نخدمها',
      subtitle: 'بيئات مختلفة ومتطلبات متنوعة. بنية تحتية وبرمجيات مخصصة تم تشكيلها لتلائم أولويات عملك.',
      seeAll: 'استعراض كافة حلول القطاعات',
      closeModal: 'إغلاق',
    },
    businessImpact: {
      title: 'أثر ملموس مصمم لنمو أعمالك',
      subtitle: 'بنية تحتية موثوقة، وأدوات رقمية مخصصة، وعمليات نشر سلسة',
      stats: [
        { value: '+100', label: 'موقع وفرع مدعوم' },
        { value: '24/7', label: 'موثوقية واتصال دائم' },
        { value: '6', label: 'مجالات خدمات رئيسية' },
        { value: '5-طبقات', label: 'حزمة تقنية متكاملة' },
        { value: '0', label: 'تضارب بين الموردين' },
        { value: '100%', label: 'تسليم موثق ومختبر' },
      ],
    },
    complianceSection: {
      title: 'انضباط هندسي، ومعايير جودة صارمة، ومسؤولية واضحة.',
      desc: 'وراء كل منشأة ناجحة تقنية تخدم موظفيها بكفاءة. تلتزم NTS Network Solutions بالمعايير العالمية للتمديدات الهيكلية وأمن الشبكات وإدارة الجودة ISO لضمان أعلى أداء.',
      trustTag: 'معايير وجودة يمكنك الاعتماد عليها',
      viewPolicy: 'استعراض معايير الجودة والهندسة ←',
    },
    cta: {
      title: 'تبدأ الإنجازات الكبرى بمحادثة مثمرة.',
      desc: 'موقع إلكتروني جديد. فكرة تطبيق. برمجيات مخصصة أو شبكة أعمال أكثر قوة. أخبرنا عما تفكر به، ولنخطط للخطوة التالية معاً.',
      button: 'ناقش مشروعك الآن',
    },
    footer: {
      desc: 'شريكك المتكامل في البنية التحتية والبرمجيات. مواقع إلكترونية، وتطبيقات جوال، وأنظمة مخصصة، وبيئات عمل متصلة — من الفكرة وحتى التسليم.',
      companyName: 'NTS Network Solutions',
      unifiedNo: 'المقر الرئيسي:',
      vatNo: 'نطاق التغطية:',
      address: 'مومباي، ماهاراشترا، الهند — نخدم كبرى المؤسسات على مستوى الدولة',
      rights: '© 2026 NTS Network Solutions. جميع الحقوق محفوظة.',
    },
  },
};

export const productsData: ProductTab[] = [
  {
    id: 'network-infra',
    label: {
      en: 'Network Infrastructure',
      ar: 'البنية التحتية للشبكات',
    },
    title: {
      en: 'A reliable, secure backbone for your business',
      ar: 'عمود فقري موثوق وآمن يبقي منشأتك متصلة',
    },
    desc: {
      en: 'Secure, carefully configured networks that keep your people connected. From enterprise routers and core switches to next-generation firewalls, we engineer network topologies for uptime, security, and sustained performance.',
      ar: 'شبكات آمنة ومعدة بعناية تحافظ على اتصال فرق عملك باستمرار. من أجهزة التوجيه والمحولات المتقدمة إلى جدران الحماية الحديثة، نصمم الشبكات للتوافرية والأمان والأداء العالي.',
    },
    benefits: [
      {
        title: {
          en: 'Enterprise Routing & High-Speed Switching',
          ar: 'توجيه متقدم ومحولات شبكية عالية السرعة',
        },
        desc: {
          en: 'Optimized network architectures with managed Layer 2/3 switches ensuring seamless traffic distribution and zero downtime.',
          ar: 'تصميم شبكي متطور بمحولات مدارة تضمن توزيع حركة البيانات بسلاسة ومنع التوقفات.',
        },
      },
      {
        title: {
          en: 'Next-Gen Firewalls & Perimeter Security',
          ar: 'جدران حماية حديثة وتأمين محيط الشبكة',
        },
        desc: {
          en: 'Granular access controls, secure site-to-site VPNs, and intrusion prevention to safeguard critical enterprise data.',
          ar: 'تحكم دقيق في الوصول وشبكات افتراضية مشفرة VPN لحماية البيانات الحساسة للمنشأة.',
        },
      },
      {
        title: {
          en: 'Bandwidth Optimization & Diagnostics',
          ar: 'تحسين سعة النطاق ومراقبة مستمرة',
        },
        desc: {
          en: 'Proactive monitoring, Quality of Service (QoS) configurations, and bottleneck elimination for mission-critical applications.',
          ar: 'مراقبة استباقية وضبط أولويات حزم البيانات QoS لتفادي أي اختناق في التطبيقات الحيوية.',
        },
      },
    ],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDRvxH3OvLb0jhWDMDCZ0UQDqp36rvSMx27VLlyyVY2BaVkrv05ma5i6RkAQ6iuBQjHLT86_Pfmv7W0KkkR7wijSLApHpy-e77lsjCQN1iPb_RDgavmszu6ONnLbmioxeMpt1ngB3OSjfq6AZF3kQ0gTk2MGoIG9Rsiaz87a3PND_upZ8T0osn-iE9ybmCjxk18Kklpo-7EN6-y03SO4NUoNZyKH3tF1o24SQ4Dbd2jMQ2qKKHtKRc',
    tag: {
      en: 'L1 Core Network Backbone & Security',
      ar: 'العمود الفقري للشبكة وحماية المستوى الأول',
    },
  },
  {
    id: 'enterprise-wifi',
    label: {
      en: 'Enterprise Wireless & Tech',
      ar: 'الشبكات اللاسلكية وتقنية بيئة العمل',
    },
    title: {
      en: 'Seamless wireless coverage across your workplace',
      ar: 'تغطية لاسلكية سلسة وشاملة لبيئة العمل',
    },
    desc: {
      en: 'Wireless networks designed around the way your teams move. High-density access points and centralized WLAN controllers engineered for uninterrupted connectivity across offices, campuses, and warehouses.',
      ar: 'شبكات لاسلكية مصممة وفق أسلوب حركة فرق عملك. نقاط وصول عالية الكثافة ووحدات تحكم مركزية لضمان اتصال متواصل في المكاتب والمجمعات والمستودعات.',
    },
    benefits: [
      {
        title: {
          en: 'High-Density Access Points & WLAN Controllers',
          ar: 'نقاط وصول عالية الكثافة ووحدات تحكم مركزية',
        },
        desc: {
          en: 'Engineered for enterprise density, delivering seamless roaming without dropped calls or interrupted connections.',
          ar: 'مصممة للتعامل مع كثافة الأجهزة العالية والتنقل السلس دون انقطاع الاتصال.',
        },
      },
      {
        title: {
          en: 'Workplace Technology & Device Rollouts',
          ar: 'تجهيز أجهزة بيئة العمل ومحطات الموظفين',
        },
        desc: {
          en: 'Desktops, laptops, and thin clients provisioned, imaged, and connected — ready for your staff from day one.',
          ar: 'أجهزة مكتبية ومحمولة وأجهزة طرفية مهيأة ومتصلة وجاهزة لبدء العمل من اليوم الأول.',
        },
      },
      {
        title: {
          en: 'RF Signal Surveys & Zero-Dead-Zone Planning',
          ar: 'مسح الترددات اللاسلكية والقضاء على النقاط الميتة',
        },
        desc: {
          en: 'Precision radio frequency mapping to ensure consistent signal strength across multi-story buildings and complex sites.',
          ar: 'تخطيط هندسي دقيق للترددات لضمان قوة الإشارة في كافة الطوابق والمساحات المتنوعة.',
        },
      },
    ],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuALWeLCRZMVUaqBK-QodunnS7y_HVkQokQ_yYWvGsVgbc-J47063Dy6uZWk5xGRLVKqHksQgoVhSnPGRStWpayFdrGA0y8alAaPo0I7q0DCKsI1zZvmfUqdy_IOxnCJ1xacKquoZYQOaXKIiBk2rekWQsN6qFyuBXGUowbJ9SjzVryFN1g-pc7ORmtySB9VBX43m5cbZxnITPOyHJlOXUZ6QR9PO1YiI1xwckJalrmeNGjOVGuIKus',
    tag: {
      en: 'L2 Wireless & L5 Workplace Technology',
      ar: 'حلول اللاسلكي L2 وتجهيزات العمل L5',
    },
  },
  {
    id: 'software-dev',
    label: {
      en: 'Web, Apps & Custom Software',
      ar: 'المواقع والتطبيقات والبرمجيات',
    },
    title: {
      en: 'Digital experiences that move your business forward',
      ar: 'حلول رقمية متطورة تدفع أعمالك للأمام',
    },
    desc: {
      en: 'A website that makes an impression. An app people love to use. Software that solves a real operational problem. We bring practical engineering and thoughtful UI/UX to every digital product.',
      ar: 'موقع يترك انطباعاً مبهراً، وتطبيق يفضله المستخدمون، وبرمجيات تحل تحدياتك التشغيلية. نجمع بين الهندسة الدقيقة وتجربة المستخدم المميزة في كل منتج رقمي.',
    },
    benefits: [
      {
        title: {
          en: 'Custom Web Applications & UI/UX Design',
          ar: 'تطبيقات ويب مخصصة وتصميم واجهات تفاعلية',
        },
        desc: {
          en: 'Modern, responsive business websites and performant web apps built around user journeys and real operational workflows.',
          ar: 'مواقع مؤسسية سريعة ومتجاوبة وتطبيقات ويب مصممة حول رحلة العميل وأهداف أعمالك.',
        },
      },
      {
        title: {
          en: 'iOS, Android & Cross-Platform Apps',
          ar: 'تطبيقات الجوال لنظامي iOS وأندرويد',
        },
        desc: {
          en: 'Intuitive mobile applications that connect your field workforce, customers, and services seamlessly.',
          ar: 'تطبيقات جوال بديهية تربط فرقك الميدانية وعملاءك وخدماتك بسهولة فائقة.',
        },
      },
      {
        title: {
          en: 'Custom Software, APIs & Automation',
          ar: 'برمجيات مخصصة وتكامل واجهات APIs والأتمتة',
        },
        desc: {
          en: 'Tailored business tools, ERP/CRM integrations, and workflow automation that eliminate manual steps and connect data.',
          ar: 'أدوات إدارية مخصصة وربط شامل مع الأنظمة الحالية وأتمتة المهام الروتينية بكفاءة.',
        },
      },
    ],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAgJz_PrJbJTX2HeGqDyyA97tEAXVCkg-k3Qm3KlfOX1M3u30LqqYGfyLfh0aB7gsAiK11gIwk-Ylc3tMzKiv2yaTs9hSaChoEVHEDFJjzW_UkFWlXjwSCgSap6h9BFYuCtFcFImR2WujShfv-K9PkjBtz5Tztlcm-5HhzoNCF3oDY2LPzLkxGpFFt2ayh4FpRNLlqJIOvaMU9T9JgOJAlJZZj7pXpughM4k9nJ0Piiw4COzucE0h4',
    tag: {
      en: 'Modern Digital Engineering & Delivery',
      ar: 'هندسة رقمية حديثة وتسليم متكامل',
    },
  },
  {
    id: 'surveillance-rollouts',
    label: {
      en: 'CCTV & Multi-Site Rollouts',
      ar: 'المراقبة ونشر الفروع المتعددة',
    },
    title: {
      en: 'Visibility, physical security, and multi-location scale',
      ar: 'رؤية شاملة وأمان متصل وتوسع عبر الفروع',
    },
    desc: {
      en: 'Connected surveillance systems for full facility visibility, paired with structured cabling and coordinated multi-site IT deployments that keep your branches consistent nationwide.',
      ar: 'أنظمة مراقبة متصلة لرؤية واضحة لمنشآتك، مقترنة بتمديدات كابلات هيكلية ونشر تقني منسق يضمن جودة موحدة لكافة فروعك.',
    },
    benefits: [
      {
        title: {
          en: 'IP Surveillance & Centralized NVR Storage',
          ar: 'كاميرات مراقبة شبكية وتخزين NVR مركزي',
        },
        desc: {
          en: 'High-definition cameras, smart motion detection, and secure remote viewing across all your offices and warehouses.',
          ar: 'كاميرات عالية الدقة مع كشف الحركة وإمكانية المتابعة الآمنة عن بعد لكافة المنشآت.',
        },
      },
      {
        title: {
          en: 'Structured Cabling & 42U Rack Integration',
          ar: 'تمديدات كابلات هيكلية ودمج رفوف الخوادم 42U',
        },
        desc: {
          en: 'Tested Cat6/Cat6A and fiber optic backbones, organized patch panels, and clean cable management built to last.',
          ar: 'كابلات Cat6/Cat6A وألياف بصرية مختبرة مع تنظيم لوحات التوزيع ورفوف الخوادم بأعلى المعايير.',
        },
      },
      {
        title: {
          en: 'Multi-Location Rollout Coordination',
          ar: 'إدارة وتنسيق نشر الفروع المتعددة',
        },
        desc: {
          en: 'Coordinated execution maintaining the exact same technical standard whether opening one site or 100+ branches.',
          ar: 'تنفيذ منضبط يحافظ على نفس المعايير الهندسية الدقيقة في جميع المواقع والفروع.',
        },
      },
    ],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAJ4ceRpb4wqaVmgT3miKZyYIjGhyz-JiayDxxSOEJXf6TDs7Y5uYFHL0p3dV3-exPJT7Ht7fsm0MSDHgpENhd1G9jU18YkHekwVA9OrI0O-jBURKLS5LNNNbRHwoxBpE6Ye1axcWTQMt90Bs4QnXlVMBRpXiTHxNMUX-Q-LrhMi39mTL95nBoWyEX5R6al3mHdoNMhw5jdbS9_aP-16hk6T5dC_7kYksOa7gt22ndLL47ZL8OWY0g',
    tag: {
      en: 'L3 Surveillance, L4 Cabling & Multi-Site Deployments',
      ar: 'مراقبة L3، كابلات L4، وتوسع متعدد المواقع',
    },
  },
];

export const workflowSteps: WorkflowStep[] = [
  {
    step: 'Step 01',
    title: {
      en: 'Understand & Discover',
      ar: 'الفهم والاستكشاف',
    },
    desc: {
      en: 'Your business, your people, your priorities. We start by surveying your environment, understanding goals, and defining what success looks like.',
      ar: 'أعمالك، فريقك، وأولوياتك. نبدأ بمعاينة البيئة الحالية وفهم الأهداف وتحديد متطلبات النجاح بدقة.',
    },
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDU1xhfBubLIu_T2Hz0d8viMwIHWHVN8VNHn-bm6cx2kh5rc9bPcG_3fMr8lbFRckT3HDnyP-FDTcG1BpDTN8LEw7zjtx81SBa92r-j1zCDdg_UW2dkQdw96hY1b6bYf4507gYkcMWox7-t7-bYw6Prty6iq-xBu-5yfh9ep7B3qvhXzuKc6guA2VBOYm-86L8NtRmOgI1aug9UfU7IDRXrbERfxbvEFaNm-XVdWKZ98p1iSLKSTkg',
    alt: 'NTS Project Scoping & Assessment',
  },
  {
    step: 'Step 02',
    title: {
      en: 'Plan & Scope',
      ar: 'التخطيط وتحديد النطاق',
    },
    desc: {
      en: 'The right technical solution, a clearly defined scope of work, and a coordinated schedule so everyone knows what comes next.',
      ar: 'اختيار الحل الهندسي الأنسب، مع تحديد نطاق عمل دقيق وجدول زمني منسق يوضح كل خطوة تالية.',
    },
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAa54tqHlbrw1EF1F1vAWy72_FAyEgduC1SVcfX5d3920qvJTRDBfv1Mqw4f9VgywUo3fNvbC125fhIk3sd_J8t3xZ5ME9SSwqABmyaqOA13YT9KEhspHNL8-cKTv1B8jAuc2nqArcqDh8gkBU98xwKClttK3p6zCXYVAAgoa80I-Ni39IPxYXffnVwFKkhHNt5gChyKBUTNb9VRIskUfrTsOEzoS-4d04ENOXvr41r6AU4iuKaFWw',
    alt: 'Technical Architecture & Schedule Planning',
  },
  {
    step: 'Step 03',
    title: {
      en: 'Design & Architecture',
      ar: 'التصميم والهندسة المعمارية',
    },
    desc: {
      en: 'Network topology schematics, cabling layouts, and software wireframes designed for high performance, ease of use, and future growth.',
      ar: 'مخططات طوبولوجيا الشبكة وتوزيع الكابلات ونماذج البرمجيات المصممة للأداء العالي وسهولة التوسع المستقبلي.',
    },
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBAfTRjUJ8W7EXRkdKffoZyutC_sQgxbDZCeylb1w4aIYIBQrM3JE0TWvCFGtddwHUB9FmyNIQ0N1dy5z3hRdjf8wjq2MNV_xl83rYN3mmsl9Dt7OuHWZmWFsyaGN3Vd2lOq5INcqyGBaoKS4aHO2jOyXhNRW-o1zRuRTh2EyUcvb2qw48UmQqphbQq55uouV83RhfZ89wCPsYbZMhq6uLMcsxzHHFMgea5SZgkf9aAzD34AKcW28g',
    alt: 'Network Schematics and Application Architecture',
  },
  {
    step: 'Step 04',
    title: {
      en: 'Build & Deploy',
      ar: 'البناء والتنفيذ الميداني',
    },
    desc: {
      en: 'We bring the plan to life — from software coding and integrations to on-site rack mounting, cabling, switch configurations, and device setup.',
      ar: 'نحول الخطة إلى واقع — من تطوير الأكواد وربط الأنظمة إلى التمديدات الميدانية وتركيب الأجهزة وضبط الشبكات.',
    },
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuALWeLCRZMVUaqBK-QodunnS7y_HVkQokQ_yYWvGsVgbc-J47063Dy6uZWk5xGRLVKqHksQgoVhSnPGRStWpayFdrGA0y8alAaPo0I7q0DCKsI1zZvmfUqdy_IOxnCJ1xacKquoZYQOaXKIiBk2rekWQsN6qFyuBXGUowbJ9SjzVryFN1g-pc7ORmtySB9VBX43m5cbZxnITPOyHJlOXUZ6QR9PO1YiI1xwckJalrmeNGjOVGuIKus',
    alt: 'On-site Implementation and Software Deployment',
  },
  {
    step: 'Step 05',
    title: {
      en: 'Testing & Handover',
      ar: 'الاختبار والتسليم الموثق',
    },
    desc: {
      en: 'Tested, certified, and fully documented. Cable test reports, network credentials, and system walkthroughs so your teams can get straight to work.',
      ar: 'فحص واختبار وتوثيق شامل. تقارير فحص الكابلات وبيانات الدخول وتدريب فرق عملك للبدء مباشرة براحة بال.',
    },
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAJ4ceRpb4wqaVmgT3miKZyYIjGhyz-JiayDxxSOEJXf6TDs7Y5uYFHL0p3dV3-exPJT7Ht7fsm0MSDHgpENhd1G9jU18YkHekwVA9OrI0O-jBURKLS5LNNNbRHwoxBpE6Ye1axcWTQMt90Bs4QnXlVMBRpXiTHxNMUX-Q-LrhMi39mTL95nBoWyEX5R6al3mHdoNMhw5jdbS9_aP-16hk6T5dC_7kYksOa7gt22ndLL47ZL8OWY0g',
    alt: 'Testing, Quality Assurance and Handover',
  },
  {
    step: 'Step 06',
    title: {
      en: 'Scale & Nationwide Rollout',
      ar: 'التوسع ونشر الفروع الشامل',
    },
    desc: {
      en: 'Consistent quality across branches. Coordinated multi-location rollouts across India with ongoing technical support and maintenance.',
      ar: 'جودة هندسية متسقة في كل الفروع. عمليات نشر وتوسع متزامنة في كافة المدن مع دعم فني وصيانة مستمرة.',
    },
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAgJz_PrJbJTX2HeGqDyyA97tEAXVCkg-k3Qm3KlfOX1M3u30LqqYGfyLfh0aB7gsAiK11gIwk-Ylc3tMzKiv2yaTs9hSaChoEVHEDFJjzW_UkFWlXjwSCgSap6h9BFYuCtFcFImR2WujShfv-K9PkjBtz5Tztlcm-5HhzoNCF3oDY2LPzLkxGpFFt2ayh4FpRNLlqJIOvaMU9T9JgOJAlJZZj7pXpughM4k9nJ0Piiw4COzucE0h4',
    alt: 'Multi-site Enterprise Rollouts Across India',
  },
];

export const useCasesData: UseCaseItem[] = [
  {
    id: 'banking',
    icon: '🏦',
    category: 'finance',
    title: {
      en: 'Banking & Financial Services',
      ar: 'الخدمات المصرفية والمالية',
    },
    desc: {
      en: 'High-uptime branch networks, dedicated fiber links, compliant CCTV surveillance, and strict perimeter firewalls.',
      ar: 'شبكات فروع عالية الجاهزية، وربط ألياف بصرية، ومراقبة أمنية متوافقة، وجدران حماية متطورة.',
    },
    samplePrompt: {
      en: '"We need to deploy a redundant network backbone with CCTV compliance for 12 new bank branches in western India."',
      ar: '"نحتاج إلى نشر شبكة أساسية مزدوجة مع أنظمة مراقبة متوافقة لـ 12 فرعاً مصرفياً جديداً."',
    },
    channels: ['Routers & Firewalls', 'CCTV & NVR', 'Fiber Backbone'],
    impactMetric: {
      en: '99.99% critical branch uptime',
      ar: '99.99% جاهزية للفروع الحيوية',
    },
  },
  {
    id: 'manufacturing',
    icon: '🏭',
    category: 'operations',
    title: {
      en: 'Manufacturing & Industrial Plants',
      ar: 'المصانع والمجمعات الصناعية',
    },
    desc: {
      en: 'Ruggedized plant connectivity, Cat6A structured cabling, industrial WiFi, and full facility monitoring.',
      ar: 'اتصال شبكي متين للبيئات الصناعية، وكابلات هيكلية Cat6A، وواي فاي صناعي، ومراقبة شاملة للمنشآت.',
    },
    samplePrompt: {
      en: '"Can you audit and re-cable our 45,000 sq ft manufacturing plant with structured fiber and complete wireless coverage?"',
      ar: '"هل يمكنكم فحص وإعادة تمديد شبكة كابلات ألياف بصرية وتغطية لاسلكية لمصنع بمساحة 45 ألف قدم؟"',
    },
    channels: ['Cat6A Structured Cabling', 'Industrial WiFi', 'CCTV Surveillance'],
    impactMetric: {
      en: '100% plant floor wireless coverage',
      ar: 'تغطية لاسلكية 100% لكامل أرضية المصنع',
    },
  },
  {
    id: 'corporate',
    icon: '🏢',
    category: 'support',
    title: {
      en: 'Corporate Offices & Connected Workplaces',
      ar: 'المكاتب المؤسسية وبيئات العمل الذكية',
    },
    desc: {
      en: 'Turnkey workplace setup, high-density enterprise WiFi, desktop/laptop provisioning, and server rack integration.',
      ar: 'تجهيز مكاتب متكامل، وواي فاي مؤسسي عالي الكثافة، وتجهيز أجهزة الموظفين، ودمج رفوف الخوادم.',
    },
    samplePrompt: {
      en: '"We are setting up a 200-seat corporate office in Mumbai. We need structured cabling, WiFi, access control, and laptop staging."',
      ar: '"نجهز مقراً مؤسسياً لـ 200 موظف بمومباي، ونحتاج كابلات هيكلية وواي فاي وأجهزة عمل مهيأة."',
    },
    channels: ['Enterprise WiFi', 'Desktop Staging', 'Server Racks'],
    impactMetric: {
      en: 'Day-one readiness for 100% of staff',
      ar: 'جاهزية كاملة للموظفين من اليوم الأول',
    },
  },
  {
    id: 'retail',
    icon: '🛍️',
    category: 'sales',
    title: {
      en: 'Retail Chains & Multi-Store Rollouts',
      ar: 'سلاسل التجزئة والمتاجر المتعددة',
    },
    desc: {
      en: 'Reliable POS connectivity, guest WiFi, in-store security cameras, and synchronized nationwide store rollouts.',
      ar: 'اتصال موثوق لنقاط البيع POS، وشبكة واي فاي للزوار، وكاميرات مراقبة، ونشر متزامن في المتاجر.',
    },
    samplePrompt: {
      en: '"We need consistent IT and CCTV deployment across 35 retail stores rolling out over the next 90 days."',
      ar: '"نحتاج تنفيذاً موحداً للبنية التحتية والمراقبة عبر 35 متجر تجزئة خلال 90 يوماً."',
    },
    channels: ['POS Networking', 'Store WiFi', 'Multi-Store Deployment'],
    impactMetric: {
      en: 'Zero opening delays across 35 sites',
      ar: 'صفر تأخير في افتتاح المواقع الـ 35',
    },
  },
  {
    id: 'healthcare',
    icon: '🏥',
    category: 'support',
    title: {
      en: 'Healthcare & Hospital Campuses',
      ar: 'المستشفيات والمجمعات الصحية',
    },
    desc: {
      en: 'Continuous medical device wireless roaming, isolated guest networks, and secure digital records infrastructure.',
      ar: 'اتصال لاسلكي متواصل للأجهزة الطبية، وشبكات معزولة للمراجعين، وبنية تحتية آمنة للسجلات الطبية.',
    },
    samplePrompt: {
      en: '"We require medical-grade wireless access across 4 floors with VLAN segmentation for diagnostic equipment."',
      ar: '"نطلب شبكة لاسلكية طبية عبر 4 طوابق مع عزل كامل للشبكات الخاصة بأجهزة التشخيص."',
    },
    channels: ['Medical WiFi', 'VLAN Segmentation', 'IP Security'],
    impactMetric: {
      en: 'Zero packet loss for patient monitors',
      ar: 'انعدام فقد البيانات للأجهزة الطبية',
    },
  },
  {
    id: 'logistics',
    icon: '📦',
    category: 'operations',
    title: {
      en: 'Logistics, Warehousing & Fulfillment',
      ar: 'الخدمات اللوجستية والمستودعات',
    },
    desc: {
      en: 'High-bay warehouse WiFi engineered for barcode scanners, automated dispatch tablets, and perimeter security.',
      ar: 'واي فاي للأسقف العالية مخصص لأجهزة مسح الباركود وأجهزة الشحن اللوجستي وتأمين المنشأة.',
    },
    samplePrompt: {
      en: '"Our warehouse barcode scanners lose connection in aisle 14. We need an RF audit and high-bay AP installation."',
      ar: '"أجهزة قراءة الباركود تفقد الاتصال في الممرات الخلفية للمستودع، ونحتاج مسح ترددات وتركيب نقاط وصول."',
    },
    channels: ['High-Bay WiFi', 'Handheld Scanner Optimization', 'Perimeter CCTV'],
    impactMetric: {
      en: '99.8% continuous scanner connection',
      ar: 'اتصال دائم بنسبة 99.8% لأجهزة الفحص',
    },
  },
  {
    id: 'education',
    icon: '🎓',
    category: 'support',
    title: {
      en: 'Education & University Campuses',
      ar: 'الجامعات والمؤسسات التعليمية',
    },
    desc: {
      en: 'High-capacity student WiFi networks, campus-wide fiber backbone, smart lecture hall connectivity, and web portals.',
      ar: 'شبكات واي فاي عالية الاستيعاب للطلاب، وألياف بصرية، وقاعات محاضرات ذكية وبوابات إلكترونية.',
    },
    samplePrompt: {
      en: '"We need to support 3,000 concurrent students across our campus library, auditoriums, and academic wings."',
      ar: '"نحتاج لدعم 3000 طالب متصلين في وقت واحد عبر مكتبة الحرم الجامعي والقاعات والمباني الأكاديمية."',
    },
    channels: ['Campus WiFi', 'Bandwidth Management', 'Student Portals'],
    impactMetric: {
      en: 'Supports 3,000+ concurrent connections',
      ar: 'دعم أكثر من 3000 اتصال متزامن',
    },
  },
  {
    id: 'custom-software',
    icon: '💻',
    category: 'sales',
    title: {
      en: 'Web, Mobile Apps & Custom Software',
      ar: 'تطبيقات الويب والجوال والبرمجيات',
    },
    desc: {
      en: 'Custom business web platforms, iOS/Android mobile apps, e-commerce storefronts, and internal workflow tools.',
      ar: 'منصات ويب مؤسسية مخصصة، وتطبيقات جوال، ومتاجر إلكترونية، وأنظمة أتمتة لسير العمل الداخلي.',
    },
    samplePrompt: {
      en: '"We want to build a custom customer portal and field-service mobile app integrated with our inventory database."',
      ar: '"نريد بناء بوابة عملاء وتطبيق جوال للفنيين الميدانيين مرتبط بقاعدة بيانات المخزون لدينا."',
    },
    channels: ['Custom Web Apps', 'iOS & Android', 'API Integrations'],
    impactMetric: {
      en: 'From concept to production delivery',
      ar: 'تسليم متكامل من الفكرة وحتى الإطلاق',
    },
  },
];

export const complianceBadges: ComplianceItem[] = [
  {
    code: 'ISO 9001',
    standard: 'ISO 9001:2015 CERTIFIED',
    title: {
      en: 'Quality Management in Delivery',
      ar: 'إدارة الجودة في التنفيذ والتسليم',
    },
    desc: {
      en: 'Certified quality processes ensuring structured execution, documented milestone reviews, and consistent deployment standards across every site.',
      ar: 'إجراءات إدارة جودة معتمدة تضمن تنفيذاً منهجياً ومراجعات مرحلية موثقة ومعايير تسليم ثابتة في كل موقع.',
    },
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-100',
  },
  {
    code: 'ISO 27001',
    standard: 'ISO/IEC 27001 COMPLIANT',
    title: {
      en: 'Information Security & Data Protection',
      ar: 'أمن المعلومات وحماية الشبكات',
    },
    desc: {
      en: 'Rigorous security practices governing network configurations, firewall policies, access control lists, and client confidentiality.',
      ar: 'ممارسات أمنية صارمة تضبط إعدادات الشبكة وسياسات جدران الحماية وقوائم التحكم في الوصول وسرية بيانات العملاء.',
    },
    badgeColor: 'bg-slate-50 text-slate-800 border-slate-200',
  },
  {
    code: 'TIA-568',
    standard: 'STRUCTURED CABLING STANDARDS',
    title: {
      en: 'Certified Cat6 / Cat6A & Fiber Cabling',
      ar: 'معايير الكابلات الهيكلية والألياف البصرية',
    },
    desc: {
      en: 'All structured cabling and optical fiber runs are Fluke-tested and certified to meet international transmission and throughput benchmarks.',
      ar: 'جميع كابلات الشبكة والألياف البصرية مختبرة ومعتمدة بأحدث أجهزة الفحص لتلائم المعايير الهندسية الدولية.',
    },
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-100',
  },
  {
    code: '99.9% SLA',
    standard: 'HIGH AVAILABILITY STANDARDS',
    title: {
      en: 'Enterprise Uptime & Engineering Discipline',
      ar: 'توافرية عالية وانضباط هندسي مؤسسي',
    },
    desc: {
      en: 'Architectures engineered with hardware redundancy, failover routing, and clean power integration for mission-critical continuity.',
      ar: 'بنية تحتية مصممة بازدواجية عتادية وتوجيه احتياطي وتغذية طاقة آمنة لضمان استمرارية الأعمال.',
    },
    badgeColor: 'bg-slate-50 text-slate-800 border-slate-200',
  },
  {
    code: 'PAN-INDIA',
    standard: 'NATIONWIDE ROLLOUT CAPABILITY',
    title: {
      en: 'Coordinated Multi-City Execution',
      ar: 'قدرة انتشار وتنفيذ على مستوى الدولة',
    },
    desc: {
      en: 'Centralized project management with on-the-ground technical teams capable of simultaneous multi-branch deployments across India.',
      ar: 'إدارة مشاريع مركزية مع فرق فنية ميدانية قادرة على تنفيذ متزامن في مختلف المدن والفروع.',
    },
    badgeColor: 'bg-slate-50 text-slate-800 border-slate-200',
  },
  {
    code: 'HANDOVER',
    standard: 'TURNKEY DOCUMENTATION',
    title: {
      en: 'Complete Schematics & Audit Reports',
      ar: 'مخططات كاملة وتقارير تسليم مفصلة',
    },
    desc: {
      en: 'Every project concludes with labeled patch diagrams, port maps, test certificates, and full administrative handover to your team.',
      ar: 'يُختتم كل مشروع بمخططات تفصيلية للمنافذ وشبكات الربط وشهادات الفحص وتسليم إداري كامل لفريقكم.',
    },
    badgeColor: 'bg-slate-50 text-slate-800 border-slate-200',
  },
];
