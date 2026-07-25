import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/content';
import { ServiceItem } from '../types';
import { Smartphone, Layout, Cpu, Zap, ArrowRight, CheckCircle2, Clock, Sparkles, X, Layers, Code } from 'lucide-react';

interface ServicesProps {
  onOpenConsultation: (serviceTitle?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenConsultation }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-indigo-400" />;
      case 'Layout':
        return <Layout className="w-6 h-6 text-cyan-400" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-purple-400" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-amber-400" />;
      default:
        return <Code className="w-6 h-6 text-indigo-400" />;
    }
  };

  return (
    <section id="services" className="py-24 relative bg-slate-950/60 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-500/30 text-indigo-300 text-xs font-semibold">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span>Core Engineering Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Production Software & AI Systems <br className="hidden sm:inline" />
            <span className="text-gradient-cyan">Engineered For Impact.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            We don't sell hourly fluff or pitch decks. We build, test, and ship modern software architectures and AI engines with guaranteed timelines.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="glass-card glass-card-hover rounded-2xl p-8 border border-slate-800/80 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Top Card Content */}
              <div className="space-y-6">
                
                {/* Header Row */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-indigo-500/50 transition-colors shadow-md">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300">
                    <Clock className="w-3 h-3 text-cyan-400" />
                    {service.typicalTimeline}
                  </span>
                </div>

                {/* Title & Short Description */}
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-300 text-sm mt-3 leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Deliverables List (3 highlights) */}
                <ul className="space-y-2.5 pt-2">
                  {service.deliverables.slice(0, 3).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {service.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-slate-900/90 text-[11px] font-mono text-slate-400 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

              {/* Bottom Card Actions */}
              <div className="pt-8 mt-6 border-t border-slate-800/80 flex items-center justify-between">
                <button
                  onClick={() => setSelectedService(service)}
                  className="text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <span>Full Tech Specs & Deliverables</span>
                  <ArrowRight className="w-3.5 h-3.5 text-indigo-400" />
                </button>

                <button
                  onClick={() => onOpenConsultation(service.title)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-indigo-600/30 hover:bg-indigo-600 border border-indigo-500/40 hover:border-indigo-500 transition-all cursor-pointer flex items-center gap-1"
                >
                  <span>Build This</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl relative">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center border border-slate-700">
                  {getIcon(selectedService.iconName)}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{selectedService.title}</h3>
                  <p className="text-xs text-indigo-400 font-semibold">{selectedService.typicalTimeline} Typical Sprint</p>
                </div>
              </div>

              <button
                onClick={() => setSelectedService(null)}
                className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Description */}
            <p className="text-slate-300 text-sm leading-relaxed">
              {selectedService.fullDesc}
            </p>

            {/* Complete Deliverables */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400" /> Key Deliverables & System Architecture
              </h4>
              <ul className="space-y-2 bg-slate-950 p-4 rounded-xl border border-slate-800/80">
                {selectedService.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Architecture Benchmarks */}
            <div className="space-y-2">
              <h4 className="text-sm font-bold text-white">Engineering Standards & Highlights</h4>
              <ul className="space-y-1.5 text-xs text-slate-400">
                {selectedService.highlights.map((h, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack List */}
            <div className="space-y-2">
              <h4 className="text-sm font-bold text-white">Primary Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {selectedService.techStack.map((t) => (
                  <span key={t} className="px-3 py-1 rounded-lg bg-slate-800 text-xs font-mono text-indigo-300 border border-slate-700">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer Action */}
            <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
              <button
                onClick={() => setSelectedService(null)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-400 hover:text-white"
              >
                Close
              </button>

              <button
                onClick={() => {
                  const title = selectedService.title;
                  setSelectedService(null);
                  onOpenConsultation(title);
                }}
                className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-indigo-500/20"
              >
                <span>Request Custom Proposal for {selectedService.title}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
