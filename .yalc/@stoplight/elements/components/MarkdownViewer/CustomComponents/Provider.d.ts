import { IComponentMapping } from '@stoplight/markdown-viewer';
import * as React from 'react';
export declare const useMarkdownComponents: () => Partial<{
    jira: import("@stoplight/markdown-viewer").MarkdownComponent<import("@stoplight/markdown/ast-types/mdast").IJiraNode>;
    code: import("@stoplight/markdown-viewer").MarkdownComponent<import("@stoplight/markdown/ast-types/smdast").ICode<{}>>;
    heading: import("@stoplight/markdown-viewer").MarkdownComponent<import("@stoplight/markdown/ast-types/mdast").IHeading>;
    image: import("@stoplight/markdown-viewer").MarkdownComponent<import("@stoplight/markdown/ast-types/mdast").IImage>;
    link: import("@stoplight/markdown-viewer").MarkdownComponent<import("@stoplight/markdown/ast-types/mdast").ILink>;
    list: import("@stoplight/markdown-viewer").MarkdownComponent<import("@stoplight/markdown/ast-types/mdast").IList>;
    paragraph: import("@stoplight/markdown-viewer").MarkdownComponent<import("@stoplight/markdown/ast-types/mdast").IParagraph>;
    table: import("@stoplight/markdown-viewer").MarkdownComponent<import("@stoplight/markdown/ast-types/mdast").ITable>;
    text: import("@stoplight/markdown-viewer").MarkdownComponent<import("@stoplight/markdown/ast-types/mdast").ITextNode>;
    root: import("@stoplight/markdown-viewer").MarkdownComponent<import("@stoplight/markdown/ast-types/mdast").IRoot>;
    blockquote: import("@stoplight/markdown-viewer").MarkdownComponent<import("@stoplight/markdown/ast-types/smdast").IBlockquote<{}>>;
    html: import("@stoplight/markdown-viewer").MarkdownComponent<import("@stoplight/markdown/ast-types/mdast").IHTML>;
    strong: import("@stoplight/markdown-viewer").MarkdownComponent<import("@stoplight/markdown/ast-types/mdast").IStrong>;
    delete: import("@stoplight/markdown-viewer").MarkdownComponent<import("@stoplight/markdown/ast-types/mdast").IDelete>;
    yaml: import("@stoplight/markdown-viewer").MarkdownComponent<import("@stoplight/markdown/ast-types/mdast").IYAML>;
    break: import("@stoplight/markdown-viewer").MarkdownComponent<import("@stoplight/markdown/ast-types/mdast").IBreak>;
    definition: import("@stoplight/markdown-viewer").MarkdownComponent<import("@stoplight/markdown/ast-types/mdast").IDefinition>;
    element: import("@stoplight/markdown-viewer").MarkdownComponent<import("@stoplight/markdown/ast-types/smdast").IElement>;
    emphasis: import("@stoplight/markdown-viewer").MarkdownComponent<import("@stoplight/markdown/ast-types/mdast").IEmphasis>;
    footnote: import("@stoplight/markdown-viewer").MarkdownComponent<import("@stoplight/markdown/ast-types/mdast").IFootnote>;
    footnoteDefinition: import("@stoplight/markdown-viewer").MarkdownComponent<import("@stoplight/markdown/ast-types/mdast").IFootnoteDefinition>;
    footnoteReference: import("@stoplight/markdown-viewer").MarkdownComponent<import("@stoplight/markdown/ast-types/mdast").IFootnoteReference>;
    inlineHtml: import("@stoplight/markdown-viewer").MarkdownComponent<import("@stoplight/markdown/ast-types/mdast").IInlineHTML>;
    imageReference: import("@stoplight/markdown-viewer").MarkdownComponent<import("@stoplight/markdown/ast-types/mdast").IImageReference>;
    inlineCode: import("@stoplight/markdown-viewer").MarkdownComponent<import("@stoplight/markdown/ast-types/mdast").IInlineCode>;
    linkReference: import("@stoplight/markdown-viewer").MarkdownComponent<import("@stoplight/markdown/ast-types/mdast").ILinkReference>;
    listItem: import("@stoplight/markdown-viewer").MarkdownComponent<import("@stoplight/markdown/ast-types/mdast").IListItem>;
    tab: import("@stoplight/markdown-viewer").MarkdownComponent<import("@stoplight/markdown/ast-types/smdast").ITab<{
        type?: string | undefined;
    }>>;
    tabs: import("@stoplight/markdown-viewer").MarkdownComponent<import("@stoplight/markdown/ast-types/smdast").ITabContainer>;
    tableCell: import("@stoplight/markdown-viewer").MarkdownComponent<import("@stoplight/markdown/ast-types/mdast").ITableCell>;
    tableRow: import("@stoplight/markdown-viewer").MarkdownComponent<import("@stoplight/markdown/ast-types/mdast").ITableRow>;
    thematicBreak: import("@stoplight/markdown-viewer").MarkdownComponent<import("@stoplight/markdown/ast-types/mdast").IThematicBreak>;
}>;
interface MarkdownComponentsProviderProps {
    value: Partial<IComponentMapping> | undefined;
}
export declare const MarkdownComponentsProvider: React.FC<MarkdownComponentsProviderProps>;
export {};
