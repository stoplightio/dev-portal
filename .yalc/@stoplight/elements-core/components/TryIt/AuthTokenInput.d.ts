import { HttpSecurityScheme } from '@stoplight/types';
import * as React from 'react';
interface AuthTokenInputProps {
    onChange: (value: string) => void;
    type: HttpSecurityScheme['type'];
    name: string;
    value: string;
}
export declare const AuthTokenInput: React.FC<AuthTokenInputProps>;
export {};
