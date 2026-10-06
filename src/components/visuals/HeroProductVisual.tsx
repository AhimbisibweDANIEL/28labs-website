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

  const floatBrowser = prefersReduced 
    ? {} 
    : {
        y: [0, -6, 0],
        transition: { duration: 7, repeat: Infinity, ease: 'easeInOut' as const },
      };

  const floatPhone = prefersReduced 
    ? {} 
    : {
        y: [0, 7, 0],
        transition: { duration: 5.8, repeat: Infinity, ease: 'easeInOut' as const, delay: 0.5 },
      };

  const floatBadgeLeft = prefersReduced 
    ? {} 
    : {
        y: [0, -6, 0],
        x: [0, 2, 0],
        transition: { duration: 5.2, repeat: Infinity, ease: 'easeInOut' as const, delay: 1 },
      };

  const floatBadgeBottom = prefersReduced 
    ? {} 
    : {
        y: [0, 5, 0],
        x: [0, -2, 0],
        transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' as const, delay: 1.5 },
      };

  const floatAiCard = prefersReduced 
    ? {} 
    : {
        y: [0, -5, 0],
        transition: { duration: 4.8, repeat: Infinity, ease: 'easeInOut' as const, delay: 0.8 },
      };

  return (
    <div className="relative w-full max-w-[550px] mx-auto select-none pt-3 pb-6 px-1 sm:px-2">
      {/* Calm Ambient Background Glows */}
      <motion.div 
        className="absolute -top-10 -left-10 w-72 h-72 bg-[#0070f3]/10 rounded-full blur-[100px] pointer-events-none"
        animate={prefersReduced ? {} : { scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div 
        className="absolute -bottom-10 -right-8 w-80 h-80 bg-black/[0.05] rounded-full blur-[100px] pointer-events-none"
        animate={prefersReduced ? {} : { scale: [1.1, 1, 1.1], opacity: [0.25, 0.4, 0.25] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      <div className="relative">
        
        {/* ============ MAIN BROWSER MOCKUP ============ */}
        <motion.div
          animate={floatBrowser}
          className="relative rounded-2xl bg-white border border-[#eaeaea] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.12)] overflow-hidden mr-4 sm:mr-10"
        >
          {/* Browser header chrome */}
          <div className="h-10 bg-[#fafafa] border-b border-[#eaeaea] px-3 sm:px-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-400/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80 inline-block" />
              </div>

              <div className="flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-white border border-[#eaeaea] text-[10px] sm:text-[11px] text-[#666666] font-medium">
                <Lock className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-emerald-500 shrink-0" />
                <span className="tracking-tight">business.com/portal</span>
              </div>
            </div>

            <div className="w-6 flex justify-end">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4d4d4]" />
            </div>
          </div>

          {/* Browser content */}
          <div className="p-3.5 sm:p-5 space-y-3.5 sm:space-y-4 bg-white min-h-[300px] sm:min-h-[330px]">
            <div className="flex items-center justify-between pb-3 border-b border-[#eaeaea]">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-black flex items-center justify-center text-white">
                  <Layers className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-semibold text-black tracking-tight">Studio Portal</span>
              </div>
              <div className="hidden sm:flex items-center gap-3 text-[11px] text-[#888888]">
                <span className="text-black font-medium">Overview</span>
                <span>Bookings</span>
                <span>Orders</span>
              </div>
              <div className="px-2.5 py-1 rounded-md bg-black text-white text-[10px] sm:text-[11px] font-medium flex items-center gap-1">
                <span>Book Online</span>
              </div>
            </div>

            <div className="space-y-1 pr-6 sm:pr-0">
              <h4 className="text-xs sm:text-base font-semibold text-black tracking-tight">
                Business Operations &amp; Customer Portal
              </h4>
              <p className="text-[11px] sm:text-xs text-[#666666]">
                Bookings, customer orders and client services — all in one place.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              <div className="p-2.5 sm:p-3 rounded-xl bg-[#fafafa] border border-[#eaeaea] space-y-1.5 sm:space-y-2 max-w-[210px] sm:max-w-none">
                <div className="flex items-center justify-between">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                    <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                    Confirmed
                  </span>
                </div>
                <div>
                  <div className="text-[11px] sm:text-xs font-semibold text-black">Online Bookings</div>
                  <div className="text-[10px] sm:text-[11px] text-[#888888]">Customer scheduled appointment</div>
                </div>
              </div>

              <div className="hidden sm:block p-3 rounded-xl bg-[#fafafa] border border-[#eaeaea] space-y-2">
                <div className="flex items-center justify-between">
                  <div className="w-7 h-7 rounded-lg bg-[#0070f3]/5 border border-[#0070f3]/20 flex items-center justify-center text-[#0070f3]">
                    <ShoppingBag className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-medium text-[#0070f3] bg-[#0070f3]/5 px-2 py-0.5 rounded-full">
                    Dispatched
                  </span>
                </div>
                <div>
                  <div className="text-xs font-semibold text-black">Customer Orders</div>
                  <div className="text-[11px] text-[#888888]">Seamless checkout &amp; status</div>
                </div>
              </div>
            </div>

            <div className="p-2.5 sm:p-3 rounded-xl bg-[#fafafa] border border-[#eaeaea] space-y-1.5 sm:space-y-2 pr-28 sm:pr-3">
              <div className="flex items-center justify-between text-[10px] sm:text-[11px]">
                <span className="text-[#888888] font-medium">Recent Customer Activity</span>
                <span className="text-[#0070f3] flex items-center gap-0.5 cursor-pointer">
                  <span>View All</span>
                  <ArrowUpRight className="w-3 h-3" />
                </span>
              </div>
              <div className="space-y-1.5 text-xs">
                <div className="flex items-center justify-between text-[#333333]">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                    <span className="text-[10px] sm:text-[11px] truncate">Client consultation confirmed</span>
                  </div>
                  <span className="text-[9px] sm:text-[10px] text-[#a3a3a3] shrink-0 ml-1">Just now</span>
                </div>
                <div className="flex items-center justify-between text-[#333333]">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0070f3] shrink-0" />
                    <span className="text-[10px] sm:text-[11px] truncate">Order fulfillment notified</span>
                  </div>
                  <span className="text-[9px] sm:text-[10px] text-[#a3a3a3] shrink-0 ml-1">5m ago</span>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

        {/* ============ SMARTPHONE MOCKUP ============ */}
        <motion.div
          animate={floatPhone}
          className="absolute -bottom-5 right-0 sm:right-2 w-[140px] sm:w-[195px] rounded-[24px] sm:rounded-[30px] bg-white border border-[#d4d4d4] shadow-[0_25px_60px_rgba(0,0,0,0.18)] p-2 sm:p-2.5 z-20"
        >
          <div className="w-12 sm:w-16 h-2.5 sm:h-3 bg-black rounded-full mx-auto mb-1.5 sm:mb-2 flex items-center justify-center" />

          <div className="space-y-1.5 sm:space-y-2 bg-[#fafafa] rounded-[18px] sm:rounded-[22px] p-2 sm:p-2.5 border border-[#eaeaea]">
            <div className="flex items-center justify-between">
              <span className="text-[9px] sm:text-[10px] font-semibold text-black flex items-center gap-1">
                <Smartphone className="w-3 h-3 text-[#0070f3]" />
                <span>Mobile App</span>
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            </div>

            <div className="p-1.5 sm:p-2 rounded-xl bg-white border border-[#eaeaea] space-y-1 sm:space-y-1.5">
              <div className="text-[8px] sm:text-[10px] text-[#888888]">Next Booking</div>
              <div className="text-[9px] sm:text-[11px] font-semibold text-black leading-tight">Tomorrow • 10:00 AM</div>
              <div className="w-full py-1 rounded-md bg-black text-white text-[8px] sm:text-[9px] font-medium text-center">
                Confirm Service
              </div>
            </div>

            <div className="p-1.5 sm:p-2 rounded-xl bg-white border border-[#eaeaea] flex items-center justify-between">
              <div>
                <div className="text-[8px] sm:text-[9px] text-[#888888]">Order #382</div>
                <div className="text-[9px] sm:text-[10px] font-semibold text-black">Ready for pickup</div>
              </div>
              <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-500 shrink-0" />
            </div>

            <div className="pt-1 flex items-center justify-around border-t border-[#eaeaea] text-[10px] text-[#888888]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0070f3]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4d4d4]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4d4d4]" />
            </div>
          </div>
        </motion.div>

        {/* ============ FLOATING AI CARD ============ */}
        <motion.div
          animate={floatAiCard}
          className="absolute -top-4 right-1 sm:right-6 max-w-[170px] sm:max-w-[220px] rounded-xl bg-white border border-[#eaeaea] p-2 sm:p-2.5 shadow-lg z-30"
        >
          <div className="flex items-center justify-between pb-1.5 border-b border-[#eaeaea]">
            <div className="flex items-center gap-1 sm:gap-1.5">
              <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-md bg-[#0070f3]/10 text-[#0070f3] flex items-center justify-center">
                <Bot className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
              </div>
              <span className="text-[10px] sm:text-[11px] font-semibold text-black">AI Assistant</span>
            </div>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
          </div>

          <div className="space-y-1 sm:space-y-1.5 pt-1.5 text-[9px] sm:text-[10px]">
            <div className="p-1 sm:p-1.5 rounded-lg bg-[#fafafa] text-[#666666]">
              "Can I book a consultation?"
            </div>
            <div className="p-1 sm:p-1.5 rounded-lg bg-[#0070f3]/5 border border-[#0070f3]/20 text-[#0070f3] flex items-center gap-1 font-medium">
              <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#0070f3] shrink-0" />
              <span>Booked for Friday at 2:00 PM!</span>
            </div>
          </div>
        </motion.div>

        {/* ============ FLOATING BADGE LEFT ============ */}
        <motion.div
          animate={floatBadgeLeft}
          className="hidden sm:flex absolute top-12 -left-4 items-center gap-2 px-3 py-2 rounded-xl bg-white border border-[#eaeaea] shadow-lg z-20"
        >
          <div className="w-7 h-7 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
            <CheckCircle2 className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[11px] font-semibold text-black leading-tight">Online Bookings</div>
            <div className="text-[9px] text-emerald-600 font-medium">Automated scheduling</div>
          </div>
        </motion.div>

        {/* ============ FLOATING BADGE BOTTOM ============ */}
        <motion.div
          animate={floatBadgeBottom}
          className="hidden sm:flex absolute -bottom-2 -left-3 items-center gap-2 px-3 py-2 rounded-xl bg-white border border-[#eaeaea] shadow-lg z-20"
        >
          <div className="w-7 h-7 rounded-lg bg-[#0070f3]/5 flex items-center justify-center text-[#0070f3]">
            <ShoppingBag className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[11px] font-semibold text-black leading-tight">Customer Orders</div>
            <div className="text-[9px] text-[#0070f3] font-medium">Seamless checkout</div>
          </div>
        </motion.div>

      </div>

      {/* ============ DELIVERABLE PILLS ============ */}
      <div className="mt-7 pt-4 border-t border-[#eaeaea] flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-[11px] text-[#666666]">
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white border border-[#eaeaea] text-[#333333]">
          <Globe className="w-3.5 h-3.5 text-[#0070f3]" />
          <span>Websites</span>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white border border-[#eaeaea] text-[#333333]">
          <Smartphone className="w-3.5 h-3.5 text-[#0070f3]" />
          <span>Mobile Apps</span>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white border border-[#eaeaea] text-[#333333]">
          <Layers className="w-3.5 h-3.5 text-[#0070f3]" />
          <span>Business Software</span>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white border border-[#eaeaea] text-[#333333]">
          <Sparkles className="w-3.5 h-3.5 text-[#0070f3]" />
          <span>AI Experiences</span>
        </div>
      </div>
    </div>
  );
};
