import { TableOfContents } from '@stoplight/elements/components/MosaicTableOfContents';
import { Box, containerSizes, Flex } from '@stoplight/mosaic';
import * as React from 'react';

import { NodeLink } from '../components/NodeLink';
import { useTableOfContents } from '../hooks/useTableOfContents';
import { getNodeIdFromSlug } from '../utils/projects';
import { getLayout as getSiteLayout } from './SiteLayout';

interface StoplightProjectLayoutProps {
  children: React.ReactNode;
  projectSlug: string;
  branchSlug: string;
  nodeSlug: string;
}

const SIDEBAR_WIDTH = 300;

export function StoplightProjectLayout(props: StoplightProjectLayoutProps) {
  React.useEffect(() => console.info('StoplightProjectLayout.mount'), []);

  const { children, projectSlug, branchSlug, nodeSlug } = props;

  const { data, isFetched } = useTableOfContents(projectSlug, branchSlug);
  const tree = isFetched && data ? data.items : undefined;
  const activeId = nodeSlug ? getNodeIdFromSlug(nodeSlug) : undefined;

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
          <Box pt={16} pb={24} w="full" style={{ maxWidth: 1500 }}>
            {children}
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}

export const getLayout = (page, layoutProps: StoplightProjectLayoutProps) =>
  getSiteLayout(<StoplightProjectLayout {...layoutProps}>{page}</StoplightProjectLayout>, layoutProps);
