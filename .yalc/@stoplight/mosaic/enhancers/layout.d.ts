import type { TDisplay, TObjectFit, TObjectPosition } from '../types/tailwind';
import type { ChopPrefix } from '../types/twind';
import { WithPseudo } from './pseudo';
import type { EnhancerFn } from './types';
export declare type DisplayVals = TDisplay;
export declare type OverflowVals = 'auto' | 'scroll' | 'hidden' | 'visible' | 'clip';
export declare type ObjectFitVals = ChopPrefix<'object', TObjectFit>;
export declare type ObjectPositionVals = ChopPrefix<'object', TObjectPosition>;
export declare type ILayoutProps = WithPseudo<{
    display?: DisplayVals;
    overflowY?: OverflowVals;
    overflowX?: OverflowVals;
    objectFit?: ObjectFitVals;
    objectPosition?: ObjectPositionVals;
}>;
export declare const layoutPropNames: Array<keyof ILayoutProps>;
export declare const layoutProps: EnhancerFn<ILayoutProps>;
