import { lazy } from 'react';
import Navbar from '../components/Navbar';
import AnnouncementBar from '../components/AnnouncementBar';
import ResourcesHero from '../components/ResourcesHero';
import ResourceLibrary from '../components/ResourceLibrary';
import Seo from '../components/Seo';
import LazySection from '../components/LazySection';
import { SITE_NAME, resourcesJsonLd } from '../utils/seo';

const QuoteCarousel = lazy(() => import('../components/QuoteCarousel'));
const Impact = lazy(() => import('../components/Impact'));
const ContactCta = lazy(() => import('../components/ContactCta'));
const Footer = lazy(() => import('../components/Footer'));

const Resources = () => (
  <>
    <Seo
      title={`Resources — ${SITE_NAME}`}
      description="Action-oriented guides, framework downloads, and video insights to help your team lead with understanding in high-pressure moments."
      jsonLd={resourcesJsonLd}
    />

    <a href="#main-content" className="skip-link">
      Skip to main content
    </a>

    <Navbar />
    <AnnouncementBar />

    <main id="main-content">
      <ResourcesHero />

      <LazySection minHeight={900}>
        <ResourceLibrary />
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

export default Resources;
