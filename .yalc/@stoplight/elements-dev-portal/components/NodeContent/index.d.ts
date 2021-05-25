import { CustomLinkComponent } from '@stoplight/elements-core';
import { Node } from '../../types';
export declare type NodeContentProps = {
    node: Node;
    Link: CustomLinkComponent;
    hideTryIt?: boolean;
    hideMocking?: boolean;
};
export declare const NodeContent: ({ node, Link, hideTryIt, hideMocking }: NodeContentProps) => JSX.Element;
