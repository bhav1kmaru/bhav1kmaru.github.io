import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '../../lib/utils';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export function AnimatedText({ text, className }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2']
  });

  const characters = text.split('');

  return (
    <p ref={ref} className={cn("relative flex flex-wrap", className)}>
      {characters.map((char, i) => {
        const start = i / characters.length;
        const end = start + (1 / characters.length);
        const displayChar = char === ' ' ? '\u00A0' : char;
        
        return (
          <span key={i} className="relative">
            <span className="invisible whitespace-pre">{displayChar}</span>
            <motion.span
              className="absolute left-0 top-0 whitespace-pre"
              style={{
                opacity: useTransform(scrollYProgress, [start, end], [0.2, 1])
              }}
            >
              {displayChar}
            </motion.span>
          </span>
        );
      })}
    </p>
  );
}
