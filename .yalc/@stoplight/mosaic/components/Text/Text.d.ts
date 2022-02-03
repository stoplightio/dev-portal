import * as React from 'react';
import { FontSizeVals } from '../../enhancers';
import { PolymorphicComponentProps } from '../Box';
export declare type TextSizeVals = FontSizeVals;
export declare type TextOwnProps = {
    size?: TextSizeVals;
};
export declare type TextProps<E extends React.ElementType = typeof defaultElement> = PolymorphicComponentProps<E, TextOwnProps>;
declare const defaultElement = "span";
export declare const Text: <E extends React.ElementType = typeof defaultElement>(props: TextProps<E>) => JSX.Element;
export {};
