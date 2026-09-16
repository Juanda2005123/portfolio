'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';
import { Project } from '@/content/types';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ProjectMockup } from '@/components/ui/ProjectMockup';
import { GitHubIcon } from '@/components/ui/Icons';
import { ExternalLink, ShieldCheck, Clock, FileCheck2, Zap } from 'lucide-react';

interface CardStackProps {
  projects: Project[];
  linksText: {
    viewProject: string;
    viewCode: string;
    liveDemo: string;
  };
}

const ProjectCardContent: React.FC<{
  project: Project;
  index: number;
  linksText: {
    viewProject: string;
    viewCode: string;
    liveDemo: string;
  };
  dimValue: MotionValue<number> | number;
}> = ({ project, index, linksText, dimValue }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, active: false });

  // Alternate layout: Even index -> Copy Left, Visual Right. Odd index -> Visual Left, Copy Right.
  const isEven = index % 2 === 0;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      active: true,
    });
  };

  const handleMouseLeave = () => {
    setMousePos((prev) => ({ ...prev, active: false }));
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full rounded-[22px] p-[1px] bg-transparent transition-all duration-200 group overflow-hidden shadow-[0_30px_90px_-20px_rgba(0,0,0,0.95)]"
    >
      {/* Outer Border Spotlight: 100% more coverage on each side (720px circle), softer and more discreet */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 rounded-[22px]"
        style={{
          opacity: mousePos.active ? 1 : 0,
          background: mousePos.active
            ? `radial-gradient(720px circle at ${mousePos.x}px ${mousePos.y}px, rgba(220, 185, 145, 0.45), rgba(255, 255, 255, 0.15) 35%, transparent 70%)`
            : 'transparent',
        }}
      />

      {/* Dark Outer Frame / Channel — reduced gap */}
      <div className="relative z-10 w-full rounded-[21px] p-1.5 bg-[#08080c] overflow-hidden">
        {/* Inner Border Wrapper */}
        <div className="relative w-full rounded-[16px] p-[1px] bg-white/[0.06] overflow-hidden">
          {/* Inner Border Spotlight: 100% larger (640px circle), discreet lighting */}
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-300 rounded-[16px]"
            style={{
              opacity: mousePos.active ? 1 : 0,
              background: mousePos.active
                ? `radial-gradient(640px circle at ${mousePos.x - 6}px ${mousePos.y - 6}px, rgba(220, 185, 145, 0.4), rgba(255, 255, 255, 0.12) 35%, transparent 70%)`
                : 'transparent',
            }}
          />

          {/* Inner Card Body */}
          <div className="relative z-10 w-full rounded-[15px] bg-[#0e0e14] backdrop-blur-2xl overflow-hidden">
            {/* Localized surface glow near mouse */}
            <div
              className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-0"
              style={{
                opacity: mousePos.active ? 1 : 0,
                background: `radial-gradient(600px circle at ${mousePos.x - 6}px ${mousePos.y - 6}px, rgba(220, 185, 145, 0.04), transparent 60%)`,
              }}
            />

            {/* Concentric ring cursor light — 4 discrete rings with hard stops */}
            <div
              className="absolute inset-0 pointer-events-none z-[1] transition-opacity duration-300"
              style={{
                opacity: mousePos.active ? 1 : 0,
                background: mousePos.active
                  ? `radial-gradient(circle at ${mousePos.x - 6}px ${mousePos.y - 6}px,
                      rgba(220, 185, 145, 0.13) 0px,
                      rgba(220, 185, 145, 0.13) 28px,
                      rgba(220, 185, 145, 0.07) 28px,
                      rgba(220, 185, 145, 0.07) 58px,
                      rgba(220, 185, 145, 0.04) 58px,
                      rgba(220, 185, 145, 0.04) 92px,
                      rgba(220, 185, 145, 0.015) 92px,
                      rgba(220, 185, 145, 0.015) 135px,
                      transparent 135px)`
                  : 'transparent',
              }}
            />


            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-0 lg:min-h-[750px]">
              {/* Copy Column */}
              <div
                className={`lg:col-span-6 px-6 sm:px-10 py-8 sm:py-12 flex flex-col justify-between relative z-10 bg-[#131313] ${
                  isEven ? 'lg:order-1' : 'lg:order-2'
                }`}
              >
                {/* Top block */}
                <div className="flex flex-col gap-6">
                  {/* Category — dot + plain mono label */}
                  <span className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.18em] text-[#dcb991]/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#dcb991] animate-pulse" />
                    {project.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white leading-[1.15]">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Bottom: Impact Metric — icon bullet centered with text block */}
                <div className="mt-8 sm:mt-10 flex items-center gap-4">
                  <div className="shrink-0 text-white flex items-center justify-center">
                    {project.id === 'b2b-saas' && <ShieldCheck className="w-6 h-6" />}
                    {project.id === 'real-estate-crm' && <Clock className="w-6 h-6" />}
                    {project.id === 'consulting-management' && <FileCheck2 className="w-6 h-6" />}
                    {project.id === 'distributed-voting' && <Zap className="w-6 h-6" />}
                  </div>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    {project.metric}
                  </p>
                </div>
              </div>

              {/* Visual Mockup Column (Alternating) — occupies 98% of the space with a small 6px gap to the border */}
              <div
                className={`lg:col-span-6 p-1.5 bg-[#131313] flex items-stretch justify-center relative overflow-hidden ${
                  isEven ? 'lg:order-2' : 'lg:order-1'
                }`}
              >
                <div className="w-full h-full rounded-xl overflow-hidden relative">
                  <ProjectMockup
                    projectId={project.id}
                    className="w-full h-full min-h-[360px] sm:min-h-[480px] lg:min-h-[630px] rounded-xl overflow-hidden"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dim overlay — full black so stacked cards fully disappear */}
      <motion.div
        style={{ opacity: dimValue }}
        className="absolute inset-0 bg-black rounded-[22px] pointer-events-none z-30 transition-opacity duration-150"
      />
    </div>
  );
};

