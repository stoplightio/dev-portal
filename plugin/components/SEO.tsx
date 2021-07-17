import { NextSeo } from 'next-seo';
import * as React from 'react';

export const SEO = ({ title, description }: { title?: string; description?: string }) => (
  <NextSeo title={title} description={description} />
);
