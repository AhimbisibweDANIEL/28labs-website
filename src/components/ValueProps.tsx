import React from 'react';
import { motion } from 'motion/react';
import { WHY_28_LABS } from '../data/content';
import { Ear, Sparkles, HeartHandshake, ShieldCheck } from 'lucide-react';

export const ValueProps: React.FC = () => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Ear className="w-6 h-6 text-blue-400" />;
      case 1:
        return <Sparkles className="w-6 h-6 text-indigo-400" />;
      case 2:
        return <HeartHandshake className="w-6 h-6 text-cyan-400" />;
      case 3:
        return <ShieldCheck className="w-6 h-6 text-emerald-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-blue-400" />;
    }
  };

  return (
    <section id="why-us" className="py-24 sm:py-36 relative bg-slate-950/80 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Big Statement */}
        <div className="text-center max-w-3xl mx-auto mb-20 sm:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-blue-400 mb-4">
              Our Philosophy
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Technology should make business{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-300 to-white">
                simpler, not harder.
              </span>
            </h2>
          </motion.div>
        </div>

        {/* 4 Large Statements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {WHY_28_LABS.pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="group rounded-3xl bg-slate-900/50 backdrop-blur-sm border border-white/10 hover:border-blue-500/30 p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/5 hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-slate-800/80 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                    {getIcon(idx)}
                  </div>
                  <span className="text-xs font-mono font-semibold tracking-wider text-slate-500 uppercase">
                    0{idx + 1}
                  </span>
                </div>

                {/* Pillar Title */}
                <h3 className="text-xs sm:text-sm font-bold tracking-widest uppercase text-blue-400 mb-2">
                  {pillar.title}
                </h3>

                {/* Tagline */}
                <h4 className="text-xl sm:text-2xl font-bold text-white mb-4 leading-snug">
                  {pillar.tagline}
                </h4>

                {/* Description */}
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-400" />
                <span className="text-xs text-slate-400 font-medium">Customer-first commitment</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
