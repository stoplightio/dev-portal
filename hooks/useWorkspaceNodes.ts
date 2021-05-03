import { useQuery } from 'react-query';

import { fetchWorkspaceNodes } from '../handlers/workspaceNodes';

export function useWorkspaceNodes(
  {
    search,
    workspaceId,
    projectIds,
    hostname = 'https://stoplight.io',
  }: {
    search: string;
    workspaceId: string;
    projectIds?: string[];
    hostname?: string;
  },
  requestHeaders?: Record<string, string>,
) {
  return useQuery(['workspaceNodes', workspaceId, projectIds, search, hostname], () =>
    fetchWorkspaceNodes({ workspaceId, projectIds, search, hostname }, requestHeaders),
  );
}
