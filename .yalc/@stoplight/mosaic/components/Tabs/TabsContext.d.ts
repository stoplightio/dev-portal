import { TabListState } from '@react-stately/tabs';
import * as React from 'react';
import { TabsOwnProps } from './Tabs';
export interface TabsContext {
    tabsProps: TabsOwnProps;
    tabState: {
        tabListState: TabListState<any>;
        setTabListState: (state: TabListState<any>) => void;
        selectedTab: HTMLElement;
        collapse: boolean;
    };
    refs: {
        wrapperRef: React.MutableRefObject<HTMLDivElement>;
        tablistRef: React.MutableRefObject<HTMLDivElement>;
    };
    tabPanelProps: {
        'aria-labelledby': string;
    };
}
export declare const TabsContext: React.Context<TabsContext>;
