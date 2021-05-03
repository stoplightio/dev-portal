import { useQuery } from 'react-query';

import { fetchTableOfContents } from '../handlers/tableOfContents';

export function useTableOfContents(
  {
    projectId,
    branchSlug,
    hostname = 'https://stoplight.io',
  }: {
    projectId: string;
    branchSlug: string;
    hostname?: string;
  },
  requestHeaders?: Record<string, string>,
) {
  return useQuery(['tableOfContents', projectId, branchSlug, hostname], () =>
    fetchTableOfContents({ projectId, branchSlug, hostname }, requestHeaders),
  );
}
