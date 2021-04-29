import { getProjectIdFromSlug } from '../utils/projects';

export const fetchProject = async (projectSlug: string): Promise<Project> => {
  const projectId = getProjectIdFromSlug(projectSlug);
  const response = await fetch(`${process.env.NEXT_PUBLIC_HOSTNAME}/api/v1/projects/${projectId}`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data);
  }

  return data;
};

export type Project = {
  id: string;
  name: string;
  slug: string;
  description: string;
  default_branch_id: number;
  workspace: Workspace;
};

type Workspace = {
  id: string;
  name: string;
  slug: string;
};
