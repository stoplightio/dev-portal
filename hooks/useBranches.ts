import { useQuery } from 'react-query';

import { fetchBranches } from '../handlers/branches';

export function useBranches(
  {
    projectId,
    hostname = 'https://stoplight.io',
  }: {
    projectId: string;
    hostname?: string;
  },
  requestHeaders?: Record<string, string>,
) {
  return useQuery(['branches', projectId, hostname], () => fetchBranches({ projectId, hostname }, requestHeaders));
}
