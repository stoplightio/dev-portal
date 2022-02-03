import * as React from 'react';
import { ReactNode } from 'react';
import { Cursor } from '../../enhancers';
import { MenuBaseItem } from './types';
export declare type MenuItemRowProps = {
    title: ReactNode;
    id?: string;
    isFocused?: boolean;
    isActive?: boolean;
    isSelected?: boolean;
    isDisabled?: boolean;
    hasSubmenu?: boolean;
    size?: 'lg' | 'default';
    cursor?: Cursor;
} & Pick<MenuBaseItem, 'isIndented' | 'icon' | 'iconColor' | 'meta' | 'href' | 'description'>;
export declare const MENU_ITEM_IDENT_WIDTHS: Record<MenuItemRowProps['size'], string>;
export declare const Internal_MenuItemRow: React.ForwardRefExoticComponent<{
    title: ReactNode;
    id?: string;
    isFocused?: boolean;
    isActive?: boolean;
    isSelected?: boolean;
    isDisabled?: boolean;
    hasSubmenu?: boolean;
    size?: 'lg' | 'default';
    cursor?: Cursor;
} & Pick<MenuBaseItem, "isIndented" | "icon" | "iconColor" | "meta" | "href" | "description"> & React.RefAttributes<undefined>>;
