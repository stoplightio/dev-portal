import * as React from 'react';
import { RoutingProps } from '../types';
export interface StoplightProjectProps extends RoutingProps {
    workspaceSlug: string;
    projectSlug: string;
    platformUrl?: string;
    branchSlug?: string;
    authToken?: string;
}
export declare const StoplightProject: React.FC<StoplightProjectProps>;
