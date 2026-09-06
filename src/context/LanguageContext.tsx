'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, PortfolioContent } from '@/content/types';
import { portfolioData } from '@/content/data';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: PortfolioContent;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    try {
      const savedLang = localStorage.getItem('portfolio_lang') as Language;
      if (savedLang === 'es' || savedLang === 'en') {
        setLanguageState(savedLang);
      } else {
        const browserLang = navigator.language?.toLowerCase();
        if (browserLang.startsWith('es')) {
          setLanguageState('es');
        }
      }
    } catch {
      // Ignore localStorage errors in restricted environments
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('portfolio_lang', lang);
    } catch {
      // Ignore
    }
  };

  const toggleLanguage = () => {
    const nextLang = language === 'es' ? 'en' : 'es';
    setLanguage(nextLang);
  };

  const t = portfolioData[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
