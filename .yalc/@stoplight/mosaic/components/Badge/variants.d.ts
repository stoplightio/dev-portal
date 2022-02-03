import { FontSizeVals, HeightVals, IntentVals, MarginVals, PaddingVals, RoundedVals } from '../../enhancers';
import { BoxOwnProps } from '../Box/types';
export declare type AppearanceVals = 'solid' | 'outline' | 'minimal';
export declare const sizes: Partial<Record<HeightVals, {
    h: HeightVals;
    px: PaddingVals;
    py: PaddingVals;
    fontSize: FontSizeVals;
    rounded: RoundedVals;
    leftIconMx: MarginVals;
    leftIconMr: MarginVals;
    rightIconMl: MarginVals;
    rightIconMr: MarginVals;
    iconSize: string;
}>>;
export declare const variants: Record<AppearanceVals, Record<IntentVals, Partial<BoxOwnProps>>>;
