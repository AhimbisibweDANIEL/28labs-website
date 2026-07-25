import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/content';
import { CaseStudy } from '../types';
import { ExternalLink, ArrowRight, X, CheckCircle2, Award, Sparkles, Building2 } from 'lucide-react';

interface CaseStudiesProps {
  onOpenConsultation: (topic?: string) => void;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ onOpenConsultation }) => {
  const [filter, setFilter] = useState<'all' | 'web' | 'mobile' | 'ai' | 'enterprise'>('all');
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);

  const filteredStudies = filter === 'all'
    ? CASE_STUDIES
    : CASE_STUDIES.filter((cs) => cs.category === filter);

  return (
    <section id="case-studies" className="py-24 relative bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-500/30 text-indigo-300 text-xs font-semibold">
              <Award className="w-3.5 h-3.5 text-cyan-400" />
              <span>Proven Track Record</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Production Case Studies & <br className="hidden sm:inline" />
              <span className="text-gradient-cyan">Measurable ROI.</span>
            </h2>
            <p className="text-slate-300 text-base">
              Explore how we helped mid-market operators, VC-backed startups, and enterprise teams ship scalable systems.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'ai', label: 'AI & LLM Engines' },
              { id: 'mobile', label: 'Mobile Apps' },
              { id: 'web', label: 'Web Platforms' },
              { id: 'enterprise', label: 'Enterprise Systems' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                  filter === tab.id
                    ? 'bg-indigo-600 text-white border-indigo-500 shadow-md'
                    : 'bg-slate-900/90 text-slate-400 border-slate-800 hover:text-white hover:border-slate-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredStudies.map((study) => (
            <div
              key={study.id}
              className="glass-card glass-card-hover rounded-2xl p-7 border border-slate-800 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Top Accent Gradient Bar */}
              <div className={`h-1.5 -mx-7 -mt-7 mb-6 bg-gradient-to-r ${study.imageAccent}`}></div>

              <div className="space-y-6">
                
                {/* Meta Row */}
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-indigo-400 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-cyan-400" />
                    {study.industry}
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300 font-mono">
                    {study.clientName}
                  </span>
                </div>

                {/* Title & Summary */}
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-slate-300 text-sm mt-3 leading-relaxed">
                    {study.summary}
                  </p>
                </div>

                {/* Impact Metrics Grid */}
                <div className="grid grid-cols-3 gap-3 bg-slate-950/80 p-4 rounded-xl border border-slate-800/80">
                  {study.metrics.map((m, idx) => (
                    <div key={idx} className="space-y-0.5">
                      <div className="text-xl font-extrabold text-white bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent">
                        {m.value}
                      </div>
                      <div className="text-[10px] font-bold text-indigo-300 uppercase tracking-tight truncate">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {study.techUsed.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-slate-900 text-[11px] font-mono text-slate-400 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

              {/* Bottom Actions */}
              <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between">
                <button
                  onClick={() => setSelectedStudy(study)}
                  className="text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Read Full Case Study</span>
                  <ExternalLink className="w-3.5 h-3.5 text-indigo-400" />
                </button>

                <button
                  onClick={() => onOpenConsultation(`Case Study Inquiry: ${study.title}`)}
                  className="text-xs font-bold text-indigo-400 hover:text-indigo-300 flex items-center gap-1 cursor-pointer"
                >
                  <span>Build Similar System</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Case Study Detail Modal */}
      {selectedStudy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl relative">
            
            {/* Header */}
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">{selectedStudy.industry}</span>
                <h3 className="text-2xl font-bold text-white mt-1">{selectedStudy.title}</h3>
              </div>
              <button
                onClick={() => setSelectedStudy(null)}
                className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-slate-950 p-5 rounded-xl border border-slate-800">
              {selectedStudy.metrics.map((m, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="text-2xl font-extrabold text-cyan-400">{m.value}</div>
                  <div className="text-xs font-bold text-white">{m.label}</div>
                  <div className="text-[11px] text-slate-400">{m.description}</div>
                </div>
              ))}
            </div>

            {/* Challenge & Solution */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2 bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
                <h4 className="text-sm font-bold text-rose-400">The Challenge</h4>
                <p className="text-xs text-slate-300 leading-relaxed">{selectedStudy.challenge}</p>
              </div>
              <div className="space-y-2 bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
                <h4 className="text-sm font-bold text-emerald-400">The 28labs Solution</h4>
                <p className="text-xs text-slate-300 leading-relaxed">{selectedStudy.solution}</p>
              </div>
            </div>

            {/* Footer CTAs */}
            <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
              <button
                onClick={() => setSelectedStudy(null)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-400 hover:text-white"
              >
                Close
              </button>

              <button
                onClick={() => {
                  const title = selectedStudy.title;
                  setSelectedStudy(null);
                  onOpenConsultation(`Case Study: ${title}`);
                }}
                className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-indigo-600 to-cyan-500 flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-indigo-500/20"
              >
                <span>Discuss Similar Implementation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
