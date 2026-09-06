'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ParagraphItemProps {
  paragraph: string;
}

const ParagraphItem: React.FC<ParagraphItemProps> = ({ paragraph }) => {
  const pRef = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: pRef,
    offset: ['start 0.85', 'start 0.45'],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0.35, 1]);
  const color = useTransform(
    scrollYProgress,
    [0, 1],
    ['rgba(113, 113, 122, 0.4)', 'rgba(255, 255, 255, 1)']
  );

  return (
    <p
      ref={pRef}
      className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] leading-[1.35] md:leading-[1.38] font-medium tracking-tight"
    >
      <motion.span
        style={{ opacity, color }}
        className="block transition-colors duration-150"
      >
        {paragraph}
      </motion.span>
    </p>
  );
};

interface ScrollRevealTextProps {
  paragraphs: string[];
  className?: string;
}

export const ScrollRevealText: React.FC<ScrollRevealTextProps> = ({
  paragraphs,
  className,
}) => {
  return (
    <div className={cn('relative space-y-12 sm:space-y-16 md:space-y-20', className)}>
      {paragraphs.map((paragraph, pIndex) => (
        <ParagraphItem key={pIndex} paragraph={paragraph} />
      ))}
    </div>
  );
};
