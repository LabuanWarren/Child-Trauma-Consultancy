import Button from './Button';
import './ServicePathways.css';

const pathways = [
  {
    id: '01',
    theme: 'cyan',
    eyebrow: 'Pathway 01',
    tag: 'Live & Interactive',
    title: 'Professional Development & Workshops',
    headline: 'Interactive Training Capped for Maximum Impact',
    body:
      'Move beyond abstract theory. We deliver practical, real-time tools for de-escalating distress, managing emotional dysregulation, and maintaining staff composure.',
    format: 'Live Zoom (up to 100 participants) or On-Site Workshops',
    cta: 'Book a Session',
    href: '#contact',
  },
  {
    id: '02',
    theme: 'peach',
    eyebrow: 'Pathway 02',
    tag: 'Strategic Advisory',
    title: 'Organisational Consulting & Workplace Diagnostics',
    headline: 'Fine-Tuning Workplaces for Safety & Psychological Compliance',
    body:
      'We assess your environment, identify hidden pressure points, and build custom frameworks to reduce workplace stress, manage psychosocial hazards, and prevent burnout.',
    format: 'Environment Audits, Policy Review & Custom Service Plans',
    cta: 'Request Workplace Diagnostic',
    href: '#contact',
  },
  {
    id: '03',
    theme: 'lavender',
    eyebrow: 'Pathway 03',
    tag: 'Court & Expert Reports',
    title: 'Legal & Family Court Expert Assessments',
    headline: 'Objective, Defensible Trauma Insights for Legal Proceedings',
    body:
      'Independent, highly detailed trauma-informed assessments and expert witness reports that bring clarity, neutrality, and child-centered focus to court proceedings.',
    format: 'Expert Witness Reports & Legal Advisory',
    cta: 'Request Expert Assessment',
    href: '#contact',
  },
];

const ServicePathways = () => (
  <section
    className="service-pathways"
    id="services"
    aria-labelledby="service-pathways-heading"
  >
    <div className="service-pathways__panel">
      <div className="service-pathways__inner">
        <header className="service-pathways__header">
          <h2 className="service-pathways__title" id="service-pathways-heading">
            Core Service Pathways
          </h2>
        </header>

        <div className="service-pathways__grid">
          {pathways.map((pathway) => (
            <article
              key={pathway.id}
              className={`service-pathways__card service-pathways__card--${pathway.theme}`}
              aria-labelledby={`service-pathway-${pathway.id}-headline`}
            >
              <div className="service-pathways__card-top">
                <p className="service-pathways__pathway-id">{pathway.eyebrow}</p>
                <span className="service-pathways__tag">{pathway.tag}</span>
              </div>

              <p className="service-pathways__pathway-title">{pathway.title}</p>

              <h3
                className="service-pathways__headline"
                id={`service-pathway-${pathway.id}-headline`}
              >
                {pathway.headline}
              </h3>

              <p className="service-pathways__body">{pathway.body}</p>

              <div className="service-pathways__format">
                <p className="service-pathways__format-label">Format</p>
                <p className="service-pathways__format-text">{pathway.format}</p>
              </div>

              <Button
                href={pathway.href}
                variant="secondary"
                className="service-pathways__cta"
              >
                {pathway.cta}
              </Button>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ServicePathways;
