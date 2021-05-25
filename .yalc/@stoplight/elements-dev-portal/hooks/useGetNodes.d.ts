export declare function useGetNodes({ search, workspaceId, projectIds, }: {
    search: string;
    workspaceId: string;
    projectIds?: string[];
}): import("react-query").UseQueryResult<import("../types").NodeSearchResult[], unknown>;
