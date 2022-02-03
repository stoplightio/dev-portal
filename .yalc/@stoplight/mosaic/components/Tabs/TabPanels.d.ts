/// <reference types="react" />
import { CollectionChildren } from '@react-types/shared';
import { MarginVals, PaddingVals } from '../../enhancers';
export declare type TabPanelsProps = {
    children: CollectionChildren<any>;
    /**
     * Padding val to apply to the TabPanels container. Defaults to `4`.
     */
    p?: PaddingVals;
    /**
     * Margin val to apply to the TabPanels container. Defaults to `0`.
     */
    m?: MarginVals;
};
export declare function TabPanels({ p, m, ...props }: TabPanelsProps): JSX.Element;
