import { SelectionManager } from '@react-stately/selection';
import { Collection, CollectionBase } from '@react-types/shared';
import { Key } from 'react';
import { MenuNode } from './MenuCollection';
import { MultipleSelectionState } from './selection';
import { GenericMenuItem } from './types';
export interface MenuProps extends CollectionBase<GenericMenuItem> {
}
export interface MenuState extends Pick<MultipleSelectionState, 'useIsFocusedKey' | 'useFocusedKey'> {
    /** A collection of items in the tree. */
    readonly collection: Collection<MenuNode>;
    /** A set of keys for items that are expanded. */
    readonly expandedKeys: Set<Key>;
    /** Not used, but required for the typings */
    readonly disabledKeys: Set<Key>;
    /** Expands the given key, and closes any other expanded keys at the same menu level (only one can be expanded at a time) */
    toggleKey(key: Key): void;
    /** Collapses the given key */
    collapseKey(key: Key): void;
    /** Collapse all keys */
    collapseAllKeys(): void;
    /** A selection manager to read and update multiple selection state. */
    readonly selectionManager: SelectionManager;
    /** Whether the given is corrently focused */
    readonly useIsExpandedKey: (key: Key) => boolean;
}
/**
 * Provides state management for tree-like components. Handles building a collection
 * of items from props, item expanded state, and manages multiple selection state.
 */
export declare function useMenuState(props: MenuProps): MenuState;
