export function getNodeIdFromSlug(nodeSlug: string) {
  const [nodeId] = nodeSlug.split('-');
  return nodeId;
}
