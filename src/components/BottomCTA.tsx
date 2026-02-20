import Link from 'next/link';
import { Phone, ArrowRight, Car } from 'lucide-react';
import { BUSINESS } from '@/lib/constants';
import { AnimatedSection } from './AnimatedSection';
import styles from './BottomCTA.module.css';

export function BottomCTA() {
  return (
    <section className={styles.section}>
      <AnimatedSection>
        <div className={styles.container}>
          <div className={styles.card}>
            <div className={styles.grid}>
              {/* Left: Courtesy Car */}
              <div className={styles.panelBlue}>
                <span className={styles.tag}>Servizio gratuito</span>
                <div className={styles.panelHead}>
                  <Car size={22} className={styles.panelIcon} />
                  <h3 className={styles.panelTitle}>Auto di Cortesia</h3>
                </div>
                <p className={styles.panelText}>
                  Per limitare i disagi dei nostri clienti, in caso di tempi
                  dilungati delle lavorazioni, la nostra Autofficina mette a
                  disposizione un pratico e comodo servizio auto di cortesia.
                </p>
                <Link href="/contatti" className={styles.linkBtn}>
                  Richiedi
                  <ArrowRight size={15} />
                </Link>
              </div>

              {/* Right: Contact CTA */}
              <div className={styles.panelRed}>
                <h3 className={styles.panelTitleLg}>
                  Hai bisogno di assistenza?
                </h3>
                <p className={styles.panelText}>
                  Contattaci per un preventivo gratuito o per prenotare un
                  appuntamento. Siamo a vostra disposizione.
                </p>
                <div className={styles.buttons}>
                  <a href={BUSINESS.phoneHref} className={styles.btnWhite}>
                    <Phone size={16} />
                    Chiamaci Ora
                  </a>
                  <Link href="/contatti" className={styles.btnOutline}>
                    Scrivici
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
