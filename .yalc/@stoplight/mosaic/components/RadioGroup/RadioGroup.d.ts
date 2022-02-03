import * as React from 'react';
import { ReactNode, RefObject } from 'react';
import { IntentVals } from '../../enhancers';
import { PolymorphicComponentProps } from '../Box';
import { RadioEnhancerProps } from './variants';
export declare type RadioGroupOwnProps = RadioEnhancerProps & {
    label: ReactNode;
    children?: React.ReactNode;
    isDisabled?: boolean;
    intent?: IntentVals;
    size?: 'sm' | 'md';
    autoFocus?: boolean;
};
declare const defaultElement = "div";
export declare type RadioGroupProps<E extends React.ElementType = typeof defaultElement> = PolymorphicComponentProps<E, RadioGroupOwnProps>;
export declare const RadioGroup: <E extends React.ElementType = typeof defaultElement>(props: RadioGroupProps<E> & {
    ref?: RefObject<HTMLElement>;
}) => JSX.Element;
export {};
