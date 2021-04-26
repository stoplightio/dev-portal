import { IComponentMapping } from '@stoplight/markdown-viewer';
import * as React from 'react';
export declare const useMarkdownComponents: () => Partial<{
    jira: import("@stoplight/markdown-viewer").MarkdownComponent<import("@stoplight/markdown").IJiraNode>;
    code: import("@stoplight/markdown-viewer").MarkdownComponent<import("@stoplight/markdown/ast-types/smdast").ICode<{}>>;
    heading: import("@stoplight/markdown-viewer").MarkdownComponent<import("@stoplight/markdown").IHeading>;
    image: import("@stoplight/markdown-viewer").MarkdownComponent<import("@stoplight/markdown").IImage>;
    link: import("@stoplight/markdown-viewer").MarkdownComponent<import("@stoplight/markdown").ILink>;
    list: import("@stoplight/markdown-viewer").MarkdownComponent<import("@stoplight/markdown").IList>;
    paragraph: import("@stoplight/markdown-viewer").MarkdownComponent<import("@stoplight/markdown").IParagraph>;
    table: import("@stoplight/markdown-viewer").MarkdownComponent<import("@stoplight/markdown").ITable>;
    text: import("@stoplight/markdown-viewer").MarkdownComponent<import("@stoplight/markdown").ITextNode>;
    root: import("@stoplight/markdown-viewer").MarkdownComponent<import("@stoplight/markdown").IRoot>;
    blockquote: import("@stoplight/markdown-viewer").MarkdownComponent<import("@stoplight/markdown/ast-types/smdast").IBlockquote<{}>>;
    html: import("@stoplight/markdown-viewer").MarkdownComponent<import("@stoplight/markdown").IHTML>;
    strong: import("@stoplight/markdown-viewer").MarkdownComponent<import("@stoplight/markdown").IStrong>;
    break: import("@stoplight/markdown-viewer").MarkdownComponent<import("@stoplight/markdown").IBreak>;
    definition: import("@stoplight/markdown-viewer").MarkdownComponent<import("@stoplight/markdown").IDefinition>;
    delete: import("@stoplight/markdown-viewer").MarkdownComponent<import("@stoplight/markdown").IDelete>;
    element: import("@stoplight/markdown-viewer").MarkdownComponent<import("@stoplight/markdown/ast-types/smdast").IElement>;
    emphasis: import("@stoplight/markdown-viewer").MarkdownComponent<import("@stoplight/markdown").IEmphasis>;
    footnote: import("@stoplight/markdown-viewer").MarkdownComponent<import("@stoplight/markdown").IFootnote>;
    footnoteDefinition: import("@stoplight/markdown-viewer").MarkdownComponent<import("@stoplight/markdown").IFootnoteDefinition>;
    footnoteReference: import("@stoplight/markdown-viewer").MarkdownComponent<import("@stoplight/markdown").IFootnoteReference>;
    inlineHtml: import("@stoplight/markdown-viewer").MarkdownComponent<import("@stoplight/markdown").IInlineHTML>;
    imageReference: import("@stoplight/markdown-viewer").MarkdownComponent<import("@stoplight/markdown").IImageReference>;
    inlineCode: import("@stoplight/markdown-viewer").MarkdownComponent<import("@stoplight/markdown").IInlineCode>;
    linkReference: import("@stoplight/markdown-viewer").MarkdownComponent<import("@stoplight/markdown").ILinkReference>;
    listItem: import("@stoplight/markdown-viewer").MarkdownComponent<import("@stoplight/markdown").IListItem>;
    tab: import("@stoplight/markdown-viewer").MarkdownComponent<import("@stoplight/markdown/ast-types/smdast").ITab<{
        type?: string | undefined;
    }>>;
    tabContainer: import("@stoplight/markdown-viewer").MarkdownComponent<import("@stoplight/markdown/ast-types/smdast").ITabContainer>;
    tableCell: import("@stoplight/markdown-viewer").MarkdownComponent<import("@stoplight/markdown").ITableCell>;
    tableRow: import("@stoplight/markdown-viewer").MarkdownComponent<import("@stoplight/markdown").ITableRow>;
    thematicBreak: import("@stoplight/markdown-viewer").MarkdownComponent<import("@stoplight/markdown").IThematicBreak>;
    yaml: import("@stoplight/markdown-viewer").MarkdownComponent<import("@stoplight/markdown").IYAML>;
}>;
interface MarkdownComponentsProviderProps {
    value: Partial<IComponentMapping> | undefined;
}
export declare const MarkdownComponentsProvider: React.FC<MarkdownComponentsProviderProps>;
export {};
