import { HTMLAttributes } from 'react';
import { IBorderProps, IColorProps, IFlexProps, IInteractivityProps, ILayoutProps, IMarginProps, IPaddingProps, IPositionProps, IRingProps, IShadowProps, ISizeProps, ITypographyProps } from '../../enhancers';
declare type EnhancerProps = ITypographyProps & ISizeProps & IMarginProps & IPaddingProps & IShadowProps & IColorProps & IBorderProps & IRingProps & IInteractivityProps & IFlexProps & IPositionProps & ILayoutProps;
/**
 * Generic component props with "as" prop
 * @template P Additional props
 * @template T React component or string element
 */
export declare type BoxOwnProps<E extends React.ElementType = React.ElementType> = EnhancerProps & {
    /**
     * Replaces the underlying element
     */
    as?: E;
    className?: string;
    role?: string;
    noFocusRing?: boolean;
};
/**
 * Box supports standard HTML attributes
 * Box re-defines some props like color, so omit here to prevent clash
 */
export interface IBoxHTMLAttributes<C = HTMLDivElement> extends Omit<HTMLAttributes<C>, 'color'> {
}
export declare type BoxProps<E extends React.ElementType> = BoxOwnProps<E> & Omit<React.ComponentProps<E>, keyof BoxOwnProps>;
export declare type PolymorphicComponentProps<E extends React.ElementType, P> = P & BoxProps<E>;
export declare type PolymorphicComponent<P, D extends React.ElementType = 'div'> = <E extends React.ElementType = D>(props: PolymorphicComponentProps<E, P>) => JSX.Element;
export {};
