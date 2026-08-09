import { useMemo, useState } from 'react';
import Button from './Button';
import './ResourceLibrary.css';

const HERO_VIDEO_ID = 'pIXCyz50rZc';

const filters = [
  { id: 'all', label: 'All' },
  { id: 'education', label: 'Education' },
  { id: 'legal', label: 'Legal' },
  { id: 'workplace-health', label: 'Workplace Health' },
  { id: 'de-escalation', label: 'De-escalation' },
];

const resources = [
  {
    id: 'de-escalation-toolkit',
    type: 'Featured Guide',
    theme: 'cyan',
    badge: 'Downloadable Guide',
    title: 'The De-Escalation Toolkit: Respond, Not React',
    description:
      'A step-by-step framework for managing dysregulation, aggression, and shutdown in high-pressure environments.',
    cta: 'Download Free PDF',
    href: '#contact',
    categories: ['de-escalation', 'education'],
  },
  {
    id: 'trauma-video',
    type: 'Video Series',
    theme: 'peach',
    badge: 'Video Insights',
    title: 'Trauma Is Not Misbehavior: Understanding Survival Responses',
    description:
      'Jaime Ramos breaks down why high-level theory falls short and how to reframe behavior as communication.',
    cta: 'Watch Video (2 mins)',
    href: `https://www.youtube.com/watch?v=${HERO_VIDEO_ID}`,
    external: true,
    categories: ['education', 'de-escalation'],
  },
  {
    id: 'workplace-checklist',
    type: 'Workplace Compliance',
    theme: 'lavender',
    badge: 'Policy Checklist',
    title: 'Psychosocial Safety & Workplace Health Readiness',
    description:
      'A practical checklist for identifying hazards, protecting team wellbeing, and supporting staff under new workplace legislation.',
    cta: 'Get Checklist',
    href: '#contact',
    categories: ['workplace-health', 'legal'],
  },
];

const ResourceLibrary = () => {
  const [activeFilter, setActiveFilter] = useState(null);

  const filteredResources = useMemo(() => {
    if (!activeFilter || activeFilter === 'all') return resources;
    return resources.filter((resource) =>
      resource.categories.includes(activeFilter),
    );
  }, [activeFilter]);

  return (
    <section
      className="resource-library"
      id="resources"
      aria-labelledby="resource-library-heading"
    >
      <div className="resource-library__panel">
        <div className="resource-library__inner">
          <div className="resource-library__filter-bar">
            <p className="resource-library__filter-label" id="resource-library-heading">
              Filter by:
            </p>
            <div
              className="resource-library__filters"
              role="group"
              aria-labelledby="resource-library-heading"
            >
              {filters.map((filter) => {
                const isActive =
                  filter.id === 'all'
                    ? !activeFilter || activeFilter === 'all'
                    : activeFilter === filter.id;

                return (
                  <button
                    key={filter.id}
                    type="button"
                    className={`resource-library__filter${
                      isActive ? ' resource-library__filter--active' : ''
                    }`}
                    aria-pressed={isActive}
                    onClick={() =>
                      setActiveFilter(filter.id === 'all' ? null : filter.id)
                    }
                  >
                    {filter.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="resource-library__grid">
            {filteredResources.length > 0 ? (
              filteredResources.map((resource) => (
                <article
                  key={resource.id}
                  className={`resource-library__card resource-library__card--${resource.theme}`}
                  aria-labelledby={`resource-${resource.id}-title`}
                >
                  <div className="resource-library__card-top">
                    <p className="resource-library__type">{resource.type}</p>
                    <span className="resource-library__badge">{resource.badge}</span>
                  </div>

                  <h2
                    className="resource-library__title"
                    id={`resource-${resource.id}-title`}
                  >
                    {resource.title}
                  </h2>

                  <p className="resource-library__description">
                    {resource.description}
                  </p>

                  <Button
                    href={resource.href}
                    variant="secondary"
                    className="resource-library__cta"
                    {...(resource.external
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                  >
                    {resource.cta}
                  </Button>
                </article>
              ))
            ) : (
              <p className="resource-library__empty" role="status">
                No resources match this filter yet. Try another category or clear
                your selection.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourceLibrary;
