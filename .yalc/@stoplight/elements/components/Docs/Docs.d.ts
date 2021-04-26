import { NodeType } from '@stoplight/types';
import * as React from 'react';
import { ParsedNode } from '../../types';
interface IBaseDocsProps {
    className?: string;
}
export interface IDocsProps extends IBaseDocsProps {
    nodeData: unknown;
    nodeType: NodeType;
    headless?: boolean;
    uri?: string;
}
export interface IParsedDocsProps extends IBaseDocsProps {
    node: ParsedNode;
    headless?: boolean;
    uri?: string;
}
export interface IDocsComponentProps<T = unknown> {
    data: T;
    className?: string;
    headless?: boolean;
    uri?: string;
}
export declare const Docs: React.NamedExoticComponent<IDocsProps>;
export declare const ParsedDocs: ({ node, ...commonProps }: IParsedDocsProps) => JSX.Element | null;
export { DocsSkeleton } from './Skeleton';
