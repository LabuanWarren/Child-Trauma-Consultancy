import { useSyncExternalStore } from 'react';
import ScrollExpand from './ScrollExpand';
import './CoreProblem.css';

const problems = [
  {
    title: 'Instinctive Reactions',
    description:
      'Unprepared teams react to the behavior, inadvertently escalating the crisis.',
  },
  {
    title: 'Staff Stress & Burnout',
    description:
      'Staff feel overwhelmed and ill-equipped, leading to stress, fatigue, and team attrition.',
  },
  {
    title: 'Compounded Harm',
    description:
      'Reactive environments risk re-traumatizing the people you are trying to support.',
  },
];

const subscribeToReducedMotion = (callback) => {
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

  mediaQuery.addEventListener('change', callback);
  return () => mediaQuery.removeEventListener('change', callback);
};

const getReducedMotionPreference = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const CardArrow = () => (
  <svg
    className="core-problem__arrow"
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

const ProblemCards = () => (
  <div className="core-problem__cards">
    {problems.map((item) => (
      <article key={item.title} className="core-problem__card">
        <div className="core-problem__card-heading">
          <h3 className="core-problem__card-title">{item.title}</h3>
          <CardArrow />
        </div>
        <p className="core-problem__card-copy">{item.description}</p>
      </article>
    ))}
  </div>
);

const CoreProblemStatic = () => (
  <div className="core-problem__inner">
    <header className="core-problem__header">
      <p className="core-problem__eyebrow">The Core Problem</p>
      <h2 className="core-problem__title" id="core-problem-title">
        Understanding Trauma Is Easy. Responding Under Pressure Is Hard.
      </h2>
      <p className="core-problem__description">
        When staff don&apos;t know how to turn trauma knowledge into real-time
        action, standard patterns take over.
      </p>
    </header>

    <div className="core-problem__body">
      <ProblemCards />

      <figure className="core-problem__visual">
        <img
          src="/assets/core-problem/problem.webp"
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

const CoreProblem = () => {
  const reduceMotion = useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotionPreference,
    () => false,
  );

  return (
    <section
      className={`core-problem ${reduceMotion ? 'core-problem--static' : ''}`}
      id="resources"
      aria-labelledby="core-problem-title"
    >
      <div className="core-problem__panel">
        {reduceMotion ? (
          <CoreProblemStatic />
        ) : (
          <>
            <div className="core-problem__scroll-stage">
              <ScrollExpand
                className="core-problem__expand"
                useWindowScroll
                src="/assets/core-problem/problem.webp"
                alt=""
                title={
                  <>
                    <p className="core-problem__eyebrow core-problem__eyebrow--expand">
                      The Core Problem
                    </p>
                    <p className="core-problem__expand-headline">
                      Understanding Trauma Is Easy. Responding Under Pressure Is Hard.
                    </p>
                  </>
                }
                titleClassName="core-problem__expand-title"
                overlayClassName="core-problem__expand-overlay"
                scrollHint="Scroll to explore"
                animateWidth={false}
                startHeight={42}
                startRadius={12}
                endRadius={12}
                mediaZoom={1.2}
                scrollDistance={1.1}
                holdDistance={0.3}
                smoothing={0.08}
                overlayScrim={0.52}
              >
                <div className="core-problem__expand-content">
                  <p className="core-problem__description core-problem__description--overlay">
                    When staff don&apos;t know how to turn trauma knowledge into
                    real-time action, standard patterns take over.
                  </p>
                  <ProblemCards />
                </div>
              </ScrollExpand>
            </div>

            <h2 className="visually-hidden" id="core-problem-title">
              Understanding Trauma Is Easy. Responding Under Pressure Is Hard.
            </h2>
          </>
        )}
      </div>
    </section>
  );
};

export default CoreProblem;
