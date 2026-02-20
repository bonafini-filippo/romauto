export const BUSINESS = {
  name: 'Autofficina Romauto',
  shortName: 'Romauto',
  founder: 'Damiano Romanelli',
  foundedYear: 2016,
  experienceYears: '30+',
  address: {
    street: 'Via Vittori, 175',
    cap: '48018',
    city: 'Faenza',
    province: 'RA',
    region: 'Provincia di Ravenna',
    full: 'Via Vittori, 175 - 48018 Faenza (RA)',
  },
  phone: '+39 0546 622686',
  phoneHref: 'tel:+390546622686',
  mobile: '+39 333 2160949',
  mobileHref: 'tel:+393332160949',
  whatsapp: '393332160949',
  whatsappHref: 'https://wa.me/393332160949',
  email: 'romanellid@romauto.org',
  website: 'https://www.autofficinaromauto.it',
  piva: 'P.I. 02551380393',
  orari: {
    feriali: 'Lun - Ven: 8:00 - 12:30 / 14:30 - 18:30',
    sabato: 'Sabato: 8:00 - 12:30',
    domenica: 'Domenica: Chiuso',
  },
  maps: {
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2845.0!2d11.88!3d44.28!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDE2JzQ4LjAiTiAxMcKwNTInNDguMCJF!5e0!3m2!1sit!2sit!4v1700000000000',
    linkUrl: 'https://maps.google.com/?q=Via+Vittori+175+Faenza+RA',
  },
} as const;

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Servizi',
    href: '/servizi',
    children: [
      { label: 'Meccanico', href: '/servizi/meccanico' },
      { label: 'Elettrauto', href: '/servizi/elettrauto' },
      { label: 'Gommista', href: '/servizi/gommista' },
      { label: 'Servizio Camper', href: '/servizi/servizio-camper' },
    ],
  },
  { label: 'Ricambi Auto', href: '/ricambi-auto' },
  { label: 'Contatti', href: '/contatti' },
];
