import { NodeType } from '@stoplight/types';
import { Location } from 'history';
import * as React from 'react';
import { ParsedNode } from '../../types';
import { ReferenceResolver } from '../../utils/ref-resolving/ReferenceResolver';
import { ExportButtonProps } from './HttpService/ExportButton';
interface BaseDocsProps {
    className?: string;
    uri?: string;
    location?: Location;
    nodeTitle?: string;
    allowRouting?: boolean;
    exportProps?: ExportButtonProps;
    tryItCredentialsPolicy?: 'omit' | 'include' | 'same-origin';
    tryItCorsProxy?: string;
    layoutOptions?: {
        hideTryIt?: boolean;
        hideTryItPanel?: boolean;
        noHeading?: boolean;
        showPoweredByLink?: boolean;
        hideModelExamples?: boolean;
        hideServerInfo?: boolean;
        hideSecurityInfo?: boolean;
        hideExport?: boolean;
    };
}
export interface DocsProps extends BaseDocsProps {
    nodeType: NodeType;
    nodeData: unknown;
    useNodeForRefResolving?: boolean;
    refResolver?: ReferenceResolver;
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
