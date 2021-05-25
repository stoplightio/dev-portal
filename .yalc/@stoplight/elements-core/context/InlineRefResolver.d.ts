import { JSONSchema7 } from 'json-schema';
import * as React from 'react';
import { JSONSchema } from '../types';
export declare type SchemaTreeRefInfo = {
    source: string | null;
    pointer: string | null;
};
export declare type SchemaTreeRefDereferenceFn = (ref: SchemaTreeRefInfo, propertyPath: string[] | null, schema: JSONSchema) => JSONSchema7;
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
