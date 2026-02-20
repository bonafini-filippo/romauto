import { Check } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';
import styles from './ServiceFeatureList.module.css';

interface ServiceFeatureListProps {
  features: string[];
  color?: 'red' | 'blue';
}

export function ServiceFeatureList({
  features,
  color = 'red',
}: ServiceFeatureListProps) {
  return (
    <div className={styles.grid}>
      {features.map((feature, i) => (
        <AnimatedSection key={i}>
          <div className={styles.item}>
            <div className={styles.iconWrapper}>
              <div
                className={`${styles.icon} ${
                  color === 'red' ? styles.iconRed : styles.iconBlue
                }`}
              >
                <Check size={20} />
              </div>
            </div>
            <span className={styles.text}>{feature}</span>
          </div>
        </AnimatedSection>
      ))}
    </div>
  );
}
