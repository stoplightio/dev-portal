import { THeight, TMaxHeight, TMaxWidth, TMinHeight, TMinWidth, TWidth } from '../types/tailwind';
import type { ChopPrefix } from '../types/twind';
import { WithPseudo } from './pseudo';
import type { EnhancerFn } from './types';
export declare type HeightVals = ChopPrefix<'h', THeight>;
export declare type MaxHeightVals = ChopPrefix<'max-h', TMaxHeight>;
export declare type MinHeightVals = ChopPrefix<'min-h', TMinHeight>;
export declare type WidthVals = ChopPrefix<'w', TWidth>;
export declare type MaxWidthVals = ChopPrefix<'max-w', TMaxWidth>;
export declare type MinWidthVals = ChopPrefix<'min-w', TMinWidth>;
export declare type IHeightProps = WithPseudo<{
    h?: HeightVals;
    maxH?: MaxHeightVals;
    minH?: MinHeightVals;
}>;
export declare type IWidthProps = WithPseudo<{
    w?: WidthVals;
    maxW?: MaxWidthVals;
    minW?: MinWidthVals;
}>;
export declare type ISizeProps = IHeightProps & IWidthProps;
export declare const sizePropNames: Array<keyof ISizeProps>;
export declare const sizeProps: EnhancerFn<ISizeProps>;
