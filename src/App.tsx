import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { ProjectEstimator } from './components/ProjectEstimator';
import { AIEngineeringPlayground } from './components/AIEngineeringPlayground';
import { CaseStudies } from './components/CaseStudies';
import { Process } from './components/Process';
import { ValueProps } from './components/ValueProps';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { ContactSection } from './components/ContactSection';
import { ConsultationModal } from './components/ConsultationModal';
import { Footer } from './components/Footer';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalServiceTitle, setModalServiceTitle] = useState<string | undefined>(undefined);
  const [modalScopeSummary, setModalScopeSummary] = useState<string | undefined>(undefined);

  const handleOpenConsultation = (serviceTitle?: string) => {
    setModalServiceTitle(serviceTitle);
    setModalScopeSummary(undefined);
    setModalOpen(true);
  };

  const handleOpenConsultationWithScope = (scopeSummary: string) => {
    setModalServiceTitle('Project Scope Estimator Proposal');
    setModalScopeSummary(scopeSummary);
    setModalOpen(true);
  };

  const handleNavigateToEstimator = () => {
    const el = document.getElementById('estimator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-100 font-sans selection:bg-indigo-500 selection:text-white relative">
      {/* Navigation */}
      <Navbar
        onOpenConsultation={handleOpenConsultation}
        onNavigateToEstimator={handleNavigateToEstimator}
      />

      {/* Main Sections */}
      <main>
        {/* 1. Hero */}
        <Hero
          onOpenConsultation={() => handleOpenConsultation()}
          onNavigateToEstimator={handleNavigateToEstimator}
        />

        {/* 2. Core Services */}
        <Services onOpenConsultation={handleOpenConsultation} />

        {/* 3. Interactive Project Scope & Budget Estimator */}
        <ProjectEstimator
          onOpenConsultationWithScope={handleOpenConsultationWithScope}
        />

        {/* 4. Interactive AI Engineering Lab Demo */}
        <AIEngineeringPlayground />

        {/* 5. Case Studies & Proof */}
        <CaseStudies onOpenConsultation={handleOpenConsultation} />

        {/* 6. How We Work / Delivery Engine */}
        <Process onOpenConsultation={() => handleOpenConsultation()} />

        {/* 7. Why Founders & Operators Choose 28labs */}
        <ValueProps />

        {/* 8. Testimonials & Verified Reviews */}
        <Testimonials />

        {/* 9. FAQs */}
        <FAQ onOpenConsultation={() => handleOpenConsultation()} />

        {/* 10. Inline Conversion / Contact Form */}
        <ContactSection
          initialProjectType={modalServiceTitle}
          initialMessage={modalScopeSummary}
        />
      </main>

      {/* Footer */}
      <Footer onOpenConsultation={() => handleOpenConsultation()} />

      {/* Global Consultation Modal */}
      <ConsultationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialServiceTitle={modalServiceTitle}
        initialScopeSummary={modalScopeSummary}
      />
    </div>
  );
}
