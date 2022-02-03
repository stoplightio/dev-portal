import { DefaultSMDComponents } from '@stoplight/markdown-viewer';
import { IHttpOperation, IHttpRequest } from '@stoplight/types';
import { CustomComponentMapping } from './Provider';
declare type PartialHttpRequest = Pick<IHttpRequest, 'method' | 'url'> & Partial<IHttpRequest>;
export { DefaultSMDComponents };
export declare const CodeComponent: CustomComponentMapping['code'];
export declare function parseHttpRequest(data: PartialHttpRequest): IHttpOperation;
