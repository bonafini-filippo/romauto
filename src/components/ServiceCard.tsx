import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import type { ServiceDefinition } from '@/lib/services';
import styles from './ServiceCard.module.css';

interface ServiceCardProps {
  service: ServiceDefinition;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <Link href={service.href} className={styles.card}>
      {/* Full background image */}
      <Image
        src={service.image}
        alt={service.title}
        fill
        className={styles.bg}
        sizes="(max-width: 768px) 100vw, 50vw"
      />

      {/* Gradient overlay — stronger at bottom */}
      <div className={styles.overlay} />

      {/* Icon top-left */}
      <div className={styles.iconBadge}>
        <Icon size={20} />
      </div>

      {/* Content pinned to bottom */}
      <div className={styles.content}>
        <h3 className={styles.title}>{service.title}</h3>
        <p className={styles.description}>{service.shortDescription}</p>
        <span className={styles.link}>
          Scopri di pi&ugrave;
          <ArrowRight size={15} className={styles.arrow} />
        </span>
      </div>
    </Link>
  );
}
