import * as React from 'react';
import { BoxProps } from '../Box';
import { HeadingAs, HeadingOwnProps } from '../Heading';
export declare type LinkHeadingOwnProps = HeadingOwnProps & {
    id?: string;
};
export declare type LinkHeadingProps = LinkHeadingOwnProps & BoxProps<HeadingAs>;
export declare const LinkHeading: React.NamedExoticComponent<HeadingOwnProps & {
    id?: string;
} & import("../../enhancers/pseudo").WithPseudo<{
    backdropBlur?: import("../..").BackdropBlurVals;
}> & import("../../enhancers/pseudo").WithPseudo<{
    outline?: "none";
    borderColor?: import("../..").BorderColorVals;
}> & import("../../enhancers/pseudo").WithPseudo<{
    border?: import("../..").BorderWidthVals;
    borderT?: import("../..").BorderWidthVals;
    borderR?: import("../..").BorderWidthVals;
    borderL?: import("../..").BorderWidthVals;
    borderB?: import("../..").BorderWidthVals;
}> & import("../../enhancers/pseudo").WithPseudo<{
    rounded?: import("../..").RoundedVals;
    roundedT?: import("../..").RoundedVals;
    roundedR?: import("../..").RoundedVals;
    roundedL?: import("../..").RoundedVals;
    roundedB?: import("../..").RoundedVals;
    roundedTL?: import("../..").RoundedVals;
    roundedTR?: import("../..").RoundedVals;
    roundedBL?: import("../..").RoundedVals;
    roundedBR?: import("../..").RoundedVals;
}> & import("../../enhancers/pseudo").WithPseudo<{
    color?: import("../..").TextColorVals;
}> & import("../../enhancers/pseudo").WithPseudo<{
    placeholderColor?: import("../..").PlaceholderColorVals;
}> & import("../../enhancers/pseudo").WithPseudo<{
    bg?: import("../..").BackgroundColorVals;
}> & import("../../enhancers/pseudo").WithPseudo<{
    flex?: import("../..").FlexVals;
    flexDirection?: import("../..").FlexDirectionVals;
    flexWrap?: import("../..").FlexWrapVals;
    flexGrow?: import("../..").FlexGrowVals;
    flexShrink?: import("../..").FlexShrinkVals;
    justifyContent?: import("../..").JustifyContentVals;
    justifyItems?: import("../..").JustifyItemsVals;
    justifySelf?: import("../..").JustifySelfVals;
    alignContent?: import("../..").AlignContentVals;
    alignItems?: import("../..").AlignItemsVals;
    alignSelf?: import("../..").AlignSelfVals;
}> & import("../../enhancers/pseudo").WithPseudo<{
    cursor?: import("../..").Cursor;
    opacity?: import("../..").OpacityVals;
    pointerEvents?: import("../..").PointerEvents;
    resize?: import("../..").Resize;
    userSelect?: import("../..").UserSelect;
    visibility?: import("../../types/tailwind").TVisibility;
}> & import("../../enhancers/pseudo").WithPseudo<{
    display?: import("../../types/tailwind").TDisplay;
    overflowY?: import("../..").OverflowVals;
    overflowX?: import("../..").OverflowVals;
    objectFit?: import("../..").ObjectFitVals;
    objectPosition?: import("../..").ObjectPositionVals;
}> & import("../../enhancers/pseudo").WithPseudo<{
    pos?: import("../../types/tailwind").TPosition;
    pin?: true | import("../../types/twind").WithNegatives<0 | "px" | 1 | 2 | 3 | 4 | "auto" | 8 | "full" | 5 | 10 | 20 | 40 | 60 | 80 | 6 | 7 | 9 | 11 | 12 | 14 | 16 | 24 | 28 | 32 | 36 | 44 | 48 | 52 | 56 | 64 | 72 | 96 | 0.5 | 1.5 | 2.5 | 3.5 | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4">;
    pinY?: true | import("../../types/twind").WithNegatives<0 | "px" | 1 | 2 | 3 | 4 | "auto" | 8 | "full" | 5 | 10 | 20 | 40 | 60 | 80 | 6 | 7 | 9 | 11 | 12 | 14 | 16 | 24 | 28 | 32 | 36 | 44 | 48 | 52 | 56 | 64 | 72 | 96 | 0.5 | 1.5 | 2.5 | 3.5 | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4">;
    pinX?: true | import("../../types/twind").WithNegatives<0 | "px" | 1 | 2 | 3 | 4 | "auto" | 8 | "full" | 5 | 10 | 20 | 40 | 60 | 80 | 6 | 7 | 9 | 11 | 12 | 14 | 16 | 24 | 28 | 32 | 36 | 44 | 48 | 52 | 56 | 64 | 72 | 96 | 0.5 | 1.5 | 2.5 | 3.5 | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4">;
    top?: true | import("../../types/twind").WithNegatives<0 | "px" | 1 | 2 | 3 | 4 | "auto" | 8 | "full" | 5 | 10 | 20 | 40 | 60 | 80 | 6 | 7 | 9 | 11 | 12 | 14 | 16 | 24 | 28 | 32 | 36 | 44 | 48 | 52 | 56 | 64 | 72 | 96 | 0.5 | 1.5 | 2.5 | 3.5 | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4">;
    left?: true | import("../../types/twind").WithNegatives<0 | "px" | 1 | 2 | 3 | 4 | "auto" | 8 | "full" | 5 | 10 | 20 | 40 | 60 | 80 | 6 | 7 | 9 | 11 | 12 | 14 | 16 | 24 | 28 | 32 | 36 | 44 | 48 | 52 | 56 | 64 | 72 | 96 | 0.5 | 1.5 | 2.5 | 3.5 | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4">;
    right?: true | import("../../types/twind").WithNegatives<0 | "px" | 1 | 2 | 3 | 4 | "auto" | 8 | "full" | 5 | 10 | 20 | 40 | 60 | 80 | 6 | 7 | 9 | 11 | 12 | 14 | 16 | 24 | 28 | 32 | 36 | 44 | 48 | 52 | 56 | 64 | 72 | 96 | 0.5 | 1.5 | 2.5 | 3.5 | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4">;
    bottom?: true | import("../../types/twind").WithNegatives<0 | "px" | 1 | 2 | 3 | 4 | "auto" | 8 | "full" | 5 | 10 | 20 | 40 | 60 | 80 | 6 | 7 | 9 | 11 | 12 | 14 | 16 | 24 | 28 | 32 | 36 | 44 | 48 | 52 | 56 | 64 | 72 | 96 | 0.5 | 1.5 | 2.5 | 3.5 | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4">;
    zIndex?: 0 | "auto" | 10 | 20 | 30 | 40 | 50 | -1;
}> & import("../../enhancers/pseudo").WithPseudo<{
    ring?: import("../..").RingWidthVals;
    ringColor?: import("../..").RingColorVals;
    ringOpacity?: import("../..").RingOpacityVals;
}> & import("../../enhancers/pseudo").WithPseudo<{
    boxShadow?: import("../..").BoxShadowVals;
}> & import("../../enhancers/pseudo").WithPseudo<{
    h?: import("../..").HeightVals;
    maxH?: import("../..").MaxHeightVals;
    minH?: import("../..").MinHeightVals;
}> & import("../../enhancers/pseudo").WithPseudo<{
    w?: import("../..").WidthVals;
    maxW?: import("../..").MaxWidthVals;
    minW?: import("../..").MinWidthVals;
}> & import("../../enhancers/pseudo").WithPseudo<{
    m?: import("../..").MarginVals;
    mx?: import("../..").MarginVals;
    my?: import("../..").MarginVals;
    mt?: import("../..").MarginVals;
    mr?: import("../..").MarginVals;
    mb?: import("../..").MarginVals;
    ml?: import("../..").MarginVals;
}> & import("../../enhancers/pseudo").WithPseudo<{
    p?: import("../..").PaddingVals;
    px?: import("../..").PaddingVals;
    py?: import("../..").PaddingVals;
    pt?: import("../..").PaddingVals;
    pr?: import("../..").PaddingVals;
    pb?: import("../..").PaddingVals;
    pl?: import("../..").PaddingVals;
}> & import("../../enhancers/pseudo").WithPseudo<{
    fontSize?: import("../..").FontSizeVals;
    lineHeight?: import("../..").LineHeights;
    letterSpacing?: import("../..").LetterSpacing;
    fontFamily?: import("../..").FontFamilyVals;
    fontWeight?: import("../..").FontWeightVals;
    fontStyle?: import("../../types/tailwind").TFontStyle;
    textAlign?: import("../..").TextAlign;
    textDecoration?: import("../../types/tailwind").TTextDecoration;
    textTransform?: import("../../types/tailwind").TTextTransform;
    textOverflow?: import("../../types/tailwind").TTextOverflow;
    verticalAlign?: import("../..").VerticalAlign;
    whitespace?: import("../..").Whitespace;
    wordBreak?: import("../..").WordBreak;
}> & import("../..").TransformProps & {
    as?: HeadingAs;
    UNSAFE_className?: string;
    className?: string;
    style?: React.CSSProperties;
    noFocusRing?: boolean;
    children?: React.ReactNode;
    css?: "CX_STRING";
    styled?: import("twind").Class;
} & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, "p" | "style" | "backdropBlur" | "outline" | "borderColor" | "border" | "borderT" | "borderR" | "borderL" | "borderB" | "rounded" | "roundedT" | "roundedR" | "roundedL" | "roundedB" | "roundedTL" | "roundedTR" | "roundedBL" | "roundedBR" | "color" | "placeholderColor" | "bg" | "flex" | "flexDirection" | "flexWrap" | "flexGrow" | "flexShrink" | "justifyContent" | "justifyItems" | "justifySelf" | "alignContent" | "alignItems" | "alignSelf" | "cursor" | "opacity" | "pointerEvents" | "resize" | "userSelect" | "visibility" | "display" | "overflowY" | "overflowX" | "objectFit" | "objectPosition" | "pos" | "pin" | "pinY" | "pinX" | "top" | "left" | "right" | "bottom" | "zIndex" | "ring" | "ringColor" | "ringOpacity" | "boxShadow" | "h" | "maxH" | "minH" | "w" | "maxW" | "minW" | "m" | "mx" | "my" | "mt" | "mr" | "mb" | "ml" | "px" | "py" | "pt" | "pr" | "pb" | "pl" | "fontSize" | "lineHeight" | "letterSpacing" | "fontFamily" | "fontWeight" | "fontStyle" | "textAlign" | "textDecoration" | "textTransform" | "textOverflow" | "verticalAlign" | "whitespace" | "wordBreak" | keyof import("../..").TransformProps | "as" | "UNSAFE_className" | "className" | "noFocusRing" | "children" | "css" | "styled">>;
