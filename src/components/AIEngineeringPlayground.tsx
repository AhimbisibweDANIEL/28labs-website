import React, { useState } from 'react';
import { motion } from 'motion/react';
import { AI_AUTOMATION_EXAMPLES } from '../data/content';
import { 
  Sparkles, 
  ArrowRight, 
  MessageSquare, 
  Bot, 
  Bell, 
  FileText, 
  Cpu, 
  Database, 
  Inbox, 
  Workflow, 
  CheckCircle2 
} from 'lucide-react';

interface AIAutomationSectionProps {
  onOpenConsultation?: (topic?: string) => void;
}

export const AIEngineeringPlayground: React.FC<AIAutomationSectionProps> = ({ onOpenConsultation }) => {
  const [activeWorkflow, setActiveWorkflow] = useState<number>(0);

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'MessageSquare':
        return <MessageSquare className="w-5 h-5 text-[#0070f3]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#0070f3]" />;
      case 'Bell':
        return <Bell className="w-5 h-5 text-[#0070f3]" />;
      case 'FileText':
        return <FileText className="w-5 h-5 text-[#0070f3]" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-[#0070f3]" />;
      case 'Database':
        return <Database className="w-5 h-5 text-[#0070f3]" />;
      case 'Inbox':
        return <Inbox className="w-5 h-5 text-[#0070f3]" />;
      case 'Workflow':
        return <Workflow className="w-5 h-5 text-[#0070f3]" />;
      case 'CheckCircle':
        return <CheckCircle2 className="w-5 h-5 text-emerald-600" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#0070f3]" />;
    }
  };

  return (
    <section id="ai-automation-section" className="py-24 sm:py-32 relative bg-[#fafafa] border-t border-[#eaeaea]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-medium tracking-widest uppercase text-[#888888] mb-3">
              Practical Intelligence
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black tracking-tight mb-5">
              What could you automate?
            </h2>
            <p className="text-base sm:text-lg text-[#666666] leading-relaxed max-w-2xl mx-auto">
              Tell us about a repetitive task in your business and we'll explore how AI could help.
            </p>
          </motion.div>
        </div>

        {/* 3 Workflow Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {AI_AUTOMATION_EXAMPLES.map((workflow, idx) => (
            <motion.div
              key={workflow.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => setActiveWorkflow(idx)}
              className={`group cursor-pointer rounded-2xl p-7 flex flex-col justify-between transition-all duration-200 border ${
                activeWorkflow === idx
                  ? 'bg-white border-black shadow-[0_8px_30px_rgba(0,0,0,0.08)]'
                  : 'bg-white border-[#eaeaea] hover:border-[#d4d4d4]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xs font-semibold tracking-widest uppercase text-[#0070f3]">
                    {workflow.title}
                  </h3>
                  <span className={`w-2 h-2 rounded-full ${activeWorkflow === idx ? 'bg-[#0070f3]' : 'bg-[#d4d4d4]'}`} />
                </div>

                <p className="text-base font-semibold text-black mb-8">
                  {workflow.subtitle}
                </p>

                <div className="space-y-4">
                  {workflow.steps.map((stepItem, stepIdx) => (
                    <div key={stepIdx} className="relative">
                      {stepIdx < workflow.steps.length - 1 && (
                        <div className="absolute left-4 top-10 bottom-0 w-0.5 bg-[#eaeaea] h-4 z-0" />
                      )}

                      <div className="flex items-center gap-3.5 relative z-10">
                        <div className="w-8 h-8 rounded-lg bg-[#fafafa] border border-[#eaeaea] flex items-center justify-center shrink-0">
                          {getStepIcon(stepItem.icon)}
                        </div>
                        <span className="text-sm text-[#333333] font-medium">
                          {stepItem.label}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-8 border-t border-[#eaeaea] flex items-center justify-between text-xs text-[#888888]">
                <span>Hands-free workflow</span>
                <span className="text-[#0070f3] font-medium group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                  Active Demo <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section Action */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center"
        >
          <button
            onClick={() => onOpenConsultation?.('AI Automation')}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-black hover:bg-neutral-700 text-white font-medium text-[15px] transition-colors duration-200 cursor-pointer"
          >
            <span>Explore AI Automation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};
