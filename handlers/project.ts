import { Project } from '../interfaces/project';

export const fetchProject = async (
  {
    projectId,
    hostname = 'https://stoplight.io',
  }: {
    projectId: string;
    hostname?: string;
  },
  requestHeaders?: Record<string, string>,
): Promise<Project> => {
  const response = await fetch(`${hostname}/api/v1/projects/${projectId}`, { headers: requestHeaders });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data);
  }

  return data;
};