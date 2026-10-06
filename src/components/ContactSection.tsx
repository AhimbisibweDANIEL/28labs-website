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
    <section id="contact" className="py-28 sm:py-40 relative overflow-hidden border-t border-[#eaeaea]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#eaeaea] text-[#666666] text-xs font-medium tracking-widest uppercase">
            <span>GET IN TOUCH</span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold text-black tracking-tight leading-[1.08]">
            Have an idea? <br />
            <span className="text-[#0070f3]">Let's build it.</span>
          </h2>

          {/* Supporting Text */}
          <p className="text-lg sm:text-xl text-[#666666] leading-relaxed max-w-2xl mx-auto">
            Tell us what you're trying to achieve. We'll help you figure out the technology.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
            <button
              onClick={handleScrollToEstimator}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-black hover:bg-neutral-700 text-white font-medium text-base transition-colors duration-200 flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <span>Start a project</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white hover:bg-neutral-50 text-black font-medium text-base border border-[#d4d4d4] transition-colors duration-200 flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-[#0070f3]" />
              <span>Talk to us</span>
            </button>
          </div>

          {/* Email */}
          <div className="pt-6">
            <a
              href="mailto:hello@28labs.net"
              className="inline-flex items-center gap-2 text-sm text-[#888888] hover:text-black transition-colors"
            >
              <Mail className="w-4 h-4 text-[#0070f3]" />
              <span>hello@28labs.net</span>
            </a>
          </div>

        </motion.div>
      </div>
    </section>
  );
};
