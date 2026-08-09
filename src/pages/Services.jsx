import { lazy } from 'react';
import Navbar from '../components/Navbar';
import AnnouncementBar from '../components/AnnouncementBar';
import ServicesHero from '../components/ServicesHero';
import ServicePathways from '../components/ServicePathways';
import Seo from '../components/Seo';
import LazySection from '../components/LazySection';
import { DEFAULT_DESCRIPTION, SITE_NAME, servicesJsonLd } from '../utils/seo';

const QuoteCarousel = lazy(() => import('../components/QuoteCarousel'));
const Impact = lazy(() => import('../components/Impact'));
const ContactCta = lazy(() => import('../components/ContactCta'));
const Footer = lazy(() => import('../components/Footer'));

const Services = () => (
  <>
    <Seo
      title={`Services — ${SITE_NAME}`}
      description="Tailored trauma-informed training, organisational consulting, and expert witness assessments equipping teams to respond with clarity under pressure."
      jsonLd={servicesJsonLd}
    />

    <a href="#main-content" className="skip-link">
      Skip to main content
    </a>

    <Navbar />
    <AnnouncementBar />

    <main id="main-content">
      <ServicesHero />

      <LazySection minHeight={1200}>
        <ServicePathways />
      </LazySection>

      <LazySection minHeight={480}>
        <QuoteCarousel />
      </LazySection>

      <LazySection minHeight={740}>
        <Impact />
      </LazySection>

      <LazySection minHeight={900}>
        <ContactCta />
      </LazySection>

      <LazySection minHeight={360}>
        <Footer />
      </LazySection>
    </main>
  </>
);

export default Services;
