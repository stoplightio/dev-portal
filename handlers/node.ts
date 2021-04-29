import { getNodeIdFromSlug, getProjectIdFromSlug } from '../utils/projects';

export const fetchNode = async ({
  nodeSlug,
  projectSlug,
  branchSlug,
}: {
  nodeSlug: string;
  projectSlug: string;
  branchSlug: string;
}): Promise<Node> => {
  const nodeId = getNodeIdFromSlug(nodeSlug);
  const projectId = getProjectIdFromSlug(projectSlug);
  const branchQuery = branchSlug ? `?branch=${branchSlug}` : '';
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_HOSTNAME}/api/v1/projects/${projectId}/nodes/${nodeId}${branchQuery}`,
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data);
  }

  return data;
};

export type Node = {
  id: string;
  type: string;
  uri: string;
  slug: string;
  title: string;
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
