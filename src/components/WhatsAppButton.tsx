'use client';

import { MessageCircle } from 'lucide-react';
import { BUSINESS } from '@/lib/constants';
import styles from './WhatsAppButton.module.css';

export function WhatsAppButton() {
  return (
    <a
      href={BUSINESS.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.whatsapp}
      aria-label="Contattaci su WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
}
