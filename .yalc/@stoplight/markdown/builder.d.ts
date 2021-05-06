import { MDAST } from './ast-types';
import { Reader } from './reader';
export declare class Builder {
    reader: Reader;
    root: MDAST.IRoot;
    constructor(reader?: Reader);
    addMarkdown(markdown: string): this;
    addChild(node: MDAST.Node): this;
    toString(): string;
}
