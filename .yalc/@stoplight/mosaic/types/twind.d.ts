import type * as CSS$1 from 'csstype';
import type { BaseProperties, Falsey } from 'twind';
import type { TAccentColor, TAlignContent, TAlignItems, TAlignSelf, TAnimation, TAppearance, TAspectRatio, TBackdropBlur, TBackdropBrightness, TBackdropContrast, TBackdropFilter, TBackdropGrayscale, TBackdropHueRotate, TBackdropInvert, TBackdropOpacity, TBackdropSaturate, TBackdropSepia, TBackgroundAttachment, TBackgroundBlendMode, TBackgroundClip, TBackgroundColor, TBackgroundImage, TBackgroundOpacity, TBackgroundOrigin, TBackgroundPosition, TBackgroundRepeat, TBackgroundSize, TBlur, TBorderCollapse, TBorderColor, TBorderOpacity, TBorderRadius, TBorderStyle, TBorderWidth, TBoxDecorationBreak, TBoxShadow, TBoxShadowColor, TBoxSizing, TBreakAfter, TBreakBefore, TBreakInside, TBrightness, TCaretColor, TClear, TColumns, TContainer, TContent, TContrast, TCursor, TDisplay, TDivideColor, TDivideOpacity, TDivideStyle, TDivideWidth, TDropShadow, TFill, TFilter, TFlex, TFlexBasis, TFlexDirection, TFlexGrow, TFlexShrink, TFlexWrap, TFloat, TFontFamily, TFontSize, TFontSmoothing, TFontStyle, TFontVariantNumeric, TFontWeight, TGap, TGradientColorStops, TGrayscale, TGridAutoColumns, TGridAutoFlow, TGridAutoRows, TGridColumn, TGridColumnEnd, TGridColumnStart, TGridRow, TGridRowEnd, TGridRowStart, TGridTemplateColumns, TGridTemplateRows, THardwareAcceleration, THeight, THueRotate, TInset, TInvert, TIsolation, TJustifyContent, TJustifyItems, TJustifySelf, TLetterSpacing, TLineHeight, TListStylePosition, TListStyleType, TMargin, TMaxHeight, TMaxWidth, TMinHeight, TMinWidth, TMixBlendMode, TObjectFit, TObjectPosition, TOpacity, TOrder, TOutlineColor, TOutlineOffset, TOutlineStyle, TOutlineWidth, TOverflow, TOverscrollBehavior, TPadding, TPlaceContent, TPlaceholderColor, TPlaceholderOpacity, TPlaceItems, TPlaceSelf, TPointerEvents, TPosition, TResize, TRingColor, TRingOffsetColor, TRingOffsetWidth, TRingOpacity, TRingWidth, TRotate, TSaturate, TScale, TScreenReaders, TScrollBehavior, TScrollMargin, TScrollPadding, TScrollSnap, TSepia, TSkew, TSpace, TStroke, TStrokeWidth, TTableLayout, TTextAlign, TTextColor, TTextDecoration, TTextDecorationColor, TTextDecorationStyle, TTextDecorationThickness, TTextIndent, TTextOpacity, TTextOverflow, TTextTransform, TTextUnderlineOffset, TTouchAction, TTransformOrigin, TTransitionDelay, TTransitionDuration, TTransitionProperty, TTransitionTimingFunction, TTranslate, TUserSelect, TVerticalAlign, TVisibility, TWhitespace, TWidth, TWillChange, TWordBreak, TZIndex } from './tailwind';
declare type PossibleTailwindNumbers = {
    '0': 0;
    '0.5': 0.5;
    '1': 1;
    '1.5': 1.5;
    '2': 2;
    '2.5': 2.5;
    '3': 3;
    '3.5': 3.5;
    '4': 4;
    '5': 5;
    '6': 6;
    '7': 7;
    '8': 8;
    '9': 9;
    '10': 10;
    '11': 11;
    '12': 12;
    '14': 14;
    '16': 16;
    '20': 20;
    '24': 24;
    '25': 25;
    '28': 28;
    '30': 30;
    '32': 32;
    '36': 36;
    '40': 40;
    '44': 44;
    '48': 48;
    '50': 50;
    '52': 52;
    '56': 56;
    '60': 60;
    '64': 64;
    '70': 70;
    '72': 72;
    '75': 75;
    '80': 80;
    '90': 90;
    '95': 95;
    '96': 96;
    '100': 100;
    '150': 150;
    '200': 200;
    '300': 300;
    '500': 500;
    '700': 700;
    '1000': 1000;
    '-0': -0;
    '-0.5': -0.5;
    '-1': -1;
    '-1.5': -1.5;
    '-2': -2;
    '-2.5': -2.5;
    '-3': -3;
    '-3.5': -3.5;
    '-4': -4;
    '-5': -5;
    '-6': -6;
    '-7': -7;
    '-8': -8;
    '-9': -9;
    '-10': -10;
    '-11': -11;
    '-12': -12;
    '-14': -14;
    '-16': -16;
    '-20': -20;
    '-24': -24;
    '-25': -25;
    '-28': -28;
    '-30': -30;
    '-32': -32;
    '-36': -36;
    '-40': -40;
    '-44': -44;
    '-48': -48;
    '-50': -50;
    '-52': -52;
    '-56': -56;
    '-60': -60;
    '-64': -64;
    '-70': -70;
    '-72': -72;
    '-75': -75;
    '-80': -80;
    '-90': -90;
    '-95': -95;
    '-96': -96;
    '-100': -100;
    '-150': -150;
    '-200': -200;
    '-300': -300;
    '-500': -500;
    '-700': -700;
    '-1000': -1000;
};
declare type ConvertToNumber<T extends string, Range extends object> = T extends keyof Range ? Range[T] : never;
declare type TryConvertToNumber<T extends string, Range extends object> = T extends keyof Range ? Range[T] : T;
declare type ConvertToNegativeNumber<T extends string | number | boolean> = ConvertToNumber<`-${T}`, PossibleTailwindNumbers>;
export declare type WithNegatives<T extends string | number | boolean> = T | ConvertToNegativeNumber<T>;
export declare type ChopPrefix<Prefix extends string, S, Default extends string = ''> = S extends `-${Prefix}-${infer Rest}` ? TryConvertToNumber<`-${Rest}`, PossibleTailwindNumbers> : S extends `${Prefix}-${infer Rest}` ? Rest extends Default ? true | false : TryConvertToNumber<Rest, PossibleTailwindNumbers> : S extends Prefix ? true | false : S extends Default ? true | false : never;
export declare type ChopPrefixAndModifier<Prefix extends string, Modifier extends string, S, Default extends string = ''> = S extends `${Prefix}-${Modifier}-${infer Rest}` ? ChopPrefix<'', `-${Rest}`, Default> : S extends `${Prefix}-${Modifier}` ? boolean : S extends `${Prefix}-${infer Rest}` ? ChopPrefix<'', `-${Rest}`, Default> : never;
export declare type ChopSuffix<Suffix extends string, S> = S extends `${infer Rest}${Suffix}` ? Rest : never;
declare type ScreenSizeVariants = 'lg:' | 'md:' | 'sm:';
declare type ThemeVariants = 'dark:' | 'inverted:';
export declare type TwClass = TAccentColor | TAlignContent | TAlignItems | TAlignSelf | TAnimation | TAppearance | TAspectRatio | TBackdropBlur | TBackdropBrightness | TBackdropContrast | TBackdropFilter | TBackdropGrayscale | TBackdropHueRotate | TBackdropInvert | TBackdropOpacity | TBackdropSaturate | TBackdropSepia | TBackgroundAttachment | TBackgroundBlendMode | TBackgroundClip | TBackgroundColor | TBackgroundImage | TBackgroundOpacity | TBackgroundOrigin | TBackgroundPosition | TBackgroundRepeat | TBackgroundSize | TBlur | TBorderCollapse | TBorderColor | TBorderOpacity | TBorderRadius | TBorderStyle | TBorderWidth | TBoxDecorationBreak | TBoxShadow | TBoxShadowColor | TBoxSizing | TBreakAfter | TBreakBefore | TBreakInside | TBrightness | TCaretColor | TClear | TColumns | TContainer | TContent | TContrast | TCursor | TDisplay | TDivideColor | TDivideOpacity | TDivideStyle | TDivideWidth | TDropShadow | TFill | TFilter | TFlex | TFlexBasis | TFlexDirection | TFlexGrow | TFlexShrink | TFlexWrap | TFloat | TFontFamily | TFontSize | TFontSmoothing | TFontStyle | TFontVariantNumeric | TFontWeight | TGap | TGradientColorStops | TGrayscale | TGridAutoColumns | TGridAutoFlow | TGridAutoRows | TGridColumn | TGridColumnEnd | TGridColumnStart | TGridRow | TGridRowEnd | TGridRowStart | TGridTemplateColumns | TGridTemplateRows | THardwareAcceleration | THeight | THueRotate | TInset | TInvert | TIsolation | TJustifyContent | TJustifyItems | TJustifySelf | TLetterSpacing | TLineHeight | TListStylePosition | TListStyleType | TMargin | TMaxHeight | TMaxWidth | TMinHeight | TMinWidth | TMixBlendMode | TObjectFit | TObjectPosition | TOpacity | TOrder | TOutlineColor | TOutlineOffset | TOutlineStyle | TOutlineWidth | TOverflow | TOverscrollBehavior | TPadding | TPlaceContent | TPlaceholderColor | TPlaceholderOpacity | TPlaceItems | TPlaceSelf | TPointerEvents | TPosition | TResize | TRingColor | TRingOffsetColor | TRingOffsetWidth | TRingOpacity | TRingWidth | TRotate | TSaturate | TScale | TScreenReaders | TScrollBehavior | TScrollMargin | TScrollPadding | TScrollSnap | TSepia | TSkew | TSpace | TStroke | TStrokeWidth | TTableLayout | TTextAlign | TTextColor | TTextDecoration | TTextDecorationColor | TTextDecorationStyle | TTextDecorationThickness | TTextIndent | TTextOpacity | TTextOverflow | TTextTransform | TTextUnderlineOffset | TTouchAction | TTransformOrigin | TTransitionDelay | TTransitionDuration | TTransitionProperty | TTransitionTimingFunction | TTranslate | TUserSelect | TVerticalAlign | TVisibility | TWhitespace | TWidth | TWillChange | TWordBreak | TZIndex;
/**
 * https://tailwindcss.com/docs/hover-focus-and-other-states
 */
