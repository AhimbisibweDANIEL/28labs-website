import React from 'react';
import { TESTIMONIALS } from '../data/content';
import { Star, Quote, MessageSquare, CheckCircle2 } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 relative bg-slate-950/60 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/80 border border-indigo-500/30 text-indigo-300 text-xs font-semibold">
            <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
            <span>Verified Client Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Trusted by CTOs, Founders & <span className="text-gradient-cyan">Growth Leaders</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Read how our senior software & AI engineering sprint teams transformed critical roadmaps.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="glass-card glass-card-hover p-8 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-6 relative"
            >
              <div className="space-y-4">
                
                {/* Rating Stars */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-indigo-500/30" />
                </div>

                {/* Quote Text */}
                <p className="text-slate-200 text-sm italic leading-relaxed">
                  "{t.quote}"
                </p>

              </div>

              {/* Author Row */}
              <div className="pt-4 border-t border-slate-800/80 space-y-1">
                <div className="text-sm font-bold text-white flex items-center gap-1.5">
                  <span>{t.clientName}</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                </div>
                <div className="text-xs text-indigo-300 font-medium">{t.role}, {t.company}</div>
                <div className="text-[11px] text-slate-400 font-mono pt-1">
                  Project: {t.projectType}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
