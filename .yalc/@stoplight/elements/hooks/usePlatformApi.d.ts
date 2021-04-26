import { Dictionary } from '@stoplight/types';
declare type PlatformApiProps = {
    platformUrl?: string;
    workspaceSlug: string;
    projectSlug: string;
    branchSlug?: string;
    nodeUri?: string;
    authToken?: string;
};
export declare function usePlatformApi<T>(uriTemplate: string, { platformUrl, workspaceSlug, projectSlug, branchSlug, nodeUri, authToken }: PlatformApiProps, queryParams?: Dictionary<string>): import("swr").responseInterface<T, any>;
export declare function useActionsApi<T>(path: string, { platformUrl, projectSlug, workspaceSlug, branchSlug, nodeUri, authToken }: PlatformApiProps): import("swr").responseInterface<T, any>;
export {};
