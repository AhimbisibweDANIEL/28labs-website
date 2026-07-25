import React, { useState } from 'react';
import { Terminal, Github, Twitter, Linkedin, Mail, Shield, CheckCircle2, ArrowUpRight, X } from 'lucide-react';

interface FooterProps {
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultation }) => {
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info (4 Cols) */}
          <div className="md:col-span-4 space-y-4">
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 p-0.5 shadow-md">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <Terminal className="w-4 h-4 text-indigo-400" />
                </div>
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight">28labs</span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            </a>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              28labs is a senior-led software development & AI engineering lab. We build high-converting web applications, cross-platform mobile apps, and custom LLM reasoning engines.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors" aria-label="GitHub">
                <Github className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="mailto:hello@28labs.io" className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors" aria-label="Email">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (3 Cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Services & Solutions</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#services" className="hover:text-indigo-300 transition-colors">Web & Mobile Applications</a></li>
              <li><a href="#services" className="hover:text-indigo-300 transition-colors">High-Converting Websites</a></li>
              <li><a href="#services" className="hover:text-indigo-300 transition-colors">AI & Custom Reasoning Engines</a></li>
              <li><a href="#services" className="hover:text-indigo-300 transition-colors">Legacy Re-architecture & Scale</a></li>
              <li><a href="#estimator" className="hover:text-indigo-300 transition-colors">Interactive Scope Estimator</a></li>
            </ul>
          </div>

          {/* Company & Process (3 Cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Company & Proof</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#case-studies" className="hover:text-indigo-300 transition-colors">Case Studies & Metrics</a></li>
              <li><a href="#process" className="hover:text-indigo-300 transition-colors">How We Work (4-Step Delivery)</a></li>
              <li><a href="#why-us" className="hover:text-indigo-300 transition-colors">Why 28labs (100% IP Transfer)</a></li>
              <li><a href="#faq" className="hover:text-indigo-300 transition-colors">Frequently Asked Questions</a></li>
              <li>
                <button onClick={() => setShowPrivacy(true)} className="hover:text-indigo-300 transition-colors cursor-pointer">
                  Privacy Policy & NDA Terms
                </button>
              </li>
            </ul>
          </div>

          {/* CTA Badge (2 Cols) */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Quick Inquiries</h4>
            <button
              onClick={onOpenConsultation}
              className="w-full py-2.5 px-3 rounded-xl text-xs font-bold text-white bg-indigo-600/30 border border-indigo-500/50 hover:bg-indigo-600 transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
            >
              <span>Book Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
            <div className="text-[10px] text-slate-500 flex items-center gap-1 font-mono">
              <CheckCircle2 className="w-3 h-3 text-emerald-400" />
              <span>Response in &lt;24 Hours</span>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © {new Date().getFullYear()} 28labs Inc. All rights reserved. Custom Software & AI Engineering.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span className="flex items-center gap-1 text-slate-400">
              <Shield className="w-3.5 h-3.5 text-cyan-400" />
              SOC2 & ISO Compliant Security Practices
            </span>
            <button
              onClick={() => setShowPrivacy(true)}
              className="hover:text-slate-300 underline cursor-pointer"
            >
              Privacy Policy
            </button>
          </div>
        </div>

      </div>

      {/* Privacy Policy Modal */}
      {showPrivacy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-xl w-full p-6 space-y-4 shadow-2xl relative">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-lg font-bold text-white">28labs Privacy & IP Security Policy</h3>
              <button onClick={() => setShowPrivacy(false)} className="p-1 rounded text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="text-xs text-slate-300 space-y-3 leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
              <p><strong>1. Mutual Non-Disclosure Agreement (NDA):</strong> All project details, code snippets, database schemas, and architectural briefs shared with 28labs are strictly protected under mutual non-disclosure.</p>
              <p><strong>2. 100% Intellectual Property Ownership:</strong> Upon milestone completion, 100% of all source code, Git commits, assets, and AI training prompt configurations are assigned unconditionally to the client.</p>
              <p><strong>3. Zero Data Retention for AI Models:</strong> We utilize enterprise AI API endpoints with strict zero-data-retention and zero-training policies to guarantee your proprietary data is never used for foundation model training.</p>
            </div>
            <button
              onClick={() => setShowPrivacy(false)}
              className="w-full py-2.5 rounded-xl bg-slate-800 text-xs font-bold text-white hover:bg-slate-700"
            >
              Close Policy
            </button>
          </div>
        </div>
      )}

    </footer>
  );
};
