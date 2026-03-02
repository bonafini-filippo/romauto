import type { Metadata } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { SmoothScroll } from '@/components/SmoothScroll';
import { ScrollProgress } from '@/components/ScrollProgress';
import { GrainOverlay } from '@/components/GrainOverlay';
import { CookieConsentProvider } from '@/context/CookieConsentContext';
import { CookieBanner } from '@/components/CookieBanner';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: {
    default: 'Autofficina Romauto | Meccanico, Elettrauto, Gommista a Faenza',
    template: '%s | Autofficina Romauto | Faenza, Ravenna',
  },
  description:
    'Autofficina Romauto a Faenza (RA). Dal 2016 il punto di riferimento per automobilisti e camperisti. Servizi di Meccanico, Elettrauto, Gommista e Ricambi.',
  keywords: [
    'Autofficina Faenza',
    'Meccanico Faenza',
    'Elettrauto Faenza',
    'Gommista Faenza',
    'Servizio Camper',
    'Ricambi Auto Faenza',
    'Tagliando Faenza',
    'Revisioni Faenza',
    'Ravenna',
    'Romauto',
  ],
  authors: [{ name: 'Damiano Romanelli' }],
  creator: 'Autofficina Romauto',
  publisher: 'Autofficina Romauto',
  robots: { index: true, follow: true },
  metadataBase: new URL('https://www.autofficinaromauto.it'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    siteName: 'Autofficina Romauto',
    title: 'Autofficina Romauto | Servizi per Auto e Camper a Faenza',
    description: 'Il tuo riferimento a Faenza (RA) per Meccanico, Elettrauto, Gommista e Riparazione Camper. Scopri i nostri servizi.',
    url: 'https://www.autofficinaromauto.it/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Autofficina Romauto | Faenza',
    description: 'Esperti in riparazioni auto, elettrauto e cambio gomme a Faenza.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AutoRepair',
    name: 'Autofficina Romauto',
    image: 'https://www.autofficinaromauto.it/hero.jpg',
    url: 'https://www.autofficinaromauto.it',
    telephone: '+390546622686',
    email: 'romanellid@romauto.org',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Via Vittori, 175',
      addressLocality: 'Faenza',
      addressRegion: 'RA',
      postalCode: '48018',
      addressCountry: 'IT',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 44.28,
      longitude: 11.88,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:30',
        closes: '12:30',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '14:30',
        closes: '18:30',
      },
    ],
    priceRange: '$$',
    description:
      'Autofficina Romauto a Faenza: meccanico, elettrauto, gommista e servizio camper. Oltre 25 anni di esperienza.',
  };

  return (
    <html lang="it">
      <body className={`${spaceGrotesk.variable} ${inter.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <CookieConsentProvider>
          <SmoothScroll />
          <ScrollProgress />
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
          <GrainOverlay />
          <CookieBanner />
        </CookieConsentProvider>
      </body>
    </html>
  );
}
