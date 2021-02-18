import React from 'react';
export declare type ModalProps = {
    title: React.ReactElement | string;
    /**
     * The content to render in the Modal.
     */
    children: React.ReactNode;
    /**
     * The content to render in the footer slot.
     */
    footer?: React.ReactElement | string;
    /**
     * Whether the Modal is open.
     */
    isOpen: boolean;
    /**
     * Called when the Modal closes.
     */
    onClose: () => void;
    /**
     * When true the user will be able to interact with content behind the modal, and move the modal around.
     */
    isDraggable?: boolean;
    /**
     * Whether to prevent closing the overlay when the user interacts outside of it.
     */
    isNotDismissable?: boolean;
};
export declare const useModalState: () => {
    isOpen: boolean;
    open: () => void;
    close: () => void;
};
export declare const Modal: (props: ModalProps) => JSX.Element;
