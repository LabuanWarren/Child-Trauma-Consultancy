import Button from './Button';
import { EMAIL } from '../utils/seo';
import './WhyUsImpactBanner.css';

const WhyUsImpactBanner = () => (
  <section className="why-us-banner" aria-labelledby="why-us-banner-title">
    <div className="why-us-banner__panel">
      <div className="why-us-banner__inner">
        <p className="why-us-banner__metric" aria-hidden="true">
          25+
        </p>
        <h2 className="why-us-banner__title" id="why-us-banner-title">
          25+ Years Frontline Welfare Experience
        </h2>
        <p className="why-us-banner__tagline">
          Learning that doesn&apos;t translate into action isn&apos;t learning at all.
        </p>
        <Button href={`mailto:${EMAIL}`} variant="primary">
          Partner With Us
        </Button>
      </div>
    </div>
  </section>
);

export default WhyUsImpactBanner;
