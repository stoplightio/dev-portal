// TODO: Ideally we fetch the list of projects to get their IDs instead of hardcoding
// Until then, you'll need to update this mapping to match your env
export const projectIdBySlug = {
  platform: 'cHJqOjI',
  elements: 'cHJvajo0MTg2',
  prism: 'cHJqOjM',
  spectral: 'cHJqOjQ',
  api: 'cHJqOjU',
  'studio-demo': 'cHJqOjM1ODEw',
};

export function getProjectIdFromSlug(projectSlug: string) {
  return projectIdBySlug[projectSlug];
}

export function getProjectSlugFromId(projectId: string) {
  return Object.keys(projectIdBySlug).find(key => projectIdBySlug[key] === projectId);
}

export function getNodeIdFromSlug(nodeSlug: string) {
  const [nodeId] = nodeSlug.split('-');
  return nodeId;
}
