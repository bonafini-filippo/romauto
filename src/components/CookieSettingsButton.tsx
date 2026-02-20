'use client';

import { useCookieConsent } from '@/context/CookieConsentContext';
import styles from './Footer.module.css';

export function CookieSettingsButton() {
  const { resetConsent } = useCookieConsent();

  return (
    <button type="button" className={styles.legalLink} onClick={resetConsent}>
      Gestisci Cookie
    </button>
  );
}
