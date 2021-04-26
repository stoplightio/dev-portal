import * as _path from 'path';

import { projectIdBySlug } from '../utils/projects';

export const fetchNode = async ({
  nodeIdSlug,
  projectBranchSlug,
}: {
  nodeIdSlug: string;
  projectBranchSlug: string;
}): Promise<NodeContent> => {
  const [nodeId] = nodeIdSlug.split('-');
  const [projectSlug, branchSlug] = projectBranchSlug.split(':');
  const projectId = projectIdBySlug[projectSlug];
  const branchQuery = branchSlug ? `?branch=${branchSlug}` : '';
  const data = await (
    await fetch(`${process.env.NEXT_PUBLIC_HOSTNAME}/api/v1/projects/${projectId}/nodes/${nodeId}${branchQuery}`)
  ).json();

  return data;
};

export type NodeContent = {
  id: string;
  type: string;
  uri: string;
  slug: string;
  name: string;
  summary: string;
  project_id: number;
  branch_id: number;
  data: string;
  links: {
    mock_url: string;
    export_url: string;
  };
  outbound_edges: NodeEdge[];
  inbound_edges: NodeEdge[];
};

export type NodeEdge = {
  id: string;
  type: string;
  uri: string;
  slug: string;
  title: string;
};
