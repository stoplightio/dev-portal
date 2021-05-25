import { CodeViewerLanguage } from '@stoplight/mosaic-code-viewer';
import { Dictionary } from '@stoplight/types';
declare type SupportedLanguage = string;
declare type SupportedLibrary = string;
interface LibraryConfig {
    httpSnippetLibrary: string;
}
interface LanguageConfig {
    mosaicCodeViewerLanguage: CodeViewerLanguage;
    httpSnippetLanguage: string;
    libraries?: Dictionary<LibraryConfig, SupportedLibrary>;
}
declare type RequestSampleConfigs = Dictionary<LanguageConfig, SupportedLanguage>;
export declare const requestSampleConfigs: RequestSampleConfigs;
export declare const getConfigFor: (language: string, library: string) => LanguageConfig & Partial<LibraryConfig>;
export {};
