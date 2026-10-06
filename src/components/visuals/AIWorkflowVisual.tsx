import React, { useState, useEffect } from 'react';
import { User, Sparkles, CheckCircle2, Bell, ArrowRight } from 'lucide-react';

export const AIWorkflowVisual: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    { label: 'Customer asks question', sub: '"Can I schedule an appointment for tomorrow?"', icon: User, color: 'text-[#0070f3]', bg: 'bg-[#0070f3]/5' },
    { label: 'AI checks schedule', sub: 'Instantly checks availability and prepares booking', icon: Sparkles, color: 'text-[#0070f3]', bg: 'bg-[#0070f3]/5' },
    { label: 'Task completed', sub: 'Appointment confirmed with zero wait time', icon: CheckCircle2, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { label: 'Team notified', sub: 'Details organized and logged for your staff', icon: Bell, color: 'text-[#0070f3]', bg: 'bg-[#0070f3]/5' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2400);
    return () => clearInterval(timer);
  }, [steps.length]);

  return (
    <div className="w-full rounded-2xl bg-white border border-[#eaeaea] p-5 space-y-4 shadow-[0_8px_30px_rgba(0,0,0,0.05)]">
      {/* Top indicator */}
      <div className="flex items-center justify-between border-b border-[#eaeaea] pb-3">
        <div className="flex items-center gap-1.5 text-[11px] font-medium text-[#333333]">
          <span className="text-black">Customer</span>
          <ArrowRight className="w-2.5 h-2.5 text-[#0070f3]" />
          <span className="text-[#0070f3]">AI</span>
          <ArrowRight className="w-2.5 h-2.5 text-[#0070f3]" />
          <span className="text-emerald-600">Task completed</span>
        </div>
        <span className="text-[10px] font-mono text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
          24/7 Automated
        </span>
      </div>

      {/* Steps */}
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
                  ? `${item.bg} border-[#d4d4d4] shadow-sm translate-x-1`
                  : isPast
                  ? 'bg-[#fafafa] border-[#eaeaea] text-[#888888]'
                  : 'bg-white border-[#eaeaea] text-[#a3a3a3]'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${isCurrent ? 'bg-white' : 'bg-[#fafafa]'}`}>
                  <Icon className={`w-4 h-4 ${isCurrent ? item.color : 'text-[#a3a3a3]'}`} />
                </div>
                <div>
                  <div className={`text-xs font-semibold ${isCurrent ? 'text-black' : 'text-[#666666]'}`}>
                    {item.label}
                  </div>
                  <div className="text-[10px] text-[#888888] line-clamp-1">
                    {item.sub}
                  </div>
                </div>
              </div>

              {isCurrent && (
                <span className="text-[10px] font-mono text-[#0070f3] animate-pulse shrink-0 ml-2">
                  Done
                </span>
              )}
            </div>
          );
        })}
      </div>

      <div className="pt-2 border-t border-[#eaeaea] flex items-center justify-between text-[11px] text-[#888888]">
        <span>No repetitive manual tasks</span>
        <span className="text-[#333333] font-medium">Automatic execution</span>
      </div>
    </div>
  );
};
