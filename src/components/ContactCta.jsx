import Button from './Button';
import { EMAIL, PHONE } from '../utils/seo';
import './ContactCta.css';

const ContactCta = () => (
  <section className="contact-cta" id="contact" aria-labelledby="contact-cta-title">
    <div className="contact-cta__panel">
      <img
        className="contact-cta__decor contact-cta__decor--left"
        src="/assets/contact-cta/j51Rwx.webp"
        alt=""
        width={384}
        height={221}
        loading="lazy"
        decoding="async"
        aria-hidden="true"
      />
      <img
        className="contact-cta__decor contact-cta__decor--right"
        src="/assets/contact-cta/lL0d4.webp"
        alt=""
        width={384}
        height={221}
        loading="lazy"
        decoding="async"
        aria-hidden="true"
      />

      <div className="contact-cta__inner">
        <header className="contact-cta__header">
          <h2 className="contact-cta__title" id="contact-cta-title">
            Know What to Do
            <br />
            When It Matters Most.
          </h2>
          <p className="contact-cta__description">
            Equip your team with the practical skills to handle complex trauma with
            calm, safety, and capability.
          </p>
        </header>

        <div className="contact-cta__actions">
          <Button href={`mailto:${EMAIL}`} variant="secondary">
            Book a Discovery Call
          </Button>
          <Button href="#services" variant="primary">
            Explore Workplace Training
          </Button>
        </div>

        <p className="contact-cta__support">
          Prefer to talk first? Call us directly on{' '}
          <a href={`tel:${PHONE.replace(/\s/g, '')}`}>{PHONE}</a> or email{' '}
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </p>
      </div>
    </div>
  </section>
);

export default ContactCta;
