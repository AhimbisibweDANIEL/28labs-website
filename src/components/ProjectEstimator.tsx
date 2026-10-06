import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, AlertCircle, Loader2, User, Mail, Building2, Phone } from 'lucide-react';
import { submitLead } from '../services/leadService';
import { AllowedProjectType, AllowedTimeline } from '../types';

interface ProjectEstimatorProps {
  onOpenConsultationWithScope?: (summary: string) => void;
}

export const ProjectEstimator: React.FC<ProjectEstimatorProps> = () => {
  const [projectType, setProjectType] = useState<AllowedProjectType>('Website');
  const [ideaDescription, setIdeaDescription] = useState<string>('');
  const [timeline, setTimeline] = useState<AllowedTimeline>('ASAP');

  useEffect(() => {
    const handleSelectType = (e: Event) => {
      const customEvent = e as CustomEvent<AllowedProjectType>;
      if (customEvent.detail) {
        setProjectType(customEvent.detail);
      }
    };
    window.addEventListener('select-project-type', handleSelectType);
    return () => window.removeEventListener('select-project-type', handleSelectType);
  }, []);
  
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [company, setCompany] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  
  const [honeypot, setHoneypot] = useState<string>('');

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<{
    fullName?: string;
    email?: string;
    ideaDescription?: string;
  }>({});

  const projectTypes: AllowedProjectType[] = [
    'Website',
    'Mobile App',
    'Web Application',
    'AI Automation',
    'Custom Software',
    'Not sure — help me figure it out',
  ];

  const timelines: AllowedTimeline[] = [
    'ASAP',
    'This month',
    '1–3 months',
    'Just exploring',
  ];

  const validate = (): boolean => {
    const errors: { fullName?: string; email?: string; ideaDescription?: string } = {};

    if (!fullName.trim()) {
      errors.fullName = 'Please enter your full name.';
    } else if (fullName.trim().length < 2) {
      errors.fullName = 'Please enter at least 2 characters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      errors.email = 'Please enter your email address.';
    } else if (!emailRegex.test(email.trim())) {
      errors.email = 'Please enter a valid email address (e.g. name@company.com).';
    }

    if (!ideaDescription.trim()) {
      errors.ideaDescription = 'Please describe what you want to build.';
    } else if (ideaDescription.trim().length < 10) {
      errors.ideaDescription = 'Please provide a little more detail (at least 10 characters).';
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setServerError(null);

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await submitLead({
        projectType,
        ideaDescription: ideaDescription.trim(),
        timeline,
        fullName: fullName.trim(),
        email: email.trim(),
        company: company.trim() || undefined,
        phone: phone.trim() || undefined,
        source: 'project-starter',
        honeypot,
      });

      if (response.success) {
        setSubmitted(true);
      } else {
        setServerError(response.error || 'Something went wrong while submitting. Please try again.');
      }
    } catch {
      setServerError('A network error occurred. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setIdeaDescription('');
    setFullName('');
    setEmail('');
    setCompany('');
    setPhone('');
    setFieldErrors({});
    setServerError(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="estimator" className="py-24 sm:py-32 relative scroll-mt-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-medium tracking-widest uppercase text-[#888888] mb-3">
              Project Starter
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black tracking-tight mb-4">
              Tell us what you want to build.
            </h2>
            <p className="text-base sm:text-lg text-[#666666] leading-relaxed">
              Tell us what you need and how to reach you. We'll review your goals and get back with clear options.
            </p>
          </motion.div>
        </div>

        {/* Card Form */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-2xl bg-white border border-[#eaeaea] p-6 sm:p-10 md:p-12 shadow-[0_8px_30px_rgba(0,0,0,0.05)]"
        >
          {submitted ? (
            <div className="text-center py-12 space-y-5">
              <div className="w-16 h-16 mx-auto rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-200">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div className="space-y-2 max-w-md mx-auto">
                <h3 className="text-2xl sm:text-3xl font-bold text-black tracking-tight">
                  Thanks — we've received your idea.
                </h3>
                <p className="text-sm sm:text-base text-[#666666] leading-relaxed">
                  We'll review what you're looking to build and get back to you using the contact details you provided.
                </p>
              </div>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-8 py-3 rounded-full bg-black hover:bg-neutral-700 text-white font-medium text-sm transition-colors duration-200 cursor-pointer"
                >
                  Back to 28 Labs
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-10">
              
              {/* Question 1 */}
              <div>
                <label className="block text-sm sm:text-base font-semibold text-black mb-3">
                  1. What do you need? <span className="text-[#0070f3]">*</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3">
                  {projectTypes.map((type) => {
                    const isSelected = projectType === type;
                    return (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setProjectType(type)}
                        className={`p-3.5 sm:p-4 rounded-xl text-xs sm:text-sm font-medium border text-left transition-all cursor-pointer flex items-center justify-between ${
                          isSelected
                            ? 'bg-[#0070f3]/5 border-black text-black'
                            : 'bg-white border-[#eaeaea] text-[#666666] hover:border-[#d4d4d4]'
                        }`}
                      >
                        <span>{type}</span>
                        {isSelected && <CheckCircle2 className="w-4 h-4 text-[#0070f3] shrink-0 ml-1.5" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Question 2 */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label 
                    htmlFor="project-idea-desc"
                    className="block text-sm sm:text-base font-semibold text-black"
                  >
                    2. Tell us about your idea <span className="text-[#0070f3]">*</span>
                  </label>
                  <span className="text-[11px] text-[#888888]">
                    {ideaDescription.trim().length} characters
                  </span>
                </div>
                <p className="text-xs text-[#888888] mb-2.5">
                  What does your business do, and what problem are you solving? (A few sentences is plenty)
                </p>
                <textarea
                  id="project-idea-desc"
                  rows={4}
                  value={ideaDescription}
                  onChange={(e) => {
                    setIdeaDescription(e.target.value);
                    if (fieldErrors.ideaDescription) {
                      setFieldErrors((prev) => ({ ...prev, ideaDescription: undefined }));
                    }
                  }}
                  placeholder="e.g. We run a logistics business and need a simple customer portal so clients can track deliveries without calling us..."
                  className={`w-full rounded-xl border bg-white px-4 py-3.5 text-black placeholder-[#a3a3a3] text-sm focus:outline-none transition-colors ${
                    fieldErrors.ideaDescription
                      ? 'border-rose-400 focus:border-rose-500 focus:ring-1 focus:ring-rose-400'
                      : 'border-[#eaeaea] focus:border-black'
                  }`}
                />
                {fieldErrors.ideaDescription && (
                  <p className="mt-1.5 text-xs text-rose-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{fieldErrors.ideaDescription}</span>
                  </p>
                )}
              </div>

              {/* Question 3 */}
              <div>
                <label className="block text-sm sm:text-base font-semibold text-black mb-3">
                  3. When would you like to start? <span className="text-[#0070f3]">*</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
                  {timelines.map((time) => {
                    const isSelected = timeline === time;
                    return (
                      <button
                        type="button"
                        key={time}
                        onClick={() => setTimeline(time)}
                        className={`p-3.5 rounded-xl text-xs sm:text-sm font-medium border text-center transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#0070f3]/5 border-black text-black'
                            : 'bg-white border-[#eaeaea] text-[#666666] hover:border-[#d4d4d4]'
                        }`}
                      >
                        {time}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Question 4: Contact */}
              <div>
                <label className="block text-sm sm:text-base font-semibold text-black mb-1.5">
                  4. Your contact details
                </label>
                <p className="text-xs text-[#888888] mb-4">
                  Where should our team send the project breakdown and options?
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label 
                      htmlFor="starter-fullname"
                      className="block text-xs font-semibold text-[#333333] mb-1.5 flex items-center gap-1.5"
                    >
                      <User className="w-3.5 h-3.5 text-[#0070f3]" />
                      <span>Full Name <span className="text-[#0070f3]">*</span></span>
                    </label>
                    <input
                      id="starter-fullname"
                      type="text"
                      autoComplete="name"
                      placeholder="Jane Doe"
                      value={fullName}
                      onChange={(e) => {
                        setFullName(e.target.value);
                        if (fieldErrors.fullName) {
                          setFieldErrors((prev) => ({ ...prev, fullName: undefined }));
                        }
                      }}
                      className={`w-full rounded-xl border bg-white px-3.5 py-2.5 text-black placeholder-[#a3a3a3] text-sm focus:outline-none transition-colors ${
                        fieldErrors.fullName
                          ? 'border-rose-400 focus:border-rose-500 focus:ring-1 focus:ring-rose-400'
                          : 'border-[#eaeaea] focus:border-black'
                      }`}
                    />
                    {fieldErrors.fullName && (
                      <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        <span>{fieldErrors.fullName}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label 
                      htmlFor="starter-email"
                      className="block text-xs font-semibold text-[#333333] mb-1.5 flex items-center gap-1.5"
                    >
                      <Mail className="w-3.5 h-3.5 text-[#0070f3]" />
                      <span>Email Address <span className="text-[#0070f3]">*</span></span>
                    </label>
                    <input
                      id="starter-email"
                      type="email"
                      autoComplete="email"
                      placeholder="jane@company.com"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (fieldErrors.email) {
                          setFieldErrors((prev) => ({ ...prev, email: undefined }));
                        }
                      }}
                      className={`w-full rounded-xl border bg-white px-3.5 py-2.5 text-black placeholder-[#a3a3a3] text-sm focus:outline-none transition-colors ${
                        fieldErrors.email
                          ? 'border-rose-400 focus:border-rose-500 focus:ring-1 focus:ring-rose-400'
                          : 'border-[#eaeaea] focus:border-black'
                      }`}
                    />
                    {fieldErrors.email && (
                      <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        <span>{fieldErrors.email}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label 
                      htmlFor="starter-company"
                      className="block text-xs font-semibold text-[#333333] mb-1.5 flex items-center gap-1.5"
                    >
                      <Building2 className="w-3.5 h-3.5 text-[#888888]" />
                      <span>Company / Business <span className="text-[#a3a3a3] font-normal">(optional)</span></span>
                    </label>
                    <input
                      id="starter-company"
                      type="text"
                      autoComplete="organization"
                      placeholder="Acme Studio"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full rounded-xl border border-[#eaeaea] bg-white px-3.5 py-2.5 text-black placeholder-[#a3a3a3] text-sm focus:outline-none focus:border-black transition-colors"
                    />
                  </div>

                  <div>
                    <label 
                      htmlFor="starter-phone"
                      className="block text-xs font-semibold text-[#333333] mb-1.5 flex items-center gap-1.5"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#888888]" />
                      <span>Phone / WhatsApp <span className="text-[#a3a3a3] font-normal">(optional)</span></span>
                    </label>
                    <input
                      id="starter-phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="+1 (555) 012-3456"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full rounded-xl border border-[#eaeaea] bg-white px-3.5 py-2.5 text-black placeholder-[#a3a3a3] text-sm focus:outline-none focus:border-black transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Honeypot */}
              <div 
                aria-hidden="true" 
                style={{ position: 'absolute', opacity: 0, pointerEvents: 'none', height: 0, width: 0, overflow: 'hidden' }}
              >
                <label htmlFor="website_url">Leave empty</label>
                <input
                  id="website_url"
                  type="text"
                  name="website_url"
                  tabIndex={-1}
                  autoComplete="off"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                />
              </div>

              {/* Server Error */}
              {serverError && (
                <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-sm flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="font-semibold">Unable to submit inquiry</p>
                    <p className="text-xs leading-relaxed">{serverError}</p>
                  </div>
                </div>
              )}

              {/* Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-8 rounded-full font-medium text-base transition-colors duration-200 flex items-center justify-center gap-2.5 cursor-pointer ${
                    isSubmitting
                      ? 'bg-neutral-400 text-white cursor-not-allowed'
                      : 'bg-black hover:bg-neutral-700 text-white'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Sending your inquiry...</span>
                    </>
                  ) : (
                    <>
                      <span>Start a project</span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
                <p className="text-center text-xs text-[#888888] mt-3">
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
