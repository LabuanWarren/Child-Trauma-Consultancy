import './AboutMission.css';

const AboutMission = () => (
  <section className="about-mission" aria-labelledby="about-mission-title">
    <div className="about-mission__panel">
      <div className="about-mission__inner">
        <article className="about-mission__box">
          <h2 className="about-mission__title" id="about-mission-title">
            Our Core Belief
          </h2>
          <blockquote className="about-mission__quote">
            &ldquo;Trauma is not misbehavior. It is a survival response. When we
            equip teams to see behavior as communication, we change outcomes for
            everyone.&rdquo;
          </blockquote>
        </article>
      </div>
    </div>
  </section>
);

export default AboutMission;
