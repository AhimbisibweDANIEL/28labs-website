import React, { useState } from 'react';
import { PROCESS_STEPS } from '../data/content';
import { Compass, Code2, ShieldCheck, Rocket, CheckCircle2, Clock, ArrowRight, Layers } from 'lucide-react';

interface ProcessProps {
  onOpenConsultation: () => void;
}

export const Process: React.FC<ProcessProps> = ({ onOpenConsultation }) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const getStepIcon = (icon: string) => {
    switch (icon) {
      case 'Compass':
        return <Compass className="w-5 h-5 text-indigo-400" />;
      case 'Code2':
        return <Code2 className="w-5 h-5 text-cyan-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      case 'Rocket':
        return <Rocket className="w-5 h-5 text-purple-400" />;
      default:
        return <Clock className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <section id="process" className="py-24 relative bg-slate-950/80 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/80 border border-indigo-500/30 text-indigo-300 text-xs font-semibold">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span>Delivery Framework</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            How We Work: <span className="text-gradient-cyan">The 28labs Delivery Engine</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            A transparent 4-step execution framework designed to eliminate scope creep, guarantee velocity, and deliver production-ready software on schedule.
          </p>
        </div>

        {/* Step Selector Pills */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {PROCESS_STEPS.map((step, idx) => (
            <button
              key={step.stepNumber}
              onClick={() => setActiveStep(idx)}
              className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                activeStep === idx
                  ? 'bg-indigo-600/30 border-indigo-500 text-white shadow-xl shadow-indigo-500/20'
                  : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl font-extrabold text-indigo-400">{step.stepNumber}</span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-950 text-cyan-300 border border-slate-800">
                  {step.duration}
                </span>
              </div>
              <div className="mt-4 text-sm font-bold text-white">{step.title}</div>
            </button>
          ))}
        </div>

        {/* Active Step Inspector Box */}
        <div className="glass-card rounded-2xl p-6 sm:p-10 border border-slate-800 relative overflow-hidden">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Step Left Info */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center">
                  {getStepIcon(PROCESS_STEPS[activeStep].icon)}
                </div>
                <div>
                  <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">
                    Phase {PROCESS_STEPS[activeStep].stepNumber} // {PROCESS_STEPS[activeStep].duration}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {PROCESS_STEPS[activeStep].title}
                  </h3>
                </div>
              </div>

              <p className="text-slate-300 text-base leading-relaxed">
                {PROCESS_STEPS[activeStep].description}
              </p>

              {/* Deliverables Checklist */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Concrete Phase Deliverables
                </h4>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {PROCESS_STEPS[activeStep].deliverables.map((deliv, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Step Right Callout */}
            <div className="lg:col-span-5 bg-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono text-cyan-400 uppercase">Guaranteed Outcome</span>
                <h4 className="text-lg font-bold text-white">
                  {PROCESS_STEPS[activeStep].subtitle}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  We enforce automated CI/CD staging builds so you never have to guess what was built. Review live progress every Friday.
                </p>
              </div>

              <button
                onClick={onOpenConsultation}
                className="w-full py-3.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-indigo-500/20"
              >
                <span>Book Sprint Discovery Call</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
