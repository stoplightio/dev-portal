export const fetchTableOfContents = (projectId, branchSlug) => {
  const branchQuery = branchSlug ? `?branch=${branchSlug}` : '';
  return async () =>
    (
      await fetch(`${process.env.NEXT_PUBLIC_HOSTNAME}/api/v1/projects/${projectId}/table-of-contents${branchQuery}`)
    ).json();
};
