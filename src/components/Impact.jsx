import './Impact.css';

const impacts = [
  {
    area: 'Safety & Incidents',
    result: 'Immediate reduction in escalations and physical/verbal conflict.',
    accent: '#FDC6BB',
  },
  {
    area: 'Staff Wellbeing',
    result:
      'Lower burnout, reduced secondary traumatic stress, and higher job retention.',
    accent: '#A3D7C3',
  },
  {
    area: 'Communication',
    result:
      'Stronger, safer relationships between staff, clients, and community members.',
    accent: '#DFC9E7',
  },
  {
    area: 'Legal Precision',
    result:
      'Clearer court insights that ensure trauma is accurately factored into decisions.',
    accent: '#A1E6EB',
  },
];

const Impact = () => (
  <section className="impact" aria-labelledby="impact-title">
    <div className="impact__panel">
      <div className="impact__inner">
        <header className="impact__header">
          <p className="impact__eyebrow">Organizational Impact</p>
          <h2 className="impact__title" id="impact-title">
            What Happens When Your
            <br />
            {' Team Learns to Respond:'}
          </h2>
        </header>

        <div className="impact__table">
          <div className="impact__table-row impact__table-row--head">
            <span className="impact__table-label">Operational Area</span>
            <span className="impact__table-label">The Measurable Result</span>
          </div>

          {impacts.map((row) => (
            <div key={row.area} className="impact__table-row">
              <span
                className="impact__area"
                style={{ backgroundColor: row.accent }}
              >
                {row.area}
              </span>
              <p className="impact__result">{row.result}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Impact;
