/// <reference types="react" />
import { BoxOwnProps } from '../Box';
export declare type InvertThemeProps = {
    children: JSX.Element;
    inverted?: boolean;
    propsOnDark?: BoxOwnProps;
};
export declare const InvertTheme: ({ children, inverted, propsOnDark }: InvertThemeProps) => JSX.Element;
