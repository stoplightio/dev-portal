import * as React from 'react';
import { ComponentProps, CSSProperties, ElementType, HTMLAttributes } from 'react';
import { TCXString } from '../../types/twind';
import { EnhancerProps, tx } from '../../utils';
/**
 * Generic component props with "as" prop
 * @template P Additional props
 * @template T React component or string element
 */
export declare type BoxOwnProps<E extends ElementType = ElementType> = EnhancerProps & {
    /**
     * Replaces the underlying element
     */
    as?: E;
    /**
     * Use only when absolutely necessary - usually when an external library needs a specific className for whatever reason.
     */
    UNSAFE_className?: string;
    /**
     * @deprecated Prefer build in style props or `css` prop, and as last resort `UNSAFE_className`. For removal in v3.
     */
    className?: string;
    /**
     * @deprecated Prefer build in style props, the `css` prop, or create a styled component with the `twStyle` helper. For removal in v3.
     */
    style?: CSSProperties;
    noFocusRing?: boolean;
    children?: React.ReactNode;
    /**
     * A type-safe way to style an element with any supported tailwind class.
     *
     * The `css` prop is an escape hatch for more complicated styling that is not currently supported via
     * the official style props api.
     *
     * Prefer built in style props if one is available! For example, prefer `p={4}` over `css={CX('p-4')}`.
     *
     * @example
     * Use some basic classes:
     *
     * ```ts
     * import { CX } from '@stoplight/mosaic';
     *
     * <Box css={CX('bg-danger', 'p-4')} />
     * ```
     *
     * Mix some psuedo variants in:
     *
     * ```ts
     * import { CX } from '@stoplight/mosaic';
     *
     * <Box css={CX.$combine(CX('bg-danger', 'p-4'), CX.hover('bg-success'))} />
     * ```
     */
    css?: TCXString;
    /**
     * For use with the `twStyle` helper to create type-safe styled components.
     *
     * @example
     * Define your styled component, with its variants:
     *
     * ```ts
     * import { CX } from '@stoplight/mosaic';
     * export const buttonStyle = style({
     *   label: 'button',
     *   defaults: {
     *     appearance: 'danger',
     *   },
     *   props: {
     *     appearance: {
     *       danger: CX.$combine(CX('bg-danger', 'text-on-danger'), CX.hover('hover:bg-danger-dark')),
     *     },
     *     size: {
     *       sm: CX('text-sm', 'h-sm', 'p-3'),
     *       lg: CX('text-lg', 'h-lg', 'p-4'),
     *     },
     *     outlined: {
     *       true: CX('border'),
     *     },
     *   },
     *   when: [
     *     [{ appearance: 'orange', outlined: true }, CX('border-danger')],
     *   ],
     * });
     * ```
     *
     * Use the button style in your component, controlling it's behavior via the styled props:
     *
     * ```ts
     * import { buttonStyle } from './styles';
     *
     * export const Button = () => {
     *   return <Box styled={buttonStyle({ appearance: danger, outlined: true })} />;
     * }
     * ```
     */
    styled?: Parameters<typeof tx>[1];
};
/**
 * Box supports standard HTML attributes
 * Box re-defines some props like color, so omit here to prevent clash
 */
export interface IBoxHTMLAttributes<C = HTMLDivElement> extends Omit<HTMLAttributes<C>, 'color'> {
}
export declare type BoxProps<E extends ElementType, P = unknown> = BoxOwnProps<E> & Omit<ComponentProps<E>, keyof BoxOwnProps | keyof P>;
export declare type PolymorphicComponentProps<E extends ElementType, P> = P & BoxProps<E, P>;
export declare type PolymorphicComponent<P, D extends ElementType = 'div'> = <E extends ElementType = D>(props: PolymorphicComponentProps<E, P>) => JSX.Element;
