import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import styles from './PageHero.module.css';

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs: Breadcrumb[];
  accent?: 'red' | 'blue';
}

export function PageHero({ title, subtitle, breadcrumbs, accent = 'red' }: PageHeroProps) {
  return (
    <section className={styles.pageHero}>
      <div
        className={`${styles.accent} ${
          accent === 'red' ? styles.accentRed : styles.accentBlue
        }`}
      />

      <div className={styles.content}>
        <nav
          className={styles.breadcrumbs}
          aria-label="Breadcrumb"
        >
          {breadcrumbs.map((crumb, i) => (
            <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              {i > 0 && <ChevronRight size={14} className={styles.breadcrumbSep} />}
              {crumb.href ? (
                <Link href={crumb.href} className={styles.breadcrumbLink}>
                  {crumb.label}
                </Link>
              ) : (
                <span className={styles.breadcrumbCurrent}>{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>

        <h1 className={styles.title}>
          {title}
        </h1>

        {subtitle && (
          <p className={styles.subtitle}>
            {subtitle}
          </p>
        )}
      </div>

      <div className={styles.bottomLine} />
    </section>
  );
}
