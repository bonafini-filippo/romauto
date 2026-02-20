'use client';

import { useRef } from 'react';
import { motion, useInView, type Variants } from 'motion/react';
import { fadeUp } from '@/lib/animations';

interface AnimatedSectionProps {
  children: React.ReactNode;
  variants?: Variants;
  className?: string;
  delay?: number;
}

export function AnimatedSection({
  children,
  variants = fadeUp,
  className,
  delay = 0,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-10%' });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      className={className}
      transition={delay ? { delay } : undefined}
      style={{ willChange: 'auto' }} // Helps prevent Safari memory glitches
    >
      {children}
    </motion.div>
  );
}
