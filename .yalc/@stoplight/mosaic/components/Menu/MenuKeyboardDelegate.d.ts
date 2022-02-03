import { KeyboardDelegate } from '@react-types/shared';
import { Key } from 'react';
import { MenuCollection } from './MenuCollection';
import { MenuState } from './useMenuState';
export declare class MenuKeyboardDelegate implements KeyboardDelegate {
    collection: MenuCollection;
    expandedKeys: Set<Key>;
    selectionManager: MenuState['selectionManager'];
    toggleKey: MenuState['toggleKey'];
    collapseKey: MenuState['collapseKey'];
    constructor(state: MenuState);
    getKeyRightOf(key: any): Key;
    getKeyLeftOf(key: any): Key;
    getKeyAbove(key: any): Key;
    getKeyBelow(key: any): Key;
    getFirstKey(): Key;
    getLastKey(): Key;
    private getDeepestExpandedKey;
}
