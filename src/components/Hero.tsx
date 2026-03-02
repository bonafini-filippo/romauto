import Link from 'next/link';
import Image from 'next/image';
import { Phone, ArrowRight, ShieldCheck } from 'lucide-react';
import { CountUp } from './CountUp';
import styles from './Hero.module.css';

const titleWords = ['Oltre', 'venticinque', 'anni', 'di', 'esperienza', 'al', 'servizio'];
const highlightWords = ['dei', 'vostri', 'veicoli'];

export function Hero() {
  return (
    <section className={styles.hero}>
      {/* Animated background elements */}
      <div className={styles.bgGrid} />
      <div className={styles.bgGlow1} />
      <div className={styles.bgGlow2} />
      <div className={styles.bgLine} />

      <div className={styles.inner}>
        {/* Content */}
        <div className={styles.content}>
          <span className={styles.eyebrow}>
            <span className={styles.eyebrowLine} />
            Autofficina Romauto — Faenza
          </span>

          <h1 className={styles.title}>
            {titleWords.map((word, i) => (
              <span key={i} className={styles.wordWrap}>
                <span
                  className={styles.word}
                  style={{ animationDelay: `${0.3 + i * 0.05}s` }}
                >
                  {word}
                </span>
              </span>
            ))}
            <br />
            {highlightWords.map((word, i) => (
              <span key={i} className={styles.wordWrap}>
                <span
                  className={`${styles.word} ${styles.highlight}`}
                  style={{ animationDelay: `${0.3 + (titleWords.length + i) * 0.05}s` }}
                >
                  {word}
                </span>
              </span>
            ))}
          </h1>

          <p className={styles.subtitle}>
            A Faenza, in provincia di Ravenna, siamo il punto di riferimento
            dal 2016 per automobilisti e camperisti.
          </p>

          <div className={styles.actions}>
            <Link href="/contatti" className={styles.btnPrimary}>
              <Phone size={17} />
              Contattaci
            </Link>
            <Link href="/servizi/meccanico" className={styles.btnOutline}>
              I nostri servizi
              <ArrowRight size={17} className={styles.btnArrow} />
            </Link>
          </div>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <CountUp end={25} suffix="+" className={styles.statNum} duration={2000} />
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
          </div>
        </div>

        {/* Visual */}
        <div className={styles.visual}>
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

          <div className={styles.floatingCard}>
            <div className={styles.floatingIcon}>
              <ShieldCheck size={20} />
            </div>
            <div>
              <p className={styles.floatingTitle}>Qualit&agrave; Garantita</p>
              <p className={styles.floatingSub}>Diagnostica TEXA certificata</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
