import { ProjectTableOfContents } from '../types';
export declare const getTableOfContents: ({ projectId, branchSlug, platformUrl, platformAuthToken, }: {
    projectId: string;
    branchSlug?: string | undefined;
    platformUrl?: string | undefined;
    platformAuthToken?: string | undefined;
}) => Promise<ProjectTableOfContents>;
