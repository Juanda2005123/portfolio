'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { cn } from '@/lib/utils';
import {
  ShieldCheck,
  Server,
  Cpu,
  Bot,
  Layers,
  Database,
  CheckCircle2,
  GitBranch,
  Terminal,
  Activity,
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
} from 'lucide-react';

interface ProjectMockupProps {
  projectId: string;
  className?: string;
}

export const ProjectMockup: React.FC<ProjectMockupProps> = ({
  projectId,
  className,
}) => {
  const { language } = useLanguage();

  switch (projectId) {
    case 'b2b-saas':
      return (
        <div
          className={cn(
            'w-full h-full rounded-xl bg-[#131313] relative overflow-hidden select-none group/mockup',
            className
          )}
        >
          <div className="relative w-full h-full min-h-[480px] sm:min-h-[540px] lg:min-h-[600px] overflow-hidden rounded-xl">
            <Image
              src="/project-b2b-saas-v3.jpg"
              alt={
                language === 'es'
                  ? 'Arquitectura de Plataforma SaaS B2B Multi-Tenant'
                  : 'B2B Multi-Tenant SaaS Platform Architecture'
              }
              fill
              quality={90}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-center rounded-xl transition-transform duration-700 group-hover/mockup:scale-[1.02]"
              priority
            />
          </div>
        </div>
      );

    case 'real-estate-crm':
      return (
        <div
          className={cn(
            'w-full h-full rounded-xl bg-[#131313] relative overflow-hidden select-none group/mockup',
            className
          )}
        >
          <div className="relative w-full h-full min-h-[480px] sm:min-h-[540px] lg:min-h-[600px] overflow-hidden rounded-xl">
            <Image
              src="/project-real-estate-v3.png"
              alt={
                language === 'es'
                  ? 'Plataforma Inmobiliaria y CRM Automatizado - Carolina Peña'
                  : 'Real Estate Platform & Automation CRM - Carolina Peña'
              }
              fill
              quality={90}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-top rounded-xl transition-transform duration-700 group-hover/mockup:scale-[1.03]"
              priority
            />
          </div>
        </div>
      );

    case 'consulting-management':
      return (
        <div
          className={cn(
            'w-full h-full rounded-xl bg-[#131313] relative overflow-hidden select-none group/mockup',
            className
          )}
        >
          <div className="relative w-full h-full min-h-[480px] sm:min-h-[540px] lg:min-h-[600px] overflow-hidden rounded-xl">
            <Image
              src="/project-consulting-management-v2.png"
              alt={
                language === 'es'
                  ? 'Plataforma de Consultoría & Analítica B2B - Centro de Consultoría Icesi'
                  : 'B2B Consulting & Analytics Platform - Icesi Consulting Center'
              }
              fill
              quality={90}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-top rounded-xl transition-transform duration-700 group-hover/mockup:scale-[1.03]"
              priority
            />
          </div>
        </div>
      );

    case 'distributed-voting':
      return (
        <div
          className={cn(
            'w-full h-full rounded-xl bg-[#131313] relative overflow-hidden select-none group/mockup',
            className
          )}
        >
          <div className="relative w-full h-full min-h-[480px] sm:min-h-[540px] lg:min-h-[600px] overflow-hidden rounded-xl">
            <Image
              src="/project-distributed-voting.jpg"
              alt={
                language === 'es'
                  ? 'Arquitectura de Infraestructura de Votación Distribuida de Alta Disponibilidad'
                  : 'High-Availability Distributed Voting Infrastructure Architecture'
              }
              fill
              quality={90}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-contain object-center rounded-xl transition-transform duration-700 group-hover/mockup:scale-[1.02]"
              priority
            />
          </div>
        </div>
      );

    case 'intelligent-electives':
      return (
        <div
          className={cn(
            'w-full h-full rounded-xl bg-[#131313] relative overflow-hidden select-none group/mockup',
            className
          )}
        >
          <div className="relative w-full h-full min-h-[480px] sm:min-h-[540px] lg:min-h-[600px] overflow-hidden rounded-xl">
            <Image
              src="/project-electives-bot.png"
              alt={
                language === 'es'
                  ? 'Asistente de Navegación de Electivas - Chatbot IA'
                  : 'Intelligent Electives Navigation Assistant - AI Chatbot'
              }
              fill
              quality={90}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-top rounded-xl transition-transform duration-700 group-hover/mockup:scale-[1.03]"
              priority
            />
          </div>
        </div>
      );


    default:
      return null;
  }
};
