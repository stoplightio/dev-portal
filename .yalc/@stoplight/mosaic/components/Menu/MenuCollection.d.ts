import { Collection, Node } from '@react-types/shared';
import { Key } from 'react';
import { GenericMenuItem } from './types';
export declare type MenuNode<T = GenericMenuItem, C = GenericMenuItem> = Node<T> & {
    firstInMenu: boolean;
    menuLevel: number;
    parentMenuItemKey?: Key;
    isDisabled?: boolean;
    childNodes: Iterable<MenuNode<C>>;
};
export declare class MenuCollection implements Collection<MenuNode> {
    private keyMap;
    private iterable;
    private firstKey;
    private lastKey;
    constructor(nodes: Iterable<MenuNode>);
    [Symbol.iterator](): Generator<MenuNode<GenericMenuItem, GenericMenuItem>, void, undefined>;
    get size(): number;
    at(pos: number): MenuNode<GenericMenuItem, GenericMenuItem>;
    getKeys(): IterableIterator<Key>;
    getKeyBefore(key: Key): Key;
    getKeyAfter(key: Key): Key;
    getFirstKey(): Key;
    getLastKey(): Key;
    getItem(key: Key): MenuNode<GenericMenuItem, GenericMenuItem>;
}
