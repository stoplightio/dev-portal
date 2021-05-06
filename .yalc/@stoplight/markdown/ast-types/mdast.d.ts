import { Dictionary } from '@stoplight/types';
import * as Unist from 'unist';
export declare type AlignType = 'left' | 'right' | 'center' | null;
export declare type ReferenceType = 'shortcut' | 'collapsed' | 'full';
export interface Node extends Unist.Node {
}
export interface Parent extends Unist.Parent {
}
export interface Literal extends Unist.Literal {
}
export interface IRoot extends Unist.Parent {
    type: 'root';
}
export interface IParagraph extends Unist.Parent {
    type: 'paragraph';
}
export interface IBlockquote extends Unist.Parent {
    type: 'blockquote';
}
export interface IHeading extends Unist.Parent {
    type: 'heading';
    depth: 1 | 2 | 3 | 4 | 5 | 6;
}
export interface ICode extends Unist.Literal {
    type: 'code';
    lang?: string;
    title?: string;
    resolved?: null | object;
    meta?: string;
    lineNumbers?: boolean;
    highlightLines?: number[] | number[][];
    json_schema?: boolean;
    http?: boolean;
}
export interface IInlineCode extends Unist.Literal {
    type: 'inlineCode';
}
export interface IYAML extends Unist.Literal {
    type: 'yaml';
}
export interface IHTML extends Unist.Literal {
    type: 'html';
}
export interface IInlineHTML extends Unist.Parent {
    type: 'inlineHtml';
    attributes: Dictionary<string | true, string>;
    tagName: string;
}
export interface IList extends Unist.Parent {
    type: 'list';
    ordered: boolean;
    start?: number;
    loose: boolean;
}
export interface IListItem extends Unist.Parent {
    type: 'listItem';
    loose: boolean;
    checked?: boolean;
}
export interface ITable extends Unist.Parent {
    type: 'table';
    align: AlignType[];
}
export interface ITableRow extends Unist.Parent {
    type: 'tableRow';
}
export interface ITableCell extends Unist.Parent {
    type: 'tableCell';
}
export interface IThematicBreak extends Unist.Node {
    type: 'thematicBreak';
}
export interface IBreak extends Unist.Node {
    type: 'break';
}
export interface IEmphasis extends Unist.Parent {
    type: 'emphasis';
}
export interface IStrong extends Unist.Parent {
    type: 'strong';
}
export interface IDelete extends Unist.Parent {
    type: 'delete';
}
export interface ILink extends Unist.Parent {
    type: 'link';
    title?: string;
    url: string;
}
export interface IImage extends Unist.Node {
    type: 'image';
    title?: string;
    alt?: string;
    url: string;
}
export interface IFootnote extends Unist.Parent {
    type: 'footnote';
}
export interface ILinkReference extends Unist.Parent {
    type: 'linkReference';
    identifier: string;
    referenceType: ReferenceType;
}
export interface IImageReference extends Unist.Node {
    type: 'imageReference';
    identifier: string;
    referenceType: ReferenceType;
    alt?: string;
}
export interface IFootnoteReference extends Unist.Node {
    type: 'footnoteReference';
    identifier: string;
}
export interface IDefinition extends Unist.Node {
    type: 'definition';
    identifier: string;
    title?: string;
    url: string;
}
export interface IFootnoteDefinition extends Unist.Parent {
    type: 'footnoteDefinition';
    identifier: string;
}
export interface ITextNode extends Unist.Literal {
    type: 'text';
}
export interface IElement extends Unist.Node {
    type: 'element';
    tagName: string;
    properties: object;
    children: Unist.Node[];
}
export interface IJiraNode extends Unist.Node {
    type: 'jira';
    code: string;
    value: string;
}
