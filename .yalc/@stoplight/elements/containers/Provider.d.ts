import * as React from 'react';
import { MockUrlResult } from '../components/TryIt/mocking-utils';
import { IActiveInfo, NodeIconMapping } from '../types';
export interface IProvider extends IActiveInfo {
    authToken?: string;
    isStoplightProjectComponent?: boolean;
}
export declare const IconsContext: React.Context<NodeIconMapping>;
export declare const ActiveInfoContext: React.Context<IActiveInfo>;
export declare const Provider: React.FC<IProvider>;
export declare const StoplightProjectContext: React.Context<{
    mockUrl: MockUrlResult | undefined;
}>;
export declare const StoplightComponentProvider: React.FC<{
    mockUrl: MockUrlResult | undefined;
}>;
export declare function createNamedContext<T>(name: string, defaultValue: T): React.Context<T>;
