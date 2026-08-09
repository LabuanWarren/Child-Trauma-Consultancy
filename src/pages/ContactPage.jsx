import { lazy } from 'react';
import Navbar from '../components/Navbar';
import ContactHero from '../components/ContactHero';
import ContactSection from '../components/ContactSection';
import ContactSupportBanner from '../components/ContactSupportBanner';
import Seo from '../components/Seo';
import LazySection from '../components/LazySection';
import { SITE_NAME, contactPageJsonLd } from '../utils/seo';

const Footer = lazy(() => import('../components/Footer'));

const ContactPage = () => (
  <>
    <Seo
      title={`Contact — ${SITE_NAME}`}
      description="Get in touch for tailored trauma-informed training, workplace diagnostics, or expert witness assessments. We typically respond within 1–2 business days."
      jsonLd={contactPageJsonLd}
    />

    <a href="#main-content" className="skip-link">
      Skip to main content
    </a>

    <Navbar />

    <main id="main-content">
      <ContactHero />

      <LazySection minHeight={1200}>
        <ContactSection />
      </LazySection>

      <LazySection minHeight={320}>
        <ContactSupportBanner />
      </LazySection>

      <LazySection minHeight={360}>
        <Footer />
      </LazySection>
    </main>
  </>
);

export default ContactPage;
