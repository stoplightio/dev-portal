import { Branch } from '../interfaces/branch';

export const fetchBranches = async (
  {
    projectId,
    hostname = 'https://stoplight.io',
  }: {
    projectId: string;
    hostname?: string;
  },
  requestHeaders?: Record<string, string>,
): Promise<Branch[]> => {
  const response = await fetch(`${hostname}/api/v1/projects/${projectId}/branches`, { headers: requestHeaders });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data);
  }

  return data;
};
