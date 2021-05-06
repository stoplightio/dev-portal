import { IHttpOperation, NodeType } from '@stoplight/types';
import { ParsedNode } from '../types';
export declare function useDereferencedHttpOperation(parsedData: ParsedNode | undefined): {
    type: NodeType.Article;
    data: string | import("@stoplight/markdown/ast-types/mdast").IRoot;
} | {
    type: NodeType.HttpOperation;
    data: IHttpOperation;
} | {
    type: NodeType.HttpService;
    data: import("@stoplight/types").IHttpService;
} | {
    type: NodeType.Model;
    data: import("../types").JSONSchema;
} | {
    type: NodeType.HttpServer;
    data: unknown;
} | {
    type: NodeType.Unknown;
    data: unknown;
} | {
    type: NodeType.TableOfContents;
    data: unknown;
} | {
    type: NodeType.Generic;
    data: unknown;
} | undefined;
