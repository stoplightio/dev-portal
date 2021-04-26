import * as React from 'react';
import { IBranchNode } from '../../types';
export declare const NodeList: React.FC<{
    nodes?: IBranchNode[];
    error?: Error;
    isLoading?: boolean;
    onReset?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    onClose?: () => void;
}>;
