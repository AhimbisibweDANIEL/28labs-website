import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenConsultation: () => void;
  onNavigateToEstimator?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation, onNavigateToEstimator }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'How It Works', href: '#process' },
    { name: 'About', href: '#why-us' },
    { name: 'FAQ', href: '#faq' },
  ];

  const handleStartProject = () => {
    setMobileMenuOpen(false);
    if (onNavigateToEstimator) {
      onNavigateToEstimator();
    } else {
      const el = document.getElementById('estimator');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        onOpenConsultation();
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/85 backdrop-blur-xl border-b border-white/10 py-3.5 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group cursor-pointer">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform duration-200">
              <span className="text-white font-black text-sm tracking-tighter">28</span>
            </div>
            <div className="flex items-center">
              <span className="text-xl font-bold tracking-tight text-white">28 Labs</span>
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 ml-1"></span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Primary CTA */}
          <div className="hidden md:flex items-center">
            <button
              onClick={handleStartProject}
              className="px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-all duration-200 shadow-md shadow-blue-600/20 hover:shadow-blue-500/30 flex items-center gap-2 cursor-pointer hover:-translate-y-0.5"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Hamburger Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-900 border border-white/10 text-slate-300 hover:text-white"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-2xl border-b border-white/10 px-4 pt-4 pb-6 space-y-4 animate-fade-in">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-200 hover:text-white px-3 py-2 rounded-lg hover:bg-slate-900 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="pt-2">
            <button
              onClick={handleStartProject}
              className="w-full py-3 px-4 rounded-full bg-blue-600 text-white font-medium text-sm flex items-center justify-center gap-2"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
