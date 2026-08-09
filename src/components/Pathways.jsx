import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import Button from './Button';
import ScrollReveal from './ScrollReveal';
import './Pathways.css';

const pathways = [
  {
    id: '01',
    theme: 'cyan',
    eyebrow: 'Pathway 01',
    title: 'For Organisations & Frontline Teams',
    quote:
      '“Our people encounter trauma, but need practical tools to respond effectively.”',
    heroImage: '/assets/pathways/Pathway%201_1x.webp',
    heroAlt: 'Collaborative team meeting',
    lead:
      'Customized training and consulting built for your real workplace—not generic slide decks.',
    features: [
      {
        image: '/assets/pathways/Recognize%20Real-Time%20Signals_1x.webp',
        alt: 'Recognize Real-Time Signals illustration',
        title: 'Recognize Real-Time Signals',
        description:
          'Identify trauma responses before situations reach a crisis point.',
      },
      {
        image: '/assets/pathways/Self-Regulation%20Under%20Pressure_1x.webp',
        alt: 'Self-Regulation Under Pressure illustration',
        title: 'Self-Regulation Under Pressure',
        description:
          'Practical methods for staff to stay grounded when faced with intense emotions or conflict.',
      },
      {
        image: '/assets/pathways/Customized%20to%20Your%20Culture_1x.webp',
        alt: 'Customized to Your Culture illustration',
        title: 'Customized to Your Culture',
        description:
          'We listen to your real-world challenges first, then build training your team can use from Day 1.',
      },
    ],
    outcome:
      'Higher staff confidence, fewer safety incidents, reduced turnover, and a workplace culture grounded in dignity.',
    cta: 'Explore Training & Consulting',
  },
  {
    id: '02',
    theme: 'peach',
    eyebrow: 'Pathway 02',
    title: 'For Legal Professionals & Family Courts',
    quote:
      '“We need an independent expert to help the court interpret complex behavior.”',
    heroImage: '/assets/pathways/pathway%202_1x.webp',
    heroAlt: 'Legal professional reviewing case materials',
    lead:
      'Neutral, evidence-based assessments that translate complex trauma dynamics into clear judicial insights.',
    features: [
      {
        image: '/assets/pathways/Strict%20Neutrality_1x.webp',
        alt: 'Strict Neutrality',
        title: 'Strict Neutrality',
        description:
          'Grounded in accepted social work and trauma practice standards.',
      },
      {
        image: '/assets/pathways/Jargon-Free%20Clarity_1x.webp',
        alt: 'Jargon-Free Clarity',
        title: 'Jargon-Free Clarity',
        description:
          'Translating complicated psychological patterns into actionable insights for judges and legal teams.',
      },
      {
        image: '/assets/pathways/defensible-evidence-based_1x.webp',
        alt: 'Defensible & Evidence-Based',
        title: 'Defensible & Evidence-Based',
        description:
          'Independent evaluations that bring clarity to high-stakes legal decisions.',
      },
    ],
    outcome:
      'Clearer context, reduced ambiguity, and better-informed court outcomes.',
    cta: 'Request an Expert Report',
  },
];

