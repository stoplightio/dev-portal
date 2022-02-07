import { ChopSuffix, KebabToCamelCase, TPseudoClassVariants } from '../types/twind';
export declare const computePseudoClasses: (prop: string, val: boolean | string | number | Pseudo<boolean | string | number>) => string;
declare type ThemeVariant = 'dark' | 'inverted';
declare type ResponsiveVariant = 'sm' | 'md' | 'lg';
declare type ComplexVariant = ThemeVariant | ResponsiveVariant;
declare type TwindPseudoVariant = ChopSuffix<':', TPseudoClassVariants>;
declare type MosaicPseudoVariant = Exclude<KebabToCamelCase<TwindPseudoVariant>, ComplexVariant>;
declare type PseudoMapping<T> = {
    [key in MosaicPseudoVariant | 'default']?: T;
};
export declare type WithPseudo<P extends Object> = {
    [K in keyof P]?: P[K] | Pseudo<P[K]>;
};
export declare type Pseudo<T> = PseudoMapping<T> & {
    [key in ComplexVariant]?: T | {
        [key in MosaicPseudoVariant]?: T;
    };
};
export {};
