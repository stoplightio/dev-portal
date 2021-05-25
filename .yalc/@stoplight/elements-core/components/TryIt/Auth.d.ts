import { HttpSecurityScheme } from '@stoplight/types';
import * as React from 'react';
import { HttpSecuritySchemeWithValues } from './authentication-utils';
interface TryItAuthProps {
    operationSecurityScheme: HttpSecurityScheme[][];
    onChange: (authObject: HttpSecuritySchemeWithValues | undefined) => void;
    value: HttpSecuritySchemeWithValues | undefined;
}
export declare const TryItAuth: React.FC<TryItAuthProps>;
export {};
