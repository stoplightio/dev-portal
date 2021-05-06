import { Dictionary } from '@stoplight/types';
import * as MDASst from '../mdast';
import { IAnnotations } from './annotations';
export { IBreak, IThematicBreak, ITable, ITableCell, ITableRow, IDefinition, IDelete, IEmphasis, IHeading, IHTML, IInlineHTML, IRoot, IParagraph, ILink, ILinkReference, IYAML, IImage, IImageReference, IInlineCode, ITextNode, IList, IStrong, IListItem, IFootnote, IFootnoteReference, IFootnoteDefinition, IJiraNode, } from '../mdast';
export * from './element';
export * from './annotations';
export * from './tab';
export interface IBlockquote<T extends Dictionary<any> = {}> extends IAnnotations<T>, MDASst.IBlockquote {
}
export interface ICode<T extends Dictionary<any> = {}> extends IAnnotations<T>, MDASst.ICode {
}
