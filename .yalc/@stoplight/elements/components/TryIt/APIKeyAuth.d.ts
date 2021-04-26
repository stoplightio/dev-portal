import { IApiKeySecurityScheme } from '@stoplight/types';
import * as React from 'react';
interface APIKeyAuthProps {
    scheme: IApiKeySecurityScheme;
    onChange: (apiKey: string) => void;
    value: string;
}
export declare const APIKeyAuth: React.FC<APIKeyAuthProps>;
export {};
