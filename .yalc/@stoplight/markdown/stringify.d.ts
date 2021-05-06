import { RemarkStringifyOptions } from 'remark-stringify';
import unified from 'unified';
import { MDAST } from './ast-types';
export declare const stringify: (tree: MDAST.Node, opts?: Partial<RemarkStringifyOptions>, processor?: unified.Processor) => string;
