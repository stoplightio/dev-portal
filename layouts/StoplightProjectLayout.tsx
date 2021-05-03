import { TableOfContents } from '@stoplight/elements/components/MosaicTableOfContents';
import { findFirstNode } from '@stoplight/elements/components/MosaicTableOfContents/utils';
import { Box, containerSizes, Flex } from '@stoplight/mosaic';
import { useRouter } from 'next/router';
import * as React from 'react';

import { BranchSelector } from '../components/BranchSelector';
import { NodeLink } from '../components/NodeLink';
import { useBranches } from '../hooks/useBranches';
import { useTableOfContents } from '../hooks/useTableOfContents';
import { getNodeIdFromSlug, getProjectIdFromSlug } from '../utils/projects';
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

  const router = useRouter();
  const activeId = nodeSlug ? getNodeIdFromSlug(nodeSlug) : undefined;
  const projectId = getProjectIdFromSlug(projectSlug);

  const { data: toc, isFetched: isTocFetched } = useTableOfContents({
    projectId,
    branchSlug,
    hostname: process.env.NEXT_PUBLIC_HOSTNAME,
  });
  const tree = isTocFetched && toc ? toc.items : undefined;

  const { data: branches, isFetched: isBranchesFetched } = useBranches({
    projectId,
    hostname: process.env.NEXT_PUBLIC_HOSTNAME,
  });
  const onBranchSelect = React.useCallback(
    (nextBranchSlug: string) => {
      router.push({
        pathname: router.route,
        query: {
          ...router.query,
          projectBranchSlug: `${projectSlug}:${nextBranchSlug}`,
        },
      });
    },
    [router, projectSlug],
  );

  React.useEffect(() => {
    // Automatically redirect to the first node in the table of contents
    if (!nodeSlug && tree) {
      const firstNode = findFirstNode(tree);
      if (firstNode) {
        router.replace({
          pathname: router.route,
          query: {
            ...router.query,
            nodeSlug: firstNode.slug,
          },
        });
      }
    }
  }, [nodeSlug, tree, router]);

  return (
    <Box flex={1} pos="relative">
      <Flex pos="absolute" pin overflowY="scroll">
        <Flex
          bg="canvas-100"
          direction="col"
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
          {isBranchesFetched && branches && branches.length > 1 && (
            <Box mt={7}>
              <BranchSelector branchSlug={branchSlug} branches={branches} onChange={onBranchSelect} />
            </Box>
          )}
          {tree && (
            <Box flex={1}>
              <TableOfContents activeId={activeId} tree={tree} Link={NodeLink} />
            </Box>
          )}
        </Flex>

        <Box as="main" px={24} w="full" flex={1} overflowY="auto" overflowX="hidden">
          <Box pt={16} pb={24} style={{ maxWidth: 1500 }}>
            {children}
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}

export const getLayout = (page, layoutProps: StoplightProjectLayoutProps) =>
  getSiteLayout(<StoplightProjectLayout {...layoutProps}>{page}</StoplightProjectLayout>, layoutProps);
