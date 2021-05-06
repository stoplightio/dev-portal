import { Parent } from '../mdast';
export declare type ElementTagNameType = 'div' | 'span';
export interface IElement extends Parent {
    type: 'element';
    tagName: ElementTagNameType;
    properties: object;
}