export declare type TPseudoClassVariants = ScreenSizeVariants | ThemeVariants | 'first:' | 'last:' | 'odd:' | 'even:' | 'visited:' | 'checked:' | 'group:' | 'group-hover:' | 'group-focus:' | 'focus-within:' | 'hover:' | 'focus:' | 'active:' | 'disabled:' | 'only:' | 'first-of-type:' | 'last-of-type:' | 'only-of-type:' | 'required:' | 'valid:' | 'invalid:' | 'before:' | 'after:' | 'placeholder:';
export declare type KebabToCamelCase<S> = S extends `${infer P1}-${infer P2}-${infer P3}` ? `${P1}${Capitalize<P2>}${Capitalize<P3>}` : S extends `${infer P1}-${infer P2}` ? `${P1}${Capitalize<P2>}` : S;
export declare type TCXString = 'CX_STRING';
export declare type TwindSimpleUtilityFunction<T extends string> = (...args: Array<T | null | undefined | {
    [key in T | TCXString]?: boolean;
} | TCXString>) => TCXString;
interface CustomProperties {
    label?: string;
    /**
     * A type-safe way to apply any supported tailwind class to your styled component.
     *
     * @example
     * Use some basic classes:
     *
     * ```ts
     * import { CX, twCss } from '@stoplight/mosaic';
     *
     * const className = twCss(CX('inline-flex', 'items-center', 'outline-none', 'border'));
     * ```
     *
     * Mix some psuedo variants in and/or apply some regular CSS rules as well:
     *
     * ```ts
     * import { CX, twCss } from '@stoplight/mosaic';
     *
     * const className = twCss({
     *   '@apply': CX.$combine(CX('inline-flex'), CX.hover('border')),
     *
     *   // escape hatch!
     *   width: '43px',
     * });
     * ```
     */
    '@apply'?: TCXString | Falsey;
}
declare type CSSProperties = CSS$1.PropertiesFallback<string | Falsey, string | Falsey> & CSS$1.PropertiesHyphenFallback<string | Falsey, string | Falsey> & Partial<CustomProperties>;
interface CSSNested extends Record<string, CSSProperties | CSSObject | string | Falsey> {
}
declare type CSSBase = BaseProperties & CSSNested;
declare type CSSObject = CSSProperties & CSSBase;
export declare type TwCss = (style: CSSObject | TCXString) => TCXString;
export {};
