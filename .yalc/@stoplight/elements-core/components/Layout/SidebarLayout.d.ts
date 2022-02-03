import * as React from 'react';
declare type SidebarLayoutProps = {
    sidebar: React.ReactNode;
    maxContentWidth?: number;
    sidebarWidth?: number;
    children?: React.ReactNode;
};
export declare const SidebarLayout: React.ForwardRefExoticComponent<SidebarLayoutProps & React.RefAttributes<HTMLDivElement>>;
export {};
