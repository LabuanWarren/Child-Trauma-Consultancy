import { Helmet } from 'react-helmet-async';
import { DEFAULT_DESCRIPTION, SITE_NAME, SITE_URL } from '../utils/seo';

const Seo = ({
  title,
  description = DEFAULT_DESCRIPTION,
  jsonLd = null,
}) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={SITE_URL} />

    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={SITE_URL} />
    <meta property="og:site_name" content={SITE_NAME} />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />

    {jsonLd && (
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    )}
  </Helmet>
);

export default Seo;
