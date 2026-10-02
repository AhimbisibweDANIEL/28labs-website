import React, { useState } from 'react';
import { Mail, MapPin, X } from 'lucide-react';

interface FooterProps {
  onOpenConsultation?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultation }) => {
  const [showPrivacy, setShowPrivacy] = useState(false);

  const footerLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'How It Works', href: '#process' },
    { name: 'About', href: '#why-us' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-slate-950 border-t border-white/10 text-slate-400 py-16 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-10 pb-12 border-b border-white/5">
          
          {/* Brand Info */}
          <div className="space-y-4 max-w-sm">
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center shadow-md">
                <span className="text-white font-black text-sm tracking-tighter">28</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">28 Labs</span>
            </a>

            <div className="text-xs font-semibold text-blue-400">
              Software. Apps. AI Automation.
            </div>

            <p className="text-sm text-slate-400 leading-relaxed">
              Building practical technology from Africa for businesses anywhere.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
              <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <span>Africa • Remote • Worldwide</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              Navigation
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-3">
              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              Direct Contact
            </h4>
            <a
              href="mailto:hello@28labs.net"
              className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>hello@28labs.net</span>
            </a>
            <p className="text-xs text-slate-400 leading-relaxed max-w-xs">
              Open to new project inquiries and business collaborations.
            </p>
          </div>

        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} 28 Labs. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => setShowPrivacy(true)}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <a href="#services" className="hover:text-slate-300 transition-colors">
              Explore Capabilities
            </a>
          </div>
        </div>

      </div>

      {/* Privacy Policy Modal */}
      {showPrivacy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-lg bg-slate-900 border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl">
            <button
              onClick={() => setShowPrivacy(false)}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            <h3 className="text-xl font-bold text-white mb-4">Privacy Commitment</h3>
            <p className="text-sm text-slate-300 leading-relaxed mb-4">
              At 28 Labs, we respect your privacy. Any information you share regarding your business or project ideas is kept strictly confidential and used solely to prepare project estimates and communicate with you.
            </p>
            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              We never sell or share your contact information with third parties.
            </p>
            <button
              onClick={() => setShowPrivacy(false)}
              className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};
