import { MDAST } from '@stoplight/markdown';
import { IArticleHeading } from '../types';
export declare function useComputeMarkdownHeadings(tree: MDAST.Root): IArticleHeading[];
export declare function computeMarkdownHeadings(tree: MDAST.Root): IArticleHeading[];
