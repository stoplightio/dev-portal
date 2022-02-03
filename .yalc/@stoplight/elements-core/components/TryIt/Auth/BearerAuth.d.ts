import { IBearerSecurityScheme } from '@stoplight/types';
import * as React from 'react';
interface BearerAuthProps {
    scheme: IBearerSecurityScheme;
    onChange: (value: string) => void;
    value: string;
}
export declare const BearerAuth: React.FC<BearerAuthProps>;
export {};
