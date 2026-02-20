import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { BUSINESS, NAV_ITEMS } from '@/lib/constants';
import { SERVICES } from '@/lib/services';
import { CookieSettingsButton } from './CookieSettingsButton';
import styles from './Footer.module.css';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          {/* Brand Column */}
          <div className={styles.brand}>
            <Image
              src="/logo-romauto.png"
              alt="Autofficina Romauto"
              width={140}
              height={36}
              className={styles.brandLogo}
            />
            <p className={styles.brandDescription}>
              Oltre {BUSINESS.experienceYears} anni di esperienza al servizio dei vostri veicoli.
              Meccanico, elettrauto, gommista e servizio camper a Faenza.
            </p>
            <div className={styles.socialRow}>
              <a
                href="#"
                aria-label="Facebook"
                className={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Servizi */}
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Servizi</h3>
            {SERVICES.map((service) => (
              <Link key={service.slug} href={service.href} className={styles.columnLink}>
                {service.title}
              </Link>
            ))}
            <Link href="/ricambi-auto" className={styles.columnLink}>
              Ricambi Auto
            </Link>
          </div>

          {/* Links */}
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Navigazione</h3>
            {NAV_ITEMS.filter((i) => !i.children).map((item) => (
              <Link key={item.href} href={item.href} className={styles.columnLink}>
                {item.label}
              </Link>
            ))}
          </div>

          {/* Contatti */}
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Contatti</h3>
            <div className={styles.contactItem}>
              <MapPin size={16} className={styles.contactIcon} />
              <span>{BUSINESS.address.full}</span>
            </div>
            <div className={styles.contactItem}>
              <Phone size={16} className={styles.contactIcon} />
              <div>
                <a href={BUSINESS.phoneHref} className={styles.contactLink}>
                  {BUSINESS.phone}
                </a>
                <br />
                <a href={BUSINESS.mobileHref} className={styles.contactLink}>
                  {BUSINESS.mobile}
                </a>
              </div>
            </div>
            <div className={styles.contactItem}>
              <Mail size={16} className={styles.contactIcon} />
              <a href={`mailto:${BUSINESS.email}`} className={styles.contactLink}>
                {BUSINESS.email}
              </a>
            </div>
            <div className={styles.contactItem}>
              <Clock size={16} className={styles.contactIcon} />
              <div>
                <div>{BUSINESS.orari.feriali}</div>
                <div>{BUSINESS.orari.sabato}</div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            &copy; {currentYear} {BUSINESS.name} &mdash; {BUSINESS.piva}
          </p>
          <div className={styles.legalLinks}>
            <Link href="/privacy-policy" className={styles.legalLink}>
              Privacy Policy
            </Link>
            <span className={styles.legalDot} aria-hidden="true" />
            <Link href="/cookie-policy" className={styles.legalLink}>
              Cookie Policy
            </Link>
            <span className={styles.legalDot} aria-hidden="true" />
            <CookieSettingsButton />
          </div>
        </div>
      </footer>
    </>
  );
}
