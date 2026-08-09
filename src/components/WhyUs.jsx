import { useSyncExternalStore } from 'react';
import ScrollExpand from './ScrollExpand';
import './WhyUs.css';

const values = [
  {
    title: 'Zero Fluff or Pure Theory',
    description:
      'Every framework is designed for immediate application in high-stress environments.',
  },
  {
    title: 'Tailored, Never Templated',
    description:
      'We build every session around your specific workplace realities.',
  },
  {
    title: 'Focus on the Professional',
    description:
      'We do not offer therapy or clinical treatment. Our sole mission is equipping you and your team to handle trauma effectively.',
  },
];

const WHY_US_IMAGE = '/assets/why-us/why-us-1x.webp';

const subscribeToReducedMotion = (callback) => {
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

  mediaQuery.addEventListener('change', callback);
  return () => mediaQuery.removeEventListener('change', callback);
};

const getReducedMotionPreference = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const CardArrow = () => (
  <svg
    className="why-us__arrow"
    width="16"
    height="10"
    viewBox="0 0 16 10"
    fill="none"
    aria-hidden="true"
  >
    <path d="M0.546875 3.79455H10.547V5.29455H0.546875V3.79455Z" fill="currentColor" />
    <path d="M10.4719 0.211914L15.4766 4.54474L10.4719 8.87756V0.211914Z" fill="currentColor" />
  </svg>
);

const ValueCards = () => (
  <div className="why-us__cards">
    {values.map((value) => (
      <article key={value.title} className="why-us__card">
        <div className="why-us__card-heading">
          <h3 className="why-us__card-title">{value.title}</h3>
          <CardArrow />
        </div>
        <p className="why-us__card-copy">{value.description}</p>
      </article>
    ))}
  </div>
);

const WhyUsStatic = () => (
  <div className="why-us__inner">
    <header className="why-us__header">
      <p className="why-us__eyebrow">Why Child Trauma Consultancy</p>
      <h2 className="why-us__title" id="why-us-title">
        Built on Frontline Experience
        &amp; Lived Understanding
      </h2>
      <p className="why-us__description">
      Grounded in real life, not theory. <strong>Jaime Ramos</strong> brings lived experience and <strong>25+ years</strong> of frontline child protection expertise to every session.
      </p>
    </header>

    <div className="why-us__body">
      <ValueCards />

      <figure className="why-us__visual">
        <img
          src={WHY_US_IMAGE}
          alt=""
          width={1280}
          height={400}
          loading="lazy"
          decoding="async"
        />
      </figure>
    </div>
  </div>
);

const WhyUs = () => {
  const reduceMotion = useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotionPreference,
    () => false,
  );

  return (
    <section
      className={`why-us ${reduceMotion ? 'why-us--static' : ''}`}
      id="why-us"
      aria-labelledby="why-us-title"
    >
      <div className="why-us__panel">
        {reduceMotion ? (
          <WhyUsStatic />
        ) : (
          <>
            <div className="why-us__scroll-stage">
              <ScrollExpand
                className="why-us__expand"
                useWindowScroll
                src={WHY_US_IMAGE}
                alt=""
                title={
                  <>
                    <p className="why-us__eyebrow why-us__eyebrow--expand">
                      Why Child Trauma Consultancy
                    </p>
                    <p className="why-us__expand-headline">
                      Built on Frontline Experience
                      &amp; Lived Understanding
                    </p>
                  </>
                }
                titleClassName="why-us__expand-title"
                overlayClassName="why-us__expand-overlay"
                scrollHint="Scroll to explore"
                animateWidth={false}
                startHeight={42}
                startRadius={12}
                endRadius={12}
                mediaZoom={1.2}
                scrollDistance={1.1}
                holdDistance={0.3}
                smoothing={0.08}
                overlayScrim={0.62}
              >
                <div className="why-us__expand-content">
                  <p className="why-us__description why-us__description--overlay">
                  Grounded in real life, not theory. <strong>Jaime Ramos</strong> brings lived experience and <strong>25+ years</strong> of frontline child protection expertise to every session.
                  </p>
                  <ValueCards />
                </div>
              </ScrollExpand>
            </div>

            <h2 className="visually-hidden" id="why-us-title">
              Built on Frontline Experience &amp; Lived Understanding
            </h2>
          </>
        )}
      </div>
    </section>
  );
};

export default WhyUs;
