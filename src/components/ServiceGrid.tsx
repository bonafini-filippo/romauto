import { SERVICES } from '@/lib/services';
import { AnimatedSection } from './AnimatedSection';
import { ServiceCard } from './ServiceCard';
import styles from './ServiceGrid.module.css';

export function ServiceGrid() {
  return (
    <div className={styles.grid}>
      {SERVICES.map((service) => (
        <AnimatedSection key={service.slug}>
          <ServiceCard service={service} />
        </AnimatedSection>
      ))}
    </div>
  );
}
