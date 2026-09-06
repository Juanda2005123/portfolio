'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/[0.06]'
          : 'bg-transparent border-b border-transparent'
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 sm:px-8 h-14 flex items-center justify-between">
        {/* Left: Logo / Name */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="flex items-center gap-1 cursor-pointer group select-none"
        >
          <span className="text-sm font-semibold tracking-tight text-zinc-200 group-hover:text-white transition-colors">
            Juan David Quintero<span className="text-zinc-500 font-normal">.</span>
          </span>
        </a>

        {/* Center: Nav Links (Desktop) */}
        <div className="hidden md:flex items-center gap-8">
          {t.nav.items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-[13px] font-normal text-zinc-400 hover:text-zinc-100 transition-colors duration-200 tracking-tight"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Right: Language toggle + CTA */}
        <div className="flex items-center gap-4">
          {/* Language toggle */}
          <div className="hidden sm:flex items-center gap-0.5 text-[12px]">
            <button
              onClick={() => setLanguage('en')}
              className={cn(
                'px-2 py-0.5 rounded transition-colors duration-200 cursor-pointer',
                language === 'en'
                  ? 'text-zinc-100 font-medium'
                  : 'text-zinc-500 hover:text-zinc-300'
              )}
            >
              EN
            </button>
            <span className="text-zinc-600">/</span>
            <button
              onClick={() => setLanguage('es')}
              className={cn(
                'px-2 py-0.5 rounded transition-colors duration-200 cursor-pointer',
                language === 'es'
                  ? 'text-zinc-100 font-medium'
                  : 'text-zinc-500 hover:text-zinc-300'
              )}
            >
              ES
            </button>
          </div>

          {/* Get started / Contact CTA button */}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="hidden sm:flex items-center px-4 py-1.5 rounded-full text-[13px] font-medium bg-zinc-100 text-zinc-950 hover:bg-white transition-colors duration-200 cursor-pointer"
          >
            {t.nav.contactCta}
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1 text-zinc-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-6 pb-6 pt-2 bg-[#0a0a0f]/95 backdrop-blur-2xl border-t border-white/[0.06]">
          <div className="flex flex-col gap-1">
            {t.nav.items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="px-3 py-2.5 text-sm text-zinc-300 hover:text-white hover:bg-white/[0.04] rounded-lg transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-3 px-3 pt-3 mt-2 border-t border-white/[0.06]">
              <button
                onClick={() => { setLanguage('en'); setMobileMenuOpen(false); }}
                className={cn(
                  'text-xs py-1 px-2 rounded cursor-pointer',
                  language === 'en' ? 'text-white font-medium' : 'text-zinc-500'
                )}
              >
                EN
              </button>
              <button
                onClick={() => { setLanguage('es'); setMobileMenuOpen(false); }}
                className={cn(
                  'text-xs py-1 px-2 rounded cursor-pointer',
                  language === 'es' ? 'text-white font-medium' : 'text-zinc-500'
                )}
              >
                ES
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
