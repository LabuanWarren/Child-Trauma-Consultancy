import { useCallback, useEffect, useId, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import './QuoteCarousel.css';

const MotionDiv = motion.div;

const AUTO_ADVANCE_MS = 7000;
const CARD_GAP = 20;

const getInitials = (name) => {
  if (name.includes('&')) {
    const [left, right] = name.split('&').map((part) => part.trim());
    const leftInitial = left.split(/\s+/)[0]?.[0] ?? '';
    const rightInitial = right.split(/\s+/)[0]?.[0] ?? '';
    return `${leftInitial}${rightInitial}`.toUpperCase();
  }

  const words = name.trim().split(/\s+/);
  if (words.length >= 2) {
    return `${words[0][0]}${words[words.length - 1][0]}`.toUpperCase();
  }

  return words[0]?.slice(0, 2).toUpperCase() ?? '';
};

const endorsements = [
  {
    id: 'rapid-tune',
    headline: 'Thoroughly engaged and came away with actionable strategies.',
    quote:
      'Jaime presented a strong grasp of the material, maintaining engagement through humor and personal experience. All staff came away with a deep appreciation of trauma and strategies to assist. A truly valuable learning experience.',
    author: 'Adam Grant',
    role: 'Rapid Tune Braeside',
    accent: '#FDC6BB',
  },
  {
    id: 'ooh-care',
    headline: 'Immediate, practical strategies we could use right away.',
    quote:
      'Jaime explained the triggers behind complex behaviors and helped us respond through a trauma-informed lens. I feel far more confident, and I\u2019ve already recommended his training to our school leadership.',
    author: 'Andrea Elliott',
    role: 'Carer & Community Advocate',
    accent: '#A3D7C3',
  },
  {
    id: 'early-childhood',
    headline: 'We left feeling empowered to support our most vulnerable.',
    quote:
      'Jaime walked through our environment, identified hidden triggers, and gave us practical tools like \u2018Catch Them Being Good.\u2019 The entire team had \u2018lightbulb\u2019 moments.',
    author: 'Ashton Posch',
    role: 'Educational Leader, Long Day Care Service',
    accent: '#A1E6EB',
  },
  {
    id: 'sector-leadership',
    headline: 'An undeniable vision for positive outcomes.',
    quote:
      'Having known Jaime professionally for nearly two decades, his deep understanding of community and education sectors allows him to conceptualize individualised, practical solutions that work.',
    author: 'Meaghan & Grahame Moir',
    role: 'Community & Youth Sector Professional',
    accent: '#DFC9E7',
  },
  {
    id: 'workforce-support',
    headline: 'Helping us build a workplace that runs like a well-oiled machine.',
    quote:
      'Instead of just handing us a manual, Jaime got under the bonnet with us to understand our unique workplace challenges. CTC provided us with a comprehensive plan, training, and confidence to identify psychosocial hazards and create a safer environment for our team.',
    author: 'Kirstie Edwards',
    role: 'Workforce & Family Support Specialist',
    accent: '#A3D7C3',
  },
  {
    id: 'education',
    headline: 'Thoroughly engaged and came away with actionable strategies.',
    quote:
      'Jaime presented a strong grasp of the material, maintaining engagement through humor and personal experience. All staff came away with a deep appreciation of trauma and strategies to assist. A truly valuable learning experience.',
    author: 'Samantha Cooke',
    role: 'Education Professional',
    accent: '#A1E6EB',
  },
];

const useItemsPerView = () => {
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)');
    const update = () => setItemsPerView(mediaQuery.matches ? 3 : 1);

    update();
    mediaQuery.addEventListener('change', update);
    return () => mediaQuery.removeEventListener('change', update);
  }, []);

  return itemsPerView;
};

const TestimonialCard = ({ item }) => (
  <article className="quote-carousel__card">
    <blockquote className="quote-carousel__blockquote">
      {item.headline && (
        <p className="quote-carousel__headline">&ldquo;{item.headline}&rdquo;</p>
      )}
      {item.quote && (
        <p className="quote-carousel__text">&ldquo;{item.quote}&rdquo;</p>
      )}
      <footer className="quote-carousel__author">
        <span
          className="quote-carousel__avatar"
          style={{ backgroundColor: item.accent }}
          aria-hidden="true"
        >
          {getInitials(item.author)}
        </span>
        <span className="quote-carousel__author-text">
          <cite className="quote-carousel__name">{item.author}</cite>
          <span className="quote-carousel__role">{item.role}</span>
        </span>
      </footer>
    </blockquote>
  </article>
);

const QuoteCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(0);
  const viewportRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const itemsPerView = useItemsPerView();
  const carouselRegionId = useId();

  const maxIndex = Math.max(0, endorsements.length - itemsPerView);
  const clampedIndex = Math.min(activeIndex, maxIndex);

  const goTo = useCallback(
    (index) => {
      if (index < 0) {
        setActiveIndex(maxIndex);
        return;
      }

      if (index > maxIndex) {
        setActiveIndex(0);
        return;
      }

      setActiveIndex(index);
    },
    [maxIndex],
  );

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return undefined;

    const observer = new ResizeObserver(([entry]) => {
      setViewportWidth(entry.contentRect.width);
    });

    observer.observe(viewport);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (reduceMotion || isPaused) return undefined;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => {
        const next = current >= maxIndex ? 0 : current + 1;
        return next;
      });
    }, AUTO_ADVANCE_MS);

    return () => window.clearInterval(timer);
  }, [isPaused, maxIndex, reduceMotion]);

  const handleBlur = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setIsPaused(false);
    }
  };

  const cardWidth =
    itemsPerView === 1
      ? viewportWidth
      : (viewportWidth - CARD_GAP * (itemsPerView - 1)) / itemsPerView;
  const offset = clampedIndex * (cardWidth + CARD_GAP);

  return (
    <section
      className="quote-carousel"
      id="endorsements"
      aria-labelledby="quote-carousel-title"
    >
      <div className="quote-carousel__panel">
        <header className="quote-carousel__header">
          <p className="quote-carousel__eyebrow">Testimonials</p>
          <h2 className="quote-carousel__title" id="quote-carousel-title">
            Endorsed by Professionals Across the Sector
          </h2>
        </header>

        <div
          className="quote-carousel__stage"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={handleBlur}
        >
          <div
            ref={viewportRef}
            className="quote-carousel__viewport"
            id={carouselRegionId}
            aria-live={reduceMotion ? 'off' : 'polite'}
            aria-atomic="true"
          >
            <MotionDiv
              className="quote-carousel__track"
              animate={{ x: viewportWidth ? -offset : 0 }}
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : { duration: 0.55, ease: [0.22, 1, 0.36, 1] }
              }
              style={{ gap: CARD_GAP }}
            >
              {endorsements.map((item) => (
                <div
                  key={item.id}
                  className="quote-carousel__slide"
                  style={{
                    flexBasis: cardWidth || undefined,
                    width: cardWidth || undefined,
                  }}
                >
                  <TestimonialCard item={item} />
                </div>
              ))}
            </MotionDiv>
          </div>

          <div
            className="quote-carousel__controls"
            role="group"
            aria-label="Testimonial navigation"
          >
            <button
              type="button"
              className="quote-carousel__arrow quote-carousel__arrow--prev"
              aria-label="Previous testimonial"
              aria-controls={carouselRegionId}
              onClick={() => goTo(clampedIndex - 1)}
            >
              <svg width="16" height="10" viewBox="0 0 16 10" fill="none" aria-hidden="true">
                <path
                  d="M15.4531 3.79455H5.45312V5.29455H15.4531V3.79455Z"
                  fill="currentColor"
                />
                <path
                  d="M5.52812 0.211914L0.523438 4.54474L5.52812 8.87756V0.211914Z"
                  fill="currentColor"
                />
              </svg>
            </button>

            <div className="quote-carousel__dots">
              {endorsements.map((item, index) => {
                const isActive =
                  index >= clampedIndex && index < clampedIndex + itemsPerView;

                return (
                  <button
                    key={item.id}
                    type="button"
                    className={`quote-carousel__dot${
                      isActive ? ' quote-carousel__dot--active' : ''
                    }`}
                    aria-label={`Show testimonial from ${item.author}`}
                    aria-current={isActive ? 'true' : undefined}
                    aria-controls={carouselRegionId}
                    onClick={() => goTo(Math.min(index, maxIndex))}
                  />
                );
              })}
            </div>

            <button
              type="button"
              className="quote-carousel__arrow quote-carousel__arrow--next"
              aria-label="Next testimonial"
              aria-controls={carouselRegionId}
              onClick={() => goTo(clampedIndex + 1)}
            >
              <svg width="16" height="10" viewBox="0 0 16 10" fill="none" aria-hidden="true">
                <path
                  d="M0.546875 3.79455H10.547V5.29455H0.546875V3.79455Z"
                  fill="currentColor"
                />
                <path
                  d="M10.4719 0.211914L15.4766 4.54474L10.4719 8.87756V0.211914Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteCarousel;
