import React, { useState, useEffect } from 'react';
import { Globe, ArrowRight, User, CheckCircle2, MessageSquare, Sparkles, Building2 } from 'lucide-react';

export const WebDevelopmentVisual: React.FC = () => {
  const [activeStage, setActiveStage] = useState<'browse' | 'enquire' | 'converted'>('browse');

  useEffect(() => {
    const stages: Array<'browse' | 'enquire' | 'converted'> = ['browse', 'enquire', 'converted'];
    let idx = 0;
    const timer = setInterval(() => {
      idx = (idx + 1) % stages.length;
      setActiveStage(stages[idx]);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full rounded-2xl bg-slate-950 border border-slate-800 shadow-xl overflow-hidden p-4 space-y-3">
      {/* Browser Bar with Domain */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-800/80 text-xs text-slate-400">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70 inline-block"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70 inline-block"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70 inline-block"></span>
        </div>

        <div className="px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-[11px] text-slate-300 font-mono flex items-center gap-1.5">
          <Globe className="w-3 h-3 text-cyan-400" />
          <span>yourbusiness.com</span>
        </div>

        {/* Business to Customer Flow Indicator */}
        <div className="text-[10px] font-semibold text-blue-400 hidden sm:flex items-center gap-1">
          <span>Live Site</span>
        </div>
      </div>

      {/* Finished Customer Experience Canvas */}
      <div className="rounded-xl bg-slate-900/80 border border-slate-800/80 p-4 space-y-3.5 min-h-[230px] flex flex-col justify-between">
        
        {/* Navigation Bar */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white">
              <Building2 className="w-3.5 h-3.5" />
            </div>
            <span className="text-xs font-bold text-white tracking-tight">Your Business</span>
          </div>
          <div className="flex items-center gap-2 text-[10px] text-slate-300">
            <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700/60">Services</span>
            <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700/60">Contact</span>
          </div>
        </div>

        {/* Dynamic Customer Story Experience */}
        <div className="p-3.5 rounded-xl bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950/30 border border-slate-800 space-y-2.5">
          {activeStage === 'browse' && (
            <div className="space-y-2 animate-in fade-in duration-300">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-cyan-400">
                  Step 1: Visitor Arrives
                </span>
                <span className="text-[10px] text-slate-400">Modern &amp; Fast</span>
              </div>
              <div className="text-xs font-bold text-white">
                Professional presence that builds instant trust
              </div>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                Clear branding, clear offerings, and an intuitive layout designed to guide visitors smoothly.
              </p>
            </div>
          )}

          {activeStage === 'enquire' && (
            <div className="space-y-2 animate-in fade-in duration-300">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-amber-400">
                  Step 2: Visitor Takes Action
                </span>
                <span className="text-[10px] text-slate-400">Direct Enquiry</span>
              </div>
              <div className="text-xs font-bold text-white flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5 text-amber-400" />
                <span>Customer requests a quote or booking</span>
              </div>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                Simple forms, integrated calendar booking, and clear calls to action turn traffic into inquiries.
              </p>
            </div>
          )}

          {activeStage === 'converted' && (
            <div className="space-y-2 animate-in fade-in duration-300">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-400">
                  Step 3: Business Grows
                </span>
                <span className="text-[10px] text-emerald-400 font-medium">New Customer</span>
              </div>
              <div className="text-xs font-bold text-white flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Enquiry delivered directly to your inbox</span>
              </div>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                Your team receives clean, organized customer details ready for instant follow-up.
              </p>
            </div>
          )}
        </div>

        {/* Bottom Story Flow: Business → Website → Customer */}
        <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px]">
          <div className="flex items-center gap-1.5 text-slate-300 font-medium">
            <span className="text-white font-semibold">Business</span>
            <ArrowRight className="w-2.5 h-2.5 text-blue-400" />
            <span className="text-cyan-400 font-semibold">Website</span>
            <ArrowRight className="w-2.5 h-2.5 text-blue-400" />
            <span className="text-emerald-400 font-semibold">Customer</span>
          </div>
          <span className="text-slate-400">
            {activeStage === 'browse' ? '1. Reach' : activeStage === 'enquire' ? '2. Engage' : '3. Convert'}
          </span>
        </div>

      </div>
    </div>
  );
};
