import { CustomLinkComponent, ReferenceResolver } from '@stoplight/elements-core';
import { Node } from '../../types';
export declare type NodeContentProps = {
    node: Node;
    Link: CustomLinkComponent;
    hideTryIt?: boolean;
    hideTryItPanel?: boolean;
    hideMocking?: boolean;
    hideExport?: boolean;
    tryItCredentialsPolicy?: 'omit' | 'include' | 'same-origin';
    tryItCorsProxy?: string;
    refResolver?: ReferenceResolver;
};
export declare const NodeContent: ({ node, Link, hideTryIt, hideTryItPanel, hideMocking, hideExport, tryItCredentialsPolicy, tryItCorsProxy, refResolver, }: NodeContentProps) => JSX.Element;
