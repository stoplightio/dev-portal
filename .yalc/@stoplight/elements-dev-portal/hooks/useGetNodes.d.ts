export declare function useGetNodes({ search, workspaceId, branchSlug, projectIds, pause, }: {
    search: string;
    workspaceId?: string;
    branchSlug?: string;
    projectIds?: string[];
    pause?: boolean;
}): import("react-query").UseQueryResult<import("..").NodeSearchResult[], unknown>;
