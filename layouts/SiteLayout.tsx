import { Flex } from '@stoplight/mosaic';
import * as React from 'react';

import { SEO } from '../components/SEO';
import SiteHeader from '../components/SiteHeader';

interface SiteLayoutProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
}

export function SiteLayout(props: SiteLayoutProps) {
  const { title, description, children } = props;

  React.useEffect(() => console.info('SiteLayout.mount'), []);

  return (
    <>
      <Flex direction="col" minH="screen">
        <SiteHeader />
        {children}
      </Flex>

      <SEO title={title} description={description} />
    </>
  );
}

export const getLayout = page => <SiteLayout>{page}</SiteLayout>;
