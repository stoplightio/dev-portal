import * as React from 'react';
export declare type TabsOwnProps = {
    /**
     * Must contain `TabList` and `TabPanel` components.
     */
    children: React.ReactNode;
    /**
     * ID that will serve as a base for all the generated tab IDs.
     */
    id?: string;
    /**
     * The current selected tab's `id`.
     */
    selectedId?: string;
    /**
     * Callback for when the selected tab state changes.
     */
    onChange?: (selectedId: string) => void;
    /**
     * Defines the direction the tabs are displayed. Defaults to horizontal.
     */
    direction?: 'horizontal' | 'vertical';
    /**
     * Defines how large the tabs should be.
     */
    size?: 'sm' | 'lg';
    /**
     * The alignment of the tabs.
     */
    align?: 'center' | 'end' | 'start';
    /**
     * Performance: If `true`, the TabPanel rendering will be deferred until it is open.
     */
    isEager?: boolean;
};
export declare const Tabs: ({ children, id, selectedId, onChange, direction, size, align, isEager, }: TabsOwnProps) => JSX.Element;
