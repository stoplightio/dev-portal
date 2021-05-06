import * as React from 'react';
import { MockUrlResult } from '../components/TryIt/mocking-utils';
import { IActiveInfo } from '../types';
export interface IProvider extends IActiveInfo {
}
export declare const ActiveInfoContext: React.Context<IActiveInfo>;
export declare const Provider: React.FC<IProvider>;
export declare const MockingContext: React.Context<{
    mockUrl: MockUrlResult | undefined;
}>;
export declare const MockingProvider: React.FC<{
    mockUrl: MockUrlResult | undefined;
}>;
export declare function createNamedContext<T>(name: string, defaultValue: T): React.Context<T>;
