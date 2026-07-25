import React from 'react';
import { WHY_US_GRID } from '../data/content';
import { Users, Clock, Lock, Sparkles, GitBranch, CheckCircle2, ShieldCheck, XCircle, Check } from 'lucide-react';

export const ValueProps: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Users':
        return <Users className="w-5 h-5 text-indigo-400" />;
      case 'Clock':
        return <Clock className="w-5 h-5 text-cyan-400" />;
      case 'Lock':
        return <Lock className="w-5 h-5 text-purple-400" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-amber-400" />;
      case 'GitBranch':
        return <GitBranch className="w-5 h-5 text-emerald-400" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-indigo-400" />;
    }
  };

  const comparison = [
    { feature: 'Senior Engineering Team', '28labs': true, agency: 'Part-Time Juniors', freelancer: 'Single Dev', inhouse: '6+ Month Hiring' },
    { feature: 'Fixed Sprint Timelines', '28labs': true, agency: 'Scope Creep', freelancer: 'Unpredictable', inhouse: 'Varies' },
    { feature: '100% IP & Code Ownership', '28labs': true, agency: 'Vendor Lock-in', freelancer: 'Fragmented', inhouse: true },
    { feature: 'Production-Grade AI Standards', '28labs': true, agency: 'Basic Wrappers', freelancer: 'Experimental', inhouse: 'High Hiring Cost' },
    { feature: '30-Day Post-Launch Warranty', '28labs': true, agency: 'Paid Retainer Only', freelancer: 'Uncertain', inhouse: true },
  ];

  return (
    <section id="why-us" className="py-24 relative bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/80 border border-indigo-500/30 text-indigo-300 text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span>The 28labs Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Why Founders & Operators <span className="text-gradient-cyan">Choose 28labs</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            We combine the speed of an elite startup squad with the reliability of enterprise software engineering.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {WHY_US_GRID.map((item, idx) => (
            <div
              key={idx}
              className="glass-card glass-card-hover p-6 rounded-2xl border border-slate-800/80 space-y-4"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center">
                {getIcon(item.icon)}
              </div>
              <h3 className="text-lg font-bold text-white">{item.title}</h3>
              <p className="text-slate-300 text-xs leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Comparison Matrix Table */}
        <div className="glass-card rounded-2xl border border-slate-800 p-6 sm:p-8 space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h3 className="text-xl font-bold text-white">How 28labs Compares to Alternatives</h3>
            <p className="text-xs text-slate-400">See why high-growth companies partner with us over traditional options.</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-slate-800 text-xs text-slate-400">
                  <th className="py-3 px-4 font-semibold">Evaluation Criteria</th>
                  <th className="py-3 px-4 font-bold text-indigo-400 bg-indigo-950/40 rounded-t-xl">28labs Boutique</th>
                  <th className="py-3 px-4 font-semibold">Legacy Agencies</th>
                  <th className="py-3 px-4 font-semibold">Freelance Devs</th>
                  <th className="py-3 px-4 font-semibold">In-House Hire</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 text-xs">
                {comparison.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-900/40">
                    <td className="py-3.5 px-4 font-medium text-slate-200">{row.feature}</td>
                    <td className="py-3.5 px-4 font-bold text-emerald-400 bg-indigo-950/20 flex items-center gap-1">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Guaranteed</span>
                    </td>
                    <td className="py-3.5 px-4 text-slate-400">{row.agency}</td>
                    <td className="py-3.5 px-4 text-slate-400">{row.freelancer}</td>
                    <td className="py-3.5 px-4 text-slate-400">{row.inhouse === true ? 'Yes (Slow)' : row.inhouse}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
