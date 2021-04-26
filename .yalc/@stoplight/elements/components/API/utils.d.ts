import { OperationNode, ServiceNode } from '../../utils/oas/types';
import { TableOfContentsItem } from '../MosaicTableOfContents/types';
export declare type TagGroup = {
    title: string;
    items: OperationNode[];
};
export declare const computeTagGroups: (serviceNode: ServiceNode) => {
    groups: TagGroup[];
    ungrouped: OperationNode[];
};
export declare const computeAPITree: (serviceNode: ServiceNode) => TableOfContentsItem[];
export declare const findFirstNodeSlug: (tree: TableOfContentsItem[]) => string | void;
