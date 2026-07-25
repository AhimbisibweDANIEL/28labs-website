import { ServiceItem, CaseStudy, Testimonial, ProcessStep, FAQItem } from '../types';

export const HERO_DATA = {
  headlinePrefix: "High-Velocity",
  headlineAccent: "Software & AI Engineering",
  headlineSuffix: "Built for Scalable Scale.",
  subheadline: "28labs designs and ships production-grade web & mobile apps, custom web platforms, and custom LLM/AI reasoning engines. Senior-led teams. Zero bloated process. Shipped in weeks.",
  stats: [
    { value: "40+", label: "Production Apps Shipped" },
    { value: "99.8%", label: "On-Time Sprint Delivery" },
    { value: "3.4x", label: "Avg Client ROI Increase" },
    { value: "100%", label: "Source Code & IP Handover" },
  ]
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "web-mobile-apps",
    title: "Web & Mobile Applications",
    category: "web-mobile",
    shortDesc: "High-performance React/Next.js and Flutter/React Native cross-platform applications built for multi-tenant scalability.",
    fullDesc: "We build enterprise-ready web portals and multi-platform iOS/Android mobile apps with sub-second response times, offline resilience, and robust state management. Designed with microservices or monolithic speed depending on your growth stage.",
    iconName: "Smartphone",
    deliverables: [
      "Native iOS & Android Apps (React Native / Flutter)",
      "Progressive Web Apps (PWA) & Responsive Web Portals",
      "Real-time Data Synchronization & Websocket Backends",
      "Stripe & Custom Payment Gateway Integration",
      "Role-Based Access Control (RBAC) & OAuth Setup"
    ],
    techStack: ["React", "Next.js", "TypeScript", "React Native", "Flutter", "Node.js", "PostgreSQL", "Redis"],
    typicalTimeline: "4 – 8 Weeks",
    highlights: [
      "Sub-100ms API response latency benchmarks",
      "Automated CI/CD deployment pipelines included",
      "Comprehensive Jest/Playwright test suite coverage"
    ]
  },
  {
    id: "custom-websites",
    title: "Custom High-Converting Websites",
    category: "websites",
    shortDesc: "Blazing-fast, SEO-engineered marketing sites and enterprise portals crafted to turn traffic into qualified pipeline.",
    fullDesc: "Engineered with modern headless architectures, Tailwind CSS, Motion animations, and custom headless CMS integrations. Designed for high conversion rates, accessibility compliance (WCAG AA), and top 1% Lighthouse speed scores.",
    iconName: "Layout",
    deliverables: [
      "Pixel-perfect Custom UI/UX Design System",
      "Headless CMS Integration (Sanity / Strapi / Payload)",
      "Technical SEO & Structured Data Schema Setup",
      "Interactive Product Calculators & Conversion Widgets",
      "Analytics & Conversion Tracking Implementation"
    ],
    techStack: ["Next.js", "Tailwind CSS", "Motion", "Sanity CMS", "Vite", "TypeScript", "GA4 / PostHog"],
    typicalTimeline: "2 – 4 Weeks",
    highlights: [
      "95+ Google Lighthouse Performance Scores",
      "Modular design components for easy internal edits",
      "A/B testing framework ready out of the box"
    ]
  },
  {
    id: "ai-implementations",
    title: "AI & Custom Reasoning Engines",
    category: "ai-engineering",
    shortDesc: "Production LLM applications, RAG pipelines, autonomous AI agents, and custom fine-tuned workflow automation.",
    fullDesc: "We transform abstract AI ideas into secure, deterministic production systems. From custom multi-modal agent workflows and Retrieval-Augmented Generation (RAG) over private enterprise databases to real-time voice and vision AI integrations.",
    iconName: "Cpu",
    deliverables: [
      "Custom RAG Architectures with Vector Databases (Pinecone, Qdrant)",
      "Multi-Agent Workflow Automation & Tool Calling Systems",
      "Enterprise Fine-Tuned Model Pipelines & Prompt Security",
      "Real-Time Speech/Vision Multimodal API Integrations",
      "AI Analytics Dashboard & Token Cost Monitoring"
    ],
    techStack: ["Gemini API", "OpenAI API", "Python", "LangChain/LlamaIndex", "Pinecone", "FastAPI", "PyTorch"],
    typicalTimeline: "3 – 6 Weeks",
    highlights: [
      "Strict data privacy & zero third-party training leaks",
      "Fallback latency routing & model cost optimization",
      "Automated evaluation suites for hallucination prevention"
    ]
  },
  {
    id: "rearchitecture",
    title: "Legacy Re-architecture & Scale",
    category: "rearchitecture",
    shortDesc: "Modernize slow codebases, fix bottleneck APIs, and scale existing SaaS systems to handle 10x traffic bursts.",
    fullDesc: "Stuck with technical debt, slow database queries, or fragile monolithic code? Our senior architects perform surgical code refactoring, cloud migration, and database optimization without disrupting your live customer operations.",
    iconName: "Zap",
    deliverables: [
      "Full Codebase & Security Audit Report",
      "Database Query Optimization & Indexing Overhaul",
      "Monolith to Serverless / Microservices Migration",
      "Automated Infrastructure as Code (Terraform / Docker)",
      "Zero-Downtime Deployment Setup"
    ],
    techStack: ["Docker", "Kubernetes", "AWS", "Google Cloud", "PostgreSQL", "GraphQL", "Go", "TypeScript"],
    typicalTimeline: "3 – 6 Weeks",
    highlights: [
      "Average 60% reduction in monthly cloud infrastructure costs",
      "Zero user downtime during database migrations",
      "Full architectural documentation & team training"
    ]
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "apex-ai-platform",
    title: "Apex AI — Automated Financial Intelligence & Due Diligence",
    clientName: "Apex Capital Partners",
    industry: "FinTech / Private Equity",
    category: "ai",
    summary: "Built an AI-driven due diligence platform that ingests 500+ page financial reports, executes structured analysis, and generates audit reports in minutes instead of days.",
    challenge: "Analysts spent 40+ hours per deal reading unstructured PDF reports, creating manual summary spreadsheets, and risking human oversight errors.",
    solution: "Engineered a hybrid RAG pipeline combining Gemini multimodal models with Qdrant vector database and a high-speed React dashboard with live document citation highlighting.",
    metrics: [
      { label: "Report Processing Speed", value: "12x Faster", description: "Reduced audit report generation time from 40 hrs to 25 mins" },
      { label: "Data Accuracy", value: "99.4%", description: "Verified against human analyst baseline benchmarks" },
      { label: "Deal Volume Handled", value: "$1.2B+", description: "Total asset value evaluated through the platform" }
    ],
    techUsed: ["Gemini 1.5 Pro", "Next.js 14", "FastAPI", "Qdrant", "PostgreSQL", "Tailwind CSS"],
    featured: true,
    imageAccent: "from-indigo-600 to-purple-600"
  },
  {
    id: "omnihealth-app",
    title: "OmniHealth — Multi-Platform Telehealth & Remote Care Portal",
    clientName: "OmniHealth Global",
    industry: "Digital Healthcare",
    category: "mobile",
    summary: "Designed and developed HIPAA-compliant mobile apps for patients and a web portal for clinicians with encrypted WebRTC video visits and real-time vital tracking.",
    challenge: "Legacy web app crashed during peak patient consultation hours and lacked iOS/Android native camera integration.",
    solution: "Architected a unified Flutter cross-platform mobile suite powered by Node.js microservices and WebRTC streaming server on Google Cloud Run.",
    metrics: [
      { label: "Active Patients", value: "180,000+", description: "Monthly active patients onboarded across iOS and Android" },
      { label: "App Store Rating", value: "4.9 / 5.0", description: "Across 4,200+ user reviews on Apple App Store" },
      { label: "System Uptime", value: "99.99%", description: "Zero downtime during peak consultation hours" }
    ],
    techUsed: ["Flutter", "React", "Node.js", "WebRTC", "Google Cloud", "PostgreSQL"],
    featured: true,
    imageAccent: "from-cyan-600 to-blue-600"
  },
  {
    id: "velox-commerce",
    title: "Velox Commerce — Ultra-Fast Headless Storefront & AI Recommendations",
    clientName: "Velox Apparel Group",
    industry: "E-Commerce",
    category: "web",
    summary: "Replaced an outdated monolithic store with a custom headless Next.js storefront equipped with personalized AI size & visual style recommendation widgets.",
    challenge: "High cart abandonment rates due to 4.2-second page load times and mobile rendering bugs.",
    solution: "Built a headless store with Next.js App Router, Tailwind CSS, Shopify Storefront API, and a custom vector-based product similarity engine.",
    metrics: [
      { label: "Conversion Rate Increase", value: "+42%", description: "Direct uplift in visitor-to-paid checkout conversion" },
      { label: "Page Load Latency", value: "0.6s", description: "Lighthouse Performance Score jumped from 34 to 98" },
      { label: "Avg Order Value", value: "+28%", description: "Driven by AI style recommendation widget" }
    ],
    techUsed: ["Next.js", "Tailwind CSS", "Shopify API", "Gemini API", "PostHog", "Vercel"],
    featured: false,
    imageAccent: "from-emerald-600 to-teal-600"
  },
  {
    id: "cognitiveops-engine",
    title: "CognitiveOps — LLM Workflow Automation Engine for Logistics",
    clientName: "LogiTrans International",
    industry: "Supply Chain & Logistics",
    category: "enterprise",
    summary: "Autonomous email parsing, customs document extraction, and automatic ERP booking system powered by customized multi-agent workflows.",
    challenge: "Manual entry of 5,000 daily shipping manifests caused freight dispatch delays and expensive compliance fines.",
    solution: "Deployed a fault-tolerant multi-agent AI system with automated human-in-the-loop review triggers for edge cases.",
    metrics: [
      { label: "Manual Overhead Saved", value: "85%", description: "Eliminated thousands of hours of manual manifest entry" },
      { label: "Daily Shipping Vol", value: "15,000+", description: "Shipments processed daily without human intervention" },
      { label: "Payback Period", value: "3 Weeks", description: "Full ROI achieved within first month of deployment" }
    ],
    techUsed: ["Python", "FastAPI", "Gemini API", "Docker", "RabbitMQ", "React"],
    featured: false,
    imageAccent: "from-violet-600 to-fuchsia-600"
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: "01",
    title: "Discovery & Blueprint",
    duration: "Days 1 – 5",
    subtitle: "Product Architecture & Technical Specification",
    description: "We dive deep into your business objectives, map out user journeys, define data models, select optimal tech stack, and deliver an interactive design blueprint with locked scope and fixed timeline.",
    deliverables: ["Interactive Figma Prototypes", "Technical Architecture Diagram", "Database Schema Specs", "Fixed Sprint Roadmap & Milestones"],
    icon: "Compass"
  },
  {
    stepNumber: "02",
    title: "High-Velocity Sprints",
    duration: "Weeks 2 – 5",
    subtitle: "Senior Engineering & Weekly Demos",
    description: "Senior developers write clean, well-tested code in 1-week iterative sprints. You receive live staging previews every Friday, with real-time Slack/Teams updates.",
    deliverables: ["Weekly Staging Builds", "Clean Modular Codebase", "Automated Test Suite", "Bi-weekly Video Demos"],
    icon: "Code2"
  },
  {
    stepNumber: "03",
    title: "Hardening & Security",
    duration: "Week 6",
    subtitle: "Performance Optimization & Penetration Testing",
    description: "We conduct stress testing, load testing, security vulnerability scans, cross-device QA, and AI output validation to ensure zero production surprises.",
    deliverables: ["Lighthouse 95+ Audit", "OWASP Security Compliance", "Load Test Benchmark Report", "WCAG AA Accessibility Check"],
    icon: "ShieldCheck"
  },
  {
    stepNumber: "04",
    title: "Launch & IP Handover",
    duration: "Week 7+",
    subtitle: "Production Deployment & Complete Code Ownership",
    description: "We execute zero-downtime production deployment to your cloud environment (AWS, GCP, Vercel) and hand over 100% repository access, CI/CD pipelines, and documentation.",
    deliverables: ["100% GitHub Repository Ownership", "CI/CD & Cloud Infrastructure", "System Maintenance Guide", "30-Day Post-Launch Warranty"],
    icon: "Rocket"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    quote: "28labs delivered our AI platform in 5 weeks flat. Other agencies quoted us 6 months and double the budget. The code is clean, modular, and our engineering team picked it up seamlessly.",
    clientName: "Marcus Vance",
    role: "Chief Technology Officer",
    company: "Apex Capital Partners",
    projectType: "AI Financial Intelligence Platform",
    rating: 5
  },
  {
    id: "t2",
    quote: "Working with 28labs felt like having an elite internal engineering team. No fluff, no endless account manager meetings — just senior engineers who execute with speed and precision.",
    clientName: "Elena Rostova",
    role: "Founder & CEO",
    company: "OmniHealth Global",
    projectType: "Telehealth Mobile Apps",
    rating: 5
  },
  {
    id: "t3",
    quote: "Our website conversion rate increased by 42% within two weeks of launching the new site 28labs built. Their understanding of CRO, animation design, and speed is unmatched.",
    clientName: "David Sterling",
    role: "VP of Growth",
    company: "Velox Apparel",
    projectType: "Custom Headless Storefront",
    rating: 5
  }
];

