import React, { useState } from 'react';
import { FAQS } from '../data/content';
import { HelpCircle, ChevronDown, ChevronUp, Search, MessageCircle } from 'lucide-react';

interface FAQProps {
  onOpenConsultation: () => void;
}

export const FAQ: React.FC<FAQProps> = ({ onOpenConsultation }) => {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const filteredFaqs = FAQS.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faq" className="py-24 relative bg-slate-950 border-b border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/80 border border-indigo-500/30 text-indigo-300 text-xs font-semibold">
            <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Got Questions? <span className="text-gradient-cyan">We Have Answers.</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Everything you need to know about our engineering process, IP transfer, pricing, and project guarantees.
          </p>
        </div>

        {/* Search Input */}
        <div className="relative mb-8 max-w-lg mx-auto">
          <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search questions (e.g. code ownership, AI reliability, timelines)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
          />
        </div>

        {/* Accordions */}
        <div className="space-y-3">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="glass-card rounded-2xl border border-slate-800 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full p-5 text-left flex items-center justify-between text-sm sm:text-base font-bold text-white hover:text-indigo-300 transition-colors cursor-pointer"
                >
                  <span className="pr-4">{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-indigo-400 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-500 shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 pt-3 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-12 text-center bg-slate-900/60 p-6 rounded-2xl border border-slate-800/80 space-y-3">
          <p className="text-xs text-slate-400">Have a custom question or specific enterprise compliance request?</p>
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2 text-xs font-bold text-cyan-400 hover:text-cyan-300 underline cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Speak directly with a Lead Architect</span>
          </button>
        </div>

      </div>
    </section>
  );
};
