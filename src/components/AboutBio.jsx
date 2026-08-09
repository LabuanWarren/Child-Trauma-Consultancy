import './AboutBio.css';

const AboutBio = () => (
  <section className="about-bio" aria-labelledby="about-bio-title">
    <div className="about-bio__panel">
      <div className="about-bio__inner">
        <header className="about-bio__header">
          <h2 className="about-bio__title" id="about-bio-title">
            Grounded Human Perspective Built on 25 Years of Experience
          </h2>
        </header>

        <div className="about-bio__content">
          <p className="about-bio__paragraph">
            Every day, professionals meet behavior they don&apos;t fully
            understand&mdash;in classrooms, welfare systems, courtrooms, and
            workplaces. When a child shuts down or a client escalates, high-level
            theory fails. That moment matters, and the response matters more.
          </p>
          <p className="about-bio__paragraph">
            Jaime Ramos brings together over 25 years of child protection and
            social work practice alongside his own lived experience of childhood
            trauma. This unique perspective gives Child Trauma Consultancy the
            rare ability to deliver compassionate, highly effective, and deeply
            practical solutions.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default AboutBio;
