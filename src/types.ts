export interface ServiceItem {
  id: string;
  title: string;
  headline: string;
  category: 'web-mobile' | 'websites' | 'ai-engineering' | 'rearchitecture';
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  deliverables: string[];
  serviceNumber?: string;
  primaryOutcome?: string;
  techStack?: string[];
  typicalTimeline?: string;
  highlights?: string[];
  ctaLabel?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  classification: string;
  summary: string;
  url?: string;
  whatItIs?: string;
  whatBuilt?: string;
  detailsNote?: string;
  visualType: 'serena' | 'lookiy' | 'estatenet' | 'hearmeout' | 'lumpsaway' | 'lumsaway' | 'afres' | 'tempest' | 'axiom' | 'opulent';
  imageSrc?: string;
  screenshots?: string[];
  videoSrc?: string;
  tags?: string[];
  featured?: boolean;
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
  whoItHelps?: string;
  problemSolved?: string;
  url?: string;
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
  icon?: string;
}

export interface WhatWeBuildCategory {
  id: string;
  title: string;
  tagline: string;
  items: string[];
}

export interface WorkflowExample {
  id: string;
  title: string;
  subtitle: string;
  steps: {
    step: string;
    label: string;
    icon: string;
  }[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface ProjectStarterData {
  projectType: string;
  ideaDescription: string;
  timeline: string;
}

export type AllowedProjectType = 
  | 'Website'
  | 'Mobile App'
  | 'Web Application'
  | 'AI Automation'
  | 'Custom Software'
  | 'Not sure — help me figure it out';

export type AllowedTimeline = 
  | 'ASAP'
  | 'This month'
  | '1–3 months'
  | 'Just exploring';

export interface LeadSubmissionPayload {
  projectType: string;
  ideaDescription: string;
  timeline: string;
  fullName: string;
  email: string;
  company?: string;
  phone?: string;
  source?: 'project-starter' | 'consultation-modal';
  honeypot?: string;
}

export interface LeadSubmissionResponse {
  success: boolean;
  message?: string;
  error?: string;
  delivered?: boolean;
}

export interface ConsultationFormData {
  fullName: string;
  email: string;
  company: string;
  projectType: string;
  budgetRange?: string;
  timeline?: string;
  message: string;
}

