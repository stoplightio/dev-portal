import * as React from 'react';
import { ReferenceResolver } from '../utils/ref-resolving/ReferenceResolver';
declare type InlineRefResolverProviderProps = {
    document?: unknown;
    resolver?: ReferenceResolver;
};
export declare const InlineRefResolverProvider: React.FC<InlineRefResolverProviderProps>;
export declare const useInlineRefResolver: () => ReferenceResolver | undefined;
export declare const useDocument: () => object | undefined;
export declare const useResolvedObject: (currentObject: object) => object;
export {};
