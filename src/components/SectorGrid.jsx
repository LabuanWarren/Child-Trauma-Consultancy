import Button from './Button';
import './SectorGrid.css';

const sectors = [
  {
    id: '01',
    theme: 'cyan',
    label: 'Schools & Early Education',
    headline: 'Empowering Educators & Support Staff',
    body:
      'Uncover hidden environmental triggers, reframe classroom defiance, and equip teachers with practical strategies like "Catch Them Being Good" to build safe learning spaces.',
    cta: 'Explore Education Training',
    href: '/services#services',
  },
  {
    id: '02',
    theme: 'lavender',
    label: 'Legal Professionals & Family Courts',
    headline: 'Objective Context for Legal & Custody Proceedings',
    body:
      'Providing clear, evidence-based trauma assessments that bridge complex human dynamics into actionable, neutral insights for court decision-makers.',
    cta: 'Explore Legal Advisory',
    href: '/services#services',
  },
  {
    id: '03',
    theme: 'peach',
    label: 'Out-of-Home Care & Community Agencies',
    headline: 'Reducing Incident Frequency & Staff Turnover',
    body:
      'Transform reactive care routines into trauma-informed practice. Protect frontline carers from burnout and prevent secondary trauma in vulnerable populations.',
    cta: 'Explore Community Services',
    href: '/services#services',
  },
  {
    id: '04',
    theme: 'mint',
    label: 'Corporate & HR Leaders',
    headline: 'Building Psychosocially Safe Workplaces',
    body:
      'Identify pressure points, meet new workplace health legislation, and create supportive environments where employees run like a well-oiled machine.',
    cta: 'Explore Workplace Diagnostics',
    href: '/services#services',
  },
];

const SectorGrid = () => (
  <section
    className="sector-grid"
    id="who-we-serve"
    aria-labelledby="sector-grid-heading"
  >
    <div className="sector-grid__panel">
      <div className="sector-grid__inner">
        <h2 className="visually-hidden" id="sector-grid-heading">
          Sector Grid
        </h2>

        <div className="sector-grid__grid">
          {sectors.map((sector) => (
            <article
              key={sector.id}
              className={`sector-grid__card sector-grid__card--${sector.theme}`}
              aria-labelledby={`sector-${sector.id}-headline`}
            >
              <p className="sector-grid__number">{sector.id}.</p>
              <p className="sector-grid__label">{sector.label}</p>

              <h3
                className="sector-grid__headline"
                id={`sector-${sector.id}-headline`}
              >
                {sector.headline}
              </h3>

              <p className="sector-grid__body">{sector.body}</p>

              <Button
                href={sector.href}
                variant="secondary"
                className="sector-grid__cta"
              >
                {sector.cta}
              </Button>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default SectorGrid;
