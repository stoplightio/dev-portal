import { MenuDividerItem, MenuGroup, MenuItemWithSubmenu, MenuOptionGroup, MenuOptionItem } from './types';
export declare const isMenuGroup: (node: unknown) => node is MenuGroup;
export declare const isMenuOptionGroup: (node: unknown) => node is MenuOptionGroup<string>;
export declare const isSubmenuItem: (node: unknown) => node is MenuItemWithSubmenu;
export declare const isMenuOption: (node: unknown) => node is MenuOptionItem;
export declare const isMenuDivider: (node: unknown) => node is MenuDividerItem;
