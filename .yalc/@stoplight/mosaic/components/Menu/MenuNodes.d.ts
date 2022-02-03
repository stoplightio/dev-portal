import { AriaMenuOptions } from '@react-aria/menu';
import { Key } from 'react';
import { MenuNode } from './MenuCollection';
import { MenuGroup, MenuItem, MenuOptionGroup, MenuOptionItem } from './types';
import { MenuState } from './useMenuState';
export declare function MenuNodes({ items, autoFocus, className, ...props }: {
    items: Iterable<any>;
    autoFocus?: boolean;
    className?: string;
} & Omit<AriaMenuOptions<any>, 'children'>): JSX.Element;
interface MenuSectionWrapperProps {
    section: MenuNode<MenuOptionGroup | MenuGroup, MenuItem | MenuOptionItem>;
    state: MenuState;
    onAction?: (key: Key) => void;
}
export declare function MenuSectionWrapper({ section, state }: MenuSectionWrapperProps): JSX.Element;
export {};
