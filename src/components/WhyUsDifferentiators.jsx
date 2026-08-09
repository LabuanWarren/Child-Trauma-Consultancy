import './WhyUsDifferentiators.css';

const differentiators = [
  {
    id: '01',
    theme: 'cyan',
    title: 'Lived & Frontline Experience',
    subtitle: '25+ Years on the Frontline',
    body:
      'Combining social work qualifications with personal lived experience of childhood trauma for authentic, credible leadership.',
  },
  {
    id: '02',
    theme: 'peach',
    title: 'Grounded, Not Theoretical',
    subtitle: 'Practical Real-Time Tools',
    body:
      'We don\u2019t hand over a manual and walk away. We deliver actionable strategies staff can apply on Day 1.',
  },
  {
    id: '03',
    theme: 'mint',
    title: 'Responsive Partnership',
    subtitle: 'We Get Under the Bonnet',
    body:
      'We walk through your physical environment, identify pressure points, and tailor every strategy to your workplace realities.',
  },
];

const WhyUsDifferentiators = () => (
  <section
    className="why-us-diff"
    id="why-us"
    aria-labelledby="why-us-diff-heading"
  >
    <div className="why-us-diff__panel">
      <div className="why-us-diff__inner">
        <h2 className="visually-hidden" id="why-us-diff-heading">
          Key Differentiators
        </h2>

        <div className="why-us-diff__grid">
          {differentiators.map((item) => (
            <article
              key={item.id}
              className={`why-us-diff__card why-us-diff__card--${item.theme}`}
              aria-labelledby={`why-us-diff-${item.id}-title`}
            >
              <p className="why-us-diff__number">{item.id}.</p>
              <h3
                className="why-us-diff__title"
                id={`why-us-diff-${item.id}-title`}
              >
                {item.title}
              </h3>
              <p className="why-us-diff__subtitle">{item.subtitle}</p>
              <p className="why-us-diff__body">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default WhyUsDifferentiators;
