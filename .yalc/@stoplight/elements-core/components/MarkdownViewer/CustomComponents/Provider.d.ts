import { CustomComponentMapping as MDVCustomComponentMapping } from '@stoplight/markdown-viewer';
import * as React from 'react';
export declare type CustomComponentMapping = MDVCustomComponentMapping;
interface MarkdownComponentsProviderProps {
    value: Partial<CustomComponentMapping> | undefined;
}
export declare const MarkdownComponentsProvider: React.FC<MarkdownComponentsProviderProps>;
export {};
