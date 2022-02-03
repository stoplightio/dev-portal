import { FocusableProps, FocusableRefValue, PressEvents } from '@react-types/shared';
import * as React from 'react';
import { BorderRoundedProps, BorderWidthProps, IntentVals } from '../../enhancers';
import { PolymorphicComponentProps } from '../Box/types';
import { IIconProps } from '../Icon';
import { AppearanceVals } from './variants';
export declare type ButtonOwnProps = PressEvents & FocusableProps & Omit<BorderWidthProps, 'border'> & Omit<BorderRoundedProps, 'rounded'> & {
    children?: React.ReactNode;
    appearance?: AppearanceVals;
    intent?: IntentVals;
    size?: 'sm' | 'md';
    active?: boolean;
    disabled?: boolean;
    loading?: boolean;
    icon?: IIconProps['icon'] | React.ReactElement;
    iconRight?: IIconProps['icon'] | React.ReactElement;
    autoFocus?: boolean;
    noFocusRing?: boolean;
    fullWidth?: boolean;
    label?: string;
};
export declare type ButtonProps<E extends React.ElementType = typeof defaultElement> = PolymorphicComponentProps<E, ButtonOwnProps>;
declare const defaultElement = "button";
declare const _Button: <T extends React.ElementType<any> = "button">(props: PressEvents & FocusableProps & Omit<import("../../enhancers/pseudo").WithPseudo<{
    border?: import("../../enhancers").BorderWidthVals;
    borderT?: import("../../enhancers").BorderWidthVals;
    borderR?: import("../../enhancers").BorderWidthVals;
    borderL?: import("../../enhancers").BorderWidthVals;
    borderB?: import("../../enhancers").BorderWidthVals;
}>, "border"> & Omit<import("../../enhancers/pseudo").WithPseudo<{
    rounded?: import("../../enhancers").RoundedVals;
    roundedT?: import("../../enhancers").RoundedVals;
    roundedR?: import("../../enhancers").RoundedVals;
    roundedL?: import("../../enhancers").RoundedVals;
    roundedB?: import("../../enhancers").RoundedVals;
    roundedTL?: import("../../enhancers").RoundedVals;
    roundedTR?: import("../../enhancers").RoundedVals;
    roundedBL?: import("../../enhancers").RoundedVals;
    roundedBR?: import("../../enhancers").RoundedVals;
}>, "rounded"> & {
    children?: React.ReactNode;
    appearance?: AppearanceVals;
    intent?: IntentVals;
    size?: 'sm' | 'md';
    active?: boolean;
    disabled?: boolean;
    loading?: boolean;
    icon?: IIconProps['icon'] | React.ReactElement;
    iconRight?: IIconProps['icon'] | React.ReactElement;
    autoFocus?: boolean;
    noFocusRing?: boolean;
    fullWidth?: boolean;
    label?: string;
} & import("../../enhancers/pseudo").WithPseudo<{
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
    bg?: import("../../enhancers").BackgroundColorVals;
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
    pin?: true | import("../../types/twind").WithNegatives<0 | 2 | "px" | 1 | 4 | 8 | "full" | "auto" | 5 | 10 | 20 | 40 | 60 | 80 | 3 | 6 | 7 | 9 | 11 | 12 | 14 | 16 | 24 | 28 | 32 | 36 | 44 | 48 | 52 | 56 | 64 | 72 | 96 | 0.5 | 1.5 | 2.5 | 3.5 | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4">;
    pinY?: true | import("../../types/twind").WithNegatives<0 | 2 | "px" | 1 | 4 | 8 | "full" | "auto" | 5 | 10 | 20 | 40 | 60 | 80 | 3 | 6 | 7 | 9 | 11 | 12 | 14 | 16 | 24 | 28 | 32 | 36 | 44 | 48 | 52 | 56 | 64 | 72 | 96 | 0.5 | 1.5 | 2.5 | 3.5 | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4">;
    pinX?: true | import("../../types/twind").WithNegatives<0 | 2 | "px" | 1 | 4 | 8 | "full" | "auto" | 5 | 10 | 20 | 40 | 60 | 80 | 3 | 6 | 7 | 9 | 11 | 12 | 14 | 16 | 24 | 28 | 32 | 36 | 44 | 48 | 52 | 56 | 64 | 72 | 96 | 0.5 | 1.5 | 2.5 | 3.5 | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4">;
    top?: true | import("../../types/twind").WithNegatives<0 | 2 | "px" | 1 | 4 | 8 | "full" | "auto" | 5 | 10 | 20 | 40 | 60 | 80 | 3 | 6 | 7 | 9 | 11 | 12 | 14 | 16 | 24 | 28 | 32 | 36 | 44 | 48 | 52 | 56 | 64 | 72 | 96 | 0.5 | 1.5 | 2.5 | 3.5 | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4">;
    left?: true | import("../../types/twind").WithNegatives<0 | 2 | "px" | 1 | 4 | 8 | "full" | "auto" | 5 | 10 | 20 | 40 | 60 | 80 | 3 | 6 | 7 | 9 | 11 | 12 | 14 | 16 | 24 | 28 | 32 | 36 | 44 | 48 | 52 | 56 | 64 | 72 | 96 | 0.5 | 1.5 | 2.5 | 3.5 | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4">;
    right?: true | import("../../types/twind").WithNegatives<0 | 2 | "px" | 1 | 4 | 8 | "full" | "auto" | 5 | 10 | 20 | 40 | 60 | 80 | 3 | 6 | 7 | 9 | 11 | 12 | 14 | 16 | 24 | 28 | 32 | 36 | 44 | 48 | 52 | 56 | 64 | 72 | 96 | 0.5 | 1.5 | 2.5 | 3.5 | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4">;
    bottom?: true | import("../../types/twind").WithNegatives<0 | 2 | "px" | 1 | 4 | 8 | "full" | "auto" | 5 | 10 | 20 | 40 | 60 | 80 | 3 | 6 | 7 | 9 | 11 | 12 | 14 | 16 | 24 | 28 | 32 | 36 | 44 | 48 | 52 | 56 | 64 | 72 | 96 | 0.5 | 1.5 | 2.5 | 3.5 | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4">;
    zIndex?: 0 | "auto" | 10 | 20 | 30 | 40 | 50 | -1;
}> & import("../../enhancers/pseudo").WithPseudo<{
    ring?: import("../../enhancers").RingWidthVals;
    ringColor?: import("../../enhancers").RingColorVals;
    ringOpacity?: import("../../enhancers").RingOpacityVals;
}> & import("../../enhancers/pseudo").WithPseudo<{
    boxShadow?: import("../../enhancers").BoxShadowVals;
}> & import("../../enhancers/pseudo").WithPseudo<{
    h?: import("../../enhancers").HeightVals;
    maxH?: import("../../enhancers").MaxHeightVals;
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
    py?: import("../../enhancers").PaddingVals;
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
    as?: T;
    UNSAFE_className?: string;
    className?: string;
    style?: React.CSSProperties;
    noFocusRing?: boolean;
    children?: React.ReactNode;
    css?: "CX_STRING";
    styled?: import("twind").Class;
} & Omit<React.ComponentProps<T>, "border" | "borderT" | "borderR" | "borderL" | "borderB" | "rounded" | "roundedT" | "roundedR" | "roundedL" | "roundedB" | "roundedTL" | "roundedTR" | "roundedBL" | "roundedBR" | "icon" | "children" | "className" | "color" | "style" | "cursor" | "display" | "fontFamily" | "fontSize" | "fontStyle" | "fontWeight" | "letterSpacing" | "opacity" | "pointerEvents" | "textDecoration" | "visibility" | "ring" | "label" | "p" | "backdropBlur" | "active" | "disabled" | "outline" | "borderColor" | "placeholderColor" | "bg" | "flex" | "flexDirection" | "flexWrap" | "flexGrow" | "flexShrink" | "justifyContent" | "justifyItems" | "justifySelf" | "alignContent" | "alignItems" | "alignSelf" | "resize" | "userSelect" | "overflowY" | "overflowX" | "objectFit" | "objectPosition" | "pos" | "pin" | "pinY" | "pinX" | "top" | "left" | "right" | "bottom" | "zIndex" | "ringColor" | "ringOpacity" | "boxShadow" | "h" | "maxH" | "minH" | "w" | "maxW" | "minW" | "m" | "mx" | "my" | "mt" | "mr" | "mb" | "ml" | "px" | "py" | "pt" | "pr" | "pb" | "pl" | "lineHeight" | "textAlign" | "textTransform" | "textOverflow" | "verticalAlign" | "whitespace" | "wordBreak" | keyof import("../../enhancers").TransformProps | "as" | "UNSAFE_className" | "noFocusRing" | "css" | "styled" | keyof PressEvents | keyof FocusableProps | "appearance" | "intent" | "size" | "loading" | "iconRight" | "fullWidth"> & {
    ref?: React.MutableRefObject<FocusableRefValue<HTMLElement>>;
}) => React.ReactElement;
export { _Button as Button };
