import { ModalProps } from '@stoplight/mosaic';
import { NodeSearchResult } from '../../types';
export declare type SearchProps = {
    search?: string;
    searchResults?: NodeSearchResult[];
    onSearch: (search: string) => void;
    onClick: (result: NodeSearchResult) => void;
    isOpen?: boolean;
    onClose: ModalProps['onClose'];
};
export declare const Search: ({ search, searchResults, isOpen, onClose, onClick, onSearch }: SearchProps) => JSX.Element;
