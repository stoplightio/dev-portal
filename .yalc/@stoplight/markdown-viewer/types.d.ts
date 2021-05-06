import type { MDAST, SMDAST } from '@stoplight/markdown';
import { ErrorBoundaryProps } from '@stoplight/react-error-boundary';
import * as React from 'react';
export interface IMarkdownViewer extends IMarkdownViewerProps, ErrorBoundaryProps {
}
export interface IMarkdownViewerProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onError'> {
    markdown: string | SMDAST.IRoot;
    className?: string;
    components?: IComponentMapping;
}
export declare type MarkdownComponent<T extends MDAST.Node = MDAST.Node> = (props: React.PropsWithChildren<IComponentMappingProps<T>>, context?: any) => React.ReactElement<any, any> | null;
declare type AllItemTypes = SMDAST.IBlockquote | SMDAST.IBreak | SMDAST.ICode | SMDAST.IDefinition | SMDAST.IDelete | SMDAST.IElement | SMDAST.IEmphasis | SMDAST.IFootnote | SMDAST.IFootnoteDefinition | SMDAST.IFootnoteReference | SMDAST.IHeading | SMDAST.IHTML | SMDAST.IInlineHTML | SMDAST.IImage | SMDAST.IImageReference | SMDAST.IInlineCode | SMDAST.IJiraNode | SMDAST.ILink | SMDAST.ILinkReference | SMDAST.IList | SMDAST.IListItem | SMDAST.IParagraph | SMDAST.IRoot | SMDAST.IStrong | SMDAST.ITab | SMDAST.ITabContainer | SMDAST.ITable | SMDAST.ITableCell | SMDAST.ITableRow | SMDAST.ITextNode | SMDAST.IThematicBreak | SMDAST.IYAML;
declare type ItemTypeMap = MapDiscriminatedUnion<AllItemTypes, 'type'>;
export declare type IComponentMapping = Partial<{
    [V in keyof ItemTypeMap]: MarkdownComponent<ItemTypeMap[V]>;
}>;
export interface IComponentMappingProps<T extends MDAST.Node> {
    node: T;
    parent: any;
    /**
     * The index of this component in the list of its siblings.
     * The first child is index 0, etc.
     */
    index: number;
    path: Array<string | number>;
}
export interface ICodeAnnotations {
    title?: string;
    lineNumbers?: boolean;
    highlightLines?: number[][];
    json_schema?: boolean;
    http?: boolean;
}
export interface ITableAnnotations {
    title?: string;
}
export interface IBlockquoteAnnotations {
    theme?: SMDAST.ThemeType;
}
export interface ITabAnnotations {
    title?: string;
}
declare type DiscriminateUnion<T, K extends keyof T, V extends T[K]> = T extends Record<K, V> ? T : never;
declare type MapDiscriminatedUnion<T extends Record<K, string>, K extends keyof T> = {
    [V in T[K]]: DiscriminateUnion<T, K, V>;
};
export {};
