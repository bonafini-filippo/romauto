'use client';

import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import styles from './TextReveal.module.css';

interface TextRevealProps {
  children: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  className?: string;
  delay?: number;
}

export function TextReveal({ children, as: Tag = 'h2', className, delay = 0 }: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const words = children.split(' ');

  return (
    <Tag className={className}>
      <span ref={ref} className={styles.wrapper}>
        {words.map((word, i) => (
          <span key={i} className={styles.wordWrap}>
            <motion.span
              className={styles.word}
              initial={{ y: '100%' }}
              animate={isInView ? { y: '0%' } : { y: '100%' }}
              transition={{
                duration: 0.5,
                delay: delay + i * 0.04,
                ease: [0.33, 1, 0.68, 1],
              }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </span>
    </Tag>
  );
}
