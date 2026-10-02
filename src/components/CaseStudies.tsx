import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SELECTED_PROJECTS } from '../data/content';
import { CaseStudy } from '../types';
import { 
  ArrowRight, 
  X, 
  Layers, 
  ExternalLink, 
  UserCheck, 
  HelpCircle, 
  CheckCircle2,
  Calendar,
  Sparkles,
  ShoppingBag,
  Sliders
} from 'lucide-react';

interface CaseStudiesProps {
  onOpenConsultation: (topic?: string) => void;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ onOpenConsultation }) => {
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);

  const getCardVisualMockup = (studyId: string) => {
    switch (studyId) {
      case 'project-operations-portal':
        return (
          <div className="w-full h-48 rounded-2xl bg-slate-900 border border-white/10 p-4 relative overflow-hidden flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-white/5 pb-2.5">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-xs font-semibold text-white">Central Operations Hub</span>
              </div>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-300">Live Workspace</span>
            </div>
            <div className="grid grid-cols-3 gap-2 my-2">
              <div className="bg-slate-800/80 p-2 rounded-xl text-center">
                <div className="text-[10px] text-slate-400">Inquiries</div>
                <div className="text-sm font-bold text-white">100% Routed</div>
              </div>
              <div className="bg-slate-800/80 p-2 rounded-xl text-center">
                <div className="text-[10px] text-slate-400">Team Status</div>
                <div className="text-sm font-bold text-emerald-400">Synchronized</div>
              </div>
              <div className="bg-slate-800/80 p-2 rounded-xl text-center">
                <div className="text-[10px] text-slate-400">Reports</div>
                <div className="text-sm font-bold text-blue-400">Automated</div>
              </div>
            </div>
            <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-white/5">
              <span>All records in one place</span>
              <span className="text-blue-300 font-medium">Replaces 4 spreadsheets</span>
            </div>
          </div>
        );

      case 'project-mobile-customer-app':
        return (
          <div className="w-full h-48 rounded-2xl bg-slate-900 border border-white/10 p-4 relative overflow-hidden flex items-center justify-center">
            <div className="w-48 bg-slate-950 border border-slate-700/60 rounded-2xl p-3 shadow-xl">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10">
                <span className="text-[11px] font-bold text-white">Book Appointment</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              </div>
              <div className="space-y-1.5 text-[10px]">
                <div className="p-1.5 rounded-lg bg-indigo-600/20 text-indigo-300 border border-indigo-500/30 flex items-center justify-between">
                  <span>Friday 10:00 AM</span>
                  <span className="font-bold">Selected</span>
                </div>
                <div className="p-1.5 rounded-lg bg-slate-800 text-slate-300 flex items-center justify-between">
                  <span>Friday 02:00 PM</span>
                  <span>Available</span>
                </div>
              </div>
              <div className="mt-2.5 py-1 text-center rounded-lg bg-indigo-600 text-white font-medium text-[10px]">
                Confirmed Instantly
              </div>
            </div>
          </div>
        );

      case 'project-support-automation':
        return (
          <div className="w-full h-48 rounded-2xl bg-slate-900 border border-white/10 p-4 relative overflow-hidden flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-white/5 pb-2">
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                <span className="text-xs font-semibold text-white">AI Assistant</span>
              </div>
              <span className="text-[10px] text-purple-300 bg-purple-500/10 px-2 py-0.5 rounded-full">24/7 Online</span>
            </div>
            <div className="space-y-2 text-xs my-auto">
              <div className="bg-slate-800/80 p-2.5 rounded-2xl rounded-tl-none text-slate-200 border border-white/5 max-w-[85%]">
                "What time are you open on Saturday?"
              </div>
              <div className="bg-purple-600/20 border border-purple-500/30 p-2.5 rounded-2xl rounded-tr-none text-purple-200 ml-auto max-w-[85%]">
                "We're open 9am to 6pm on Saturday. Would you like to schedule an appointment?"
              </div>
            </div>
            <div className="text-[11px] text-slate-400 pt-2 border-t border-white/5 flex justify-between">
              <span>Immediate customer response</span>
              <span className="text-purple-300 font-medium">Zero wait time</span>
            </div>
          </div>
        );

      case 'project-web-storefront':
        return (
          <div className="w-full h-48 rounded-2xl bg-slate-900 border border-white/10 p-4 relative overflow-hidden flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-white/5 pb-2">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-xs font-semibold text-white">Curated Storefront</span>
              </div>
              <span className="text-[10px] text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded-full">Sub-Second Load</span>
            </div>
            <div className="grid grid-cols-2 gap-3 my-auto">
              <div className="bg-slate-800/60 p-2.5 rounded-xl border border-white/5 flex flex-col justify-between">
                <div className="w-full h-12 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 mb-1">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <div className="text-xs font-semibold text-white">Product Card</div>
                <div className="text-[10px] text-slate-400">1-Tap Checkout</div>
              </div>
              <div className="bg-slate-800/60 p-2.5 rounded-xl border border-white/5 flex flex-col justify-between">
                <div className="w-full h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-1">
                  <Sliders className="w-5 h-5" />
                </div>
                <div className="text-xs font-semibold text-white">Instant Filter</div>
                <div className="text-[10px] text-slate-400">Zero lag browsing</div>
              </div>
            </div>
            <div className="text-[11px] text-slate-400 pt-2 border-t border-white/5 flex justify-between">
              <span>Optimized for mobile shoppers</span>
              <span className="text-amber-300 font-medium">Clean shopping flow</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="projects" className="py-24 sm:py-36 relative scroll-mt-10">
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
              Portfolio
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-5">
              Things we've built.
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl mx-auto">
              Real digital solutions engineered to make everyday operations effortless and customers happy.
            </p>
          </motion.div>
        </div>

        {/* Selected Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {SELECTED_PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="group relative rounded-3xl bg-slate-900/50 backdrop-blur-sm border border-white/10 hover:border-blue-500/30 p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/5 hover:-translate-y-1"
            >
              <div>
                {/* Visual Preview */}
                <div className="mb-6">
                  {getCardVisualMockup(project.id)}
                </div>

                {/* Badges / Classification */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-white/10">
                    {project.clientName}
                  </span>
                  <span className="text-xs font-medium text-blue-400">
                    {project.industry}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                  {project.title}
                </h3>

                {/* What it does (summary) */}
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {project.summary}
                </p>

                {/* Who it helps & Problem it solves */}
                <div className="space-y-3 pt-4 border-t border-white/5 mb-6 text-xs">
                  {project.whoItHelps && (
                    <div className="flex items-start gap-2.5">
                      <UserCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-slate-300">Who it helps: </span>
                        <span className="text-slate-400">{project.whoItHelps}</span>
                      </div>
                    </div>
                  )}

                  {project.problemSolved && (
                    <div className="flex items-start gap-2.5">
                      <HelpCircle className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-slate-300">Problem solved: </span>
                        <span className="text-slate-400">{project.problemSolved}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Action */}
              <div className="pt-2">
                <button
                  onClick={() => setSelectedStudy(project)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-medium bg-slate-800/80 hover:bg-slate-700/80 text-white border border-white/10 transition-colors cursor-pointer"
                >
                  <span>Explore Project Details</span>
                  <ArrowRight className="w-4 h-4 text-blue-400 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Project Details Modal (Where technical stack and deeper info lives) */}
      {selectedStudy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-2xl bg-slate-900 border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedStudy(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-800/80 text-slate-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300">
                    {selectedStudy.clientName}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    {selectedStudy.industry}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  {selectedStudy.title}
                </h3>
              </div>

              <p className="text-slate-300 leading-relaxed text-base">
                {selectedStudy.summary}
              </p>

              <div className="space-y-4 bg-slate-800/50 p-5 rounded-2xl border border-white/5">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                    The Business Challenge
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {selectedStudy.challenge}
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Our Solution
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {selectedStudy.solution}
                  </p>
                </div>
              </div>

              {/* Technical Stack (De-emphasized inside the modal) */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Technical Foundation
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedStudy.techUsed.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-lg bg-slate-800 text-slate-300 border border-white/5 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    const title = selectedStudy.title;
                    setSelectedStudy(null);
                    onOpenConsultation(title);
                  }}
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-colors flex items-center justify-center gap-2"
                >
                  <span>Build Something Similar</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setSelectedStudy(null)}
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white font-medium text-sm transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
