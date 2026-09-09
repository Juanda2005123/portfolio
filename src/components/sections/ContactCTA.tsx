'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { LinkedInIcon, GitHubIcon } from '@/components/ui/Icons';
import {
  Mail,
  FileText,
  Search,
  Code2,
  MessageSquare,
  LayoutGrid,
  Users,
} from 'lucide-react';

export const ContactCTA: React.FC = () => {
  const { t, language } = useLanguage();
  const { contact } = t;

  const isEs = language === 'es';

  /* Sidebar nav items – adapting Fora's app-navigation style to portfolio links */
  const sidebarItems = [
    {
      icon: <LinkedInIcon className="w-4 h-4" />,
      label: 'LinkedIn',
      href: contact.linkedinUrl,
      external: true,
      active: false,
    },
    {
      icon: <MessageSquare className="w-4 h-4" />,
      label: 'Email',
      href: `mailto:${contact.primaryCtaEmail}`,
      external: false,
      active: true,          // highlighted – the "active" channel like Fora's "Chat"
    },
    {
      icon: <FileText className="w-4 h-4" />,
      label: isEs ? 'Currículum' : 'Resume',
      href: contact.cvUrl,
      external: true,
      active: false,
    },
    {
      icon: <Code2 className="w-4 h-4" />,
      label: isEs ? 'Proyectos' : 'Projects',
      href: '#projects',
      external: false,
      active: false,
    },
    {
      icon: <GitHubIcon className="w-4 h-4" />,
      label: 'GitHub',
      href: contact.githubUrl,
      external: true,
      active: false,
    },
    {
      icon: <Users className="w-4 h-4" />,
      label: isEs ? 'Contratación' : 'Hiring',
      href: `mailto:${contact.primaryCtaEmail}`,
      external: false,
      active: false,
    },
  ];

  return (
    <section
      id="contact"
      /* No overflow-hidden: the panel intentionally extends into the dunes */
      className="relative pt-24 sm:pt-32 md:pt-36"
      style={{
        background:
          'linear-gradient(180deg, #08080a 0%, #100b0e 20%, #201317 40%, #341f22 62%, #3d2423 78%, #241518 92%, #0e090b 100%)',
      }}
    >
      {/* ── Main 2-Column Container ── */}
      <div className="relative z-[5] w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start w-full">

          {/* ── Left Column: Headline + CTA ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-5 flex flex-col items-start py-4 lg:pt-16"
          >
            {/* Main Headline */}
            <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-semibold text-white tracking-tight leading-[1.08] mb-6">
              {contact.headlineFirst}{' '}
              <span className="font-light text-[#edd3b4]">
                {contact.headlineSecond}
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-zinc-300 text-base sm:text-lg font-normal leading-relaxed max-w-md mb-9">
              {contact.subtitle}
            </p>

            {/* Primary Action Button */}
            <a
              href={`mailto:${contact.primaryCtaEmail}`}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-sm font-semibold bg-[#fcf8f2] text-[#1a1410] border border-[#dcb991]/40 hover:bg-white transition-all shadow-[0_4px_30px_rgba(220,185,145,0.22)] hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <Mail className="w-4 h-4 text-[#1a1410]" />
              <span>{contact.primaryCtaText}</span>
            </a>
          </motion.div>

          {/* ── Right Column: App-Window UI (Fora-style) ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            className="lg:col-span-7 flex justify-center lg:justify-end w-full"
          >
            {/*
              App window:
              • Tall (min-h-[720px]) so it bleeds into the dunes
              • rounded-t-[18px] only – bottom corners are hidden under the dunes
              • No heavy glassmorphism; clean solid dark background
            */}
            <div
              className="w-full max-w-[680px] rounded-t-[18px] border border-white/[0.08] bg-[#0e0f14] shadow-[0_20px_70px_rgba(0,0,0,0.75)] overflow-hidden flex flex-col sm:flex-row"
              style={{ minHeight: '720px' }}
            >

              {/* ── Sidebar ── */}
              <div className="sm:w-[180px] md:w-[196px] shrink-0 border-b sm:border-b-0 sm:border-r border-white/[0.07] bg-[#0a0b0f] flex flex-col">

                {/* Sidebar Header: logo pill + search icon */}
                <div className="px-4 py-[14px] flex items-center justify-between border-b border-white/[0.06]">
                  <div className="flex items-center gap-2.5">
                    <div className="w-6 h-6 rounded-full bg-[#dcb991]/[0.15] border border-[#dcb991]/25 flex items-center justify-center shrink-0">
                      <span className="text-[7px] font-bold text-[#dcb991] leading-none select-none">
                        JQ
                      </span>
                    </div>
                    {/* decorative placeholder bar */}
                    <div className="w-14 h-[9px] rounded-full bg-white/[0.07]" />
                  </div>
                  <Search className="w-3.5 h-3.5 text-zinc-600 shrink-0" />
                </div>

                {/* Nav Items */}
                <nav className="flex-1 py-2.5 px-2 flex flex-col gap-0.5">
                  {sidebarItems.map((item, i) => (
                    <a
                      key={i}
                      href={item.href}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noopener noreferrer' : undefined}
                      className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-[13px] font-medium transition-colors group ${
                        item.active
                          ? 'text-[#dcb991] bg-[#dcb991]/[0.08]'
                          : 'text-zinc-500 hover:text-zinc-200 hover:bg-white/[0.04]'
                      }`}
                    >
                      <span
                        className={`shrink-0 ${
                          item.active
                            ? 'text-[#dcb991]'
                            : 'text-zinc-600 group-hover:text-zinc-400 transition-colors'
                        }`}
                      >
                        {item.icon}
                      </span>
                      <span className="truncate">{item.label}</span>
                    </a>
                  ))}
                </nav>

                {/* Availability status at sidebar bottom */}
                <div className="px-4 py-4 border-t border-white/[0.06]">
                  <div className="flex items-center gap-2 text-[10px] font-mono text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                    <span className="truncate">
                      {isEs ? 'Para Contratación' : 'Available for Hire'}
                    </span>
                  </div>
                </div>
              </div>

              {/* ── Main Content Panel ── */}
              <div className="flex-1 bg-[#111318] flex flex-col items-center pt-14 pb-10 px-8 text-center">

                {/* Avatar */}
                <div className="w-[52px] h-[52px] rounded-full bg-white text-zinc-950 font-bold text-base flex items-center justify-center shadow-lg mb-3 border border-white/25 select-none">
                  JQ
                </div>

                {/* Name */}
                <h3 className="text-[22px] font-bold text-white tracking-tight mb-1.5">
                  {contact.cardName}
                </h3>

                {/* Overlapping tech initials + badge text */}
                <div className="flex items-center justify-center gap-2 mb-8">
                  <div className="flex -space-x-1.5">
                    {['TS', 'JV', 'NX'].map((initials) => (
                      <span
                        key={initials}
                        className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white/[0.10] text-[8px] font-bold text-zinc-300 border border-[#111318] select-none"
                      >
                        {initials}
                      </span>
                    ))}
                  </div>
                  <span className="text-[12px] text-zinc-400">{contact.cardBadge}</span>
                </div>

                {/* Primary action – wide pill, Fora "Join now" style */}
                <div className="w-full max-w-[300px] mb-8">
                  <a
                    href={contact.cvUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2.5 py-3 px-6 rounded-full text-sm font-semibold bg-white/90 text-zinc-950 border border-white/30 hover:bg-white transition-all shadow-[0_4px_20px_rgba(255,255,255,0.08)] hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                  >
                    <FileText className="w-4 h-4 shrink-0" />
                    <span>{contact.cardCtaText}</span>
                  </a>
                </div>

                {/* Description with arrow highlights */}
                <div className="w-full max-w-sm text-[12px] sm:text-[13px] text-zinc-400 leading-relaxed text-left space-y-2 pt-5 border-t border-white/[0.06]">
                  <p className="font-medium text-zinc-300 mb-2.5">
                    {isEs
                      ? 'Ingeniero de Software enfocado en arquitectura de alto rendimiento:'
                      : 'Software Engineer focused on high-performance architecture:'}
                  </p>
                  {contact.cardHighlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5">
                      <span className="text-[#dcb991] font-mono shrink-0 select-none">→</span>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Sand Dunes ──────────────────────────────────────────────────────────
          z-[20] > panel z-[5]  → dunes render ON TOP of the panel bottom.
          Negative margin-top pulls them upward to overlap the panel,
          creating the "window sinking into the landscape" effect (Fora-style).
      ──────────────────────────────────────────────────────────────────────── */}
      <div className="relative z-[20] w-full pointer-events-none select-none -mt-24 sm:-mt-32 md:-mt-40">
        <Image
          src="/dunes-bg.png"
          alt="Minimalist rolling landscape with dunes"
          width={1600}
          height={349}
          className="w-full h-auto object-cover object-top opacity-95"
          priority
        />

        {/* Discreet copyright at the very bottom */}
        <div className="absolute inset-x-0 bottom-2 text-center text-xs font-mono text-zinc-400/80 z-[2] pointer-events-auto px-4">
          <span>{contact.rights}</span>
        </div>
      </div>
    </section>
  );
};
