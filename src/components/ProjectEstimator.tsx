import React, { useState } from 'react';
import { EstimatorState } from '../types';
import { Calculator, Check, ArrowRight, Zap, Clock, ShieldCheck, Cpu, Code2, Sparkles, Layers } from 'lucide-react';

interface EstimatorProps {
  onOpenConsultationWithScope: (summary: string) => void;
}

export const ProjectEstimator: React.FC<EstimatorProps> = ({ onOpenConsultationWithScope }) => {
  const [state, setState] = useState<EstimatorState>({
    projectType: 'web',
    scopeLevel: 'mvp',
    features: ['auth', 'database', 'responsive-ui'],
    timelinePreference: 'standard',
    teamSize: 'lean'
  });

  const availableFeatures = [
    { id: 'auth', name: 'Role-Based Authentication & SSO', complexity: 1 },
    { id: 'database', name: 'PostgreSQL / Vector DB Architecture', complexity: 1 },
    { id: 'responsive-ui', name: 'Pixel-Perfect Modern UI/UX', complexity: 1 },
    { id: 'payments', name: 'Stripe Payments / Subscription Engine', complexity: 2 },
    { id: 'custom-ai', name: 'Custom LLM / Gemini RAG Reasoning Engine', complexity: 3 },
    { id: 'realtime', name: 'Real-time WebSockets & Live Sync', complexity: 2 },
    { id: 'analytics', name: 'Custom Analytics & Admin Dashboard', complexity: 2 },
    { id: 'cms', name: 'Headless CMS Integration', complexity: 1 },
    { id: 'mobile-app', name: 'Cross-Platform iOS & Android Native Mobile', complexity: 3 },
  ];

  const toggleFeature = (id: string) => {
    setState((prev) => {
      if (prev.features.includes(id)) {
        return { ...prev, features: prev.features.filter((f) => f !== id) };
      } else {
        return { ...prev, features: [...prev.features, id] };
      }
    });
  };

  // Calculation Logic
  const calculateEstimate = () => {
    let baseBudget = 8000;
    let baseWeeks = 3;

    // Type multiplier
    if (state.projectType === 'mobile') {
      baseBudget += 4000;
      baseWeeks += 1;
    } else if (state.projectType === 'ai') {
      baseBudget += 6000;
      baseWeeks += 2;
    } else if (state.projectType === 'fullstack') {
      baseBudget += 9000;
      baseWeeks += 3;
    }

    // Scope multiplier
    if (state.scopeLevel === 'growth') {
      baseBudget *= 1.4;
      baseWeeks += 2;
    } else if (state.scopeLevel === 'enterprise') {
      baseBudget *= 2.2;
      baseWeeks += 4;
    }

    // Features addition
    const featureCount = state.features.length;
    baseBudget += featureCount * 1500;
    if (featureCount > 5) baseWeeks += 1;

    // Timeline modifier
    if (state.timelinePreference === 'express') {
      baseBudget *= 1.2; // Express delivery sprint
      baseWeeks = Math.max(2, Math.round(baseWeeks * 0.75));
    }

    const minBudget = Math.round(baseBudget * 0.9 / 1000) * 1000;
    const maxBudget = Math.round(baseBudget * 1.15 / 1000) * 1000;

    return {
      weeks: Math.round(baseWeeks),
      minBudget,
      maxBudget,
      team: state.teamSize === 'dedicated' ? '1 Lead Architect + 2 Senior Engineers' : '1 Senior Architect + 1 Fullstack Engineer'
    };
  };

  const estimate = calculateEstimate();

  const handleRequestProposal = () => {
    const summary = `Estimated Scope: ${state.projectType.toUpperCase()} (${state.scopeLevel.toUpperCase()}) | Features: ${state.features.length} selected | Timeline: ~${estimate.weeks} Weeks | Budget Est: $${estimate.minBudget.toLocaleString()} - $${estimate.maxBudget.toLocaleString()}`;
    onOpenConsultationWithScope(summary);
  };

  return (
    <section id="estimator" className="py-24 relative bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/80 border border-indigo-500/30 text-indigo-300 text-xs font-semibold">
            <Calculator className="w-3.5 h-3.5 text-cyan-400" />
            <span>Interactive Scope Calculator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Estimate Your Project <span className="text-gradient-cyan">Sprint & Budget</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Configure your product requirements below for an instant, transparent sprint timeline and estimated budget breakdown.
          </p>
        </div>

        {/* Calculator Main Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column (8 Cols) */}
          <div className="lg:col-span-7 space-y-8 glass-card p-6 sm:p-8 rounded-2xl border border-slate-800">
            
            {/* Step 1: Project Type */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-indigo-400 flex items-center gap-2">
                <Code2 className="w-4 h-4" /> 1. Primary Product Type
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  { id: 'web', label: 'Web Application', icon: Code2 },
                  { id: 'mobile', label: 'Mobile App', icon: Zap },
                  { id: 'ai', label: 'AI & LLM Engine', icon: Cpu },
                  { id: 'fullstack', label: 'Full Stack + AI', icon: Sparkles }
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setState({ ...state, projectType: item.id as any })}
                    className={`p-3.5 rounded-xl text-xs font-bold text-center transition-all cursor-pointer flex flex-col items-center gap-2 border ${
                      state.projectType === item.id
                        ? 'bg-indigo-600/30 text-white border-indigo-500 shadow-lg shadow-indigo-500/20'
                        : 'bg-slate-900/80 text-slate-400 border-slate-800 hover:text-slate-200 hover:border-slate-700'
                    }`}
                  >
                    <item.icon className="w-4 h-4 text-cyan-400" />
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Scope Tier */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-indigo-400 flex items-center gap-2">
                <Layers className="w-4 h-4" /> 2. Scope & Maturity Level
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { id: 'mvp', title: 'Lean MVP', desc: 'Core product features to launch fast & validate' },
                  { id: 'growth', title: 'Growth Build', desc: 'Multi-feature platform for scaling traffic' },
                  { id: 'enterprise', title: 'Enterprise Suite', desc: 'Custom microservices & security hardening' }
                ].map((tier) => (
                  <button
                    key={tier.id}
                    type="button"
                    onClick={() => setState({ ...state, scopeLevel: tier.id as any })}
                    className={`p-3.5 rounded-xl text-left transition-all cursor-pointer border ${
                      state.scopeLevel === tier.id
                        ? 'bg-indigo-600/30 border-indigo-500 text-white shadow-lg shadow-indigo-500/20'
                        : 'bg-slate-900/80 text-slate-400 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="text-xs font-bold text-white">{tier.title}</div>
                    <div className="text-[10px] text-slate-400 mt-1 leading-tight">{tier.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Required Features */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-indigo-400 flex items-center gap-2">
                <Sparkles className="w-4 h-4" /> 3. Select Key Modules & Features
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {availableFeatures.map((feat) => {
                  const isSelected = state.features.includes(feat.id);
                  return (
                    <button
                      key={feat.id}
                      type="button"
                      onClick={() => toggleFeature(feat.id)}
                      className={`p-3 rounded-xl text-xs font-medium text-left flex items-center justify-between transition-all cursor-pointer border ${
                        isSelected
                          ? 'bg-slate-900 text-white border-cyan-500/60 shadow-md'
                          : 'bg-slate-950/60 text-slate-400 border-slate-800/80 hover:text-slate-200'
                      }`}
                    >
                      <span className="truncate pr-2">{feat.name}</span>
                      <div
                        className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 border ${
                          isSelected
                            ? 'bg-cyan-500 border-cyan-400 text-slate-950'
                            : 'bg-slate-900 border-slate-700 text-transparent'
                        }`}
                      >
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Speed Preference */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-indigo-400 flex items-center gap-2">
                <Clock className="w-4 h-4" /> 4. Delivery Speed Preference
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setState({ ...state, timelinePreference: 'standard' })}
                  className={`p-3 rounded-xl text-xs font-bold text-center border transition-all cursor-pointer ${
                    state.timelinePreference === 'standard'
                      ? 'bg-slate-800 border-slate-600 text-white'
                      : 'bg-slate-950/60 border-slate-800 text-slate-400'
                  }`}
                >
                  Standard Sprint Velocity
                </button>
                <button
                  type="button"
                  onClick={() => setState({ ...state, timelinePreference: 'express' })}
                  className={`p-3 rounded-xl text-xs font-bold text-center border transition-all cursor-pointer ${
                    state.timelinePreference === 'express'
                      ? 'bg-cyan-950 border-cyan-500 text-cyan-300'
                      : 'bg-slate-950/60 border-slate-800 text-slate-400'
                  }`}
                >
                  Express Sprint (+25% Faster Delivery)
                </button>
              </div>
            </div>

          </div>

          {/* Estimate Summary Box (5 Cols) */}
          <div className="lg:col-span-5 sticky top-28 space-y-6">
            <div className="relative group">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-indigo-500/30 to-cyan-500/30 blur-xl opacity-80"></div>
              
              <div className="relative rounded-2xl bg-slate-950 border border-slate-800 p-6 sm:p-8 space-y-6 shadow-2xl">
                
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-cyan-400" />
                    <h3 className="text-lg font-bold text-white">Estimated Summary</h3>
                  </div>
                  <span className="px-2.5 py-1 rounded-md bg-emerald-950 text-emerald-400 border border-emerald-500/30 text-[11px] font-mono font-bold">
                    FIXED PRICE GUARANTEE
                  </span>
                </div>

                {/* Estimate Numbers */}
                <div className="space-y-4">
                  
                  {/* Budget */}
                  <div>
                    <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Estimated Budget Range</span>
                    <div className="text-3xl sm:text-4xl font-extrabold text-white mt-1 bg-gradient-to-r from-white via-indigo-200 to-cyan-300 bg-clip-text text-transparent">
                      ${estimate.minBudget.toLocaleString()} – ${estimate.maxBudget.toLocaleString()}
                    </div>
                  </div>

                  {/* Timeline */}
                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <div className="bg-slate-900/90 p-3.5 rounded-xl border border-slate-800">
                      <span className="text-[11px] text-slate-400 block font-medium">Estimated Delivery</span>
                      <span className="text-lg font-bold text-cyan-400 flex items-center gap-1 mt-0.5">
                        <Clock className="w-4 h-4" /> ~{estimate.weeks} Weeks
                      </span>
                    </div>

                    <div className="bg-slate-900/90 p-3.5 rounded-xl border border-slate-800">
                      <span className="text-[11px] text-slate-400 block font-medium">Selected Features</span>
                      <span className="text-lg font-bold text-indigo-400 mt-0.5 block">
                        {state.features.length} Modules
                      </span>
                    </div>
                  </div>

                  {/* Team allocation */}
                  <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800/80 text-xs text-slate-300 space-y-1">
                    <span className="text-slate-400 font-semibold block">Team Allocation:</span>
                    <span>{estimate.team}</span>
                  </div>

                </div>

                {/* Guaranteed inclusions */}
                <div className="space-y-2 pt-2 border-t border-slate-800 text-xs text-slate-400">
                  <div className="flex items-center gap-2 text-slate-300">
                    <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Includes 100% IP & Source Code Transfer</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>30-Day Free Post-Launch Warranty</span>
                  </div>
                </div>

                {/* Proposal Conversion Button */}
                <button
                  onClick={handleRequestProposal}
                  className="w-full py-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 transition-all duration-300 shadow-xl shadow-indigo-500/25 flex items-center justify-center gap-2 cursor-pointer group"
                >
                  <span>Request Proposal With This Scope</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <p className="text-[11px] text-center text-slate-500">
                  No commitment required. We’ll review your scope and respond with a formal technical architecture brief in 24 hours.
                </p>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
