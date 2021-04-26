import { IHttpOperation } from '@stoplight/types';
import * as React from 'react';
export interface IRequestProps {
    operation: IHttpOperation;
    onChange: (requestBodyIndex: number) => void;
}
export declare const Request: React.FunctionComponent<IRequestProps>;
