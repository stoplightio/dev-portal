import { Dictionary } from '@stoplight/types';
import { Node, Parent } from '../mdast';
import { IAnnotations } from './annotations';
export interface ITabContainer extends Parent {
    type: 'tabs';
    children: Node[];
}
export interface ITab<T extends Dictionary<any> = {
    type?: string;
}> extends IAnnotations<T>, Parent {
    type: 'tab';
}
