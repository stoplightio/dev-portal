import { PartialNode } from '@react-stately/collections';
import { SectionProps as _SectionProps } from '@react-types/shared';
import { Key, ReactElement } from 'react';
export declare type SectionProps<T> = _SectionProps<T> & {
    id?: Key;
};
/**
 * Pulled from https://github.com/adobe/react-spectrum/blob/main/packages/%40react-stately/collections/src/Section.ts
 * with some minor adjustments.
 */
export declare function Section<T>(props: SectionProps<T>): ReactElement;
export declare namespace Section {
    var getCollectionNode: <T>(props: SectionProps<T>, context: any) => Generator<PartialNode<T>, any, unknown>;
}
