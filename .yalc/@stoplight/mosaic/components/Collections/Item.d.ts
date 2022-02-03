import { PartialNode } from '@react-stately/collections';
import { Key, ReactElement, ReactNode } from 'react';
export interface ItemProps<T> {
    id?: Key;
    /** Rendered contents of the item or child items. */
    children?: ReactNode;
    /** Rendered contents of the item if `children` contains child items. */
    title?: ReactNode;
    /** A string representation of the item's contents, used for features like typeahead. */
    textValue?: string;
    /** An accessibility label for this item. */
    'aria-label'?: string;
    /** A list of child item objects. Used for dynamic collections. */
    childItems?: Iterable<T>;
    /** Whether this item has children, even if not loaded yet. */
    hasChildItems?: boolean;
}
/**
 * Pulled from https://github.com/adobe/react-spectrum/blob/main/packages/%40react-stately/collections/src/Item.ts
 * with some minor adjustments.
 */
export declare function Item<T>(props: ItemProps<T>): ReactElement;
export declare namespace Item {
    var getCollectionNode: <T>(props: ItemProps<T> & {
        id?: string;
        value?: string;
        type?: string;
    }, context: any) => Generator<PartialNode<T>, any, unknown>;
}
