import { TableOfContents } from '@stoplight/elements/components/MosaicTableOfContents';
import { Box, containerSizes, Flex } from '@stoplight/mosaic';
import { useRouter } from 'next/router';
import * as React from 'react';

import { NodeLink } from '../components/NodeLink';
import { useTableOfContents } from '../hooks/useTableOfContents';
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
  const projectBranchSlug = typeof query.projectSlug === 'string' ? query.projectSlug : query.projectSlug?.join('/');
  const nodeIdSlug = typeof query.nodeIdSlug === 'string' ? query.nodeIdSlug : query.nodeIdSlug?.join('/');
  const activeNodeId = nodeIdSlug?.split('-')[0];

  const { data, isFetched } = useTableOfContents(projectBranchSlug);

  React.useEffect(() => console.info('StoplightProjectLayout.mount'), []);

  return (
    <Box flex={1} pos="relative">
      <Flex pos="absolute" pin overflowY="scroll">
        <Flex
          bg="canvas-100"
          borderR
          overflowY="scroll"
          pos="sticky"
          pinY
          style={{
            width: `calc((100% - ${containerSizes.xl.maxWidth}px) / 2 + ${SIDEBAR_WIDTH}px)`,
            paddingLeft: `calc((100% - ${containerSizes.xl.maxWidth}px) / 2)`,
            minWidth: `${SIDEBAR_WIDTH}px`,
          }}
        >
          {isFetched && data?.items && <TableOfContents activeId={activeNodeId} tree={data.items} Link={NodeLink} />}
        </Flex>

        <Flex as="main" flexGrow>
          <Box style={{ maxWidth: '750px' }}>{children}</Box>
        </Flex>
      </Flex>
    </Box>
  );
}

export const getLayout = page => getSiteLayout(<StoplightProjectLayout>{page}</StoplightProjectLayout>);
