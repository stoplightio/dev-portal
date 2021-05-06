import { MDAST } from '@stoplight/markdown';
import { IArticleHeading } from '../types';
export declare function useComputeMarkdownHeadings(tree: MDAST.IRoot): IArticleHeading[];
export declare function computeMarkdownHeadings(tree: MDAST.IRoot): IArticleHeading[];
