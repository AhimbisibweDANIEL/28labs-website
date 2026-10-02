import React, { useState, useEffect } from 'react';
import { Lightbulb, Palette, Code2, Rocket, ArrowRight, CheckCircle2, Sparkles, Smartphone, Layout, Bell } from 'lucide-react';

export const HeroProductVisual: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(0);

  const stages = [
    { id: 'idea', label: 'Idea', icon: Lightbulb, color: 'text-amber-400', bg: 'bg-amber-400/10', border: 'border-amber-400/30' },
    { id: 'design', label: 'Design', icon: Palette, color: 'text-cyan-400', bg: 'bg-cyan-400/10', border: 'border-cyan-400/30' },
    { id: 'build', label: 'Build', icon: Code2, color: 'text-indigo-400', bg: 'bg-indigo-400/10', border: 'border-indigo-400/30' },
    { id: 'launch', label: 'Launch', icon: Rocket, color: 'text-emerald-400', bg: 'bg-emerald-400/10', border: 'border-emerald-400/30' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % stages.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [stages.length]);

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Ambient background glow */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-500/20 via-cyan-500/15 to-purple-500/20 rounded-3xl blur-2xl opacity-75"></div>

      {/* Main Product Canvas */}
      <div className="relative rounded-3xl bg-slate-900/90 border border-slate-800/80 p-6 sm:p-7 shadow-2xl backdrop-blur-xl overflow-hidden space-y-6">
        
        {/* Stage Progression Bar */}
        <div className="grid grid-cols-4 gap-2 border-b border-slate-800/80 pb-4">
          {stages.map((stage, idx) => {
            const Icon = stage.icon;
            const isActive = activeStage === idx;
            const isCompleted = activeStage > idx;

            return (
              <button
                key={stage.id}
                onClick={() => setActiveStage(idx)}
                className={`py-2 px-2.5 rounded-xl text-center transition-all cursor-pointer flex flex-col items-center gap-1.5 ${
                  isActive
                    ? `${stage.bg} border ${stage.border} shadow-lg shadow-indigo-500/10`
                    : isCompleted
                    ? 'bg-slate-950/60 border border-slate-800 text-slate-300'
                    : 'bg-transparent text-slate-500 border border-transparent'
                }`}
              >
                <div className="flex items-center justify-center">
                  <Icon className={`w-4 h-4 ${isActive ? stage.color : isCompleted ? 'text-slate-300' : 'text-slate-500'}`} />
                </div>
                <span className={`text-[11px] font-semibold tracking-tight ${isActive ? 'text-white' : 'text-slate-400'}`}>
                  {stage.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Product Visual Display */}
        <div className="relative rounded-2xl bg-slate-950 border border-slate-800 p-5 sm:p-6 min-h-[260px] flex flex-col justify-between overflow-hidden">
          
          {/* Subtle decorative grid lines */}
          <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>

          {activeStage === 0 && (
            /* IDEA STAGE: Defining the product vision */
            <div className="space-y-4 animate-in fade-in zoom-in-95 duration-500 relative z-10">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 flex items-center gap-1.5">
                  <Lightbulb className="w-3.5 h-3.5" />
                  <span>Stage 1: Business Vision</span>
                </span>
                <span className="text-[11px] text-slate-400 font-mono">Clarity First</span>
              </div>

              <div className="space-y-2 bg-slate-900/80 p-4 rounded-xl border border-slate-800">
                <h4 className="text-sm font-bold text-white">What problem are we solving?</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  "Our business needs a seamless customer portal where clients can book, view status, and pay online."
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-300 flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Clear goals</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-300 flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Simple scope</span>
                </div>
              </div>
            </div>
          )}

          {activeStage === 1 && (
            /* DESIGN STAGE: Wireframing & user experience */
            <div className="space-y-4 animate-in fade-in zoom-in-95 duration-500 relative z-10">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 flex items-center gap-1.5">
                  <Palette className="w-3.5 h-3.5" />
                  <span>Stage 2: Interface Design</span>
                </span>
                <span className="text-[11px] text-slate-400 font-mono">User-Centered</span>
              </div>

              {/* Mockup Preview Card */}
              <div className="bg-slate-900/90 rounded-xl border border-slate-800 p-3 space-y-2.5">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-[11px] text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70 inline-block"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70 inline-block"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70 inline-block"></span>
                  </div>
                  <span>yourbusiness.com/preview</span>
                </div>

                <div className="space-y-2 pt-1">
                  <div className="h-4 bg-gradient-to-r from-cyan-500/30 to-indigo-500/30 rounded-md w-3/4"></div>
                  <div className="h-2 bg-slate-800 rounded w-full"></div>
                  <div className="h-2 bg-slate-800 rounded w-2/3"></div>
                </div>

                <div className="pt-2 flex gap-2">
                  <div className="px-3 py-1 rounded-md bg-cyan-500 text-slate-950 text-[10px] font-bold">Book Now</div>
                  <div className="px-3 py-1 rounded-md bg-slate-800 text-slate-300 text-[10px]">Learn More</div>
                </div>
              </div>
            </div>
          )}

          {activeStage === 2 && (
            /* BUILD STAGE: Functional software creation */
            <div className="space-y-4 animate-in fade-in zoom-in-95 duration-500 relative z-10">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-400/10 border border-indigo-400/30 text-indigo-300 flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5" />
                  <span>Stage 3: Building the Product</span>
                </span>
                <span className="text-[11px] text-emerald-400 font-mono">In Progress</span>
              </div>

              <div className="space-y-2.5">
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-white font-medium">
                    <Layout className="w-4 h-4 text-cyan-400" />
                    <span>Responsive Website & Portal</span>
                  </div>
                  <span className="text-emerald-400 font-semibold text-[11px]">Ready</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-white font-medium">
                    <Smartphone className="w-4 h-4 text-indigo-400" />
                    <span>Customer Mobile Experience</span>
                  </div>
                  <span className="text-emerald-400 font-semibold text-[11px]">Connected</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-white font-medium">
                    <Sparkles className="w-4 h-4 text-purple-400" />
                    <span>AI Assistant Integration</span>
                  </div>
                  <span className="text-emerald-400 font-semibold text-[11px]">Active</span>
                </div>
              </div>
            </div>
          )}

          {activeStage === 3 && (
            /* LAUNCH STAGE: Ready for live customers */
            <div className="space-y-4 animate-in fade-in zoom-in-95 duration-500 relative z-10">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-400/10 border border-emerald-400/30 text-emerald-300 flex items-center gap-1.5">
                  <Rocket className="w-3.5 h-3.5" />
                  <span>Stage 4: Live & Growing</span>
                </span>
                <span className="text-[11px] text-emerald-400 font-mono font-bold">100% ONLINE</span>
              </div>

              <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30 space-y-2 text-center">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-sm font-bold text-white">Your product is live.</h4>
                <p className="text-xs text-slate-300">
                  Ready to welcome customers, process orders, and support your business every single day.
                </p>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                <span>Ongoing support & upgrades</span>
                <span className="text-cyan-400 font-medium">Always with you</span>
              </div>
            </div>
          )}

          {/* Micro Footer Indicator */}
          <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
            <span>Customer-focused delivery</span>
            <div className="flex items-center gap-1 text-slate-300">
              <span>{stages[activeStage].label}</span>
              <ArrowRight className="w-3 h-3 text-cyan-400" />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
