import { WritableAtom } from 'jotai';
export declare const persistAtom: <T extends Object>(key: string, atomInstance: WritableAtom<T, T>) => WritableAtom<T, T>;
