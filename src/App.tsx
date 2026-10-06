import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { WhatWeBuild } from './components/WhatWeBuild';
import { Process } from './components/Process';
import { CaseStudies } from './components/CaseStudies';
import { ValueProps } from './components/ValueProps';
import { AIEngineeringPlayground } from './components/AIEngineeringPlayground';
import { ProjectEstimator } from './components/ProjectEstimator';
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
    setModalServiceTitle('Project Scope');
    setModalScopeSummary(scopeSummary);
    setModalOpen(true);
  };

  const handleNavigateToEstimator = () => {
    const el = document.getElementById('estimator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      handleOpenConsultation();
    }
  };

  const handleExploreServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#171717] font-sans selection:bg-[#0070f3]/10 selection:text-[#171717] relative">
      {/* 14. Navigation */}
      <Navbar
        onOpenConsultation={() => handleOpenConsultation()}
        onNavigateToEstimator={handleNavigateToEstimator}
      />

      {/* Main Experience */}
      <main>
        {/* 4. Hero Section */}
        <Hero
          onOpenConsultation={() => handleOpenConsultation()}
          onExploreServices={handleExploreServices}
        />

        {/* 5. Services Section (4 Large Visual Showcases) */}
        <Services 
          onOpenConsultation={handleOpenConsultation}
          onNavigateToEstimator={handleNavigateToEstimator}
        />

        {/* 6. What We Build Section (For Businesses, For Startups, With AI) */}
        <WhatWeBuild onOpenConsultation={handleOpenConsultation} />

        {/* 7. How It Works (From idea to launch - 4 stages) */}
        <Process onOpenConsultation={() => handleOpenConsultation()} />

        {/* 8. Selected Projects (Things we've built) */}
        <CaseStudies onOpenConsultation={handleOpenConsultation} />

        {/* 9. Why 28 Labs (Technology should make business simpler, not harder) */}
        <ValueProps />

        {/* 10. AI Section (What could you automate?) */}
        <AIEngineeringPlayground onOpenConsultation={handleOpenConsultation} />

        {/* 11. Project Starter (Tell us what you want to build - 3 simple questions) */}
        <ProjectEstimator
          onOpenConsultationWithScope={handleOpenConsultationWithScope}
        />

        {/* 12. FAQ (9 Simple Non-Technical Questions) */}
        <FAQ onOpenConsultation={() => handleOpenConsultation()} />

        {/* 13. Final CTA (Have an idea? Let's build it.) */}
        <ContactSection
          onOpenConsultation={() => handleOpenConsultation()}
          onNavigateToEstimator={handleNavigateToEstimator}
        />
      </main>

      {/* 15. Footer */}
      <Footer onOpenConsultation={() => handleOpenConsultation()} />

      {/* Global Consultation / Start a Project Modal */}
      <ConsultationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialServiceTitle={modalServiceTitle}
        initialScopeSummary={modalScopeSummary}
      />
    </div>
  );
}
