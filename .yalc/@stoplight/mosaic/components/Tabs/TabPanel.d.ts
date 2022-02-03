import * as React from 'react';
export declare type TabPanelOwnProps = {
    children: React.ReactNode;
    /**
     * An optional unique identifier (within this <Tabs /> component) for the TabPanel - must match up with the id of a corresponding <Tab />.
     */
    id?: string;
};
export declare const TabPanel: {
    (props: TabPanelOwnProps): JSX.Element;
    getCollectionNode: <T>(props: import("../Collections").ItemProps<T> & {
        id?: string;
        value?: string;
        type?: string;
    }, context: any) => Generator<import("@react-stately/collections").PartialNode<T>, any, unknown>;
};
