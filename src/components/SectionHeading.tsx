import styles from './SectionHeading.module.css';

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

export function SectionHeading({ label, title, subtitle, center }: SectionHeadingProps) {
  return (
    <div className={`${styles.wrapper} ${center ? styles.wrapperCenter : ''}`}>
      {label && (
        <div className={styles.label}>
          <span className={styles.labelBar} />
          {label}
        </div>
      )}
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}
