import { motion, useReducedMotion } from 'framer-motion';
import Button from './Button';
import './Hero.css';

const MotionDiv = motion.div;
const HERO_VIDEO_ID = 'pIXCyz50rZc';

const Hero = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="hero" id="about" aria-labelledby="hero-title">
      <div className="hero__panel">
        <div className="hero__inner">
          <MotionDiv
            className="hero__copy"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="hero__headline">
              <h1 className="hero__title" id="hero-title">
                Know What to Do
                <br />
                When Trauma Shows Up
              </h1>
              <p className="hero__description">
                We bridge the gap between understanding trauma conceptually and
                knowing how to respond safely, effectively, and intentionally in
                real-world moments.
              </p>
            </div>

            <div className="hero__actions">
              <Button href="#services" variant="primary">
                Explore Workplace Training
              </Button>
              <Button href="#contact" variant="secondary">
              Get Expert Assessment
              </Button>
            </div>
          </MotionDiv>

          <MotionDiv
            className="hero__video"
            initial={reduceMotion ? false : { opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="hero__video-stage">
              <div className="hero__decor" aria-hidden="true">
                <img
                  className="hero__decor-image hero__decor-image--left"
                  src="/assets/hero/Z5H8Qc.webp"
                  alt=""
                  width={384}
                  height={220}
                  loading="eager"
                  decoding="async"
                />
                <img
                  className="hero__decor-image hero__decor-image--right"
                  src="/assets/hero/L1C3J.webp"
                  alt=""
                  width={384}
                  height={220}
                  loading="eager"
                  decoding="async"
                />
              </div>

              <div className="hero__video-frame">
                <iframe
                  title="Child Trauma Consultancy | Jaime Ramos"
                  src={`https://www.youtube.com/embed/${HERO_VIDEO_ID}?rel=0`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>

          </MotionDiv>
        </div>
      </div>
    </section>
  );
};

export default Hero;
