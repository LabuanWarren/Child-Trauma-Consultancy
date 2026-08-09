import { motion, useReducedMotion } from 'framer-motion';
import './ResourcesHero.css';

const MotionDiv = motion.div;

const ResourcesHero = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="resources-hero" aria-labelledby="resources-hero-title">
      <div className="resources-hero__panel">
        <MotionDiv
          className="resources-hero__inner"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <header className="resources-hero__header">
            <p className="resources-hero__badge">Practical Toolkit</p>
            <h1 className="resources-hero__title" id="resources-hero-title">
              Real-World Tools for the Moments That Matter
            </h1>
            <p className="resources-hero__description">
              Action-oriented guides, framework downloads, and video insights to
              help your team lead with understanding.
            </p>
          </header>
        </MotionDiv>
      </div>
    </section>
  );
};

export default ResourcesHero;
