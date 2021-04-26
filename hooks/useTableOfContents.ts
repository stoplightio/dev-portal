import { useQuery } from 'react-query';

import { fetchTableOfContents } from '../handlers/tableOfContents';
import { projectIdBySlug } from '../utils/projects';

export function useTableOfContents(projectBranchSlug: string) {
  const [projectSlug, branchSlug] = projectBranchSlug.split(':');
  const projectId = projectIdBySlug[projectSlug];

  return useQuery('toc', fetchTableOfContents(projectId, branchSlug));
}
