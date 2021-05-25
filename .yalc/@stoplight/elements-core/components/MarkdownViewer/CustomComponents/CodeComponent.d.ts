import { CustomComponentMapping } from '@stoplight/markdown-viewer';
import { IHttpOperation, IHttpRequest } from '@stoplight/types';
declare type PartialHttpRequest = Pick<IHttpRequest, 'method' | 'url'> & Partial<IHttpRequest>;
export declare const CodeComponent: CustomComponentMapping['code'];
export declare function parseHttpRequest(data: PartialHttpRequest): IHttpOperation;
export {};
