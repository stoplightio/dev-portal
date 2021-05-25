import { ProjectTableOfContents } from '../types';
export declare const getTableOfContents: ({ projectId, branchSlug, platformUrl, }: {
    projectId: string;
    branchSlug?: string | undefined;
    platformUrl?: string | undefined;
}) => Promise<ProjectTableOfContents>;
