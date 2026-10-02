import React, { useState, useEffect } from 'react';
import { User, Sparkles, CheckCircle2, Bell, ArrowRight } from 'lucide-react';

export const AIWorkflowVisual: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    { label: 'Customer asks question', sub: '"What are your business hours?"', icon: User, color: 'text-blue-400', bg: 'bg-blue-500/10' },
    { label: 'AI Assistant responds', sub: 'Answers immediately from your data', icon: Sparkles, color: 'text-purple-400', bg: 'bg-purple-500/10' },
    { label: 'Task completed', sub: 'Information delivered to customer', icon: CheckCircle2, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
    { label: 'Business notified', sub: 'Summary logged for your team', icon: Bell, color: 'text-cyan-400', bg: 'bg-cyan-500/10' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2400);
    return () => clearInterval(timer);
  }, [steps.length]);

  return (
    <div className="w-full rounded-2xl bg-slate-950 border border-slate-800 p-5 space-y-5 shadow-xl">
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
        <span className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-purple-400" />
          <span>Automated Business Workflow</span>
        </span>
        <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-500/30">
          Continuous
        </span>
      </div>

      {/* Step Sequence Flow */}
      <div className="space-y-3">
        {steps.map((item, idx) => {
          const Icon = item.icon;
          const isCurrent = activeStep === idx;
          const isPast = activeStep > idx;

          return (
            <div
              key={idx}
              className={`p-3 rounded-xl border transition-all duration-400 flex items-center justify-between ${
                isCurrent
                  ? `${item.bg} border-indigo-500/50 shadow-md translate-x-1`
                  : isPast
                  ? 'bg-slate-900/40 border-slate-800 text-slate-400'
                  : 'bg-slate-950 border-slate-850 text-slate-500'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${isCurrent ? 'bg-slate-900' : 'bg-slate-950'}`}>
                  <Icon className={`w-4 h-4 ${isCurrent ? item.color : 'text-slate-500'}`} />
                </div>
                <div>
                  <div className={`text-xs font-bold ${isCurrent ? 'text-white' : 'text-slate-400'}`}>
                    {item.label}
                  </div>
                  <div className="text-[10px] text-slate-400">
                    {item.sub}
                  </div>
                </div>
              </div>

              {isCurrent && (
                <span className="text-[10px] font-mono text-cyan-400 animate-pulse">
                  Processing...
                </span>
              )}
            </div>
          );
        })}
      </div>

      <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
        <span>No manual repetitive work required</span>
        <span className="text-white font-medium">Automatic 24/7</span>
      </div>
    </div>
  );
};
