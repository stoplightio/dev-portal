import { TableOfContents } from '../interfaces/tableOfContents';

export const fetchTableOfContents = async (
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
): Promise<TableOfContents> => {
  const branchQuery = branchSlug ? `?branch=${branchSlug}` : '';
  const response = await fetch(`${hostname}/api/v1/projects/${projectId}/table-of-contents${branchQuery}`, {
    headers: requestHeaders,
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data);
  }
  return data;
};
