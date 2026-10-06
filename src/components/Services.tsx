import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES_DATA, SERVICES_SECTION_INTRO } from '../data/content';
import { ServiceItem } from '../types';
import { WebDevelopmentVisual } from './visuals/WebDevelopmentVisual';
import { MobileAppVisual } from './visuals/MobileAppVisual';
import { AIWorkflowVisual } from './visuals/AIWorkflowVisual';
import { CustomSoftwareVisual } from './visuals/CustomSoftwareVisual';
import { ArrowRight, CheckCircle2, X, Sparkles } from 'lucide-react';

interface ServicesProps {
  onOpenConsultation: (serviceTitle?: string) => void;
  onNavigateToEstimator?: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenConsultation, onNavigateToEstimator }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedService(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleStartProject = (service: ServiceItem) => {
    let targetType = 'Website';
    if (service.id === 'mobile-development') targetType = 'Mobile App';
    else if (service.id === 'ai-automation') targetType = 'AI Automation';
    else if (service.id === 'custom-software') targetType = 'Custom Software';

    window.dispatchEvent(new CustomEvent('select-project-type', { detail: targetType }));

    if (onNavigateToEstimator) {
      onNavigateToEstimator();
    } else {
      const el = document.getElementById('estimator');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
          const input = document.getElementById('project-idea-desc');
          if (input) input.focus();
        }, 500);
      } else {
        onOpenConsultation(service.title);
      }
    }
  };

  const getServiceVisual = (serviceId: string) => {
    switch (serviceId) {
      case 'web-development':
        return <WebDevelopmentVisual />;
      case 'mobile-development':
        return <MobileAppVisual />;
      case 'ai-automation':
        return <AIWorkflowVisual />;
      case 'custom-software':
        return <CustomSoftwareVisual />;
      default:
        return <WebDevelopmentVisual />;
    }
  };

  return (
    <section id="services" className="py-24 sm:py-32 relative scroll-mt-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-medium tracking-widest uppercase text-[#888888] mb-3">
              {SERVICES_SECTION_INTRO.eyebrow}
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black tracking-tight mb-4">
              {SERVICES_SECTION_INTRO.heading}
            </h2>
            <p className="text-base sm:text-lg text-[#666666] leading-relaxed max-w-2xl mx-auto">
              {SERVICES_SECTION_INTRO.supportingText}
            </p>
          </motion.div>
        </div>

        {/* 4 Service Showcase Blocks */}
        <div className="space-y-16 sm:space-y-24">
          {SERVICES_DATA.map((service, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55 }}
                className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center"
              >
                {/* Content Side */}
                <div
                  className={`lg:col-span-6 space-y-6 ${
                    isReversed ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  {/* Service Number & Category Header */}
                  <div className="flex items-center gap-2.5">
                    <span className="text-[13px] font-mono font-medium text-[#888888]">
                      {service.serviceNumber || `0${index + 1}`}
                    </span>
                    <span className="w-8 h-px bg-[#d4d4d4]" />
                    <span className="text-[13px] font-medium uppercase tracking-wider text-[#666666]">
                      {service.title}
                    </span>
                  </div>

                  {/* Headline */}
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black tracking-tight leading-tight">
                    {service.headline}
                  </h3>

                  {/* Description */}
                  <p className="text-base sm:text-lg text-[#666666] leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Primary Outcome */}
                  {service.primaryOutcome && (
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#eaeaea] bg-[#fafafa] text-sm text-[#171717]">
                      <Sparkles className="w-3.5 h-3.5 text-[#0070f3]" />
                      <span>{service.primaryOutcome}</span>
                    </div>
                  )}

                  {/* Deliverables / Examples */}
                  <div className="pt-1">
                    <p className="text-xs font-medium text-[#888888] uppercase tracking-wider mb-3">
                      What we build
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {service.deliverables.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2.5 text-sm text-[#171717] border border-[#eaeaea] rounded-xl px-3.5 py-2.5"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#0070f3] shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <button
                      onClick={() => handleStartProject(service)}
                      className="px-6 py-3 rounded-full bg-black hover:bg-neutral-700 text-white font-medium text-sm transition-colors duration-200 flex items-center gap-2 cursor-pointer"
                    >
                      <span>Start a project</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() => setSelectedService(service)}
                      className="px-5 py-3 rounded-full bg-white hover:bg-neutral-50 text-black font-medium text-sm border border-[#d4d4d4] transition-colors duration-200 cursor-pointer"
                    >
                      Learn more
                    </button>
                  </div>
                </div>

                {/* Visual Side */}
                <div
                  className={`lg:col-span-6 flex justify-center ${
                    isReversed ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="w-full max-w-lg lg:max-w-none">
                    {getServiceVisual(service.id)}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Service Details Modal */}
      <AnimatePresence>
        {selectedService && (
          <div 
            role="dialog"
            aria-modal="true"
            aria-labelledby="service-modal-title"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm overflow-y-auto"
            onClick={() => setSelectedService(null)}
          >
            <div 
              className="relative w-full max-w-xl bg-white border border-[#eaeaea] rounded-2xl p-6 sm:p-8 space-y-6 my-8 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                onClick={() => setSelectedService(null)}
                aria-label="Close service details"
                className="absolute top-5 right-5 p-2 rounded-lg text-[#888888] hover:text-black hover:bg-neutral-50 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header */}
              <div className="space-y-2 pr-10">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#eaeaea] text-[#666666] text-xs font-medium">
                  <span>Service {selectedService.serviceNumber || '01'}</span>
                </div>
                <h3 id="service-modal-title" className="text-2xl sm:text-3xl font-bold text-black tracking-tight">
                  {selectedService.title}
                </h3>
                <p className="text-sm font-medium text-[#0070f3]">
                  {selectedService.headline}
                </p>
              </div>

              {/* Description */}
              <div className="p-4 rounded-xl bg-[#fafafa] border border-[#eaeaea] space-y-1 text-sm">
                <div className="text-xs font-medium text-[#888888] uppercase tracking-wider">
                  How this helps your business
                </div>
                <p className="text-[#333333] leading-relaxed pt-1">
                  {selectedService.fullDesc || selectedService.shortDesc}
                </p>
              </div>

              {/* Deliverables */}
              <div className="space-y-2.5">
                <div className="text-xs font-medium text-[#888888] uppercase tracking-wider">
                  Example deliverables
                </div>
                <div className="grid sm:grid-cols-2 gap-2">
                  {selectedService.deliverables.map((d, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 p-2.5 rounded-xl border border-[#eaeaea] text-sm text-[#171717]"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0070f3] shrink-0" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Outcome */}
              {selectedService.primaryOutcome && (
                <div className="p-3 rounded-xl bg-[#0070f3]/5 border border-[#0070f3]/20 text-sm text-[#171717] flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#0070f3] shrink-0" />
                  <span><strong>Target outcome:</strong> {selectedService.primaryOutcome}</span>
                </div>
              )}

              {/* Actions */}
              <div className="pt-3 border-t border-[#eaeaea] flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => {
                    const s = selectedService;
                    setSelectedService(null);
                    handleStartProject(s);
                  }}
                  className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full text-sm font-medium bg-black hover:bg-neutral-700 text-white transition-colors cursor-pointer"
                >
                  <span>Start a {selectedService.title} project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setSelectedService(null)}
                  className="w-full sm:w-auto py-3 px-5 rounded-full text-sm font-medium border border-[#d4d4d4] text-black hover:bg-neutral-50 transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
