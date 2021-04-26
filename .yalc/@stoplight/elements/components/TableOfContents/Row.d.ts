import { RowComponentType } from '@stoplight/ui-kit';
import * as React from 'react';
import { TableOfContentsLinkWithId } from '../../types';
declare type ToCExtraProps = {
    pathname: string;
    scrollRef?: React.MutableRefObject<HTMLDivElement | null>;
};
export declare const Row: RowComponentType<TableOfContentsLinkWithId, ToCExtraProps>;
export {};
