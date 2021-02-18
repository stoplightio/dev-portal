import { Box, containerSizes, Flex } from '@stoplight/mosaic';
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
        <StoplightProjectSidebar />
      </Flex>

      <Flex as="main" flexGrow>
        <Box style={{ maxWidth: '750px' }}>{children}</Box>
      </Flex>
    </Flex>
  );
}

export const getLayout = page => getSiteLayout(<StoplightProjectLayout>{page}</StoplightProjectLayout>);
