'use client';

import { Check } from 'lucide-react';
import { motion } from 'motion/react';
import { stagger, fadeUp } from '@/lib/animations';
import styles from './ServiceFeatureList.module.css';

interface ServiceFeatureListProps {
  features: string[];
  color?: 'red' | 'blue';
}

export function ServiceFeatureList({
  features,
  color = 'red',
}: ServiceFeatureListProps) {
  return (
    <motion.div
      className={styles.grid}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={stagger}
    >
      {features.map((feature, i) => (
        <motion.div
          key={i}
          className={styles.item}
          variants={fadeUp}
        >
          <div className={styles.iconWrapper}>
            <div
              className={`${styles.icon} ${color === 'red' ? styles.iconRed : styles.iconBlue
                }`}
            >
              <Check size={20} />
            </div>
          </div>
          <span className={styles.text}>{feature}</span>
        </motion.div>
      ))}
    </motion.div>
  );
}
