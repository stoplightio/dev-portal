import { IOauth2SecurityScheme } from '@stoplight/types';
import * as React from 'react';
interface OAuth2AuthProps {
    scheme: IOauth2SecurityScheme;
    onChange: (value: string) => void;
    value: string;
}
export declare const OAuth2Auth: React.FC<OAuth2AuthProps>;
export {};
