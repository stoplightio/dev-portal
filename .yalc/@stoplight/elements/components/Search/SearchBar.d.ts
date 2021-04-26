import * as React from 'react';
interface ISearchBar {
    placeholder?: string;
    query?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onReset?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    onClose?: () => void;
}
export declare const SearchBar: React.FunctionComponent<ISearchBar>;
export {};
