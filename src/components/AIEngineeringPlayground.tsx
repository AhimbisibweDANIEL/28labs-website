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
        return <MessageSquare className="w-5 h-5 text-blue-400" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-indigo-400" />;
      case 'Bell':
        return <Bell className="w-5 h-5 text-amber-400" />;
      case 'FileText':
        return <FileText className="w-5 h-5 text-emerald-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-blue-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-indigo-400" />;
      case 'Inbox':
        return <Inbox className="w-5 h-5 text-amber-400" />;
      case 'Workflow':
        return <Workflow className="w-5 h-5 text-blue-400" />;
      case 'CheckCircle':
        return <CheckCircle2 className="w-5 h-5 text-emerald-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="ai-automation-section" className="py-24 sm:py-36 relative bg-slate-950/70 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-blue-400 mb-3">
              Practical Intelligence
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-5">
              What could you automate?
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Tell us about a repetitive task in your business and we'll explore how AI could help.
            </p>
          </motion.div>
        </div>

        {/* 3 Visual Workflow Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {AI_AUTOMATION_EXAMPLES.map((workflow, idx) => (
            <motion.div
              key={workflow.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              onClick={() => setActiveWorkflow(idx)}
              className={`group cursor-pointer rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 border ${
                activeWorkflow === idx
                  ? 'bg-slate-900/90 border-blue-500/50 shadow-2xl shadow-blue-500/10 -translate-y-1'
                  : 'bg-slate-900/40 border-white/10 hover:border-white/20'
              }`}
            >
              <div>
                {/* Workflow Title */}
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xs font-bold tracking-widest uppercase text-blue-400">
                    {workflow.title}
                  </h3>
                  <span className={`w-2 h-2 rounded-full ${activeWorkflow === idx ? 'bg-blue-400 animate-ping' : 'bg-slate-600'}`} />
                </div>

                <p className="text-base font-semibold text-white mb-8">
                  {workflow.subtitle}
                </p>

                {/* Animated Steps Flow */}
                <div className="space-y-4">
                  {workflow.steps.map((stepItem, stepIdx) => (
                    <div key={stepIdx} className="relative">
                      {/* Connector Line */}
                      {stepIdx < workflow.steps.length - 1 && (
                        <div className="absolute left-4 top-10 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/30 to-indigo-500/10 h-4 z-0" />
                      )}

                      <div className="flex items-center gap-3.5 relative z-10">
                        <div className="w-8 h-8 rounded-xl bg-slate-800 border border-white/10 flex items-center justify-center shrink-0">
                          {getStepIcon(stepItem.icon)}
                        </div>
                        <span className="text-xs sm:text-sm text-slate-200 font-medium">
                          {stepItem.label}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Status footer inside card */}
              <div className="pt-6 mt-8 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                <span>Hands-free workflow</span>
                <span className="text-blue-400 font-medium group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                  Active Demo <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Section Action */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center"
        >
          <button
            onClick={() => onOpenConsultation?.('AI Automation')}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-medium text-base shadow-lg shadow-blue-600/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
          >
            <span>Explore AI Automation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};
