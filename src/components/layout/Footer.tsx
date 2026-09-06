'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.08] py-12 px-4 sm:px-6 max-w-6xl mx-auto mt-24">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-zinc-500">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-full bg-white/[0.06] border border-white/[0.1] flex items-center justify-center text-[10px] font-semibold text-zinc-300">
            JQ
          </div>
          <span>
            © {currentYear} Juan David Quintero Peña. {t.footer.rights}
          </span>
        </div>

        <div className="flex items-center gap-6">
          <span className="hidden md:inline text-zinc-400 font-mono">
            {t.footer.tagline}
          </span>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>{t.footer.backToTop}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
