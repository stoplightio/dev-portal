import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { HttpSecurityScheme } from '@stoplight/types';
import React from 'react';
export declare const Badge: React.FC<{
    icon?: IconDefinition;
    className?: string;
    children: string;
}>;
export declare const DeprecatedBadge: React.FC;
export declare const SecurityBadge: React.FC<{
    scheme: HttpSecurityScheme;
    httpServiceUri?: string;
}>;
