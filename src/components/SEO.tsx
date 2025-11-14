import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
  type?: 'website' | 'article';
}

const SEO = ({
  title = 'EM Global Solutions - Servicios de Marketing Digital y Desarrollo Web',
  description = 'Impulsa tu negocio con servicios profesionales de marketing digital, desarrollo web, SEO, gestión de redes sociales y automatización de procesos. Soluciones personalizadas para empresas.',
  keywords = 'marketing digital, desarrollo web, SEO, redes sociales, automatización, diseño web, comercio electrónico, email marketing, gestión de redes sociales',
  ogImage = 'https://masterllc.online/og-image.jpg',
  canonicalUrl = 'https://masterllc.online/',
  type = 'website'
}: SEOProps) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};

export default SEO;
