import React from 'react';
import { cn } from '../../lib/utils';

interface LiveProjectButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export function LiveProjectButton({ className, ...props }: LiveProjectButtonProps) {
  return (
    <button
      className={cn(
        "rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest",
        "px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base",
        "hover:bg-[#D7E2EA]/10 transition-colors",
        className
      )}
      {...props}
    >
      Live Project
    </button>
  );
}
