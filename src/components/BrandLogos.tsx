'use client';

import { motion } from 'motion/react';
import { CircleDot } from 'lucide-react';
import { stagger, fadeUp } from '@/lib/animations';
import { AnimatedSection } from './AnimatedSection';
import { SectionHeading } from './SectionHeading';
import styles from './BrandLogos.module.css';

const BRANDS = ['Michelin', 'Pirelli', 'Continental', 'Bridgestone'];

export function BrandLogos() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <AnimatedSection>
          <SectionHeading
            label="I nostri marchi"
            title="I Migliori Pneumatici"
            subtitle="Vasto assortimento dei migliori marchi per garantirvi una tenuta di strada perfetta"
            center
          />
        </AnimatedSection>
        <motion.div
          className={styles.grid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger}
        >
          {BRANDS.map((brand) => (
            <motion.div key={brand} className={styles.brand} variants={fadeUp}>
              <CircleDot size={28} className={styles.brandIcon} />
              <span className={styles.separator} />
              <span className={styles.brandName}>{brand}</span>
            </motion.div>
          ))}
        </motion.div>
        <AnimatedSection>
          <p className={styles.note}>
            Per garantirvi una tenuta di strada perfetta a prezzi ottimi, con tante offerte
            e promozioni.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
