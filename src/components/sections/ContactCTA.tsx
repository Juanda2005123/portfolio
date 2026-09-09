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
} from 'lucide-react';

export const ContactCTA: React.FC = () => {
  const { t, language } = useLanguage();
  const { contact } = t;

  const isEs = language === 'es';

  /* Clean portfolio navigation items for the app sidebar */
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
      active: true, // highlighted active channel
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
  ];

  return (
    <section
      id="contact"
      className="relative pt-24 sm:pt-32 md:pt-36 overflow-hidden"
      style={{
        background:
          'linear-gradient(180deg, #08080a 0%, #100b0e 20%, #201317 40%, #341f22 62%, #3d2423 78%, #241518 92%, #0e090b 100%)',
      }}
    >
      {/* ── Main Container (widened to accommodate 40% larger app window) ── */}
      <div className="relative z-[5] w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start w-full">

          {/* ── Left Column: Headline + CTA ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-4 flex flex-col items-start py-4 lg:pt-16"
          >
            {/* Main Headline */}
            <h2 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-semibold text-white tracking-tight leading-[1.08] mb-6">
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

          {/* ── Right Column: App Window (40% wider, transparent background) ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            className="lg:col-span-8 flex justify-center lg:justify-end w-full"
          >
            {/*
              App window container:
              • Max-width 1150px (+15% larger canvas)
              • Transparent background in canvas letting the section gradient shine through
              • Left sidebar widened for email display matching Hero component (#121216/95)
              • Top border specular light highlight (brillante en la cresta superior que se atenúa)
              • Tall layout sinking under the dunes
            */}
            <div
              className="relative w-full max-w-[1150px] rounded-t-[22px] border border-white/[0.10] bg-white/[0.015] backdrop-blur-[2px] overflow-hidden flex flex-col sm:flex-row"
              style={{
                minHeight: '700px',
                boxShadow:
                  'inset 0 1px 1px 0 rgba(255, 255, 255, 0.18), 0 25px 80px -15px rgba(0,0,0,0.85)',
              }}
            >
              {/* ── Top Border Specular Light Reflection (50% softer) ── */}
              {/* Crisp top light line */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent z-20" />
              {/* Soft specular glow centered on top edge */}
              <div className="pointer-events-none absolute -top-0.5 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-white/35 to-transparent blur-[1px] z-20" />
              {/* Ambient specular cone reflection */}
              <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-8 bg-gradient-to-b from-white/[0.04] to-transparent blur-md z-10" />

              {/* ── Left Sidebar (Widened to 260px-280px, bg-[#121216]/95) ── */}
              <div className="sm:w-[260px] md:w-[280px] shrink-0 border-b sm:border-b-0 sm:border-r border-white/[0.08] bg-[#121216]/95 flex flex-col">
                {/* Header with email on the left, Search on the right */}
                <div className="px-5 py-4 flex items-center justify-between gap-2 border-b border-white/[0.07]">
                  <span
                    className="text-xs font-semibold tracking-tight text-white/90 truncate"
                    title="juandavidquintero49@gmail.com"
                  >
                    juandavidquintero49@gmail.com
                  </span>
                  <Search className="w-4 h-4 text-white/40 hover:text-white/80 transition-colors cursor-pointer shrink-0" />
                </div>

                {/* Navigation links */}
                <nav className="flex-1 py-3 px-2.5 flex flex-col gap-1">
                  {sidebarItems.map((item, i) => (
                    <a
                      key={i}
                      href={item.href}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noopener noreferrer' : undefined}
                      className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-[13px] font-medium transition-colors group ${
                        item.active
                          ? 'text-[#dcb991] bg-[#dcb991]/[0.10]'
                          : 'text-zinc-400 hover:text-zinc-100 hover:bg-white/[0.05]'
                      }`}
                    >
                      <span
                        className={`shrink-0 ${
                          item.active
                            ? 'text-[#dcb991]'
                            : 'text-zinc-500 group-hover:text-zinc-300 transition-colors'
                        }`}
                      >
                        {item.icon}
                      </span>
                      <span className="truncate">{item.label}</span>
                    </a>
                  ))}
                </nav>
              </div>

              {/* ── Main Panel (Spacious, clean, Fora chat style) ── */}
              <div className="flex-1 bg-transparent flex flex-col items-center justify-center pt-20 pb-28 px-8 sm:px-12 text-center">
                {/* Center Avatar */}
                <div className="w-16 h-16 rounded-full bg-white text-zinc-950 font-bold text-xl flex items-center justify-center shadow-xl mb-4 border border-white/30 select-none">
                  JQ
                </div>

                {/* Name */}
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-1.5">
                  {contact.cardName}
                </h3>

                {/* Professional Role */}
                <p className="text-sm text-zinc-400 font-normal mb-8">
                  {contact.cardRole}
                </p>

                {/* Wide Pill Action Button (Fora "Join now" style) */}
                <div className="w-full max-w-[320px]">
                  <a
                    href={contact.cvUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-full text-sm font-semibold bg-[#fcf8f2] text-[#1a1410] border border-[#dcb991]/40 hover:bg-white transition-all shadow-[0_4px_25px_rgba(220,185,145,0.18)] hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                  >
                    <FileText className="w-4 h-4 text-[#1a1410] shrink-0" />
                    <span>{contact.cardCtaText}</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Sand Dunes (Overlap the app window) ── */}
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
