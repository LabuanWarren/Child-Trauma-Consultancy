import { lazy } from 'react';
import Navbar from '../components/Navbar';
import AnnouncementBar from '../components/AnnouncementBar';
import AboutHero from '../components/AboutHero';
import AboutBio from '../components/AboutBio';
import AboutMission from '../components/AboutMission';
import Seo from '../components/Seo';
import LazySection from '../components/LazySection';
import { SITE_NAME, aboutPageJsonLd } from '../utils/seo';

const QuoteCarousel = lazy(() => import('../components/QuoteCarousel'));
const Impact = lazy(() => import('../components/Impact'));
const ContactCta = lazy(() => import('../components/ContactCta'));
const Footer = lazy(() => import('../components/Footer'));

const AboutPage = () => (
  <>
    <Seo
      title={`About — ${SITE_NAME}`}
      description="Meet Jaime Ramos—Founder of Child Trauma Consultancy. Bridging the gap between trauma theory and real-time action with 25+ years of frontline child protection experience."
      jsonLd={aboutPageJsonLd}
    />

    <a href="#main-content" className="skip-link">
      Skip to main content
    </a>

    <Navbar />
    <AnnouncementBar />

    <main id="main-content">
      <AboutHero />

      <LazySection minHeight={480}>
        <AboutBio />
      </LazySection>

      <LazySection minHeight={320}>
        <AboutMission />
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

export default AboutPage;
