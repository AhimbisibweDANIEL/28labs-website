import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SERVICES_DATA } from '../data/content';
import { ServiceItem } from '../types';
import { WebDevelopmentVisual } from './visuals/WebDevelopmentVisual';
import { MobileAppVisual } from './visuals/MobileAppVisual';
import { AIWorkflowVisual } from './visuals/AIWorkflowVisual';
import { CustomSoftwareVisual } from './visuals/CustomSoftwareVisual';
import { ArrowRight, CheckCircle2, X } from 'lucide-react';

interface ServicesProps {
  onOpenConsultation: (serviceTitle?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenConsultation }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

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
    <section id="services" className="py-24 sm:py-36 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 sm:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-blue-400 mb-3">
              Capabilities
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-5">
              What can we build for you?
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
              From your first website to a complete business platform, we build technology around your goals.
            </p>
          </motion.div>
        </div>

        {/* 4 Large Service Showcase Blocks */}
        <div className="space-y-20 sm:space-y-32">
          {SERVICES_DATA.map((service, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6 }}
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
                  <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wider uppercase">
                    {service.title}
                  </div>

                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
                    {service.headline || service.title}
                  </h3>

                  <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                    {service.shortDesc}
                  </p>

                  {/* Examples Pills / Bullet List */}
                  <div className="pt-2">
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                      Typical Solutions:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {service.deliverables.map((example, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2.5 text-sm text-slate-200 bg-slate-900/60 border border-white/5 rounded-xl px-3.5 py-2"
                        >
                          <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                          <span>{example}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-wrap items-center gap-4 pt-4">
                    <button
                      onClick={() => onOpenConsultation(service.title)}
                      className="px-6 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-all duration-200 shadow-md shadow-blue-600/20 hover:shadow-blue-500/30 flex items-center gap-2 cursor-pointer"
                    >
                      <span>{service.ctaLabel || `Explore ${service.title}`}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() => setSelectedService(service)}
                      className="px-5 py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white font-medium text-sm border border-white/10 hover:border-white/20 transition-all duration-200 cursor-pointer"
                    >
                      Learn More
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

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-2xl bg-slate-900 border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-800/80 text-slate-400 hover:text-white transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                  Service Details
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                  {selectedService.title}
                </h3>
              </div>

              <p className="text-slate-300 leading-relaxed text-base">
                {selectedService.fullDesc}
              </p>

              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-3">
                  What we deliver
                </h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {selectedService.deliverables.map((d, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-800/60 border border-white/5 text-sm text-slate-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    const title = selectedService.title;
                    setSelectedService(null);
                    onOpenConsultation(title);
                  }}
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-colors flex items-center justify-center gap-2"
                >
                  <span>Start a {selectedService.title} Project</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setSelectedService(null)}
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white font-medium text-sm transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
