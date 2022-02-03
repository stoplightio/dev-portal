import { TBackdropBlur } from '../types/tailwind';
import type { ChopPrefix } from '../types/twind';
import { WithPseudo } from './pseudo';
import type { EnhancerFn } from './types';
export declare type BackdropBlurVals = ChopPrefix<'backdrop-blur', TBackdropBlur>;
export declare type BackdropProps = WithPseudo<{
    backdropBlur?: BackdropBlurVals;
}>;
export declare const backdropPropNames: Array<keyof BackdropProps>;
export declare const backdropProps: EnhancerFn<BackdropProps>;
