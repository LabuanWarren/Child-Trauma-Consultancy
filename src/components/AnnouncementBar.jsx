import { useEffect, useState } from 'react';
import Button from './Button';
import './AnnouncementBar.css';

const STORAGE_KEY = 'ctc-announcement-dismissed';
const REVEAL_DELAY_MS = 2000;
const TRANSITION_MS = 500;

const CloseIcon = () => (
  <svg
    className="announcement__close-icon"
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    aria-hidden="true"
  >
    <path d="M1 1L11 11" stroke="currentColor" strokeWidth="1.35" />
    <path d="M11 1L1 11" stroke="currentColor" strokeWidth="1.35" />
  </svg>
);

const AnnouncementBar = () => {
  const [isDismissed, setIsDismissed] = useState(() => {
    if (typeof window === 'undefined') return false;
    localStorage.removeItem(STORAGE_KEY);
    return sessionStorage.getItem(STORAGE_KEY) === 'true';
  });
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(() => {
    if (typeof window === 'undefined') return true;
    return sessionStorage.getItem(STORAGE_KEY) !== 'true';
  });

  useEffect(() => {
    if (isDismissed) return undefined;

    const timer = window.setTimeout(() => {
      setIsVisible(true);
    }, REVEAL_DELAY_MS);

    return () => window.clearTimeout(timer);
  }, [isDismissed]);

  const handleClose = () => {
    setIsVisible(false);

    window.setTimeout(() => {
      sessionStorage.setItem(STORAGE_KEY, 'true');
      setIsDismissed(true);
      setIsMounted(false);
    }, TRANSITION_MS);
  };

  if (!isMounted) return null;

  return (
    <section
      className={`announcement${isVisible ? ' announcement--visible' : ''}`}
      aria-label="Upcoming training sessions"
    >
      <div className="announcement__card">
        <img
          className="announcement__image"
          src="/assets/announcement/webinar.webp"
          alt=""
          width={169}
          height={145}
          loading="eager"
          decoding="async"
          aria-hidden="true"
        />

        <div className="announcement__main">
          <div className="announcement__content">
            <h2 className="announcement__title">
              Learn to Respond, Not React—In Real Time.
            </h2>
            <p className="announcement__subtitle">
              Recurring Monthly Sessions
              <br />
              Limited to 100 Seats
            </p>
          </div>

          <Button href="#contact" variant="secondary" className="announcement__cta">
            Reserve Your Seat
          </Button>
        </div>

        <button
          type="button"
          className="announcement__close"
          onClick={handleClose}
          aria-label="Close announcement"
        >
          <CloseIcon />
        </button>
      </div>
    </section>
  );
};

export default AnnouncementBar;
