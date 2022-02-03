import { Workspace } from '../types';
export declare const getWorkspace: ({ projectIds, platformUrl, platformAuthToken, }: {
    projectIds: string[];
    platformUrl?: string | undefined;
    platformAuthToken?: string | undefined;
}) => Promise<Workspace>;
