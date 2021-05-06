import { MDAST } from '@stoplight/markdown';
import { IHttpOperation, IHttpRequest, IHttpService } from '@stoplight/types';
import { JSONSchema } from '../types';
export declare function isSMDASTRoot(maybeAst: unknown): maybeAst is MDAST.IRoot;
export declare function isJSONSchema(maybeSchema: unknown): maybeSchema is JSONSchema;
export declare function isHttpService(maybeHttpService: unknown): maybeHttpService is IHttpService;
export declare function isHttpOperation(maybeHttpOperation: unknown): maybeHttpOperation is IHttpOperation;
export declare function isHttpRequest(maybeHttpRequest: unknown): maybeHttpRequest is IHttpRequest;
export declare function isProperUrl(url: string): RegExpMatchArray | null;
