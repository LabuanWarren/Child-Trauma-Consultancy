import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLenis } from 'lenis/react';
import Logo from './Logo';
import Button from './Button';
import { EMAIL } from '../utils/seo';
import './Navbar.css';

const MotionDiv = motion.div;

const navLinks = [
  { name: 'Services', href: '#services' },
  { name: 'Resources', href: '#resources' },
  { name: 'Who We Serve', href: '#who-we-serve' },
  { name: 'Why Us', href: '#why-us' },
  { name: 'About', href: '#about' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lenis = useLenis();

  useLenis(
    useCallback(({ scroll }) => {
      setIsScrolled(scroll > 24);
    }, []),
  );

  useEffect(() => {
    if (!lenis) return undefined;

    if (isMobileMenuOpen) {
      lenis.stop();
    } else {
      lenis.start();
    }

    return undefined;
  }, [isMobileMenuOpen, lenis]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav
      className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}
      aria-label="Primary navigation"
    >
      <div className="navbar__shell">
      <div className="navbar__inner">
        <a href="#" className="navbar__brand" aria-label="Child Trauma Consultancy home">
          <Logo />
        </a>

        <div className="navbar__links" role="list">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="navbar__link"
              role="listitem"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="navbar__actions">
          <Button href={`mailto:${EMAIL}`} variant="primary" size="sm">
            Reach Out
          </Button>
        </div>

        <button
          type="button"
          className="navbar__menu-btn"
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
        >
          <span className={`navbar__hamburger ${isMobileMenuOpen ? 'is-active' : ''}`} />
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <MotionDiv
            id="mobile-menu"
            className="navbar__mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="navbar__mobile-link"
                onClick={closeMobileMenu}
              >
                {link.name}
              </a>
            ))}
            <Button
              href={`mailto:${EMAIL}`}
              variant="primary"
              size="sm"
              onClick={closeMobileMenu}
            >
              Reach Out
            </Button>
          </MotionDiv>
        )}
      </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
