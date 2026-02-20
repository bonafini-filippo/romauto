'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import styles from './PageHero.module.css';

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs: Breadcrumb[];
  accent?: 'red' | 'blue';
}

export function PageHero({ title, subtitle, breadcrumbs, accent = 'red' }: PageHeroProps) {
  return (
    <section className={styles.pageHero}>
      <div
        className={`${styles.accent} ${
          accent === 'red' ? styles.accentRed : styles.accentBlue
        }`}
      />

      <div className={styles.content}>
        <motion.nav
          className={styles.breadcrumbs}
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          aria-label="Breadcrumb"
        >
          {breadcrumbs.map((crumb, i) => (
            <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              {i > 0 && <ChevronRight size={14} className={styles.breadcrumbSep} />}
              {crumb.href ? (
                <Link href={crumb.href} className={styles.breadcrumbLink}>
                  {crumb.label}
                </Link>
              ) : (
                <span className={styles.breadcrumbCurrent}>{crumb.label}</span>
              )}
            </span>
          ))}
        </motion.nav>

        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>

      <div className={styles.bottomLine} />
    </section>
  );
}
