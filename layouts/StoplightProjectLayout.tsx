import { Box, containerSizes, Flex } from '@stoplight/mosaic';
import { useRouter } from 'next/router';
import * as React from 'react';

import { StoplightProjectSidebar } from '../components/StoplightProjectSidebar';
import { getLayout as getSiteLayout } from './SiteLayout';

interface StoplightProjectLayoutProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
  sidebar?: boolean;
}

const SIDEBAR_WIDTH = 300;

export function StoplightProjectLayout(props: StoplightProjectLayoutProps) {
  const { children } = props;

  const { query } = useRouter();
  const nodeUri = typeof query.docsPath === 'string' ? query.docsPath : query.docsPath?.join('/');
  const projectSlug = typeof query.projectSlug === 'string' ? query.projectSlug : query.projectSlug?.join('/');

  React.useEffect(() => console.info('StoplightProjectLayout.mount'), []);

  return (
    <Flex flexGrow>
      <Flex
        bg="canvas-100"
        borderR
        style={{
          width: `calc((100% - ${containerSizes.xl.maxWidth}px) / 2 + ${SIDEBAR_WIDTH}px)`,
          paddingLeft: `calc((100% - ${containerSizes.xl.maxWidth}px) / 2)`,
          minWidth: `${SIDEBAR_WIDTH}px`,
        }}
      >
        <StoplightProjectSidebar projectSlug={projectSlug} nodeUri={nodeUri} />
      </Flex>

      <Flex as="main" flexGrow>
        <Box style={{ maxWidth: '750px' }}>{children}</Box>
      </Flex>
    </Flex>
  );
}

export const getLayout = page => getSiteLayout(<StoplightProjectLayout>{page}</StoplightProjectLayout>);
