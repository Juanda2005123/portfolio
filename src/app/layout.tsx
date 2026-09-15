import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Juan David Quintero | Software Engineer & Builder',
  description:
    'Portafolio de Juan David Quintero Peña. Arquitecturas multi-tenant, sistemas escalables y automatización con IA.',
  keywords: [
    'Software Engineer',
    'Juan David Quintero',
    'Full Stack Developer',
    'Next.js',
    'TypeScript',
    'PostgreSQL',
    'Multi-Tenant',
    'AI Automation',
    'Java',
    'Colombia',
  ],
  authors: [{ name: 'Juan David Quintero Peña' }],
  icons: {
    icon: '/icon.svg',
  },
  openGraph: {
    title: 'Juan David Quintero | Software Engineer & Builder',
    description:
      'Portafolio de Juan David Quintero Peña. Arquitecturas multi-tenant, sistemas escalables y automatización con IA.',
    type: 'website',
    locale: 'es_CO',
    alternateLocale: 'en_US',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Juan David Quintero — Software Engineer & Builder',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Juan David Quintero | Software Engineer & Builder',
    description:
      'Arquitecturas multi-tenant, sistemas escalables y automatización con IA.',
    images: ['/opengraph-image.png'],
  },
};

export const viewport: Viewport = {
  themeColor: '#09090b',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} dark scroll-smooth scroll-pt-24`}>
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
