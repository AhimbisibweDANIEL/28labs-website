import {
  ServiceItem,
  CaseStudy,
  ProcessStep,
  FAQItem,
  WhatWeBuildCategory,
  WorkflowExample
} from '../types';

export const HERO_DATA = {
  eyebrow: "28 LABS",
  headline: "We build digital products for ambitious businesses.",
  supportingText: "Websites, mobile apps, custom software and AI automation — built around what your business needs.",
  primaryCta: "Start a Project",
  secondaryCta: "Explore Services"
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "web-development",
    title: "Web Development",
    headline: "Your business deserves a great website.",
    category: "websites",
    shortDesc: "We design and build modern websites and web applications that help businesses attract customers, sell online and grow.",
    fullDesc: "From custom company websites and customer portals to intuitive dashboards and SaaS platforms, we build fast, responsive, and easy-to-use web experiences tailored to your goals.",
    iconName: "Layout",
    deliverables: [
      "Business websites",
      "Online stores",
      "Web applications",
      "Customer portals",
      "Dashboards"
    ],
    ctaLabel: "Explore Web Development"
  },
  {
    id: "mobile-development",
    title: "Mobile App Development",
    headline: "Put your business in your customers' hands.",
    category: "web-mobile",
    shortDesc: "We build mobile apps that make it easier for your customers to connect with your business.",
    fullDesc: "We develop smooth, dependable mobile experiences for Android and iOS that make booking, buying, or interacting with your brand effortless.",
    iconName: "Smartphone",
    deliverables: [
      "Android apps",
      "iOS apps",
      "Customer apps",
      "Booking apps",
      "Business apps"
    ],
    ctaLabel: "Explore Mobile Apps"
  },
  {
    id: "ai-automation",
    title: "AI Automation",
    headline: "Let technology handle the repetitive work.",
    category: "ai-engineering",
    shortDesc: "We help businesses use AI to automate everyday tasks, support customers and work more efficiently.",
    fullDesc: "From instant customer answers and automated invoice processing to smart business assistants, we help you save time without adding complexity.",
    iconName: "Sparkles",
    deliverables: [
      "Customer support",
      "AI assistants",
      "Document processing",
      "Workflow automation",
      "Business automation"
    ],
    ctaLabel: "Explore AI Automation"
  },
  {
    id: "custom-software",
    title: "Custom Software",
    headline: "Software built around your business.",
    category: "rearchitecture",
    shortDesc: "When existing tools don't fit, we build software designed around the way your business actually works.",
    fullDesc: "Off-the-shelf software often forces you to change how you work. We build tailored systems that fit your team's exact processes, operations, and reporting needs.",
    iconName: "Layers",
    deliverables: [
      "Business systems",
      "Management platforms",
      "Internal tools",
      "Dashboards",
      "Integrations"
    ],
    ctaLabel: "Explore Custom Software"
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

export const SELECTED_PROJECTS: CaseStudy[] = [
  {
    id: "project-operations-portal",
    title: "Custom Business Management Portal",
    clientName: "Product / R&D",
    industry: "Custom Software",
    category: "enterprise",
    summary: "A unified internal management system that connects customer inquiries, operations, and reporting in one clean workspace.",
    whoItHelps: "Growing businesses managing operations across multiple spreadsheets.",
    problemSolved: "Replaces fragmented manual tools with one central, easy-to-use platform.",
    challenge: "Managing sales, schedules, and customer records across disconnected software was slowing down daily operations.",
    solution: "Built a customized web platform with real-time operational status, automated alerts, and instant team visibility.",
    metrics: [
      { label: "Focus", value: "Centralized", description: "One unified workspace" },
      { label: "Experience", value: "Modern", description: "Intuitive for non-technical staff" },
      { label: "Status", value: "Active", description: "Internal development" }
    ],
    techUsed: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
    featured: true,
    imageAccent: "from-blue-600 to-indigo-600"
  },
  {
    id: "project-mobile-customer-app",
    title: "Customer Booking & Account App",
    clientName: "Internal Project",
    industry: "Mobile App Development",
    category: "mobile",
    summary: "A clean mobile application that lets customers discover services, schedule appointments, and manage payments on Android and iOS.",
    whoItHelps: "Service businesses looking to increase bookings and customer loyalty.",
    problemSolved: "Eliminates phone tag and back-and-forth messaging with direct on-device booking.",
    challenge: "Customers needed a faster, friction-free way to browse availability and confirm appointments on their phones.",
    solution: "Designed and developed an intuitive mobile app featuring instant notifications, calendar sync, and saved preferences.",
    metrics: [
      { label: "Platforms", value: "iOS & Android", description: "Consistent mobile experience" },
      { label: "Access", value: "Instant", description: "One-tap appointment booking" },
      { label: "Status", value: "Preview", description: "Internal showcase" }
    ],
    techUsed: ["Flutter", "REST APIs", "Cloud Infrastructure"],
    featured: true,
    imageAccent: "from-cyan-600 to-teal-600"
  },
  {
    id: "project-support-automation",
    title: "AI Business Assistant & Support",
    clientName: "Product / R&D",
    industry: "AI Automation",
    category: "ai",
    summary: "An intelligent customer support assistant that resolves frequent inquiries around the clock and alerts human team members when needed.",
    whoItHelps: "Customer-facing teams spending hours answering repetitive questions.",
    problemSolved: "Delivers immediate, accurate customer responses 24/7 without extra staff overhead.",
    challenge: "Inquiries after business hours often went unanswered until the next morning, causing lost leads.",
    solution: "Connected an AI assistant to company information to answer questions instantly and route high-priority tickets.",
    metrics: [
      { label: "Availability", value: "24/7", description: "Instant automated responses" },
      { label: "Routing", value: "Intelligent", description: "Smooth handoff to staff" },
      { label: "Status", value: "Active", description: "R&D initiative" }
    ],
    techUsed: ["Python", "FastAPI", "AI APIs", "Vector Search"],
    featured: false,
    imageAccent: "from-purple-600 to-pink-600"
  },
  {
    id: "project-web-storefront",
    title: "Modern E-Commerce Experience",
    clientName: "Selected Project",
    industry: "Web Development",
    category: "web",
    summary: "A fast, beautifully organized storefront designed to make browsing products enjoyable and checkout effortless on mobile.",
    whoItHelps: "Brands seeking to build customer trust and improve online purchase rates.",
    problemSolved: "Replaces slow, cluttered templates with a clean, branded shopping flow.",
    challenge: "Slow mobile loading times and complicated checkouts were causing shoppers to drop off.",
    solution: "Crafted a lightweight web storefront with fluid page transitions, search filtering, and clear checkout steps.",
    metrics: [
      { label: "Speed", value: "Sub-Second", description: "Fast mobile browsing" },
      { label: "Checkout", value: "Frictionless", description: "Streamlined purchase flow" },
      { label: "Status", value: "Showcase", description: "Selected project" }
    ],
    techUsed: ["Next.js", "TypeScript", "Tailwind CSS"],
    featured: false,
    imageAccent: "from-amber-600 to-orange-600"
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
