import * as React from 'react';
import { ServiceNode } from '../../utils/oas/types';
declare type SidebarLayoutProps = {
    serviceNode: ServiceNode;
    logo?: string;
    hideTryIt?: boolean;
};
export declare const APIWithSidebarLayout: React.FC<SidebarLayoutProps>;
export {};
