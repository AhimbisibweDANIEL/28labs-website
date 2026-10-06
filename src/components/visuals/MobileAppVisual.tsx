import React, { useState, useEffect } from 'react';
import { Smartphone, Calendar, User, Bell, Check, ArrowRight, Heart } from 'lucide-react';

export const MobileAppVisual: React.FC = () => {
  const [screen, setScreen] = useState<'booking' | 'confirmed' | 'profile'>('booking');

  useEffect(() => {
    const screens: Array<'booking' | 'confirmed' | 'profile'> = ['booking', 'confirmed', 'profile'];
    let idx = 0;
    const timer = setInterval(() => {
      idx = (idx + 1) % screens.length;
      setScreen(screens[idx]);
    }, 2600);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full flex items-center justify-center p-2">
      {/* Phone Mockup Frame */}
      <div className="w-64 rounded-[36px] bg-white border border-[#d4d4d4] shadow-[0_25px_60px_rgba(0,0,0,0.14)] p-3.5 space-y-3 relative overflow-hidden">
        
        {/* Dynamic Island */}
        <div className="w-20 h-4 bg-black rounded-full mx-auto flex items-center justify-center">
          <div className="w-2.5 h-2.5 rounded-full bg-neutral-700"></div>
        </div>

        {/* Screen Container */}
        <div className="rounded-[24px] bg-[#fafafa] border border-[#eaeaea] p-3 min-h-[280px] flex flex-col justify-between space-y-3">
          
          {/* Mobile Header */}
          <div className="flex items-center justify-between border-b border-[#eaeaea] pb-2 text-xs">
            <span className="font-semibold text-black tracking-tight">Your App</span>
            <div className="flex items-center gap-1.5 text-[#888888]">
              <Bell className="w-3 h-3 text-[#0070f3]" />
              <div className="w-4 h-4 rounded-full bg-black flex items-center justify-center text-[9px] text-white">
                JD
              </div>
            </div>
          </div>

          {/* Dynamic Screen */}
          <div className="flex-1 flex flex-col justify-center">
            {screen === 'booking' && (
              <div className="space-y-2.5">
                <span className="text-[10px] font-semibold text-[#0070f3] uppercase tracking-wider block">Book An Appointment</span>
                <div className="bg-white p-2.5 rounded-xl border border-[#eaeaea] space-y-1">
                  <div className="text-xs font-semibold text-black">Consultation Service</div>
                  <div className="text-[10px] text-[#888888]">Available: Today at 2:00 PM</div>
                </div>
                <div className="w-full py-2 rounded-lg bg-black text-white text-[10px] font-medium text-center">
                  Select Time Slot
                </div>
              </div>
            )}

            {screen === 'confirmed' && (
              <div className="space-y-2.5 text-center">
                <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                  <Check className="w-4 h-4" />
                </div>
                <div className="text-xs font-semibold text-black">Booking Confirmed!</div>
                <p className="text-[10px] text-[#888888]">Confirmation notification sent to your phone.</p>
                <div className="p-2 bg-white rounded-lg text-[10px] text-[#0070f3] border border-[#eaeaea]">
                  Calendar sync enabled
                </div>
              </div>
            )}

            {screen === 'profile' && (
              <div className="space-y-2">
                <span className="text-[10px] font-semibold text-[#0070f3] uppercase tracking-wider block">Customer Account</span>
                <div className="p-2 rounded-lg bg-white border border-[#eaeaea] flex items-center justify-between text-[11px]">
                  <span className="text-black">Saved Services</span>
                  <Heart className="w-3 h-3 text-rose-500 fill-rose-500" />
                </div>
                <div className="p-2 rounded-lg bg-white border border-[#eaeaea] flex items-center justify-between text-[11px]">
                  <span className="text-black">Active Orders</span>
                  <span className="text-[#0070f3] font-semibold">1 In Progress</span>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Nav */}
          <div className="pt-2 border-t border-[#eaeaea] grid grid-cols-3 gap-1 text-center text-[9px] text-[#888888]">
            <button
              onClick={() => setScreen('booking')}
              className={`py-1 rounded-md transition-colors ${screen === 'booking' ? 'text-black font-semibold bg-white border border-[#eaeaea]' : ''}`}
            >
              Services
            </button>
            <button
              onClick={() => setScreen('confirmed')}
              className={`py-1 rounded-md transition-colors ${screen === 'confirmed' ? 'text-black font-semibold bg-white border border-[#eaeaea]' : ''}`}
            >
              Activity
            </button>
            <button
              onClick={() => setScreen('profile')}
              className={`py-1 rounded-md transition-colors ${screen === 'profile' ? 'text-black font-semibold bg-white border border-[#eaeaea]' : ''}`}
            >
              Profile
            </button>
          </div>

        </div>

        {/* Home Indicator */}
        <div className="w-24 h-1 bg-[#d4d4d4] rounded-full mx-auto"></div>

      </div>
    </div>
  );
};
