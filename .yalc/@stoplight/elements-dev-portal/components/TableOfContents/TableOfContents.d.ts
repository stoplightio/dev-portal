import { CustomLinkComponent } from '@stoplight/elements-core';
import { BoxProps } from '@stoplight/mosaic';
import { ProjectTableOfContents } from '../../types';
export declare type TableOfContentsProps = BoxProps<'div'> & {
    activeId: string;
    tableOfContents: ProjectTableOfContents;
    Link: CustomLinkComponent;
    collapseTableOfContents?: boolean;
    externalScrollbar?: boolean;
    onLinkClick?(): void;
};
export declare const TableOfContents: ({ tableOfContents, activeId, Link, collapseTableOfContents, externalScrollbar, onLinkClick, ...boxProps }: TableOfContentsProps) => JSX.Element;
