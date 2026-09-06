'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { CardStack } from '@/components/ui/CardStack';

export const FeaturedProjects: React.FC = () => {
  const { t } = useLanguage();
  const { featuredProjects } = t;

  return (
    <section id="projects" className="relative py-24 md:py-36 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Section Header: 2-Column Fora Style */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16 md:mb-24 items-end">
        {/* Left Column: Chip with dot & 2-tone Headline */}
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-zinc-400 backdrop-blur-sm shadow-sm mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#dcb991]" />
            {featuredProjects.chip}
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.12]">
            <span className="text-white block">{featuredProjects.headlineFirst}</span>
            <span className="text-[#c8a882] block">{featuredProjects.headlineSecond}</span>
          </h2>
        </div>

        {/* Right Column: Editorial Paragraph */}
        <div className="lg:col-span-5 flex lg:justify-end">
          <p className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed max-w-md">
            {featuredProjects.subtitle}
          </p>
        </div>
      </div>

      {/* Stacking Cards Container */}
      <CardStack
        projects={featuredProjects.projects}
        linksText={featuredProjects.links}
      />
    </section>
  );
};
