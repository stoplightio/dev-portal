import * as Mdast from '../ast-types/mdast';
export interface ILangReader {
    fromLang(raw: string): Mdast.IRoot;
    toLang(data: Mdast.IRoot): string;
}
