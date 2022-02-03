import { TTransitionDelay, TTransitionDuration, TTranslate } from '../types/tailwind';
import type { ChopPrefix, WithNegatives } from '../types/twind';
import { Pseudo } from './pseudo';
import type { EnhancerFn } from './types';
export declare type TransitionDelayVals = ChopPrefix<'delay', TTransitionDelay>;
export declare type TransitionDurationVals = ChopPrefix<'duration', TTransitionDuration>;
export declare type TranslateXVals = WithNegatives<ChopPrefix<'translate-x', TTranslate>>;
export declare type TranslateYVals = WithNegatives<ChopPrefix<'translate-y', TTranslate>>;
export declare type TransformProps = {
    transform?: true;
    transition?: true;
    transitionDelay?: TransitionDelayVals;
    transitionDuration?: TransitionDurationVals;
    translateX?: TranslateXVals | Pseudo<TranslateXVals>;
    translateY?: TranslateYVals | Pseudo<TranslateYVals>;
};
export declare const transformPropNames: Array<keyof TransformProps>;
export declare const transformProps: EnhancerFn<TransformProps>;
