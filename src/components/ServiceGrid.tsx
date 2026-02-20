'use client';

import type React from 'react';
import { motion } from 'motion/react';
import { SERVICES } from '@/lib/services';
import { stagger, fadeUp } from '@/lib/animations';
import { ServiceCard } from './ServiceCard';
import styles from './ServiceGrid.module.css';

export function ServiceGrid() {
  return (
    <motion.div
      className={styles.grid}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={stagger}
    >
      {SERVICES.map((service) => (
        <motion.div key={service.slug} variants={fadeUp} style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' } as React.CSSProperties}>
          <ServiceCard service={service} />
        </motion.div>
      ))}
    </motion.div>
  );
}
