import React from 'react';
import { MessageSquare, CheckCircle2, ShieldCheck, Compass, Code2 } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const expectations = [
    {
      title: 'Clear communication.',
      description: 'You stay informed throughout the development process without technical confusion or guesswork.',
      icon: MessageSquare,
      tag: 'Collaboration'
    },
    {
      title: 'Transparent project scope.',
      description: 'Clear alignment on what is being built, the milestones, and the roadmap before development begins.',
      icon: Compass,
      tag: 'Planning'
    },
    {
      title: 'Regular progress updates.',
      description: 'Consistent progress updates and reviewable demos as the product develops so you see real progress taking shape.',
      icon: Code2,
      tag: 'Visibility'
    },
    {
      title: 'Practical solutions.',
      description: 'Technology choices and software architecture chosen to solve your actual business needs.',
      icon: CheckCircle2,
      tag: 'Practicality'
    },
    {
      title: 'Post-launch support.',
      description: 'Reliable deployment, handover, and ongoing support to ensure everything continues running smoothly.',
      icon: ShieldCheck,
      tag: 'Reliability'
    }
  ];

  return (
    <section className="py-24 relative border-b border-[#eaeaea]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#eaeaea] text-[#666666] text-xs font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-[#0070f3]" />
            <span>WORKING WITH US</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black tracking-tight">
            What clients can expect
          </h2>
          <p className="text-[#666666] text-base sm:text-lg">
            When you partner with 28 Labs, our focus is on building practical, reliable technology with complete transparency.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expectations.map((item, idx) => (
            <div
              key={idx}
              className="glass-card glass-card-hover p-7 rounded-2xl flex flex-col justify-between space-y-4 relative"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-[#fafafa] border border-[#eaeaea] flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-[#0070f3]" />
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-[#fafafa] text-[#666666] border border-[#eaeaea]">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-black">
                  {item.title}
                </h3>

                <p className="text-[#666666] text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#eaeaea] flex items-center gap-2 text-xs text-[#888888]">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Core 28 Labs Standard</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
