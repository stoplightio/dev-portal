import { MultipleSelectionState as AriaMultipleSelectionState } from '@react-stately/selection';
import { Key } from 'react';
export declare type MultipleSelectionState = AriaMultipleSelectionState & {
    /** Whether the given is corrently focused */
    readonly useIsFocusedKey: (key: Key) => boolean;
    /** Get the currently focused key */
    readonly useFocusedKey: () => Key;
};
export declare type MultipleSelectionObservableState = Pick<MultipleSelectionState, 'isFocused' | 'focusedKey' | 'setFocused' | 'setFocusedKey'>;
