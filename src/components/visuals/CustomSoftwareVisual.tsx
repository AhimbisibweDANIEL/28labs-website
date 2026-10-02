import React, { useState, useEffect } from 'react';
import { Layers, ShoppingCart, Package, Users, BarChart3, ArrowRight, Check } from 'lucide-react';

export const CustomSoftwareVisual: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'sales' | 'inventory' | 'customers'>('all');

  const modules = [
    { id: 'sales', label: 'Sales & Revenue', icon: ShoppingCart, count: '$24,850', color: 'text-emerald-400' },
    { id: 'inventory', label: 'Inventory / Stock', icon: Package, count: '142 Items', color: 'text-cyan-400' },
    { id: 'customers', label: 'Active Customers', icon: Users, count: '1,280 Clients', color: 'text-indigo-400' },
    { id: 'reports', label: 'Monthly Reports', icon: BarChart3, count: 'Up to Date', color: 'text-purple-400' },
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
            <div className="text-xs font-bold text-white">Unified Operations Hub</div>
            <div className="text-[10px] text-slate-400">All business functions connected</div>
          </div>
        </div>
        <span className="text-[11px] font-mono text-cyan-300 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
          One System
        </span>
      </div>

      {/* Connected Modules Grid */}
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
              <div className="text-[11px] font-semibold text-slate-300 truncate">{m.label}</div>
              <div className="text-sm font-extrabold text-white">{m.count}</div>
            </div>
          );
        })}
      </div>

      {/* Integration Bar */}
      <div className="p-3 rounded-xl bg-gradient-to-r from-indigo-950/60 to-slate-900 border border-indigo-500/20 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2 text-slate-300">
          <Check className="w-4 h-4 text-cyan-400 shrink-0" />
          <span>No more disconnected spreadsheets</span>
        </div>
        <span className="text-[11px] font-bold text-cyan-400">Connected</span>
      </div>
    </div>
  );
};
