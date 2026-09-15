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
            'w-full h-full rounded-2xl bg-[#0d0d12] border border-white/[0.1] flex flex-col shadow-2xl relative overflow-hidden select-none group/mockup',
            className
          )}
        >
          {/* Ambient glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/[0.08] rounded-full blur-3xl pointer-events-none" />

          {/* Browser / App Header */}
          <div className="flex items-center justify-between border-b border-white/[0.08] px-4 py-2.5 bg-[#121218]/90 backdrop-blur-sm z-10 shrink-0">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70 inline-block" />
              <span className="ml-2 text-zinc-400 text-[11px] font-mono">
                multi-tenant.saas.architecture
              </span>
            </div>
            <span className="flex items-center gap-1.5 text-blue-400 text-[10px] bg-blue-500/10 px-2 py-0.5 rounded-full border border-blue-500/20 font-mono font-medium">
              <ShieldCheck className="w-3 h-3 text-blue-400" />
              PostgreSQL RLS
            </span>
          </div>

          {/* Image Container */}
          <div className="relative flex-1 w-full min-h-[320px] sm:min-h-[360px] lg:min-h-[400px] bg-[#09090d] overflow-hidden flex items-center justify-center p-2">
            <Image
              src="/project-b2b-saas-v2.jpg"
              alt="B2B Multi-Tenant SaaS Platform Architecture"
              fill
              quality={90}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-contain object-center transition-transform duration-700 group-hover/mockup:scale-[1.02]"
              priority
            />
          </div>
        </div>
      );

    case 'real-estate-crm':
      return (
        <div
          className={cn(
            'w-full h-full rounded-2xl bg-[#0d0d12] border border-white/[0.1] flex flex-col shadow-2xl relative overflow-hidden select-none group/mockup',
            className
          )}
        >
          {/* Ambient glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/[0.07] rounded-full blur-3xl pointer-events-none" />

          {/* Browser / App Header */}
          <div className="flex items-center justify-between border-b border-white/[0.08] px-4 py-2.5 bg-[#121218]/90 backdrop-blur-sm z-10 shrink-0">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70 inline-block" />
              <a
                href="https://carolinapenainmobiliaria.com"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 inline-flex items-center gap-1.5 text-zinc-400 hover:text-amber-200 text-[11px] font-mono transition-colors group/link cursor-pointer px-1.5 py-0.5 rounded hover:bg-white/[0.04]"
                title={language === 'es' ? 'Visitar carolinapenainmobiliaria.com' : 'Visit carolinapenainmobiliaria.com'}
              >
                <span>carolinapenainmobiliaria.com</span>
                <ArrowUpRight className="w-3 h-3 opacity-60 group-hover/link:opacity-100 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all text-[#dcb991]" />
              </a>
            </div>
            <a
              href="https://carolinapenainmobiliaria.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 text-[10px] bg-emerald-500/10 hover:bg-emerald-500/20 px-2 py-0.5 rounded-full border border-emerald-500/20 transition-all font-mono font-medium cursor-pointer"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {language === 'es' ? 'En Producción' : 'In Production'}
            </a>
          </div>

          {/* Image Container with smooth object-top fit */}
          <div className="relative flex-1 w-full min-h-[320px] sm:min-h-[360px] lg:min-h-[400px] bg-[#09090d] overflow-hidden">
            <Image
              src="/project-real-estate-hero.jpg"
              alt="Plataforma Inmobiliaria y CRM Automatizado - Carolina Peña"
              fill
              quality={90}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-top transition-transform duration-700 group-hover/mockup:scale-[1.03]"
              priority
            />
            <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#0d0d12] to-transparent opacity-80 pointer-events-none" />
          </div>
        </div>
      );

    case 'consulting-management':
      return (
        <div
          className={cn(
            'w-full h-full rounded-2xl bg-[#0d0d12] border border-white/[0.1] p-5 sm:p-6 flex flex-col justify-between shadow-2xl relative overflow-hidden select-none',
            className
          )}
        >
          {/* Ambient glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/[0.08] rounded-full blur-3xl pointer-events-none" />

          {/* Window header */}
          <div className="flex items-center justify-between border-b border-white/[0.07] pb-3.5 mb-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70 inline-block" />
              <span className="ml-2 text-zinc-400 text-[11px] font-mono">
                consultoria.icesi.edu.co
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-[10px] font-mono font-medium">
                <ShieldCheck className="w-3 h-3 text-indigo-400" />
                Azure AD SSO
              </span>
            </div>
          </div>

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
            'w-full h-full rounded-2xl bg-[#0d0d12] border border-white/[0.1] p-5 sm:p-6 flex flex-col justify-between shadow-2xl relative overflow-hidden text-xs font-mono select-none',
            className
          )}
        >
          {/* Ambient glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-600/[0.08] rounded-full blur-3xl pointer-events-none" />

          {/* Top Bar */}
          <div className="flex items-center justify-between border-b border-white/[0.07] pb-3 mb-3">
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-amber-400" />
              <span className="text-zinc-300 font-sans font-medium text-xs">
                {language === 'es' ? 'Topología de Clúster ZeroC ICE' : 'ZeroC ICE Cluster Topology'}
              </span>
            </div>
            <span className="text-zinc-400 text-[10px] font-mono">
              {language === 'es' ? 'Nodos: 3/3 Activos' : 'Nodes: 3/3 Healthy'}
            </span>
          </div>

          {/* Cluster node status */}
          <div className="space-y-2 font-sans">
            <div className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-zinc-300 text-[11px]">
                  {language === 'es' ? 'Nodo-01 (Coordinador)' : 'Node-01 (Coordinator)'}
                </span>
              </div>
              <span className="text-zinc-500 text-[10px]">4,120 tx/s</span>
            </div>
            <div className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-zinc-300 text-[11px]">
                  {language === 'es' ? 'Nodo-02 (Persistencia Journal)' : 'Node-02 (Journal Persist)'}
                </span>
              </div>
              <span className="text-zinc-500 text-[10px]">Sync: 0ms lag</span>
            </div>
            <div className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-zinc-300 text-[11px]">
                  {language === 'es' ? 'Nodo-03 (Réplica Consenso)' : 'Node-03 (Consensus Replica)'}
                </span>
              </div>
              <span className="text-emerald-400 text-[10px]">
                {language === 'es' ? 'Idempotente' : 'Idempotent'}
              </span>
            </div>
          </div>

          {/* Stress Metric summary */}
          <div className="mt-4 pt-3 border-t border-white/[0.07] grid grid-cols-2 gap-2 text-[11px] font-sans">
            <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.05]">
              <div className="text-zinc-500 text-[10px]">
                {language === 'es' ? 'Volumen Prueba de Estrés' : 'Stress Test Volume'}
              </div>
              <div className="text-zinc-200 font-medium mt-0.5">
                {language === 'es' ? '+100.000 Votos' : '+100,000 Votes'}
              </div>
            </div>
            <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.05]">
              <div className="text-zinc-500 text-[10px]">
                {language === 'es' ? 'Tasa de Pérdida' : 'Loss Rate'}
              </div>
              <div className="text-emerald-400 font-medium mt-0.5">
                {language === 'es' ? '0.00% Tolerancia Cero' : '0.00% Zero Loss'}
              </div>
            </div>
          </div>
        </div>
      );

    case 'intelligent-electives':
      return (
        <div
          className={cn(
            'w-full h-full rounded-2xl bg-[#0d0d12] border border-white/[0.1] flex flex-col shadow-2xl relative overflow-hidden select-none group/mockup',
            className
          )}
        >
          {/* Ambient glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-600/[0.08] rounded-full blur-3xl pointer-events-none" />

          {/* Browser / App Header */}
          <div className="flex items-center justify-between border-b border-white/[0.08] px-4 py-2.5 bg-[#121218]/90 backdrop-blur-sm z-10 shrink-0">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70 inline-block" />
              <span className="ml-2 text-zinc-400 text-[11px] font-mono">
                {language === 'es' ? 'asistente-electivas.ia' : 'electives-assistant.ai'}
              </span>
            </div>
            <span className="flex items-center gap-1.5 text-cyan-400 text-[10px] bg-cyan-500/10 px-2 py-0.5 rounded-full border border-cyan-500/20 font-mono font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              pgvector RAG
            </span>
          </div>

          {/* Image Container with smooth object-top fit */}
          <div className="relative flex-1 w-full min-h-[320px] sm:min-h-[360px] lg:min-h-[400px] bg-[#09090d] overflow-hidden">
            <Image
              src="/project-electives-bot.png"
              alt="Intelligent Electives Navigation Assistant - Chatbot IA"
              fill
              quality={90}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-top transition-transform duration-700 group-hover/mockup:scale-[1.03]"
              priority
            />
            <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#0d0d12] to-transparent opacity-80 pointer-events-none" />
          </div>
        </div>
      );

    default:
      return null;
  }
};
