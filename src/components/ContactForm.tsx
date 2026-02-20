'use client';

import { useState, type FormEvent } from 'react';
import Link from 'next/link';
import { Send, User, Mail, Phone, MessageSquare, Loader2 } from 'lucide-react';
import styles from './ContactForm.module.css';

interface FormData {
  nome: string;
  email: string;
  telefono: string;
  messaggio: string;
}

interface FormErrors {
  nome?: string;
  email?: string;
  messaggio?: string;
  privacy?: string;
}

export function ContactForm() {
  const [data, setData] = useState<FormData>({
    nome: '',
    email: '',
    telefono: '',
    messaggio: '',
  });
  const [privacy, setPrivacy] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  function validate(): FormErrors {
    const errs: FormErrors = {};
    if (!data.nome.trim()) errs.nome = 'Il nome è obbligatorio';
    if (!data.email.trim()) {
      errs.email = "L'email è obbligatoria";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errs.email = 'Inserisci un indirizzo email valido';
    }
    if (!data.messaggio.trim()) errs.messaggio = 'Il messaggio è obbligatorio';
    if (!privacy) errs.privacy = 'Devi accettare la Privacy Policy per inviare il messaggio';
    return errs;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setSending(true);
    // Placeholder: integrate email service here
    await new Promise((r) => setTimeout(r, 1000));
    setSending(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className={styles.success}>
        Grazie per averci contattato! Vi risponderemo al più presto.
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.row}>
        <div className={styles.field}>
          <div className={styles.inputWrapper}>
            <User size={16} className={styles.fieldIcon} />
            <input
              type="text"
              className={styles.input}
              placeholder="Il tuo nome"
              value={data.nome}
              onChange={(e) => setData({ ...data, nome: e.target.value })}
              id="contact-nome"
            />
            <label className={styles.label} htmlFor="contact-nome">
              Nome <span className={styles.required}>*</span>
            </label>
          </div>
          {errors.nome && <span className={styles.error}>{errors.nome}</span>}
        </div>
        <div className={styles.field}>
          <div className={styles.inputWrapper}>
            <Mail size={16} className={styles.fieldIcon} />
            <input
              type="email"
              className={styles.input}
              placeholder="La tua email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              id="contact-email"
            />
            <label className={styles.label} htmlFor="contact-email">
              Email <span className={styles.required}>*</span>
            </label>
          </div>
          {errors.email && <span className={styles.error}>{errors.email}</span>}
        </div>
      </div>

      <div className={styles.field}>
        <div className={styles.inputWrapper}>
          <Phone size={16} className={styles.fieldIcon} />
          <input
            type="tel"
            className={styles.input}
            placeholder="Il tuo numero (opzionale)"
            value={data.telefono}
            onChange={(e) => setData({ ...data, telefono: e.target.value })}
            id="contact-telefono"
          />
          <label className={styles.label} htmlFor="contact-telefono">
            Telefono
          </label>
        </div>
      </div>

      <div className={styles.field}>
        <div className={`${styles.inputWrapper} ${styles.textareaWrapper}`}>
          <MessageSquare size={16} className={`${styles.fieldIcon} ${styles.fieldIconTextarea}`} />
          <textarea
            className={styles.textarea}
            placeholder="Come possiamo aiutarti?"
            value={data.messaggio}
            onChange={(e) => setData({ ...data, messaggio: e.target.value })}
            id="contact-messaggio"
          />
          <label className={styles.labelTextarea} htmlFor="contact-messaggio">
            Messaggio <span className={styles.required}>*</span>
          </label>
        </div>
        {errors.messaggio && (
          <span className={styles.error}>{errors.messaggio}</span>
        )}
      </div>

      <div className={styles.checkboxField}>
        <label className={styles.checkboxLabel}>
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={privacy}
            onChange={(e) => setPrivacy(e.target.checked)}
          />
          <span className={styles.checkboxCustom} aria-hidden="true" />
          <span className={styles.checkboxText}>
            Ho letto e accetto la{' '}
            <Link href="/privacy-policy" target="_blank" className={styles.privacyLink}>
              Privacy Policy
            </Link>{' '}
            e acconsento al trattamento dei miei dati personali ai sensi dell&apos;art. 13 del GDPR
            <span className={styles.required}> *</span>
          </span>
        </label>
        {errors.privacy && <span className={styles.error}>{errors.privacy}</span>}
      </div>

      <button type="submit" className={styles.submit} disabled={sending}>
        {sending ? (
          <Loader2 size={18} className={styles.spinner} />
        ) : (
          <Send size={18} />
        )}
        {sending ? 'Invio in corso...' : 'Invia Messaggio'}
      </button>
    </form>
  );
}
