import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <div className={styles.page}>
      <div>
        <div className={styles.code}>404</div>
        <h1 className={styles.title}>Pagina non trovata</h1>
        <p className={styles.text}>
          La pagina che stai cercando non esiste o è stata spostata.
        </p>
        <Link href="/" className={styles.link}>
          <ArrowLeft size={18} />
          Torna alla Home
        </Link>
      </div>
    </div>
  );
}
