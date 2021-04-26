import { HttpSecurityScheme, IOauth2Flow } from '@stoplight/types';
import React from 'react';
export interface SecuritySchemesProps {
    schemes: HttpSecurityScheme[];
    defaultScheme?: string;
}
export declare const SecuritySchemes: React.FC<SecuritySchemesProps>;
export declare function getOAuthFlowDescription(title: string, flow: IOauth2Flow): string;
