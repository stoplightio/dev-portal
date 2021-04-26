import * as React from 'react';
import { IBranchNode, INodeFilter } from '../../types';
export interface IContentProps {
    node: IBranchNode;
}
export interface IContentTabProps {
    title: string;
    filter?: INodeFilter;
    className?: string;
}
export declare const Content: React.FC<IContentProps>;
export declare const ContentTab: React.FC<IContentTabProps>;
