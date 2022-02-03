import { NodeType } from '@stoplight/types';
export declare type NodeData = {
    type: NodeType;
    name: string;
    tags: string[];
    uri: string;
};
export interface ITableOfContents {
    items: TableOfContentItem[];
}
export declare type TableOfContentItem = Divider | Group | Item;
export declare type TocItemType = 'divider' | 'group' | 'item';
export declare type Divider = {
    type: 'divider';
    title: string;
};
export declare type Group = {
    type: 'group';
    title: string;
    items: TableOfContentItem[];
    uri?: string;
};
export declare type Item = {
    type: 'item';
    title: string;
    uri: string;
};
export declare function isItem(item: TableOfContentItem): item is Item;
export declare function isGroup(item: TableOfContentItem): item is Group;
export declare function isDivider(item: TableOfContentItem): item is Divider;
