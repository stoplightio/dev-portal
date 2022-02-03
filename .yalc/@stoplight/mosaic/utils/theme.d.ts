export declare type ThemeMode = 'light' | 'dark' | 'system';
declare type Color = string;
export interface ITheme {
    name: string;
    isDark?: boolean;
    colors: {
        text: Color;
        background: Color;
        primary: Color;
        secondary: Color;
        muted: Color;
        success: Color;
        warning: Color;
        danger: Color;
    };
}
export declare type PrebuiltThemeIds = 'default' | 'default_dark' | 'dracula' | 'duotone_light' | 'duotone_dark' | 'material' | 'monokai' | 'night_owl' | 'nord' | 'one_light' | 'one_dark' | 'solarized_light' | 'solarized_dark' | 'vscode' | 'winter_light' | 'winter_dark' | 'funky';
export declare type PrebuiltThemes = Record<PrebuiltThemeIds, ITheme>;
export interface ICustomTheme {
    name?: string;
    isDark?: boolean;
    colors: Partial<ITheme['colors']>;
}
export declare const getCssVariable: (name: string, element?: HTMLElement) => string;
export declare const prefersDarkMode: () => MediaQueryList;
/**
 * Handles figuring out what 'system' mode resolves to if user has that picked. Always returns light | dark.
 */
export declare const getResolvedThemeMode: (userMode: ThemeMode) => "light" | "dark";
export declare type ComputedTheme = ReturnType<typeof _computeTheme>;
declare const _computeTheme: (baseThemeId: PrebuiltThemeIds, customTheme?: ICustomTheme) => {
    theme: {
        isDark: boolean;
        name: string;
        colors: {
            text: Color;
            background: Color;
            primary: Color;
            secondary: Color;
            muted: Color;
            success: Color;
            warning: Color;
            danger: Color;
        };
    };
    vars: {
        'shadow-sm': string;
        'shadow-md': string;
        'shadow-lg': string;
        'shadow-xl': string;
        'shadow-2xl': string;
        'drop-shadow-default1': string;
        'drop-shadow-default2': string;
        'color-text': string;
        'color-text-heading': string;
        'color-text-paragraph': string;
        'color-text-muted': string;
        'color-text-light': string;
        'color-text-disabled': string;
        'color-canvas': string;
        'color-canvas-pure': string;
        'color-canvas-tint': string;
        'color-canvas-tint-more': string;
        'color-canvas-50': string;
        'color-canvas-100': string;
        'color-canvas-200': string;
        'color-canvas-300': string;
        'color-canvas-400': string;
        'color-canvas-500': string;
        'color-canvas-600': string;
        'color-canvas-700': string;
        'color-canvas-800': string;
        'color-canvas-900': string;
        'color-canvas-1000': string;
        'color-canvas-dialog': string;
        'color-border-dark': string;
        'color-border': string;
        'color-border-light': string;
        'color-border-input': string;
        'color-border-button': string;
        'color-text-primary': string;
        'color-primary-darker': string;
        'color-primary-dark': string;
        'color-primary': string;
        'color-primary-light': string;
        'color-primary-tint': string;
        'color-on-primary': string;
        'color-text-secondary': string;
        'color-secondary-darker': string;
        'color-secondary-dark': string;
        'color-secondary': string;
        'color-secondary-light': string;
        'color-secondary-tint': string;
        'color-on-secondary': string;
        'color-text-success': string;
        'color-success-darker': string;
        'color-success-dark': string;
        'color-success': string;
        'color-success-light': string;
        'color-success-tint': string;
        'color-on-success': string;
        'color-text-warning': string;
        'color-warning-darker': string;
        'color-warning-dark': string;
        'color-warning': string;
        'color-warning-light': string;
        'color-warning-tint': string;
        'color-on-warning': string;
        'color-text-danger': string;
        'color-danger-darker': string;
        'color-danger-dark': string;
        'color-danger': string;
        'color-danger-light': string;
        'color-danger-tint': string;
        'color-on-danger': string;
        'color-link': string;
        'color-link-dark': string;
    };
    css: {
        color: string;
        backgroundColor: string;
    };
};
export declare const computeTheme: any;
export declare const THEME_STORAGE_KEY = "mosaic-theme";
export declare const DEFAULT_THEME_MODE = "light";
export declare const defaultThemeMode: () => ThemeMode;
export declare const PREBUILT_THEMES: PrebuiltThemes;
export {};
