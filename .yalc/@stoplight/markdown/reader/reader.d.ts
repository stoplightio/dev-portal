import * as Mdast from '../ast-types/mdast';
import * as SMdast from '../ast-types/smdast';
import { ILangReader } from './types';
export declare class Reader implements ILangReader {
    fromLang(raw: string): Mdast.IRoot;
    toLang(data: Mdast.IRoot): string;
    fromSpec: (root: Mdast.IRoot) => Mdast.IRoot;
    toSpec: (root: Mdast.IRoot) => Mdast.IRoot;
    read(raw: string): SMdast.IRoot;
}
