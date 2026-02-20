import Link from 'next/link';
import { Car, ArrowRight } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';
import styles from './CourtesyCar.module.css';

export function CourtesyCar() {
  return (
    <section className={styles.section}>
      <AnimatedSection>
        <div className={styles.banner}>
          <div className={styles.iconWrap}>
            <Car size={28} />
          </div>
          <div className={styles.content}>
            <div className={styles.titleRow}>
              <h2 className={styles.title}>Auto di Cortesia Gratuita</h2>
            </div>
            <p className={styles.text}>
              Per limitare i disagi dei nostri clienti, in caso di tempi
              dilungati delle lavorazioni, la nostra Autofficina mette a
              disposizione un pratico e comodo servizio auto di cortesia.
            </p>
          </div>
          <Link href="/contatti" className={styles.cta}>
            Richiedi
            <ArrowRight size={16} />
          </Link>
        </div>
      </AnimatedSection>
    </section>
  );
}
