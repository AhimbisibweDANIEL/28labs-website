import React from 'react';
import { motion } from 'motion/react';
import { HERO_DATA } from '../data/content';
import { HeroProductVisual } from './visuals/HeroProductVisual';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onOpenConsultation: () => void;
  onExploreServices?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  onOpenConsultation, 
  onExploreServices 
}) => {
  const handleScrollToServices = () => {
    if (onExploreServices) {
      onExploreServices();
    } else {
      const el = document.getElementById('services');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-24 md:pt-44 md:pb-36 overflow-hidden">
      {/* Subtle top ambient wash */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-black/[0.03] to-transparent rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-7 text-center lg:text-left">
            
            {/* Eyebrow */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#eaeaea] bg-white text-[#666666] text-xs font-medium tracking-widest uppercase"
            >
              <span>{HERO_DATA.eyebrow}</span>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-black leading-[1.08]"
            >
              Software, apps, and AI for{' '}
              <span className="text-[#0070f3]">ambitious businesses.</span>
            </motion.h1>

            {/* Supporting Text */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-[#666666] leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              {HERO_DATA.supportingText}
            </motion.p>

            {/* Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-1"
            >
              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-black hover:bg-neutral-700 text-white font-medium text-[15px] transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{HERO_DATA.primaryCta}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleScrollToServices}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-white hover:bg-neutral-50 text-black font-medium text-[15px] border border-[#d4d4d4] transition-colors duration-200 cursor-pointer"
              >
                {HERO_DATA.secondaryCta}
              </button>
            </motion.div>

            {/* Reassurance pills */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 pt-2 text-[13px] text-[#888888] font-medium"
            >
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-black" />
                <span>Tailored to your goals</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-black" />
                <span>No technical jargon required</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-black" />
                <span>Reliable support</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full max-w-lg lg:max-w-none"
            >
              <HeroProductVisual />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
