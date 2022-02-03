import { cx as cx$ } from 'twind';
import { TCXString, TwClass, TwCss, TwindSimpleUtilityFunction } from '../types/twind';
export declare const tw: import("twind").Twind<import("@twind/preset-tailwind").TailwindTheme & import("twind").BaseTheme & {
    screens: {
        lg: {
            min: string;
        };
        md: {
            max: string;
        };
        sm: {
            max: string;
        };
    };
    borderRadius: {
        none: string;
        sm: string;
        DEFAULT: string;
        lg: string;
        xl: string;
        full: string;
    };
    colors: {
        current: string;
        transparent: string;
        'lighten-100': string;
        'darken-100': string;
        code: string;
        primary: string;
        'primary-tint': string;
        'primary-light': string;
        'primary-dark': string;
        'primary-darker': string;
        secondary: string;
        'secondary-tint': string;
        'secondary-light': string;
        'secondary-dark': string;
        'secondary-darker': string;
        success: string;
        'success-tint': string;
        'success-light': string;
        'success-dark': string;
        'success-darker': string;
        warning: string;
        'warning-tint': string;
        'warning-light': string;
        'warning-dark': string;
        'warning-darker': string;
        danger: string;
        'danger-tint': string;
        'danger-light': string;
        'danger-dark': string;
        'danger-darker': string;
        'on-code': string;
        'on-primary': string;
        'on-success': string;
        'on-warning': string;
        'on-danger': string;
    };
    boxShadow: {
        sm: string;
        DEFAULT: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    dropShadow: {
        DEFAULT: string[];
    };
    fontFamily: {
        sans: string;
        ui: string;
        prose: string;
        mono: string;
    };
    fontSize: {
        '2xs': string[];
        xs: string[];
        sm: string[];
        base: string[];
        lg: string[];
        xl: string[];
        '2xl': string[];
        '3xl': string[];
        '4xl': string[];
        '5xl': string[];
        '6xl': string[];
        '7xl': string[];
        '8xl': string[];
        '9xl': string[];
        'paragraph-leading': string;
        paragraph: string;
        'paragraph-small': string;
        'paragraph-tiny': string;
    };
    fontWeight: {
        light: string;
        normal: string;
        medium: string;
        semibold: string;
        bold: string;
    };
    backgroundColor: {
        'canvas-pure': string;
        canvas: string;
        'canvas-tint': string;
        'canvas-tint-more': string;
        'canvas-50': string;
        'canvas-100': string;
        'canvas-200': string;
        'canvas-300': string;
        'canvas-400': string;
        'canvas-500': string;
        'canvas-600': string;
        'canvas-700': string;
        'canvas-800': string;
        'canvas-900': string;
        'canvas-1000': string;
        'canvas-dialog': string;
        body: string;
        'body-muted': string;
        'body-light': string;
        current: string;
        transparent: string;
        'lighten-100': string;
        'darken-100': string;
        code: string;
        primary: string;
        'primary-tint': string;
        'primary-light': string;
        'primary-dark': string;
        'primary-darker': string;
        secondary: string;
        'secondary-tint': string;
        'secondary-light': string;
        'secondary-dark': string;
        'secondary-darker': string;
        success: string;
        'success-tint': string;
        'success-light': string;
        'success-dark': string;
        'success-darker': string;
        warning: string;
        'warning-tint': string;
        'warning-light': string;
        'warning-dark': string;
        'warning-darker': string;
        danger: string;
        'danger-tint': string;
        'danger-light': string;
        'danger-dark': string;
        'danger-darker': string;
        'on-code': string;
        'on-primary': string;
        'on-success': string;
        'on-warning': string;
        'on-danger': string;
    };
    borderColor: {
        DEFAULT: string;
        light: string;
        dark: string;
        button: string;
        input: string;
        body: string;
        current: string;
        transparent: string;
        'lighten-100': string;
        'darken-100': string;
        code: string;
        primary: string;
        'primary-tint': string;
        'primary-light': string;
        'primary-dark': string;
        'primary-darker': string;
        secondary: string;
        'secondary-tint': string;
        'secondary-light': string;
        'secondary-dark': string;
        'secondary-darker': string;
        success: string;
        'success-tint': string;
        'success-light': string;
        'success-dark': string;
        'success-darker': string;
        warning: string;
        'warning-tint': string;
        'warning-light': string;
        'warning-dark': string;
        'warning-darker': string;
        danger: string;
        'danger-tint': string;
        'danger-light': string;
        'danger-dark': string;
        'danger-darker': string;
        'on-code': string;
        'on-primary': string;
        'on-success': string;
        'on-warning': string;
        'on-danger': string;
    };
    stroke: {
        text: string;
        current: string;
        transparent: string;
        'lighten-100': string;
        'darken-100': string;
        code: string;
        primary: string;
        'primary-tint': string;
        'primary-light': string;
        'primary-dark': string;
        'primary-darker': string;
        secondary: string;
        'secondary-tint': string;
        'secondary-light': string;
        'secondary-dark': string;
        'secondary-darker': string;
        success: string;
        'success-tint': string;
        'success-light': string;
        'success-dark': string;
        'success-darker': string;
        warning: string;
        'warning-tint': string;
        'warning-light': string;
        'warning-dark': string;
        'warning-darker': string;
        danger: string;
        'danger-tint': string;
        'danger-light': string;
        'danger-dark': string;
        'danger-darker': string;
        'on-code': string;
        'on-primary': string;
        'on-success': string;
        'on-warning': string;
        'on-danger': string;
    };
    textColor: {
        body: string;
        muted: string;
        light: string;
        heading: string;
        paragraph: string;
        primary: string;
        success: string;
        warning: string;
        danger: string;
        'canvas-pure': string;
        canvas: string;
        'canvas-50': string;
        'canvas-100': string;
        'canvas-200': string;
        'canvas-300': string;
        'canvas-dialog': string;
        link: string;
        'link-dark': string;
        current: string;
        transparent: string;
        'lighten-100': string;
        'darken-100': string;
        code: string;
        'primary-tint': string;
        'primary-light': string;
        'primary-dark': string;
        'primary-darker': string;
        secondary: string;
        'secondary-tint': string;
        'secondary-light': string;
        'secondary-dark': string;
        'secondary-darker': string;
        'success-tint': string;
        'success-light': string;
        'success-dark': string;
        'success-darker': string;
        'warning-tint': string;
        'warning-light': string;
        'warning-dark': string;
        'warning-darker': string;
        'danger-tint': string;
        'danger-light': string;
        'danger-dark': string;
        'danger-darker': string;
        'on-code': string;
        'on-primary': string;
        'on-success': string;
        'on-warning': string;
        'on-danger': string;
    };
    extend: never;
}, string[] | HTMLStyleElement | CSSStyleSheet>;
export declare const twStyle: import("twind").StyleFunction;
export declare const twApply: import("twind").Nested;
export declare const twCss: TwCss;
export declare const twShortcut: import("twind").Nested;
export declare const UNSAFE_cx: typeof cx$;
export declare const tx: import("twind").TxFunction;
export declare const injectGlobal: import("twind").InjectGlobalFunction;
export declare const keyframes: import("twind").Keyframes;
declare type CXFns = {
    $combine: (...args: TCXString[]) => TCXString;
    sm: TwindSimpleUtilityFunction<`sm:${TwClass}`>;
    md: TwindSimpleUtilityFunction<`md:${TwClass}`>;
    lg: TwindSimpleUtilityFunction<`lg:${TwClass}`>;
    dark: TwindSimpleUtilityFunction<`dark:${TwClass}`>;
    inverted: TwindSimpleUtilityFunction<`inverted:${TwClass}`>;
    first: TwindSimpleUtilityFunction<`first:${TwClass}`>;
    last: TwindSimpleUtilityFunction<`last:${TwClass}`>;
    odd: TwindSimpleUtilityFunction<`odd:${TwClass}`>;
    even: TwindSimpleUtilityFunction<`even:${TwClass}`>;
    visited: TwindSimpleUtilityFunction<`visited:${TwClass}`>;
    checked: TwindSimpleUtilityFunction<`checked:${TwClass}`>;
    group: TwindSimpleUtilityFunction<`group:${TwClass}`>;
    groupHover: TwindSimpleUtilityFunction<`group-hover:${TwClass}`>;
    groupFocus: TwindSimpleUtilityFunction<`group-focus:${TwClass}`>;
    focusWithin: TwindSimpleUtilityFunction<`focus-within:${TwClass}`>;
    hover: TwindSimpleUtilityFunction<`hover:${TwClass}`>;
    focus: TwindSimpleUtilityFunction<`focus:${TwClass}`>;
    active: TwindSimpleUtilityFunction<`active:${TwClass}`>;
    disabled: TwindSimpleUtilityFunction<`disabled:${TwClass}`>;
    only: TwindSimpleUtilityFunction<`only:${TwClass}`>;
    firstOfType: TwindSimpleUtilityFunction<`first-of-type:${TwClass}`>;
    lastOfType: TwindSimpleUtilityFunction<`last-of-type:${TwClass}`>;
    onlyOfType: TwindSimpleUtilityFunction<`only-of-type:${TwClass}`>;
    required: TwindSimpleUtilityFunction<`required:${TwClass}`>;
    valid: TwindSimpleUtilityFunction<`valid:${TwClass}`>;
    invalid: TwindSimpleUtilityFunction<`invalid:${TwClass}`>;
    selection: TwindSimpleUtilityFunction<`selection:${TwClass}`>;
    before: TwindSimpleUtilityFunction<`before:${TwClass}`>;
    after: TwindSimpleUtilityFunction<`after:${TwClass}`>;
    placeholder: TwindSimpleUtilityFunction<`placeholder:${TwClass}`>;
};
declare const CX: TwindSimpleUtilityFunction<TwClass> & CXFns;
export { CX };
