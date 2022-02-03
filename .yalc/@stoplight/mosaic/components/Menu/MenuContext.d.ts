import * as React from 'react';
import { Cursor } from '../../enhancers';
import { MenuKeyboardDelegate } from './MenuKeyboardDelegate';
import { MenuState } from './useMenuState';
export declare type MenuContextProps = {
    state: MenuState;
    keyboardDelegate: MenuKeyboardDelegate;
    closeOnPress?: boolean;
    size?: 'lg' | 'default';
    cursor?: Cursor;
    onClose?: () => void;
};
export declare const MenuContext: React.Context<MenuContextProps>;
