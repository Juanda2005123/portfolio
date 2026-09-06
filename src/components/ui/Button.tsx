'use client';

import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'icon';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  target?: string;
  rel?: string;
  icon?: React.ReactNode;
  'aria-label'?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className,
  target,
  rel,
  icon,
  'aria-label': ariaLabel,
}) => {
  const sizeClasses = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-6 py-3 gap-2.5',
  };

  const variantClasses = {
    primary:
      'bg-white text-zinc-950 font-medium hover:bg-zinc-200 shadow-[0_0_20px_-3px_rgba(255,255,255,0.25)] hover:shadow-[0_0_25px_-2px_rgba(255,255,255,0.4)] border border-transparent',
    secondary:
      'bg-white/[0.05] text-zinc-200 hover:text-white border border-white/[0.12] hover:border-white/25 hover:bg-white/[0.09] backdrop-blur-sm',
    ghost:
      'bg-transparent text-zinc-400 hover:text-zinc-100 hover:bg-white/[0.05]',
    icon:
      'p-2.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-zinc-400 hover:text-white hover:border-white/20 hover:bg-white/[0.08] backdrop-blur-sm',
  };

  const baseStyles = cn(
    'inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 cursor-pointer select-none active:scale-[0.98]',
    variant !== 'icon' && sizeClasses[size],
    variantClasses[variant],
    className
  );

  if (href) {
    const isAnchor = href.startsWith('#');
    const isExternal = href.startsWith('http') || target === '_blank';

    if (isAnchor) {
      const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const targetId = href.replace('#', '');
        const targetElem = document.getElementById(targetId);
        if (targetElem) {
          targetElem.scrollIntoView({ behavior: 'smooth' });
        }
      };

      return (
        <a
          href={href}
          onClick={handleSmoothScroll}
          className={baseStyles}
          aria-label={ariaLabel}
        >
          {children}
          {icon && <span className="shrink-0">{icon}</span>}
        </a>
      );
    }

    return (
      <Link
        href={href}
        target={target || (isExternal ? '_blank' : undefined)}
        rel={rel || (isExternal ? 'noopener noreferrer' : undefined)}
        className={baseStyles}
        aria-label={ariaLabel}
      >
        {children}
        {icon && <span className="shrink-0">{icon}</span>}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={baseStyles}
      aria-label={ariaLabel}
      type="button"
    >
      {children}
      {icon && <span className="shrink-0">{icon}</span>}
    </button>
  );
};
