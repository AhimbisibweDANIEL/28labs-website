export interface ServiceItem {
  id: string;
  title: string;
  headline: string;
  category: 'web-mobile' | 'websites' | 'ai-engineering' | 'rearchitecture';
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  deliverables: string[];
  techStack?: string[];
  typicalTimeline?: string;
  highlights?: string[];
  ctaLabel?: string;
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

export interface ConsultationFormData {
  fullName: string;
  email: string;
  company: string;
  projectType: string;
  budgetRange?: string;
  timeline?: string;
  message: string;
}
