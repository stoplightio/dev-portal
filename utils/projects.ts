// TODO: Ideally we fetch the list of projects to get their IDs instead of hardcoding
// Until then, you'll need to update this mapping to match your env
const projectIdBySlug = {
  platform: 'cHJvajozMw',
  elements: 'cHJvajoy',
  prism: 'cHJvajozNQ',
  spectral: 'cHJvajozNA',
  cli: 'cHJvajo1',
  'studio-demo': 'cHJvajozNg',
};

export function getProjectIdFromSlug(projectSlug: string) {
  return projectIdBySlug[projectSlug];
}

export function getNodeIdFromSlug(nodeSlug: string) {
  const [nodeId] = nodeSlug.split('-');
  return nodeId;
}
