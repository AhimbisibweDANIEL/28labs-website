import React, { useState } from 'react';
import { ConsultationFormData } from '../types';
import { Send, CheckCircle2, Calendar, ShieldCheck, Mail, Building2, User, MessageSquare, Clock, ArrowRight } from 'lucide-react';

interface ContactSectionProps {
  initialProjectType?: string;
  initialMessage?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialProjectType, initialMessage }) => {
  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: '',
    email: '',
    company: '',
    projectType: initialProjectType || 'Web App',
    budgetRange: '$10k - $25k',
    timeline: 'Within 4 Weeks',
    message: initialMessage || ''
  });

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  return (
    <section id="contact" className="py-24 relative bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Value Pitch */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/80 border border-indigo-500/30 text-indigo-300 text-xs font-semibold">
                <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                <span>Start Your Project</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                Let's Build Something <br className="hidden sm:inline" />
                <span className="text-gradient-cyan">Exceptional Together.</span>
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                Fill out the project inquiry form and a Senior Lead Architect will respond within 24 hours with a free technical architecture scope brief and sprint roadmap.
              </p>
            </div>

            {/* Direct Guarantees */}
            <div className="space-y-4 pt-4 border-t border-slate-800">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-950/80 border border-indigo-500/30 flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Non-Disclosure & Privacy First</h4>
                  <p className="text-xs text-slate-400">Mutual NDA applied automatically to all project inquiries and code ideas.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-950/80 border border-indigo-500/30 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-4 h-4 text-indigo-400" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">24-Hour Architecture Response</h4>
                  <p className="text-xs text-slate-400">Receive a structured preliminary scope breakdown before scheduling a call.</p>
                </div>
              </div>
            </div>

            {/* Direct Contact info */}
            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 text-xs text-slate-400 font-mono">
              <div className="text-indigo-400 font-bold font-sans text-sm">Direct Contact Channel</div>
              <div>Email: <a href="mailto:hello@28labs.io" className="text-white hover:underline">hello@28labs.io</a></div>
              <div>Location: San Francisco, CA // Global Remote Sprints</div>
            </div>
          </div>

          {/* Right Column: Sleek Form Card */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-6 sm:p-10 border border-slate-800 shadow-2xl relative">
              
              {isSubmitted ? (
                /* Success Feedback State */
                <div className="text-center py-12 space-y-6 animate-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-xl">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-extrabold text-white">Inquiry Received!</h3>
                    <p className="text-slate-300 text-sm max-w-md mx-auto">
                      Thank you, <strong className="text-white">{formData.fullName}</strong>. Our lead architect has received your inquiry for <strong className="text-cyan-400">{formData.projectType}</strong>.
                    </p>
                  </div>

                  <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 text-left text-xs text-slate-300 max-w-md mx-auto space-y-2 font-mono">
                    <div className="text-indigo-400 font-bold font-sans">Summary of Submission:</div>
                    <div>• Company: {formData.company || 'N/A'}</div>
                    <div>• Project Type: {formData.projectType}</div>
                    <div>• Budget Target: {formData.budgetRange}</div>
                    <div>• Priority Timeline: {formData.timeline}</div>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-3 rounded-xl text-xs font-semibold text-slate-400 hover:text-white"
                    >
                      Submit Another Inquiry
                    </button>

                    <a
                      href="#calendar-preview"
                      onClick={(e) => {
                        e.preventDefault();
                        alert('Consultation calendar placeholder triggered! In production, this redirects directly to Calendly/SavvyCal.');
                      }}
                      className="px-6 py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 flex items-center gap-2 shadow-lg shadow-indigo-500/20"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Optionally Pick a Calendar Slot Now</span>
                    </a>
                  </div>
                </div>
              ) : (
                /* Contact Form */
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="border-b border-slate-800/80 pb-4">
                    <h3 className="text-xl font-bold text-white">Project Consultation Form</h3>
                    <p className="text-xs text-slate-400 mt-1">Provide a few details about your product vision to get started.</p>
                  </div>

                  {/* Name & Email Row */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-indigo-400" /> Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alex Morgan"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-indigo-400" /> Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Company & Project Type Row */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                        <Building2 className="w-3.5 h-3.5 text-indigo-400" /> Company / Startup Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Acme Tech Inc."
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                        <MessageSquare className="w-3.5 h-3.5 text-indigo-400" /> Primary Service Required *
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer"
                      >
                        <option value="Web App">Web Application (React / Next.js)</option>
                        <option value="Mobile App">Mobile App (Cross-Platform / Native)</option>
                        <option value="Custom Website">Custom High-Converting Website</option>
                        <option value="AI Integration">AI & Custom LLM Reasoning Engine</option>
                        <option value="Full Stack">Full Stack + AI Suite</option>
                        <option value="Legacy Refactor">Legacy Re-architecture & Scale</option>
                      </select>
                    </div>
                  </div>

                  {/* Budget Selector Buttons */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-300">Target Budget Range</label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {['<$10k', '$10k - $25k', '$25k - $50k', '$50k+'].map((budget) => (
                        <button
                          key={budget}
                          type="button"
                          onClick={() => setFormData({ ...formData, budgetRange: budget })}
                          className={`py-2.5 px-3 rounded-xl text-xs font-semibold text-center border transition-all cursor-pointer ${
                            formData.budgetRange === budget
                              ? 'bg-indigo-600/30 text-white border-indigo-500 shadow-md'
                              : 'bg-slate-950 text-slate-400 border-slate-800 hover:border-slate-700'
                          }`}
                        >
                          {budget}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message / Brief */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-300">Project Overview & Objectives</label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your product goals, desired timeline, or key technical features..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 transition-all duration-300 shadow-xl shadow-indigo-500/25 flex items-center justify-center gap-2 cursor-pointer group disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending Inquiry...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                        <span>Book Consultation & Request Proposal</span>
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
