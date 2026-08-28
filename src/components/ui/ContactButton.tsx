import React from 'react';
import { cn } from '../../lib/utils';

interface ContactButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export function ContactButton({ className, ...props }: ContactButtonProps) {
  return (
    <button
      className={cn(
        'group relative overflow-hidden rounded-full uppercase tracking-widest font-semibold',
        'px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4',
        'text-xs sm:text-sm md:text-base',
        'text-[#D7E2EA] transition-all duration-300',
        'hover:scale-[1.04] active:scale-[0.97]',
        className
      )}
      style={{
        background: 'linear-gradient(135deg, rgba(10,10,10,0.95) 0%, rgba(20,20,20,0.85) 50%, rgba(10,10,10,0.95) 100%)',
        border: '1px solid rgba(255,255,255,0.15)',
        boxShadow: '0 0 18px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
      {...props}
    >
      {/* shimmer sweep on hover */}
      <span
        className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(255,210,120,0.18) 50%, transparent 100%)',
        }}
      />
      <span className="relative z-10">Contact Me</span>
    </button>
  );
}
