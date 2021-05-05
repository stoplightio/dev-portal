import { useQuery } from 'react-query';
import { useDebounce } from 'use-debounce';

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
  const [debounceSearch] = useDebounce(search, 500);
  return useQuery(['workspaceNodes', workspaceId, projectIds, debounceSearch, hostname], () =>
    fetchWorkspaceNodes({ workspaceId, projectIds, search: debounceSearch, hostname }, requestHeaders),
  );
}
