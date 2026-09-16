'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, MotionValue } from 'framer-motion';
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
  const [cardMousePos, setCardMousePos] = useState({ x: 0, y: 0, active: false });
  const haloX = useMotionValue(-9999);
  const haloY = useMotionValue(-9999);
  const haloLeft = useTransform(haloX, (val) => val - 440);
  const haloTop = useTransform(haloY, (val) => val - 440);
  const [isHaloMoving, setIsHaloMoving] = useState(false);
  const [isHaloActive, setIsHaloActive] = useState(false);
  const idleTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Alternate layout: Even index -> Copy Left, Visual Right. Odd index -> Visual Left, Copy Right.
  const isEven = index % 2 === 0;

  useEffect(() => {
    return () => {
      if (idleTimerRef.current) {
        clearTimeout(idleTimerRef.current);
      }
    };
  }, []);

  // Outer border spotlight tracking
  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCardMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      active: true,
    });
  };

  const handleCardMouseLeave = () => {
    setCardMousePos((prev) => ({ ...prev, active: false }));
  };

  // Copy column cursor spotlight tracking: expands smoothly while moving, shrinks 50% slower when idle
  const handleCopyMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    haloX.set(x);
    haloY.set(y);

    setIsHaloActive(true);
    setIsHaloMoving(true);

    if (idleTimerRef.current) {
      clearTimeout(idleTimerRef.current);
    }
    // If mouse stops moving for 250ms, smoothly shrink and fade out the halo 50% slower
    idleTimerRef.current = setTimeout(() => {
      setIsHaloMoving(false);
    }, 250);
  };

  const handleCopyMouseLeave = () => {
    if (idleTimerRef.current) {
      clearTimeout(idleTimerRef.current);
    }
    setIsHaloActive(false);
    setIsHaloMoving(false);
  };

  return (
    <div
      onMouseMove={handleCardMouseMove}
      onMouseLeave={handleCardMouseLeave}
      className="relative w-full rounded-[22px] p-[1px] bg-transparent transition-all duration-200 group overflow-hidden shadow-[0_30px_90px_-20px_rgba(0,0,0,0.95)]"
    >
      {/* Outer Border Spotlight */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 rounded-[22px]"
        style={{
          opacity: cardMousePos.active ? 1 : 0,
          background: cardMousePos.active
            ? `radial-gradient(720px circle at ${cardMousePos.x}px ${cardMousePos.y}px, rgba(220, 185, 145, 0.45), rgba(255, 255, 255, 0.15) 35%, transparent 70%)`
            : 'transparent',
        }}
      />

      {/* Dark Outer Frame / Channel */}
      <div className="relative z-10 w-full rounded-[21px] p-1.5 bg-[#08080c] overflow-hidden">
        {/* Inner Border Wrapper */}
        <div className="relative w-full rounded-[16px] p-[1px] bg-white/[0.06] overflow-hidden">
          {/* Inner Border Spotlight */}
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-300 rounded-[16px]"
            style={{
              opacity: cardMousePos.active ? 1 : 0,
              background: cardMousePos.active
                ? `radial-gradient(640px circle at ${cardMousePos.x - 6}px ${cardMousePos.y - 6}px, rgba(220, 185, 145, 0.4), rgba(255, 255, 255, 0.12) 35%, transparent 70%)`
                : 'transparent',
            }}
          />

          {/* Inner Card Body */}
          <div className="relative z-10 w-full rounded-[15px] bg-[#0e0e14] backdrop-blur-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-0 lg:min-h-[750px]">
              {/* Copy Column — Cursor halo renders ONLY here */}
              <div
                onMouseMove={handleCopyMouseMove}
                onMouseLeave={handleCopyMouseLeave}
                className={`lg:col-span-6 px-6 sm:px-10 py-8 sm:py-12 flex flex-col justify-between relative z-10 bg-[#131313] overflow-hidden ${
                  isEven ? 'lg:order-1' : 'lg:order-2'
                }`}
              >
                {/* Concentric ring cursor halo: exactly centered on mouse, grows smoothly, shrinks 50% slower */}
                <motion.div
                  className="absolute top-0 left-0 pointer-events-none z-0 rounded-full"
                  style={{
                    width: 880,
                    height: 880,
                    x: haloLeft,
                    y: haloTop,
                    background: `radial-gradient(circle at center,
                      rgba(220, 185, 145, 0.045) 0px,
                      rgba(220, 185, 145, 0.045) 80px,
                      rgba(220, 185, 145, 0.030) 80px,
                      rgba(220, 185, 145, 0.030) 175px,
                      rgba(220, 185, 145, 0.022) 175px,
                      rgba(220, 185, 145, 0.022) 295px,
                      rgba(220, 185, 145, 0.015) 295px,
                      rgba(220, 185, 145, 0.015) 440px,
                      transparent 440px)`,
                  }}
                  initial={{ scale: 0.04, opacity: 0 }}
                  animate={{
                    scale: isHaloActive && isHaloMoving ? 1 : 0.04,
                    opacity: isHaloActive && isHaloMoving ? 1 : 0,
                  }}
                  transition={{
                    scale: {
                      duration: isHaloMoving ? 2.0 : 1.3,
                      ease: isHaloMoving ? [0.16, 1, 0.3, 1] : [0.4, 0, 0.2, 1],
                    },
                    opacity: {
                      duration: isHaloMoving ? 0.45 : 1.15,
                      ease: 'easeInOut',
                    },
                  }}
                />

                {/* Top block */}
                <div className="flex flex-col gap-6 relative z-10">
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
                <div className="mt-8 sm:mt-10 flex items-center gap-4 relative z-10">
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

              {/* Visual Mockup Column (Alternating) */}
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

