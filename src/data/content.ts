import {
  ServiceItem,
  CaseStudy,
  ProjectItem,
  ProcessStep,
  FAQItem,
  WhatWeBuildCategory,
  WorkflowExample
} from '../types';

export const HERO_DATA = {
  eyebrow: "28 LABS",
  headline: "Software, apps, and AI for ambitious businesses.",
  supportingText: "We design and ship the digital products your business runs on — websites, mobile apps, custom software, and AI automation.",
  primaryCta: "Start a project",
  secondaryCta: "Explore services"
};

export const SERVICES_SECTION_INTRO = {
  eyebrow: "WHAT WE BUILD",
  heading: "Technology that works for your business.",
  supportingText: "From a first website to a complete operating system, we build practical products around the way you work."
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "web-development",
    serviceNumber: "01",
    title: "Web Development",
    headline: "A website that turns visitors into customers.",
    category: "websites",
    shortDesc: "Modern, fast websites that build credibility and convert traffic into enquiries, bookings, and sales.",
    fullDesc: "We build modern, fast websites that build credibility and convert traffic into enquiries, bookings, and sales. Every site is designed around your brand and built to deliver clear results.",
    primaryOutcome: "Get your business online.",
    iconName: "Layout",
    deliverables: [
      "Business Websites",
      "Online Stores",
      "Booking Systems",
      "Customer Portals",
      "Landing Pages"
    ],
    ctaLabel: "Start a Project"
  },
  {
    id: "mobile-development",
    serviceNumber: "02",
    title: "Mobile App Development",
    headline: "Put your business in your customers' hands.",
    category: "web-mobile",
    shortDesc: "Mobile apps that make it easy for customers to buy, book, and interact with your business on iOS and Android.",
    fullDesc: "We create mobile apps that make it easier for your customers to buy, book, communicate and interact with your business. Built for reliability, speed, and smooth interaction on iOS and Android.",
    primaryOutcome: "Create better customer experiences.",
    iconName: "Smartphone",
    deliverables: [
      "Customer Apps",
      "Booking Apps",
      "Marketplace Apps",
      "Business Apps",
      "Mobile Services"
    ],
    ctaLabel: "Start a Project"
  },
  {
    id: "ai-automation",
    serviceNumber: "03",
    title: "AI Automation",
    headline: "Let AI handle the repetitive work.",
    category: "ai-engineering",
    shortDesc: "Automate customer support, document processing, and routine workflows so your team can focus on what matters.",
    fullDesc: "We use AI to automate everyday business tasks so your team can spend more time on the work that actually matters. Automate customer support, document processing, and routine workflows effortlessly.",
    primaryOutcome: "Automate the work that slows you down.",
    iconName: "Sparkles",
    deliverables: [
      "Customer Support",
      "Document Processing",
      "Business Assistants",
      "Workflow Automation",
      "Reports & Summaries"
    ],
    ctaLabel: "Start a Project"
  },
  {
    id: "custom-software",
    serviceNumber: "04",
    title: "Custom Software",
    headline: "Software built around your business.",
    category: "rearchitecture",
    shortDesc: "When off-the-shelf tools don't fit, we build software around your processes, customers, and goals.",
    fullDesc: "When off-the-shelf tools don't fit the way you work, we build software around your processes, customers and goals. Unify your operations, data, and workflows into one dependable system.",
    primaryOutcome: "Build the system your business actually needs.",
    iconName: "Layers",
    deliverables: [
      "Business Management Systems",
      "Dashboards",
      "Inventory Systems",
      "Customer Management",
      "Internal Tools"
    ],
    ctaLabel: "Start a Project"
  }
];

export const WHAT_WE_BUILD_DATA: WhatWeBuildCategory[] = [
  {
    id: "businesses",
    title: "FOR BUSINESSES",
    tagline: "Essential digital tools to grow customer relationships and sales.",
    items: [
      "Websites",
      "Online stores",
      "Booking systems",
      "Customer portals",
      "Business dashboards"
    ]
  },
  {
    id: "startups",
    title: "FOR STARTUPS",
    tagline: "Fast, dependable product development to validate and launch.",
    items: [
      "MVPs",
      "Mobile apps",
      "SaaS products",
      "Web applications"
    ]
  },
  {
    id: "ai",
    title: "WITH AI",
    tagline: "Practical automation to eliminate routine manual work.",
    items: [
      "Customer support",
      "Business assistants",
      "Document automation",
      "Workflow automation"
    ]
  }
];

export const HOW_IT_WORKS_STEPS: ProcessStep[] = [
  {
    stepNumber: "01",
    title: "Tell us your idea.",
    subtitle: "Understanding your goals",
    description: "We listen to what your business wants to accomplish, understand your users, and define a clear plan."
  },
  {
    stepNumber: "02",
    title: "We design the solution.",
    subtitle: "Creating the experience",
    description: "We map out the user experience, shape the visual interface, and confirm every key feature before building."
  },
  {
    stepNumber: "03",
    title: "We build and refine it.",
    subtitle: "Focused development",
    description: "We develop the software step by step, sharing progress updates so you see your product coming to life."
  },
  {
    stepNumber: "04",
    title: "You launch and grow.",
    subtitle: "Deployment & ongoing care",
    description: "We launch your product, ensure everything runs smoothly, and remain available for support and improvements."
  }
];

