'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { ScrollRevealText } from '@/components/ui/ScrollRevealText';

export const About: React.FC = () => {
  const { t } = useLanguage();
  const { about } = t;

  return (
    <section
      id="about"
      className="relative py-28 md:py-40 px-4 sm:px-6 max-w-5xl mx-auto scroll-mt-20"
    >
      {/* Big Editorial Title */}
      <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-12 sm:mb-16">
        {about.title}
      </h2>

      {/* Fora-Style Scroll Text Reveal Manifesto */}
      <div className="max-w-4xl">
        <ScrollRevealText paragraphs={about.manifestoParagraphs} />
      </div>
    </section>
  );
};
