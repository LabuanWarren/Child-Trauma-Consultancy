import { useEffect, useRef, useState } from 'react';
import {
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import './Transformation.css';

const diagrams = {
  before: {
    src: '/assets/transformation/gTNn8.webp',
    alt: 'Before transformation flow: challenging behaviour leads through misinterpretation and instinctive reaction to escalation and stress and harm.',
  },
  after: {
    src: '/assets/transformation/dA0LJ.webp',
    alt: 'After transformation flow: challenging behaviour leads through recognising trauma signals and staff self-regulation to intentional response and safety and de-escalation.',
  },
};

const SCROLL_SWITCH_POINT = 0.5;

const Transformation = () => {
  const scrollStageRef = useRef(null);
  const diagramRef = useRef(null);
  const [activeTab, setActiveTab] = useState('before');
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: scrollStageRef,
    offset: ['start start', 'end end'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (progress) => {
    if (reduceMotion) return;
    setActiveTab(progress >= SCROLL_SWITCH_POINT ? 'after' : 'before');
  });

  useEffect(() => {
    if (!reduceMotion) return undefined;

    const diagram = diagramRef.current;
    if (!diagram || typeof IntersectionObserver === 'undefined') {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setActiveTab(entry.isIntersecting ? 'after' : 'before');
      },
      { threshold: 0.5, rootMargin: '-25% 0px -25% 0px' },
    );

    observer.observe(diagram);
    return () => observer.disconnect();
  }, [reduceMotion]);

  return (
    <section
      className={`transformation ${reduceMotion ? 'transformation--static' : ''}`}
      aria-labelledby="transformation-heading"
    >
      <div className="transformation__panel">
        <header className="transformation__header">
          <ScrollReveal
            id="transformation-heading"
            containerClassName="transformation__eyebrow"
            textClassName="transformation__eyebrow-text"
            baseRotation={2}
            blurStrength={3}
          >
            The Transformation: From Reacting to Responding
          </ScrollReveal>
          <p className="transformation__lead">
            <ScrollReveal inline baseRotation={1.5} blurStrength={3}>
              We turn complex trauma concepts into immediate, practical capability.
              We teach your team to see
            </ScrollReveal>{' '}
            <strong>behavior as communication</strong>{' '}
            <ScrollReveal inline baseRotation={1.5} blurStrength={3}>
              —giving them the tools to regulate themselves and de-escalate
              challenging situations instantly.
            </ScrollReveal>
          </p>
        </header>
      </div>

      <div ref={scrollStageRef} className="transformation__scroll-stage">
        <div className="transformation__panel transformation__panel--diagram">
          <div className="transformation__diagram-sticky">
            <div ref={diagramRef} className="transformation__diagram">
              <div
                className="transformation__tabs"
                role="tablist"
                aria-label="Transformation states"
              >
                <div
                  role="tab"
                  id="transformation-tab-before"
                  aria-selected={activeTab === 'before'}
                  className={`transformation__tab ${
                    activeTab === 'before' ? 'is-active' : ''
                  }`}
                >
                  Before
                </div>
                <div
                  role="tab"
                  id="transformation-tab-after"
                  aria-selected={activeTab === 'after'}
                  className={`transformation__tab ${
                    activeTab === 'after' ? 'is-active' : ''
                  }`}
                >
                  After
                </div>
              </div>

              <figure
                className="transformation__canvas"
                role="tabpanel"
                id="transformation-panel"
                aria-labelledby={
                  activeTab === 'before'
                    ? 'transformation-tab-before'
                    : 'transformation-tab-after'
                }
              >
                <img
                  className={activeTab === 'before' ? 'is-visible' : 'is-hidden'}
                  src={diagrams.before.src}
                  alt={diagrams.before.alt}
                  width={1074}
                  height={414}
                  loading="lazy"
                  decoding="async"
                />
                <img
                  className={activeTab === 'after' ? 'is-visible' : 'is-hidden'}
                  src={diagrams.after.src}
                  alt={diagrams.after.alt}
                  width={1074}
                  height={414}
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transformation;
