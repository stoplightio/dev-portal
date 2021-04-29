import { TableOfContentsItem } from '@stoplight/elements/components/MosaicTableOfContents/types';

import { getProjectIdFromSlug } from '../utils/projects';

export const fetchTableOfContents = async (
  projectSlug: string,
  branchSlug: string,
): Promise<{ items: TableOfContentsItem[] }> => {
  const projectId = getProjectIdFromSlug(projectSlug);
  const branchQuery = branchSlug ? `?branch=${branchSlug}` : '';
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_HOSTNAME}/api/v1/projects/${projectId}/table-of-contents${branchQuery}`,
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data);
  }
  return data;
};
