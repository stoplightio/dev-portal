/**
 * This must be imported standalone for downstream treeshaking to work.
 */
import '../../utils/languages';
import { BoxOwnProps, CopyButtonProps, PolymorphicComponentProps } from '@stoplight/mosaic';
import * as React from 'react';
import { CodeViewerLanguage } from '../../utils';
declare type CodeViewerBaseProps = {
    value: string;
    showLineNumbers?: boolean;
    showMaxLines?: number;
    title?: string;
    noCopyButton?: boolean;
    /**
     * Props to pass to the inner code container
     */
    innerProps?: BoxOwnProps;
    /**
     * Defaults to 500
     */
    maxHeight?: string;
    /**
     * Applied to the innermost highlight container
     */
    highlightPadding?: {
        x: number;
        y: number;
    };
};
declare type CodeViewerWithLanguage = CodeViewerBaseProps & {
    language: CodeViewerLanguage;
    customLanguage?: never;
};
declare type CodeViewerWithCustomLanguage = CodeViewerBaseProps & {
    customLanguage: string;
    language?: never;
};
export declare type CodeViewerOwnProps = CodeViewerWithLanguage | CodeViewerWithCustomLanguage;
export declare type CodeViewerProps<E extends React.ElementType = 'pre'> = PolymorphicComponentProps<E, CodeViewerOwnProps>;
export declare const DEFAULT_HIGHLIGHT_PADDING: {
    x: number;
    y: number;
};
export declare const CODE_LINE_HEIGHT = 21;
export declare const CodeViewer: <E extends React.ElementType = 'pre'>(props: CodeViewerProps<E>) => React.ReactElement | null;
export declare const useHighlight: ({ value, language, showLineNumbers, showMaxLines, style: propStyle, }: {
    value: string;
    language?: CodeViewerLanguage | string;
    showLineNumbers?: boolean;
    showMaxLines?: number;
    style?: React.CSSProperties;
}) => {
    pad: number;
    lines: number;
    gutterWidth: number;
    renderHighlight: () => JSX.Element;
};
export declare const HighlightCodeFallback: ({ lines, highlightPadding, }: {
    lines?: number;
    highlightPadding?: CodeViewerOwnProps['highlightPadding'];
}) => JSX.Element;
export declare const CodeContainer: React.NamedExoticComponent<import("dist/libs/core/enhancers/pseudo").WithPseudo<{
    backdropBlur?: import("@stoplight/mosaic").BackdropBlurVals;
}> & import("dist/libs/core/enhancers/pseudo").WithPseudo<{
    outline?: "none";
    borderColor?: import("@stoplight/mosaic").BorderColorVals;
}> & import("dist/libs/core/enhancers/pseudo").WithPseudo<{
    border?: import("@stoplight/mosaic").BorderWidthVals;
    borderT?: import("@stoplight/mosaic").BorderWidthVals;
    borderR?: import("@stoplight/mosaic").BorderWidthVals;
    borderL?: import("@stoplight/mosaic").BorderWidthVals;
    borderB?: import("@stoplight/mosaic").BorderWidthVals;
}> & import("dist/libs/core/enhancers/pseudo").WithPseudo<{
    rounded?: import("@stoplight/mosaic").RoundedVals;
    roundedT?: import("@stoplight/mosaic").RoundedVals;
    roundedR?: import("@stoplight/mosaic").RoundedVals;
    roundedL?: import("@stoplight/mosaic").RoundedVals;
    roundedB?: import("@stoplight/mosaic").RoundedVals;
    roundedTL?: import("@stoplight/mosaic").RoundedVals;
    roundedTR?: import("@stoplight/mosaic").RoundedVals;
    roundedBL?: import("@stoplight/mosaic").RoundedVals;
    roundedBR?: import("@stoplight/mosaic").RoundedVals;
}> & import("dist/libs/core/enhancers/pseudo").WithPseudo<{
    color?: import("@stoplight/mosaic").TextColorVals;
}> & import("dist/libs/core/enhancers/pseudo").WithPseudo<{
    placeholderColor?: import("@stoplight/mosaic").PlaceholderColorVals;
}> & import("dist/libs/core/enhancers/pseudo").WithPseudo<{
    bg?: import("@stoplight/mosaic").BackgroundColorVals; /**
     * Applied to the innermost highlight container
     */
}> & import("dist/libs/core/enhancers/pseudo").WithPseudo<{
    flex?: import("@stoplight/mosaic").FlexVals;
    flexDirection?: import("@stoplight/mosaic").FlexDirectionVals;
    flexWrap?: import("@stoplight/mosaic").FlexWrapVals;
    flexGrow?: import("@stoplight/mosaic").FlexGrowVals;
    flexShrink?: import("@stoplight/mosaic").FlexShrinkVals;
    justifyContent?: import("@stoplight/mosaic").JustifyContentVals;
    justifyItems?: import("@stoplight/mosaic").JustifyItemsVals;
    justifySelf?: import("@stoplight/mosaic").JustifySelfVals;
    alignContent?: import("@stoplight/mosaic").AlignContentVals;
    alignItems?: import("@stoplight/mosaic").AlignItemsVals;
    alignSelf?: import("@stoplight/mosaic").AlignSelfVals;
}> & import("dist/libs/core/enhancers/pseudo").WithPseudo<{
    cursor?: import("@stoplight/mosaic").Cursor;
    opacity?: import("@stoplight/mosaic").OpacityVals;
    pointerEvents?: import("@stoplight/mosaic").PointerEvents;
    resize?: import("@stoplight/mosaic").Resize;
    userSelect?: import("@stoplight/mosaic").UserSelect;
    visibility?: import("dist/libs/core/types/tailwind").TVisibility;
}> & import("dist/libs/core/enhancers/pseudo").WithPseudo<{
    display?: import("dist/libs/core/types/tailwind").TDisplay;
    overflowY?: import("@stoplight/mosaic").OverflowVals;
    overflowX?: import("@stoplight/mosaic").OverflowVals;
    objectFit?: import("@stoplight/mosaic").ObjectFitVals;
    objectPosition?: import("@stoplight/mosaic").ObjectPositionVals;
}> & import("dist/libs/core/enhancers/pseudo").WithPseudo<{
    pos?: import("dist/libs/core/types/tailwind").TPosition;
    pin?: true | import("dist/libs/core/types/twind").WithNegatives<0 | "px" | 12 | 28 | 36 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 14 | 16 | 20 | "auto" | "full" | 40 | 60 | 80 | 24 | 32 | 44 | 48 | 52 | 56 | 64 | 72 | 96 | 0.5 | 1.5 | 2.5 | 3.5 | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4">;
    pinY?: true | import("dist/libs/core/types/twind").WithNegatives<0 | "px" | 12 | 28 | 36 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 14 | 16 | 20 | "auto" | "full" | 40 | 60 | 80 | 24 | 32 | 44 | 48 | 52 | 56 | 64 | 72 | 96 | 0.5 | 1.5 | 2.5 | 3.5 | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4">;
    pinX?: true | import("dist/libs/core/types/twind").WithNegatives<0 | "px" | 12 | 28 | 36 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 14 | 16 | 20 | "auto" | "full" | 40 | 60 | 80 | 24 | 32 | 44 | 48 | 52 | 56 | 64 | 72 | 96 | 0.5 | 1.5 | 2.5 | 3.5 | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4">;
    top?: true | import("dist/libs/core/types/twind").WithNegatives<0 | "px" | 12 | 28 | 36 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 14 | 16 | 20 | "auto" | "full" | 40 | 60 | 80 | 24 | 32 | 44 | 48 | 52 | 56 | 64 | 72 | 96 | 0.5 | 1.5 | 2.5 | 3.5 | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4">;
    left?: true | import("dist/libs/core/types/twind").WithNegatives<0 | "px" | 12 | 28 | 36 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 14 | 16 | 20 | "auto" | "full" | 40 | 60 | 80 | 24 | 32 | 44 | 48 | 52 | 56 | 64 | 72 | 96 | 0.5 | 1.5 | 2.5 | 3.5 | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4">;
    right?: true | import("dist/libs/core/types/twind").WithNegatives<0 | "px" | 12 | 28 | 36 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 14 | 16 | 20 | "auto" | "full" | 40 | 60 | 80 | 24 | 32 | 44 | 48 | 52 | 56 | 64 | 72 | 96 | 0.5 | 1.5 | 2.5 | 3.5 | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4">;
    bottom?: true | import("dist/libs/core/types/twind").WithNegatives<0 | "px" | 12 | 28 | 36 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 14 | 16 | 20 | "auto" | "full" | 40 | 60 | 80 | 24 | 32 | 44 | 48 | 52 | 56 | 64 | 72 | 96 | 0.5 | 1.5 | 2.5 | 3.5 | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4">;
    zIndex?: 0 | 50 | -1 | 10 | 20 | "auto" | 30 | 40;
}> & import("dist/libs/core/enhancers/pseudo").WithPseudo<{
    ring?: import("@stoplight/mosaic").RingWidthVals;
    ringColor?: import("@stoplight/mosaic").RingColorVals;
    ringOpacity?: import("@stoplight/mosaic").RingOpacityVals;
}> & import("dist/libs/core/enhancers/pseudo").WithPseudo<{
    boxShadow?: import("@stoplight/mosaic").BoxShadowVals;
}> & import("dist/libs/core/enhancers/pseudo").WithPseudo<{
    h?: import("@stoplight/mosaic").HeightVals;
    maxH?: import("@stoplight/mosaic").MaxHeightVals;
    minH?: import("@stoplight/mosaic").MinHeightVals;
}> & import("dist/libs/core/enhancers/pseudo").WithPseudo<{
    w?: import("@stoplight/mosaic").WidthVals;
    maxW?: import("@stoplight/mosaic").MaxWidthVals;
    minW?: import("@stoplight/mosaic").MinWidthVals;
}> & import("dist/libs/core/enhancers/pseudo").WithPseudo<{
    m?: import("@stoplight/mosaic").MarginVals;
    mx?: import("@stoplight/mosaic").MarginVals;
    my?: import("@stoplight/mosaic").MarginVals;
    mt?: import("@stoplight/mosaic").MarginVals;
    mr?: import("@stoplight/mosaic").MarginVals;
    mb?: import("@stoplight/mosaic").MarginVals;
    ml?: import("@stoplight/mosaic").MarginVals;
}> & import("dist/libs/core/enhancers/pseudo").WithPseudo<{
    p?: import("@stoplight/mosaic").PaddingVals;
    px?: import("@stoplight/mosaic").PaddingVals;
    py?: import("@stoplight/mosaic").PaddingVals;
    pt?: import("@stoplight/mosaic").PaddingVals;
    pr?: import("@stoplight/mosaic").PaddingVals;
    pb?: import("@stoplight/mosaic").PaddingVals;
    pl?: import("@stoplight/mosaic").PaddingVals;
}> & import("dist/libs/core/enhancers/pseudo").WithPseudo<{
    fontSize?: import("@stoplight/mosaic").FontSizeVals;
    lineHeight?: import("@stoplight/mosaic").LineHeights;
    letterSpacing?: import("@stoplight/mosaic").LetterSpacing;
    fontFamily?: import("@stoplight/mosaic").FontFamilyVals;
    fontWeight?: import("@stoplight/mosaic").FontWeightVals;
    fontStyle?: import("dist/libs/core/types/tailwind").TFontStyle;
    textAlign?: import("@stoplight/mosaic").TextAlign;
    textDecoration?: import("dist/libs/core/types/tailwind").TTextDecoration;
    textTransform?: import("dist/libs/core/types/tailwind").TTextTransform;
    textOverflow?: import("dist/libs/core/types/tailwind").TTextOverflow;
    verticalAlign?: import("@stoplight/mosaic").VerticalAlign;
    whitespace?: import("@stoplight/mosaic").Whitespace;
    wordBreak?: import("@stoplight/mosaic").WordBreak;
}> & import("@stoplight/mosaic").TransformProps & {
    as?: React.ElementType<any>;
    UNSAFE_className?: string;
    className?: string;
    style?: React.CSSProperties;
    noFocusRing?: boolean;
    children?: React.ReactNode;
    css?: "CX_STRING";
    styled?: import("twind").Class;
} & Omit<any, "p" | "style" | "css" | "backdropBlur" | "outline" | "borderColor" | "border" | "borderT" | "borderR" | "borderL" | "borderB" | "rounded" | "roundedT" | "roundedR" | "roundedL" | "roundedB" | "roundedTL" | "roundedTR" | "roundedBL" | "roundedBR" | "color" | "placeholderColor" | "bg" | "flex" | "flexDirection" | "flexWrap" | "flexGrow" | "flexShrink" | "justifyContent" | "justifyItems" | "justifySelf" | "alignContent" | "alignItems" | "alignSelf" | "cursor" | "opacity" | "pointerEvents" | "resize" | "userSelect" | "visibility" | "display" | "overflowY" | "overflowX" | "objectFit" | "objectPosition" | "pos" | "pin" | "pinY" | "pinX" | "top" | "left" | "right" | "bottom" | "zIndex" | "ring" | "ringColor" | "ringOpacity" | "boxShadow" | "h" | "maxH" | "minH" | "w" | "maxW" | "minW" | "m" | "mx" | "my" | "mt" | "mr" | "mb" | "ml" | "px" | "py" | "pt" | "pr" | "pb" | "pl" | "fontSize" | "lineHeight" | "letterSpacing" | "fontFamily" | "fontWeight" | "fontStyle" | "textAlign" | "textDecoration" | "textTransform" | "textOverflow" | "verticalAlign" | "whitespace" | "wordBreak" | keyof import("@stoplight/mosaic").TransformProps | "as" | "UNSAFE_className" | "className" | "noFocusRing" | "children" | "styled"> & {
    renderHighlight: () => JSX.Element;
    maxHeight?: number;
    innerProps?: CodeViewerOwnProps['innerProps'];
    language?: CodeViewerLanguage | string;
    lines?: number;
    copyValue?: string;
    highlightPadding?: CodeViewerOwnProps['highlightPadding'];
}>;
export declare const CornerCopyButton: (props: CopyButtonProps) => JSX.Element;
export {};
