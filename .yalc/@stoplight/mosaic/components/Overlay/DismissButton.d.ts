/**
 * Original credit: https://github.com/adobe/react-spectrum/blob/main/packages/%40react-aria/overlays/src/DismissButton.tsx
 *
 * Adapted to use our custom VisuallyHidden
 */
/// <reference types="react" />
interface DismissButtonProps {
    /** Called when the dismiss button is activated. */
    onDismiss?: () => void;
}
/**
 * A visually hidden button that can be used to allow screen reader
 * users to dismiss a modal or popup when there is no visual
 * affordance to do so.
 */
export declare function DismissButton(props: DismissButtonProps): JSX.Element;
export {};
