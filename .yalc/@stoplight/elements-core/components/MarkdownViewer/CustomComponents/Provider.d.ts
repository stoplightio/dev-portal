import { CustomComponentMapping } from '@stoplight/markdown-viewer';
import * as React from 'react';
export declare const useMarkdownComponents: () => CustomComponentMapping<Partial<import("@stoplight/markdown-viewer").DefaultComponentMapping>>;
interface MarkdownComponentsProviderProps {
    value: Partial<CustomComponentMapping> | undefined;
}
export declare const MarkdownComponentsProvider: React.FC<MarkdownComponentsProviderProps>;
export {};
