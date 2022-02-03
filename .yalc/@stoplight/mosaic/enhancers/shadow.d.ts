import type { TBoxShadow } from '../types/tailwind';
import type { ChopPrefix } from '../types/twind';
import { WithPseudo } from './pseudo';
import type { EnhancerFn } from './types';
export declare type BoxShadowVals = ChopPrefix<'shadow', TBoxShadow>;
export declare type IShadowProps = WithPseudo<{
    boxShadow?: BoxShadowVals;
}>;
export declare const shadowPropNames: Array<keyof IShadowProps>;
export declare const shadowProps: EnhancerFn<IShadowProps>;
