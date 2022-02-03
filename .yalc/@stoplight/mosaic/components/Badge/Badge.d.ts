import * as React from 'react';
import { IntentVals } from '../../enhancers';
import { PolymorphicComponentProps } from '../Box/types';
import { IIconProps } from '../Icon';
import { AppearanceVals } from './variants';
export declare type BadgeOwnProps = {
    /** Name of a Font Awesome Icon to render with badge*/
    icon?: IIconProps['icon'] | React.ReactElement;
    iconRight?: IIconProps['icon'] | React.ReactElement;
    /**
     * Whether this badge should use large styles.
     *
     * @default false
     */
    size?: 'sm' | 'md' | 'lg';
    /**
     * Badge apperence style.
     *
     * @default default
     */
    appearance?: AppearanceVals;
    /**
     * Intent style for the badge. Setting a color scheme will override this.
     * @default false
     */
    intent?: IntentVals;
    /**
     * Appends a remove icon to right right of badge and exectues this callback function on click
     * @default false
     */
    onRemove?: (e: any) => void;
};
declare const defaultElement = "span";
export declare type BadgeProps<E extends React.ElementType = typeof defaultElement> = PolymorphicComponentProps<E, BadgeOwnProps>;
export declare const Badge: React.MemoExoticComponent<React.ForwardRefExoticComponent<Pick<BadgeProps<"span">, "children" | "className" | "color" | "id" | "lang" | "style" | "role" | "tabIndex" | "cursor" | "display" | "fontFamily" | "fontSize" | "fontStyle" | "fontWeight" | "letterSpacing" | "opacity" | "pointerEvents" | "textDecoration" | "visibility" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "key" | "ring" | "outline" | "p" | "slot" | "title" | "backdropBlur" | "placeholder" | "borderColor" | "border" | "borderT" | "borderR" | "borderL" | "borderB" | "rounded" | "roundedT" | "roundedR" | "roundedL" | "roundedB" | "roundedTL" | "roundedTR" | "roundedBL" | "roundedBR" | "placeholderColor" | "bg" | "flex" | "flexDirection" | "flexWrap" | "flexGrow" | "flexShrink" | "justifyContent" | "justifyItems" | "justifySelf" | "alignContent" | "alignItems" | "alignSelf" | "resize" | "userSelect" | "overflowY" | "overflowX" | "objectFit" | "objectPosition" | "pos" | "pin" | "pinY" | "pinX" | "top" | "left" | "right" | "bottom" | "zIndex" | "ringColor" | "ringOpacity" | "boxShadow" | "h" | "maxH" | "minH" | "w" | "maxW" | "minW" | "m" | "mx" | "my" | "mt" | "mr" | "mb" | "ml" | "px" | "py" | "pt" | "pr" | "pb" | "pl" | "lineHeight" | "textAlign" | "textTransform" | "textOverflow" | "verticalAlign" | "whitespace" | "wordBreak" | keyof import("../../enhancers").TransformProps | "as" | "UNSAFE_className" | "noFocusRing" | "css" | "styled" | keyof BadgeOwnProps | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "hidden" | "spellCheck" | "translate" | "radioGroup" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is"> & React.RefAttributes<HTMLElement>>>;
export {};
