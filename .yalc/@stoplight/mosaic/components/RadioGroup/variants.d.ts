import { BorderColorVals, FontSizeVals, HeightVals, IColorProps, IntentVals, ITypographyProps, TextColorVals } from '../../enhancers';
export declare type StrokeColorVals = 'text' | BorderColorVals;
export interface IStrokeColorProps {
    stroke?: string;
    active?: {
        stoke?: string;
        color?: TextColorVals;
    };
}
export declare type RadioEnhancerProps = ITypographyProps & IColorProps & IStrokeColorProps;
export declare const variants: Record<IntentVals, Partial<RadioEnhancerProps>>;
export declare type SizeEnhancerProps = Record<HeightVals, {
    svgHeight: number;
    svgWidth: number;
    svgStrokeWidth: number;
    fontSize: FontSizeVals;
}>;
export declare const sizes: Partial<SizeEnhancerProps>;
