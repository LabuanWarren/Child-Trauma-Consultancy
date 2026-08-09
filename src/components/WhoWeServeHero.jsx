import { motion, useReducedMotion } from 'framer-motion';
import './WhoWeServeHero.css';

const MotionDiv = motion.div;

const WhoWeServeHero = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="who-we-serve-hero" aria-labelledby="who-we-serve-hero-title">
      <div className="who-we-serve-hero__panel">
        <MotionDiv
          className="who-we-serve-hero__inner"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <header className="who-we-serve-hero__header">
            <p className="who-we-serve-hero__badge">Sector Focus</p>
            <h1 className="who-we-serve-hero__title" id="who-we-serve-hero-title">
              Tailored Guidance for the Frontline Professionals Supporting
              Trauma-Affected Individuals
            </h1>
            <p className="who-we-serve-hero__description">
              We work across sectors where high-stakes behavior happens every day.
            </p>
          </header>
        </MotionDiv>
      </div>
    </section>
  );
};

export default WhoWeServeHero;
