'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { ChevronDown, MapPin, Briefcase, GraduationCap } from 'lucide-react';
import Image from 'next/image';

interface ItemData {
  id: string;
  role: string;
  company: string;
  period: string;
  current?: boolean;
  location: string;
  locationKind: string;
  employmentType: string;
  shortDescription?: string;
  bullets?: string[];
  logo: string;
  accentColor?: string;
  badgeExtra?: string;
}

export const Experience: React.FC = () => {
  const { t, language } = useLanguage();
  const { workExperience, education } = t;

  // Active section tab: 'experience' or 'education'
  const [activeSection, setActiveSection] = useState<'experience' | 'education'>('experience');

  // lockedId stores the row clicked open permanently (null by default so nothing is pre-opened)
  const [lockedId, setLockedId] = useState<string | null>(null);
  // hoveredId stores the row currently under the cursor (desktop only)
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // Hover previews immediately on desktop; falls back to locked item when mouse leaves
  const activeId = hoveredId ?? lockedId;

  const handleMouseEnter = (id: string) => {
    // Only trigger hover on devices with fine pointer (mouse/trackpad), never on touch/mobile
    if (typeof window !== 'undefined' && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      setHoveredId(id);
    }
  };

  const handleMouseLeave = () => {
    if (typeof window !== 'undefined' && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      setHoveredId(null);
    }
  };

  const handleItemClick = (id: string) => {
    // Clear any hover state so mobile touch tap never retains phantom hover
    setHoveredId(null);
    setLockedId((prev) => (prev === id ? null : id));
  };

  const handleSectionSwitch = (section: 'experience' | 'education') => {
    setActiveSection(section);
    setLockedId(null);
    setHoveredId(null);
  };

  // Format education entry to share the exact same UI structure as work experience
  const educationItem: ItemData = {
    id: education.entry.id,
    role: education.entry.degree,
    company: education.entry.institution,
    period: education.entry.period,
    current: education.entry.current,
    location: education.entry.location,
    locationKind: education.entry.locationKind,
    employmentType: language === 'es' ? 'Educación Superior' : 'Higher Education',
    shortDescription: education.entry.shortDescription,
    bullets: education.entry.bullets,
    logo: education.entry.logo,
    accentColor: '#7c9eae',
    badgeExtra: `GPA ${education.entry.gpa} / ${education.entry.gpaScale}`,
  };

  const items: ItemData[] =
    activeSection === 'experience'
      ? workExperience.entries.map((w) => ({
          ...w,
          badgeExtra: undefined,
        }))
      : [educationItem];

  return (
    <section
      id="experience"
      className="relative py-24 md:py-32 px-6 sm:px-10 lg:px-12 w-full max-w-5xl mx-auto"
    >
      {/* ── Section Header (Static Title that does NOT change when toggling) ── */}
      <div className="mb-10 md:mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-zinc-400 backdrop-blur-sm mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#dcb991]" />
          {language === 'es' ? 'Trayectoria & Formación' : 'Career & Education'}
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.15]">
          <span className="text-white block">
            {language === 'es' ? 'Experiencia &' : 'Experience &'}
          </span>
          <span className="text-[#c8a882] block">
            {language === 'es' ? 'Educación' : 'Education'}
          </span>
        </h2>

        <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mt-4 leading-relaxed">
          {language === 'es'
            ? 'Historial de desarrollo de software, roles en producción y formación académica en ingeniería de sistemas.'
            : 'Track record in software engineering, production systems, and academic computer engineering training.'}
        </p>
      </div>

      {/* ── Prominent Switcher: Experiencia / Educación (Without numbers) ── */}
      <LayoutGroup id="experience-education-toggle">
        <div className="flex items-center gap-2 p-1.5 rounded-xl bg-white/[0.03] border border-white/[0.08] w-fit mb-8 sm:mb-10 backdrop-blur-md shadow-lg">
          <button
            onClick={() => handleSectionSwitch('experience')}
            className={`relative px-5 py-2.5 text-xs sm:text-sm font-medium rounded-lg transition-colors duration-200 flex items-center gap-2 select-none cursor-pointer ${
              activeSection === 'experience'
                ? 'text-white'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            {activeSection === 'experience' && (
              <motion.div
                layoutId="exp-toggle-pill"
                className="absolute inset-0 rounded-lg bg-white/[0.08] border border-white/10 shadow-md"
                transition={{ type: 'spring', stiffness: 450, damping: 35 }}
              />
            )}
            <Briefcase className="w-4 h-4 relative z-10 text-[#dcb991]" />
            <span className="relative z-10">
              {language === 'es' ? 'Experiencia' : 'Experience'}
            </span>
          </button>

          <button
            onClick={() => handleSectionSwitch('education')}
            className={`relative px-5 py-2.5 text-xs sm:text-sm font-medium rounded-lg transition-colors duration-200 flex items-center gap-2 select-none cursor-pointer ${
              activeSection === 'education'
                ? 'text-white'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            {activeSection === 'education' && (
              <motion.div
                layoutId="exp-toggle-pill"
                className="absolute inset-0 rounded-lg bg-white/[0.08] border border-white/10 shadow-md"
                transition={{ type: 'spring', stiffness: 450, damping: 35 }}
              />
            )}
            <GraduationCap className="w-4 h-4 relative z-10 text-[#7c9eae]" />
            <span className="relative z-10">
              {language === 'es' ? 'Educación' : 'Education'}
            </span>
          </button>
        </div>
      </LayoutGroup>

      {/* ── Frame Container with Refined Balanced Corners (rounded-2xl) ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
          className="rounded-2xl border border-white/[0.08] bg-[#0c0c10]/90 backdrop-blur-xl divide-y divide-white/[0.06] shadow-2xl overflow-hidden"
        >
          {items.map((entry) => {
            const isOpen = activeId === entry.id;

            return (
              <div
                key={entry.id}
                onMouseEnter={() => handleMouseEnter(entry.id)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleItemClick(entry.id)}
                className={`group relative transition-colors duration-200 cursor-pointer ${
                  isOpen ? 'bg-white/[0.025]' : 'hover:bg-white/[0.015]'
                }`}
              >
                {/* Active Left Indicator Bar with Smooth Curve */}
                {isOpen && (
                  <motion.div
                    layoutId="active-bar-indicator"
                    className="absolute left-0 top-0 bottom-0 w-[3px] rounded-r-full bg-[#dcb991]"
                    transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                  />
                )}

                {/* ── Row Header ── */}
                <div className="p-5 sm:p-7 flex items-start gap-4 sm:gap-5 select-none">
                  {/* Logo Container in Crisp White with Refined Rounded Corners */}
                  <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white p-2 shrink-0 flex items-center justify-center shadow-md border border-white/20 mt-0.5">
                    <Image
                      src={entry.logo}
                      alt={entry.company}
                      width={52}
                      height={52}
                      className="w-full h-full object-contain filter drop-shadow-sm pointer-events-none"
                    />
                  </div>

                  {/* Main Info Block */}
                  <div className="flex-1 min-w-0">
                    {/* Top line: Role + Badges + Date */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-3">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-base sm:text-lg md:text-xl font-bold text-white tracking-tight group-hover:text-[#edd3b4] transition-colors">
                          {entry.role}
                        </h3>

                        <span className="text-[11px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-md border border-[#dcb991]/30 bg-[#dcb991]/10 text-[#edd3b4]">
                          {entry.employmentType}
                        </span>

                        {entry.badgeExtra && (
                          <span className="text-[11px] font-mono px-2 py-0.5 rounded-md border border-blue-400/30 bg-blue-500/10 text-blue-300 font-semibold">
                            {entry.badgeExtra}
                          </span>
                        )}

                        {entry.current && (
                          <span className="inline-flex items-center gap-1.5 text-[10px] font-mono px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/25">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            {language === 'es' ? 'Presente' : 'Present'}
                          </span>
                        )}
                      </div>

                      <span className="text-xs font-mono text-zinc-400 shrink-0">
                        {entry.period}
                      </span>
                    </div>

                    {/* Company and Location subtitle */}
                    <div className="flex flex-wrap items-center gap-2 mt-1 text-xs text-zinc-400 font-mono">
                      <span className="text-zinc-300 font-medium">{entry.company}</span>
                      <span className="text-zinc-600">·</span>
                      <span className="flex items-center gap-1 text-zinc-500">
                        <MapPin className="w-3.5 h-3.5" />
                        {entry.location} ({entry.locationKind})
                      </span>
                    </div>

                    {/* Short summary description (always visible) */}
                    {entry.shortDescription && (
                      <p className="text-xs sm:text-sm text-zinc-400 mt-2.5 leading-relaxed max-w-3xl">
                        {entry.shortDescription}
                      </p>
                    )}
                  </div>

                  {/* Chevron Toggle Indicator */}
                  <div className="shrink-0 mt-1 pl-1">
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${
                        isOpen
                          ? 'bg-white/[0.08] text-[#dcb991]'
                          : 'text-zinc-500 group-hover:text-zinc-300 bg-transparent'
                      }`}
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          isOpen ? 'rotate-180 text-[#dcb991]' : ''
                        }`}
                      />
                    </div>
                  </div>
                </div>

                {/* ── Accordion Content: 2 Clean Bullet Points ── */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.33, 1, 0.68, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-7 pb-6 pt-0">
                        <div className="pl-0 sm:pl-[72px] border-t border-white/[0.06] pt-4">
                          {entry.bullets && entry.bullets.length > 0 && (
                            <ul className="space-y-3">
                              {entry.bullets.map((bullet, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start gap-3 text-xs sm:text-sm md:text-base text-zinc-300 leading-relaxed"
                                >
                                  {/* Refined Small Bullet Point Marker */}
                                  <span className="mt-2 w-1.5 h-1.5 rounded-[2px] bg-[#dcb991] shrink-0" />
                                  <span>{bullet}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};
