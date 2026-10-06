import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES_DATA, SERVICES_SECTION_INTRO } from '../data/content';
import { ServiceItem } from '../types';
import { WebDevelopmentVisual } from './visuals/WebDevelopmentVisual';
import { MobileAppVisual } from './visuals/MobileAppVisual';
import { AIWorkflowVisual } from './visuals/AIWorkflowVisual';
import { CustomSoftwareVisual } from './visuals/CustomSoftwareVisual';
import { ArrowRight, CheckCircle2, X, Sparkles, Compass } from 'lucide-react';

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
    // Map service to Project Starter allowed type
    let targetType = 'Website';
    if (service.id === 'mobile-development') targetType = 'Mobile App';
    else if (service.id === 'ai-automation') targetType = 'AI Automation';
    else if (service.id === 'custom-software') targetType = 'Custom Software';

    // Dispatch custom event so Project Starter selects this project type
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
    <section id="services" className="py-24 sm:py-36 relative scroll-mt-10 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-blue-600/10 via-indigo-600/10 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-blue-400 mb-3">
              {SERVICES_SECTION_INTRO.eyebrow}
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
              {SERVICES_SECTION_INTRO.heading}
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
              {SERVICES_SECTION_INTRO.supportingText}
            </p>
          </motion.div>
        </div>

        {/* 4 Premium Service Showcase Blocks */}
        <div className="space-y-20 sm:space-y-32">
          {SERVICES_DATA.map((service, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55 }}
                className={`grid lg:grid-cols-12 gap-10 lg:gap-14 items-center ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content Side */}
                <div
                  className={`lg:col-span-6 space-y-6 ${
                    isReversed ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  {/* Service Number & Category Header */}
                  <div className="flex items-center gap-2.5">
                    <span className="w-8 h-8 rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-400 font-mono text-xs font-bold flex items-center justify-center">
                      {service.serviceNumber || `0${index + 1}`}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                      {service.title}
                    </span>
                  </div>

                  {/* Outcome-focused Headline */}
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
                    {service.headline}
                  </h3>

                  {/* Clear Description */}
                  <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                    {service.shortDesc}
                  </p>

                  {/* Primary Outcome Badge */}
                  {service.primaryOutcome && (
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-blue-500/30 text-xs font-medium text-slate-200">
                      <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                      <span className="text-slate-400">Outcome:</span>
                      <span className="text-white font-semibold">{service.primaryOutcome}</span>
                    </div>
                  )}

                  {/* Deliverables / Examples */}
                  <div className="pt-1">
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                      What we can build:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {service.deliverables.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2.5 text-sm text-slate-200 bg-slate-900/70 border border-white/5 rounded-xl px-3.5 py-2.5 hover:border-blue-500/30 transition-colors"
                        >
                          <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <button
                      onClick={() => handleStartProject(service)}
                      className="px-6 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all duration-200 shadow-md shadow-blue-600/20 hover:shadow-blue-500/30 flex items-center gap-2 cursor-pointer hover:-translate-y-0.5"
                    >
                      <span>Start a Project</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() => setSelectedService(service)}
                      className="px-5 py-3.5 rounded-full bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white font-medium text-sm border border-white/10 hover:border-white/20 transition-all duration-200 cursor-pointer"
                    >
                      Details
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

      {/* Clean Service Details Modal */}
      <AnimatePresence>
        {selectedService && (
          <div 
            role="dialog"
            aria-modal="true"
            aria-labelledby="service-modal-title"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
            onClick={() => setSelectedService(null)}
          >
            <div 
              className="relative w-full max-w-xl bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 my-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                aria-label="Close service details"
                className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800/80 text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="space-y-2 pr-10">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-semibold">
                  <span>Service {selectedService.serviceNumber || '01'}</span>
                </div>
                <h3 id="service-modal-title" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {selectedService.title}
                </h3>
                <p className="text-sm font-medium text-blue-300">
                  {selectedService.headline}
                </p>
              </div>

              {/* Description */}
              <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80 space-y-1 text-sm">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  How this helps your business
                </div>
                <p className="text-slate-200 leading-relaxed font-normal pt-1">
                  {selectedService.fullDesc || selectedService.shortDesc}
                </p>
              </div>

              {/* Deliverables List */}
              <div className="space-y-2.5">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Example Deliverables
                </div>
                <div className="grid sm:grid-cols-2 gap-2">
                  {selectedService.deliverables.map((d, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-800/60 border border-white/5 text-xs text-slate-200"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Primary Outcome */}
              {selectedService.primaryOutcome && (
                <div className="p-3 rounded-xl bg-blue-950/30 border border-blue-500/20 text-xs text-blue-200 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-blue-400 shrink-0" />
                  <span><strong>Target Outcome:</strong> {selectedService.primaryOutcome}</span>
                </div>
              )}

              {/* Modal Actions */}
              <div className="pt-3 border-t border-slate-800/80 flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => {
                    const s = selectedService;
                    setSelectedService(null);
                    handleStartProject(s);
                  }}
                  className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white transition-colors shadow-lg shadow-blue-600/20 cursor-pointer"
                >
                  <span>Start a {selectedService.title} Project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setSelectedService(null)}
                  className="w-full sm:w-auto py-3 px-5 rounded-full text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
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
