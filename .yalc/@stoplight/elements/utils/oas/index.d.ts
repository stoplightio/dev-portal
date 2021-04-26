import { ServiceNode } from './types';
export declare const MODEL_REGEXP: RegExp;
export declare const OPERATION_REGEXP: RegExp;
export declare function transformOasToServiceNode(apiDescriptionDocument: unknown): ServiceNode | null;
