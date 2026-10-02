import React, { useState, useEffect } from 'react';
import { Layout, Globe, Search, ArrowRight, ShoppingBag, User } from 'lucide-react';

export const WebDevelopmentVisual: React.FC = () => {
  const [step, setStep] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % 4);
    }, 2200);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full rounded-2xl bg-slate-950 border border-slate-800 shadow-xl overflow-hidden p-4 space-y-3">
      {/* Browser Bar */}
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

        <div className="flex items-center gap-2">
          <Search className="w-3 h-3 text-slate-500" />
        </div>
      </div>

      {/* Assembling Website Canvas */}
      <div className="rounded-xl bg-slate-900/70 border border-slate-800/80 p-4 space-y-4 min-h-[220px]">
        {/* 1. Navigation Element */}
        <div className={`flex items-center justify-between transition-all duration-500 ${step >= 0 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-indigo-500 to-cyan-400 flex items-center justify-center text-[10px] font-bold text-slate-950">
              28
            </div>
            <span className="text-xs font-bold text-white">Your Business</span>
          </div>
          <div className="flex items-center gap-2 text-[10px] text-slate-400">
            <span>About</span>
            <span>Services</span>
            <div className="w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center text-slate-300">
              <User className="w-2.5 h-2.5" />
            </div>
          </div>
        </div>

        {/* 2. Hero Element */}
        <div className={`p-4 rounded-xl bg-gradient-to-r from-slate-900 to-indigo-950/40 border border-slate-800 space-y-2 transition-all duration-500 delay-100 ${step >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="h-4 bg-gradient-to-r from-cyan-400 to-indigo-400 rounded-md w-3/4"></div>
          <p className="text-[11px] text-slate-300 leading-snug">
            Welcome your customers with a modern, high-speed website built to convert visitors.
          </p>
        </div>

        {/* 3. Content Blocks */}
        <div className={`grid grid-cols-2 gap-2 transition-all duration-500 delay-200 ${step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
          <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800 space-y-1">
            <div className="h-2 bg-slate-700 rounded w-1/2"></div>
            <div className="h-1.5 bg-slate-800 rounded w-3/4"></div>
          </div>
          <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800 space-y-1">
            <div className="h-2 bg-slate-700 rounded w-1/2"></div>
            <div className="h-1.5 bg-slate-800 rounded w-3/4"></div>
          </div>
        </div>

        {/* 4. Action Button */}
        <div className={`pt-1 flex items-center justify-between transition-all duration-500 delay-300 ${step >= 3 ? 'opacity-100 translate-y-0' : 'opacity-20'}`}>
          <div className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-indigo-600 to-cyan-500 text-white text-[11px] font-bold shadow-md shadow-indigo-500/20 flex items-center gap-1.5">
            <span>Explore Services</span>
            <ArrowRight className="w-3 h-3" />
          </div>
          <span className="text-[10px] text-emerald-400 font-medium">Assembled smoothly</span>
        </div>
      </div>
    </div>
  );
};
