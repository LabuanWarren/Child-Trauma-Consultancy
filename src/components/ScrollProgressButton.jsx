import { useCallback, useEffect, useRef, useState } from 'react';
import { useLenis } from 'lenis/react';
import './ScrollProgressButton.css';

const SIZE = 52;
const STROKE = 2.5;
const RADIUS = (SIZE - STROKE) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const ArrowUpIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <path
      d="M9 14V4M9 4l-4 4M9 4l4 4"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ScrollProgressButton = () => {
  const indicatorRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const lenis = useLenis();

  const applyScroll = useCallback(({ scroll, limit, progress }) => {
    const nextProgress =
      typeof progress === 'number'
        ? progress
        : limit > 0
          ? scroll / limit
          : 0;

    if (indicatorRef.current) {
      indicatorRef.current.style.strokeDashoffset = `${CIRCUMFERENCE * (1 - nextProgress)}`;
    }

    setIsVisible((prev) => {
      const next = scroll > 240;
      return prev === next ? prev : next;
    });
  }, []);

  useLenis(applyScroll);

  useEffect(() => {
    if (!lenis) return undefined;
    applyScroll(lenis);
  }, [lenis, applyScroll]);

  const handleClick = () => {
    if (lenis) {
      lenis.scrollTo(0, {
        duration: 1.15,
        lock: true,
        force: true,
        onComplete: (instance) => {
          instance.scrollTo(0, { immediate: true, force: true });
        },
      });
      return;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      className={`scroll-progress-btn${isVisible ? ' scroll-progress-btn--visible' : ''}`}
      onClick={handleClick}
      aria-label="Scroll to top"
      aria-hidden={!isVisible}
      tabIndex={isVisible ? 0 : -1}
    >
      <svg
        className="scroll-progress-btn__ring"
        width={SIZE}
        height={SIZE}
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        aria-hidden="true"
      >
        <circle
          className="scroll-progress-btn__track"
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={RADIUS}
        />
        <circle
          ref={indicatorRef}
          className="scroll-progress-btn__indicator"
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={RADIUS}
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={CIRCUMFERENCE}
        />
      </svg>
      <span className="scroll-progress-btn__icon">
        <ArrowUpIcon />
      </span>
    </button>
  );
};

export default ScrollProgressButton;
