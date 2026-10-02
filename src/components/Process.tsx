import React from 'react';
import { motion } from 'motion/react';
import { HOW_IT_WORKS_STEPS } from '../data/content';
import { ArrowRight, Lightbulb, Palette, Code2, Rocket } from 'lucide-react';

interface ProcessProps {
  onOpenConsultation: () => void;
}

export const Process: React.FC<ProcessProps> = ({ onOpenConsultation }) => {
  const getStageIcon = (stepNumber: string) => {
    switch (stepNumber) {
      case '01':
        return <Lightbulb className="w-6 h-6 text-blue-400" />;
      case '02':
        return <Palette className="w-6 h-6 text-indigo-400" />;
      case '03':
        return <Code2 className="w-6 h-6 text-cyan-400" />;
      case '04':
        return <Rocket className="w-6 h-6 text-emerald-400" />;
      default:
        return <Lightbulb className="w-6 h-6 text-blue-400" />;
    }
  };

  return (
    <section id="process" className="py-24 sm:py-32 relative bg-slate-950/70 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-blue-400 mb-3">
              How It Works
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-5">
              From idea to launch.
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl mx-auto">
              A smooth, transparent journey where your vision turns into a dependable, high-impact digital product.
            </p>
          </motion.div>
        </div>

        {/* 4 Large Stages - Horizontal grid on desktop, smooth vertical stack on mobile */}
        <div className="relative">
          {/* Subtle connection bar across steps on desktop */}
          <div className="hidden lg:block absolute top-1/2 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-blue-500/20 via-indigo-500/30 to-emerald-500/20 -translate-y-12 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {HOW_IT_WORKS_STEPS.map((stage, idx) => (
              <motion.div
                key={stage.stepNumber}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="group relative rounded-3xl bg-slate-900/60 backdrop-blur-sm border border-white/10 hover:border-blue-500/30 p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1"
              >
                <div>
                  {/* Step number & Icon header */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-3xl sm:text-4xl font-black text-slate-500 group-hover:text-blue-400 transition-colors font-mono">
                      {stage.stepNumber}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-slate-800/80 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-blue-500/30 transition-all duration-300 shadow-md">
                      {getStageIcon(stage.stepNumber)}
                    </div>
                  </div>

                  {/* Stage Title */}
                  <h3 className="text-xl font-bold text-white mb-2 leading-snug">
                    {stage.title}
                  </h3>

                  {/* Subtitle */}
                  {stage.subtitle && (
                    <p className="text-xs font-semibold uppercase tracking-wider text-blue-400/90 mb-3">
                      {stage.subtitle}
                    </p>
                  )}

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
                    {stage.description}
                  </p>
                </div>

                <div className="pt-8 mt-6 border-t border-white/5 flex items-center gap-2 text-xs font-medium text-slate-400 group-hover:text-blue-300 transition-colors">
                  <span>Stage {idx + 1} of 4</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm border border-white/10 hover:border-blue-500/40 shadow-lg shadow-black/40 transition-all duration-200 cursor-pointer hover:-translate-y-0.5"
          >
            <span>Ready to start with Step 01?</span>
            <ArrowRight className="w-4 h-4 text-blue-400" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};
