import * as React from 'react';
import { IBranchNode } from '../../types';
export interface ISearchComponent {
    query?: string;
    placeholder?: string;
    nodes?: IBranchNode[];
    isLoading?: boolean;
    isOpen?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onClose?: () => void;
    onReset?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    error?: Error;
}
export declare const Search: React.FC<ISearchComponent>;
