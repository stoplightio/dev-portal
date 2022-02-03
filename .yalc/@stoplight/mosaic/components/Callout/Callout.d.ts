import * as React from 'react';
import { BackgroundColorVals, IntentVals } from '../../enhancers';
import { BoxProps } from '../Box/types';
import { IIconProps } from '../Icon';
export declare type CalloutProps = BoxProps<React.ElementType> & {
    /** Name or Icon props of a Font Awesome Icon to render*/
    icon?: IIconProps['icon'] | React.ReactElement;
    /**
     * Intent style for the callout. Seting will change callout colors and icon.
     * @default default
     */
    intent?: IntentVals | 'info';
    /**
     * appearance style for the callout. Setting to outline will change callout backgound from solid to transparent.
     * @default default
     */
    appearance?: 'default' | 'outline';
    /**
     * Displayed as the title of the callout
     */
    heading?: string;
    /**
     * Actions to be displayed on the right side of the callout. Useful if the callout needs to display a button or select.
     */
    actions?: React.ReactElement;
};
export declare const Callout: React.NamedExoticComponent<import("../../enhancers/pseudo").WithPseudo<{
    backdropBlur?: import("../../enhancers").BackdropBlurVals;
}> & import("../../enhancers/pseudo").WithPseudo<{
    outline?: "none";
    borderColor?: import("../../enhancers").BorderColorVals;
}> & import("../../enhancers/pseudo").WithPseudo<{
    border?: import("../../enhancers").BorderWidthVals;
    borderT?: import("../../enhancers").BorderWidthVals;
    borderR?: import("../../enhancers").BorderWidthVals;
    borderL?: import("../../enhancers").BorderWidthVals;
    borderB?: import("../../enhancers").BorderWidthVals;
}> & import("../../enhancers/pseudo").WithPseudo<{
    rounded?: import("../../enhancers").RoundedVals;
    /**
     * Actions to be displayed on the right side of the callout. Useful if the callout needs to display a button or select.
     */
    roundedT?: import("../../enhancers").RoundedVals;
    roundedR?: import("../../enhancers").RoundedVals;
    roundedL?: import("../../enhancers").RoundedVals;
    roundedB?: import("../../enhancers").RoundedVals;
    roundedTL?: import("../../enhancers").RoundedVals;
    roundedTR?: import("../../enhancers").RoundedVals;
    roundedBL?: import("../../enhancers").RoundedVals;
    roundedBR?: import("../../enhancers").RoundedVals;
}> & import("../../enhancers/pseudo").WithPseudo<{
    color?: import("../../enhancers").TextColorVals;
}> & import("../../enhancers/pseudo").WithPseudo<{
    placeholderColor?: import("../../enhancers").PlaceholderColorVals;
}> & import("../../enhancers/pseudo").WithPseudo<{
    bg?: BackgroundColorVals;
}> & import("../../enhancers/pseudo").WithPseudo<{
    flex?: import("../../enhancers").FlexVals;
    flexDirection?: import("../../enhancers").FlexDirectionVals;
    flexWrap?: import("../../enhancers").FlexWrapVals;
    flexGrow?: import("../../enhancers").FlexGrowVals;
    flexShrink?: import("../../enhancers").FlexShrinkVals;
    justifyContent?: import("../../enhancers").JustifyContentVals;
    justifyItems?: import("../../enhancers").JustifyItemsVals;
    justifySelf?: import("../../enhancers").JustifySelfVals;
    alignContent?: import("../../enhancers").AlignContentVals;
    alignItems?: import("../../enhancers").AlignItemsVals;
    alignSelf?: import("../../enhancers").AlignSelfVals;
}> & import("../../enhancers/pseudo").WithPseudo<{
    cursor?: import("../../enhancers").Cursor;
    opacity?: import("../../enhancers").OpacityVals;
    pointerEvents?: import("../../enhancers").PointerEvents;
    resize?: import("../../enhancers").Resize;
    userSelect?: import("../../enhancers").UserSelect;
    visibility?: import("../../types/tailwind").TVisibility;
}> & import("../../enhancers/pseudo").WithPseudo<{
    display?: import("../../types/tailwind").TDisplay;
    overflowY?: import("../../enhancers").OverflowVals;
    overflowX?: import("../../enhancers").OverflowVals;
    objectFit?: import("../../enhancers").ObjectFitVals;
    objectPosition?: import("../../enhancers").ObjectPositionVals;
}> & import("../../enhancers/pseudo").WithPseudo<{
    pos?: import("../../types/tailwind").TPosition;
    pin?: true | import("../../types/twind").WithNegatives<0 | "px" | 2 | 1 | 1.5 | 3 | 0.5 | "full" | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 14 | 16 | 20 | 24 | 28 | 32 | 36 | 40 | 44 | 48 | 52 | 56 | 60 | 64 | 72 | 80 | 96 | 2.5 | 3.5 | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "auto">;
    pinY?: true | import("../../types/twind").WithNegatives<0 | "px" | 2 | 1 | 1.5 | 3 | 0.5 | "full" | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 14 | 16 | 20 | 24 | 28 | 32 | 36 | 40 | 44 | 48 | 52 | 56 | 60 | 64 | 72 | 80 | 96 | 2.5 | 3.5 | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "auto">;
    pinX?: true | import("../../types/twind").WithNegatives<0 | "px" | 2 | 1 | 1.5 | 3 | 0.5 | "full" | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 14 | 16 | 20 | 24 | 28 | 32 | 36 | 40 | 44 | 48 | 52 | 56 | 60 | 64 | 72 | 80 | 96 | 2.5 | 3.5 | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "auto">;
    top?: true | import("../../types/twind").WithNegatives<0 | "px" | 2 | 1 | 1.5 | 3 | 0.5 | "full" | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 14 | 16 | 20 | 24 | 28 | 32 | 36 | 40 | 44 | 48 | 52 | 56 | 60 | 64 | 72 | 80 | 96 | 2.5 | 3.5 | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "auto">;
    left?: true | import("../../types/twind").WithNegatives<0 | "px" | 2 | 1 | 1.5 | 3 | 0.5 | "full" | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 14 | 16 | 20 | 24 | 28 | 32 | 36 | 40 | 44 | 48 | 52 | 56 | 60 | 64 | 72 | 80 | 96 | 2.5 | 3.5 | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "auto">;
    right?: true | import("../../types/twind").WithNegatives<0 | "px" | 2 | 1 | 1.5 | 3 | 0.5 | "full" | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 14 | 16 | 20 | 24 | 28 | 32 | 36 | 40 | 44 | 48 | 52 | 56 | 60 | 64 | 72 | 80 | 96 | 2.5 | 3.5 | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "auto">;
    bottom?: true | import("../../types/twind").WithNegatives<0 | "px" | 2 | 1 | 1.5 | 3 | 0.5 | "full" | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 14 | 16 | 20 | 24 | 28 | 32 | 36 | 40 | 44 | 48 | 52 | 56 | 60 | 64 | 72 | 80 | 96 | 2.5 | 3.5 | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "auto">;
    zIndex?: 0 | 10 | 20 | 40 | "auto" | 30 | 50 | -1;
}> & import("../../enhancers/pseudo").WithPseudo<{
    ring?: import("../../enhancers").RingWidthVals;
    ringColor?: import("../../enhancers").RingColorVals;
    ringOpacity?: import("../../enhancers").RingOpacityVals;
}> & import("../../enhancers/pseudo").WithPseudo<{
    boxShadow?: import("../../enhancers").BoxShadowVals;
}> & import("../../enhancers/pseudo").WithPseudo<{
    h?: import("../../enhancers").HeightVals;
    maxH?: import("../../enhancers").MaxHeightVals;
    /**
     * appearance style for the callout. Setting to outline will change callout backgound from solid to transparent.
     * @default default
     */
    minH?: import("../../enhancers").MinHeightVals;
}> & import("../../enhancers/pseudo").WithPseudo<{
    w?: import("../../enhancers").WidthVals;
    maxW?: import("../../enhancers").MaxWidthVals;
    minW?: import("../../enhancers").MinWidthVals;
}> & import("../../enhancers/pseudo").WithPseudo<{
    m?: import("../../enhancers").MarginVals;
    mx?: import("../../enhancers").MarginVals;
    my?: import("../../enhancers").MarginVals;
    mt?: import("../../enhancers").MarginVals;
    mr?: import("../../enhancers").MarginVals;
    mb?: import("../../enhancers").MarginVals;
    ml?: import("../../enhancers").MarginVals;
}> & import("../../enhancers/pseudo").WithPseudo<{
    p?: import("../../enhancers").PaddingVals;
    px?: import("../../enhancers").PaddingVals;
    py?: import("../../enhancers").PaddingVals; /**
     * appearance style for the callout. Setting to outline will change callout backgound from solid to transparent.
     * @default default
     */
    pt?: import("../../enhancers").PaddingVals;
    pr?: import("../../enhancers").PaddingVals;
    pb?: import("../../enhancers").PaddingVals;
    pl?: import("../../enhancers").PaddingVals;
}> & import("../../enhancers/pseudo").WithPseudo<{
    fontSize?: import("../../enhancers").FontSizeVals;
    lineHeight?: import("../../enhancers").LineHeights;
    letterSpacing?: import("../../enhancers").LetterSpacing;
    fontFamily?: import("../../enhancers").FontFamilyVals;
    fontWeight?: import("../../enhancers").FontWeightVals;
    fontStyle?: import("../../types/tailwind").TFontStyle;
    textAlign?: import("../../enhancers").TextAlign;
    textDecoration?: import("../../types/tailwind").TTextDecoration;
    textTransform?: import("../../types/tailwind").TTextTransform;
    textOverflow?: import("../../types/tailwind").TTextOverflow;
    verticalAlign?: import("../../enhancers").VerticalAlign;
    whitespace?: import("../../enhancers").Whitespace;
    wordBreak?: import("../../enhancers").WordBreak;
}> & import("../../enhancers").TransformProps & {
    as?: React.ElementType<any>;
    UNSAFE_className?: string;
    className?: string;
    style?: React.CSSProperties;
    noFocusRing?: boolean;
    children?: React.ReactNode;
    css?: "CX_STRING";
    styled?: import("twind").Class;
} & Omit<any, "p" | "style" | "backdropBlur" | "outline" | "borderColor" | "border" | "borderT" | "borderR" | "borderL" | "borderB" | "rounded" | "roundedT" | "roundedR" | "roundedL" | "roundedB" | "roundedTL" | "roundedTR" | "roundedBL" | "roundedBR" | "color" | "placeholderColor" | "bg" | "flex" | "flexDirection" | "flexWrap" | "flexGrow" | "flexShrink" | "justifyContent" | "justifyItems" | "justifySelf" | "alignContent" | "alignItems" | "alignSelf" | "cursor" | "opacity" | "pointerEvents" | "resize" | "userSelect" | "visibility" | "display" | "overflowY" | "overflowX" | "objectFit" | "objectPosition" | "pos" | "pin" | "pinY" | "pinX" | "top" | "left" | "right" | "bottom" | "zIndex" | "ring" | "ringColor" | "ringOpacity" | "boxShadow" | "h" | "maxH" | "minH" | "w" | "maxW" | "minW" | "m" | "mx" | "my" | "mt" | "mr" | "mb" | "ml" | "px" | "py" | "pt" | "pr" | "pb" | "pl" | "fontSize" | "lineHeight" | "letterSpacing" | "fontFamily" | "fontWeight" | "fontStyle" | "textAlign" | "textDecoration" | "textTransform" | "textOverflow" | "verticalAlign" | "whitespace" | "wordBreak" | keyof import("../../enhancers").TransformProps | "as" | "UNSAFE_className" | "className" | "noFocusRing" | "children" | "css" | "styled"> & {
    /** Name or Icon props of a Font Awesome Icon to render*/
    icon?: IIconProps['icon'] | React.ReactElement;
    /**
     * Intent style for the callout. Seting will change callout colors and icon.
     * @default default
     */
    intent?: IntentVals | 'info';
    /**
     * appearance style for the callout. Setting to outline will change callout backgound from solid to transparent.
     * @default default
     */
    appearance?: 'default' | 'outline';
    /**
     * Displayed as the title of the callout
     */
    heading?: string;
    /**
     * Actions to be displayed on the right side of the callout. Useful if the callout needs to display a button or select.
     */
    actions?: React.ReactElement;
}>;
