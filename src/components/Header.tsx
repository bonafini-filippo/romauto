'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ChevronDown, Phone } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { NAV_ITEMS, BUSINESS } from '@/lib/constants';
import styles from './Header.module.css';

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
    setExpandedMenu(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const isActive = useCallback(
    (href: string) => {
      if (href === '/') return pathname === '/';
      return pathname.startsWith(href);
    },
    [pathname],
  );

  return (
    <>
      <header
        className={`${styles.header} ${scrolled || mobileOpen ? styles.solid : styles.transparent
          }`}
      >
        <nav className={styles.nav}>
          <Link href="/" className={styles.logo}>
            <Image
              src="/logo-romauto.png"
              alt="Autofficina Romauto"
              width={160}
              height={48}
              className={styles.logoImage}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <ul className={styles.navLinks}>
            {NAV_ITEMS.map((item) => (
              <li
                key={item.href}
                className={styles.navItem}
                onMouseEnter={() => item.children && setDropdownOpen(true)}
                onMouseLeave={() => item.children && setDropdownOpen(false)}
              >
                {item.children ? (
                  <>
                    <button
                      className={`${styles.navLink} ${isActive(item.href) ? styles.navLinkActive : ''
                        }`}
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      aria-expanded={dropdownOpen}
                    >
                      {item.label}
                      <ChevronDown
                        className={`${styles.chevron} ${dropdownOpen ? styles.chevronOpen : ''
                          }`}
                      />
                    </button>
                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.div
                          className={styles.dropdown}
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -4 }}
                          transition={{ duration: 0.15 }}
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={styles.dropdownLink}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`${styles.navLink} ${isActive(item.href) ? styles.navLinkActive : ''
                      }`}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <Link href="/contatti" className={styles.navCta}>
            <Phone size={14} />
            Contattaci
          </Link>

          {/* Hamburger */}
          <button
            className={`${styles.hamburger} ${mobileOpen ? styles.hamburgerOpen : ''
              }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Chiudi menu' : 'Apri menu'}
          >
            <span className={styles.hamburgerLine} />
            <span className={styles.hamburgerLine} />
            <span className={styles.hamburgerLine} />
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <div className={styles.mobileOverlayWrapper}>
            {/* Blurred Backdrop */}
            <motion.div
              className={styles.mobileBackdrop}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMobileOpen(false)}
            />

            {/* Slide-out Drawer */}
            <motion.div
              className={styles.mobileDrawer}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3, ease: 'easeOut' }}
            >
              <div className={styles.mobileDrawerHeader}>
                <Image
                  src="/logo-romauto.png"
                  alt="Autofficina Romauto"
                  width={130}
                  height={39}
                  className={styles.logoImage}
                />
                <button
                  className={`${styles.hamburger} ${styles.hamburgerOpen}`}
                  onClick={() => setMobileOpen(false)}
                  aria-label="Chiudi menu"
                >
                  <span className={styles.hamburgerLine} />
                  <span className={styles.hamburgerLine} />
                  <span className={styles.hamburgerLine} />
                </button>
              </div>

              <div className={styles.mobileNavContainer}>
                <ul className={styles.mobileNav}>
                  {NAV_ITEMS.map((item) => (
                    <li key={item.href} className={styles.mobileNavItem}>
                      {item.children ? (
                        <>
                          <button
                            className={`${styles.mobileLink} ${styles.mobileAccordionButton} ${expandedMenu === item.label ? styles.mobileLinkActive : ''
                              }`}
                            onClick={() =>
                              setExpandedMenu(
                                expandedMenu === item.label ? null : item.label,
                              )
                            }
                          >
                            <span>{item.label}</span>
                            <ChevronDown
                              className={`${styles.mobileChevron} ${expandedMenu === item.label ? styles.mobileChevronOpen : ''
                                }`}
                            />
                          </button>
                          <AnimatePresence>
                            {expandedMenu === item.label && (
                              <motion.div
                                className={styles.mobileSubmenuWrapper}
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                              >
                                <div className={styles.mobileSubmenu}>
                                  {item.children.map((child) => (
                                    <Link
                                      key={child.href}
                                      href={child.href}
                                      className={styles.mobileSubLink}
                                      onClick={() => setMobileOpen(false)}
                                    >
                                      {child.label}
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <Link
                          href={item.href}
                          className={`${styles.mobileLink} ${isActive(item.href) ? styles.mobileLinkActive : ''
                            }`}
                          onClick={() => setMobileOpen(false)}
                        >
                          {item.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.mobileDrawerFooter}>
                <a href={BUSINESS.phoneHref} className={styles.mobilePhoneBtn}>
                  <Phone size={18} />
                  Chiama Ora
                </a>
                <p className={styles.mobileAddress}>
                  {BUSINESS.address.street}, {BUSINESS.address.city}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
