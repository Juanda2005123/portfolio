'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/Button';
import { LinkedInIcon } from '@/components/ui/Icons';
import {
  Mail,
  FileText,
  Code2,
  GraduationCap,
  MapPin,
  Puzzle,
  Rocket,
  Brain,
  Search,
} from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const sidebarIconMap: Record<string, React.ReactNode> = {
  code: <Code2 className="w-4 h-4 opacity-80" />,
  graduation: <GraduationCap className="w-4 h-4 opacity-80" />,
  map: <MapPin className="w-4 h-4 opacity-80" />,
  typescript: (
    <span className="w-4 h-4 flex items-center justify-center text-[10px] font-bold opacity-80">
      TS
    </span>
  ),
  puzzle: <Puzzle className="w-4 h-4 opacity-80" />,
  rocket: <Rocket className="w-4 h-4 opacity-80" />,
  brain: <Brain className="w-4 h-4 opacity-80" />,
};

interface HeroProps {
  photoOrientation?: 'vertical' | 'horizontal';
}

export const Hero: React.FC<HeroProps> = ({
  photoOrientation = 'vertical',
}) => {
  const { t } = useLanguage();
  const { hero } = t;

  // ─── PARALLAX: window scroll (absolute pixels) ────────────────────────────
  // Animation starts at scrollY 200 (≈ when the card top reaches mid-screen)
  // and runs over ~500px. Values are 20% less than previous iteration.
  const { scrollY } = useScroll();

  // Far mountains: 176px travel (220 × 0.8), fade to 8% opacity (not full black)
  const farY       = useTransform(scrollY, [200, 700], [0, 176]);
  const farOpacity = useTransform(scrollY, [200, 380, 670], [1, 0.65, 0.08]);

  // Mid mountains: 112px travel (140 × 0.8), fade to 12% opacity
  const midY       = useTransform(scrollY, [200, 700], [0, 112]);
  const midOpacity = useTransform(scrollY, [200, 460, 710], [1, 0.72, 0.12]);

  // Card: 120px travel — handled on a dedicated inner div so it doesn't
  // conflict with the mount-animation y on the outer motion.div
  const cardY = useTransform(scrollY, [200, 850], [0, 120]);

  const renderSocialIcon = (icon: string) => {
    switch (icon) {
      case 'linkedin':
        return <LinkedInIcon className="w-4 h-4" />;
      case 'email':
        return <Mail className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-start overflow-hidden pt-28 sm:pt-36 md:pt-40"
      style={{
        background:
          'linear-gradient(180deg, #090a0d 0%, #121318 14%, #1f191c 26%, #312320 38%, #382723 48%, #261a18 58%, #140d0e 68%, #08080a 76%, #08080a 100%)',
      }}
    >
      {/* ═══════════ LANDSCAPE LAYERS ═══════════ */}

      {/* Layer 1 – Far mountains (z-1): sink fastest + fade */}
      <motion.div
        className="absolute left-0 right-0 w-full pointer-events-none z-[1]"
        style={{
          bottom: '310px',
          y: farY,
          opacity: farOpacity,
          WebkitMaskImage:
            'linear-gradient(to bottom, black 0%, black 44%, transparent 58%)',
          maskImage:
            'linear-gradient(to bottom, black 0%, black 44%, transparent 58%)',
        }}
      >
        <Image
          src="/hero-bg-far.png"
          alt="Distant mountain landscape"
          width={2464}
          height={909}
          className="w-full h-auto object-cover object-bottom opacity-90"
          priority
        />
      </motion.div>

      {/* Layer 2 – Mid mountains (z-2): sink medium + fade */}
      <motion.div
        className="absolute left-0 right-0 w-full pointer-events-none z-[2]"
        style={{
          bottom: '250px',
          y: midY,
          opacity: midOpacity,
          WebkitMaskImage:
            'linear-gradient(to bottom, black 0%, black 58%, transparent 72%)',
          maskImage:
            'linear-gradient(to bottom, black 0%, black 58%, transparent 72%)',
        }}
      >
        <Image
          src="/hero-bg-mid.png"
          alt="Mountain landscape mid layer"
          width={2464}
          height={848}
          className="w-full h-auto object-cover object-bottom"
          priority
        />
      </motion.div>

      {/* Layer 3 – Moss / foreground (z-4): STATIC ground-plane */}
      <div
        className="absolute left-0 right-0 w-full pointer-events-none z-[4]"
        style={{ bottom: '235px' }}
      >
        <div className="relative w-full">
          <Image
            src="/hero-bg-front.png"
            alt="Foreground grass and vegetation"
            width={2464}
            height={488}
            className="w-full h-auto object-cover object-bottom"
            style={{
              WebkitMaskImage:
                'linear-gradient(to bottom, black 0%, black 62%, rgba(0,0,0,0.5) 82%, transparent 100%)',
              maskImage:
                'linear-gradient(to bottom, black 0%, black 62%, rgba(0,0,0,0.5) 82%, transparent 100%)',
            }}
            priority
          />
          {/*
            Gradient fill: starts at 25% of the moss image (earlier than before),
            reaches solid #08080a at 20% of its own height → covers card bottom quickly.
            2000px height guarantees coverage past the Intro pill.
          */}
          <div
            className="absolute inset-x-0"
            style={{
              top: '25%',
              height: '2000px',
              background:
                'linear-gradient(to bottom, transparent 0%, rgba(8,8,10,0.9) 12%, #08080a 22%, #08080a 100%)',
            }}
          />
        </div>
      </div>

      {/*
        Dedicated BLACK FLOOR (z-6) — absolute failsafe.
        Covers the bottom ~420px of the section with a fast fade-to-black.
        This sits above the moss (z-4) and ensures the card bottom edge (z-3)
        is NEVER visible no matter how far cardY pushes it down.
        The Intro pill lives at z-7, above this floor.
      */}
      <div
        className="absolute inset-x-0 bottom-0 pointer-events-none z-[6]"
        style={{
          height: '420px',
          background:
            'linear-gradient(to bottom, transparent 0%, rgba(8,8,10,0.92) 22%, #08080a 38%, #08080a 100%)',
        }}
      />

      {/* ═══════════ CONTENT (z-3) ═══════════ */}
      <div className="relative z-[3] flex flex-col items-center w-full max-w-6xl mx-auto px-4 sm:px-6">

        {/* Badge pill */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-6"
        >
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-[13px] font-normal text-[#edd3b4] bg-[#dcb991]/[0.08] border border-[#dcb991]/25 backdrop-blur-sm shadow-sm">
            {hero.badge}
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08, ease: 'easeOut' }}
          className="text-center max-w-3xl mb-4"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-semibold tracking-tight text-white leading-[1.1]">
            <span className="bg-gradient-to-r from-[#edd3b4] via-[#dcb991] to-[#c79c72] bg-clip-text text-transparent font-medium">
              {hero.greeting}
            </span>{' '}
            {hero.name}.
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
          className="text-center max-w-xl mb-9"
        >
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
            {hero.subtitle}
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.22, ease: 'easeOut' }}
          className="flex items-center gap-3 mb-20 sm:mb-28 md:mb-32"
        >
          <a
            href={`#${hero.primaryCta.targetId}`}
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById(hero.primaryCta.targetId)
                ?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center px-7 py-2.5 rounded-full text-sm font-medium bg-[#fcf8f2] text-[#1a1410] border border-[#dcb991]/35 hover:bg-white transition-all duration-200 cursor-pointer shadow-[0_4px_25px_rgba(220,185,145,0.22)] hover:shadow-[0_4px_30px_rgba(220,185,145,0.35)] hover:scale-[1.02] active:scale-[0.98]"
          >
            {hero.primaryCta.text}
          </a>
        </motion.div>

        {/* ═══════════ FORA-STYLE APP CARD ═══════════
            Two nested motion.divs to avoid y-value conflict:
            • Outer: opacity + y slide-in on mount (animate)
            • Inner: scroll-driven y only (style MotionValue, no opacity)
              → z-index (from parent z-[3]) is unaffected; moss (z-4) clips correctly
        */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="w-full max-w-[940px] mx-auto"
        >
          {/* Scroll-parallax wrapper — y only, no opacity */}
          <motion.div style={{ y: cardY }}>
            <div
              className="rounded-t-[28px] overflow-hidden border border-white/[0.12] backdrop-blur-[24px] shadow-[0_25px_80px_-15px_rgba(0,0,0,0.9)]"
              style={{ backgroundColor: 'rgba(24, 24, 28, 0.94)' }}
            >
              <div className="flex flex-col sm:flex-row min-h-[500px] sm:min-h-[580px] md:min-h-[620px]">

                {/* Left sidebar */}
                <div
                  className={`flex-shrink-0 p-5 sm:p-7 flex flex-col justify-start border-b sm:border-b-0 sm:border-r border-white/[0.08] bg-[#121216]/95 ${
                    photoOrientation === 'vertical'
                      ? 'sm:w-[340px] md:w-[380px]'
                      : 'sm:w-[240px] md:w-[260px]'
                  }`}
                >
                  <div className="flex items-center justify-between pb-5 mb-5 border-b border-white/[0.07]">
                    <span className="text-sm font-semibold tracking-tight text-white/90">
                      JDQP
                    </span>
                    <Search className="w-4 h-4 text-white/40 hover:text-white/80 transition-colors cursor-pointer" />
                  </div>

                  <div className="flex flex-col gap-1">
                    {hero.sidebarItems.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3.5 px-3 py-2 rounded-xl text-white/80 text-[13px] hover:bg-white/[0.06] hover:text-white transition-all cursor-default group"
                      >
                        <span className="text-white/60 group-hover:text-white transition-colors shrink-0">
                          {sidebarIconMap[item.icon] || (
                            <Code2 className="w-4 h-4" />
                          )}
                        </span>
                        <span className="font-normal tracking-tight truncate">
                          {item.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: Profile photo */}
                <div className="flex-1 relative bg-zinc-950 overflow-hidden min-h-[420px] sm:min-h-[580px]">
                  <Image
                    src="/image_Juan_Hero.jpeg"
                    alt={hero.profileAlt}
                    fill
                    className="object-cover object-center"
                    priority
                    sizes="(max-width: 768px) 100vw, 560px"
                  />

                  {/* Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/40 z-[1] pointer-events-none" />

                  {/* Top Floating Glass Bar */}
                  <div className="absolute top-4 left-4 right-4 z-[2] p-3 sm:p-3.5 rounded-2xl bg-black/55 backdrop-blur-xl border border-white/15 shadow-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-white text-zinc-950 font-bold text-xs flex items-center justify-center shadow-sm shrink-0">
                        JQ
                      </div>
                      <div>
                        <p className="text-white text-xs sm:text-sm font-semibold leading-tight drop-shadow">
                          {hero.profileCardName}
                        </p>
                        <p className="text-zinc-300 text-[11px] leading-tight drop-shadow">
                          {hero.profileCardRole}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Button
                        variant="primary"
                        size="sm"
                        href={hero.secondaryCta.url}
                        target="_blank"
                        icon={<FileText className="w-3.5 h-3.5" />}
                        className="text-xs px-3.5 py-1.5 shadow-sm bg-[#fcf8f2] text-[#1a1410] hover:bg-white"
                      >
                        {hero.secondaryCta.text}
                      </Button>

                      {hero.socials.map((social) => (
                        <Button
                          key={social.name}
                          variant="icon"
                          href={social.url}
                          target="_blank"
                          aria-label={social.ariaLabel}
                          className="p-2 bg-white/10 border-white/15 hover:bg-white/20 text-white"
                        >
                          {renderSocialIcon(social.icon)}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* ═══════════ TRANSITION ZONE → Intro pill ═══════════
          z-[7] sits above the black floor (z-6) and the moss (z-4).
          No background needed — the floor + moss overlay fill in seamlessly.
      */}
      <div className="relative z-[7] w-full flex flex-col items-center justify-center pt-36 sm:pt-48 md:pt-60 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-zinc-400 backdrop-blur-sm shadow-sm hover:border-white/20 transition-colors"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#dcb991]" />
          Intro
        </motion.div>
      </div>
    </section>
  );
};
