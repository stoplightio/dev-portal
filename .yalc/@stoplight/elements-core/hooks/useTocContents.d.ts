import { ITableOfContentsTree, TableOfContentsLinkWithId } from '../types';
export declare const MARKDOWN_REGEXP: RegExp;
export declare const MODEL_REGEXP: RegExp;
export declare const OPERATION_REGEXP: RegExp;
declare type OperationMap = Record<string, string | undefined>;
export declare function useTocContents(tree: ITableOfContentsTree, operationMap?: OperationMap): TableOfContentsLinkWithId[];
export {};
