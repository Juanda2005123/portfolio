import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Juan David Quintero Peña | Software Engineer & Technical Consultant',
  description:
    'Construyendo sistemas escalables, arquitecturas multi-tenant y automatización con IA. Portafolio profesional de Juan David Quintero Peña.',
  keywords: [
    'Software Engineer',
    'Juan David Quintero',
    'Next.js 15',
    'PostgreSQL RLS',
    'Multi-Tenant',
    'Distributed Systems',
    'n8n',
    'Hybrid RAG',
    'TypeScript',
    'Java',
  ],
  authors: [{ name: 'Juan David Quintero Peña' }],
  openGraph: {
    title: 'Juan David Quintero Peña | Software Engineer',
    description:
      'Construyendo sistemas escalables, arquitecturas multi-tenant y automatización con IA.',
    type: 'website',
    locale: 'es_ES',
    alternateLocale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} dark scroll-smooth`}>
      <body className="min-h-screen bg-background text-zinc-100 selection:bg-white/20 selection:text-white font-sans relative antialiased">
        <LanguageProvider>
          {/* Subtle neutral ambient lighting on top */}
          <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-b from-white/[0.03] via-zinc-500/[0.02] to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
          <div className="fixed inset-0 bg-grid-pattern opacity-40 pointer-events-none -z-10" />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
