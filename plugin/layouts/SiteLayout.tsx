import { Flex } from '@stoplight/mosaic';
import * as React from 'react';

import { SEO } from '../components/SEO';
import { SiteHeader } from '../components/SiteHeader';
import { useConfig } from '../hooks/useConfig';

interface SiteLayoutProps {
  title?: string;
  description?: string;
  hideSearch?: boolean;
  children: React.ReactNode;
}

export function SiteLayout(props: SiteLayoutProps) {
  const { title, description, children, hideSearch } = props;

  React.useEffect(() => console.info('SiteLayout.mount'), []);

  const { customComponents } = useConfig();

  const HeaderImpl = customComponents?.siteHeader || SiteHeader;

  return (
    <>
      <Flex direction="col" minH="screen">
        <HeaderImpl hideSearch={hideSearch} />

        {children}
      </Flex>

      <SEO title={title} description={description} />
    </>
  );
}

export const getLayout = (page: SiteLayoutProps['children'], layoutProps: Omit<SiteLayoutProps, 'children'>) => (
  <SiteLayout {...layoutProps}>{page}</SiteLayout>
);
