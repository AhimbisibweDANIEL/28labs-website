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
    <div className="w-full rounded-2xl bg-white border border-[#eaeaea] shadow-[0_8px_30px_rgba(0,0,0,0.05)] overflow-hidden p-4 space-y-3">
      {/* Browser Bar */}
      <div className="flex items-center justify-between pb-3 border-b border-[#eaeaea] text-xs text-[#888888]">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-400/80 inline-block"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80 inline-block"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80 inline-block"></span>
        </div>

        <div className="px-3 py-1 rounded-md bg-[#fafafa] border border-[#eaeaea] text-[11px] text-[#666666] font-mono flex items-center gap-1.5">
          <Globe className="w-3 h-3 text-[#0070f3]" />
          <span>yourbusiness.com</span>
        </div>

        <div className="text-[10px] font-medium text-[#0070f3] hidden sm:flex items-center gap-1">
          <span>Live Site</span>
        </div>
      </div>

      {/* Customer Experience Canvas */}
      <div className="rounded-xl bg-[#fafafa] border border-[#eaeaea] p-4 space-y-3.5 min-h-[230px] flex flex-col justify-between">
        
        {/* Nav */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-black flex items-center justify-center text-white">
              <Building2 className="w-3.5 h-3.5" />
            </div>
            <span className="text-xs font-semibold text-black tracking-tight">Your Business</span>
          </div>
          <div className="flex items-center gap-2 text-[10px] text-[#333333]">
            <span className="px-2 py-0.5 rounded bg-white border border-[#eaeaea]">Services</span>
            <span className="px-2 py-0.5 rounded bg-white border border-[#eaeaea]">Contact</span>
          </div>
        </div>

        {/* Dynamic Story */}
        <div className="p-3.5 rounded-xl bg-white border border-[#eaeaea] space-y-2.5">
          {activeStage === 'browse' && (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-medium uppercase tracking-wider text-[#0070f3]">
                  Step 1: Visitor Arrives
                </span>
                <span className="text-[10px] text-[#888888]">Modern &amp; Fast</span>
              </div>
              <div className="text-xs font-semibold text-black">
                Professional presence that builds instant trust
              </div>
              <p className="text-[11px] text-[#666666] leading-relaxed">
                Clear branding, clear offerings, and an intuitive layout designed to guide visitors smoothly.
              </p>
            </div>
          )}

          {activeStage === 'enquire' && (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-medium uppercase tracking-wider text-amber-600">
                  Step 2: Visitor Takes Action
                </span>
                <span className="text-[10px] text-[#888888]">Direct Enquiry</span>
              </div>
              <div className="text-xs font-semibold text-black flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5 text-amber-500" />
                <span>Customer requests a quote or booking</span>
              </div>
              <p className="text-[11px] text-[#666666] leading-relaxed">
                Simple forms, integrated calendar booking, and clear calls to action turn traffic into inquiries.
              </p>
            </div>
          )}

          {activeStage === 'converted' && (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-medium uppercase tracking-wider text-emerald-600">
                  Step 3: Business Grows
                </span>
                <span className="text-[10px] text-emerald-600 font-medium">New Customer</span>
              </div>
              <div className="text-xs font-semibold text-black flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span>Enquiry delivered directly to your inbox</span>
              </div>
              <p className="text-[11px] text-[#666666] leading-relaxed">
                Your team receives clean, organized customer details ready for instant follow-up.
              </p>
            </div>
          )}
        </div>

        {/* Flow */}
        <div className="pt-2 border-t border-[#eaeaea] flex items-center justify-between text-[10px]">
          <div className="flex items-center gap-1.5 text-[#333333] font-medium">
            <span className="text-black font-semibold">Business</span>
            <ArrowRight className="w-2.5 h-2.5 text-[#0070f3]" />
            <span className="text-[#0070f3] font-semibold">Website</span>
            <ArrowRight className="w-2.5 h-2.5 text-[#0070f3]" />
            <span className="text-emerald-600 font-semibold">Customer</span>
          </div>
          <span className="text-[#888888]">
            {activeStage === 'browse' ? '1. Reach' : activeStage === 'enquire' ? '2. Engage' : '3. Convert'}
          </span>
        </div>

      </div>
    </div>
  );
};
