import { MultipleSelection } from '@react-types/shared';
import { Key } from 'react';
import { MultipleSelectionState } from './types';
/**
 * Manages state for multiple selection and focus in a collection.
 */
export declare function useMultipleSelectionState(props: MultipleSelection): MultipleSelectionState & {
    useIsFocusedKey: (key: Key) => boolean;
};
