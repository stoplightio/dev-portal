import { RemarkParseOptions } from 'remark-parse';
import unified from 'unified';
import { MDAST } from './ast-types';
export declare const remarkPreset: any[];
export declare const parse: (input: string, opts?: Partial<RemarkParseOptions>, processor?: unified.Processor) => MDAST.IRoot;
export declare const run: (input: string, opts?: Partial<RemarkParseOptions>, processor?: unified.Processor) => MDAST.IRoot;
