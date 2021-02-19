import * as _path from 'path';

export const fetchNode = async ({ nodeUri, projectSlug }: { nodeUri: string; projectSlug: string }) => {
  // TODO: probably shouldn't hardcode this
  const data = await (
    await fetch(`https://stoplight.io/api/v1/projects/` + _path.join('meta', projectSlug, 'bundled-nodes', nodeUri))
  ).json();

  return data;
};