export const SELECTED_PROJECTS: ProjectItem[] = [
  // 4 Featured Projects
  {
    id: "serena-heights",
    title: "Serena Heights",
    category: "Website",
    classification: "Website",
    url: "https://www.serenaheights.com/",
    summary: "Luxury residential development website showcasing 2- and 3-bedroom residences and penthouses in Kigo, Uganda.",
    whatItIs: "A luxury residential real estate development overlooking Lake Victoria in Kigo, Uganda.",
    whatBuilt: "Responsive property website with development overview, visual gallery, and direct inquiry channels.",
    visualType: "serena",
    imageSrc: "/assets/projects/serena_preview.webp",
    tags: ["Real Estate", "Website"],
    featured: true
  },
  {
    id: "estatenet",
    title: "EstateNet",
    category: "Mobile App",
    classification: "Mobile App",
    summary: "A property management app designed to simplify rent tracking and the relationship between property owners, managers and tenants.",
    whatItIs: "A property management mobile application connecting property owners, managers and tenants.",
    whatBuilt: "Mobile application interface for verified rent tracking, property management, and tenant communication.",
    visualType: "estatenet",
    imageSrc: "/assets/projects/estatenet_roles.webp",
    screenshots: [
      "/assets/projects/estatenet_roles.webp",
      "/assets/projects/estatenet_properties.webp",
      "/assets/projects/estatenet_managers.webp"
    ],
    videoSrc: "/assets/projects/estatenet_demo.mp4",
    tags: ["Property Management", "Mobile App"],
    featured: true
  },
  {
    id: "opulent-condo-reminder",
    title: "Opulent Condo Reminder System",
    category: "Custom Software / Automation",
    classification: "Custom Software",
    summary: "A property management system for managing units, contacts, charges, payments, reminders and statements.",
    whatItIs: "Custom property management software for condominium operations and resident communications.",
    whatBuilt: "Operational management system for unit tracking, charges, payments, automated SMS reminders, and statements.",
    visualType: "opulent",
    imageSrc: "/assets/projects/opulent_dashboard.webp",
    tags: ["Custom Software", "Automation"],
    featured: true
  },
  {
    id: "tempest",
    title: "Tempest",
    category: "Website",
    classification: "Website",
    summary: "A property-focused website for Tempest Gold Property.",
    whatItIs: "Property intelligence and strategic real estate advisory web presence for Tempest Gold Property in Gaborone, Botswana.",
    whatBuilt: "Modern web experience presenting property intelligence, advisory services, and case studies.",
    visualType: "tempest",
    imageSrc: "/assets/projects/tempest_preview.webp",
    tags: ["Real Estate", "Website"],
    featured: true
  },

  // 5 Secondary Projects
  {
    id: "lookiy",
    title: "Lookiy",
    category: "Website",
    classification: "Website",
    url: "https://www.lookiy.com/",
    summary: "An online consumer marketplace and e-commerce shopping platform.",
    whatItIs: "Consumer marketplace and digital shopping platform built around the promise to 'Shop Smart, Live Better'.",
    whatBuilt: "Digital retail web platform for product discovery and consumer purchases.",
    visualType: "lookiy",
    imageSrc: "/assets/projects/lookiy_preview.webp",
    tags: ["E-Commerce", "Website"],
    featured: false
  },
  {
    id: "lumsaway",
    title: "LumsAway",
    category: "Website",
    classification: "Website",
    url: "https://lumpsaway.ug/",
    summary: "Healthcare foundation website supporting cancer survivorship and advocacy programs in Uganda.",
    whatItIs: "Non-governmental organization web presence supporting cancer patients, survivorship care, and health education.",
    whatBuilt: "Informational organization website outlining patient support programs, advocacy initiatives, and community contact resources.",
    visualType: "lumsaway",
    tags: ["Healthcare", "NGO", "Website"],
    featured: false
  },
  {
    id: "afres",
    title: "African Real Estate Society (AfRES)",
    category: "Website",
    classification: "Website",
    url: "https://www.afres.org/",
    summary: "Official organizational portal for the African Real Estate Society supporting conferences and research publications.",
    whatItIs: "Pan-African real estate association dedicated to property education, academic research, and continental networking.",
    whatBuilt: "Organizational web portal featuring annual conference information, journal publication links, and chapter directories.",
    visualType: "afres",
    imageSrc: "/assets/projects/afres_preview.webp",
    tags: ["Organization", "Website"],
    featured: false
  },
  {
    id: "hearmeout",
    title: "HearMeOut",
    category: "Mobile App",
    classification: "Mobile App",
    summary: "A mobile social discovery and marketplace application featuring community feeds, local listings, and topic exploration.",
    whatItIs: "Mobile social discovery and marketplace application.",
    whatBuilt: "Cross-platform mobile application interface with live activity feeds, listings, topics, and messaging.",
    visualType: "hearmeout",
    imageSrc: "/assets/projects/hearmeout_feed.webp",
    screenshots: [
      "/assets/projects/hearmeout_feed.webp",
      "/assets/projects/hearmeout_jobs.webp",
      "/assets/projects/hearmeout_inbox.webp"
    ],
    videoSrc: "/assets/projects/hearmeout_demo.mp4",
    tags: ["Community", "Mobile App"],
    featured: false
  },
  {
    id: "axiom",
    title: "Axiom",
    category: "AI Project",
    classification: "AI Project",
    summary: "AI-powered project.",
    whatItIs: "AI creation.",
    whatBuilt: "AI-powered project.",
    detailsNote: "Project details coming soon.",
    visualType: "axiom",
    tags: ["AI Project"],
    featured: false
  }
];

