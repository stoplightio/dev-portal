import { RoutingProps } from '@stoplight/elements-core';
import * as React from 'react';
export interface StoplightProjectProps extends RoutingProps {
    projectId: string;
    platformUrl?: string;
    hideTryIt?: boolean;
    hideMocking?: boolean;
    hideExport?: boolean;
    collapseTableOfContents?: boolean;
    tryItCredentialsPolicy?: 'omit' | 'include' | 'same-origin';
    tryItCorsProxy?: string;
}
export declare const StoplightProject: React.FC<StoplightProjectProps>;
