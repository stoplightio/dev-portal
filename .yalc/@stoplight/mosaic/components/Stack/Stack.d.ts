import * as React from 'react';
import { GapVals, IFlexShorthandProps } from '../../enhancers';
import { PolymorphicComponentProps } from '../Box';
export declare type StackOwnProps = Pick<IFlexShorthandProps, 'align' | 'justify' | 'wrap'> & {
    /**
     * The direction to render the stack
     */
    direction?: 'vertical' | 'horizontal';
    /**
     * The space between each stack item
     */
    spacing?: GapVals;
    /**
     * If `true`, each stack item will show a divider
     */
    divider?: true | React.ReactElement;
    /**
     * If `true`, will render as `inline-flex` rather than `flex`
     */
    inline?: boolean;
};
export declare type StackProps<E extends React.ElementType = typeof defaultElement> = PolymorphicComponentProps<E, StackOwnProps>;
declare const defaultElement = "div";
export declare const Stack: <E extends React.ElementType = typeof defaultElement>(props: StackProps<E>) => JSX.Element;
export declare const HStack: <E extends React.ElementType = typeof defaultElement>(props: StackProps<E>) => JSX.Element;
export declare const VStack: <E extends React.ElementType = typeof defaultElement>(props: StackProps<E>) => JSX.Element;
export {};