export const WHY_28_LABS = {
  headline: "Technology should make business simpler, not harder.",
  pillars: [
    {
      title: "WE LISTEN",
      tagline: "We understand the problem before we build.",
      description: "We don't jump into code until we understand your business, your team, and what success looks like."
    },
    {
      title: "WE KEEP IT SIMPLE",
      tagline: "You don't need to be technical to work with us.",
      description: "We explain options in plain English and focus on how the product works for you and your customers."
    },
    {
      title: "WE BUILD AROUND YOU",
      tagline: "Your business is unique. Your software should be too.",
      description: "No rigid templates or forced workflows. We tailor every interface and feature around your specific needs."
    },
    {
      title: "WE STAY WITH YOU",
      tagline: "We continue improving and supporting your product after launch.",
      description: "Launching is just the beginning. We provide ongoing maintenance and upgrades as your business grows."
    }
  ]
};

export const AI_AUTOMATION_EXAMPLES: WorkflowExample[] = [
  {
    id: "customer-support",
    title: "CUSTOMER SUPPORT",
    subtitle: "Keep customers happy around the clock.",
    steps: [
      { step: "01", label: "Customer asks a question", icon: "MessageSquare" },
      { step: "02", label: "AI provides an instant answer", icon: "Sparkles" },
      { step: "03", label: "Team is notified when human help is needed", icon: "Bell" }
    ]
  },
  {
    id: "documents",
    title: "DOCUMENTS",
    subtitle: "Turn paper and PDFs into usable data.",
    steps: [
      { step: "01", label: "Document is uploaded", icon: "FileText" },
      { step: "02", label: "Information is extracted accurately", icon: "Cpu" },
      { step: "03", label: "Data sent directly to your system", icon: "Database" }
    ]
  },
  {
    id: "business-tasks",
    title: "BUSINESS TASKS",
    subtitle: "Automate repetitive daily workflows.",
    steps: [
      { step: "01", label: "Task is received", icon: "Inbox" },
      { step: "02", label: "AI processes the requirements", icon: "Workflow" },
      { step: "03", label: "Result is delivered to your team", icon: "CheckCircle" }
    ]
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "What can 28 Labs build?",
    answer: "We build websites, web applications, customer portals, mobile apps for Android and iPhone, custom business systems, and practical AI automation."
  },
  {
    id: "faq-2",
    question: "Can you build a website from scratch?",
    answer: "Yes. From design and content layout to launch and hosting setup, we handle the entire process from start to finish."
  },
  {
    id: "faq-3",
    question: "I only have an idea. Can you help?",
    answer: "Absolutely. Many of our projects start as an initial idea. We help you clarify the scope, design the experience, and build the first version."
  },
  {
    id: "faq-4",
    question: "Can you improve my existing website or app?",
    answer: "Yes. We frequently help businesses redesign outdated websites, fix slow interfaces, add new features, or rebuild existing tools for better performance."
  },
  {
    id: "faq-5",
    question: "Can you build an app for Android and iPhone?",
    answer: "Yes. We build modern cross-platform mobile applications that run smoothly on both Android devices and iPhones with a single shared codebase."
  },
  {
    id: "faq-6",
    question: "How can AI help my business?",
    answer: "AI can answer repetitive customer questions, extract data from documents, draft messages, organize leads, and automate tasks that take hours of manual effort."
  },
  {
    id: "faq-7",
    question: "How much does a project cost?",
    answer: "Cost depends on what you are building. A simple business website is very different from a full mobile app or custom operational system. We provide a transparent scope and price before any work begins."
  },
  {
    id: "faq-8",
    question: "How long does development take?",
    answer: "Focused websites and MVPs typically take a few weeks, while complex business platforms take longer. We break work into clear stages so you see continuous progress."
  },
  {
    id: "faq-9",
    question: "Do you support projects after launch?",
    answer: "Yes. We stay with you after launch to assist with updates, maintenance, troubleshooting, and adding new features as your business grows."
  }
];
