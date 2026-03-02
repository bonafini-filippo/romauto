import type { Metadata } from 'next';
import Image from 'next/image';
import { Package, Factory, RefreshCw } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { AnimatedSection } from '@/components/AnimatedSection';
import { SectionHeading } from '@/components/SectionHeading';
import { BottomCTA } from '@/components/BottomCTA';
import { createMetadata } from '@/lib/metadata';
import { fadeLeft, fadeRight, stagger, fadeUp } from '@/lib/animations';
import styles from './page.module.css';

export const metadata: Metadata = createMetadata({
  title: 'Ricambi Auto',
  description:
    'Ricambi auto a Faenza: articoli di ricambio originali (OEM), aftermarket, rigenerati e usati per auto, furgoni, camper e autocaravan.',
  path: '/ricambi-auto',
});

const COMMON_PARTS = ['Batterie', 'Lampadine', 'Filtri', 'Tergicristalli', 'Oli motore'];

const PART_TYPES = [
  {
    icon: Factory,
    title: 'Ricambi Originali (OEM)',
    desc: 'Forniti direttamente dalla casa madre per una compatibilità garantita.',
  },
  {
    icon: Package,
    title: 'Ricambi Equivalenti',
    desc: 'Prodotti da aziende specializzate, qualità garantita a prezzi competitivi.',
  },
  {
    icon: RefreshCw,
    title: 'Ricambi Rigenerati',
    desc: 'Componenti ricondizionati con elevati standard qualitativi.',
  },
];

export default function RicambiAutoPage() {
  return (
    <>
      <PageHero
        title="Ricambi Auto"
        subtitle="Il punto di riferimento anche per i vostri ricambi."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Ricambi Auto' },
        ]}
        accent="red"
      />

      {/* Intro */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.introGrid}>
            <AnimatedSection variants={fadeLeft}>
              <SectionHeading
                label="Ricambi"
                title="Ricambi per Ogni Esigenza"
              />
              <div className={styles.introText}>
                <p>
                  La nostra autofficina, oltre ad utilizzare i pezzi per le riparazioni interne,
                  dispone di una vasta scelta di articoli di ricambio necessari per la riparazione
                  o manutenzione dei veicoli.
                </p>
                <p>
                  Vendita al banco di pezzi di ricambio per auto, furgoni, camper e autocaravan
                  ai nostri clienti.
                </p>
              </div>
              <div className={styles.commonParts}>
                {COMMON_PARTS.map((part) => (
                  <span key={part} className={styles.partTag}>{part}</span>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection variants={fadeRight}>
              <div className={styles.introVisual}>
                <Image
                  src="/ricambi-new.jpg"
                  alt="Vendita Ricambi Auto"
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

      {/* Part Types */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <AnimatedSection>
            <SectionHeading
              label="Tipologie"
              title="Tipologie di Ricambi"
              subtitle="Offriamo diverse categorie di ricambi per soddisfare ogni esigenza e budget"
              center
            />
          </AnimatedSection>
          <AnimatedSection variants={stagger}>
            <div className={styles.typesGrid}>
              {PART_TYPES.map((type) => {
                const Icon = type.icon;
                return (
                  <div key={type.title} className={styles.typeCard}>
                    <div className={styles.typeIcon}>
                      <Icon size={22} />
                    </div>
                    <h3 className={styles.typeTitle}>{type.title}</h3>
                    <p className={styles.typeDesc}>{type.desc}</p>
                  </div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <BottomCTA />
    </>
  );
}
