'use client';

import { useRef } from 'react';
import { motion, useInView, type Variants } from 'motion/react';
import { fadeUp } from '@/lib/animations';
import styles from './AnimatedSection.module.css';

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

  // Only apply CSS opacity:0 safety net when the hidden variant actually
  // uses opacity (e.g. fadeUp, fadeIn). Stagger containers (hidden: {})
  // should NOT be hidden via CSS.
  const hidden = variants?.hidden as Record<string, unknown> | undefined;
  const needsCSSHide = hidden && 'opacity' in hidden;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      className={`${needsCSSHide ? styles.hidden : ''} ${className || ''}`.trim() || undefined}
      transition={delay ? { delay } : undefined}
      style={{
        willChange: 'auto',
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
      } as React.CSSProperties}
    >
      {children}
    </motion.div>
  );
}
