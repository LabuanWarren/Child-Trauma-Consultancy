export const SITE_NAME = 'Child Trauma Consultancy';
export const SITE_URL = 'https://childtraumaconsultancy.com';
export const PHONE = '1300 299 500';
export const EMAIL = 'info@childtraumaconsultancy.com';

export const DEFAULT_DESCRIPTION =
  'Practical trauma-informed training and expert witness assessments for schools, community organisations, government agencies, and legal professionals across Australia and internationally.';

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
