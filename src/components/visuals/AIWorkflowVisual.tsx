import React, { useState, useEffect } from 'react';
import { User, Sparkles, CheckCircle2, Bell, ArrowRight } from 'lucide-react';

export const AIWorkflowVisual: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    { label: 'Customer asks question', sub: '"Can I schedule an appointment for tomorrow?"', icon: User, color: 'text-blue-400', bg: 'bg-blue-500/10' },
    { label: 'AI checks schedule', sub: 'Instantly checks availability and prepares booking', icon: Sparkles, color: 'text-purple-400', bg: 'bg-purple-500/10' },
    { label: 'Task completed', sub: 'Appointment confirmed with zero wait time', icon: CheckCircle2, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
    { label: 'Team notified', sub: 'Details organized and logged for your staff', icon: Bell, color: 'text-cyan-400', bg: 'bg-cyan-500/10' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2400);
    return () => clearInterval(timer);
  }, [steps.length]);

  return (
    <div className="w-full rounded-2xl bg-slate-950 border border-slate-800 p-5 space-y-4 shadow-xl">
      {/* Top Simple Story Indicator */}
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
        <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-300">
          <span className="text-white">Customer</span>
          <ArrowRight className="w-2.5 h-2.5 text-purple-400" />
          <span className="text-purple-400">AI</span>
          <ArrowRight className="w-2.5 h-2.5 text-purple-400" />
          <span className="text-emerald-400">Task completed</span>
        </div>
        <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
          24/7 Automated
        </span>
      </div>

      {/* Step Sequence Flow */}
      <div className="space-y-2.5">
        {steps.map((item, idx) => {
          const Icon = item.icon;
          const isCurrent = activeStep === idx;
          const isPast = activeStep > idx;

          return (
            <div
              key={idx}
              className={`p-3 rounded-xl border transition-all duration-300 flex items-center justify-between ${
                isCurrent
                  ? `${item.bg} border-purple-500/50 shadow-md translate-x-1`
                  : isPast
                  ? 'bg-slate-900/40 border-slate-800 text-slate-400'
                  : 'bg-slate-950 border-slate-850 text-slate-500'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${isCurrent ? 'bg-slate-900' : 'bg-slate-950'}`}>
                  <Icon className={`w-4 h-4 ${isCurrent ? item.color : 'text-slate-500'}`} />
                </div>
                <div>
                  <div className={`text-xs font-bold ${isCurrent ? 'text-white' : 'text-slate-300'}`}>
                    {item.label}
                  </div>
                  <div className="text-[10px] text-slate-400 line-clamp-1">
                    {item.sub}
                  </div>
                </div>
              </div>

              {isCurrent && (
                <span className="text-[10px] font-mono text-purple-400 animate-pulse shrink-0 ml-2">
                  Done
                </span>
              )}
            </div>
          );
        })}
      </div>

      <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
        <span>No repetitive manual tasks</span>
        <span className="text-slate-200 font-medium">Automatic execution</span>
      </div>
    </div>
  );
};
