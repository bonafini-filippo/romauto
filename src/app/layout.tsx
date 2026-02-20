import type { Metadata } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { SmoothScroll } from '@/components/SmoothScroll';
import { ScrollProgress } from '@/components/ScrollProgress';
import { GrainOverlay } from '@/components/GrainOverlay';
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
    template: '%s | Autofficina Romauto',
  },
  description:
    'Autofficina Romauto a Faenza (RA): meccanico, elettrauto, gommista e servizio camper. Oltre 30 anni di esperienza. Diagnosi TEXA, tagliandi, ricambi auto.',
  keywords: [
    'autofficina faenza',
    'meccanico faenza',
    'elettrauto faenza',
    'gommista faenza',
    'officina camper faenza',
    'tagliando auto faenza',
    'ricambi auto faenza',
    'romauto',
  ],
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    siteName: 'Autofficina Romauto',
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
        <SmoothScroll />
        <ScrollProgress />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <GrainOverlay />
      </body>
    </html>
  );
}
