import { findFirstNode } from '@stoplight/elements-core';
import {
  Branch,
  BranchSelector,
  TableOfContents,
  useGetBranches,
  useGetTableOfContents,
} from '@stoplight/elements-dev-portal';
import { Box, Flex } from '@stoplight/mosaic';
import { useRouter } from 'next/router';
import * as React from 'react';

import { NodeLink } from '../components/NodeLink';
import { SiteFooter } from '../components/SiteFooter';
import { useConfig } from '../hooks/useConfig';
import { getProjectIdFromSlug } from '../utils/config';
import { MAX_CONTENT_WIDTH, MIN_SIDEBAR_WIDTH } from '../utils/constants';
import { getNodeIdFromSlug } from '../utils/projects';
import { getLayout as getSiteLayout } from './SiteLayout';

interface StoplightProjectLayoutProps {
  children: React.ReactNode;
  projectSlug: string;
  branchSlug: string;
  nodeSlug: string;
}

export function StoplightProjectLayout(props: StoplightProjectLayoutProps) {
  React.useEffect(() => console.info('StoplightProjectLayout.mount'), []);
  const { children, projectSlug, branchSlug, nodeSlug } = props;

  const { theme, projects = {}, customComponents } = useConfig();
  const router = useRouter();
  const activeId = nodeSlug ? getNodeIdFromSlug(nodeSlug) : undefined;
  const projectId = getProjectIdFromSlug(projectSlug, projects) || '';

  const FooterImpl = customComponents?.siteFooter || SiteFooter;

  const maxContentWidth = theme?.maxContentWidth || MAX_CONTENT_WIDTH;
  const minSidebarWidth = theme?.minSidebarWidth || MIN_SIDEBAR_WIDTH;

  console.log('StoplightProjectLayout');
  const { data: toc, isFetched: isTocFetched } = useGetTableOfContents({
    projectId,
    branchSlug,
  });
  const tableOfContents = isTocFetched && toc ? toc : undefined;

  const { data: branches, isFetched: isBranchesFetched } = useGetBranches({
    projectId,
  });
  const onBranchSelect = React.useCallback(
    (selectedBranch: Branch) => {
      let projectBranchSlug = projectSlug;
      if (!selectedBranch.is_default) {
        projectBranchSlug = `${projectSlug}:${selectedBranch.slug}`;
      }

      router.push({
        pathname: router.route,
        query: {
          ...router.query,
          projectBranchSlug,
        },
      });
    },
    [router, projectSlug],
  );

  React.useEffect(() => {
    // Automatically redirect to the first node in the table of contents
    if (!nodeSlug && tableOfContents) {
      const firstNode = findFirstNode(tableOfContents.items);
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
  }, [nodeSlug, tableOfContents, router]);

  const maxContentWidthVal = `calc(${maxContentWidth}px - 96px - max(${minSidebarWidth}px, ((100% - ${maxContentWidth}px) / 2 + ${minSidebarWidth}px)))`;

  return (
    <Box flex={1} pos="relative">
      <Flex pos="absolute" pin overflowY="scroll">
        <Flex
          bg={{ default: 'canvas-50', dark: 'transparent' }}
          direction="col"
          borderR
          overflowY="scroll"
          pos="sticky"
          pinY
          pt={4}
          style={{
            width: `calc((100% - ${maxContentWidth}px) / 2 + ${minSidebarWidth}px)`,
            paddingLeft: `calc((100% - ${maxContentWidth}px) / 2)`,
            minWidth: `${minSidebarWidth}px`,
          }}
        >
          {isBranchesFetched && branches && branches.length > 1 && (
            <Box mt={7}>
              <BranchSelector branchSlug={branchSlug} branches={branches} onChange={onBranchSelect} />
            </Box>
          )}
          {tableOfContents && (
            <Box flex={1}>
              <TableOfContents activeId={activeId || ''} tableOfContents={tableOfContents} Link={NodeLink} />
            </Box>
          )}
        </Flex>

        <Flex as="main" pl={24} pr={10} w="full" flex={1} overflowY="auto" overflowX="hidden" direction="col">
          <Box
            pt={16}
            pb={24}
            style={{
              maxWidth: maxContentWidthVal,
            }}
          >
            {children}
          </Box>

          <Box
            borderT
            py={12}
            pl="px"
            ml="-px"
            mt="auto"
            style={{
              maxWidth: maxContentWidthVal,
            }}
          >
            <FooterImpl />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}

export const getLayout = (page: React.ReactNode, layoutProps: StoplightProjectLayoutProps) =>
  getSiteLayout(<StoplightProjectLayout {...layoutProps}>{page}</StoplightProjectLayout>, {});
