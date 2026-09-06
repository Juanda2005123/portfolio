'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'status' | 'outline' | 'tech';
  dot?: boolean;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'outline',
  dot = false,
  className,
}) => {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium tracking-tight transition-all duration-300',
        variant === 'status' &&
          'bg-white/[0.04] border border-white/[0.1] text-zinc-300 backdrop-blur-md hover:border-white/20',
        variant === 'outline' &&
          'bg-zinc-900/60 border border-white/[0.08] text-zinc-400 backdrop-blur-sm hover:text-zinc-200 hover:border-white/20',
        variant === 'tech' &&
          'bg-white/[0.03] border border-white/[0.07] text-zinc-300 hover:bg-white/[0.06] hover:text-white',
        className
      )}
    >
      {dot && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 duration-1000" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>
      )}
      <span>{children}</span>
    </div>
  );
};
