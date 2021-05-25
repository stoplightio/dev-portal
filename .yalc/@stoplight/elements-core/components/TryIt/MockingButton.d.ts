import { IHttpOperation } from '@stoplight/types';
import * as React from 'react';
import { MockingOptions } from './mocking-utils';
interface MockingButtonProps {
    operation: IHttpOperation;
    options: MockingOptions;
    onOptionsChange: (data: MockingOptions) => void;
}
export declare const MockingButton: React.FC<MockingButtonProps>;
export {};
