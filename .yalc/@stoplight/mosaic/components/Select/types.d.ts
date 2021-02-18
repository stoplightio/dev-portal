import { AriaButtonProps } from '@react-types/button';
import { AriaLabelingProps, CollectionChildren, ItemElement, ItemRenderer } from '@react-types/shared';
import { Key, ReactElement, ReactNode } from 'react';
import { FlexGrowVals, WidthVals } from '../../enhancers';
import { FieldButtonProps } from '../Button';
export declare type SelectProps<T> = AriaLabelingProps & {
    /**
     * The contents of the Select collection.
     */
    children: CollectionChildren<T>;
    /**
     * Item objects in the collection. Must be provided when rendering dynamic children.
     */
    items?: Iterable<T>;
    /**
     * The name of the Select input, used when submitting an HTML form.
     */
    name?: string;
    /**
     * TODO: The content to display as the label. Use aria-label if a visible label is not desired.
     */
    label?: React.ReactNode;
    /**
     * Temporary text that occupies the text input when it is empty.
     */
    placeholder?: string;
    /**
     * The select button size - defaults to 'md'.
     */
    size?: 'sm' | 'md';
    /**
     * A function that returns the element that will trigger the Select. Should be a FieldButton in most cases.
     */
    renderTrigger?: (props: Pick<FieldButtonProps, 'placeholder' | 'onClear'> & AriaButtonProps<'button'>, state: {
        selectedItem?: SelectOptionProps;
    }) => ReactElement;
    /**
     * Optional text to render in front of the trigger text. Is only included when a value is selected - placeholder is not affected.
     */
    triggerTextPrefix?: string;
    /**
     * When true the end user can select the currently selected option to de-select it (and thus clear back to empty value).
     */
    allowEmptySelection?: boolean;
    /**
     * Whether the input can be selected but not changed by the user.
     */
    isReadOnly?: boolean;
    /**
     * Whether the Select is disabled.
     */
    isDisabled?: boolean;
    /**
     * The currently selected value in the collection (controlled).
     */
    selectedValue?: Key;
    /**
     * The initial selected value in the collection (uncontrolled).
     */
    defaultSelectedValue?: Key;
    /**
     * Handler that is called when the selection changes.
     */
    onSelectionChange?: (value: Key) => void;
    /**
     * The values that are disabled. These options cannot be selected, focused, or otherwise interacted with.
     */
    disabledValues?: Iterable<Key>;
    /**
     * Called when the Select opens.
     */
    onOpen?: () => void;
    /**
     * Called when the Select closes.
     */
    onClose?: () => void;
    flexGrow?: FlexGrowVals;
    w?: WidthVals;
};
export declare type SelectItem = SelectOptionProps | SelectActionProps;
declare type SelectItemBase = {
    /**
     * Optional element to render on the right side of the menu item. Use this to display keyboard shortcut, badge counts, etc.
     */
    meta?: ReactNode;
};
export declare type SelectOptionProps = SelectItemBase & {
    value: Key;
    text?: String;
};
export declare type SelectActionProps = SelectItemBase & {
    text: String;
    /**
     * Called when SelectOption is clicked (or triggered in any way, such as via keyboard shortcut).
     */
    onPress: () => void;
};
export interface SelectSectionProps<T> {
    /** Rendered contents of the section, e.g. a header. */
    title?: ReactNode;
    /** An accessibility label for the section. */
    'aria-label'?: string;
    /** Static child items or a function to render children. */
    children: ItemElement<T> | ItemElement<T>[] | ItemRenderer<T>;
    /** Item objects in the section. */
    items?: Iterable<T>;
}
export {};
