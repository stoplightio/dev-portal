/**
 * Original credit to https://github.com/adobe/react-spectrum/blob/main/packages/%40react-aria/visually-hidden/src/VisuallyHidden.tsx
 * Modified `styles` a little bit to fix issues with the dismiss button introducing a 1px height and causing temp scrollbars on screen
 */
import * as React from 'react';
interface VisuallyHiddenProps extends React.HTMLAttributes<HTMLElement> {
    /** The content to visually hide. */
    children?: React.ReactNode;
    /**
     * The element type for the container.
     * @default 'div'
     */
    elementType?: string | React.JSXElementConstructor<any>;
    /** Whether the element should become visible on focus, for example skip links. */
    isFocusable?: boolean;
}
interface VisuallyHiddenAria {
    visuallyHiddenProps: React.HTMLAttributes<HTMLElement>;
}
/**
 * Provides props for an element that hides its children visually
 * but keeps content visible to assistive technology.
 */
export declare function useVisuallyHidden(props?: VisuallyHiddenProps): VisuallyHiddenAria;
/**
 * VisuallyHidden hides its children visually, while keeping content visible
 * to screen readers.
 */
export declare function VisuallyHidden(props: VisuallyHiddenProps): JSX.Element;
export {};
