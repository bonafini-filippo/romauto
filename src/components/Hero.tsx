'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, ArrowRight, ShieldCheck } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { CountUp } from './CountUp';
import styles from './Hero.module.css';

const titleWords = ['Oltre', "trent'anni", 'di', 'esperienza', 'al', 'servizio'];
const highlightWords = ['dei', 'vostri', 'veicoli'];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className={styles.hero} ref={ref}>
      {/* Animated background elements */}
      <div className={styles.bgGrid} />
      <div className={styles.bgGlow1} />
      <div className={styles.bgGlow2} />
      <motion.div
        className={styles.bgLine}
        initial={{ scaleY: 0 }}
        animate={isInView ? { scaleY: 1 } : {}}
        transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
      />

      <div className={styles.inner}>
        {/* Content */}
        <div className={styles.content}>
          <motion.span
            className={styles.eyebrow}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className={styles.eyebrowLine} />
            Autofficina Romauto — Faenza
          </motion.span>

          <h1 className={styles.title}>
            {titleWords.map((word, i) => (
              <span key={i} className={styles.wordWrap}>
                <motion.span
                  className={styles.word}
                  initial={{ y: '110%' }}
                  animate={isInView ? { y: '0%' } : {}}
                  transition={{
                    duration: 0.7,
                    delay: 0.3 + i * 0.05,
                    ease: [0.33, 1, 0.68, 1],
                  }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
            <br />
            {highlightWords.map((word, i) => (
              <span key={i} className={styles.wordWrap}>
                <motion.span
                  className={`${styles.word} ${styles.highlight}`}
                  initial={{ y: '110%' }}
                  animate={isInView ? { y: '0%' } : {}}
                  transition={{
                    duration: 0.7,
                    delay: 0.3 + (titleWords.length + i) * 0.05,
                    ease: [0.33, 1, 0.68, 1],
                  }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            A Faenza, in provincia di Ravenna, siamo il punto di riferimento
            dal 2016 per automobilisti e camperisti.
          </motion.p>

          <motion.div
            className={styles.actions}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link href="/contatti" className={styles.btnPrimary}>
              <Phone size={17} />
              Contattaci
            </Link>
            <Link href="/servizi/meccanico" className={styles.btnOutline}>
              I nostri servizi
              <ArrowRight size={17} className={styles.btnArrow} />
            </Link>
          </motion.div>

          <motion.div
            className={styles.stats}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 1.1 }}
          >
            <div className={styles.stat}>
              <CountUp end={30} suffix="+" className={styles.statNum} duration={2000} />
              <span className={styles.statLabel}>Anni di esperienza</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <CountUp end={4} className={styles.statNum} duration={1500} />
              <span className={styles.statLabel}>Servizi specializzati</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <CountUp end={6} suffix="k+" className={styles.statNum} duration={2500} />
              <span className={styles.statLabel}>Clienti soddisfatti</span>
            </div>
          </motion.div>
        </div>

        {/* Visual */}
        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.imageFrame}>
            <Image
              src="/hero.jpg"
              alt="Autofficina Romauto - officina meccanica a Faenza"
              fill
              priority
              className={styles.heroImage}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className={styles.imageShine} />
          </div>

          <motion.div
            className={styles.floatingCard}
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.floatingIcon}>
              <ShieldCheck size={20} />
            </div>
            <div>
              <p className={styles.floatingTitle}>Qualit&agrave; Garantita</p>
              <p className={styles.floatingSub}>Diagnostica TEXA certificata</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
