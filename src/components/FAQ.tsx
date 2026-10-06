import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQS } from '../data/content';
import { ChevronDown, MessageCircle } from 'lucide-react';

interface FAQProps {
  onOpenConsultation: () => void;
}

export const FAQ: React.FC<FAQProps> = ({ onOpenConsultation }) => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 sm:py-32 relative scroll-mt-10 border-t border-[#eaeaea]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-medium tracking-widest uppercase text-[#888888] mb-3">
              Clear Answers
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black tracking-tight mb-4">
              Frequently asked questions.
            </h2>
            <p className="text-base sm:text-lg text-[#666666] leading-relaxed">
              Everything you need to know about starting a project with 28 Labs.
            </p>
          </motion.div>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openId === faq.id;
            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.03 }}
                className={`rounded-xl border transition-colors duration-200 ${
                  isOpen
                    ? 'border-black bg-white'
                    : 'border-[#eaeaea] bg-white hover:border-[#d4d4d4]'
                }`}
              >
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-semibold text-black">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-black text-white' : 'bg-[#fafafa] text-[#666666] border border-[#eaeaea]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-1 text-[#666666] leading-relaxed text-sm sm:text-base border-t border-[#eaeaea] pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Support Note */}
        <div className="mt-12 text-center p-8 rounded-2xl bg-[#fafafa] border border-[#eaeaea]">
          <p className="text-sm text-[#666666] mb-3">
            Have a question that isn't answered here?
          </p>
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2 text-sm font-medium text-[#0070f3] hover:text-black transition-colors cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat directly with our team</span>
          </button>
        </div>

      </div>
    </section>
  );
};
