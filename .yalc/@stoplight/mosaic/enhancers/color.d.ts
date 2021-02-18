import { Pseudo } from './pseudo';
import { EnhancerFn } from './types';
export declare type IntentVals = 'default' | 'success' | 'warning' | 'danger';
export declare type SemanticColorVals = 'link' | 'link-dark' | 'code' | 'on-code' | 'primary' | 'primary-tint' | 'primary-light' | 'primary-dark' | 'on-primary' | 'success' | 'success-tint' | 'success-light' | 'success-dark' | 'on-success' | 'warning' | 'warning-tint' | 'warning-light' | 'warning-dark' | 'on-warning' | 'danger' | 'danger-tint' | 'danger-light' | 'danger-dark' | 'on-danger';
export declare type TextColorVals = 'current' | 'body' | 'muted' | 'light' | 'heading' | 'paragraph' | 'canvas' | 'canvas-pure' | 'canvas-50' | 'canvas-100' | 'canvas-200' | 'canvas-300' | 'canvas-dialog' | SemanticColorVals;
export declare type PlaceholderColorVals = true | 'primary' | 'success' | 'warning' | 'danger';
export interface ITextColorProps {
    color?: TextColorVals | Pseudo<TextColorVals, 'hover' | 'focus'>;
}
export interface IPlaceholderProps {
    placeholderColor?: PlaceholderColorVals;
}
export declare type BackgroundColorVals = 'canvas' | 'canvas-pure' | 'canvas-50' | 'canvas-100' | 'canvas-200' | 'canvas-300' | 'canvas-dialog' | 'transparent' | SemanticColorVals;
export interface IBackgroundColorProps {
    bg?: BackgroundColorVals | Pseudo<BackgroundColorVals, 'hover' | 'focus' | 'active'>;
}
export interface IColorProps extends ITextColorProps, IPlaceholderProps, IBackgroundColorProps {
}
export declare const colorPropNames: Array<keyof IColorProps>;
export declare const colorProps: EnhancerFn<IColorProps>;