// Helper: Linear interpolation
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

// Ease-out cubic — rising cards decelerate into position naturally
const easeOut = (t: number) => {
  const c = Math.min(Math.max(t, 0), 1);
  return 1 - Math.pow(1 - c, 3);
};

// Ease-in-out quadratic — smooth settling for stacked cards
const easeInOut = (t: number) => {
  const c = Math.min(Math.max(t, 0), 1);
  return c < 0.5 ? 2 * c * c : 1 - Math.pow(-2 * c + 2, 2) / 2;
};

// Spring config for buttery smooth scroll-driven motion.
// useSpring adds physics interpolation between discrete scroll ticks,
// eliminating the "jerky" feeling from mouse wheel steps.
const SPRING = { stiffness: 100, damping: 28, mass: 0.6 };

export const CardStack: React.FC<CardStackProps> = ({ projects, linksText }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [viewportH, setViewportH] = useState(1000);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateSize = () => {
      if (typeof window !== 'undefined') {
        setViewportH(window.innerHeight || 1000);
        setIsMobile(window.innerWidth < 1024);
      }
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Cards start well below the visible area (~850px below center).
  // The sticky container uses overflow-visible so the cards appear from
  // below the viewport fold when their phase starts.
  const offscreenDistance = Math.round(viewportH * 0.75 + 100);

  // Spring config for buttery smooth scroll-driven motion.
  const SPRING = { stiffness: 100, damping: 28, mass: 0.6 };

  // ─── Card 0: always visible first, eases DOWN + dims as others stack above ───
  const y0Raw = useTransform(scrollYProgress, (p) => {
    if (p <= 0.33) return lerp(0,   -14, easeInOut(p / 0.33));
    if (p <= 0.66) return lerp(-14, -28, easeInOut((p - 0.33) / 0.33));
    if (p <= 0.99) return lerp(-28, -42, easeInOut((p - 0.66) / 0.33));
    return -42;
  });
  const y0 = useSpring(y0Raw, SPRING);

  const scale0 = useTransform(scrollYProgress, (p) => {
    if (p <= 0.33) return lerp(1,    0.96, easeInOut(p / 0.33));
    if (p <= 0.66) return lerp(0.96, 0.92, easeInOut((p - 0.33) / 0.33));
    if (p <= 0.99) return lerp(0.92, 0.88, easeInOut((p - 0.66) / 0.33));
    return 0.88;
  });

  const dim0 = useTransform(scrollYProgress, (p) => {
    if (p <= 0.33) return lerp(0,    0.6, easeInOut(p / 0.33));
    if (p <= 0.66) return lerp(0.6,  1.0, easeInOut((p - 0.33) / 0.33));
    return 1.0;
  });

  // ─── Card 1: rises from below during 0–0.33, then settles ───
  const y1Raw = useTransform(scrollYProgress, (p) => {
    if (p <= 0.33) return lerp(offscreenDistance, 14, easeOut(p / 0.33));
    if (p <= 0.66) return lerp(14,  0,  easeInOut((p - 0.33) / 0.33));
    if (p <= 0.99) return lerp(0,  -14, easeInOut((p - 0.66) / 0.33));
    return -14;
  });
  const y1 = useSpring(y1Raw, SPRING);

  const scale1 = useTransform(scrollYProgress, (p) => {
    if (p <= 0.33) return 1;
    if (p <= 0.66) return lerp(1,    0.96, easeInOut((p - 0.33) / 0.33));
    if (p <= 0.99) return lerp(0.96, 0.92, easeInOut((p - 0.66) / 0.33));
    return 0.92;
  });

  const dim1 = useTransform(scrollYProgress, (p) => {
    if (p <= 0.33) return 0;
    if (p <= 0.66) return lerp(0,    0.6, easeInOut((p - 0.33) / 0.33));
    if (p <= 0.99) return lerp(0.6,  1.0, easeInOut((p - 0.66) / 0.33));
    return 1.0;
  });

  // ─── Card 2: rises from below during 0.33–0.66, then settles ───
  const y2Raw = useTransform(scrollYProgress, (p) => {
    if (p <= 0.33) return offscreenDistance;
    if (p <= 0.66) return lerp(offscreenDistance, 28, easeOut((p - 0.33) / 0.33));
    if (p <= 0.99) return lerp(28, 14, easeInOut((p - 0.66) / 0.33));
    return 14;
  });
  const y2 = useSpring(y2Raw, SPRING);

  const scale2 = useTransform(scrollYProgress, (p) => {
    if (p <= 0.66) return 1;
    if (p <= 0.99) return lerp(1, 0.96, easeInOut((p - 0.66) / 0.33));
    return 0.96;
  });

  const dim2 = useTransform(scrollYProgress, (p) => {
    if (p <= 0.66) return 0;
    if (p <= 0.99) return lerp(0, 1.0, easeInOut((p - 0.66) / 0.33));
    return 1.0;
  });

  // ─── Card 3: rises from below during 0.66–0.99, docks at top ───
  const y3Raw = useTransform(scrollYProgress, (p) => {
    if (p <= 0.66) return offscreenDistance;
    if (p <= 0.99) return lerp(offscreenDistance, 42, easeOut((p - 0.66) / 0.33));
    return 42;
  });
  const y3 = useSpring(y3Raw, SPRING);

  const cardTransforms = [
    { scale: scale0, y: y0, dim: dim0, zIndex: 10 },
    { scale: scale1, y: y1, dim: dim1, zIndex: 20 },
    { scale: scale2, y: y2, dim: dim2, zIndex: 30 },
    { scale: 1,      y: y3, dim: 0,    zIndex: 40 },
  ];

  // ═══════ MOBILE: simple vertical list, no stacking animation ═══════
  if (isMobile) {
    return (
      <div className="flex flex-col gap-10">
        {projects.map((project, index) => (
          <ProjectCardContent
            key={project.id}
            project={project}
            index={index}
            linksText={linksText}
            dimValue={0}
          />
        ))}
      </div>
    );
  }

  // ═══════ DESKTOP: sticky stacking animation ═══════
  return (
    <div ref={containerRef} className="relative w-full" style={{ height: '420vh' }}>
      {/* Sticky stage: pinned on screen, cards fully visible, overflow-visible
          so incoming cards can rise from below the fold naturally */}
      <div className="sticky top-20 sm:top-24 h-[82vh] sm:h-[86vh] w-full flex items-center justify-center overflow-visible">
        <div className="relative w-full max-w-6xl h-full flex items-center justify-center overflow-visible">
          {projects.map((project, index) => {
            const transform = cardTransforms[index] || {
              scale: 1,
              y: 0,
              dim: 0,
              zIndex: 10 + index,
            };

            return (
              <motion.div
                key={project.id}
                style={{
                  scale: transform.scale,
                  y: transform.y,
                  zIndex: transform.zIndex,
                  transform: 'translateZ(0)',
                }}
                className="absolute inset-x-4 sm:inset-x-6 w-auto will-change-transform"
              >
                <ProjectCardContent
                  project={project}
                  index={index}
                  linksText={linksText}
                  dimValue={transform.dim}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

