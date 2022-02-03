import * as React from 'react';
import { PolymorphicComponentProps } from '../Box/types';
export declare type ImageOwnProps = {
    src: string;
    invertOnDark?: boolean;
};
declare const defaultElement = "img";
export declare type ImageProps<E extends React.ElementType = typeof defaultElement> = PolymorphicComponentProps<E, ImageOwnProps>;
export declare function Image<E extends React.ElementType = typeof defaultElement>({ className, invertOnDark, ...props }: ImageProps<E>): JSX.Element;
export {};
