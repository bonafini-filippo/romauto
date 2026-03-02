import type { Metadata } from 'next';
import Image from 'next/image';
import { Car } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { AnimatedSection } from '@/components/AnimatedSection';
import { SectionHeading } from '@/components/SectionHeading';
import { ServiceFeatureList } from '@/components/ServiceFeatureList';
import { BottomCTA } from '@/components/BottomCTA';
import { fadeLeft, fadeRight } from '@/lib/animations';
import styles from '../service-page.module.css';

export const metadata: Metadata = {
  title: 'Meccanico',
  description: 'Riparazioni meccaniche, tagliandi omologati multimarca e manutenzione per auto, furgoni e camper a Faenza. Esperienza venticinquennale.',
  openGraph: {
    title: 'Meccanico Faenza | Autofficina Romauto',
    description: 'Tagliandi di manutenzione, ripristino impianto frenante ed esperienza venticinquennale. Affidati ai professionisti a Faenza.',
  }
};

const FEATURES = [
  'Tagliandi di manutenzione periodica omologati multimarca',
  'Azzeramento spia contatore e manutenzione programmata',
  'Cambio olio e filtro olio',
  'Controllo liquido refrigerante e olio freni',
  'Controllo liquido tergicristallo',
  'Controllo pressione pneumatici e spessore pastiglie',
  'Sostituzione parti meccaniche',
  'Smontaggio, riparazione e montaggio cambio meccanico e automatico',
  'Controllo e ripristino impianto frenante (dischi, tamburi, ganasce)',
  'Installazione gancio traino',
  'Sostituzione serbatoio GPL',
];

export default function MeccanicoPage() {
  return (
    <>
      <PageHero
        title="Meccanico"
        subtitle="Punto di riferimento per tutta la provincia per le riparazioni meccaniche di autoveicoli, camper e furgoni."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Servizi', href: '/servizi/meccanico' },
          { label: 'Meccanico' },
        ]}
        accent="red"
      />

      {/* Intro */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.introGrid}>
            <AnimatedSection variants={fadeLeft}>
              <SectionHeading
                label="Meccanico"
                title="Esperienza e Passione"
              />
              <div className={styles.introText}>
                <p>
                  Romauto a Faenza è punto di riferimento per tutta la provincia per le
                  riparazioni meccaniche per autoveicoli, camper e furgoni di qualunque marca
                  e modello.
                </p>
                <p>
                  Esperienza e passione, rapidità e tempi brevi ci consentono di soddisfare
                  da oltre 10 anni le vostre esigenze.
                </p>
              </div>
              <div className={styles.vehicleList}>
                <span className={styles.vehicleTag}><Car size={14} /> Autoveicoli</span>
                <span className={styles.vehicleTag}><Car size={14} /> Camper</span>
                <span className={styles.vehicleTag}><Car size={14} /> Furgoni</span>
              </div>
            </AnimatedSection>
            <AnimatedSection variants={fadeRight}>
              <div className={styles.introVisual}>
                <Image
                  src="/meccanico.png"
                  alt="Meccanico Auto"
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
      <section className={`${styles.section} ${styles.sectionAlt} `}>
        <div className={styles.container}>
          <AnimatedSection>
            <SectionHeading
              label="I nostri servizi"
              title="Servizi Meccanici di Alta Qualità"
              subtitle="Manutenzione completa con attrezzature di ultima generazione"
              center
            />
          </AnimatedSection>
          <ServiceFeatureList features={FEATURES} color="red" />
        </div>
      </section>

      <BottomCTA />
    </>
  );
}
