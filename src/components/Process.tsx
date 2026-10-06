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
        return <Lightbulb className="w-5 h-5 text-[#0070f3]" />;
      case '02':
        return <Palette className="w-5 h-5 text-[#0070f3]" />;
      case '03':
        return <Code2 className="w-5 h-5 text-[#0070f3]" />;
      case '04':
        return <Rocket className="w-5 h-5 text-[#0070f3]" />;
      default:
        return <Lightbulb className="w-5 h-5 text-[#0070f3]" />;
    }
  };

  return (
    <section id="process" className="py-24 sm:py-32 relative border-t border-[#eaeaea]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-medium tracking-widest uppercase text-[#888888] mb-3">
              How It Works
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black tracking-tight mb-5">
              From idea to launch.
            </h2>
            <p className="text-base sm:text-lg text-[#666666] leading-relaxed max-w-xl mx-auto">
              A smooth, transparent journey where your vision turns into a dependable, high-impact digital product.
            </p>
          </motion.div>
        </div>

        {/* 4 Stages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {HOW_IT_WORKS_STEPS.map((stage, idx) => (
            <motion.div
              key={stage.stepNumber}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative rounded-2xl bg-white border border-[#eaeaea] hover:border-[#d4d4d4] p-7 flex flex-col justify-between transition-all duration-200 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
            >
              <div>
                {/* Step number & Icon header */}
                <div className="flex items-center justify-between mb-8">
                  <span className="text-2xl font-semibold text-[#d4d4d4] group-hover:text-[#0070f3] transition-colors font-mono">
                    {stage.stepNumber}
                  </span>
                  <div className="w-11 h-11 rounded-xl bg-[#fafafa] border border-[#eaeaea] flex items-center justify-center">
                    {getStageIcon(stage.stepNumber)}
                  </div>
                </div>

                {/* Stage Title */}
                <h3 className="text-lg font-semibold text-black mb-2 leading-snug">
                  {stage.title}
                </h3>

                {/* Subtitle */}
                {stage.subtitle && (
                  <p className="text-xs font-medium uppercase tracking-wider text-[#888888] mb-3">
                    {stage.subtitle}
                  </p>
                )}

                {/* Description */}
                <p className="text-sm text-[#666666] leading-relaxed">
                  {stage.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#eaeaea] text-xs font-medium text-[#888888]">
                Stage {idx + 1} of 4
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-black hover:bg-neutral-700 text-white font-medium text-sm transition-colors duration-200 cursor-pointer"
          >
            <span>Ready to start with Step 01?</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};
