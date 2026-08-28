import React, { ElementType, useContext } from 'react';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import { LoaderContext } from '../../context/LoaderContext';

interface FadeInProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  as?: ElementType;
}

const motionCache = new Map<ElementType, any>();

export function FadeIn({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  as: Component = 'div',
  ...props
}: FadeInProps) {
  const loaded = useContext(LoaderContext);

  let MotionComponent = motionCache.get(Component);
  if (!MotionComponent) {
    MotionComponent = motion.create(Component);
    motionCache.set(Component, MotionComponent);
  }
  
  return (
    <MotionComponent
      initial={{ opacity: 0, x, y }}
      whileInView={loaded ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x, y }}
      viewport={{ once: true, margin: "50px", amount: 0 }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      {...props as any}
    >
      {children}
    </MotionComponent>
  );
}
