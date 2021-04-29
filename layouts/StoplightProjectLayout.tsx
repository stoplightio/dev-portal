import { TableOfContents } from '@stoplight/elements/components/MosaicTableOfContents';
import { Box, containerSizes, Flex } from '@stoplight/mosaic';
import { useRouter } from 'next/router';
import * as React from 'react';

import { NodeLink } from '../components/NodeLink';
import { useTableOfContents } from '../hooks/useTableOfContents';
import { getParam } from '../utils/params';
import { getNodeIdFromSlug } from '../utils/projects';
import { getLayout as getSiteLayout } from './SiteLayout';

interface StoplightProjectLayoutProps {
  children: React.ReactNode;
}

const SIDEBAR_WIDTH = 300;

export function StoplightProjectLayout(props: StoplightProjectLayoutProps) {
  React.useEffect(() => console.info('StoplightProjectLayout.mount'), []);

  const { children } = props;

  const router = useRouter();
  const [projectSlug, branchSlug = ''] = getParam(router.query, 'projectBranchSlug').split(':');
  const nodeSlug = getParam(router.query, 'nodeSlug');
  const activeId = nodeSlug ? getNodeIdFromSlug(nodeSlug) : undefined;

  const { data, isFetched } = useTableOfContents(projectSlug, branchSlug);
  const tree = isFetched && data ? data.items : undefined;

  // TODO: Need to handle redirecting to the first node

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
          {tree && <TableOfContents activeId={activeId} tree={tree} Link={NodeLink} />}
        </Flex>

        <Flex as="main" flexGrow px={24} flex={1} overflowY="auto" overflowX="hidden" w="full">
          <Box pt={16} pb={24} style={{ maxWidth: 1500 }}>
            {children}
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}

export const getLayout = page => getSiteLayout(<StoplightProjectLayout>{page}</StoplightProjectLayout>);
