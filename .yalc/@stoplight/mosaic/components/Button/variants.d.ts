import { FontSizeVals, HeightVals, IntentVals, MarginVals, PaddingVals, RoundedVals } from '../../enhancers';
import { BoxOwnProps } from '../Box/types';
export declare type AppearanceVals = 'default' | 'primary' | 'minimal';
export declare const sizes: Partial<Record<HeightVals, {
    px: PaddingVals;
    fontSize: FontSizeVals;
    rounded: RoundedVals;
    iconSize?: FontSizeVals;
    leftIconMx: MarginVals;
    leftIconMr: MarginVals;
    rightIconMl: MarginVals;
    rightIconMr: MarginVals;
}>>;
export declare const variants: Record<AppearanceVals, Record<IntentVals, Partial<BoxOwnProps>>>;
export declare type FieldButtonAppearanceVals = 'minimal' | 'outlined';
export declare const fieldButtonVariants: Record<FieldButtonAppearanceVals, Record<IntentVals, Partial<BoxOwnProps>>>;
