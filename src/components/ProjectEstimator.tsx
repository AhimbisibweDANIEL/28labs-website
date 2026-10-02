import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Sparkles, Send } from 'lucide-react';

interface ProjectEstimatorProps {
  onOpenConsultationWithScope?: (summary: string) => void;
}

export const ProjectEstimator: React.FC<ProjectEstimatorProps> = ({ 
  onOpenConsultationWithScope 
}) => {
  const [projectType, setProjectType] = useState<string>('Website');
  const [ideaDescription, setIdeaDescription] = useState<string>('');
  const [timeline, setTimeline] = useState<string>('ASAP');
  const [submitted, setSubmitted] = useState<boolean>(false);

  const projectTypes = [
    'Website',
    'Mobile App',
    'Web Application',
    'AI Automation',
    'Custom Software',
    'Not sure yet'
  ];

  const timelines = [
    'ASAP',
    'This month',
    '1–3 months',
    'Just exploring'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const summary = `Project Need: ${projectType} | Timeline: ${timeline} | Idea: ${ideaDescription || 'Not specified'}`;
    
    if (onOpenConsultationWithScope) {
      onOpenConsultationWithScope(summary);
    } else {
      setSubmitted(true);
    }
  };

  return (
    <section id="estimator" className="py-24 sm:py-36 relative scroll-mt-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-blue-400 mb-3">
              Project Starter
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
              Tell us what you want to build.
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Answer 3 quick questions. We'll review your goals and get back with clear options.
            </p>
          </motion.div>
        </div>

        {/* Card Form */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-3xl bg-slate-900/60 backdrop-blur-md border border-white/10 p-7 sm:p-12 shadow-2xl"
        >
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white">Thank you!</h3>
              <p className="text-slate-300 max-w-md mx-auto">
                We've received your project details and will be in touch shortly to explore how we can help.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2.5 rounded-full bg-slate-800 text-slate-300 hover:text-white text-sm"
              >
                Submit another idea
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-10">
              
              {/* Question 1: What do you need? */}
              <div>
                <label className="block text-sm sm:text-base font-semibold text-white mb-4">
                  1. What do you need?
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {projectTypes.map((type) => {
                    const isSelected = projectType === type;
                    return (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setProjectType(type)}
                        className={`p-3.5 sm:p-4 rounded-2xl text-xs sm:text-sm font-medium border text-left transition-all cursor-pointer flex items-center justify-between ${
                          isSelected
                            ? 'bg-blue-600/20 border-blue-500 text-white shadow-lg shadow-blue-500/10'
                            : 'bg-slate-800/40 border-white/5 text-slate-300 hover:border-white/20'
                        }`}
                      >
                        <span>{type}</span>
                        {isSelected && <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Question 2: Tell us about your idea */}
              <div>
                <label 
                  htmlFor="project-idea-desc"
                  className="block text-sm sm:text-base font-semibold text-white mb-2"
                >
                  2. Tell us about your idea.
                </label>
                <p className="text-xs text-slate-400 mb-3">
                  What does your business do, and what problem are you solving? (A few sentences is plenty)
                </p>
                <textarea
                  id="project-idea-desc"
                  rows={4}
                  value={ideaDescription}
                  onChange={(e) => setIdeaDescription(e.target.value)}
                  placeholder="e.g. We run a logistics business and need a simple customer portal so clients can track deliveries without calling us..."
                  className="w-full rounded-2xl bg-slate-800/60 border border-white/10 px-4 py-3.5 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                />
              </div>

              {/* Question 3: When would you like to start? */}
              <div>
                <label className="block text-sm sm:text-base font-semibold text-white mb-4">
                  3. When would you like to start?
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {timelines.map((time) => {
                    const isSelected = timeline === time;
                    return (
                      <button
                        type="button"
                        key={time}
                        onClick={() => setTimeline(time)}
                        className={`p-3.5 rounded-2xl text-xs sm:text-sm font-medium border text-center transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-blue-600/20 border-blue-500 text-white shadow-lg shadow-blue-500/10'
                            : 'bg-slate-800/40 border-white/5 text-slate-300 hover:border-white/20'
                        }`}
                      >
                        {time}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full py-4 px-8 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-medium text-base shadow-xl shadow-blue-600/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2.5 cursor-pointer"
                >
                  <span>Start a Project</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <p className="text-center text-xs text-slate-400 mt-3">
                  No commitment required. We respect your privacy and will never share your idea.
                </p>
              </div>

            </form>
          )}
        </motion.div>

      </div>
    </section>
  );
};
