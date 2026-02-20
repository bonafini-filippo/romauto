'use client';

import { useRef, useEffect, useState } from 'react';
import type { Variants } from 'motion/react';
import {
  fadeUp as fadeUpVar,
  fadeIn as fadeInVar,
  fadeLeft as fadeLeftVar,
  fadeRight as fadeRightVar,
  scaleIn as scaleInVar,
  stagger as staggerVar,
} from '@/lib/animations';
import styles from './AnimatedSection.module.css';

interface AnimatedSectionProps {
  children: React.ReactNode;
  /** Accepts the same motion Variants objects for backward-compat */
  variants?: Variants;
  className?: string;
  delay?: number;
}

/** Map motion variant objects to CSS module class names */
function resolveVariant(v: Variants | undefined): keyof typeof styles | 'stagger' {
  if (v === fadeLeftVar) return 'fadeLeft';
  if (v === fadeRightVar) return 'fadeRight';
  if (v === fadeInVar) return 'fadeIn';
  if (v === scaleInVar) return 'scaleIn';
  if (v === staggerVar) return 'stagger';
  return 'fadeUp';
}

export function AnimatedSection({
  children,
  variants = fadeUpVar,
  className,
  delay = 0,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const variant = resolveVariant(variants);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '-10%' },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Stagger containers are pass-through wrappers (no animation)
  if (variant === 'stagger') {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={
        [styles[variant], isVisible && styles.visible, className]
          .filter(Boolean)
          .join(' ') || undefined
      }
      style={delay ? ({ transitionDelay: `${delay}s` } as React.CSSProperties) : undefined}
    >
      {children}
    </div>
  );
}
