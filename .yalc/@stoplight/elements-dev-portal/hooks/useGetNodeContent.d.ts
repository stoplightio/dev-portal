export declare function useGetNodeContent({ nodeSlug, projectId, branchSlug, }: {
    nodeSlug: string;
    projectId: string;
    branchSlug?: string;
}): import("react-query").UseQueryResult<import("..").Node, unknown>;
