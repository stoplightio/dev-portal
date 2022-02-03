import { ReactElement } from 'react';
import { MaybeRenderProp, Placement } from '../../utils';
import { MenuListProps } from './MenuList';
export declare type MenuProps = {
    /**
     * The element that will trigger the Tooltip. Must be pressable. Can use a function for more control.
     */
    renderTrigger: MaybeRenderProp<{
        isOpen: boolean;
    }, ReactElement>;
    /**
     * The placement of the Menu overlay with respect to its trigger element.
     * @default bottom
     */
    placement?: Placement;
    /**
     * Pass true to render the tooltip without an arrow.
     * @default false
     */
    hideArrow?: boolean;
    /**
     * Whether the menu width should equal the width of the element that is triggering the menu.
     */
    matchTriggerWidth?: boolean;
} & MenuListProps;
export declare function Menu({ renderTrigger, placement, hideArrow, onClose, closeOnPress, 'aria-label': ariaLabel, matchTriggerWidth, ...props }: MenuProps): JSX.Element;
