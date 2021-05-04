import { SearchResult } from '../interfaces/searchResult';

export const fetchWorkspaceNodes = async (
  {
    workspaceId,
    projectIds,
    search,
    hostname = 'https://stoplight.io',
  }: {
    workspaceId: string;
    search?: string;
    projectIds?: string[];
    hostname?: string;
  },
  requestHeaders?: Record<string, string>,
): Promise<SearchResult[]> => {
  const queryParams = [];
  if (projectIds && projectIds.length) {
    queryParams.push(...projectIds.map(projectId => `project_ids=${projectId}`));
  }
  if (search) {
    queryParams.push(`search=${search}`);
  }
  const query = queryParams.length ? `?${queryParams.join('&')}` : '';

  const response = await fetch(`${hostname}/api/v1/workspaces/${workspaceId}/nodes${query}`, {
    headers: requestHeaders,
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data);
  }

  return data;
};
