'use client';

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
        <motion.div key={service.slug} variants={fadeUp}>
          <ServiceCard service={service} />
        </motion.div>
      ))}
    </motion.div>
  );
}
