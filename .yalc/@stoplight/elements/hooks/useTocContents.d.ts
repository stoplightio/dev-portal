import { ITableOfContentsTree, TableOfContentsLinkWithId } from '../types';
export declare const MARKDOWN_REGEXP: RegExp;
declare type OperationMap = Record<string, string | undefined>;
export declare function useTocContents(tree: ITableOfContentsTree, operationMap?: OperationMap): TableOfContentsLinkWithId[];
export {};
