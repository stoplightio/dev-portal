import { NodeSearchResult } from '../types';
export declare const getNodes: ({ workspaceId, branchSlug, projectIds, search, platformUrl, platformAuthToken, }: {
    workspaceId?: string | undefined;
    branchSlug?: string | undefined;
    projectIds?: string[] | undefined;
    search?: string | undefined;
    platformUrl?: string | undefined;
    platformAuthToken?: string | undefined;
}) => Promise<NodeSearchResult[]>;
