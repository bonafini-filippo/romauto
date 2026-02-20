import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { BUSINESS } from '@/lib/constants';
import { createMetadata } from '@/lib/metadata';
import styles from './page.module.css';

export const metadata: Metadata = createMetadata({
  title: 'Privacy Policy',
  description:
    'Informativa sulla privacy ai sensi dell\'art. 13 del GDPR per il sito di Autofficina Romauto a Faenza (RA).',
  path: '/privacy-policy',
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        subtitle="Informativa sul trattamento dei dati personali ai sensi dell'art. 13 del Regolamento UE 2016/679 (GDPR)"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Privacy Policy' },
        ]}
        accent="blue"
      />

      <section className={styles.legal}>
        <h2>1. Titolare del Trattamento</h2>
        <p>
          Il Titolare del trattamento dei dati personali è <strong>{BUSINESS.name} di {BUSINESS.founder}</strong>,
          con sede in {BUSINESS.address.full}.
        </p>
        <ul>
          <li><strong>Email:</strong> <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a></li>
          <li><strong>Telefono:</strong> <a href={BUSINESS.phoneHref}>{BUSINESS.phone}</a></li>
          <li><strong>Partita IVA:</strong> {BUSINESS.piva}</li>
        </ul>

        <h2>2. Tipi di Dati Raccolti</h2>
        <p>Il sito raccoglie le seguenti categorie di dati personali:</p>
        <ul>
          <li>
            <strong>Dati di navigazione:</strong> indirizzo IP, tipo di browser, sistema operativo,
            pagine visitate, data e ora di accesso. Questi dati sono raccolti automaticamente
            durante la navigazione del sito.
          </li>
          <li>
            <strong>Dati forniti volontariamente tramite il form di contatto:</strong> nome,
            indirizzo email, numero di telefono (opzionale) e messaggio.
          </li>
          <li>
            <strong>Cookie:</strong> il sito utilizza cookie tecnici e, previo consenso, cookie
            di terze parti. Per maggiori informazioni, consulta la{' '}
            <Link href="/cookie-policy">Cookie Policy</Link>.
          </li>
        </ul>

        <h2>3. Finalità del Trattamento</h2>
        <p>I dati personali sono trattati per le seguenti finalità:</p>
        <ul>
          <li>Rispondere alle richieste inviate tramite il form di contatto</li>
          <li>Garantire il corretto funzionamento tecnico del sito</li>
          <li>Adempiere ad obblighi di legge o regolamentari</li>
          <li>Visualizzare la mappa interattiva della sede tramite Google Maps (previo consenso)</li>
        </ul>

        <h2>4. Base Giuridica del Trattamento</h2>
        <p>Il trattamento dei dati è basato su:</p>
        <ul>
          <li>
            <strong>Consenso dell&apos;interessato (art. 6, par. 1, lett. a, GDPR):</strong> per
            l&apos;invio del form di contatto e per l&apos;utilizzo di cookie di terze parti (Google Maps).
          </li>
          <li>
            <strong>Legittimo interesse del Titolare (art. 6, par. 1, lett. f, GDPR):</strong> per
            il corretto funzionamento del sito e la raccolta dei dati di navigazione.
          </li>
        </ul>

        <h2>5. Modalità di Trattamento</h2>
        <p>
          I dati personali sono trattati con strumenti informatici e telematici, con logiche
          strettamente correlate alle finalità sopra indicate e, comunque, in modo da garantire
          la sicurezza e la riservatezza dei dati stessi. Il trattamento avviene nel rispetto
          dei principi di liceità, correttezza, trasparenza, limitazione delle finalità,
          minimizzazione dei dati, esattezza, limitazione della conservazione, integrità e
          riservatezza.
        </p>

        <h2>6. Comunicazione dei Dati</h2>
        <p>
          I dati personali <strong>non vengono venduti a terzi</strong>. Possono essere comunicati a:
        </p>
        <ul>
          <li>Provider di hosting per l&apos;erogazione del servizio web</li>
          <li>Servizio di posta elettronica per la gestione delle richieste di contatto</li>
          <li>
            <strong>Google LLC</strong> (per il servizio Google Maps), solo previo consenso
            dell&apos;utente. I dati possono essere trasferiti negli USA. Google aderisce al Data Privacy
            Framework UE-USA. Informativa privacy di Google:{' '}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
              policies.google.com/privacy
            </a>
          </li>
        </ul>

        <h2>7. Periodo di Conservazione</h2>
        <ul>
          <li>
            <strong>Dati del form di contatto:</strong> conservati per un massimo di 12 mesi
            dalla ricezione, dopodiché vengono cancellati.
          </li>
          <li>
            <strong>Dati di navigazione:</strong> conservati per un massimo di 7 giorni.
          </li>
          <li>
            <strong>Preferenza cookie:</strong> la scelta relativa al consenso cookie è conservata
            nel localStorage del browser per 12 mesi.
          </li>
        </ul>

        <h2>8. Diritti dell&apos;Interessato</h2>
        <p>
          Ai sensi degli articoli 15-22 del GDPR, l&apos;interessato ha diritto di:
        </p>
        <ul>
          <li>Accedere ai propri dati personali (art. 15)</li>
          <li>Ottenere la rettifica dei dati inesatti (art. 16)</li>
          <li>Ottenere la cancellazione dei dati (&ldquo;diritto all&apos;oblio&rdquo;, art. 17)</li>
          <li>Ottenere la limitazione del trattamento (art. 18)</li>
          <li>Ricevere i dati in un formato strutturato (portabilità, art. 20)</li>
          <li>Opporsi al trattamento (art. 21)</li>
          <li>Revocare il consenso in qualsiasi momento (art. 7)</li>
        </ul>
        <p>
          Per esercitare tali diritti, è possibile contattare il Titolare all&apos;indirizzo email{' '}
          <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>.
        </p>
        <p>
          L&apos;interessato ha inoltre il diritto di proporre reclamo all&apos;Autorità Garante per la
          protezione dei dati personali:{' '}
          <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer">
            www.garanteprivacy.it
          </a>
        </p>

        <h2>9. Cookie</h2>
        <p>
          Per informazioni dettagliate sui cookie utilizzati dal sito, sulle finalità e sulle
          modalità di gestione, si prega di consultare la{' '}
          <Link href="/cookie-policy">Cookie Policy</Link>.
        </p>

        <h2>10. Modifiche alla presente informativa</h2>
        <p>
          Il Titolare si riserva il diritto di apportare modifiche alla presente informativa
          in qualsiasi momento, dandone pubblicità agli utenti su questa pagina. Si prega
          pertanto di consultare periodicamente questa pagina.
        </p>

        <p className={styles.lastUpdate}>
          Ultimo aggiornamento: 20 febbraio 2026
        </p>
      </section>
    </>
  );
}
