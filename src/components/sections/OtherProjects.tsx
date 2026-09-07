'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/Button';
import { ArrowRight, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { GitHubIcon } from '@/components/ui/Icons';
import Image from 'next/image';
import Link from 'next/link';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  useCarousel,
} from '@/components/ui/Carousel';

// Custom navigation buttons for the Carousel
const CustomCarouselNav = () => {
  const { canScrollPrev, canScrollNext, scrollPrev, scrollNext } = useCarousel();
  
  return (
    <div className="flex gap-3">
      <button
        onClick={scrollPrev}
        disabled={!canScrollPrev}
        aria-label="Anterior proyecto"
        className="flex items-center justify-center h-11 w-11 rounded-full border border-white/[0.1] bg-white/[0.02] text-white hover:bg-white/[0.08] hover:border-[#dcb991]/30 transition-all disabled:opacity-20 disabled:cursor-not-allowed disabled:hover:bg-white/[0.02] disabled:hover:border-white/[0.1]"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={scrollNext}
        disabled={!canScrollNext}
        aria-label="Siguiente proyecto"
        className="flex items-center justify-center h-11 w-11 rounded-full border border-white/[0.1] bg-white/[0.02] text-white hover:bg-white/[0.08] hover:border-[#dcb991]/30 transition-all disabled:opacity-20 disabled:cursor-not-allowed disabled:hover:bg-white/[0.02] disabled:hover:border-white/[0.1]"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
};

export const OtherProjects: React.FC = () => {
  const { t } = useLanguage();
  const { otherProjects } = t;

  return (
    <section className="relative py-24 md:py-32 px-4 sm:px-6 w-full max-w-[1400px] mx-auto overflow-hidden">
      {/* Section Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12 md:mb-20 items-end">
        {/* Left Column */}
        <div className="lg:col-span-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-zinc-400 backdrop-blur-sm shadow-sm mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#dcb991]" />
            {otherProjects.chip}
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.15]">
            <span className="text-white block">{otherProjects.headlineFirst}</span>
            <span className="text-[#c8a882] block">{otherProjects.headlineSecond}</span>
          </h2>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-end">
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed text-left lg:text-right max-w-sm mb-6 lg:mb-8">
            {otherProjects.subtitle}
          </p>
        </div>
      </div>

      {/* Carousel */}
      <div className="w-full">
        <Carousel className="w-full relative">
          {/* Header Navigation for Carousel */}
          <div className="absolute -top-16 lg:-top-28 right-0 lg:right-4 z-10 hidden sm:block">
             <CustomCarouselNav />
          </div>
          
          <CarouselContent className="gap-6 px-1 pb-12 pt-2">
            {otherProjects.projects.map((project) => (
              <CarouselItem key={project.id} className="w-[85vw] sm:w-[340px] md:w-[380px] lg:w-[410px]">
                <div className="group block relative w-full h-[480px] sm:h-[520px]">
                  <Card className="overflow-hidden h-full w-full rounded-2xl sm:rounded-3xl border border-white/[0.05] bg-[#0c0c0e] relative shadow-xl transition-all duration-500 group-hover:border-white/[0.1]">
                    
                    {/* Top Image Area */}
                    <div className="relative h-[45%] w-full overflow-hidden select-none">
                      <Image
                        width={600}
                        height={400}
                        src={project.image}
                        alt={project.title}
                        draggable={false}
                        className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105 pointer-events-none select-none"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-transparent to-transparent" />
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono text-zinc-300 uppercase tracking-widest">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="relative h-[55%] flex flex-col px-6 sm:px-8 py-5 sm:py-6 justify-between bg-gradient-to-b from-[#0c0c0e] to-transparent">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2 leading-tight group-hover:text-[#c8a882] transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-zinc-400 text-sm line-clamp-2 mb-4">
                          {project.tagline}
                        </p>
                        
                        {/* Stack Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.stack.slice(0, 3).map((tech) => (
                            <span key={tech} className="text-xs text-zinc-500 border border-white/5 rounded-md px-2 py-1 bg-white/[0.02]">
                              {tech}
                            </span>
                          ))}
                          {project.stack.length > 3 && (
                            <span className="text-xs text-zinc-600 border border-white/5 rounded-md px-2 py-1 bg-white/[0.02]">
                              +{project.stack.length - 3}
                            </span>
                          )}
                        </div>
                        
                        {/* Impact Snippet */}
                        <div className="text-xs text-zinc-400 line-clamp-2 border-l-2 border-[#dcb991]/30 pl-3 italic opacity-70">
                          "{project.impact}"
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center gap-3 mt-4 pt-4 border-t border-white/5">
                        <Link href={project.actionUrl} className="flex-1">
                          <button className="flex items-center justify-center w-full rounded-md text-xs h-9 bg-white/[0.03] border border-white/10 text-white hover:bg-white/[0.08] hover:text-[#c8a882] transition-all group/btn">
                            {project.actionText}
                            <ArrowRight className="w-3 h-3 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                          </button>
                        </Link>
                        {project.actionSecondaryText && project.actionSecondaryUrl && (
                          <Link href={project.actionSecondaryUrl}>
                            <button className="flex items-center justify-center rounded-md h-9 w-9 bg-white/[0.03] border border-white/10 text-zinc-400 hover:text-white hover:bg-white/[0.08] transition-all">
                              <GitHubIcon />
                            </button>
                          </Link>
                        )}
                      </div>
                    </div>

                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Mobile Navigation (shows below carousel) */}
          <div className="flex justify-center mt-6 sm:hidden">
            <CustomCarouselNav />
          </div>
          
        </Carousel>
      </div>
    </section>
  );
};
