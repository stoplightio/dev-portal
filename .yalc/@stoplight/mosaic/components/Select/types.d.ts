import { AriaLabelingProps } from '@react-types/shared';
import { Key, ReactElement, ReactNode } from 'react';
import { FlexGrowVals, FlexVals, WidthVals } from '../../enhancers';
import { FieldButtonAppearanceVals } from '../Button/variants';
import { IIconProps } from '../Icon';
export declare type SelectProps = AriaLabelingProps & {
    /**
     * Items in the select.
     */
    options: Array<SelectItemProps | SelectSectionProps>;
    /**
     * The name of the Select input, used when submitting an HTML form.
     */
    name?: string;
    /**
     * Temporary text that occupies the text input when it is empty.
     */
    placeholder?: string;
    /**
     * The select button size - defaults to 'md'.
     */
    size?: 'sm' | 'md';
    /**
     * Controls look and feel of the select button/input.
     */
    appearance?: FieldButtonAppearanceVals;
    /**
     * Optional text to render in front of the trigger text. Is only included when a value is selected - placeholder is not affected.
     */
    triggerTextPrefix?: string;
    /**
     * When true a `x` icon will display in the trigger that the user can click to clear the Select value. Not applicable when custom renderTrigger is in use.
     */
    isClearable?: boolean;
    /**
     * Whether the Select is disabled.
     */
    isDisabled?: boolean;
    /**
     * The currently selected value in the collection (controlled).
     */
    value?: Key;
    /**
     * The initial selected value in the collection (uncontrolled).
     */
    defaultValue?: Key;
    /**
     * If provided, selected item will be rendered with icon on left-hand side.
     */
    icon?: IIconProps['icon'] | ReactElement;
    /**
     * Handler that is called when the selection changes.
     */
    onChange?: (value: Key) => void;
    /**
     * Called when the Select opens.
     */
    onOpen?: () => void;
    /**
     * Called when the Select closes.
     */
    onClose?: () => void;
    flex?: FlexVals;
    flexGrow?: FlexGrowVals;
    w?: WidthVals;
};
export declare type SelectItemProps = SelectOptionProps | SelectActionProps;
declare type SelectItemBase = {
    /**
     * Whether the item can be interacted with or selected.
     */
    isDisabled?: boolean;
    /**
     * Optional element to render on the right side of the menu item. Use this to display keyboard shortcut, badge counts, etc.
     */
    meta?: ReactNode;
    /**
     * Optional description rendered beneath label to better describe the option
     */
    description?: string;
};
export declare type SelectOptionProps = SelectItemBase & {
    value: Key;
    label?: string;
};
export declare type SelectActionProps = SelectItemBase & {
    label: string;
    /**
     * Called when SelectOption is clicked (or triggered in any way, such as via keyboard shortcut).
     */
    onPress: () => void;
};
export declare type SelectSectionProps = {
    /** Item objects in the section. */
    options: SelectItemProps[];
    /** An optional section title */
    title?: string;
    /** An accessibility label for the section. */
    'aria-label'?: string;
    /** An optional stable id to uniquely identify this section within this select */
    id?: Key;
};
export {};
