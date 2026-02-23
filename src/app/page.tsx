import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'La tua Autofficina a Faenza',
  description: 'Scopri i servizi di Autofficina Romauto a Faenza: meccanico, elettrauto, gommista e assistenza camper. Attrezzature diagnostiche TEXA all\'avanguardia.',
  openGraph: {
    title: 'La tua Autofficina a Faenza | Romauto',
    description: 'Autofficina Romauto offre servizi eccellenti per la cura della tua auto e camper a Faenza. Prenota un appuntamento.',
  }
};
import {
  Wrench,
  ClipboardCheck,
  Zap,
  CircleDot,
  Monitor,
  Caravan,
  Car,
  Cpu,
  ShieldCheck,
  Clock,
  Gauge,
  Check,
} from 'lucide-react';
import { Hero } from '@/components/Hero';
import { AnimatedSection } from '@/components/AnimatedSection';
import { SectionHeading } from '@/components/SectionHeading';
import { ServiceGrid } from '@/components/ServiceGrid';
import { BottomCTA } from '@/components/BottomCTA';
import { fadeLeft, fadeRight, stagger, fadeUp } from '@/lib/animations';
import styles from './page.module.css';

const FEATURES = [
  {
    icon: Cpu,
    title: 'Diagnostica Avanzata',
    text: 'Attrezzature di ultima generazione per precisione e rapidità.',
  },
  {
    icon: ShieldCheck,
    title: 'La Vostra Sicurezza',
    text: 'Interventi per una guida sicura, confortevole e performante.',
  },
  {
    icon: Clock,
    title: 'Tagliandi in Giornata',
    text: 'Specializzati nel rilascio di tagliandi auto in tempi brevi.',
  },
  {
    icon: Gauge,
    title: 'Sistema TEXA IDC5',
    text: 'Ricarica climatizzazione con rilevatore perdite di precisione.',
  },
];

const SERVICES = [
  { icon: Wrench, label: 'Riparazioni meccaniche' },
  { icon: ClipboardCheck, label: 'Revisioni e tagliandi' },
  { icon: Zap, label: 'Elettrauto' },
  { icon: CircleDot, label: 'Gommista' },
  { icon: Monitor, label: 'Diagnosi computerizzate' },
  { icon: Caravan, label: 'Servizio camper' },
  { icon: Car, label: 'Auto di cortesia' },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* Chi Siamo */}
      <section className={styles.about}>
        <div className={styles.container}>
          <div className={styles.aboutGrid}>
            <AnimatedSection variants={fadeLeft}>
              <div className={styles.aboutVisual}>
                <div className={styles.aboutImageWrap}>
                  <Image
                    src="/chi-siamo.webp"
                    alt="Autofficina Romauto - il nostro team al lavoro"
                    fill
                    className={styles.aboutImage}
                    sizes="(max-width: 768px) 100vw, 40vw"
                    priority
                  />
                </div>
                <div className={styles.aboutStatCard}>
                  <span className={styles.aboutStatNum}>30+</span>
                  <span className={styles.aboutStatLabel}>anni di esperienza</span>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection variants={fadeRight}>
              <div className={styles.aboutContent}>
                <SectionHeading label="Chi siamo" title="La Nostra Eccellenza" />
                <div className={styles.aboutText}>
                  <p>
                    Nata dall&apos;esperienza ultra ventennale di{' '}
                    <strong>Damiano Romanelli</strong>, l&apos;autofficina Romauto
                    vanta ad oggi uno staff di professionisti costantemente
                    aggiornati sulle innovazioni tecniche del settore, per offrire
                    un <strong>servizio a tutto tondo</strong> ad ogni cliente: dal
                    rilascio del tagliando fino alla ricarica del climatizzatore.
                  </p>
                  <p>
                    Romauto dispone di{' '}
                    <strong>attrezzature diagnostiche di ultima generazione</strong>,
                    a garanzia di un aumento sostanziale della precisione con
                    conseguente riduzione dei tempi, per tornare in strada quanto
                    prima.
                  </p>
                </div>
                <div className={styles.aboutServices}>
                  {SERVICES.map((s) => {
                    const Icon = s.icon;
                    return (
                      <div key={s.label} className={styles.aboutServiceItem}>
                        <Icon size={15} className={styles.aboutServiceIcon} />
                        <span>{s.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Punti di Forza */}
      <section className={styles.strengths}>
        <div className={styles.container}>
          <AnimatedSection>
            <SectionHeading
              label="Perché sceglierci"
              title="Qualità ed Innovazione"
              subtitle="La nostra mission è la vostra sicurezza: siamo attrezzati per qualsiasi tipo di intervento."
              center
            />
          </AnimatedSection>
          <AnimatedSection variants={stagger}>
            <div className={styles.featuresGrid}>
              {FEATURES.map((feat, i) => {
                const Icon = feat.icon;
                return (
                  <AnimatedSection key={feat.title} variants={fadeUp}>
                    <div className={styles.featureCard}>
                      <div className={styles.featureIconWrapper}>
                        <Icon size={24} className={styles.featureIcon} />
                      </div>
                      <h3 className={styles.featureTitle}>{feat.title}</h3>
                      <p className={styles.featureText}>{feat.text}</p>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* TEXA Highlight - Dark section */}
      <section className={styles.texa}>
        <div className={styles.container}>
          <AnimatedSection>
            <div className={styles.texaGrid}>
              <div className={styles.texaContent}>
                <span className={styles.texaBadge}>Tecnologia</span>
                <h2 className={styles.texaTitle}>
                  Stazione diagnostica TEXA&nbsp;IDC5
                </h2>
                <p className={styles.texaText}>
                  A disposizione di tutti i nostri clienti mettiamo il sistema
                  TEXA IDC5, che oltre a ricaricare velocemente l&apos;impianto
                  di climatizzazione della vettura, dispone di un rilevatore di
                  precisione di perdite di gas refrigerante, permettendo una
                  rapida risoluzione dei guasti.
                </p>
                <ul className={styles.texaChecks}>
                  <li>
                    <span className={styles.texaCheckDot}>
                      <Check size={12} />
                    </span>
                    Ricarica veloce climatizzazione
                  </li>
                  <li>
                    <span className={styles.texaCheckDot}>
                      <Check size={12} />
                    </span>
                    Rilevatore perdite gas refrigerante
                  </li>
                  <li>
                    <span className={styles.texaCheckDot}>
                      <Check size={12} />
                    </span>
                    Diagnosi computerizzata multimarca
                  </li>
                </ul>
              </div>
              <div className={styles.texaVisual}>
                <div className={styles.texaImageWrap}>
                  <Image
                    src="/diagnostica.jpg"
                    alt="Stazione diagnostica TEXA IDC5"
                    fill
                    className={styles.texaImg}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Servizi Grid */}
      <section className={styles.services}>
        <div className={styles.container}>
          <AnimatedSection>
            <SectionHeading
              label="I nostri servizi"
              title="Cosa Possiamo Fare Per Voi"
              subtitle="Servizi completi per auto, furgoni, camper e caravan"
              center
            />
          </AnimatedSection>
          <ServiceGrid />
          <AnimatedSection>
            <p className={styles.ricambiNote}>
              Romauto è a vostra disposizione anche per fornirvi i giusti{' '}
              <Link href="/ricambi-auto" className={styles.ricambiLink}>
                pezzi di ricambio
              </Link>{' '}
              per le vostre riparazioni.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <BottomCTA />
    </>
  );
}
