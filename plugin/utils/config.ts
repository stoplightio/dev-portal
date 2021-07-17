import { DevPortalProviderProps } from '../components/Provider';

export type DevPortalConfig = DevPortalProviderProps;
export type LoadableDevPortalConfig = DevPortalConfig | (() => Promise<DevPortalConfig>);

export const resolveConfig = async (config: LoadableDevPortalConfig): Promise<DevPortalConfig> => {
  if (typeof config === 'function') {
    return config();
  }

  return Promise.resolve(config);
};

export function getProjectIdFromSlug(projectSlug: string, projects: DevPortalConfig['projects']) {
  return projects ? projects[projectSlug]?.id : null;
}

export function getProjectSlugFromId(projectId: string, projects: DevPortalConfig['projects']) {
  if (!projects) return null;

  for (const slug in projects) {
    if (projects[slug].id === projectId) {
      return slug;
    }
  }

  return null;
}

export function getProjectIds(projects: DevPortalConfig['projects']) {
  if (!projects) return [];

  return Object.values(projects).map(p => p.id);
}

export function getNodeIdFromSlug(nodeSlug: string) {
  const [nodeId] = nodeSlug.split('-');
  return nodeId;
}
