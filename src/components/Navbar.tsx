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
          ? 'bg-white/80 backdrop-blur-xl border-b border-[#eaeaea] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group cursor-pointer">
            <div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center group-hover:bg-neutral-800 transition-colors duration-200">
              <span className="text-white font-bold text-sm tracking-tighter">28</span>
            </div>
            <span className="text-[17px] font-semibold tracking-tight text-black">28 Labs</span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-[#666666] hover:text-black transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Primary CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="text-sm text-[#666666] hover:text-black transition-colors duration-200"
            >
              Contact
            </a>
            <button
              onClick={handleStartProject}
              className="px-4 py-2 rounded-full bg-black hover:bg-neutral-700 text-white font-medium text-sm transition-colors duration-200 flex items-center gap-2 cursor-pointer"
            >
              <span>Start a project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Hamburger Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg border border-[#eaeaea] text-black"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#eaeaea] px-4 pt-4 pb-6 space-y-4">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-black px-3 py-2.5 rounded-lg hover:bg-neutral-50 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="pt-2 px-1">
            <button
              onClick={handleStartProject}
              className="w-full py-3 px-4 rounded-full bg-black text-white font-medium text-sm flex items-center justify-center gap-2"
            >
              <span>Start a project</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
