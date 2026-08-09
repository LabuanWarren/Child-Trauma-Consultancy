export const SITE_NAME = 'Child Trauma Consultancy';
export const SITE_URL = 'https://childtraumaconsultancy.com';
export const PHONE = '1300 299 500';
export const EMAIL = 'info@childtraumaconsultancy.com';

export const DEFAULT_DESCRIPTION =
  'Practical trauma-informed training and expert witness assessments for schools, community organisations, government agencies, and legal professionals across Australia and internationally.';

export const DEFAULT_OG_IMAGE = `${SITE_URL}/metadata-image.webp`;
export const OG_IMAGE_WIDTH = 1200;
export const OG_IMAGE_HEIGHT = 630;
export const OG_IMAGE_ALT =
  'Child Trauma Consultancy — practical trauma-informed training and expert witness services';

export const homeJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: SITE_NAME,
  description: DEFAULT_DESCRIPTION,
  url: SITE_URL,
  telephone: PHONE,
  email: EMAIL,
  areaServed: ['AU', 'International'],
  founder: {
    '@type': 'Person',
    name: 'Jaime Ramos',
  },
};

export const servicesJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Trauma-Informed Training & Consulting Services',
  provider: {
    '@type': 'ProfessionalService',
    name: SITE_NAME,
    url: `${SITE_URL}/services`,
  },
  description:
    'Professional development workshops, organisational consulting, and legal expert assessments for trauma-informed response.',
  areaServed: ['AU', 'International'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Core Service Pathways',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Professional Development & Workshops',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Organisational Consulting & Workplace Diagnostics',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Legal & Family Court Expert Assessments',
        },
      },
    ],
  },
};

export const resourcesJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Trauma-Informed Resources',
  url: `${SITE_URL}/resources`,
  description:
    'Action-oriented guides, framework downloads, and video insights for trauma-informed teams.',
  publisher: {
    '@type': 'ProfessionalService',
    name: SITE_NAME,
  },
  hasPart: [
    {
      '@type': 'CreativeWork',
      name: 'The De-Escalation Toolkit: Respond, Not React',
      description:
        'A step-by-step framework for managing dysregulation, aggression, and shutdown.',
    },
    {
      '@type': 'VideoObject',
      name: 'Trauma Is Not Misbehavior: Understanding Survival Responses',
      description:
        'Jaime Ramos breaks down why high-level theory falls short and how to reframe behavior as communication.',
    },
    {
      '@type': 'CreativeWork',
      name: 'Psychosocial Safety & Workplace Health Readiness',
      description:
        'A practical checklist for identifying hazards and supporting staff under new workplace legislation.',
    },
  ],
};

export const whoWeServeJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Who We Serve',
  url: `${SITE_URL}/who-we-serve`,
  description:
    'Tailored trauma-informed guidance for schools, legal professionals, out-of-home care agencies, and corporate leaders.',
  about: [
    { '@type': 'Thing', name: 'Schools & Early Education' },
    { '@type': 'Thing', name: 'Legal Professionals & Family Courts' },
    { '@type': 'Thing', name: 'Out-of-Home Care & Community Agencies' },
    { '@type': 'Thing', name: 'Corporate & HR Leaders' },
  ],
  provider: {
    '@type': 'ProfessionalService',
    name: SITE_NAME,
  },
};

export const whyUsPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Why Us',
  url: `${SITE_URL}/why-us`,
  description:
    'Why standard trauma theory falls short under pressure—and how Child Trauma Consultancy bridges the gap with lived experience and practical real-time tools.',
  about: [
    { '@type': 'Thing', name: 'Lived & Frontline Experience' },
    { '@type': 'Thing', name: 'Grounded, Not Theoretical' },
    { '@type': 'Thing', name: 'Responsive Partnership' },
  ],
  provider: {
    '@type': 'ProfessionalService',
    name: SITE_NAME,
  },
};

export const aboutPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About',
  url: `${SITE_URL}/about`,
  description:
    'Meet Jaime Ramos—Founder of Child Trauma Consultancy. Bridging the gap between trauma theory and real-time action.',
  mainEntity: {
    '@type': 'Person',
    name: 'Jaime Ramos',
    jobTitle: 'Founder',
    worksFor: {
      '@type': 'ProfessionalService',
      name: SITE_NAME,
    },
  },
};
