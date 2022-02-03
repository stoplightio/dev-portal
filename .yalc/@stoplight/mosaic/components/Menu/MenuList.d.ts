/// <reference types="react" />
import { AriaMenuOptions } from '@react-aria/menu';
import { MenuContextProps } from './MenuContext';
import { MenuItems } from './types';
export declare type MenuListProps = {
    /** The object describing the items to show in the menu. */
    items: MenuItems;
    /**
     * Called when the Menu should close.
     */
    onClose?: () => void;
    /**
     * By default the Menu will only close when a non checkable `MenuItem` is pressed. Setting `closeOnPress` to true will cause
     * the menu to close when any `MenuItem` or `MenuOption` is pressed. Can still be overriden at the menu item level.
     * @default false
     */
    closeOnPress?: boolean;
    /**
     * Adjusts the overall size of the menu and its contents.
     */
    size?: MenuContextProps['size'];
    /**
     * Adjusts the default cursor when user hovers over items in the menu.
     */
    cursor?: MenuContextProps['cursor'];
} & Pick<AriaMenuOptions<any>, 'aria-label'>;
export declare function MenuList({ items, onClose, closeOnPress, size, cursor, ...props }: MenuListProps): JSX.Element;
