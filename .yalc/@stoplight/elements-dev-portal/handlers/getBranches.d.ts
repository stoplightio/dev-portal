import { Branch } from '../types';
export declare const getBranches: ({ projectId, platformUrl, platformAuthToken, }: {
    projectId: string;
    platformUrl?: string | undefined;
    platformAuthToken?: string | undefined;
}) => Promise<Branch[]>;