export const WHY_US_GRID = [
  {
    title: "100% Senior Engineers",
    description: "No junior developers or offshore delegation. Your project is architected and coded by senior engineers with 8+ years of enterprise shipping experience.",
    icon: "Users"
  },
  {
    title: "Fixed Timelines & Pricing",
    description: "No open-ended hourly billing traps. We lock in fixed deliverables, transparent milestones, and guarantee delivery dates before a line of code is written.",
    icon: "Clock"
  },
  {
    title: "Full Source Code Ownership",
    description: "You own 100% of the IP, Git repositories, and cloud accounts from Day 1. No vendor lock-in, proprietary frameworks, or recurring license fees.",
    icon: "Lock"
  },
  {
    title: "Production-Grade AI Standards",
    description: "We don't just wrapper APIs. We engineer RAG architectures, guardrails against hallucinations, cost-efficiency routing, and deterministic evaluation benchmarks.",
    icon: "Sparkles"
  },
  {
    title: "Async Transparency & Daily Commits",
    description: "Direct Slack/Discord access to your lead architects. Clean GitHub PRs, daily build status updates, and zero account manager bureaucracy.",
    icon: "GitBranch"
  },
  {
    title: "30-Day Post-Launch Guarantee",
    description: "We stand behind our code. Every engagement includes 30 days of complimentary post-launch bug fixes, performance monitoring, and team onboarding support.",
    icon: "CheckCircle2"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "How fast can 28labs start on our project?",
    answer: "We typically kick off discovery within 3 to 5 business days of scope approval. Because our teams operate in agile sprint units, we maintain immediate capacity for qualified projects.",
    category: "process"
  },
  {
    id: "faq-2",
    question: "Who owns the code and intellectual property?",
    answer: "You own 100% of all intellectual property, source code, design assets, and cloud deployment scripts from day one. Everything is committed directly to your company's private GitHub organization.",
    category: "ip"
  },
  {
    id: "faq-3",
    question: "How do you handle pricing and budgets?",
    answer: "We offer fixed-scope project pricing with milestone payments tied to deliverable demos, as well as dedicated weekly sprint teams for evolving products. No surprise fees or hourly overages.",
    category: "pricing"
  },
  {
    id: "faq-4",
    question: "How do you ensure AI model reliability and prevent hallucinations?",
    answer: "We implement multi-stage verification layers including strict prompt engineering, JSON schema validation, vector RAG citation checking, automated fallback models, and human-in-the-loop review triggers for edge cases.",
    category: "tech"
  },
  {
    id: "faq-5",
    question: "Can 28labs work alongside our internal team?",
    answer: "Yes! We frequently embed alongside internal engineering leaders to accelerate critical roadmaps, build specialized AI/mobile modules, or handle legacy infrastructure upgrades while your team focuses on core product features.",
    category: "process"
  },
  {
    id: "faq-6",
    question: "What happens after the project launches?",
    answer: "Every project includes a 30-day warranty period covering bug fixes and system optimization. We also offer ongoing monthly retainer options for active feature development, SLA maintenance, and cloud optimization.",
    category: "process"
  }
];

export const TECH_STACK = [
  { name: "React / Next.js", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Node.js / Express", category: "Backend" },
  { name: "Python / FastAPI", category: "AI & Backend" },
  { name: "Gemini / OpenAI API", category: "AI Models" },
  { name: "Qdrant / Pinecone", category: "Vector DB" },
  { name: "PostgreSQL / Redis", category: "Database" },
  { name: "React Native / Flutter", category: "Mobile" },
  { name: "Docker / Cloud Run", category: "DevOps" }
];
