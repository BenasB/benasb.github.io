import React from 'react';
import { Helmet } from 'react-helmet';

interface PageMetaData {
  title?: string;
  description?: string;
  keywords?: string;
  robots?: string;
  canonical?: string;
  og?: {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
  };
}

const defaultPageMetaData: PageMetaData = {
  title: 'Bx2',
  description:
    'Software, technology and personal blog, portfolio established by Benas Budrys.',
  og: { image: 'https://bx2.tech/default.png' },
};

const MetaTags: React.FC<{ data: PageMetaData }> = ({ data }) => {
  const mergedPageMetaData: PageMetaData = {
    ...data,
    title: data.title || defaultPageMetaData.title,
    description: data.description || defaultPageMetaData.description,
    og: {
      title: data.og?.title || data.title || defaultPageMetaData.title,
      description:
        data.og?.description ||
        data.description ||
        defaultPageMetaData.description,
      image: data.og?.image || defaultPageMetaData.og?.image,
      url: data.og?.url || data.canonical || undefined,
    },
  };

  console.log(mergedPageMetaData);

  return (
    <Helmet>
      <title>{mergedPageMetaData.title}</title>
      <meta name="description" content={mergedPageMetaData.description} />

      {mergedPageMetaData.keywords && (
        <meta name="keywords" content={mergedPageMetaData.keywords} />
      )}
      {mergedPageMetaData.robots && (
        <meta name="robots" content={mergedPageMetaData.robots} />
      )}
      {mergedPageMetaData.canonical && (
        <link rel="canonical" href={mergedPageMetaData.canonical} />
      )}

      <meta property="og:title" content={mergedPageMetaData.og?.title} />
      <meta
        property="og:description"
        content={mergedPageMetaData.og?.description}
      />
      <meta property="og:image" content={mergedPageMetaData.og?.image} />
      {mergedPageMetaData.og?.url && (
        <meta property="og:url" content={mergedPageMetaData.og?.url} />
      )}
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
};

export default MetaTags;
