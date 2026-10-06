import React from 'react';
import { Layers, ShoppingCart, Package, Users, Check, ArrowRight, ClipboardCheck } from 'lucide-react';

export const CustomSoftwareVisual: React.FC = () => {
  const modules = [
    { id: 'sales', label: 'Sales', desc: 'Orders & Invoicing', status: 'Live Sync', icon: ShoppingCart, color: 'text-emerald-400' },
    { id: 'customers', label: 'Customers', desc: 'Accounts & History', status: 'Centralized', icon: Users, color: 'text-indigo-400' },
    { id: 'inventory', label: 'Inventory', desc: 'Stock & Supplies', status: 'Real-Time', icon: Package, color: 'text-cyan-400' },
    { id: 'operations', label: 'Operations', desc: 'Staff & Tasks', status: 'Organized', icon: ClipboardCheck, color: 'text-purple-400' },
  ];

  return (
    <div className="w-full rounded-2xl bg-slate-950 border border-slate-800 p-5 space-y-4 shadow-xl">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center">
            <Layers className="w-4 h-4 text-cyan-400" />
          </div>
          <div>
            <div className="text-xs font-bold text-white">Unified Business Hub</div>
            <div className="text-[10px] text-slate-400">All departments connected in real time</div>
          </div>
        </div>
        <span className="text-[10px] font-mono text-cyan-300 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
          One System
        </span>
      </div>

      {/* Connected Business Modules Grid */}
      <div className="grid grid-cols-2 gap-2.5">
        {modules.map((m) => {
          const Icon = m.icon;
          return (
            <div
              key={m.id}
              className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all space-y-1.5"
            >
              <div className="flex items-center justify-between text-slate-400">
                <Icon className={`w-3.5 h-3.5 ${m.color}`} />
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              </div>
              <div className="text-xs font-bold text-white">{m.label}</div>
              <div className="text-[10px] text-slate-400 truncate">{m.desc}</div>
              <div className="text-[10px] font-medium text-cyan-400/90 pt-0.5">{m.status}</div>
            </div>
          );
        })}
      </div>

      {/* Outcome Formula: Sales + Customers + Inventory + Operations → One System */}
      <div className="p-3 rounded-xl bg-gradient-to-r from-indigo-950/70 via-slate-900 to-blue-950/70 border border-indigo-500/30 space-y-1.5">
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-slate-200">
            <Check className="w-4 h-4 text-cyan-400 shrink-0" />
            <span className="text-xs font-semibold text-white">One Single Source of Truth</span>
          </div>
          <span className="text-[10px] font-mono text-emerald-400">Unified</span>
        </div>
        <div className="text-[10px] text-slate-300 font-mono tracking-tight text-center pt-1 border-t border-white/5">
          Sales + Customers + Inventory + Operations → <span className="text-cyan-300 font-bold">One System</span>
        </div>
      </div>

      <div className="pt-1 flex items-center justify-between text-[11px] text-slate-400">
        <span>No disconnected spreadsheets</span>
        <span className="text-slate-300 font-medium">Zero duplicate entry</span>
      </div>
    </div>
  );
};
