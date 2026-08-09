import { lazy } from 'react';
import Navbar from '../components/Navbar';
import AnnouncementBar from '../components/AnnouncementBar';
import WhoWeServeHero from '../components/WhoWeServeHero';
import SectorGrid from '../components/SectorGrid';
import Seo from '../components/Seo';
import LazySection from '../components/LazySection';
import { SITE_NAME, whoWeServeJsonLd } from '../utils/seo';

const QuoteCarousel = lazy(() => import('../components/QuoteCarousel'));
const Impact = lazy(() => import('../components/Impact'));
const ContactCta = lazy(() => import('../components/ContactCta'));
const Footer = lazy(() => import('../components/Footer'));

const WhoWeServe = () => (
  <>
    <Seo
      title={`Who We Serve — ${SITE_NAME}`}
      description="Tailored trauma-informed guidance for schools, legal professionals, out-of-home care agencies, and corporate leaders supporting trauma-affected individuals."
      jsonLd={whoWeServeJsonLd}
    />

    <a href="#main-content" className="skip-link">
      Skip to main content
    </a>

    <Navbar />
    <AnnouncementBar />

    <main id="main-content">
      <WhoWeServeHero />

      <LazySection minHeight={1200}>
        <SectorGrid />
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

export default WhoWeServe;
