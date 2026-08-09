import { motion, useReducedMotion } from 'framer-motion';
import './AboutHero.css';

const MotionDiv = motion.div;

const AboutHero = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="about-hero" id="about" aria-labelledby="about-hero-title">
      <div className="about-hero__panel">
        <MotionDiv
          className="about-hero__inner"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <header className="about-hero__header">
            <p className="about-hero__badge">Our Founder &amp; Mission</p>
            <h1 className="about-hero__title" id="about-hero-title">
              &ldquo;My role is not to treat trauma. It is to bridge the dangerous
              gap between theory and action.&rdquo;
            </h1>
            <p className="about-hero__description">
              Meet Jaime Ramos&mdash;Founder of Child Trauma Consultancy.
            </p>
          </header>
        </MotionDiv>
      </div>
    </section>
  );
};

export default AboutHero;
