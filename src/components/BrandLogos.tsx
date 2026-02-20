import { CircleDot } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';
import { SectionHeading } from './SectionHeading';
import styles from './BrandLogos.module.css';

const BRANDS = ['Michelin', 'Pirelli', 'Continental', 'Bridgestone'];

export function BrandLogos() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <AnimatedSection>
          <SectionHeading
            label="I nostri marchi"
            title="I Migliori Pneumatici"
            subtitle="Vasto assortimento dei migliori marchi per garantirvi una tenuta di strada perfetta"
            center
          />
        </AnimatedSection>
        <div className={styles.grid}>
          {BRANDS.map((brand) => (
            <AnimatedSection key={brand}>
              <div className={styles.brand}>
                <CircleDot size={28} className={styles.brandIcon} />
                <span className={styles.separator} />
                <span className={styles.brandName}>{brand}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection>
          <p className={styles.note}>
            Per garantirvi una tenuta di strada perfetta a prezzi ottimi, con tante offerte
            e promozioni.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
