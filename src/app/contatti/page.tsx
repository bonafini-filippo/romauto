import type { Metadata } from 'next';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { AnimatedSection } from '@/components/AnimatedSection';
import { SectionHeading } from '@/components/SectionHeading';
import { ContactForm } from '@/components/ContactForm';
import { Map } from '@/components/Map';
import { BUSINESS } from '@/lib/constants';
import { createMetadata } from '@/lib/metadata';
import { fadeLeft, fadeRight } from '@/lib/animations';
import styles from './page.module.css';

export const metadata: Metadata = createMetadata({
  title: 'Contatti',
  description:
    'Contatta Autofficina Romauto a Faenza (RA). Via Vittori 175. Tel: 0546 622686. Meccanico, elettrauto, gommista, servizio camper.',
  path: '/contatti',
});

export default function ContattiPage() {
  return (
    <>
      <PageHero
        title="Contatti"
        subtitle="Siamo a vostra disposizione per qualsiasi informazione o richiesta."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Contatti' },
        ]}
        accent="red"
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {/* Info Column */}
            <AnimatedSection variants={fadeLeft}>
              <div className={styles.info}>
                <div>
                  <SectionHeading
                    label="Contattaci"
                    title="Come Raggiungerci"
                  />
                  <p className={styles.introText}>
                    Dall&apos;esperienza ultra trentennale per le quattro ruote nasce Romauto,
                    il punto di riferimento a Faenza e in tutta la provincia di Ravenna per
                    auto, furgoni, camper e caravan.
                  </p>
                  <div className={styles.servicesList}>
                    <span className={styles.serviceTag}>Meccanico</span>
                    <span className={styles.serviceTag}>Elettrauto</span>
                    <span className={styles.serviceTag}>Gommista</span>
                    <span className={styles.serviceTag}>Ricambi</span>
                    <span className={styles.serviceTag}>Auto sostitutiva</span>
                  </div>
                </div>

                <div className={styles.contactCards}>
                  <div className={styles.contactCard}>
                    <div className={styles.cardIcon}>
                      <MapPin size={20} />
                    </div>
                    <div>
                      <div className={styles.cardTitle}>Indirizzo</div>
                      <div className={styles.cardValue}>
                        <a
                          href={BUSINESS.maps.linkUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.cardLink}
                        >
                          {BUSINESS.address.full}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className={styles.contactCard}>
                    <div className={styles.cardIcon}>
                      <Phone size={20} />
                    </div>
                    <div>
                      <div className={styles.cardTitle}>Telefono</div>
                      <div className={styles.cardValue}>
                        <a href={BUSINESS.phoneHref} className={styles.cardLink}>
                          {BUSINESS.phone}
                        </a>
                        {' / '}
                        <a href={BUSINESS.mobileHref} className={styles.cardLink}>
                          {BUSINESS.mobile}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className={styles.contactCard}>
                    <div className={styles.cardIcon}>
                      <Mail size={20} />
                    </div>
                    <div>
                      <div className={styles.cardTitle}>Email</div>
                      <div className={styles.cardValue}>
                        <a
                          href={`mailto:${BUSINESS.email}`}
                          className={styles.cardLink}
                        >
                          {BUSINESS.email}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className={styles.contactCard}>
                    <div className={styles.cardIcon}>
                      <Clock size={20} />
                    </div>
                    <div>
                      <div className={styles.cardTitle}>Orari</div>
                      <div className={styles.cardValue}>
                        {BUSINESS.orari.feriali}
                        <br />
                        {BUSINESS.orari.sabato}
                        <br />
                        {BUSINESS.orari.domenica}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Form Column */}
            <AnimatedSection variants={fadeRight}>
              <SectionHeading label="Scrivici" title="Invia un Messaggio" />
              <ContactForm />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className={styles.mapSection}>
        <div className={styles.mapContainer}>
          <AnimatedSection>
            <h2 className={styles.mapTitle}>Dove Siamo</h2>
            <Map />
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
