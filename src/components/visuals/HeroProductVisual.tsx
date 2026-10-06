import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { 
  Globe, 
  Smartphone, 
  Sparkles, 
  Calendar, 
  ShoppingBag, 
  CheckCircle2, 
  Lock, 
  Bot,
  Layers,
  ArrowUpRight
} from 'lucide-react';

export const HeroProductVisual: React.FC = () => {
  const prefersReduced = useReducedMotion();

  // Gentle, calm floating animation presets
  const floatBrowser = prefersReduced 
    ? {} 
    : {
        y: [0, -6, 0],
        transition: {
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut' as const,
        },
      };

  const floatPhone = prefersReduced 
    ? {} 
    : {
        y: [0, 7, 0],
        transition: {
          duration: 5.8,
          repeat: Infinity,
          ease: 'easeInOut' as const,
          delay: 0.5,
        },
      };

  const floatBadgeLeft = prefersReduced 
    ? {} 
    : {
        y: [0, -6, 0],
        x: [0, 2, 0],
        transition: {
          duration: 5.2,
          repeat: Infinity,
          ease: 'easeInOut' as const,
          delay: 1,
        },
      };

  const floatBadgeBottom = prefersReduced 
    ? {} 
    : {
        y: [0, 5, 0],
        x: [0, -2, 0],
        transition: {
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut' as const,
          delay: 1.5,
        },
      };

  const floatAiCard = prefersReduced 
    ? {} 
    : {
        y: [0, -5, 0],
        transition: {
          duration: 4.8,
          repeat: Infinity,
          ease: 'easeInOut' as const,
          delay: 0.8,
        },
      };

  return (
    <div className="relative w-full max-w-[550px] mx-auto select-none pt-3 pb-6 px-1 sm:px-2">
      {/* Calm Ambient Background Glows */}
      <motion.div 
        className="absolute -top-10 -left-10 w-72 h-72 bg-gradient-to-tr from-blue-600/20 to-indigo-600/20 rounded-full blur-[100px] pointer-events-none"
        animate={prefersReduced ? {} : { scale: [1, 1.1, 1], opacity: [0.3, 0.45, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div 
        className="absolute -bottom-10 -right-8 w-80 h-80 bg-gradient-to-br from-indigo-600/20 via-purple-600/15 to-transparent rounded-full blur-[100px] pointer-events-none"
        animate={prefersReduced ? {} : { scale: [1.1, 1, 1.1], opacity: [0.25, 0.4, 0.25] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      {/* Main Composition Canvas */}
      <div className="relative">
        
        {/* ======================================================== */}
        {/* 1. MAIN BROWSER MOCKUP: Websites & Business Software      */}
        {/* ======================================================== */}
        <motion.div
          animate={floatBrowser}
          className="relative rounded-2xl bg-slate-900/95 border border-slate-700/60 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] backdrop-blur-xl overflow-hidden mr-4 sm:mr-10"
        >
          {/* Top Browser Header Chrome */}
          <div className="h-10 bg-slate-950/90 border-b border-slate-800/90 px-3 sm:px-4 flex items-center justify-between">
            {/* Left: Window Dots & Address Bar */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70 inline-block" />
              </div>

              {/* Address / URL Bar */}
              <div className="flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-slate-900 border border-slate-800 text-[10px] sm:text-[11px] text-slate-300 font-medium">
                <Lock className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-emerald-400 shrink-0" />
                <span className="tracking-tight">business.com/portal</span>
              </div>
            </div>

            {/* Subtle Right Indicator */}
            <div className="w-6 flex justify-end">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
            </div>
          </div>

          {/* Browser Workspace Content */}
          <div className="p-3.5 sm:p-5 space-y-3.5 sm:space-y-4 bg-gradient-to-b from-slate-900 to-slate-950/90 min-h-[300px] sm:min-h-[330px]">
            {/* Inner Top Nav */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-sm">
                  <Layers className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-semibold text-white tracking-tight">Studio Portal</span>
              </div>
              <div className="hidden sm:flex items-center gap-3 text-[11px] text-slate-400">
                <span className="text-white font-medium">Overview</span>
                <span>Bookings</span>
                <span>Orders</span>
              </div>
              <div className="px-2.5 py-1 rounded-md bg-blue-600/90 text-white text-[10px] sm:text-[11px] font-medium flex items-center gap-1 shadow-sm">
                <span>Book Online</span>
              </div>
            </div>

            {/* Headline Inside Portal */}
            <div className="space-y-1 pr-6 sm:pr-0">
              <h4 className="text-xs sm:text-base font-bold text-white tracking-tight">
                Business Operations &amp; Customer Portal
              </h4>
              <p className="text-[11px] sm:text-xs text-slate-400">
                Bookings, customer orders and client services — all in one place.
              </p>
            </div>

            {/* Business Outcome Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              {/* Outcome Card 1: Online Booking System */}
              <div className="p-2.5 sm:p-3 rounded-xl bg-slate-900/90 border border-slate-800/90 space-y-1.5 sm:space-y-2 max-w-[210px] sm:max-w-none">
                <div className="flex items-center justify-between">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                    Confirmed
                  </span>
                </div>
                <div>
                  <div className="text-[11px] sm:text-xs font-semibold text-white">Online Bookings</div>
                  <div className="text-[10px] sm:text-[11px] text-slate-400">Customer scheduled appointment</div>
                </div>
              </div>

              {/* Outcome Card 2: Customer Orders (Visible on sm & up) */}
              <div className="hidden sm:block p-3 rounded-xl bg-slate-900/90 border border-slate-800/90 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="w-7 h-7 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    <ShoppingBag className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-semibold text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-full">
                    Dispatched
                  </span>
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">Customer Orders</div>
                  <div className="text-[11px] text-slate-400">Seamless checkout &amp; status</div>
                </div>
              </div>
            </div>

            {/* Client Activity Preview Strip */}
            <div className="p-2.5 sm:p-3 rounded-xl bg-slate-950/80 border border-slate-800/70 space-y-1.5 sm:space-y-2 pr-28 sm:pr-3">
              <div className="flex items-center justify-between text-[10px] sm:text-[11px]">
                <span className="text-slate-400 font-medium">Recent Customer Activity</span>
                <span className="text-blue-400 flex items-center gap-0.5 hover:underline cursor-pointer">
                  <span>View All</span>
                  <ArrowUpRight className="w-3 h-3" />
                </span>
              </div>
              <div className="space-y-1.5 text-xs">
                <div className="flex items-center justify-between text-slate-300">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                    <span className="text-[10px] sm:text-[11px] truncate">Client consultation confirmed</span>
                  </div>
                  <span className="text-[9px] sm:text-[10px] text-slate-500 shrink-0 ml-1">Just now</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                    <span className="text-[10px] sm:text-[11px] truncate">Order fulfillment notified</span>
                  </div>
                  <span className="text-[9px] sm:text-[10px] text-slate-500 shrink-0 ml-1">5m ago</span>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

        {/* ======================================================== */}
        {/* 2. SMARTPHONE MOCKUP: Mobile Apps (Overlapping)          */}
        {/* ======================================================== */}
        <motion.div
          animate={floatPhone}
          className="absolute -bottom-5 right-0 sm:right-2 w-[140px] sm:w-[195px] rounded-[24px] sm:rounded-[30px] bg-slate-950 border-[3px] border-slate-700/80 shadow-[0_25px_60px_rgba(0,0,0,0.85)] p-2 sm:p-2.5 z-20"
        >
          {/* Phone Top Speaker Notch */}
          <div className="w-12 sm:w-16 h-2.5 sm:h-3 bg-slate-900 rounded-full mx-auto mb-1.5 sm:mb-2 flex items-center justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-800" />
          </div>

          {/* Phone Screen Content */}
          <div className="space-y-1.5 sm:space-y-2 bg-slate-900/90 rounded-[18px] sm:rounded-[22px] p-2 sm:p-2.5 border border-slate-800">
            {/* Mobile App Header */}
            <div className="flex items-center justify-between">
              <span className="text-[9px] sm:text-[10px] font-bold text-white flex items-center gap-1">
                <Smartphone className="w-3 h-3 text-indigo-400" />
                <span>Mobile App</span>
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            </div>

            {/* Mobile Booking Widget */}
            <div className="p-1.5 sm:p-2 rounded-xl bg-slate-950/90 border border-slate-800/80 space-y-1 sm:space-y-1.5">
              <div className="text-[8px] sm:text-[10px] text-slate-400">Next Booking</div>
              <div className="text-[9px] sm:text-[11px] font-semibold text-white leading-tight">Tomorrow • 10:00 AM</div>
              <div className="w-full py-1 rounded-md bg-blue-600 text-white text-[8px] sm:text-[9px] font-medium text-center">
                Confirm Service
              </div>
            </div>

            {/* Mobile Order Widget */}
            <div className="p-1.5 sm:p-2 rounded-xl bg-slate-950/90 border border-slate-800/80 flex items-center justify-between">
              <div>
                <div className="text-[8px] sm:text-[9px] text-slate-400">Order #382</div>
                <div className="text-[9px] sm:text-[10px] font-semibold text-white">Ready for pickup</div>
              </div>
              <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400 shrink-0" />
            </div>

            {/* Mobile Tab Bar Mini */}
            <div className="pt-1 flex items-center justify-around border-t border-slate-800/80 text-[10px] text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
              <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
            </div>
          </div>
        </motion.div>

        {/* ======================================================== */}
        {/* 3. FLOATING AI ASSISTANT / MESSAGE CARD                  */}
        {/* ======================================================== */}
        <motion.div
          animate={floatAiCard}
          className="absolute -top-4 right-1 sm:right-6 max-w-[170px] sm:max-w-[220px] rounded-xl bg-slate-900/95 border border-indigo-500/40 p-2 sm:p-2.5 shadow-xl backdrop-blur-md z-30"
        >
          <div className="flex items-center justify-between pb-1.5 border-b border-slate-800">
            <div className="flex items-center gap-1 sm:gap-1.5">
              <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-md bg-indigo-500/20 text-indigo-400 flex items-center justify-center">
                <Bot className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
              </div>
              <span className="text-[10px] sm:text-[11px] font-semibold text-white">AI Assistant</span>
            </div>
            {/* Subtle Pulsing Live Indicator */}
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
          </div>

          <div className="space-y-1 sm:space-y-1.5 pt-1.5 text-[9px] sm:text-[10px]">
            <div className="p-1 sm:p-1.5 rounded-lg bg-slate-800/80 text-slate-300">
              "Can I book a consultation?"
            </div>
            <div className="p-1 sm:p-1.5 rounded-lg bg-indigo-950/60 border border-indigo-500/30 text-indigo-200 flex items-center gap-1 font-medium">
              <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-indigo-400 shrink-0" />
              <span>Booked for Friday at 2:00 PM!</span>
            </div>
          </div>
        </motion.div>

        {/* ======================================================== */}
        {/* 4. FLOATING BUSINESS OUTCOME BADGE (Left Top)            */}
        {/* ======================================================== */}
        <motion.div
          animate={floatBadgeLeft}
          className="hidden sm:flex absolute top-12 -left-4 items-center gap-2 px-3 py-2 rounded-xl bg-slate-900/95 border border-emerald-500/30 shadow-lg backdrop-blur-md z-20"
        >
          <div className="w-7 h-7 rounded-lg bg-emerald-500/15 flex items-center justify-center text-emerald-400">
            <CheckCircle2 className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[11px] font-bold text-white leading-tight">Online Bookings</div>
            <div className="text-[9px] text-emerald-400 font-medium">Automated scheduling</div>
          </div>
        </motion.div>

        {/* ======================================================== */}
        {/* 5. FLOATING BUSINESS OUTCOME BADGE (Left Bottom)         */}
        {/* ======================================================== */}
        <motion.div
          animate={floatBadgeBottom}
          className="hidden sm:flex absolute -bottom-2 -left-3 items-center gap-2 px-3 py-2 rounded-xl bg-slate-900/95 border border-blue-500/30 shadow-lg backdrop-blur-md z-20"
        >
          <div className="w-7 h-7 rounded-lg bg-blue-500/15 flex items-center justify-center text-blue-400">
            <ShoppingBag className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[11px] font-bold text-white leading-tight">Customer Orders</div>
            <div className="text-[9px] text-blue-300 font-medium">Seamless checkout</div>
          </div>
        </motion.div>

      </div>

      {/* ======================================================== */}
      {/* 6. INSTANT 2-SECOND DELIVERABLE PILLS                   */}
      {/* ======================================================== */}
      <div className="mt-7 pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-[11px] text-slate-400">
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900/80 border border-slate-800 text-slate-300">
          <Globe className="w-3.5 h-3.5 text-blue-400" />
          <span>Websites</span>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900/80 border border-slate-800 text-slate-300">
          <Smartphone className="w-3.5 h-3.5 text-indigo-400" />
          <span>Mobile Apps</span>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900/80 border border-slate-800 text-slate-300">
          <Layers className="w-3.5 h-3.5 text-cyan-400" />
          <span>Business Software</span>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900/80 border border-slate-800 text-slate-300">
          <Sparkles className="w-3.5 h-3.5 text-purple-400" />
          <span>AI Experiences</span>
        </div>
      </div>
    </div>
  );
};
