import type { Metadata } from 'next';
import { BUSINESS } from './constants';

const BASE_URL = BUSINESS.website;

export function createMetadata({
  title,
  description,
  path = '',
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const fullTitle = title === 'Home'
    ? `${BUSINESS.name} | Meccanico, Elettrauto, Gommista a Faenza`
    : `${title} | ${BUSINESS.name}`;

  return {
    title: fullTitle,
    description,
    openGraph: {
      title: fullTitle,
      description,
      url: `${BASE_URL}${path}`,
      siteName: BUSINESS.name,
      locale: 'it_IT',
      type: 'website',
    },
    alternates: {
      canonical: `${BASE_URL}${path}`,
    },
  };
}
