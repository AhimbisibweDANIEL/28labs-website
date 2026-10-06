import React, { useState, useEffect } from 'react';
import { X, Calendar, CheckCircle2, ShieldCheck, Mail, User, Building2, Phone, AlertCircle, Loader2, Send } from 'lucide-react';
import { submitLead } from '../services/leadService';
import { AllowedProjectType, AllowedTimeline } from '../types';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceTitle?: string;
  initialScopeSummary?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  initialServiceTitle,
  initialScopeSummary,
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [projectType, setProjectType] = useState<AllowedProjectType>('Website');
  const [timeline, setTimeline] = useState<AllowedTimeline>('ASAP');
  const [honeypot, setHoneypot] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<{
    fullName?: string;
    email?: string;
    notes?: string;
  }>({});

  // Synchronize initial values when modal opens
  useEffect(() => {
    if (isOpen) {
      if (initialScopeSummary) {
        setNotes(initialScopeSummary);
      }
      if (initialServiceTitle) {
        // Map service title to allowed type if possible
        const titleLower = initialServiceTitle.toLowerCase();
        if (titleLower.includes('mobile')) setProjectType('Mobile App');
        else if (titleLower.includes('ai')) setProjectType('AI Automation');
        else if (titleLower.includes('software') || titleLower.includes('system')) setProjectType('Custom Software');
        else if (titleLower.includes('web app')) setProjectType('Web Application');
        else if (titleLower.includes('web')) setProjectType('Website');
        else setProjectType('Not sure — help me figure it out');
      }
      setServerError(null);
      setFieldErrors({});
    }
  }, [isOpen, initialServiceTitle, initialScopeSummary]);

  if (!isOpen) return null;

  const validate = (): boolean => {
    const errors: { fullName?: string; email?: string; notes?: string } = {};

    if (!fullName.trim()) {
      errors.fullName = 'Please enter your full name.';
    } else if (fullName.trim().length < 2) {
      errors.fullName = 'Please enter at least 2 characters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      errors.email = 'Please enter your email address.';
    } else if (!emailRegex.test(email.trim())) {
      errors.email = 'Please enter a valid email address.';
    }

    if (!notes.trim()) {
      errors.notes = 'Please describe what you want to build or improve.';
    } else if (notes.trim().length < 10) {
      errors.notes = 'Please provide a little more detail (at least 10 characters).';
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
        ideaDescription: notes.trim(),
        timeline,
        fullName: fullName.trim(),
        email: email.trim(),
        company: company.trim() || undefined,
        phone: phone.trim() || undefined,
        source: 'consultation-modal',
        honeypot,
      });

      if (response.success) {
        setSubmitted(true);
      } else {
        setServerError(response.error || 'Failed to submit inquiry. Please try again.');
      }
    } catch {
      setServerError('A network error occurred. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setSubmitted(false);
    setServerError(null);
    setFieldErrors({});
    onClose();
  };

  return (
    <div 
      role="dialog"
      aria-modal="true"
      aria-labelledby="consultation-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto"
    >
      <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative my-8">
        
        {/* Header */}
        <div className="flex items-start justify-between border-b border-slate-800/80 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-950/80 border border-blue-500/30 flex items-center justify-center text-blue-400">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 id="consultation-modal-title" className="text-xl font-bold text-white">
                Start a Project
              </h3>
              <p className="text-xs text-slate-400">
                {initialServiceTitle ? `Focus: ${initialServiceTitle}` : 'Tell us what you are building'}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleClose}
            aria-label="Close dialog"
            className="p-2 rounded-lg bg-slate-800/60 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          /* Confirmation State matching Instruction 7 */
          <div className="text-center py-8 space-y-4 animate-in fade-in zoom-in-95 duration-300">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div className="space-y-2 max-w-md mx-auto">
              <h4 className="text-2xl font-bold text-white tracking-tight">
                Thanks — we've received your idea.
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                We'll review what you're looking to build and get back to you using the contact details you provided.
              </p>
            </div>
            <div className="pt-3">
              <button
                type="button"
                onClick={handleClose}
                className="px-7 py-3 rounded-full text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-colors cursor-pointer shadow-lg shadow-blue-600/20"
              >
                Back to 28 Labs
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            
            {initialScopeSummary && (
              <div className="p-3 rounded-xl bg-blue-950/40 border border-blue-500/30 text-xs text-blue-200">
                <strong className="text-blue-300">Attached Scope:</strong> {initialScopeSummary}
              </div>
            )}

            {/* Row 1: Name and Email */}
            <div className="grid sm:grid-cols-2 gap-3.5">
              <div>
                <label htmlFor="modal-fullname" className="text-xs font-semibold text-slate-300 flex items-center gap-1.5 mb-1">
                  <User className="w-3.5 h-3.5 text-blue-400" />
                  <span>Full Name <span className="text-blue-400">*</span></span>
                </label>
                <input
                  id="modal-fullname"
                  type="text"
                  placeholder="Your Name"
                  value={fullName}
                  onChange={(e) => {
                    setFullName(e.target.value);
                    if (fieldErrors.fullName) setFieldErrors(prev => ({ ...prev, fullName: undefined }));
                  }}
                  className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border text-xs text-white placeholder-slate-500 focus:outline-none transition-colors ${
                    fieldErrors.fullName
                      ? 'border-rose-500 focus:ring-1 focus:ring-rose-500'
                      : 'border-slate-800 focus:border-blue-500'
                  }`}
                />
                {fieldErrors.fullName && (
                  <p className="mt-1 text-[11px] text-rose-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3 shrink-0" />
                    <span>{fieldErrors.fullName}</span>
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="modal-email" className="text-xs font-semibold text-slate-300 flex items-center gap-1.5 mb-1">
                  <Mail className="w-3.5 h-3.5 text-blue-400" />
                  <span>Work Email <span className="text-blue-400">*</span></span>
                </label>
                <input
                  id="modal-email"
                  type="email"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (fieldErrors.email) setFieldErrors(prev => ({ ...prev, email: undefined }));
                  }}
                  className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border text-xs text-white placeholder-slate-500 focus:outline-none transition-colors ${
                    fieldErrors.email
                      ? 'border-rose-500 focus:ring-1 focus:ring-rose-500'
                      : 'border-slate-800 focus:border-blue-500'
                  }`}
                />
                {fieldErrors.email && (
                  <p className="mt-1 text-[11px] text-rose-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3 shrink-0" />
                    <span>{fieldErrors.email}</span>
                  </p>
                )}
              </div>
            </div>

            {/* Row 2: Company and Phone */}
            <div className="grid sm:grid-cols-2 gap-3.5">
              <div>
                <label htmlFor="modal-company" className="text-xs font-semibold text-slate-300 flex items-center gap-1.5 mb-1">
                  <Building2 className="w-3.5 h-3.5 text-slate-400" />
                  <span>Company / Business <span className="text-slate-500 font-normal">(optional)</span></span>
                </label>
                <input
                  id="modal-company"
                  type="text"
                  placeholder="Company Name"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label htmlFor="modal-phone" className="text-xs font-semibold text-slate-300 flex items-center gap-1.5 mb-1">
                  <Phone className="w-3.5 h-3.5 text-slate-400" />
                  <span>Phone / WhatsApp <span className="text-slate-500 font-normal">(optional)</span></span>
                </label>
                <input
                  id="modal-phone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            {/* Project Type & Timeline selection */}
            <div className="grid sm:grid-cols-2 gap-3.5">
              <div>
                <label htmlFor="modal-project-type" className="text-xs font-semibold text-slate-300 block mb-1">
                  What do you need?
                </label>
                <select
                  id="modal-project-type"
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value as AllowedProjectType)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-blue-500 cursor-pointer"
                >
                  <option value="Website">Website</option>
                  <option value="Mobile App">Mobile App</option>
                  <option value="Web Application">Web Application</option>
                  <option value="AI Automation">AI Automation</option>
                  <option value="Custom Software">Custom Software</option>
                  <option value="Not sure — help me figure it out">Not sure — help me figure it out</option>
                </select>
              </div>

              <div>
                <label htmlFor="modal-timeline" className="text-xs font-semibold text-slate-300 block mb-1">
                  When to start?
                </label>
                <select
                  id="modal-timeline"
                  value={timeline}
                  onChange={(e) => setTimeline(e.target.value as AllowedTimeline)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-blue-500 cursor-pointer"
                >
                  <option value="ASAP">ASAP</option>
                  <option value="This month">This month</option>
                  <option value="1–3 months">1–3 months</option>
                  <option value="Just exploring">Just exploring</option>
                </select>
              </div>
            </div>

            {/* Project Description */}
            <div>
              <label htmlFor="modal-notes" className="text-xs font-semibold text-slate-300 block mb-1">
                Tell us about your idea <span className="text-blue-400">*</span>
              </label>
              <textarea
                id="modal-notes"
                rows={3}
                placeholder="Briefly describe what you want to build or improve..."
                value={notes}
                onChange={(e) => {
                  setNotes(e.target.value);
                  if (fieldErrors.notes) setFieldErrors(prev => ({ ...prev, notes: undefined }));
                }}
                className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border text-xs text-white placeholder-slate-500 focus:outline-none transition-colors resize-none ${
                  fieldErrors.notes
                    ? 'border-rose-500 focus:ring-1 focus:ring-rose-500'
                    : 'border-slate-800 focus:border-blue-500'
                }`}
              />
              {fieldErrors.notes && (
                <p className="mt-1 text-[11px] text-rose-400 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3 shrink-0" />
                  <span>{fieldErrors.notes}</span>
                </p>
              )}
            </div>

            {/* Anti-spam Honeypot field */}
            <div 
              aria-hidden="true" 
              style={{ position: 'absolute', opacity: 0, pointerEvents: 'none', height: 0, width: 0, overflow: 'hidden' }}
            >
              <label htmlFor="modal_website_url">Leave blank</label>
              <input
                id="modal_website_url"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
              />
            </div>

            {/* Error Banner */}
            {serverError && (
              <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <p className="leading-relaxed">{serverError}</p>
              </div>
            )}

            <div className="flex items-center gap-2 text-[11px] text-slate-400 pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <span>All project details are kept strictly confidential.</span>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3.5 rounded-xl text-xs font-semibold text-white transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-blue-600/20 ${
                isSubmitting 
                  ? 'bg-blue-600/60 cursor-not-allowed opacity-80' 
                  : 'bg-blue-600 hover:bg-blue-500'
              }`}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Submitting inquiry...</span>
                </>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Project Inquiry</span>
                </>
              )}
            </button>

          </form>
        )}

      </div>
    </div>
  );
};
