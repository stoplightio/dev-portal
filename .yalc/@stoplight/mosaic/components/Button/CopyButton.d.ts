import { FocusableRefValue } from '@react-types/shared';
import * as React from 'react';
import { ButtonOwnProps } from './Button';
export declare type CopyButtonProps = {
    copyValue: string;
} & ButtonOwnProps;
declare const _CopyButton: React.ForwardRefExoticComponent<{
    copyValue: string;
} & import("@react-types/shared").PressEvents & import("@react-types/shared").FocusableProps & Omit<import("../../enhancers/pseudo").WithPseudo<{
    border?: import("../..").BorderWidthVals;
    borderT?: import("../..").BorderWidthVals;
    borderR?: import("../..").BorderWidthVals;
    borderL?: import("../..").BorderWidthVals;
    borderB?: import("../..").BorderWidthVals;
}>, "border"> & Omit<import("../../enhancers/pseudo").WithPseudo<{
    rounded?: import("../..").RoundedVals;
    roundedT?: import("../..").RoundedVals;
    roundedR?: import("../..").RoundedVals;
    roundedL?: import("../..").RoundedVals;
    roundedB?: import("../..").RoundedVals;
    roundedTL?: import("../..").RoundedVals;
    roundedTR?: import("../..").RoundedVals;
    roundedBL?: import("../..").RoundedVals;
    roundedBR?: import("../..").RoundedVals;
}>, "rounded"> & {
    children?: React.ReactNode;
    appearance?: import("./variants").AppearanceVals;
    intent?: import("../..").IntentVals;
    size?: "md" | "sm";
    active?: boolean;
    disabled?: boolean;
    loading?: boolean;
    icon?: React.ReactElement<any, string | React.JSXElementConstructor<any>> | import("@fortawesome/fontawesome-svg-core").IconProp;
    iconRight?: React.ReactElement<any, string | React.JSXElementConstructor<any>> | import("@fortawesome/fontawesome-svg-core").IconProp;
    autoFocus?: boolean;
    noFocusRing?: boolean;
    fullWidth?: boolean;
    label?: string;
} & React.RefAttributes<FocusableRefValue<HTMLElement, HTMLElement>>>;
export { _CopyButton as CopyButton };
