import type { Metadata } from 'next';
import Image from 'next/image';
import { PageHero } from '@/components/PageHero';
import { AnimatedSection } from '@/components/AnimatedSection';
import { SectionHeading } from '@/components/SectionHeading';
import { ServiceFeatureList } from '@/components/ServiceFeatureList';
import { BottomCTA } from '@/components/BottomCTA';
import { createMetadata } from '@/lib/metadata';
import { fadeLeft, fadeRight } from '@/lib/animations';
import styles from '../service-page.module.css';

export const metadata: Metadata = createMetadata({
  title: 'Servizio Camper',
  description:
    'Servizio camper e autocaravan a Faenza: tagliando, revisione, cambio gomme e installazione accessori (telecamere, antifurto, sensori).',
  path: '/servizi/servizio-camper',
});

const FEATURES = [
  'Tagliando e revisione camper',
  'Sostituzione batterie',
  'Cambio gomme e servizi pneumatici',
  'Installazione telecamera posteriore',
  'Installazione antifurto',
  'Installazione sensori di parcheggio',
  'Riparazione e sostituzione accessori',
  'Manutenzione impianti elettrici',
];

export default function ServizioCamperPage() {
  return (
    <>
      <PageHero
        title="Servizio Camper"
        subtitle="Da oltre 10 anni il punto di riferimento per i possessori di camper e autocaravan."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Servizi', href: '/servizi/meccanico' },
          { label: 'Servizio Camper' },
        ]}
        accent="blue"
      />

      {/* Intro */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.introGrid}>
            <AnimatedSection variants={fadeLeft}>
              <SectionHeading
                label="Camper"
                title="Specialisti in Camper e Autocaravan"
              />
              <div className={styles.introText}>
                <p>
                  La nostra officina dispone di spazi e apparecchiature apposite per fornire un
                  efficace servizio di revisione a camper e caravan.
                </p>
                <p>
                  Romauto effettua anche servizi di riparazione, sostituzione o montaggio degli
                  accessori utili a rendere il camper ancora più confortevole.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection variants={fadeRight}>
              <div className={styles.introVisual}>
                <Image
                  src="/camper.png"
                  alt="Servizio Camper"
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
              label="Accessori e servizi"
              title="Accessori e Servizi per il Caravan"
              subtitle="Oltre all'esecuzione del tagliando, l'autofficina può sostituire in brevissimo tempo batterie, eseguire il cambio gomme e occuparsi di installazioni."
              center
            />
          </AnimatedSection>
          <ServiceFeatureList features={FEATURES} color="blue" />
        </div>
      </section>

      <BottomCTA />
    </>
  );
}
