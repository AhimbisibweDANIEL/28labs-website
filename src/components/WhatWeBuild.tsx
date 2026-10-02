import React from 'react';
import { motion } from 'motion/react';
import { WHAT_WE_BUILD_DATA } from '../data/content';
import { 
  Building2, 
  Rocket, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  Store,
  CalendarCheck,
  LayoutDashboard,
  Smartphone,
  Layers,
  FileCheck,
  Bot
} from 'lucide-react';

interface WhatWeBuildProps {
  onOpenConsultation: (categoryTitle?: string) => void;
}

export const WhatWeBuild: React.FC<WhatWeBuildProps> = ({ onOpenConsultation }) => {
  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'businesses':
        return <Building2 className="w-5 h-5 text-blue-400" />;
      case 'startups':
        return <Rocket className="w-5 h-5 text-indigo-400" />;
      case 'ai':
        return <Sparkles className="w-5 h-5 text-emerald-400" />;
      default:
        return <Layers className="w-5 h-5 text-blue-400" />;
    }
  };

  const getVisualPreview = (id: string) => {
    if (id === 'businesses') {
      return (
        <div className="relative w-full h-44 rounded-2xl bg-gradient-to-br from-slate-900/90 to-blue-950/40 p-4 border border-blue-500/20 overflow-hidden flex flex-col justify-between">
          <div className="flex items-center justify-between pb-3 border-b border-white/5">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-medium text-slate-300">Live Business Portal</span>
            </div>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20">Active</span>
          </div>

          <div className="grid grid-cols-2 gap-2.5 my-auto">
            <div className="bg-slate-800/60 p-2.5 rounded-xl border border-white/5">
              <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
                <Store className="w-3.5 h-3.5 text-blue-400" />
                <span>Online Store</span>
              </div>
              <div className="text-sm font-semibold text-white">Orders Active</div>
            </div>
            <div className="bg-slate-800/60 p-2.5 rounded-xl border border-white/5">
              <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
                <CalendarCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Bookings</span>
              </div>
              <div className="text-sm font-semibold text-white">Automated</div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-white/5 text-[11px] text-slate-400">
            <div className="flex items-center gap-1.5">
              <LayoutDashboard className="w-3 h-3 text-blue-400" />
              <span>Unified Dashboard</span>
            </div>
            <span className="text-emerald-400 font-medium">99.9% Reliable</span>
          </div>
        </div>
      );
    }

    if (id === 'startups') {
      return (
        <div className="relative w-full h-44 rounded-2xl bg-gradient-to-br from-slate-900/90 to-indigo-950/40 p-4 border border-indigo-500/20 overflow-hidden flex flex-col justify-between">
          <div className="flex items-center justify-between pb-3 border-b border-white/5">
            <div className="flex items-center gap-2">
              <Rocket className="w-4 h-4 text-indigo-400" />
              <span className="text-xs font-medium text-slate-300">Fast MVP Development</span>
            </div>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">Launch Ready</span>
          </div>

          <div className="space-y-2 my-auto">
            <div className="flex items-center justify-between bg-slate-800/60 p-2 rounded-xl border border-white/5">
              <div className="flex items-center gap-2 text-xs text-white">
                <Smartphone className="w-3.5 h-3.5 text-indigo-400" />
                <span>iOS & Android App</span>
              </div>
              <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md">Validated</span>
            </div>
            <div className="flex items-center justify-between bg-slate-800/60 p-2 rounded-xl border border-white/5">
              <div className="flex items-center gap-2 text-xs text-white">
                <Layers className="w-3.5 h-3.5 text-indigo-400" />
                <span>SaaS Web Platform</span>
              </div>
              <span className="text-[10px] text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-md">Scalable</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-white/5 text-[11px] text-slate-400">
            <span>Sprint Validation</span>
            <span className="text-indigo-300 font-medium">Idea to Production</span>
          </div>
        </div>
      );
    }

    // AI
    return (
      <div className="relative w-full h-44 rounded-2xl bg-gradient-to-br from-slate-900/90 to-emerald-950/40 p-4 border border-emerald-500/20 overflow-hidden flex flex-col justify-between">
        <div className="flex items-center justify-between pb-3 border-b border-white/5">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-medium text-slate-300">Intelligent Automation</span>
          </div>
          <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">24/7 Flow</span>
        </div>

        <div className="flex items-center justify-between bg-slate-800/70 p-3 rounded-xl border border-white/5 my-auto">
          <div className="text-center">
            <div className="w-8 h-8 mx-auto rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-1">
              <FileCheck className="w-4 h-4" />
            </div>
            <span className="text-[10px] text-slate-400">Input</span>
          </div>
          <div className="w-10 h-0.5 bg-gradient-to-r from-emerald-500/40 to-blue-500/40 relative">
            <motion.div 
              className="absolute -top-1 w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400"
              animate={{ left: ['0%', '100%'] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
            />
          </div>
          <div className="text-center">
            <div className="w-8 h-8 mx-auto rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-1">
              <Bot className="w-4 h-4" />
            </div>
            <span className="text-[10px] text-slate-400">AI Logic</span>
          </div>
          <div className="w-10 h-0.5 bg-gradient-to-r from-blue-500/40 to-emerald-500/40 relative">
            <motion.div 
              className="absolute -top-1 w-2.5 h-2.5 rounded-full bg-blue-400 shadow-sm shadow-blue-400"
              animate={{ left: ['0%', '100%'] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'linear', delay: 1 }}
            />
          </div>
          <div className="text-center">
            <div className="w-8 h-8 mx-auto rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-300 mb-1">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <span className="text-[10px] text-slate-400">Done</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-white/5 text-[11px] text-slate-400">
          <span>Hands-free processing</span>
          <span className="text-emerald-300 font-medium">Zero Manual Friction</span>
        </div>
      </div>
    );
  };

  return (
    <section id="what-we-build" className="py-24 sm:py-32 relative bg-slate-950/60 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-blue-400 mb-3">
              Tailored Solutions
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
              Whatever you're building, <br className="hidden sm:inline" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-300 to-white">
                let's bring it to life.
              </span>
            </h2>
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
              We design and engineer practical digital products built to serve your business, delight your customers, and scale with ease.
            </p>
          </motion.div>
        </div>

        {/* 3 Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {WHAT_WE_BUILD_DATA.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="group relative rounded-3xl bg-slate-900/50 backdrop-blur-sm border border-white/10 hover:border-blue-500/30 p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/5 hover:-translate-y-1"
            >
              <div>
                {/* Visual miniature */}
                <div className="mb-6">
                  {getVisualPreview(cat.id)}
                </div>

                {/* Category Header */}
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="p-2 rounded-xl bg-slate-800/80 border border-white/10">
                    {getCategoryIcon(cat.id)}
                  </div>
                  <h3 className="text-xs font-bold tracking-wider uppercase text-slate-300">
                    {cat.title}
                  </h3>
                </div>

                <p className="text-sm text-slate-400 mb-6 min-h-[40px]">
                  {cat.tagline}
                </p>

                {/* Items List */}
                <div className="space-y-3 mb-8">
                  {cat.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex items-center gap-3 text-sm text-slate-200">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onOpenConsultation(cat.title)}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-medium bg-slate-800/70 hover:bg-blue-600/20 text-slate-200 hover:text-white border border-white/10 hover:border-blue-500/30 transition-all duration-200"
              >
                <span>Discuss {cat.title.replace('FOR ', '').replace('WITH ', '')}</span>
                <ArrowRight className="w-4 h-4 text-blue-400 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
