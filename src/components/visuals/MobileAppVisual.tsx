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
      <div className="w-64 rounded-[36px] bg-slate-900 border-4 border-slate-700/80 shadow-2xl p-3.5 space-y-3 relative overflow-hidden backdrop-blur-md">
        
        {/* Top Speaker / Dynamic Island */}
        <div className="w-20 h-4 bg-slate-950 rounded-full mx-auto flex items-center justify-center">
          <div className="w-2.5 h-2.5 rounded-full bg-slate-800"></div>
        </div>

        {/* Screen Container */}
        <div className="rounded-[24px] bg-slate-950 border border-slate-800/80 p-3 min-h-[280px] flex flex-col justify-between space-y-3">
          
          {/* Mobile Header */}
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-2 text-xs">
            <span className="font-bold text-white tracking-tight">Your App</span>
            <div className="flex items-center gap-1.5 text-slate-400">
              <Bell className="w-3 h-3 text-cyan-400" />
              <div className="w-4 h-4 rounded-full bg-slate-800 flex items-center justify-center text-[9px] text-white">
                JD
              </div>
            </div>
          </div>

          {/* Dynamic Screen View */}
          <div className="flex-1 flex flex-col justify-center">
            {screen === 'booking' && (
              <div className="space-y-2.5 animate-in fade-in duration-300">
                <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider block">Book An Appointment</span>
                <div className="bg-slate-900 p-2.5 rounded-xl border border-slate-800 space-y-1">
                  <div className="text-xs font-bold text-white">Consultation Service</div>
                  <div className="text-[10px] text-slate-400">Available: Today at 2:00 PM</div>
                </div>
                <div className="w-full py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-indigo-600 text-white text-[10px] font-bold text-center">
                  Select Time Slot
                </div>
              </div>
            )}

            {screen === 'confirmed' && (
              <div className="space-y-2.5 text-center animate-in fade-in duration-300">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <Check className="w-4 h-4" />
                </div>
                <div className="text-xs font-bold text-white">Booking Confirmed!</div>
                <p className="text-[10px] text-slate-400">Confirmation notification sent to your phone.</p>
                <div className="p-2 bg-slate-900 rounded-lg text-[10px] text-cyan-300 border border-slate-800">
                  Calendar sync enabled
                </div>
              </div>
            )}

            {screen === 'profile' && (
              <div className="space-y-2 animate-in fade-in duration-300">
                <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-wider block">Customer Account</span>
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between text-[11px]">
                  <span className="text-white">Saved Services</span>
                  <Heart className="w-3 h-3 text-rose-400 fill-rose-400" />
                </div>
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between text-[11px]">
                  <span className="text-white">Active Orders</span>
                  <span className="text-cyan-400 font-bold">1 In Progress</span>
                </div>
              </div>
            )}
          </div>

          {/* Bottom App Navigation */}
          <div className="pt-2 border-t border-slate-800/80 grid grid-cols-3 gap-1 text-center text-[9px] text-slate-400">
            <button
              onClick={() => setScreen('booking')}
              className={`py-1 rounded-md transition-colors ${screen === 'booking' ? 'text-cyan-400 font-bold bg-slate-900' : ''}`}
            >
              Services
            </button>
            <button
              onClick={() => setScreen('confirmed')}
              className={`py-1 rounded-md transition-colors ${screen === 'confirmed' ? 'text-cyan-400 font-bold bg-slate-900' : ''}`}
            >
              Activity
            </button>
            <button
              onClick={() => setScreen('profile')}
              className={`py-1 rounded-md transition-colors ${screen === 'profile' ? 'text-cyan-400 font-bold bg-slate-900' : ''}`}
            >
              Profile
            </button>
          </div>

        </div>

        {/* Bottom Home Indicator Bar */}
        <div className="w-24 h-1 bg-slate-700 rounded-full mx-auto"></div>

      </div>
    </div>
  );
};