const Pathways = () => {
  const [activePathwayId, setActivePathwayId] = useState(pathways[0].id);
  const [tabIndicator, setTabIndicator] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });
  const pathwayRefs = useRef({});
  const tabBarRef = useRef(null);
  const tabRefs = useRef({});
  const intersectionRatios = useRef(new Map());

  const updateTabIndicator = useCallback(() => {
    const tabBar = tabBarRef.current;
    const activeTab = tabRefs.current[activePathwayId];

    if (!tabBar || !activeTab) return;

    const barRect = tabBar.getBoundingClientRect();
    const tabRect = activeTab.getBoundingClientRect();

    setTabIndicator({
      x: tabRect.left - barRect.left,
      y: tabRect.top - barRect.top,
      width: tabRect.width,
      height: tabRect.height,
    });
  }, [activePathwayId]);

  useLayoutEffect(() => {
    updateTabIndicator();

    const tabBar = tabBarRef.current;
    if (!tabBar) return undefined;

    const resizeObserver = new ResizeObserver(updateTabIndicator);
    resizeObserver.observe(tabBar);

    pathways.forEach((pathway) => {
      const tab = tabRefs.current[pathway.id];
      if (tab) resizeObserver.observe(tab);
    });

    window.addEventListener('resize', updateTabIndicator);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateTabIndicator);
    };
  }, [updateTabIndicator]);

  useEffect(() => {
    const elements = pathways
      .map((pathway) => pathwayRefs.current[pathway.id])
      .filter(Boolean);

    if (elements.length === 0 || typeof IntersectionObserver === 'undefined') {
      return undefined;
    }

    const updateActivePathway = () => {
      let nextActiveId = pathways[0].id;
      let highestRatio = 0;

      pathways.forEach((pathway) => {
        const ratio = intersectionRatios.current.get(pathway.id) ?? 0;
        if (ratio > highestRatio) {
          highestRatio = ratio;
          nextActiveId = pathway.id;
        }
      });

      if (highestRatio > 0) {
        setActivePathwayId(nextActiveId);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          intersectionRatios.current.set(
            entry.target.dataset.pathwayId,
            entry.intersectionRatio,
          );
        });
        updateActivePathway();
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        rootMargin: '-15% 0px -35% 0px',
      },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const scrollToPathway = useCallback((pathwayId) => {
    pathwayRefs.current[pathwayId]?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }, []);

  return (
  <section className="pathways" id="services" aria-labelledby="pathways-heading">
    <div className="pathways__panel">
      <div className="pathways__inner">
        <header className="pathways__header">
          <p className="pathways__section-eyebrow">Two Distinct Ways We Support You</p>
          <h2 className="pathways__title" id="pathways-heading">
            Select the pathway that
            <br />
            {' matches your needs:'}
          </h2>
        </header>

        <nav ref={tabBarRef} className="pathways__tab-bar" aria-label="Pathway selection">
          <div
            className="pathways__tab-indicator"
            aria-hidden="true"
            style={{
              transform: `translate(${tabIndicator.x}px, ${tabIndicator.y}px)`,
              width: tabIndicator.width,
              height: tabIndicator.height,
            }}
          />
          {pathways.map((pathway) => {
            const isActive = activePathwayId === pathway.id;

            return (
              <button
                key={pathway.id}
                ref={(element) => {
                  tabRefs.current[pathway.id] = element;
                }}
                type="button"
                className={`pathways__tab${isActive ? ' pathways__tab--active' : ''}`}
                onClick={() => scrollToPathway(pathway.id)}
                aria-current={isActive ? 'true' : undefined}
              >
                <span className="pathways__tab-eyebrow">{pathway.eyebrow}</span>
                <span className="pathways__tab-title">{pathway.title}</span>
              </button>
            );
          })}
        </nav>

        {pathways.map((pathway) => {
          const isActive = activePathwayId === pathway.id;

          return (
          <article
            key={pathway.id}
            ref={(element) => {
              pathwayRefs.current[pathway.id] = element;
            }}
            data-pathway-id={pathway.id}
            className={`pathways__pathway pathways__pathway--${pathway.theme}`}
            aria-labelledby={`pathway-${pathway.id}-title`}
          >
            <h3 className="pathways__pathway-title-visually-hidden" id={`pathway-${pathway.id}-title`}>
              {pathway.eyebrow}: {pathway.title}
            </h3>

            <div className="pathways__pathway-body">
              <div className="pathways__hero">
                <blockquote className="pathways__quote">{pathway.quote}</blockquote>
                <figure className="pathways__hero-media">
                  <img
                    src={pathway.heroImage}
                    alt={pathway.heroAlt}
                    width={650}
                    height={340}
                    loading="lazy"
                    decoding="async"
                  />
                </figure>
              </div>

              <div
                className={`pathways__content${isActive ? '' : ' pathways__content--inactive'}`}
                aria-hidden={!isActive}
              >
                <p className="pathways__lead">
                  <ScrollReveal inline baseRotation={1.5} blurStrength={3}>
                    {pathway.lead}
                  </ScrollReveal>
                </p>

                <div className="pathways__features">
                  {pathway.features.map((feature) => (
                    <figure key={feature.title} className="pathways__feature-card">
                      <ScrollReveal block baseRotation={1.5} blurStrength={3}>
                        <img
                          src={feature.image}
                          alt={feature.alt}
                          loading="lazy"
                          decoding="async"
                        />
                      </ScrollReveal>
                      <figcaption className="pathways__feature-copy">
                        <h4 className="pathways__feature-title">{feature.title}</h4>
                        <p className="pathways__feature-description">{feature.description}</p>
                      </figcaption>
                    </figure>
                  ))}
                </div>

                <div className="pathways__actions">
                  <div className="pathways__outcome">
                    <p className="pathways__outcome-label">Outcome:</p>
                    <p className="pathways__outcome-text">{pathway.outcome}</p>
                  </div>
                  <Button href="#contact" variant="secondary" className="pathways__cta">
                    {pathway.cta}
                  </Button>
                </div>
              </div>
            </div>
          </article>
          );
        })}
      </div>
    </div>
  </section>
  );
};

export default Pathways;
