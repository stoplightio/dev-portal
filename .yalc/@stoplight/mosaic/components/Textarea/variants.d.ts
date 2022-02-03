import { FontSizeVals, HeightVals, IntentVals, PaddingVals } from '../../enhancers';
import { BoxOwnProps } from '../Box/types';
export declare type AppearanceVals = 'default' | 'minimal';
export declare const variants: Record<AppearanceVals, Record<IntentVals, Partial<BoxOwnProps>>>;
export declare const sizes: Partial<Record<HeightVals, {
    padding: PaddingVals;
    rows: number;
}>>;
export declare const fontSizes: Partial<Record<HeightVals, FontSizeVals>>;
