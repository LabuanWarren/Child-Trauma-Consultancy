import { motion, useReducedMotion } from 'framer-motion';
import './ContactHero.css';

const MotionDiv = motion.div;

const ClockIcon = () => (
  <svg
    className="contact-hero__icon"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
  >
    <circle cx="8" cy="8" r="6.25" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M8 4.5V8l2.5 2"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ContactHero = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="contact-hero" id="contact" aria-labelledby="contact-hero-title">
      <div className="contact-hero__panel">
        <MotionDiv
          className="contact-hero__inner"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <header className="contact-hero__header">
            <p className="contact-hero__badge">Get in Touch</p>
            <h1 className="contact-hero__title" id="contact-hero-title">
              Let&apos;s Build a Workplace That Responds, Not Reacts.
            </h1>
            <p className="contact-hero__description">
              Whether you need tailored staff training, an organizational diagnostic,
              or an expert witness report, we&apos;re here to help you bridge the gap
              between trauma theory and real-world practice.
            </p>
            <p className="contact-hero__response-time">
              <ClockIcon />
              We typically respond within 1–2 business days.
            </p>
          </header>
        </MotionDiv>
      </div>
    </section>
  );
};

export default ContactHero;
