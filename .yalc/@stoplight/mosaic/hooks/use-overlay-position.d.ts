import type { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { AriaPositionProps, PositionAria } from '@react-aria/overlays';
export declare function useOverlayPosition({ matchTriggerWidth, ...props }: AriaPositionProps & {
    matchTriggerWidth?: boolean;
}): PositionAria & {
    arrowIcon: FontAwesomeIconProps['icon'];
};
