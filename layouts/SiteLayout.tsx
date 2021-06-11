import { Flex } from '@stoplight/mosaic';
import * as React from 'react';

import { SEO } from '../components/SEO';
import SiteHeader from '../components/SiteHeader';

interface SiteLayoutProps {
  title?: string;
  description?: string;
  hideSearch?: boolean;
  children: React.ReactNode;
}

export function SiteLayout(props: SiteLayoutProps) {
  const { title, description, children, hideSearch } = props;

  React.useEffect(() => console.info('SiteLayout.mount'), []);

  return (
    <>
      <Flex direction="col" minH="screen">
        <SiteHeader hideSearch={hideSearch} />

        {children}
      </Flex>

      <SEO title={title} description={description} />
    </>
  );
}

export const getLayout = (page, layoutProps) => <SiteLayout {...layoutProps}>{page}</SiteLayout>;
