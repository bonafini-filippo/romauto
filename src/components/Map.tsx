'use client';

import { useState } from 'react';
import { MapPin, ExternalLink } from 'lucide-react';
import { BUSINESS } from '@/lib/constants';
import { useCookieConsent } from '@/context/CookieConsentContext';
import styles from './Map.module.css';

export function Map() {
  const { consent } = useCookieConsent();
  const [manualLoad, setManualLoad] = useState(false);

  const showMap = consent === 'all' || manualLoad;

  if (showMap) {
    return (
      <div className={styles.wrapper}>
        <iframe
          className={styles.iframe}
          src={BUSINESS.maps.embedUrl}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Mappa Autofficina Romauto"
        />
      </div>
    );
  }

  return (
    <div className={`${styles.wrapper} ${styles.placeholder}`}>
      <div className={styles.placeholderContent}>
        <MapPin size={40} className={styles.placeholderIcon} />
        <p className={styles.placeholderTitle}>Mappa Google Maps</p>
        <p className={styles.placeholderText}>
          Per visualizzare la mappa interattiva è necessario accettare i cookie di terze parti
          (Google Maps).
        </p>
        <button
          type="button"
          className={styles.loadButton}
          onClick={() => setManualLoad(true)}
        >
          <MapPin size={16} />
          Carica Mappa
        </button>
        <a
          href={BUSINESS.maps.linkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.externalLink}
        >
          <ExternalLink size={14} />
          Apri in Google Maps
        </a>
      </div>
    </div>
  );
}
