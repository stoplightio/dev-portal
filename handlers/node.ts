import { Node } from '../interfaces/node';
import { getNodeIdFromSlug } from '../utils/projects';

export const fetchNode = async ({
  nodeSlug,
  projectId,
  branchSlug,
  hostname = 'https://stoplight.io',
}: {
  nodeSlug: string;
  projectId: string;
  branchSlug: string;
  hostname?: string;
}): Promise<Node> => {
  const nodeId = getNodeIdFromSlug(nodeSlug);
  const branchQuery = branchSlug ? `?branch=${branchSlug}` : '';
  const response = await fetch(`${hostname}/api/v1/projects/${projectId}/nodes/${nodeId}${branchQuery}`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data);
  }

  return data;
};
