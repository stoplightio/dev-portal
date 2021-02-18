/// <reference types="react" />
import { SelectProps } from './types';
export declare function Select<T extends object>({ flexGrow, w, size, label, renderTrigger, triggerTextPrefix, items, selectedValue, defaultSelectedValue, onSelectionChange, allowEmptySelection, placeholder, onOpen, onClose, isReadOnly, isDisabled, children, disabledValues, ...props }: SelectProps<T>): JSX.Element;
