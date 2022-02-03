import { Node } from '../types';
export declare class ResponseError extends Error {
    code: number;
    constructor(message: string, responseCode: number);
}
export declare const getNodeContent: ({ nodeSlug, projectId, branchSlug, platformUrl, platformAuthToken, }: {
    nodeSlug: string;
    projectId: string;
    branchSlug?: string | undefined;
    platformUrl?: string | undefined;
    platformAuthToken?: string | undefined;
}) => Promise<Node>;
