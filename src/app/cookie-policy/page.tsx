import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { createMetadata } from '@/lib/metadata';
import styles from './page.module.css';

export const metadata: Metadata = createMetadata({
  title: 'Cookie Policy',
  description:
    'Informativa sui cookie utilizzati dal sito di Autofficina Romauto a Faenza (RA). Tipi di cookie, finalità e gestione.',
  path: '/cookie-policy',
});

export default function CookiePolicyPage() {
  return (
    <>
      <PageHero
        title="Cookie Policy"
        subtitle="Informativa sull'utilizzo dei cookie su questo sito web"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Cookie Policy' },
        ]}
        accent="blue"
      />

      <section className={styles.legal}>
        <h2>1. Cosa sono i Cookie</h2>
        <p>
          I cookie sono piccoli file di testo che i siti web salvano sul dispositivo dell&apos;utente
          (computer, tablet o smartphone) durante la navigazione. Vengono utilizzati per memorizzare
          le preferenze dell&apos;utente e migliorare l&apos;esperienza di navigazione.
        </p>

        <h2>2. Cookie Tecnici (necessari)</h2>
        <p>
          Questo sito utilizza un unico dato tecnico salvato nel <strong>localStorage</strong> del
          browser, necessario per ricordare la scelta dell&apos;utente relativa al consenso cookie:
        </p>
        <ul>
          <li>
            <strong>romauto-cookie-consent</strong> &mdash; memorizza la preferenza di consenso
            cookie dell&apos;utente (&ldquo;all&rdquo; o &ldquo;necessary&rdquo;). Durata: 12 mesi.
            Nessun dato personale viene trasmesso a terzi tramite questo valore.
          </li>
        </ul>

        <h2>3. Cookie di Terze Parti</h2>
        <p>
          Se l&apos;utente accetta tutti i cookie tramite il banner o carica manualmente la mappa,
          viene attivato il servizio <strong>Google Maps</strong> tramite iframe. Google Maps può
          installare i seguenti cookie:
        </p>
        <ul>
          <li>
            <strong>NID</strong> &mdash; cookie di Google utilizzato per memorizzare le preferenze
            e fornire annunci personalizzati. Durata: 6 mesi.
          </li>
          <li>
            <strong>CONSENT</strong> &mdash; cookie di Google che traccia lo stato del consenso
            dell&apos;utente per i servizi Google. Durata: 2 anni.
          </li>
          <li>
            <strong>1P_JAR, APISID, HSID, SAPISID, SID, SSID</strong> &mdash; cookie tecnici
            e di profilazione di Google. Durate variabili.
          </li>
        </ul>
        <p>
          Per maggiori informazioni sui cookie di Google:{' '}
          <a href="https://policies.google.com/technologies/cookies" target="_blank" rel="noopener noreferrer">
            policies.google.com/technologies/cookies
          </a>
        </p>

        <h2>4. Tabella Riepilogativa</h2>
        <table className={styles.cookieTable}>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Tipo</th>
              <th>Finalità</th>
              <th>Durata</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>romauto-cookie-consent</td>
              <td>Tecnico (localStorage)</td>
              <td>Memorizza la preferenza di consenso cookie</td>
              <td>12 mesi</td>
            </tr>
            <tr>
              <td>NID</td>
              <td>Terze parti (Google)</td>
              <td>Preferenze e personalizzazione Google</td>
              <td>6 mesi</td>
            </tr>
            <tr>
              <td>CONSENT</td>
              <td>Terze parti (Google)</td>
              <td>Stato del consenso per servizi Google</td>
              <td>2 anni</td>
            </tr>
            <tr>
              <td>1P_JAR, SID, HSID, ecc.</td>
              <td>Terze parti (Google)</td>
              <td>Funzionamento e sicurezza Google Maps</td>
              <td>Variabile</td>
            </tr>
          </tbody>
        </table>

        <h2>5. Come Gestire i Cookie</h2>
        <p>
          L&apos;utente può gestire le proprie preferenze sui cookie in due modi:
        </p>
        <ul>
          <li>
            <strong>Tramite il banner di consenso:</strong> al primo accesso al sito, è possibile
            scegliere tra &ldquo;Accetta tutti&rdquo; e &ldquo;Solo necessari&rdquo;. Per modificare
            la scelta, cliccare su &ldquo;Gestisci Cookie&rdquo; nel footer del sito.
          </li>
          <li>
            <strong>Tramite le impostazioni del browser:</strong> è possibile bloccare o eliminare
            i cookie direttamente dalle impostazioni del proprio browser. Di seguito i link alle
            guide dei principali browser:
          </li>
        </ul>
        <ul>
          <li>
            <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">
              Google Chrome
            </a>
          </li>
          <li>
            <a href="https://support.mozilla.org/it/kb/protezione-antitracciamento-avanzata-firefox-desktop" target="_blank" rel="noopener noreferrer">
              Mozilla Firefox
            </a>
          </li>
          <li>
            <a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">
              Safari
            </a>
          </li>
          <li>
            <a href="https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">
              Microsoft Edge
            </a>
          </li>
        </ul>

        <h2>6. Ulteriori Informazioni</h2>
        <p>
          Per informazioni sul trattamento dei dati personali, consultare la{' '}
          <Link href="/privacy-policy">Privacy Policy</Link>.
        </p>

        <p className={styles.lastUpdate}>
          Ultimo aggiornamento: 20 febbraio 2026
        </p>
      </section>
    </>
  );
}
