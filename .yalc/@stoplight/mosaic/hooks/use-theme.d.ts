/// <reference types="react" />
import { WritableAtom } from 'jotai';
import type { Atom, Scope } from 'jotai/core/atom';
import { ICustomTheme, PrebuiltThemeIds, ThemeMode } from '../utils/theme';
export declare type ThemeScope = Scope;
export declare const ThemeProviderContext: import("react").Context<Scope>;
/**
 * Resolved theme
 */
export declare const themeMode: Atom<ThemeMode> & {
    write: (get: {
        <Value>(atom: Atom<Value | Promise<Value>>): Value;
        <Value_1>(atom: Atom<Promise<Value_1>>): Value_1;
        <Value_2>(atom: Atom<Value_2>): Value_2 extends Promise<infer V> ? V : Value_2;
    } & {
        <Value_3>(atom: Atom<Value_3 | Promise<Value_3>>, options: {
            unstable_promise: true;
        }): Value_3 | Promise<Value_3>;
        <Value_4>(atom: Atom<Promise<Value_4>>, options: {
            unstable_promise: true;
        }): Value_4 | Promise<Value_4>;
        <Value_5>(atom: Atom<Value_5>, options: {
            unstable_promise: true;
        }): (Value_5 extends Promise<infer V> ? V : Value_5) | Promise<Value_5 extends Promise<infer V> ? V : Value_5>;
    }, set: {
        <Value_6, Result extends void | Promise<void>>(atom: WritableAtom<Value_6, undefined, Result>): Result;
        <Value_7, Update, Result_1 extends void | Promise<void>>(atom: WritableAtom<Value_7, Update, Result_1>, update: Update): Result_1;
    }, update: ThemeMode | ((prev: ThemeMode) => ThemeMode)) => void;
    onMount?: <S extends (update?: ThemeMode | ((prev: ThemeMode) => ThemeMode)) => void>(setAtom: S) => void | (() => void);
} & {
    init: ThemeMode;
};
export declare const resolvedThemeModeAtom: Atom<"light" | "dark">;
export declare const currentThemeIdAtom: Atom<PrebuiltThemeIds>;
export declare const customThemeAtom: Atom<ICustomTheme>;
export declare const computedThemeAtom: Atom<{
    theme: {
        isDark: boolean;
        name: string;
        colors: {
            text: string;
            background: string;
            primary: string;
            secondary: string;
            muted: string;
            success: string;
            warning: string;
            danger: string;
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
}>;
export declare const useThemeId: (scope?: ThemeScope) => PrebuiltThemeIds;
export declare const useThemeIdAtom: (scope?: ThemeScope) => Atom<PrebuiltThemeIds> & {
    write: (get: {
        <Value>(atom: Atom<Value | Promise<Value>>): Value;
        <Value_1>(atom: Atom<Promise<Value_1>>): Value_1;
        <Value_2>(atom: Atom<Value_2>): Value_2 extends Promise<infer V> ? V : Value_2;
    } & {
        <Value_3>(atom: Atom<Value_3 | Promise<Value_3>>, options: {
            unstable_promise: true;
        }): Value_3 | Promise<Value_3>;
        <Value_4>(atom: Atom<Promise<Value_4>>, options: {
            unstable_promise: true;
        }): Value_4 | Promise<Value_4>;
        <Value_5>(atom: Atom<Value_5>, options: {
            unstable_promise: true;
        }): (Value_5 extends Promise<infer V> ? V : Value_5) | Promise<Value_5 extends Promise<infer V> ? V : Value_5>;
    }, set: {
        <Value_6, Result extends void | Promise<void>>(atom: WritableAtom<Value_6, undefined, Result>): Result;
        <Value_7, Update, Result_1 extends void | Promise<void>>(atom: WritableAtom<Value_7, Update, Result_1>, update: Update): Result_1;
    }, update: PrebuiltThemeIds | ((prev: PrebuiltThemeIds) => PrebuiltThemeIds)) => void;
    onMount?: <S extends (update?: PrebuiltThemeIds | ((prev: PrebuiltThemeIds) => PrebuiltThemeIds)) => void>(setAtom: S) => void | (() => void);
} & {
    init: PrebuiltThemeIds;
};
export declare const useThemeMode: (scope?: ThemeScope) => ThemeMode;
export declare const useResolvedThemeMode: (scope?: ThemeScope) => "light" | "dark";
export declare const useUpdateThemeMode: (scope?: ThemeScope) => (update?: ThemeMode | ((prev: ThemeMode) => ThemeMode)) => void;
export declare const useCustomTheme: (scope?: ThemeScope) => ICustomTheme;
export declare const useCustomThemeAtom: (scope?: ThemeScope) => Atom<ICustomTheme> & {
    write: (get: {
        <Value>(atom: Atom<Value | Promise<Value>>): Value;
        <Value_1>(atom: Atom<Promise<Value_1>>): Value_1;
        <Value_2>(atom: Atom<Value_2>): Value_2 extends Promise<infer V> ? V : Value_2;
    } & {
        <Value_3>(atom: Atom<Value_3 | Promise<Value_3>>, options: {
            unstable_promise: true;
        }): Value_3 | Promise<Value_3>;
        <Value_4>(atom: Atom<Promise<Value_4>>, options: {
            unstable_promise: true;
        }): Value_4 | Promise<Value_4>;
        <Value_5>(atom: Atom<Value_5>, options: {
            unstable_promise: true;
        }): (Value_5 extends Promise<infer V> ? V : Value_5) | Promise<Value_5 extends Promise<infer V> ? V : Value_5>;
    }, set: {
        <Value_6, Result extends void | Promise<void>>(atom: WritableAtom<Value_6, undefined, Result>): Result;
        <Value_7, Update, Result_1 extends void | Promise<void>>(atom: WritableAtom<Value_7, Update, Result_1>, update: Update): Result_1;
    }, update: ICustomTheme | ((prev: ICustomTheme) => ICustomTheme)) => void;
    onMount?: <S extends (update?: ICustomTheme | ((prev: ICustomTheme) => ICustomTheme)) => void>(setAtom: S) => void | (() => void);
} & {
    init: ICustomTheme;
};
export declare const useComputedTheme: (scope?: ThemeScope) => {
    theme: {
        isDark: boolean;
        name: string;
        colors: {
            text: string;
            background: string;
            primary: string;
            secondary: string;
            muted: string;
            success: string;
            warning: string;
            danger: string;
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
export declare const useThemeIsDark: (scope?: ThemeScope) => boolean;
export declare const useUpdateTheme: (scope?: ThemeScope) => (update?: ICustomTheme | ((prev: ICustomTheme) => ICustomTheme)) => void;
/**
 * Light specific
 */
export declare const lightThemeIdAtom: Atom<PrebuiltThemeIds> & {
    write: (get: {
        <Value>(atom: Atom<Value | Promise<Value>>): Value;
        <Value_1>(atom: Atom<Promise<Value_1>>): Value_1;
        <Value_2>(atom: Atom<Value_2>): Value_2 extends Promise<infer V> ? V : Value_2;
    } & {
        <Value_3>(atom: Atom<Value_3 | Promise<Value_3>>, options: {
            unstable_promise: true;
        }): Value_3 | Promise<Value_3>;
        <Value_4>(atom: Atom<Promise<Value_4>>, options: {
            unstable_promise: true;
        }): Value_4 | Promise<Value_4>;
        <Value_5>(atom: Atom<Value_5>, options: {
            unstable_promise: true;
        }): (Value_5 extends Promise<infer V> ? V : Value_5) | Promise<Value_5 extends Promise<infer V> ? V : Value_5>;
    }, set: {
        <Value_6, Result extends void | Promise<void>>(atom: WritableAtom<Value_6, undefined, Result>): Result;
        <Value_7, Update, Result_1 extends void | Promise<void>>(atom: WritableAtom<Value_7, Update, Result_1>, update: Update): Result_1;
    }, update: PrebuiltThemeIds | ((prev: PrebuiltThemeIds) => PrebuiltThemeIds)) => void;
    onMount?: <S extends (update?: PrebuiltThemeIds | ((prev: PrebuiltThemeIds) => PrebuiltThemeIds)) => void>(setAtom: S) => void | (() => void);
} & {
    init: PrebuiltThemeIds;
};
export declare const customLightThemeAtom: Atom<ICustomTheme> & {
    write: (get: {
        <Value>(atom: Atom<Value | Promise<Value>>): Value;
        <Value_1>(atom: Atom<Promise<Value_1>>): Value_1;
        <Value_2>(atom: Atom<Value_2>): Value_2 extends Promise<infer V> ? V : Value_2;
    } & {
        <Value_3>(atom: Atom<Value_3 | Promise<Value_3>>, options: {
            unstable_promise: true;
        }): Value_3 | Promise<Value_3>;
        <Value_4>(atom: Atom<Promise<Value_4>>, options: {
            unstable_promise: true;
        }): Value_4 | Promise<Value_4>;
        <Value_5>(atom: Atom<Value_5>, options: {
            unstable_promise: true;
        }): (Value_5 extends Promise<infer V> ? V : Value_5) | Promise<Value_5 extends Promise<infer V> ? V : Value_5>;
    }, set: {
        <Value_6, Result extends void | Promise<void>>(atom: WritableAtom<Value_6, undefined, Result>): Result;
        <Value_7, Update, Result_1 extends void | Promise<void>>(atom: WritableAtom<Value_7, Update, Result_1>, update: Update): Result_1;
    }, update: ICustomTheme | ((prev: ICustomTheme) => ICustomTheme)) => void;
    onMount?: <S extends (update?: ICustomTheme | ((prev: ICustomTheme) => ICustomTheme)) => void>(setAtom: S) => void | (() => void);
} & {
    init: ICustomTheme;
};
export declare const useLightTheme: (scope?: ThemeScope) => ICustomTheme;
export declare const useLightThemeId: (scope?: ThemeScope) => PrebuiltThemeIds;
export declare const useUpdateLightThemeId: (scope?: ThemeScope) => (update?: PrebuiltThemeIds | ((prev: PrebuiltThemeIds) => PrebuiltThemeIds)) => void;
export declare const useUpdateLightTheme: (scope?: ThemeScope) => (update?: ICustomTheme | ((prev: ICustomTheme) => ICustomTheme)) => void;
/**
 * Dark specific
 */
export declare const darkThemeIdAtom: Atom<PrebuiltThemeIds> & {
    write: (get: {
        <Value>(atom: Atom<Value | Promise<Value>>): Value;
        <Value_1>(atom: Atom<Promise<Value_1>>): Value_1;
        <Value_2>(atom: Atom<Value_2>): Value_2 extends Promise<infer V> ? V : Value_2;
    } & {
        <Value_3>(atom: Atom<Value_3 | Promise<Value_3>>, options: {
            unstable_promise: true;
        }): Value_3 | Promise<Value_3>;
        <Value_4>(atom: Atom<Promise<Value_4>>, options: {
            unstable_promise: true;
        }): Value_4 | Promise<Value_4>;
        <Value_5>(atom: Atom<Value_5>, options: {
            unstable_promise: true;
        }): (Value_5 extends Promise<infer V> ? V : Value_5) | Promise<Value_5 extends Promise<infer V> ? V : Value_5>;
    }, set: {
        <Value_6, Result extends void | Promise<void>>(atom: WritableAtom<Value_6, undefined, Result>): Result;
        <Value_7, Update, Result_1 extends void | Promise<void>>(atom: WritableAtom<Value_7, Update, Result_1>, update: Update): Result_1;
    }, update: PrebuiltThemeIds | ((prev: PrebuiltThemeIds) => PrebuiltThemeIds)) => void;
    onMount?: <S extends (update?: PrebuiltThemeIds | ((prev: PrebuiltThemeIds) => PrebuiltThemeIds)) => void>(setAtom: S) => void | (() => void);
} & {
    init: PrebuiltThemeIds;
};
export declare const customDarkThemeAtom: Atom<ICustomTheme> & {
    write: (get: {
        <Value>(atom: Atom<Value | Promise<Value>>): Value;
        <Value_1>(atom: Atom<Promise<Value_1>>): Value_1;
        <Value_2>(atom: Atom<Value_2>): Value_2 extends Promise<infer V> ? V : Value_2;
    } & {
        <Value_3>(atom: Atom<Value_3 | Promise<Value_3>>, options: {
            unstable_promise: true;
        }): Value_3 | Promise<Value_3>;
        <Value_4>(atom: Atom<Promise<Value_4>>, options: {
            unstable_promise: true;
        }): Value_4 | Promise<Value_4>;
        <Value_5>(atom: Atom<Value_5>, options: {
            unstable_promise: true;
        }): (Value_5 extends Promise<infer V> ? V : Value_5) | Promise<Value_5 extends Promise<infer V> ? V : Value_5>;
    }, set: {
        <Value_6, Result extends void | Promise<void>>(atom: WritableAtom<Value_6, undefined, Result>): Result;
        <Value_7, Update, Result_1 extends void | Promise<void>>(atom: WritableAtom<Value_7, Update, Result_1>, update: Update): Result_1;
    }, update: ICustomTheme | ((prev: ICustomTheme) => ICustomTheme)) => void;
    onMount?: <S extends (update?: ICustomTheme | ((prev: ICustomTheme) => ICustomTheme)) => void>(setAtom: S) => void | (() => void);
} & {
    init: ICustomTheme;
};
export declare const useDarkTheme: (scope?: ThemeScope) => ICustomTheme;
export declare const useDarkThemeId: (scope?: ThemeScope) => PrebuiltThemeIds;
export declare const useUpdateDarkThemeId: (scope?: ThemeScope) => (update?: PrebuiltThemeIds | ((prev: PrebuiltThemeIds) => PrebuiltThemeIds)) => void;
export declare const useUpdateDarkTheme: (scope?: ThemeScope) => (update?: ICustomTheme | ((prev: ICustomTheme) => ICustomTheme)) => void;
