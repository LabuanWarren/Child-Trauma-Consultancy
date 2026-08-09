import Button from './Button';
import { EMAIL } from '../utils/seo';
import './ContactSupportBanner.css';

const ContactSupportBanner = () => (
  <section className="contact-banner" aria-labelledby="contact-banner-title">
    <div className="contact-banner__panel">
      <div className="contact-banner__inner">
        <h2 className="contact-banner__title" id="contact-banner-title">
          Not Sure Which Pathway You Need?
        </h2>
        <p className="contact-banner__subtitle">
          Book a complimentary 15-minute discovery call with Jaime Ramos to discuss
          your team&apos;s specific needs.
        </p>
        <Button
          href={`mailto:${EMAIL}?subject=${encodeURIComponent('Discovery Call Request')}`}
          variant="primary"
        >
          Schedule a Discovery Call
        </Button>
      </div>
    </div>
  </section>
);

export default ContactSupportBanner;
