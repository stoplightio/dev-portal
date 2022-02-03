import type { TBorderColor, TBorderRadius, TBorderWidth, TRingColor, TRingOpacity, TRingWidth } from '../types/tailwind';
import type { ChopPrefix, ChopPrefixAndModifier } from '../types/twind';
import { WithPseudo } from './pseudo';
import type { EnhancerFn } from './types';
export declare type OutlineVals = 'none';
declare type CornerPrefix = 't' | 'r' | 'b' | 'l';
export declare type BorderColorVals = ChopPrefixAndModifier<'border', CornerPrefix, TBorderColor> | boolean;
export declare type BorderWidthVals = ChopPrefixAndModifier<'border', CornerPrefix | 'x' | 'y', TBorderWidth>;
export declare type RoundedVals = ChopPrefix<'rounded', TBorderRadius>;
export declare type BorderWidthProps = WithPseudo<{
    border?: BorderWidthVals;
    borderT?: BorderWidthVals;
    borderR?: BorderWidthVals;
    borderL?: BorderWidthVals;
    borderB?: BorderWidthVals;
}>;
export declare type BorderRoundedProps = WithPseudo<{
    rounded?: RoundedVals;
    roundedT?: RoundedVals;
    roundedR?: RoundedVals;
    roundedL?: RoundedVals;
    roundedB?: RoundedVals;
    roundedTL?: RoundedVals;
    roundedTR?: RoundedVals;
    roundedBL?: RoundedVals;
    roundedBR?: RoundedVals;
}>;
export declare type BorderProps = WithPseudo<{
    outline?: OutlineVals;
    borderColor?: BorderColorVals;
}> & BorderWidthProps & BorderRoundedProps;
export declare const borderPropNames: Array<keyof BorderProps>;
export declare const borderProps: EnhancerFn<BorderProps>;
export declare type RingWidthVals = ChopPrefix<'ring', TRingWidth>;
export declare type RingColorVals = ChopPrefix<'ring', TRingColor>;
export declare type RingOpacityVals = ChopPrefix<'ring-opacity', TRingOpacity>;
export declare type IRingProps = WithPseudo<{
    ring?: RingWidthVals;
    ringColor?: RingColorVals;
    ringOpacity?: RingOpacityVals;
}>;
export declare const ringPropNames: Array<keyof IRingProps>;
export declare const ringProps: EnhancerFn<IRingProps>;
export {};
