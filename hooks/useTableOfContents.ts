import { useQuery } from 'react-query';

import { fetchTableOfContents } from '../handlers/tableOfContents';

export function useTableOfContents(projectSlug: string, branchSlug: string) {
  return useQuery('tableOfContents', () => fetchTableOfContents(projectSlug, branchSlug));
}
