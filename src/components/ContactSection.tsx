import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Mail, MessageSquare } from 'lucide-react';

interface ContactSectionProps {
  onOpenConsultation?: () => void;
  onNavigateToEstimator?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ 
  onOpenConsultation,
  onNavigateToEstimator 
}) => {
  const handleScrollToEstimator = () => {
    if (onNavigateToEstimator) {
      onNavigateToEstimator();
    } else {
      const el = document.getElementById('estimator');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="contact" className="py-28 sm:py-40 relative overflow-hidden">
      {/* Subtle Background Breathing Animation */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-blue-600/30 via-indigo-600/20 to-cyan-500/20 blur-[140px]"
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold tracking-widest uppercase">
            <span>GET IN TOUCH</span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.08]">
            Have an idea? <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-300 to-white">
              Let's build it.
            </span>
          </h2>

          {/* Supporting Text */}
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal">
            Tell us what you're trying to achieve. We'll help you figure out the technology.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={handleScrollToEstimator}
              className="w-full sm:w-auto px-9 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-medium text-base shadow-xl shadow-blue-600/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto px-9 py-4 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white font-medium text-base border border-white/10 hover:border-white/20 transition-all duration-200 flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-blue-400" />
              <span>Talk to Us</span>
            </button>
          </div>

          {/* Direct Email note */}
          <div className="pt-6">
            <a
              href="mailto:hello@28labs.net"
              className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4 text-blue-400" />
              <span>hello@28labs.net</span>
            </a>
          </div>

        </motion.div>
      </div>
    </section>
  );
};
