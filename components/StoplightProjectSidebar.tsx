import { TableOfContentsSkeleton } from '@stoplight/elements/components/TableOfContents/Skeleton';
import { usePlatformApi } from '@stoplight/elements/hooks/usePlatformApi';
import { useTocContents } from '@stoplight/elements/hooks/useTocContents';
import { ITableOfContentsTree, TableOfContentsLinkWithId } from '@stoplight/elements/types';
import { Box } from '@stoplight/mosaic';
import { DefaultRow, RowComponentType, TableOfContents as UIKitTableOfContents } from '@stoplight/ui-kit';
import Link from 'next/link';
import * as path from 'path';
import * as React from 'react';

import { usePrefetchOnHover } from '../hooks/usePrefetchOnHover';

const tocUri = 'api/v1/projects/{workspaceSlug}/{projectSlug}/table-of-contents';

export type StoplightProjectSidebarProps = {
  projectSlug: string;
  nodeUri?: string;
  branchSlug?: string;
};

export const StoplightProjectSidebar = React.memo<StoplightProjectSidebarProps>(
  ({ projectSlug, branchSlug, nodeUri }) => {
    const { data: tocData, error } = usePlatformApi<ITableOfContentsTree>(
      tocUri,
      {
        workspaceSlug: 'meta',
        projectSlug,
        branchSlug,
      },
      {
        type: 'custom',
      },
    );

    const tree = tocData ?? { items: [] };

    const contents: TableOfContentsLinkWithId[] = useTocContents(tree).map(item => {
      return {
        ...item,
        isActive: item.type === 'item' && nodeUri !== void 0 ? item.to === nodeUri : false,
      };
    });

    if (!tocData && !error) {
      return <Box as={TableOfContentsSkeleton} w="full" />;
    }

    return (
      <Box
        as={UIKitTableOfContents}
        w="full"
        contents={contents}
        rowComponent={StoplightProjectSidebarRow}
        rowComponentExtraProps={{ nodeUri, projectSlug }}
      />
    );
  },
);

const StoplightProjectSidebarRow: RowComponentType<
  TableOfContentsLinkWithId,
  { projectSlug: string; nodeUri?: string }
> = ({ item, extra, ...rest }) => {
  const { projectSlug, nodeUri } = extra;

  const to = path.join('/docs', projectSlug, item.to || '');
  const prefetchProps = usePrefetchOnHover(to);

  if (!item.to) return <DefaultRow item={item} {...rest} />;
  if (item.isExternalLink) {
    return (
      <Box as="a" href={item.to} onClick={item.onClick} target="_blank" rel="noopener noreferrer">
        <DefaultRow item={item} {...rest} />
      </Box>
    );
  }

  const isSelected = item.to === nodeUri;

  // TODO: no-underline isn't working because Elements overrides with an a:hover style
  return (
    <Link href={to} passHref>
      <Box as="a" {...prefetchProps} textDecoration="no-underline">
        <DefaultRow
          item={{
            ...item,
            isSelected,
            isActive: isSelected,
          }}
          {...rest}
        />
      </Box>
    </Link>
  );
};
