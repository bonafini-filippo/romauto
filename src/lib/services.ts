import { Wrench, Zap, CircleDot, Caravan } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface ServiceDefinition {
  title: string;
  slug: string;
  href: string;
  icon: LucideIcon;
  shortDescription: string;
  color: 'red' | 'blue';
  image: string;
}

export const SERVICES: ServiceDefinition[] = [
  {
    title: 'Meccanico',
    slug: 'meccanico',
    href: '/servizi/meccanico',
    icon: Wrench,
    shortDescription:
      'Riparazioni meccaniche, tagliandi e manutenzione per auto, furgoni e camper di qualunque marca e modello.',
    color: 'red',
    image: '/meccanico.png',
  },
  {
    title: 'Elettrauto',
    slug: 'elettrauto',
    href: '/servizi/elettrauto',
    icon: Zap,
    shortDescription:
      'Diagnosi computerizzata TEXA, impianti elettrici, climatizzazione e sanificazione veicoli.',
    color: 'blue',
    image: '/elettrauto.png',
  },
  {
    title: 'Gommista',
    slug: 'gommista',
    href: '/servizi/gommista',
    icon: CircleDot,
    shortDescription:
      'Vendita, riparazione e sostituzione pneumatici dei migliori marchi per auto, furgoni e camper.',
    color: 'red',
    image: '/gomme.png',
  },
  {
    title: 'Servizio Camper',
    slug: 'servizio-camper',
    href: '/servizi/servizio-camper',
    icon: Caravan,
    shortDescription:
      'Manutenzione, revisione e installazione accessori per camper e autocaravan.',
    color: 'blue',
    image: '/camper.png',
  },
];
