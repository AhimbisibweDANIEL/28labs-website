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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

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
        return <Globe className="w-3.5 h-3.5 text-[#0070f3]" />;
      case 'Mobile App':
        return <Smartphone className="w-3.5 h-3.5 text-[#0070f3]" />;
      case 'AI Project':
        return <Cpu className="w-3.5 h-3.5 text-[#0070f3]" />;
      default:
        return <Layers className="w-3.5 h-3.5 text-[#0070f3]" />;
    }
  };

  // Shared browser chrome bar
  const BrowserBar = ({ domain }: { domain: string }) => (
    <div className="h-8 bg-[#fafafa] border-b border-[#eaeaea] px-3.5 flex items-center justify-between shrink-0">
      <div className="flex items-center gap-1.5">
        <span className="w-2.5 h-2.5 rounded-full bg-rose-400/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
      </div>
      <div className="px-2.5 py-0.5 rounded-full bg-white border border-[#eaeaea] text-[10px] text-[#666666] font-mono">
        {domain}
      </div>
      <div className="w-6" />
    </div>
  );

  const renderCardVisual = (project: ProjectItem, isLarge: boolean = false) => {
    if (project.id === 'serena-heights') {
      return (
        <div className={`w-full ${isLarge ? 'h-64 sm:h-72 md:h-80' : 'h-52 sm:h-56'} rounded-2xl bg-white border border-[#eaeaea] overflow-hidden flex flex-col group/visual`}>
          <BrowserBar domain="serenaheights.com" />
          <div className="relative flex-1 overflow-hidden bg-[#fafafa]">
            <img 
              src={project.imageSrc || "/assets/projects/serena_preview.webp"} 
              alt="Serena Heights Property Website Preview"
              loading="lazy"
              className="w-full h-full object-cover object-center group-hover/visual:scale-105 transition-transform duration-500" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-white">
              <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#171717] font-medium">
                Luxury Apartments &amp; Penthouses
              </span>
              <span className="text-white font-mono text-[10px] bg-black/40 px-2 py-0.5 rounded">
                Kigo, Uganda
              </span>
            </div>
          </div>
        </div>
      );
    }

    if (project.id === 'estatenet') {
      return (
        <div className={`w-full ${isLarge ? 'h-64 sm:h-72 md:h-80' : 'h-52 sm:h-56'} rounded-2xl bg-gradient-to-br from-white to-[#fafafa] border border-[#eaeaea] overflow-hidden flex items-center justify-center p-3 relative group/visual`}>
          <div className="relative h-full flex items-center justify-center">
            <div className="hidden sm:block absolute -left-16 sm:-left-20 md:-left-24 h-[84%] aspect-[9/18] rounded-[20px] bg-[#fafafa] border border-[#d4d4d4] shadow-md p-1 opacity-80 -rotate-6 group-hover/visual:-rotate-12 group-hover/visual:-translate-x-2 transition-all duration-500 pointer-events-none">
              <div className="w-8 h-1.5 bg-black rounded-full mx-auto mb-1" />
              <div className="w-full h-[calc(100%-10px)] rounded-[14px] overflow-hidden bg-black">
                <img 
                  src="/assets/projects/estatenet_managers.webp" 
                  alt="EstateNet Managers Screen" 
                  loading="lazy"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            <div className="hidden sm:block absolute -right-16 sm:-right-20 md:-right-24 h-[84%] aspect-[9/18] rounded-[20px] bg-[#fafafa] border border-[#d4d4d4] shadow-md p-1 opacity-80 rotate-6 group-hover/visual:rotate-12 group-hover/visual:translate-x-2 transition-all duration-500 pointer-events-none">
              <div className="w-8 h-1.5 bg-black rounded-full mx-auto mb-1" />
              <div className="w-full h-[calc(100%-10px)] rounded-[14px] overflow-hidden bg-black">
                <img 
                  src="/assets/projects/estatenet_properties.webp" 
                  alt="EstateNet Properties Screen" 
                  loading="lazy"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            <div className="relative z-10 h-full aspect-[9/18] max-h-full rounded-[24px] bg-[#fafafa] border-2 border-[#d4d4d4] shadow-lg p-1.5 flex flex-col overflow-hidden group-hover/visual:scale-105 transition-transform duration-500">
              <div className="w-12 h-2.5 bg-black rounded-full mx-auto mb-1 flex items-center justify-center shrink-0" />
              <div className="flex-1 rounded-[16px] overflow-hidden relative bg-black">
                <img 
                  src={project.imageSrc || "/assets/projects/estatenet_roles.webp"} 
                  alt="EstateNet Mobile App - Role Selection" 
                  loading="lazy"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>

          <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white border border-[#eaeaea] text-[#666666] text-[10px] font-medium">
            <Smartphone className="w-3 h-3 text-[#0070f3]" />
            <span>3 Screens + Demo</span>
          </div>

          <div className="absolute bottom-3 left-3 text-[10px] text-[#888888] font-mono hidden sm:block">
            Verified Rent Tracking
          </div>
        </div>
      );
    }

    if (project.id === 'opulent-condo-reminder') {
      return (
        <div className={`w-full ${isLarge ? 'h-64 sm:h-72 md:h-80' : 'h-52 sm:h-56'} rounded-2xl bg-white border border-[#eaeaea] overflow-hidden flex flex-col group/visual`}>
          <BrowserBar domain="Opulent Property Management" />
          <div className="relative flex-1 overflow-hidden bg-[#fafafa]">
            <img 
              src={project.imageSrc || "/assets/projects/opulent_dashboard.webp"} 
              alt="Opulent Property Management Guided Demo Dashboard"
              loading="lazy"
              className="w-full h-full object-cover object-top group-hover/visual:scale-105 transition-transform duration-500" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-white">
              <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#171717] font-medium">
                Unit Charges &amp; Live SMS Reminders
              </span>
              <span className="text-emerald-300 font-mono text-[10px] bg-black/50 px-2 py-0.5 rounded">
                Active System
              </span>
            </div>
          </div>
        </div>
      );
    }

    if (project.id === 'tempest') {
      return (
        <div className={`w-full ${isLarge ? 'h-64 sm:h-72 md:h-80' : 'h-52 sm:h-56'} rounded-2xl bg-white border border-[#eaeaea] overflow-hidden flex flex-col group/visual`}>
          <BrowserBar domain="Tempest Gold Property" />
          <div className="relative flex-1 overflow-hidden bg-[#fafafa]">
            <img 
              src={project.imageSrc || "/assets/projects/tempest_preview.webp"} 
              alt="Tempest Gold Property Website" 
              loading="lazy"
              className="w-full h-full object-cover object-top group-hover/visual:scale-105 transition-transform duration-500" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-white">
              <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#171717] font-medium">
                Property Intelligence &amp; Advisory
              </span>
              <span className="text-white font-mono text-[10px] bg-black/40 px-2 py-0.5 rounded">
                Gaborone, Botswana
              </span>
            </div>
          </div>
        </div>
      );
    }

    if (project.id === 'lookiy') {
      return (
        <div className="w-full h-52 sm:h-56 rounded-2xl bg-white border border-[#eaeaea] overflow-hidden flex flex-col group/visual">
          <BrowserBar domain="lookiy.com" />
          <div className="relative flex-1 overflow-hidden bg-[#fafafa]">
            <img 
              src={project.imageSrc || "/assets/projects/lookiy_preview.webp"} 
              alt="Lookiy Marketplace Web Platform" 
              loading="lazy"
              className="w-full h-full object-cover group-hover/visual:scale-105 transition-transform duration-500" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-white">
              <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#171717] font-medium">
                Shop Smart, Live Better
              </span>
              <span className="text-white font-mono text-[10px]">E-Commerce</span>
            </div>
          </div>
        </div>
      );
    }

    if (project.id === 'lumsaway') {
      return (
        <div className="w-full h-52 sm:h-56 rounded-2xl bg-white border border-[#eaeaea] overflow-hidden flex flex-col group/visual">
          <BrowserBar domain="lumpsaway.ug" />
          <div className="p-4 flex-1 bg-[#fafafa] flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-600 text-[10px] font-medium tracking-wider uppercase">
                <HeartHandshake className="w-3 h-3 text-rose-500" />
                <span>Healthcare NGO</span>
              </span>
              <span className="text-[10px] text-[#888888]">Cancer Survivorship</span>
            </div>
            <div className="space-y-1.5">
              <div className="text-base font-semibold text-black tracking-tight">
                LumsAway
              </div>
              <p className="text-xs text-[#666666] line-clamp-2">
                Patient advocacy, peer counseling, and supportive community care across Uganda.
              </p>
            </div>
            <div className="pt-2 border-t border-[#eaeaea] flex items-center justify-between text-[10px] text-[#888888]">
              <span>Patient Support Hub</span>
              <span className="text-rose-500 font-mono">lumpsaway.ug</span>
            </div>
          </div>
        </div>
      );
    }

    if (project.id === 'afres') {
      return (
        <div className="w-full h-52 sm:h-56 rounded-2xl bg-white border border-[#eaeaea] overflow-hidden flex flex-col group/visual">
          <BrowserBar domain="afres.org" />
          <div className="relative flex-1 overflow-hidden bg-[#fafafa]">
            <img 
              src={project.imageSrc || "/assets/projects/afres_preview.webp"} 
              alt="African Real Estate Society Web Portal" 
              loading="lazy"
              className="w-full h-full object-cover group-hover/visual:scale-105 transition-transform duration-500" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-white">
              <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#171717] font-medium">
                Pan-African Society Portal
              </span>
              <span className="text-emerald-300 font-mono text-[10px]">Conferences &amp; Research</span>
            </div>
          </div>
        </div>
      );
    }

    if (project.id === 'hearmeout') {
      return (
        <div className="w-full h-52 sm:h-56 rounded-2xl bg-gradient-to-br from-white to-[#fafafa] border border-[#eaeaea] overflow-hidden flex items-center justify-center p-3 relative group/visual">
          <div className="relative h-full flex items-center justify-center">
            <div className="hidden sm:block absolute -left-12 sm:-left-16 h-[80%] aspect-[9/18] rounded-[18px] bg-[#fafafa] border border-[#d4d4d4] shadow-md p-1 opacity-75 -rotate-6 group-hover/visual:-rotate-12 group-hover/visual:-translate-x-1.5 transition-all duration-500 pointer-events-none">
              <div className="w-6 h-1 bg-black rounded-full mx-auto mb-1" />
              <div className="w-full h-[calc(100%-8px)] rounded-[12px] overflow-hidden bg-black">
                <img 
                  src="/assets/projects/hearmeout_inbox.webp" 
                  alt="HearMeOut Inbox Screen" 
                  loading="lazy"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            <div className="hidden sm:block absolute -right-12 sm:-right-16 h-[80%] aspect-[9/18] rounded-[18px] bg-[#fafafa] border border-[#d4d4d4] shadow-md p-1 opacity-75 rotate-6 group-hover/visual:rotate-12 group-hover/visual:translate-x-1.5 transition-all duration-500 pointer-events-none">
              <div className="w-6 h-1 bg-black rounded-full mx-auto mb-1" />
              <div className="w-full h-[calc(100%-8px)] rounded-[12px] overflow-hidden bg-black">
                <img 
                  src="/assets/projects/hearmeout_jobs.webp" 
                  alt="HearMeOut Jobs Screen" 
                  loading="lazy"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            <div className="relative z-10 h-full aspect-[9/18] max-h-full rounded-[22px] bg-[#fafafa] border-2 border-[#d4d4d4] shadow-lg p-1.5 flex flex-col overflow-hidden group-hover/visual:scale-105 transition-transform duration-500">
              <div className="w-10 h-2 bg-black rounded-full mx-auto mb-1 flex items-center justify-center shrink-0" />
              <div className="flex-1 rounded-[14px] overflow-hidden relative bg-black">
                <img 
                  src={project.imageSrc || "/assets/projects/hearmeout_feed.webp"} 
                  alt="HearMeOut Mobile App Feed" 
                  loading="lazy"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>

          <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white border border-[#eaeaea] text-[#666666] text-[10px] font-medium">
            <Smartphone className="w-2.5 h-2.5 text-[#0070f3]" />
            <span>3 Screens + Demo</span>
          </div>

          <div className="absolute bottom-3 left-3 text-[10px] text-[#888888] font-mono hidden sm:block">
            Community &amp; Marketplace
          </div>
        </div>
      );
    }

    // Axiom
    return (
      <div className="w-full h-52 sm:h-56 rounded-2xl bg-white border border-[#eaeaea] overflow-hidden p-4 flex flex-col justify-between group/visual">
        <div className="flex items-center justify-between border-b border-[#eaeaea] pb-2.5">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-[#0070f3]/5 border border-[#0070f3]/20 flex items-center justify-center">
              <Cpu className="w-4 h-4 text-[#0070f3]" />
            </div>
            <div>
              <div className="text-xs font-semibold text-black">Axiom</div>
              <div className="text-[10px] text-[#888888]">AI Project</div>
            </div>
          </div>
          <span className="text-[10px] font-mono text-[#0070f3] bg-[#0070f3]/5 px-2 py-0.5 rounded border border-[#0070f3]/20">
            R&amp;D
          </span>
        </div>
        <div className="p-3.5 rounded-xl bg-[#fafafa] border border-[#eaeaea] text-center space-y-1">
          <Sparkles className="w-5 h-5 text-[#0070f3] mx-auto" />
          <div className="text-xs font-semibold text-black">AI-Powered Exploration</div>
          <p className="text-[11px] text-[#888888]">Intelligent workflow experimentation</p>
        </div>
        <div className="pt-2 border-t border-[#eaeaea] flex items-center justify-between text-[10px] text-[#888888]">
          <span>AI Creation</span>
          <span className="text-[#0070f3] font-mono">Details soon</span>
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="py-24 sm:py-32 relative scroll-mt-10 overflow-hidden bg-[#fafafa] border-t border-[#eaeaea]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-medium tracking-widest uppercase text-[#888888] mb-3">
              Portfolio
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black tracking-tight mb-4">
              Things we've built.
            </h2>
            <p className="text-base sm:text-lg text-[#666666] leading-relaxed max-w-2xl mx-auto">
              Real websites, apps and software we've brought to life.
            </p>
          </motion.div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-8">
            {filterCategories.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-full text-[13px] font-medium transition-all duration-200 cursor-pointer ${
                  activeFilter === tab.id
                    ? 'bg-black text-white'
                    : 'bg-white text-[#666666] hover:text-black border border-[#eaeaea]'
                }`}
              >
                <span>{tab.label}</span>
                <span className={`ml-1.5 text-[11px] px-1.5 py-0.5 rounded-full ${
                  activeFilter === tab.id ? 'bg-white/20 text-white' : 'bg-[#fafafa] text-[#888888]'
                }`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Featured Projects Grid */}
        {featuredProjects.length > 0 && (
          <div className="mb-14 sm:mb-20 space-y-6">
            {activeFilter === 'all' && (
              <div className="flex items-center gap-2.5 px-1">
                <span className="w-2 h-2 rounded-full bg-black" />
                <span className="text-xs font-semibold uppercase tracking-wider text-[#333333]">
                  Featured Projects
                </span>
              </div>
            )}
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {featuredProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                  className="group relative rounded-2xl bg-white border border-[#eaeaea] hover:border-[#d4d4d4] p-6 flex flex-col justify-between transition-all duration-200 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
                >
                  <div>
                    <div 
                      className="mb-5 cursor-pointer"
                      onClick={() => setSelectedProject(project)}
                      title={`View ${project.title} details`}
                    >
                      {renderCardVisual(project, true)}
                    </div>

                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fafafa] text-[#666666] text-xs font-medium border border-[#eaeaea]">
                        {getCategoryIcon(project.classification)}
                        <span>{project.classification}</span>
                      </span>
                      {project.tags && project.tags[0] && (
                        <span className="text-[11px] text-[#888888] font-medium">
                          {project.tags[0]}
                        </span>
                      )}
                    </div>

                    <h3 
                      onClick={() => setSelectedProject(project)}
                      className="text-2xl font-semibold text-black mb-2.5 group-hover:text-[#0070f3] transition-colors cursor-pointer"
                      title={`View ${project.title} details`}
                    >
                      {project.title}
                    </h3>

                    <p className="text-sm text-[#666666] leading-relaxed mb-6">
                      {project.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#eaeaea] flex items-center gap-3">
                    {project.url ? (
                      <>
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-[13px] font-medium bg-black hover:bg-neutral-700 text-white transition-colors"
                        >
                          <span>View Project</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="py-2.5 px-4 rounded-lg text-[13px] font-medium border border-[#d4d4d4] text-black hover:bg-neutral-50 transition-colors cursor-pointer"
                        >
                          Details
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-[13px] font-medium border border-[#d4d4d4] text-black hover:bg-neutral-50 transition-colors cursor-pointer"
                      >
                        <span>View Details</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </button>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Secondary Projects Grid */}
        {secondaryProjects.length > 0 && (
          <div className="space-y-6">
            {activeFilter === 'all' && (
              <div className="flex items-center gap-2.5 px-1 pt-4">
                <span className="w-2 h-2 rounded-full bg-[#888888]" />
                <span className="text-xs font-semibold uppercase tracking-wider text-[#333333]">
                  Additional Products &amp; Builds
                </span>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {secondaryProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                  className="group relative rounded-2xl bg-white border border-[#eaeaea] hover:border-[#d4d4d4] p-5 flex flex-col justify-between transition-all duration-200 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
                >
                  <div>
                    <div 
                      className="mb-5 cursor-pointer"
                      onClick={() => setSelectedProject(project)}
                      title={`View ${project.title} details`}
                    >
                      {renderCardVisual(project, false)}
                    </div>

                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fafafa] text-[#666666] text-xs font-medium border border-[#eaeaea]">
                        {getCategoryIcon(project.classification)}
                        <span>{project.classification}</span>
                      </span>
                      {project.tags && project.tags[0] && (
                        <span className="text-[11px] text-[#888888] font-medium">
                          {project.tags[0]}
                        </span>
                      )}
                    </div>

                    <h3 
                      onClick={() => setSelectedProject(project)}
                      className="text-xl font-semibold text-black mb-2 group-hover:text-[#0070f3] transition-colors cursor-pointer"
                      title={`View ${project.title} details`}
                    >
                      {project.title}
                    </h3>

                    <p className="text-sm text-[#666666] leading-relaxed mb-6">
                      {project.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#eaeaea] flex items-center gap-2.5">
                    {project.url ? (
                      <>
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3.5 rounded-lg text-[13px] font-medium bg-black hover:bg-neutral-700 text-white transition-colors"
                        >
                          <span>View Project</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="py-2.5 px-3.5 rounded-lg text-[13px] font-medium border border-[#d4d4d4] text-black hover:bg-neutral-50 transition-colors cursor-pointer"
                        >
                          Details
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-[13px] font-medium border border-[#d4d4d4] text-black hover:bg-neutral-50 transition-colors cursor-pointer"
                      >
                        <span>View Details</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </button>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div 
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-project-title"
            className="fixed inset-0 z-50 flex items-start justify-center p-3 sm:p-6 bg-black/40 backdrop-blur-sm overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
            <div 
              className="relative w-full max-w-2xl bg-white border border-[#eaeaea] rounded-2xl p-5 sm:p-8 space-y-6 my-auto sm:my-8 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                onClick={() => setSelectedProject(null)}
                aria-label="Close project details"
                className="absolute top-5 right-5 p-2 rounded-lg text-[#888888] hover:text-black hover:bg-neutral-50 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header */}
              <div className="space-y-2 pr-10">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fafafa] border border-[#eaeaea] text-[#666666] text-xs font-medium">
                  {getCategoryIcon(selectedProject.classification)}
                  <span>{selectedProject.classification}</span>
                </div>
                <h3 id="modal-project-title" className="text-2xl sm:text-3xl font-bold text-black tracking-tight">
                  {selectedProject.title}
                </h3>
              </div>

              {/* Media Visual */}
              <div className="rounded-xl overflow-hidden border border-[#eaeaea] bg-[#fafafa] p-4 sm:p-6">
                {selectedProject.videoSrc && showModalVideo ? (
                  <div className="flex flex-col items-center">
                    <div className="relative w-full max-w-[300px] aspect-[9/16] max-h-[420px] mx-auto bg-black rounded-2xl overflow-hidden border border-[#eaeaea] flex items-center justify-center">
                      <video
                        src={selectedProject.videoSrc}
                        controls
                        autoPlay
                        muted
                        playsInline
                        className="w-full h-full object-contain"
                      />
                    </div>
                    {selectedProject.screenshots && selectedProject.screenshots.length > 0 && (
                      <div className="mt-4 flex items-center gap-2">
                        <button
                          onClick={() => setShowModalVideo(false)}
                          className="px-4 py-2 rounded-lg border border-[#d4d4d4] text-black text-xs font-medium transition-colors cursor-pointer flex items-center gap-1.5 hover:bg-neutral-50"
                        >
                          <Smartphone className="w-3.5 h-3.5 text-[#0070f3]" />
                          <span>View App Screenshots</span>
                        </button>
                      </div>
                    )}
                  </div>
                ) : selectedProject.classification === 'Mobile App' ? (
                  <div className="flex flex-col items-center">
                    <div className="relative w-52 sm:w-60 aspect-[9/18] max-h-[440px] rounded-[30px] bg-[#fafafa] border-2 border-[#d4d4d4] shadow-lg p-2 flex flex-col overflow-hidden">
                      <div className="w-14 h-2.5 bg-black rounded-full mx-auto mb-1.5 flex items-center justify-center shrink-0" />
                      <div className="flex-1 rounded-[20px] overflow-hidden relative bg-black">
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

                    {selectedProject.screenshots && selectedProject.screenshots.length > 1 && (
                      <div className="mt-5 w-full max-w-lg">
                        <div className="flex items-center justify-between mb-2 px-1">
                          <span className="text-[11px] font-medium text-[#888888] uppercase tracking-wider">
                            Real App Screens
                          </span>
                          <span className="text-[11px] text-[#0070f3] font-mono">
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
                                    ? 'bg-[#0070f3]/5 border-[#0070f3] text-black'
                                    : 'bg-white border-[#eaeaea] hover:border-[#d4d4d4] text-[#666666]'
                                }`}
                              >
                                <div className="w-10 h-14 rounded-lg overflow-hidden border border-[#eaeaea] bg-white">
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

                    {selectedProject.videoSrc && (
                      <div className="mt-4">
                        <button
                          onClick={() => setShowModalVideo(true)}
                          className="px-4 py-2 rounded-full bg-black hover:bg-neutral-700 text-white text-xs font-medium flex items-center gap-2 transition-colors cursor-pointer"
                        >
                          <Play className="w-3.5 h-3.5 fill-white" />
                          <span>Watch App Video Demo</span>
                        </button>
                      </div>
                    )}
                  </div>
                ) : selectedProject.imageSrc ? (
                  <div className="relative aspect-video max-h-[320px] overflow-hidden rounded-lg bg-black">
                    <img
                      src={selectedProject.imageSrc}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover object-top"
                    />
                    {selectedProject.videoSrc && (
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <button
                          onClick={() => setShowModalVideo(true)}
                          className="px-4 py-2.5 rounded-full bg-white text-black text-xs font-medium flex items-center gap-2 transition-colors hover:bg-neutral-100 cursor-pointer"
                        >
                          <Play className="w-3.5 h-3.5 fill-black" />
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
                <p className="text-[#666666] leading-relaxed">
                  {selectedProject.summary}
                </p>

                <div className="p-4 rounded-xl bg-[#fafafa] border border-[#eaeaea] space-y-1">
                  <div className="text-xs font-medium text-[#888888] uppercase tracking-wider">
                    What it is
                  </div>
                  <div className="text-[#333333] leading-relaxed font-medium">
                    {selectedProject.whatItIs || selectedProject.summary}
                  </div>
                </div>

                {selectedProject.whatBuilt && (
                  <div className="p-4 rounded-xl bg-[#fafafa] border border-[#eaeaea] space-y-1">
                    <div className="text-xs font-medium text-[#888888] uppercase tracking-wider">
                      What 28 Labs built
                    </div>
                    <div className="text-[#333333] leading-relaxed">
                      {selectedProject.whatBuilt}
                    </div>
                  </div>
                )}

                {selectedProject.detailsNote && (
                  <div className="p-4 rounded-xl bg-[#0070f3]/5 border border-[#0070f3]/20 flex items-start gap-2.5 text-xs text-[#333333]">
                    <Info className="w-4 h-4 text-[#0070f3] shrink-0 mt-0.5" />
                    <span>More project details coming soon.</span>
                  </div>
                )}

                {selectedProject.tags && selectedProject.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-1">
                    {selectedProject.tags.map(tag => (
                      <span 
                        key={tag}
                        className="px-2.5 py-1 rounded-lg bg-[#fafafa] border border-[#eaeaea] text-[11px] text-[#666666]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer Actions */}
              <div className="pt-4 border-t border-[#eaeaea] flex flex-col sm:flex-row items-center gap-3">
                {selectedProject.url && (
                  <a
                    href={selectedProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full text-sm font-medium bg-black hover:bg-neutral-700 text-white transition-colors"
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
                  className="w-full sm:w-auto py-3 px-5 rounded-full text-sm font-medium border border-[#d4d4d4] text-black hover:bg-neutral-50 transition-colors cursor-pointer"
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
