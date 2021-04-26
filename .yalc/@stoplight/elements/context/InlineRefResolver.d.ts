import type { SchemaTreeRefDereferenceFn } from '@stoplight/json-schema-tree';
import * as React from 'react';
export declare const DocumentContext: React.Context<unknown>;
declare type InlineRefResolverProviderProps = {
    document: unknown;
} | {
    resolver: SchemaTreeRefDereferenceFn;
};
export declare const InlineRefResolverProvider: React.FC<InlineRefResolverProviderProps>;
export declare const useInlineRefResolver: () => SchemaTreeRefDereferenceFn | undefined;
export declare const useDocument: () => unknown;
export {};
