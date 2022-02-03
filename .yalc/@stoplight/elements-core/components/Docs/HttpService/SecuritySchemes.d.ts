import { HttpSecurityScheme } from '@stoplight/types';
import React from 'react';
interface SecuritySchemesProps {
    schemes: HttpSecurityScheme[];
    defaultScheme?: string;
    defaultCollapsed?: boolean;
}
export declare const SecuritySchemes: React.FC<SecuritySchemesProps>;
export {};
