'use client';

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react';

export type CookieConsent = 'all' | 'necessary' | null;

interface CookieConsentContextValue {
  consent: CookieConsent;
  setConsent: (value: CookieConsent) => void;
  resetConsent: () => void;
}

const STORAGE_KEY = 'romauto-cookie-consent';

const noop = () => {};
const defaultValue: CookieConsentContextValue = { consent: null, setConsent: noop, resetConsent: noop };

const CookieConsentContext = createContext<CookieConsentContextValue>(defaultValue);

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsentState] = useState<CookieConsent>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'all' || stored === 'necessary') {
      setConsentState(stored);
    }
    setLoaded(true);
  }, []);

  const setConsent = useCallback((value: CookieConsent) => {
    setConsentState(value);
    if (value) {
      localStorage.setItem(STORAGE_KEY, value);
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  const resetConsent = useCallback(() => {
    setConsentState(null);
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  return (
    <CookieConsentContext.Provider value={loaded ? { consent, setConsent, resetConsent } : defaultValue}>
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  return useContext(CookieConsentContext);
}
