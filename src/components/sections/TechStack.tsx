'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { TechCard, TechSkill } from '@/content/types';
import { Layout, Server, Database, Cpu } from 'lucide-react';

const iconMap = {
  layout: Layout,
  server: Server,
  database: Database,
  cpu: Cpu,
};

interface BentoCardProps {
  card: TechCard;
  index: number;
  language: 'es' | 'en';
}

const BentoCard: React.FC<BentoCardProps> = ({ card, index, language }) => {
  const [activeIdx, setActiveIdx] = useState<number>(0);

  const activeSkill: TechSkill = card.skills[activeIdx] || card.skills[0];

  const IconComponent = iconMap[card.icon] || Layout;

  const handleSkillHover = (i: number) => {
    setActiveIdx(i);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group relative rounded-2xl border border-white/[0.08] bg-[#0c0c10]/75 backdrop-blur-xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:border-white/15 hover:bg-[#0c0c10]/90"
    >
      {/* ── Header ── */}
      <div>
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-[#dcb991]">
              <IconComponent className="w-4 h-4" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-white tracking-tight">
              {card.title}
            </h3>
          </div>
          <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 bg-white/[0.02] border border-white/[0.05] px-2.5 py-1 rounded-full">
            {card.badge}
          </span>
        </div>

        {/* ── Skills Chips ── */}
        <div className="flex flex-wrap gap-2 mt-5">
          {card.skills.map((skill, i) => {
            const isActive = i === activeIdx;
            return (
              <button
                key={skill.name}
                type="button"
                onClick={() => setActiveIdx(i)}
                onMouseEnter={() => handleSkillHover(i)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-150 cursor-pointer flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-[#dcb991]/10 text-[#dcb991] border border-[#dcb991]/40 font-medium shadow-[0_0_12px_rgba(220,185,145,0.1)]'
                    : 'bg-white/[0.02] text-zinc-400 border border-white/[0.06] hover:border-white/15 hover:text-zinc-200'
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full transition-colors ${
                    isActive ? 'bg-[#dcb991]' : 'bg-zinc-600'
                  }`}
                />
                <span>{skill.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Sober Project Connection Footnote ── */}
      <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-baseline justify-between gap-3 min-h-[38px]">
        <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider shrink-0">
          {language === 'es' ? 'Uso / Proyecto:' : 'Use / Project:'}
        </span>
        <AnimatePresence mode="wait">
          <motion.span
            key={activeSkill.name}
            initial={{ opacity: 0, y: 3 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -3 }}
            transition={{ duration: 0.15 }}
            className="text-xs text-zinc-300 font-medium text-right truncate"
            title={activeSkill.project}
          >
            {activeSkill.project}
          </motion.span>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export const TechStack: React.FC = () => {
  const { t, language } = useLanguage();
  const { techStack } = t;

  return (
    <section
      id="skills"
      className="relative py-24 md:py-32 px-6 sm:px-10 lg:px-12 w-full max-w-5xl mx-auto scroll-mt-20"
    >
      {/* ── Header ── */}
      <div className="mb-10 md:mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-zinc-400 backdrop-blur-sm mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#dcb991]" />
          {techStack.chip}
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
          {techStack.headlineFirst}{' '}
          <span className="text-[#dcb991] font-light">{techStack.headlineSecond}</span>
        </h2>

        <p className="text-zinc-400 text-base md:text-lg max-w-2xl font-light leading-relaxed">
          {techStack.subtitle}
        </p>
      </div>

      {/* ── 2x2 Bento Grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
        {techStack.cards.map((card, idx) => (
          <BentoCard
            key={card.id}
            card={card}
            index={idx}
            language={language}
          />
        ))}
      </div>
    </section>
  );
};
