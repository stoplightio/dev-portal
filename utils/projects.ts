// TODO: Ideally we fetch the list of projects to get their IDs instead of hardcoding
// Until then, you'll need to update this mapping to match your env
export const projectIdBySlug = {
  platform: 'cHJqOjMz',
  elements: 'cHJvajoy',
  prism: 'cHJqOjM1',
  spectral: 'cHJqOjM0',
  cli: 'cHJvajo1',
  'studio-demo': 'cHJqOjM2',
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
