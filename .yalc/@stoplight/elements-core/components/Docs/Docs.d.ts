import { NodeType } from '@stoplight/types';
import { Location } from 'history';
import * as React from 'react';
import { ParsedNode } from '../../types';
interface BaseDocsProps {
    className?: string;
    headless?: boolean;
    uri?: string;
    location?: Location;
    hideTryIt?: boolean;
    hideTryItPanel?: boolean;
}
export interface DocsProps extends BaseDocsProps {
    nodeType: NodeType;
    nodeData: unknown;
    useNodeForRefResolving?: boolean;
}
export interface DocsComponentProps<T = unknown> extends BaseDocsProps {
    data: T;
}
export declare const Docs: React.NamedExoticComponent<DocsProps>;
export interface ParsedDocsProps extends BaseDocsProps {
    node: ParsedNode;
}
export declare const ParsedDocs: ({ node, ...commonProps }: ParsedDocsProps) => JSX.Element | null;
export { DocsSkeleton } from './Skeleton';
