'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { Project } from '@/content/types';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ProjectMockup } from '@/components/ui/ProjectMockup';
import { GitHubIcon } from '@/components/ui/Icons';
import { ExternalLink, TrendingUp } from 'lucide-react';

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
      className="relative w-full rounded-[28px] p-[1px] bg-white/[0.08] transition-all duration-200 group overflow-hidden shadow-[0_30px_90px_-20px_rgba(0,0,0,0.95)]"
    >
      {/* Outer Border Spotlight: ONLY illuminated near the mouse cursor */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 rounded-[28px]"
        style={{
          opacity: mousePos.active ? 1 : 0,
          background: mousePos.active
            ? `radial-gradient(360px circle at ${mousePos.x}px ${mousePos.y}px, rgba(220, 185, 145, 0.85), rgba(255, 255, 255, 0.35) 30%, transparent 70%)`
            : 'transparent',
        }}
      />

      {/* Dark Outer Frame / Channel (creates outer 1px border and 12px gap) */}
      <div className="relative z-10 w-full rounded-[27px] p-2.5 sm:p-3 md:p-3.5 bg-[#08080c] overflow-hidden">
        {/* Inner Border Wrapper */}
        <div className="relative w-full rounded-[20px] p-[1px] bg-white/[0.06] overflow-hidden">
          {/* Inner Border Spotlight: localized to mouse cursor */}
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-300 rounded-[20px]"
            style={{
              opacity: mousePos.active ? 1 : 0,
              background: mousePos.active
                ? `radial-gradient(320px circle at ${mousePos.x - 12}px ${mousePos.y - 12}px, rgba(220, 185, 145, 0.75), rgba(255, 255, 255, 0.3) 30%, transparent 70%)`
                : 'transparent',
            }}
          />

          {/* Inner Card Body */}
          <div className="relative z-10 w-full rounded-[19px] bg-[#0e0e14] backdrop-blur-2xl overflow-hidden">
            {/* Localized surface glow near mouse */}
            <div
              className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-0"
              style={{
                opacity: mousePos.active ? 1 : 0,
                background: `radial-gradient(420px circle at ${mousePos.x - 12}px ${mousePos.y - 12}px, rgba(220, 185, 145, 0.06), transparent 60%)`,
              }}
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[480px] lg:min-h-[500px]">
              {/* Copy Column */}
              <div
                className={`lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between relative z-10 ${
                  isEven
                    ? 'lg:order-1 border-b lg:border-b-0 lg:border-r border-white/[0.06]'
                    : 'lg:order-2 border-b lg:border-b-0 border-white/[0.06]'
                }`}
              >
                <div>
                  {/* Category Chip with dot */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-[#edd3b4] mb-5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#dcb991]" />
                    <span>{project.category}</span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white mb-2 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base font-normal text-zinc-400 mb-5 leading-snug">
                    {project.tagline}
                  </p>

                  {/* Architecture Description */}
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal mb-6">
                    {project.description}
                  </p>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 mb-7">
                    {project.stack.map((tech) => (
                      <Badge key={tech} variant="tech">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Bottom: Impact Metric & Actions */}
                <div>
                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.07] mb-6 flex items-start gap-3">
                    <div className="p-1.5 rounded-md bg-[#dcb991]/10 text-[#dcb991] mt-0.5 shrink-0">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase font-mono tracking-wider text-zinc-400 font-medium">
                        {project.metricLabel}
                      </div>
                      <div className="text-xs sm:text-sm font-medium text-zinc-200 mt-0.5 leading-snug">
                        {project.metric}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    {project.demoUrl && (
                      <Button
                        variant="secondary"
                        size="sm"
                        href={project.demoUrl}
                        icon={<ExternalLink className="w-3.5 h-3.5" />}
                        className="bg-white/10 hover:bg-white/15 text-white border-white/15"
                      >
                        {linksText.liveDemo}
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button
                        variant="ghost"
                        size="sm"
                        href={project.githubUrl}
                        icon={<GitHubIcon className="w-3.5 h-3.5" />}
                      >
                        {linksText.viewCode}
                      </Button>
                    )}
                  </div>
                </div>
              </div>

              {/* Visual Mockup Column (Alternating) */}
              <div
                className={`lg:col-span-6 p-4 sm:p-6 lg:p-7 bg-zinc-950/80 flex items-center justify-center relative overflow-hidden ${
                  isEven
                    ? 'lg:order-2'
                    : 'lg:order-1 border-b lg:border-b-0 lg:border-r border-white/[0.06]'
                }`}
              >
                <ProjectMockup
                  projectId={project.id}
                  className="w-full h-full min-h-[340px] lg:min-h-[420px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dim overlay when stacked behind newer cards */}
      <motion.div
        style={{ opacity: dimValue }}
        className="absolute inset-0 bg-black/75 rounded-[28px] pointer-events-none z-30 transition-opacity duration-150"
      />
    </div>
  );
};

// Helper: Linear interpolation
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

// Helper: Smooth sine ease for gentle, continuous motion without large jumps
const ease = (t: number) => {
  const clamped = Math.min(Math.max(t, 0), 1);
  return 0.5 * (1 - Math.cos(Math.PI * clamped));
};

export const CardStack: React.FC<CardStackProps> = ({ projects, linksText }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [viewportH, setViewportH] = useState(1000);

  useEffect(() => {
    const updateHeight = () => {
      if (typeof window !== 'undefined') {
        setViewportH(window.innerHeight || 1000);
      }
    };
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  // Track the total scroll progress of the pinned section (0 to 1)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Optimized offscreen offset: sits just comfortably below the viewport fold (~650-750px)
  // instead of an excessive 1250px, preventing large sudden jumps per scroll tick
  const offscreenDistance = Math.round(viewportH * 0.68 + 100);

  // Phase ranges: Continuous scroll with NO pauses — each card transition connects seamlessly to the next (0 -> 0.33, 0.33 -> 0.66, 0.66 -> 0.99)
  // Card 0: Base card. Steps down and dims smoothly as subsequent cards stack over it
  const y0 = useTransform(scrollYProgress, (p) => {
    if (p <= 0.33) return lerp(0, -16, ease(p / 0.33));
    if (p <= 0.66) return lerp(-16, -32, ease((p - 0.33) / 0.33));
    if (p <= 0.99) return lerp(-32, -48, ease((p - 0.66) / 0.33));
    return -48;
  });

  const scale0 = useTransform(scrollYProgress, (p) => {
    if (p <= 0.33) return lerp(1, 0.95, ease(p / 0.33));
    if (p <= 0.66) return lerp(0.95, 0.90, ease((p - 0.33) / 0.33));
    if (p <= 0.99) return lerp(0.90, 0.85, ease((p - 0.66) / 0.33));
    return 0.85;
  });

  const dim0 = useTransform(scrollYProgress, (p) => {
    if (p <= 0.33) return lerp(0, 0.40, ease(p / 0.33));
    if (p <= 0.66) return lerp(0.40, 0.65, ease((p - 0.33) / 0.33));
    if (p <= 0.99) return lerp(0.65, 0.80, ease((p - 0.66) / 0.33));
    return 0.80;
  });

  // Card 1: glides smoothly up from below the viewport during 0.00 -> 0.33, then steps down as 2 & 3 arrive
  const y1 = useTransform(scrollYProgress, (p) => {
    if (p <= 0.33) return lerp(offscreenDistance, 16, ease(p / 0.33));
    if (p <= 0.66) return lerp(16, 0, ease((p - 0.33) / 0.33));
    if (p <= 0.99) return lerp(0, -16, ease((p - 0.66) / 0.33));
    return -16;
  });

  const scale1 = useTransform(scrollYProgress, (p) => {
    if (p <= 0.33) return 1;
    if (p <= 0.66) return lerp(1, 0.95, ease((p - 0.33) / 0.33));
    if (p <= 0.99) return lerp(0.95, 0.90, ease((p - 0.66) / 0.33));
    return 0.90;
  });

  const dim1 = useTransform(scrollYProgress, (p) => {
    if (p <= 0.33) return 0;
    if (p <= 0.66) return lerp(0, 0.40, ease((p - 0.33) / 0.33));
    if (p <= 0.99) return lerp(0.40, 0.65, ease((p - 0.66) / 0.33));
    return 0.65;
  });

  // Card 2: glides smoothly up from below the viewport during 0.33 -> 0.66, then steps down as 3 arrives
  const y2 = useTransform(scrollYProgress, (p) => {
    if (p <= 0.33) return offscreenDistance;
    if (p <= 0.66) return lerp(offscreenDistance, 32, ease((p - 0.33) / 0.33));
    if (p <= 0.99) return lerp(32, 16, ease((p - 0.66) / 0.33));
    return 16;
  });

  const scale2 = useTransform(scrollYProgress, (p) => {
    if (p <= 0.66) return 1;
    if (p <= 0.99) return lerp(1, 0.95, ease((p - 0.66) / 0.33));
    return 0.95;
  });

  const dim2 = useTransform(scrollYProgress, (p) => {
    if (p <= 0.66) return 0;
    if (p <= 0.99) return lerp(0, 0.40, ease((p - 0.66) / 0.33));
    return 0.40;
  });

  // Card 3: glides smoothly up from below the viewport during 0.66 -> 0.99, docks at 48px
  const y3 = useTransform(scrollYProgress, (p) => {
    if (p <= 0.66) return offscreenDistance;
    if (p <= 0.99) return lerp(offscreenDistance, 48, ease((p - 0.66) / 0.33));
    return 48;
  });

  const cardTransforms = [
    { scale: scale0, y: y0, dim: dim0, zIndex: 10 },
    { scale: scale1, y: y1, dim: dim1, zIndex: 20 },
    { scale: scale2, y: y2, dim: dim2, zIndex: 30 },
    { scale: 1, y: y3, dim: 0, zIndex: 40 },
  ];

  return (
    // Tall container providing scroll travel distance while the viewport stage is pinned
    <div ref={containerRef} className="relative w-full" style={{ height: '420vh' }}>
      {/* Sticky Stage: remains FROZEN / PINNED on screen as cards rise from below and stack */}
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
                }}
                className="absolute inset-x-0 w-full will-change-transform"
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
