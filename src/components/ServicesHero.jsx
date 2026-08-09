import { motion, useReducedMotion } from 'framer-motion';
import Button from './Button';
import { EMAIL } from '../utils/seo';
import './ServicesHero.css';

const MotionDiv = motion.div;

const ServicesHero = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="services-hero" aria-labelledby="services-hero-title">
      <div className="services-hero__panel">
        <MotionDiv
          className="services-hero__inner"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <header className="services-hero__header">
            <p className="services-hero__badge">Practical Capabilities</p>
            <h1 className="services-hero__title" id="services-hero-title">
              Bridging the Gap Between Trauma Theory &amp; Real-Time Action
            </h1>
            <p className="services-hero__description">
              Tailored training, consulting, and advisory services equipping teams
              to respond with clarity—not guess under pressure.
            </p>
          </header>

          <div className="services-hero__actions">
            <Button href="#services" variant="primary">
              Explore Service Pathways
            </Button>
            <Button href={`mailto:${EMAIL}`} variant="secondary">
              Book a Strategy Call
            </Button>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
};

export default ServicesHero;
