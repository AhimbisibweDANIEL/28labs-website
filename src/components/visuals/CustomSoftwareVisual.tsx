import React from 'react';
import { Layers, ShoppingCart, Package, Users, Check, ArrowRight, ClipboardCheck } from 'lucide-react';

export const CustomSoftwareVisual: React.FC = () => {
  const modules = [
    { id: 'sales', label: 'Sales', desc: 'Orders & Invoicing', status: 'Live Sync', icon: ShoppingCart, color: 'text-emerald-600' },
    { id: 'customers', label: 'Customers', desc: 'Accounts & History', status: 'Centralized', icon: Users, color: 'text-[#0070f3]' },
    { id: 'inventory', label: 'Inventory', desc: 'Stock & Supplies', status: 'Real-Time', icon: Package, color: 'text-[#0070f3]' },
    { id: 'operations', label: 'Operations', desc: 'Staff & Tasks', status: 'Organized', icon: ClipboardCheck, color: 'text-[#0070f3]' },
  ];

  return (
    <div className="w-full rounded-2xl bg-white border border-[#eaeaea] p-5 space-y-4 shadow-[0_8px_30px_rgba(0,0,0,0.05)]">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#eaeaea] pb-3">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-[#0070f3]/5 border border-[#0070f3]/20 flex items-center justify-center">
            <Layers className="w-4 h-4 text-[#0070f3]" />
          </div>
          <div>
            <div className="text-xs font-semibold text-black">Unified Business Hub</div>
            <div className="text-[10px] text-[#888888]">All departments connected in real time</div>
          </div>
        </div>
        <span className="text-[10px] font-mono text-[#0070f3] bg-[#0070f3]/5 px-2 py-0.5 rounded border border-[#0070f3]/20">
          One System
        </span>
      </div>

      {/* Modules Grid */}
      <div className="grid grid-cols-2 gap-2.5">
        {modules.map((m) => {
          const Icon = m.icon;
          return (
            <div
              key={m.id}
              className="p-3 rounded-xl bg-[#fafafa] border border-[#eaeaea] transition-colors space-y-1.5"
            >
              <div className="flex items-center justify-between text-[#888888]">
                <Icon className={`w-3.5 h-3.5 ${m.color}`} />
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              </div>
              <div className="text-xs font-semibold text-black">{m.label}</div>
              <div className="text-[10px] text-[#888888] truncate">{m.desc}</div>
              <div className="text-[10px] font-medium text-[#0070f3] pt-0.5">{m.status}</div>
            </div>
          );
        })}
      </div>

      {/* Outcome */}
      <div className="p-3 rounded-xl bg-[#fafafa] border border-[#eaeaea] space-y-1.5">
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-[#333333]">
            <Check className="w-4 h-4 text-[#0070f3] shrink-0" />
            <span className="text-xs font-semibold text-black">One Single Source of Truth</span>
          </div>
          <span className="text-[10px] font-mono text-emerald-600">Unified</span>
        </div>
        <div className="text-[10px] text-[#888888] font-mono tracking-tight text-center pt-1 border-t border-[#eaeaea]">
          Sales + Customers + Inventory + Operations → <span className="text-[#0070f3] font-semibold">One System</span>
        </div>
      </div>

      <div className="pt-1 flex items-center justify-between text-[11px] text-[#888888]">
        <span>No disconnected spreadsheets</span>
        <span className="text-[#333333] font-medium">Zero duplicate entry</span>
      </div>
    </div>
  );
};
