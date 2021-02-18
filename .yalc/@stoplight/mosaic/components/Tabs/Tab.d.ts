import * as React from 'react';
export declare type TabOwnProps = {
    children: React.ReactNode;
    /**
     * A unique identifier for the tab.
     */
    id: string;
    disabled?: boolean;
};
export declare const Tab: React.MemoExoticComponent<({ children, id, disabled, ...restProps }: TabOwnProps) => JSX.Element>;
