'use client';

import React from 'react';
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
} from 'lucide-react';

interface ProjectMockupProps {
  projectId: string;
  className?: string;
}

export const ProjectMockup: React.FC<ProjectMockupProps> = ({
  projectId,
  className,
}) => {
  switch (projectId) {
    case 'b2b-saas':
      return (
        <div
          className={cn(
            'w-full h-full rounded-2xl bg-[#0d0d12] border border-white/[0.1] p-5 sm:p-6 flex flex-col justify-between shadow-2xl relative overflow-hidden font-mono text-xs select-none',
            className
          )}
        >
          {/* Subtle gradient glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/[0.08] rounded-full blur-3xl pointer-events-none" />

          {/* Window header */}
          <div className="flex items-center justify-between border-b border-white/[0.07] pb-3.5 mb-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70 inline-block" />
              <span className="ml-2 text-zinc-400 text-[11px] font-sans">
                tenant-resolver.ts
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-sans font-medium">
                <ShieldCheck className="w-3 h-3" />
                RLS Enforced
              </span>
            </div>
          </div>

          {/* Code representation */}
          <div className="space-y-2 text-zinc-300 leading-relaxed overflow-hidden">
            <div className="text-zinc-500 font-sans text-[11px]">
              // Dynamic Multi-Tenant Context & Strategy Registry
            </div>
            <div>
              <span className="text-purple-400">export async function</span>{' '}
              <span className="text-blue-400">executeTenantTask</span>(
              <span className="text-orange-300">ctx</span>: TenantContext) {'{'}
            </div>
            <div className="pl-4">
              <span className="text-purple-400">const</span> strategy ={' '}
              <span className="text-blue-400">IntegrationRegistry</span>.
              <span className="text-yellow-300">getAdapter</span>(ctx.provider);
            </div>
            <div className="pl-4 text-zinc-500">
              // Strict PostgreSQL Row Level Security context transaction
            </div>
            <div className="pl-4">
              <span className="text-purple-400">return await</span> db.
              <span className="text-yellow-300">transaction</span>
              (<span className="text-purple-400">async</span> (tx) =&gt; {'{'}
            </div>
            <div className="pl-8">
              <span className="text-purple-400">await</span> tx.
              <span className="text-yellow-300">setTenantClaim</span>(ctx.tenantId);
            </div>
            <div className="pl-8">
              <span className="text-purple-400">return</span> strategy.
              <span className="text-yellow-300">process</span>(tx, ctx.payload);
            </div>
            <div className="pl-4">{'}'});</div>
            <div>{'}'}</div>
          </div>

          {/* Active Tenant Architecture Banner */}
          <div className="mt-5 pt-4 border-t border-white/[0.07] grid grid-cols-2 gap-2 text-[11px] font-sans">
            <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.05]">
              <div className="text-zinc-500 text-[10px] uppercase tracking-wider">
                Isolation Policy
              </div>
              <div className="text-zinc-200 font-medium flex items-center gap-1.5 mt-0.5">
                <Database className="w-3.5 h-3.5 text-blue-400" />
                Postgres RLS 100%
              </div>
            </div>
            <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.05]">
              <div className="text-zinc-500 text-[10px] uppercase tracking-wider">
                Configuration
              </div>
              <div className="text-zinc-200 font-medium flex items-center gap-1.5 mt-0.5">
                <Layers className="w-3.5 h-3.5 text-purple-400" />
                JSONB Modularity
              </div>
            </div>
          </div>
        </div>
      );

    case 'real-estate-crm':
      return (
        <div
          className={cn(
            'w-full h-full rounded-2xl bg-[#0d0d12] border border-white/[0.1] p-5 sm:p-6 flex flex-col justify-between shadow-2xl relative overflow-hidden text-xs select-none',
            className
          )}
        >
          {/* Ambient glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600/[0.08] rounded-full blur-3xl pointer-events-none" />

          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/[0.07] pb-3 mb-3">
            <div className="flex items-center gap-2">
              <div className="p-1 rounded bg-emerald-500/10 text-emerald-400">
                <Bot className="w-3.5 h-3.5" />
              </div>
              <span className="text-zinc-200 font-medium text-xs">
                n8n Conversational Qualifier
              </span>
            </div>
            <span className="flex items-center gap-1.5 text-emerald-400 text-[10px] bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Active Sync
            </span>
          </div>

          {/* Conversation & Qualification Simulation */}
          <div className="space-y-2.5 my-auto">
            {/* Prospect Message */}
            <div className="flex flex-col items-end">
              <div className="bg-zinc-800/80 text-zinc-300 p-2.5 rounded-2xl rounded-tr-sm max-w-[85%] text-[11px] border border-white/[0.06]">
                &quot;Hola, me interesa el inmueble en Chapinero. Cuento con crédito aprobado y busco entrega inmediata.&quot;
              </div>
              <span className="text-[9px] text-zinc-500 mt-1 mr-1">Prospecto • WhatsApp</span>
            </div>

            {/* AI Agent Response */}
            <div className="flex flex-col items-start">
              <div className="bg-blue-950/40 text-blue-100 p-2.5 rounded-2xl rounded-tl-sm max-w-[88%] text-[11px] border border-blue-500/20">
                &quot;¡Hola! Registrado. Precalificado con éxito: Score 96/100. Conectando con asesor comercial asignado.&quot;
              </div>
              <span className="text-[9px] text-blue-400 mt-1 ml-1 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> Precalificación Automática
              </span>
            </div>
          </div>

          {/* CRM Metric Bar */}
          <div className="mt-4 pt-3 border-t border-white/[0.07] grid grid-cols-2 gap-2 text-[11px]">
            <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.05]">
              <div className="text-zinc-500 text-[10px]">Tiempo Ahorrado</div>
              <div className="text-zinc-200 font-medium mt-0.5">~16 hrs / sem</div>
            </div>
            <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.05]">
              <div className="text-zinc-500 text-[10px]">Leads Procesados</div>
              <div className="text-emerald-400 font-medium mt-0.5">140+ Calificados</div>
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
                ZeroC ICE Cluster Topology
              </span>
            </div>
            <span className="text-zinc-400 text-[10px] font-mono">
              Nodes: 3/3 Healthy
            </span>
          </div>

          {/* Cluster node status */}
          <div className="space-y-2 font-sans">
            <div className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-zinc-300 text-[11px]">Node-01 (Coordinator)</span>
              </div>
              <span className="text-zinc-500 text-[10px]">4,120 tx/s</span>
            </div>
            <div className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-zinc-300 text-[11px]">Node-02 (Journal Persist)</span>
              </div>
              <span className="text-zinc-500 text-[10px]">Sync: 0ms lag</span>
            </div>
            <div className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-zinc-300 text-[11px]">Node-03 (Consensus Replica)</span>
              </div>
              <span className="text-emerald-400 text-[10px]">Idempotent</span>
            </div>
          </div>

          {/* Stress Metric summary */}
          <div className="mt-4 pt-3 border-t border-white/[0.07] grid grid-cols-2 gap-2 text-[11px] font-sans">
            <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.05]">
              <div className="text-zinc-500 text-[10px]">Stress Test Volume</div>
              <div className="text-zinc-200 font-medium mt-0.5">+100,000 Votos</div>
            </div>
            <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.05]">
              <div className="text-zinc-500 text-[10px]">Loss Rate</div>
              <div className="text-emerald-400 font-medium mt-0.5">0.00% Perfección</div>
            </div>
          </div>
        </div>
      );

    case 'intelligent-electives':
      return (
        <div
          className={cn(
            'w-full h-full rounded-2xl bg-[#0d0d12] border border-white/[0.1] p-5 sm:p-6 flex flex-col justify-between shadow-2xl relative overflow-hidden text-xs select-none',
            className
          )}
        >
          {/* Ambient glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-600/[0.08] rounded-full blur-3xl pointer-events-none" />

          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/[0.07] pb-3 mb-3">
            <div className="flex items-center gap-2">
              <div className="p-1 rounded bg-cyan-500/10 text-cyan-400">
                <Database className="w-3.5 h-3.5" />
              </div>
              <span className="text-zinc-200 font-medium text-xs">
                pgvector Hybrid Retrieval Engine
              </span>
            </div>
            <span className="text-[10px] text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-full border border-cyan-500/20">
              Cosine + SQL Relational
            </span>
          </div>

          {/* Query dissection visual */}
          <div className="space-y-2">
            <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.06] text-zinc-300 text-[11px]">
              <span className="text-zinc-500 text-[10px] block mb-1">
                Prompt Estudiante:
              </span>
              &quot;Electivas de IA aplicada los viernes en la tarde sin cálculo avanzado&quot;
            </div>

            <div className="grid grid-cols-2 gap-2 text-[10px] font-mono">
              <div className="p-2 rounded bg-cyan-950/20 border border-cyan-500/20 text-cyan-300">
                <span className="text-zinc-500 block mb-0.5">Vector Embedding</span>
                &gt; similarity: 0.94
              </div>
              <div className="p-2 rounded bg-purple-950/20 border border-purple-500/20 text-purple-300">
                <span className="text-zinc-500 block mb-0.5">SQL Constraint</span>
                &gt; day = &apos;FRI&apos; AND t &gt;= 14:00
              </div>
            </div>
          </div>

          {/* Impact stats */}
          <div className="mt-4 pt-3 border-t border-white/[0.07] grid grid-cols-2 gap-2 text-[11px]">
            <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.05]">
              <div className="text-zinc-500 text-[10px]">Catálogo Procesado</div>
              <div className="text-zinc-200 font-medium mt-0.5">120+ Cursos Univ.</div>
            </div>
            <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.05]">
              <div className="text-zinc-500 text-[10px]">Filtro Combinado</div>
              <div className="text-cyan-400 font-medium mt-0.5">100% Determinista</div>
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
};
