import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SELECTED_PROJECTS } from '../data/content';
import { ProjectItem } from '../types';
import { 
  ArrowRight, 
  X, 
  ExternalLink, 
  Globe, 
  Smartphone, 
  Cpu, 
  Layers, 
  Play,
  CheckCircle2, 
  Building2, 
  ShoppingBag, 
  HeartHandshake, 
  Sparkles,
  Info
} from 'lucide-react';

interface CaseStudiesProps {
  onOpenConsultation: (topic?: string) => void;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ onOpenConsultation }) => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [showModalVideo, setShowModalVideo] = useState<boolean>(false);
  const [activeScreenshotIndex, setActiveScreenshotIndex] = useState<number>(0);

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Reset modal video state and screenshot index on project change
  useEffect(() => {
    setShowModalVideo(false);
    setActiveScreenshotIndex(0);
  }, [selectedProject]);

  const getScreenshotLabel = (project: ProjectItem, index: number) => {
    if (project.id === 'estatenet') {
      const labels = ['Role Selection', 'Portfolio', 'Managers'];
      return labels[index] || `Screen ${index + 1}`;
    }
    if (project.id === 'hearmeout') {
      const labels = ['Community Feed', 'Jobs Directory', 'Direct Inbox'];
      return labels[index] || `Screen ${index + 1}`;
    }
    return `Screen ${index + 1}`;
  };

  const filterCategories = [
    { id: 'all', label: 'All Projects', count: SELECTED_PROJECTS.length },
    { id: 'website', label: 'Websites', count: SELECTED_PROJECTS.filter(p => p.classification === 'Website').length },
    { id: 'mobile', label: 'Mobile Apps', count: SELECTED_PROJECTS.filter(p => p.classification === 'Mobile App').length },
    { id: 'software', label: 'Software & AI', count: SELECTED_PROJECTS.filter(p => p.classification !== 'Website' && p.classification !== 'Mobile App').length },
  ];

  const filteredProjects = SELECTED_PROJECTS.filter(project => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'website') return project.classification === 'Website';
    if (activeFilter === 'mobile') return project.classification === 'Mobile App';
    if (activeFilter === 'software') return project.classification !== 'Website' && project.classification !== 'Mobile App';
    return true;
  });

  const featuredProjects = filteredProjects.filter(p => p.featured);
  const secondaryProjects = filteredProjects.filter(p => !p.featured);

  const getCategoryIcon = (classification: string) => {
    switch (classification) {
      case 'Website':
        return <Globe className="w-3.5 h-3.5 text-blue-400" />;
      case 'Mobile App':
        return <Smartphone className="w-3.5 h-3.5 text-indigo-400" />;
      case 'AI Project':
        return <Cpu className="w-3.5 h-3.5 text-purple-400" />;
      default:
        return <Layers className="w-3.5 h-3.5 text-cyan-400" />;
    }
  };

  // Visual card renderer for projects
  const renderCardVisual = (project: ProjectItem, isLarge: boolean = false) => {
    // 1. Serena Heights (Real architectural property photo in browser chrome)
    if (project.id === 'serena-heights') {
      return (
        <div className={`w-full ${isLarge ? 'h-64 sm:h-72 md:h-80' : 'h-52 sm:h-56'} rounded-2xl bg-slate-950 border border-slate-800/80 overflow-hidden flex flex-col group/visual`}>
          <div className="h-8 bg-slate-900/90 border-b border-slate-800/80 px-3.5 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
            </div>
            <div className="px-2.5 py-0.5 rounded-full bg-slate-950 border border-slate-800 text-[10px] text-slate-300 font-mono">
              serenaheights.com
            </div>
            <div className="w-6" />
          </div>
          <div className="relative flex-1 overflow-hidden bg-slate-900">
            <img 
              src={project.imageSrc || "/assets/projects/serena_preview.webp"} 
              alt="Serena Heights Property Website Preview"
              loading="lazy"
              className="w-full h-full object-cover object-center group-hover/visual:scale-105 transition-transform duration-500" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-white">
              <span className="px-2.5 py-1 rounded-full bg-slate-900/90 backdrop-blur-md border border-white/10 font-medium">
                Luxury Apartments &amp; Penthouses
              </span>
              <span className="text-slate-300 font-mono text-[10px] bg-black/60 px-2 py-0.5 rounded">
                Kigo, Uganda
              </span>
            </div>
          </div>
        </div>
      );
    }

    // 2. EstateNet (Authentic Mobile App showcase in smartphone frames)
    if (project.id === 'estatenet') {
      return (
        <div className={`w-full ${isLarge ? 'h-64 sm:h-72 md:h-80' : 'h-52 sm:h-56'} rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950/40 border border-slate-800/80 overflow-hidden flex items-center justify-center p-3 relative group/visual`}>
          {/* Multi-screen Mockup Composition */}
          <div className="relative h-full flex items-center justify-center">
            {/* Left Phone: Managers Screen (visible on sm+) */}
            <div className="hidden sm:block absolute -left-16 sm:-left-20 md:-left-24 h-[84%] aspect-[9/18] rounded-[20px] bg-slate-900 border border-slate-700/60 shadow-xl p-1 opacity-75 -rotate-6 group-hover/visual:-rotate-12 group-hover/visual:-translate-x-2 transition-all duration-500 pointer-events-none">
              <div className="w-8 h-1.5 bg-slate-950 rounded-full mx-auto mb-1" />
              <div className="w-full h-[calc(100%-10px)] rounded-[14px] overflow-hidden bg-slate-950">
                <img 
                  src="/assets/projects/estatenet_managers.webp" 
                  alt="EstateNet Managers Screen" 
                  loading="lazy"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Right Phone: Properties Screen (visible on sm+) */}
            <div className="hidden sm:block absolute -right-16 sm:-right-20 md:-right-24 h-[84%] aspect-[9/18] rounded-[20px] bg-slate-900 border border-slate-700/60 shadow-xl p-1 opacity-75 rotate-6 group-hover/visual:rotate-12 group-hover/visual:translate-x-2 transition-all duration-500 pointer-events-none">
              <div className="w-8 h-1.5 bg-slate-950 rounded-full mx-auto mb-1" />
              <div className="w-full h-[calc(100%-10px)] rounded-[14px] overflow-hidden bg-slate-950">
                <img 
                  src="/assets/projects/estatenet_properties.webp" 
                  alt="EstateNet Properties Screen" 
                  loading="lazy"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Center Primary Phone: Role Selection */}
            <div className="relative z-10 h-full aspect-[9/18] max-h-full rounded-[24px] bg-slate-900 border-2 border-slate-700/90 shadow-2xl p-1.5 flex flex-col overflow-hidden group-hover/visual:scale-105 transition-transform duration-500">
              <div className="w-12 h-2.5 bg-slate-950 rounded-full mx-auto mb-1 flex items-center justify-center shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-800" />
              </div>
              <div className="flex-1 rounded-[16px] overflow-hidden relative bg-slate-950">
                <img 
                  src={project.imageSrc || "/assets/projects/estatenet_roles.webp"} 
                  alt="EstateNet Mobile App - Role Selection" 
                  loading="lazy"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Floating Badges */}
          <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-[10px] font-semibold backdrop-blur-md">
            <Smartphone className="w-3 h-3 text-blue-400" />
            <span>3 Screens + Demo</span>
          </div>

          <div className="absolute bottom-3 left-3 text-[10px] text-slate-400 font-mono hidden sm:block">
            Verified Rent Tracking
          </div>
        </div>
      );
    }

    // 3. Opulent Condo Reminder System (Real dashboard screenshot)
    if (project.id === 'opulent-condo-reminder') {
      return (
        <div className={`w-full ${isLarge ? 'h-64 sm:h-72 md:h-80' : 'h-52 sm:h-56'} rounded-2xl bg-slate-950 border border-slate-800/80 overflow-hidden flex flex-col group/visual`}>
          <div className="h-8 bg-slate-900/90 border-b border-slate-800/80 px-3.5 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
            </div>
            <div className="px-2.5 py-0.5 rounded-full bg-slate-950 border border-slate-800 text-[10px] text-slate-300 font-mono">
              Opulent Property Management
            </div>
            <div className="w-6" />
          </div>
          <div className="relative flex-1 overflow-hidden bg-slate-900">
            <img 
              src={project.imageSrc || "/assets/projects/opulent_dashboard.webp"} 
              alt="Opulent Property Management Guided Demo Dashboard"
              loading="lazy"
              className="w-full h-full object-cover object-top group-hover/visual:scale-105 transition-transform duration-500" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-white">
              <span className="px-2.5 py-1 rounded-full bg-slate-900/90 backdrop-blur-md border border-white/10 font-medium">
                Unit Charges &amp; Live SMS Reminders
              </span>
              <span className="text-emerald-400 font-mono text-[10px] bg-slate-950/90 px-2 py-0.5 rounded border border-emerald-500/30">
                Active System
              </span>
            </div>
          </div>
        </div>
      );
    }

    // 4. Tempest (Real website screenshot for Tempest Gold Property)
    if (project.id === 'tempest') {
      return (
        <div className={`w-full ${isLarge ? 'h-64 sm:h-72 md:h-80' : 'h-52 sm:h-56'} rounded-2xl bg-slate-950 border border-slate-800/80 overflow-hidden flex flex-col group/visual`}>
          <div className="h-8 bg-slate-900/90 border-b border-slate-800/80 px-3.5 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
            </div>
            <div className="px-2.5 py-0.5 rounded-full bg-slate-950 border border-slate-800 text-[10px] text-slate-300 font-mono">
              Tempest Gold Property
            </div>
            <div className="w-6" />
          </div>
          <div className="relative flex-1 overflow-hidden bg-slate-900">
            <img 
              src={project.imageSrc || "/assets/projects/tempest_preview.webp"} 
              alt="Tempest Gold Property Website" 
              loading="lazy"
              className="w-full h-full object-cover object-top group-hover/visual:scale-105 transition-transform duration-500" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-white">
              <span className="px-2.5 py-1 rounded-full bg-slate-900/90 backdrop-blur-md border border-white/10 font-medium text-amber-300">
                Property Intelligence &amp; Advisory
              </span>
              <span className="text-slate-300 font-mono text-[10px] bg-black/60 px-2 py-0.5 rounded">
                Gaborone, Botswana
              </span>
            </div>
          </div>
        </div>
      );
    }

    // 5. Lookiy (E-commerce preview image)
    if (project.id === 'lookiy') {
      return (
        <div className="w-full h-52 sm:h-56 rounded-2xl bg-slate-950 border border-slate-800/80 overflow-hidden flex flex-col group/visual">
          <div className="h-8 bg-slate-900/90 border-b border-slate-800/80 px-3.5 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
            </div>
            <div className="px-2.5 py-0.5 rounded-full bg-slate-950 border border-slate-800 text-[10px] text-slate-300 font-mono">
              lookiy.com
            </div>
            <div className="w-6" />
          </div>
          <div className="relative flex-1 overflow-hidden bg-slate-900">
            <img 
              src={project.imageSrc || "/assets/projects/lookiy_preview.webp"} 
              alt="Lookiy Marketplace Web Platform" 
              loading="lazy"
              className="w-full h-full object-cover group-hover/visual:scale-105 transition-transform duration-500" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-white">
              <span className="px-2.5 py-1 rounded-full bg-slate-900/90 backdrop-blur-md border border-white/10 font-medium">
                Shop Smart, Live Better
              </span>
              <span className="text-cyan-400 font-mono text-[10px]">E-Commerce</span>
            </div>
          </div>
        </div>
      );
    }

    // 6. LumsAway (Healthcare Foundation Website for lumpsaway.ug)
    if (project.id === 'lumsaway') {
      return (
        <div className="w-full h-52 sm:h-56 rounded-2xl bg-slate-950 border border-slate-800/80 overflow-hidden flex flex-col group/visual">
          <div className="h-8 bg-slate-900/90 border-b border-slate-800/80 px-3.5 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
            </div>
            <div className="px-2.5 py-0.5 rounded-full bg-slate-950 border border-slate-800 text-[10px] text-slate-300 font-mono">
              lumpsaway.ug
            </div>
            <div className="w-6" />
          </div>
          <div className="p-4 flex-1 bg-gradient-to-br from-slate-900 via-slate-950 to-rose-950/20 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-300 text-[10px] font-semibold tracking-wider uppercase">
                <HeartHandshake className="w-3 h-3 text-rose-400" />
                <span>Healthcare NGO</span>
              </span>
              <span className="text-[10px] text-slate-400">Cancer Survivorship</span>
            </div>
            <div className="space-y-1.5">
              <div className="text-base font-bold text-white tracking-tight">
                LumsAway
              </div>
              <p className="text-xs text-slate-300 line-clamp-2">
                Patient advocacy, peer counseling, and supportive community care across Uganda.
              </p>
            </div>
            <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-400">
              <span>Patient Support Hub</span>
              <span className="text-rose-400 font-mono">lumpsaway.ug</span>
            </div>
          </div>
        </div>
      );
    }

    // 7. AfRES (African Real Estate Society portal preview)
    if (project.id === 'afres') {
      return (
        <div className="w-full h-52 sm:h-56 rounded-2xl bg-slate-950 border border-slate-800/80 overflow-hidden flex flex-col group/visual">
          <div className="h-8 bg-slate-900/90 border-b border-slate-800/80 px-3.5 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
            </div>
            <div className="px-2.5 py-0.5 rounded-full bg-slate-950 border border-slate-800 text-[10px] text-slate-300 font-mono">
              afres.org
            </div>
            <div className="w-6" />
          </div>
          <div className="relative flex-1 overflow-hidden bg-slate-900">
            <img 
              src={project.imageSrc || "/assets/projects/afres_preview.webp"} 
              alt="African Real Estate Society Web Portal" 
              loading="lazy"
              className="w-full h-full object-cover group-hover/visual:scale-105 transition-transform duration-500" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-white">
              <span className="px-2.5 py-1 rounded-full bg-slate-900/90 backdrop-blur-md border border-white/10 font-medium">
                Pan-African Society Portal
              </span>
              <span className="text-emerald-400 font-mono text-[10px]">Conferences &amp; Research</span>
            </div>
          </div>
        </div>
      );
    }

    // 8. HearMeOut (Authentic mobile screenshots in smartphone frames)
    if (project.id === 'hearmeout') {
      return (
        <div className="w-full h-52 sm:h-56 rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950/40 border border-slate-800/80 overflow-hidden flex items-center justify-center p-3 relative group/visual">
          {/* Multi-screen composition */}
          <div className="relative h-full flex items-center justify-center">
            {/* Left Phone: Inbox Screen (visible on sm+) */}
            <div className="hidden sm:block absolute -left-12 sm:-left-16 h-[80%] aspect-[9/18] rounded-[18px] bg-slate-900 border border-slate-700/60 shadow-xl p-1 opacity-70 -rotate-6 group-hover/visual:-rotate-12 group-hover/visual:-translate-x-1.5 transition-all duration-500 pointer-events-none">
              <div className="w-6 h-1 bg-slate-950 rounded-full mx-auto mb-1" />
              <div className="w-full h-[calc(100%-8px)] rounded-[12px] overflow-hidden bg-slate-950">
                <img 
                  src="/assets/projects/hearmeout_inbox.webp" 
                  alt="HearMeOut Inbox Screen" 
                  loading="lazy"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Right Phone: Jobs Screen (visible on sm+) */}
            <div className="hidden sm:block absolute -right-12 sm:-right-16 h-[80%] aspect-[9/18] rounded-[18px] bg-slate-900 border border-slate-700/60 shadow-xl p-1 opacity-70 rotate-6 group-hover/visual:rotate-12 group-hover/visual:translate-x-1.5 transition-all duration-500 pointer-events-none">
              <div className="w-6 h-1 bg-slate-950 rounded-full mx-auto mb-1" />
              <div className="w-full h-[calc(100%-8px)] rounded-[12px] overflow-hidden bg-slate-950">
                <img 
                  src="/assets/projects/hearmeout_jobs.webp" 
                  alt="HearMeOut Jobs Screen" 
                  loading="lazy"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Center Primary Phone: Community Feed */}
            <div className="relative z-10 h-full aspect-[9/18] max-h-full rounded-[22px] bg-slate-900 border-2 border-slate-700/90 shadow-2xl p-1.5 flex flex-col overflow-hidden group-hover/visual:scale-105 transition-transform duration-500">
              <div className="w-10 h-2 bg-slate-950 rounded-full mx-auto mb-1 flex items-center justify-center shrink-0">
                <span className="w-1 h-1 rounded-full bg-slate-800" />
              </div>
              <div className="flex-1 rounded-[14px] overflow-hidden relative bg-slate-950">
                <img 
                  src={project.imageSrc || "/assets/projects/hearmeout_feed.webp"} 
                  alt="HearMeOut Mobile App Feed" 
                  loading="lazy"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>

          <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-300 text-[10px] font-semibold backdrop-blur-md">
            <Smartphone className="w-2.5 h-2.5 text-sky-400" />
            <span>3 Screens + Demo</span>
          </div>

          <div className="absolute bottom-3 left-3 text-[10px] text-slate-400 font-mono hidden sm:block">
            Community &amp; Marketplace
          </div>
        </div>
      );
    }

    // 9. Axiom (AI Project - kept abstract as requested)
    return (
      <div className="w-full h-52 sm:h-56 rounded-2xl bg-slate-950 border border-slate-800/80 overflow-hidden p-4 flex flex-col justify-between group/visual">
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-2.5">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-purple-600/20 border border-purple-500/30 flex items-center justify-center">
              <Cpu className="w-4 h-4 text-purple-400" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">Axiom</div>
              <div className="text-[10px] text-slate-400">AI Project</div>
            </div>
          </div>
          <span className="text-[10px] font-mono text-purple-300 bg-purple-950/60 px-2 py-0.5 rounded border border-purple-500/30">
            R&amp;D
          </span>
        </div>
        <div className="p-3.5 rounded-xl bg-gradient-to-r from-purple-950/40 via-slate-900 to-indigo-950/40 border border-purple-500/20 text-center space-y-1">
          <Sparkles className="w-5 h-5 text-purple-400 mx-auto" />
          <div className="text-xs font-semibold text-white">AI-Powered Exploration</div>
          <p className="text-[11px] text-slate-400">Intelligent workflow experimentation</p>
        </div>
        <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-400">
          <span>AI Creation</span>
          <span className="text-purple-400 font-mono">Details soon</span>
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="py-24 sm:py-36 relative scroll-mt-10 overflow-hidden">
      {/* Ambient Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-tr from-blue-600/10 via-indigo-600/10 to-transparent rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-blue-400 mb-3">
              Portfolio
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
              Things we've built.
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Real websites, apps and software we've brought to life.
            </p>
          </motion.div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-8">
            {filterCategories.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  activeFilter === tab.id
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white border border-white/5 hover:border-white/15'
                }`}
              >
                <span>{tab.label}</span>
                <span className={`ml-1.5 text-[10px] px-1.5 py-0.2 rounded-full ${
                  activeFilter === tab.id ? 'bg-white/20 text-white' : 'bg-slate-800 text-slate-400'
                }`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* 1. Featured Projects Grid (Large Visual Treatment) */}
        {featuredProjects.length > 0 && (
          <div className="mb-14 sm:mb-20 space-y-6">
            {activeFilter === 'all' && (
              <div className="flex items-center gap-2.5 px-1">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  Featured Projects
                </span>
              </div>
            )}
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                  className="group relative rounded-3xl bg-slate-900/60 backdrop-blur-md border border-white/10 hover:border-blue-500/40 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1"
                >
                  <div>
                    {/* Large Visual Frame */}
                    <div 
                      className="mb-5 cursor-pointer"
                      onClick={() => setSelectedProject(project)}
                      title={`View ${project.title} details`}
                    >
                      {renderCardVisual(project, true)}
                    </div>

                    {/* Classification Badge & Tags */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/90 text-slate-300 text-xs font-medium border border-white/10">
                        {getCategoryIcon(project.classification)}
                        <span>{project.classification}</span>
                      </span>
                      {project.tags && project.tags[0] && (
                        <span className="text-[11px] text-slate-400 font-medium">
                          {project.tags[0]}
                        </span>
                      )}
                    </div>

                    {/* Project Title */}
                    <h3 
                      onClick={() => setSelectedProject(project)}
                      className="text-2xl font-bold text-white mb-2.5 group-hover:text-blue-300 transition-colors cursor-pointer"
                      title={`View ${project.title} details`}
                    >
                      {project.title}
                    </h3>

                    {/* Short Factual Description */}
                    <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                      {project.summary}
                    </p>
                  </div>

                  {/* Actions Footer */}
                  <div className="pt-4 border-t border-white/5 flex items-center gap-3">
                    {project.url ? (
                      <>
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white transition-colors shadow-md shadow-blue-600/20"
                        >
                          <span>View Project</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="py-3 px-4 rounded-xl text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-white/10 transition-colors cursor-pointer"
                        >
                          Details
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-medium bg-slate-800/80 hover:bg-slate-700/80 text-white border border-white/10 transition-colors cursor-pointer group-hover:border-blue-500/30"
                      >
                        <span>View Details</span>
                        <ArrowRight className="w-3.5 h-3.5 text-blue-400 group-hover:translate-x-1 transition-transform" />
                      </button>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* 2. Secondary Projects Grid (Compact Layout) */}
        {secondaryProjects.length > 0 && (
          <div className="space-y-6">
            {activeFilter === 'all' && (
              <div className="flex items-center gap-2.5 px-1 pt-4">
                <span className="w-2 h-2 rounded-full bg-slate-500" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  Additional Products &amp; Builds
                </span>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
              {secondaryProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                  className="group relative rounded-3xl bg-slate-900/60 backdrop-blur-md border border-white/10 hover:border-blue-500/40 p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1"
                >
                  <div>
                    {/* Visual Preview */}
                    <div 
                      className="mb-5 cursor-pointer"
                      onClick={() => setSelectedProject(project)}
                      title={`View ${project.title} details`}
                    >
                      {renderCardVisual(project, false)}
                    </div>

                    {/* Classification Badge & Tags */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/90 text-slate-300 text-xs font-medium border border-white/10">
                        {getCategoryIcon(project.classification)}
                        <span>{project.classification}</span>
                      </span>
                      {project.tags && project.tags[0] && (
                        <span className="text-[11px] text-slate-400 font-medium">
                          {project.tags[0]}
                        </span>
                      )}
                    </div>

                    {/* Project Title */}
                    <h3 
                      onClick={() => setSelectedProject(project)}
                      className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors cursor-pointer"
                      title={`View ${project.title} details`}
                    >
                      {project.title}
                    </h3>

                    {/* Short Factual Description */}
                    <p className="text-sm text-slate-300 leading-relaxed mb-6">
                      {project.summary}
                    </p>
                  </div>

                  {/* Actions Footer */}
                  <div className="pt-4 border-t border-white/5 flex items-center gap-2.5">
                    {project.url ? (
                      <>
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3.5 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white transition-colors shadow-md shadow-blue-600/20"
                        >
                          <span>View Project</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="py-2.5 px-3.5 rounded-xl text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-white/10 transition-colors cursor-pointer"
                        >
                          Details
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-medium bg-slate-800/80 hover:bg-slate-700/80 text-white border border-white/10 transition-colors cursor-pointer group-hover:border-blue-500/30"
                      >
                        <span>View Details</span>
                        <ArrowRight className="w-3.5 h-3.5 text-blue-400 group-hover:translate-x-1 transition-transform" />
                      </button>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Enhanced Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div 
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-project-title"
            className="fixed inset-0 z-50 flex items-start justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
            onClick={() => setSelectedProject(null)}
          >
            <div 
              className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl p-5 sm:p-8 shadow-2xl space-y-6 my-auto sm:my-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                aria-label="Close project details"
                className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800/80 text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="space-y-2 pr-10">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-medium">
                  {getCategoryIcon(selectedProject.classification)}
                  <span>{selectedProject.classification}</span>
                </div>
                <h3 id="modal-project-title" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {selectedProject.title}
                </h3>
              </div>

              {/* Large Media Visual Preview in Modal */}
              <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 p-4 sm:p-6">
                {selectedProject.videoSrc && showModalVideo ? (
                  <div className="flex flex-col items-center">
                    <div className="relative w-full max-w-[300px] aspect-[9/16] max-h-[420px] mx-auto bg-black rounded-2xl overflow-hidden border border-slate-800 flex items-center justify-center">
                      <video
                        src={selectedProject.videoSrc}
                        controls
                        autoPlay
                        muted
                        playsInline
                        className="w-full h-full object-contain"
                      />
                    </div>
                    {/* Switch back to screenshots button if screenshots exist */}
                    {selectedProject.screenshots && selectedProject.screenshots.length > 0 && (
                      <div className="mt-4 flex items-center gap-2">
                        <button
                          onClick={() => setShowModalVideo(false)}
                          className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-white/10 transition-colors cursor-pointer flex items-center gap-1.5"
                        >
                          <Smartphone className="w-3.5 h-3.5 text-blue-400" />
                          <span>View App Screenshots</span>
                        </button>
                      </div>
                    )}
                  </div>
                ) : selectedProject.classification === 'Mobile App' ? (
                  <div className="flex flex-col items-center">
                    {/* Smartphone Mockup with Real Screen */}
                    <div className="relative w-52 sm:w-60 aspect-[9/18] max-h-[440px] rounded-[30px] bg-slate-900 border-[3px] border-slate-700/80 shadow-2xl p-2 flex flex-col overflow-hidden">
                      {/* Speaker / Dynamic Island */}
                      <div className="w-14 h-2.5 bg-slate-950 rounded-full mx-auto mb-1.5 flex items-center justify-center shrink-0">
                        <span className="w-2 h-2 rounded-full bg-slate-800" />
                      </div>
                      {/* Active Screen */}
                      <div className="flex-1 rounded-[20px] overflow-hidden relative bg-slate-950">
                        <img
                          src={
                            selectedProject.screenshots && selectedProject.screenshots[activeScreenshotIndex]
                              ? selectedProject.screenshots[activeScreenshotIndex]
                              : selectedProject.imageSrc
                          }
                          alt={
                            selectedProject.screenshots
                              ? `${selectedProject.title} - ${getScreenshotLabel(selectedProject, activeScreenshotIndex)}`
                              : selectedProject.title
                          }
                          className="w-full h-full object-contain sm:object-cover object-top"
                        />
                      </div>
                    </div>

                    {/* Interactive Screenshot Selector Tabs */}
                    {selectedProject.screenshots && selectedProject.screenshots.length > 1 && (
                      <div className="mt-5 w-full max-w-lg">
                        <div className="flex items-center justify-between mb-2 px-1">
                          <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                            Real App Screens
                          </span>
                          <span className="text-[11px] text-blue-400 font-mono">
                            {activeScreenshotIndex + 1} of {selectedProject.screenshots.length}
                          </span>
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                          {selectedProject.screenshots.map((screen, sIdx) => {
                            const label = getScreenshotLabel(selectedProject, sIdx);
                            const isActive = activeScreenshotIndex === sIdx && !showModalVideo;
                            return (
                              <button
                                key={screen}
                                onClick={() => {
                                  setActiveScreenshotIndex(sIdx);
                                  setShowModalVideo(false);
                                }}
                                className={`p-2 rounded-xl border transition-all cursor-pointer flex flex-col items-center gap-1.5 ${
                                  isActive
                                    ? 'bg-blue-600/20 border-blue-500 text-white shadow-lg shadow-blue-500/20 ring-1 ring-blue-500/50'
                                    : 'bg-slate-900/80 border-slate-800 hover:border-slate-700 text-slate-400 hover:text-slate-300'
                                }`}
                              >
                                <div className="w-10 h-14 rounded-lg overflow-hidden border border-slate-800/80 bg-slate-950 shadow-inner">
                                  <img
                                    src={screen}
                                    alt={label}
                                    className="w-full h-full object-cover object-top"
                                  />
                                </div>
                                <span className="text-[11px] font-medium text-center truncate w-full">
                                  {label}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* Watch App Video Demo Button */}
                    {selectedProject.videoSrc && (
                      <div className="mt-4">
                        <button
                          onClick={() => setShowModalVideo(true)}
                          className="px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-2 shadow-lg shadow-blue-600/25 transition-transform hover:scale-105 cursor-pointer"
                        >
                          <Play className="w-3.5 h-3.5 fill-white" />
                          <span>Watch App Video Demo</span>
                        </button>
                      </div>
                    )}
                  </div>
                ) : selectedProject.imageSrc ? (
                  <div className="relative aspect-video max-h-[320px] overflow-hidden rounded-xl bg-slate-950 group/preview">
                    <img
                      src={selectedProject.imageSrc}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover object-top"
                    />
                    {selectedProject.videoSrc && (
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <button
                          onClick={() => setShowModalVideo(true)}
                          className="px-4 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-2 shadow-xl shadow-blue-600/30 transition-transform hover:scale-105 cursor-pointer"
                        >
                          <Play className="w-3.5 h-3.5 fill-white" />
                          <span>Watch Demo Video</span>
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="p-2">
                    {renderCardVisual(selectedProject, false)}
                  </div>
                )}
              </div>

              {/* Verified Information */}
              <div className="space-y-4 text-sm">
                {/* Short Description */}
                <p className="text-slate-300 leading-relaxed font-normal">
                  {selectedProject.summary}
                </p>

                {/* What it is */}
                <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80 space-y-1">
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    What it is
                  </div>
                  <div className="text-slate-200 leading-relaxed font-medium">
                    {selectedProject.whatItIs || selectedProject.summary}
                  </div>
                </div>

                {/* What 28 Labs built */}
                {selectedProject.whatBuilt && (
                  <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80 space-y-1">
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      What 28 Labs Built
                    </div>
                    <div className="text-slate-200 leading-relaxed">
                      {selectedProject.whatBuilt}
                    </div>
                  </div>
                )}

                {/* Information status note for projects without complete public data */}
                {selectedProject.detailsNote && (
                  <div className="p-4 rounded-2xl bg-blue-950/20 border border-blue-500/20 flex items-start gap-2.5 text-xs text-blue-200">
                    <Info className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>More project details coming soon.</span>
                  </div>
                )}

                {/* Tags */}
                {selectedProject.tags && selectedProject.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-1">
                    {selectedProject.tags.map(tag => (
                      <span 
                        key={tag}
                        className="px-2.5 py-1 rounded-lg bg-slate-800/60 border border-slate-700/50 text-[11px] text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Modal Footer Actions */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center gap-3">
                {selectedProject.url && (
                  <a
                    href={selectedProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white transition-colors shadow-lg shadow-blue-600/20"
                  >
                    <span>Visit Live Website</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                <button
                  onClick={() => {
                    const projectTitle = selectedProject.title;
                    setSelectedProject(null);
                    onOpenConsultation(projectTitle);
                  }}
                  className="w-full sm:w-auto py-3 px-5 rounded-full text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-white border border-white/10 transition-colors cursor-pointer"
                >
                  Start a Similar Project
                </button>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
