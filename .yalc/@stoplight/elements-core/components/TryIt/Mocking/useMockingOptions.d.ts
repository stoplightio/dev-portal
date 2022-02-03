import { MockingOptions } from './mocking-utils';
export declare const useMockingOptions: () => [MockingOptions, (update: MockingOptions | ((prev: MockingOptions) => MockingOptions)) => void | Promise<void>];
