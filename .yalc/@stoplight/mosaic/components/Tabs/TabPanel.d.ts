import * as React from 'react';
import { IMarginProps, IPaddingProps } from '../../enhancers';
export declare type TabPanelOwnProps = {
    children: React.ReactNode;
    /**
     * A unique ID for this tab panel. If not provided, one will be generated.
     */
    id?: string;
    /**
     * ID of the tab that corresponds with this panel. If not provided, it will be inferred from tab index.
     */
    tabId?: string;
};
export declare type TabPanelProps = TabPanelOwnProps & IMarginProps & IPaddingProps;
export declare const TabPanel: React.NamedExoticComponent<TabPanelProps>;
