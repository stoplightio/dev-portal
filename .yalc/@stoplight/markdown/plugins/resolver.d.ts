import { Dictionary } from '@stoplight/types';
import * as unified from 'unified';
import { ICode } from '../ast-types/mdast';
declare type Resolver = (node: ICode, data: Dictionary<unknown>) => Promise<object>;
export default function (this: unified.Processor, opts?: {
    resolver: Resolver;
}): unified.Transformer | void;
export {};
