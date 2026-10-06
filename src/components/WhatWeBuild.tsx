import React from 'react';
import { motion } from 'motion/react';
import { WHAT_WE_BUILD_DATA } from '../data/content';
import { 
  Building2, 
  Rocket, 
  Sparkles, 
  ArrowRight,
  Store,
  CalendarCheck,
  Smartphone,
  Layers,
  FileCheck,
  Bot,
  CheckCircle2
} from 'lucide-react';

interface WhatWeBuildProps {
  onOpenConsultation: (categoryTitle?: string) => void;
}

export const WhatWeBuild: React.FC<WhatWeBuildProps> = ({ onOpenConsultation }) => {
  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'businesses':
        return <Building2 className="w-5 h-5 text-[#0070f3]" />;
      case 'startups':
        return <Rocket className="w-5 h-5 text-[#0070f3]" />;
      case 'ai':
        return <Sparkles className="w-5 h-5 text-[#0070f3]" />;
      default:
        return <Layers className="w-5 h-5 text-[#0070f3]" />;
    }
  };

  const getVisualPreview = (id: string) => {
    if (id === 'businesses') {
      return (
        <div className="relative w-full h-44 rounded-xl border border-[#eaeaea] bg-[#fafafa] p-4 overflow-hidden flex flex-col justify-between">
          <div className="flex items-center justify-between pb-3 border-b border-[#eaeaea]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span className="text-xs font-medium text-[#333333]">Live Business Portal</span>
            </div>
            <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-white border border-[#eaeaea] text-[#666666]">Active</span>
          </div>

          <div className="grid grid-cols-2 gap-2.5 my-auto">
            <div className="bg-white p-2.5 rounded-lg border border-[#eaeaea]">
              <div className="flex items-center gap-2 text-[#888888] text-xs mb-1">
                <Store className="w-3.5 h-3.5 text-[#0070f3]" />
                <span>Online Store</span>
              </div>
              <div className="text-sm font-semibold text-black">Orders Active</div>
            </div>
            <div className="bg-white p-2.5 rounded-lg border border-[#eaeaea]">
              <div className="flex items-center gap-2 text-[#888888] text-xs mb-1">
                <CalendarCheck className="w-3.5 h-3.5 text-emerald-500" />
                <span>Bookings</span>
              </div>
              <div className="text-sm font-semibold text-black">Automated</div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-[#eaeaea] text-[11px] text-[#888888]">
            <span>Unified Dashboard</span>
            <span className="text-emerald-600 font-medium">99.9% Reliable</span>
          </div>
        </div>
      );
    }

    if (id === 'startups') {
      return (
        <div className="relative w-full h-44 rounded-xl border border-[#eaeaea] bg-[#fafafa] p-4 overflow-hidden flex flex-col justify-between">
          <div className="flex items-center justify-between pb-3 border-b border-[#eaeaea]">
            <div className="flex items-center gap-2">
              <Rocket className="w-4 h-4 text-[#0070f3]" />
              <span className="text-xs font-medium text-[#333333]">Fast MVP Development</span>
            </div>
            <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-white border border-[#eaeaea] text-[#666666]">Launch Ready</span>
          </div>

          <div className="space-y-2 my-auto">
            <div className="flex items-center justify-between bg-white p-2 rounded-lg border border-[#eaeaea]">
              <div className="flex items-center gap-2 text-xs text-black">
                <Smartphone className="w-3.5 h-3.5 text-[#0070f3]" />
                <span>iOS &amp; Android App</span>
              </div>
              <span className="text-[10px] text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">Validated</span>
            </div>
            <div className="flex items-center justify-between bg-white p-2 rounded-lg border border-[#eaeaea]">
              <div className="flex items-center gap-2 text-xs text-black">
                <Layers className="w-3.5 h-3.5 text-[#0070f3]" />
                <span>SaaS Web Platform</span>
              </div>
              <span className="text-[10px] text-[#0070f3] bg-[#0070f3]/5 px-2 py-0.5 rounded-md">Scalable</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-[#eaeaea] text-[11px] text-[#888888]">
            <span>Sprint Validation</span>
            <span className="text-[#0070f3] font-medium">Idea to Production</span>
          </div>
        </div>
      );
    }

    // AI
    return (
      <div className="relative w-full h-44 rounded-xl border border-[#eaeaea] bg-[#fafafa] p-4 overflow-hidden flex flex-col justify-between">
        <div className="flex items-center justify-between pb-3 border-b border-[#eaeaea]">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#0070f3]" />
            <span className="text-xs font-medium text-[#333333]">Intelligent Automation</span>
          </div>
          <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-white border border-[#eaeaea] text-[#666666]">24/7 Flow</span>
        </div>

        <div className="flex items-center justify-between bg-white p-3 rounded-lg border border-[#eaeaea] my-auto">
          <div className="text-center">
            <div className="w-8 h-8 mx-auto rounded-lg bg-[#0070f3]/5 flex items-center justify-center text-[#0070f3] mb-1">
              <FileCheck className="w-4 h-4" />
            </div>
            <span className="text-[10px] text-[#888888]">Input</span>
          </div>
          <div className="w-10 h-0.5 bg-[#eaeaea] relative">
            <motion.div 
              className="absolute -top-1 w-2.5 h-2.5 rounded-full bg-[#0070f3]"
              animate={{ left: ['0%', '100%'] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
            />
          </div>
          <div className="text-center">
            <div className="w-8 h-8 mx-auto rounded-lg bg-[#0070f3]/5 flex items-center justify-center text-[#0070f3] mb-1">
              <Bot className="w-4 h-4" />
            </div>
            <span className="text-[10px] text-[#888888]">AI Logic</span>
          </div>
          <div className="w-10 h-0.5 bg-[#eaeaea] relative">
            <motion.div 
              className="absolute -top-1 w-2.5 h-2.5 rounded-full bg-[#0070f3]"
              animate={{ left: ['0%', '100%'] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'linear', delay: 1 }}
            />
          </div>
          <div className="text-center">
            <div className="w-8 h-8 mx-auto rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 mb-1">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <span className="text-[10px] text-[#888888]">Done</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-[#eaeaea] text-[11px] text-[#888888]">
          <span>Hands-free processing</span>
          <span className="text-emerald-600 font-medium">Zero Manual Friction</span>
        </div>
      </div>
    );
  };

  return (
    <section id="what-we-build" className="py-24 sm:py-32 relative bg-[#fafafa] border-t border-[#eaeaea]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-medium tracking-widest uppercase text-[#888888] mb-3">
              Tailored Solutions
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-black mb-6">
              Whatever you're building, <br className="hidden sm:inline" />
              let's bring it to life.
            </h2>
            <p className="text-base sm:text-lg text-[#666666] leading-relaxed max-w-2xl mx-auto">
              We design and engineer practical digital products built to serve your business, delight your customers, and scale with ease.
            </p>
          </motion.div>
        </div>

        {/* 3 Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {WHAT_WE_BUILD_DATA.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative rounded-2xl bg-white border border-[#eaeaea] hover:border-[#d4d4d4] p-6 flex flex-col justify-between transition-all duration-200 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
            >
              <div>
                {/* Visual miniature */}
                <div className="mb-6">
                  {getVisualPreview(cat.id)}
                </div>

                {/* Category Header */}
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="p-2 rounded-lg bg-[#fafafa] border border-[#eaeaea]">
                    {getCategoryIcon(cat.id)}
                  </div>
                  <h3 className="text-xs font-semibold tracking-wider uppercase text-[#333333]">
                    {cat.title}
                  </h3>
                </div>

                <p className="text-sm text-[#666666] mb-6 min-h-[40px]">
                  {cat.tagline}
                </p>

                {/* Items List */}
                <div className="space-y-3 mb-8">
                  {cat.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex items-center gap-3 text-sm text-[#333333]">
                      <div className="w-1.5 h-1.5 rounded-full bg-black shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onOpenConsultation(cat.title)}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-sm font-medium text-black border border-[#d4d4d4] hover:border-black transition-colors duration-200"
              >
                <span>Discuss {cat.title.replace('FOR ', '').replace('WITH ', '')}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
