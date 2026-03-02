import type { Metadata } from 'next';
import Image from 'next/image';
import { Car, Truck, Caravan } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { AnimatedSection } from '@/components/AnimatedSection';
import { SectionHeading } from '@/components/SectionHeading';
import { ServiceFeatureList } from '@/components/ServiceFeatureList';
import { BrandLogos } from '@/components/BrandLogos';
import { BottomCTA } from '@/components/BottomCTA';
import { createMetadata } from '@/lib/metadata';
import { fadeLeft, fadeRight } from '@/lib/animations';
import styles from '../service-page.module.css';

export const metadata: Metadata = createMetadata({
  title: 'Gommista',
  description:
    'Gommista a Faenza dal 2016 per auto, furgoni e camper. Vendita, riparazione e cambio gomme Michelin, Pirelli, Continental e Bridgestone.',
  path: '/servizi/gommista',
});

const FEATURES = [
  'Vendita pneumatici nuovi dei migliori marchi',
  'Cambio gomme stagionale',
  'Riparazione pneumatici',
  'Equilibratura ruote',
  'Consulenza dedicata per la scelta del pneumatico',
];

export default function GommistaPage() {
  return (
    <>
      <PageHero
        title="Gommista"
        subtitle="Dal 2016 il vostro partner di fiducia per un pit stop rapido e sicuro."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Servizi', href: '/servizi/meccanico' },
          { label: 'Gommista' },
        ]}
        accent="red"
      />

      {/* Intro */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.introGrid}>
            <AnimatedSection variants={fadeLeft}>
              <SectionHeading
                label="Gommista"
                title="Pit Stop Rapido e Sicuro"
              />
              <div className={styles.introText}>
                <p>
                  Romauto a Faenza è dal 2016 il vostro partner di fiducia per un pit stop
                  rapido e sicuro.
                </p>
                <p>
                  I nostri gommisti sono a vostra disposizione per operazioni di riparazione e
                  sostituzione, vendita e cambio gomme.
                </p>
              </div>
              <div className={styles.vehicleList}>
                <span className={styles.vehicleTag}><Car size={14} /> Auto</span>
                <span className={styles.vehicleTag}><Truck size={14} /> Furgoni</span>
                <span className={styles.vehicleTag}><Caravan size={14} /> Camper</span>
              </div>
            </AnimatedSection>
            <AnimatedSection variants={fadeRight}>
              <div className={styles.introVisual}>
                <Image
                  src="/gomme.png"
                  alt="Gommista Riparazione"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <AnimatedSection>
            <SectionHeading
              label="I nostri servizi"
              title="Servizi Gommista"
              subtitle="Ripristino, vendita e cambio gomme per tutti i tipi di veicoli"
              center
            />
          </AnimatedSection>
          <ServiceFeatureList features={FEATURES} color="red" />
        </div>
      </section>

      <BrandLogos />

      {/* Consultation */}
      <section className={styles.section}>
        <div className={styles.container}>
          <AnimatedSection>
            <SectionHeading
              label="Consulenza"
              title="Consulenza Dedicata per le Vostre Gomme"
            />
            <div className={styles.introText}>
              <p>
                Consulenze approfondite e complete per scegliere il migliore pneumatico, adatto
                al vostro stile di guida e all&apos;utilizzo che fate del vostro mezzo.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <BottomCTA />
    </>
  );
}
