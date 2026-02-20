import Link from 'next/link';
import { Phone, ArrowRight } from 'lucide-react';
import { BUSINESS } from '@/lib/constants';
import { AnimatedSection } from './AnimatedSection';
import styles from './ContactCTA.module.css';

export function ContactCTA() {
  return (
    <section className={styles.section}>
      <AnimatedSection>
        <div className={styles.card}>
          <div className={styles.content}>
            <h2 className={styles.title}>Hai bisogno di assistenza?</h2>
            <p className={styles.subtitle}>
              Contattaci per un preventivo gratuito o per prenotare un
              appuntamento. Siamo a vostra disposizione.
            </p>
            <div className={styles.buttons}>
              <a href={BUSINESS.phoneHref} className={styles.btnPrimary}>
                <Phone size={17} />
                Chiamaci Ora
              </a>
              <Link href="/contatti" className={styles.btnSecondary}>
                Scrivici
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
