import { Branch } from '../types';
export declare const getBranches: ({ projectId, platformUrl, }: {
    projectId: string;
    platformUrl?: string | undefined;
}) => Promise<Branch[]>;
