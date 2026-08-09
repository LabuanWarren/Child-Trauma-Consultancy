import { lazy } from 'react';
import Navbar from '../components/Navbar';
import AnnouncementBar from '../components/AnnouncementBar';
import WhyUsHero from '../components/WhyUsHero';
import WhyUsDifferentiators from '../components/WhyUsDifferentiators';
import WhyUsImpactBanner from '../components/WhyUsImpactBanner';
import Seo from '../components/Seo';
import LazySection from '../components/LazySection';
import { SITE_NAME, whyUsPageJsonLd } from '../utils/seo';

const QuoteCarousel = lazy(() => import('../components/QuoteCarousel'));
const Impact = lazy(() => import('../components/Impact'));
const ContactCta = lazy(() => import('../components/ContactCta'));
const Footer = lazy(() => import('../components/Footer'));

const WhyUsPage = () => (
  <>
    <Seo
      title={`Why Us — ${SITE_NAME}`}
      description="Most training tells you what trauma is. We teach your team how to act when face-to-face with dysregulated behavior—grounded in 25+ years of frontline experience."
      jsonLd={whyUsPageJsonLd}
    />

    <a href="#main-content" className="skip-link">
      Skip to main content
    </a>

    <Navbar />
    <AnnouncementBar />

    <main id="main-content">
      <WhyUsHero />

      <LazySection minHeight={600}>
        <WhyUsDifferentiators />
      </LazySection>

      <LazySection minHeight={320}>
        <WhyUsImpactBanner />
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

export default WhyUsPage;
