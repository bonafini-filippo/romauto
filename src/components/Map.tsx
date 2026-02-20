import { BUSINESS } from '@/lib/constants';
import styles from './Map.module.css';

export function Map() {
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
