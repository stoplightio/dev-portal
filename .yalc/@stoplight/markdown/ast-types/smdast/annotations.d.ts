import { Dictionary } from '@stoplight/types';
export declare type AnnotationType = 'tab' | 'tab-end';
export declare type ThemeType = 'info' | 'warning' | 'danger' | 'success';
export interface IAnnotations<T extends Dictionary<any> = {}> {
    annotations?: T;
}
