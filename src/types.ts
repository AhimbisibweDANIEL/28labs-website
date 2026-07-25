export interface ServiceItem {
  id: string;
  title: string;
  category: 'web-mobile' | 'websites' | 'ai-engineering' | 'rearchitecture';
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  deliverables: string[];
  techStack: string[];
  typicalTimeline: string;
  highlights: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  clientName: string;
  industry: string;
  category: 'web' | 'mobile' | 'ai' | 'enterprise';
  summary: string;
  challenge: string;
  solution: string;
  metrics: {
    label: string;
    value: string;
    description: string;
  }[];
  techUsed: string[];
  featured: boolean;
  imageAccent: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  clientName: string;
  role: string;
  company: string;
  avatarUrl?: string;
  projectType: string;
  rating: number;
}

export interface EstimatorState {
  projectType: 'web' | 'mobile' | 'ai' | 'fullstack';
  scopeLevel: 'mvp' | 'growth' | 'enterprise';
  features: string[];
  timelinePreference: 'standard' | 'express';
  teamSize: 'lean' | 'dedicated';
}

export interface ConsultationFormData {
  fullName: string;
  email: string;
  company: string;
  projectType: string;
  budgetRange: string;
  timeline: string;
  message: string;
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  duration: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  icon: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'pricing' | 'process' | 'tech' | 'ip';
}
