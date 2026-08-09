import { motion, useReducedMotion } from 'framer-motion';
import './WhyUsHero.css';

const MotionDiv = motion.div;

const WhyUsHero = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="why-us-hero" aria-labelledby="why-us-hero-title">
      <div className="why-us-hero__panel">
        <MotionDiv
          className="why-us-hero__inner"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <header className="why-us-hero__header">
            <p className="why-us-hero__badge">The CTC Advantage</p>
            <h1 className="why-us-hero__title" id="why-us-hero-title">
              Why Standard Trauma Theory Falls Short Under Pressure
            </h1>
            <p className="why-us-hero__description">
              Most training tells you what trauma is. We teach your team how to act
              when face-to-face with dysregulated behavior.
            </p>
          </header>
        </MotionDiv>
      </div>
    </section>
  );
};

export default WhyUsHero;
