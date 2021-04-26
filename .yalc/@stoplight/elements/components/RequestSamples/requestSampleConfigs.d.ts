import { SelectProps } from '@stoplight/mosaic';
import { CodeViewerLanguage } from '@stoplight/mosaic-code-viewer';
import { Dictionary } from '@stoplight/types';
declare type SupportedLanguage = string;
declare type SupportedLibrary = string;
export interface LibraryConfig {
    httpSnippetLibrary: string;
}
export interface LanguageConfig {
    mosaicCodeViewerLanguage: CodeViewerLanguage;
    httpSnippetLanguage: string;
    libraries?: Dictionary<LibraryConfig, SupportedLibrary>;
}
export declare type RequestSampleConfigs = Dictionary<LanguageConfig, SupportedLanguage>;
export declare const getConfigFor: (language: string, library: string) => LanguageConfig & Partial<LibraryConfig>;
export declare const selectOptions: SelectProps['options'];
export {};
