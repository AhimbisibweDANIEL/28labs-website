import React from 'react';
import { motion } from 'motion/react';
import { WHY_28_LABS } from '../data/content';
import { Ear, Sparkles, HeartHandshake, ShieldCheck } from 'lucide-react';

export const ValueProps: React.FC = () => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Ear className="w-5 h-5 text-[#0070f3]" />;
      case 1:
        return <Sparkles className="w-5 h-5 text-[#0070f3]" />;
      case 2:
        return <HeartHandshake className="w-5 h-5 text-[#0070f3]" />;
      case 3:
        return <ShieldCheck className="w-5 h-5 text-[#0070f3]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#0070f3]" />;
    }
  };

  return (
    <section id="why-us" className="py-24 sm:py-32 relative border-t border-[#eaeaea]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-medium tracking-widest uppercase text-[#888888] mb-4">
              Our Philosophy
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black tracking-tight leading-tight">
              Technology should make business{' '}
              <span className="text-[#0070f3]">simpler, not harder.</span>
            </h2>
          </motion.div>
        </div>

        {/* 4 Statements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {WHY_28_LABS.pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group rounded-2xl bg-white border border-[#eaeaea] hover:border-[#d4d4d4] p-8 flex flex-col justify-between transition-all duration-200 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-11 h-11 rounded-xl bg-[#fafafa] border border-[#eaeaea] flex items-center justify-center">
                    {getIcon(idx)}
                  </div>
                  <span className="text-xs font-mono font-medium tracking-wider text-[#888888] uppercase">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="text-xs font-semibold tracking-widest uppercase text-[#0070f3] mb-2">
                  {pillar.title}
                </h3>

                <h4 className="text-xl sm:text-2xl font-semibold text-black mb-4 leading-snug">
                  {pillar.tagline}
                </h4>

                <p className="text-sm sm:text-base text-[#666666] leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#eaeaea] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-black" />
                <span className="text-xs text-[#888888] font-medium">Customer-first commitment</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
