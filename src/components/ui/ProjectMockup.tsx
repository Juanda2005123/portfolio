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
              alt="B2B Multi-Tenant SaaS Platform Architecture"
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
              alt="Plataforma Inmobiliaria y CRM Automatizado - Carolina Peña"
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
            'w-full h-full rounded-xl bg-[#131313] p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden select-none',
            className
          )}
        >

          {/* Workflow stages representation */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 mb-1">
              <span>{language === 'es' ? 'Flujo de Aprobación Institucional' : 'Institutional Approval Lifecycle'}</span>
              <span className="text-emerald-400 font-medium">RBAC Active</span>
            </div>

            <div className="p-2.5 rounded-lg bg-white/[0.025] border border-white/[0.06] flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <div>
                  <div className="text-zinc-200 text-xs font-medium">
                    {language === 'es' ? '01. Formulación & Viabilidad Presupuestal' : '01. Project Formulation & Budget Feasibility'}
                  </div>
                  <div className="text-[10px] text-zinc-500 font-mono">
                    {language === 'es' ? 'Aprobado por Coordinación' : 'Approved by Project Lead'}
                  </div>
                </div>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                {language === 'es' ? 'Completado' : 'Completed'}
              </span>
            </div>

            <div className="p-2.5 rounded-lg bg-white/[0.025] border border-white/[0.06] flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <div>
                  <div className="text-zinc-200 text-xs font-medium">
                    {language === 'es' ? '02. Validación Jurídica & Contratación' : '02. Legal Validation & Consultant Assignment'}
                  </div>
                  <div className="text-[10px] text-zinc-500 font-mono">
                    {language === 'es' ? 'Trazabilidad en tiempo real' : 'Real-time contract auditing'}
                  </div>
                </div>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                {language === 'es' ? 'Completado' : 'Completed'}
              </span>
            </div>

            <div className="p-2.5 rounded-lg bg-indigo-500/[0.04] border border-indigo-500/20 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-4 h-4 rounded-full border border-indigo-400/50 flex items-center justify-center shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                </div>
                <div>
                  <div className="text-indigo-200 text-xs font-medium">
                    {language === 'es' ? '03. Ejecución de Hitos & Desembolsos' : '03. Milestone Execution & Disbursements'}
                  </div>
                  <div className="text-[10px] text-indigo-300/70 font-mono">
                    {language === 'es' ? 'Seguimiento financiero centralizado' : 'Centralized financial tracking'}
                  </div>
                </div>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                {language === 'es' ? 'En Curso' : 'In Progress'}
              </span>
            </div>
          </div>

          {/* Architecture Banner */}
          <div className="mt-4 pt-3.5 border-t border-white/[0.07] grid grid-cols-2 gap-2 text-[11px] font-sans">
            <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.05]">
              <div className="text-zinc-500 text-[10px] uppercase tracking-wider font-mono">
                {language === 'es' ? 'Control de Acceso' : 'Access Control'}
              </div>
              <div className="text-zinc-200 font-medium flex items-center gap-1.5 mt-0.5 text-xs">
                <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
                Azure AD Multi-Tier
              </div>
            </div>
            <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.05]">
              <div className="text-zinc-500 text-[10px] uppercase tracking-wider font-mono">
                {language === 'es' ? 'Persistencia & Auditoría' : 'Audit Persistence'}
              </div>
              <div className="text-zinc-200 font-medium flex items-center gap-1.5 mt-0.5 text-xs">
                <Database className="w-3.5 h-3.5 text-blue-400" />
                PostgreSQL 100%
              </div>
            </div>
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
              alt="High-Availability Distributed Voting Infrastructure Architecture"
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
              alt="Intelligent Electives Navigation Assistant - Chatbot IA"
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
