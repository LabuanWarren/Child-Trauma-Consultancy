import { lazy } from 'react';
import Navbar from '../components/Navbar';
import AnnouncementBar from '../components/AnnouncementBar';
import Hero from '../components/Hero';
import ScrollProgressButton from '../components/ScrollProgressButton';
import Seo from '../components/Seo';
import LazySection from '../components/LazySection';
import { DEFAULT_DESCRIPTION, SITE_NAME, homeJsonLd } from '../utils/seo';

const SHOW_PARTNERS_SECTION = false;

const Partners = lazy(() => import('../components/Partners'));
const CoreProblem = lazy(() => import('../components/CoreProblem'));
const Transformation = lazy(() => import('../components/Transformation'));
const Pathways = lazy(() => import('../components/Pathways'));
const WhyUs = lazy(() => import('../components/WhyUs'));
const QuoteCarousel = lazy(() => import('../components/QuoteCarousel'));
const Impact = lazy(() => import('../components/Impact'));
const ContactCta = lazy(() => import('../components/ContactCta'));
const Footer = lazy(() => import('../components/Footer'));

const Home = () => (
  <>
    <Seo
      title={`${SITE_NAME} — Practical Trauma-Informed Training & Expert Witness Services`}
      description={DEFAULT_DESCRIPTION}
      jsonLd={homeJsonLd}
    />

    <a href="#main-content" className="skip-link">
      Skip to main content
    </a>

    <Navbar />
    <AnnouncementBar />

    <main id="main-content">
      <Hero />

      {SHOW_PARTNERS_SECTION && (
        <LazySection minHeight={420}>
          <Partners />
        </LazySection>
      )}

      <LazySection minHeight={2400}>
        <CoreProblem />
      </LazySection>

      <LazySection minHeight={480}>
        <Transformation />
      </LazySection>

      <LazySection minHeight={2000}>
        <Pathways />
      </LazySection>

      <LazySection minHeight={2400}>
        <WhyUs />
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

    <ScrollProgressButton />
  </>
);

export default Home;
