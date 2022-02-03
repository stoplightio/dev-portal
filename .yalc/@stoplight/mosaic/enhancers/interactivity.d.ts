import type { TCursor, TOpacity, TPointerEvents, TResize, TUserSelect, TVisibility } from '../types/tailwind';
import { ChopPrefix } from '../types/twind';
import { WithPseudo } from './pseudo';
import { EnhancerFn } from './types';
export declare type Cursor = ChopPrefix<'cursor', TCursor> | boolean;
export declare type UserSelect = ChopPrefix<'select', TUserSelect>;
export declare type Resize = ChopPrefix<'resize', TResize>;
export declare type PointerEvents = ChopPrefix<'pointer-events', TPointerEvents>;
export declare type OpacityVals = ChopPrefix<'opacity', TOpacity>;
export declare type VisibilityVals = TVisibility;
export declare type IInteractivityProps = WithPseudo<{
    cursor?: Cursor;
    opacity?: OpacityVals;
    pointerEvents?: PointerEvents;
    resize?: Resize;
    userSelect?: UserSelect;
    visibility?: VisibilityVals;
}>;
export declare const interactivityPropNames: Array<keyof IInteractivityProps>;
export declare const interactivityProps: EnhancerFn<IInteractivityProps>;
