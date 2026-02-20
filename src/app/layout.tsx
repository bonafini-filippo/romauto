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
  icons: {
    icon: '/icon.png',
    shortcut: '/favicon.ico',
    apple: '/icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className={`${spaceGrotesk.variable} ${inter.variable}`}>
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
