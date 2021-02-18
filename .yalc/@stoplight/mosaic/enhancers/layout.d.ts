import { EnhancerFn } from './types';
declare type DisplayVals = 'block' | 'inline-block' | 'inline' | 'flex' | 'inline-flex' | 'hidden';
declare type OverflowVals = 'auto' | 'scroll' | 'hidden' | 'visible';
export interface ILayoutProps {
    display?: DisplayVals;
    overflowY?: OverflowVals;
    overflowX?: OverflowVals;
}
export declare const layoutPropNames: Array<keyof ILayoutProps>;
export declare const layoutProps: EnhancerFn<ILayoutProps>;
export {};
