import { NodeSearchResult } from '../types';
export declare const getNodes: ({ workspaceId, projectIds, search, platformUrl, }: {
    workspaceId: string;
    search?: string | undefined;
    projectIds?: string[] | undefined;
    platformUrl?: string | undefined;
}) => Promise<NodeSearchResult[]>;
