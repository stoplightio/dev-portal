import { TextInputBase } from '@react-types/shared';
import * as React from 'react';
import { RefObject } from 'react';
import { IntentVals } from '../../enhancers';
import { PolymorphicComponentProps } from '../Box/types';
import { AppearanceVals } from './variants';
export declare type TextareaOwnProps = TextInputBase & {
    size?: 'sm' | 'md' | 'lg';
    intent?: IntentVals;
    disabled?: boolean;
    readOnly?: boolean;
    required?: boolean;
    appearance?: AppearanceVals;
};
export declare type TextareaProps<E extends React.ElementType = typeof defaultElement> = PolymorphicComponentProps<E, TextareaOwnProps>;
declare const defaultElement = "textarea";
export declare const Textarea: <E extends React.ElementType = typeof defaultElement>(props: TextareaProps<E> & {
    ref?: RefObject<HTMLInputElement>;
}) => JSX.Element;
export {};
