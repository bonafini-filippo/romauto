'use client';

import Link from 'next/link';
import { useCookieConsent } from '@/context/CookieConsentContext';
import styles from './CookieBanner.module.css';

export function CookieBanner() {
  const { consent, setConsent } = useCookieConsent();

  if (consent !== null) return null;

  return (
    <>
      <div className={styles.overlay} aria-hidden="true" />
      <div className={styles.banner} role="dialog" aria-label="Consenso cookie">
        <div className={styles.content}>
          <span className={styles.icon} aria-hidden="true">&#127850;</span>
          <div className={styles.textBlock}>
            <p className={styles.title}>Questo sito utilizza i cookie</p>
            <p className={styles.description}>
              Utilizziamo cookie tecnici per il funzionamento del sito e cookie di terze parti
              (Google Maps) per mostrare la mappa interattiva. Puoi scegliere se accettare tutti
              i cookie o solo quelli necessari.{' '}
              <Link href="/cookie-policy" className={styles.policyLink}>
                Cookie Policy
              </Link>
            </p>
          </div>
        </div>
        <div className={styles.actions}>
          <button
            type="button"
            className={styles.btnNecessary}
            onClick={() => setConsent('necessary')}
          >
            Solo necessari
          </button>
          <button
            type="button"
            className={styles.btnAccept}
            onClick={() => setConsent('all')}
          >
            Accetta tutti
          </button>
        </div>
      </div>
    </>
  );
}
