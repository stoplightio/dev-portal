import type { TBackgroundColor, TPlaceholderColor, TTextColor } from '../types/tailwind';
import type { ChopPrefix } from '../types/twind';
import { WithPseudo } from './pseudo';
import type { EnhancerFn } from './types';
export declare type IntentVals = 'default' | 'success' | 'warning' | 'danger';
export declare type TextColorVals = ChopPrefix<'text', TTextColor>;
export declare type PlaceholderColorVals = ChopPrefix<'placeholder', TPlaceholderColor>;
export declare type BackgroundColorVals = ChopPrefix<'bg', TBackgroundColor>;
export declare type ITextColorProps = WithPseudo<{
    color?: TextColorVals;
}>;
export declare type IPlaceholderProps = WithPseudo<{
    placeholderColor?: PlaceholderColorVals;
}>;
export declare type IBackgroundColorProps = WithPseudo<{
    bg?: BackgroundColorVals;
}>;
export declare type IColorProps = ITextColorProps & IPlaceholderProps & IBackgroundColorProps;
export declare const colorPropNames: Array<keyof IColorProps>;
export declare const colorProps: EnhancerFn<IColorProps>;
