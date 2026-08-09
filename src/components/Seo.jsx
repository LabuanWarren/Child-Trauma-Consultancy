import { Helmet } from 'react-helmet-async';
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_OG_IMAGE,
  OG_IMAGE_ALT,
  OG_IMAGE_HEIGHT,
  OG_IMAGE_WIDTH,
  SITE_NAME,
  SITE_URL,
} from '../utils/seo';

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
    <meta property="og:image" content={DEFAULT_OG_IMAGE} />
    <meta property="og:image:width" content={String(OG_IMAGE_WIDTH)} />
    <meta property="og:image:height" content={String(OG_IMAGE_HEIGHT)} />
    <meta property="og:image:alt" content={OG_IMAGE_ALT} />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={DEFAULT_OG_IMAGE} />
    <meta name="twitter:image:alt" content={OG_IMAGE_ALT} />

    {jsonLd && (
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    )}
  </Helmet>
);

export default Seo;
