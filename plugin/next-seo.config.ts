import { DefaultSeoProps } from 'next-seo';

const SEO: DefaultSeoProps = {
  titleTemplate: '%s | Stoplight Docs',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://docs.stoplight.io',
    site_name: 'Stoplight Docs',
  },
  twitter: {
    handle: '@stoplightio',
    site: 'https://stoplight.io',
    cardType: 'summary_large_image',
  },
};

export default SEO;
