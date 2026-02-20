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
  title: 'Elettrauto',
  description:
    'Elettrauto a Faenza: diagnosi elettronica TEXA, climatizzazione, sanificazione e sostituzione parti elettriche. Tempi rapidi e apparecchiature innovative.',
  path: '/servizi/elettrauto',
});

const FEATURES = [
  'Diagnosi computerizzata TEXA',
  'Sostituzione sensori',
  'Sostituzione batterie',
  'Sostituzione alternatori',
  'Sostituzione motorini di avviamento',
  'Sostituzione motorini tergicristalli',
  'Sostituzione bobine di accensione',
  'Sostituzione alzacristalli elettrici',
  'Sostituzione lampade fari xenon',
  'Sostituzione lampadine',
  'Installazione sensori di parcheggio',
  'Installazione impianti hi-fi stereo',
  'Installazione impianti Bluetooth Parrot',
];

const ALSO_FEATURES = [
  'Sanificazione ed igienizzazione della vettura tramite prodotti professionali TUNAP',
  'Riparazione e manutenzione degli impianti di aria condizionata',
  'Servizio di ricarica con stazione TEXA',
];

export default function ElettrautoPage() {
  return (
    <>
      <PageHero
        title="Elettrauto"
        subtitle="Romauto: gli esperti nella diagnosi elettronica"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Servizi', href: '/servizi/meccanico' },
          { label: 'Elettrauto' },
        ]}
        accent="blue"
      />

      {/* Intro */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.introGrid}>
            <AnimatedSection variants={fadeLeft}>
              <SectionHeading
                label="Elettrauto"
                title="Diagnosi Elettronica Avanzata"
              />
              <div className={styles.introText}>
                <p>
                  Le nostre innovative apparecchiature di intervento, abbinate agli avanzati
                  sistemi di diagnosi elettronica permettono di ridurre i tempi di valutazione
                  del problema, per ottimizzare e velocizzare i tempi di risoluzione.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection variants={fadeRight}>
              <div className={styles.introVisual}>
                <Image
                  src="/elettrauto.png"
                  alt="Elettrauto Diagnosi"
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
              title="Servizi di Elettrauto"
              subtitle="Interventi completi su tutti gli impianti elettrici del veicolo"
              center
            />
          </AnimatedSection>
          <ServiceFeatureList features={FEATURES} color="blue" />
        </div>
      </section>

      {/* Also section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <AnimatedSection>
            <SectionHeading
              label="Inoltre"
              title="Romauto Vanta Anche"
            />
            <div className={styles.alsoList}>
              {ALSO_FEATURES.map((feat, i) => (
                <div key={i} className={styles.alsoItem}>
                  <span className={styles.alsoIcon}>{i + 1}</span>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <BottomCTA />
    </>
  );
}
