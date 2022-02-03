import { Key, ReactNode } from 'react';
import { IIconProps } from '../Icon';
export declare type MenuActionItem = MenuBaseItem;
export declare type MenuItemWithSubmenu = Omit<MenuBaseItem, 'href'> & {
    children: Array<MenuActionItem | MenuItemWithSubmenu | MenuGroup | MenuOptionGroup | MenuDividerItem | false | null | undefined>;
};
export declare type MenuGroup = {
    type: 'group';
    /** Optional unique id for the group. */
    id?: Key;
    /** Optional title to render in the UI for the group. */
    title?: string;
    children: Array<MenuActionItem | MenuItemWithSubmenu | false | null | undefined>;
};
export declare type MenuOptionGroup<V = string> = {
    type: 'option_group';
    /** Optional unique id for the option group */
    id?: Key;
    /** Optional title to render in the UI for the option group. */
    title?: string;
    /**
     * The value of the selected option.
     */
    value: V;
    /**
     * This function is called when the user selects a group option.
     */
    onChange: (value: V) => void;
    children: Array<MenuOptionItem | false | null | undefined>;
};
export declare type MenuOptionItem = Partial<Pick<MenuBaseItem, 'id' | 'title' | 'meta' | 'isActive' | 'isDisabled'>> & {
    value: Key;
};
export declare type GenericMenuItem = Partial<MenuActionItem & MenuItemWithSubmenu & Omit<MenuGroup, 'type'> & Omit<MenuOptionGroup, 'type'>> & {
    type?: string;
};
export declare type MenuDividerItem = {
    type: 'divider';
};
export declare type MenuItem = MenuActionItem | MenuItemWithSubmenu | MenuGroup | MenuOptionGroup | MenuDividerItem;
export declare type MenuItems = Array<MenuItem | false | null | undefined>;
export declare type MenuBaseItem = {
    /** id for the menu item that is unique within this menu. */
    id: Key;
    /**
     * The primary text to display in the menu item.
     */
    title: string;
    /**
     * Optional element to render on the right side of the menu item. Use this to display keyboard shortcut, badge counts, etc.
     */
    meta?: ReactNode;
    /**
     * Render menu item with extra space on the left side. Useful to align menus when some items are checkbox items.
     */
    isIndented?: boolean;
    /**
     * If true or false is provided, menu item will render with indent={true}, and a checkbox icon when true.
     */
    isChecked?: boolean;
    /**
     * If provided, the menu item will render as a link with target="_blank". href must be an absolute url.
     */
    href?: string;
    /**
     * When disabled is true the MenuItem is rendered as semi-transparent and cannot be interacted with.
     */
    isDisabled?: boolean;
    /**
     * Optionally render the menu item with active styling.
     */
    isActive?: boolean;
    /**
     * Optional additional logic to run when MenuItem is clicked (or triggered in any way, such as via keyboard shortcut).
     */
    onPress?: (key: Key) => void;
    /**
     * For use when nesting menus, if you want the submenu to have a particular label. Gets forwarded through to the `Menu.label` prop.
     */
    label?: string;
    /**
     * If children are supplied then this MenuItem will render a submenu when active. Must contain `MenuItem`, `MenuGroup`, or `MenuOptionGroup` components.
     */
    /**
     * If provided, MenuItem will render with icon on left-hand side.
     */
    icon?: IIconProps['icon'];
    /**
     * If provided, icon on left-hand side of menu will adopt specified color.
     */
    iconColor?: string;
    /**
     * Whether the menu should close when this is pressed. Overrides any global menu setting that is set.
     */
    closeOnPress?: boolean;
    /**
     * When true, the menu item's `onPress` handler will be invoked after the menu has been closed, and focus has been restored to the trigger element.
     * This is handy if your onPress logic needs to focus somewhere on the page (so it should occur after trigger refocus has been taken care of).
     */
    afterRestoreFocus?: boolean;
    /**
     * Extra description displayed beneath label/title
     */
    description?: string;
};
