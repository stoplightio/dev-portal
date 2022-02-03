import { TGap, TMargin, TPadding } from '../types/tailwind';
import { ChopPrefix, WithNegatives } from '../types/twind';
import { WithPseudo } from './pseudo';
import type { EnhancerFn } from './types';
export declare type MarginVals = WithNegatives<ChopPrefix<'m', TMargin>> | '-px';
export declare type PaddingVals = ChopPrefix<'p', TPadding>;
export declare type GapVals = ChopPrefix<'gap-x', TGap>;
export declare type IMarginProps = WithPseudo<{
    m?: MarginVals;
    mx?: MarginVals;
    my?: MarginVals;
    mt?: MarginVals;
    mr?: MarginVals;
    mb?: MarginVals;
    ml?: MarginVals;
}>;
export declare type IPaddingProps = WithPseudo<{
    p?: PaddingVals;
    px?: PaddingVals;
    py?: PaddingVals;
    pt?: PaddingVals;
    pr?: PaddingVals;
    pb?: PaddingVals;
    pl?: PaddingVals;
}>;
export declare type ISpacingProps = IMarginProps & IPaddingProps;
export declare const spacingPropNames: Array<keyof ISpacingProps>;
export declare const marginProps: EnhancerFn<IMarginProps>;
export declare const paddingProps: EnhancerFn<IPaddingProps>;
