import { IHttpOperation } from '@stoplight/types';
import { Request as HarRequest } from 'har-format';
import * as React from 'react';
export interface TryItProps {
    httpOperation: IHttpOperation;
    mockUrl?: string;
    onRequestChange?: (currentRequest: HarRequest) => void;
    requestBodyIndex?: number;
}
export declare const TryIt: React.FC<TryItProps>;
