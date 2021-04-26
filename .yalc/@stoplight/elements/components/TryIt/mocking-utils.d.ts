import { IHttpOperation } from '@stoplight/types';
import { IActiveInfo } from '../../types';
export declare type MockingOptions = {
    isEnabled: boolean;
    code?: string;
    example?: string;
    dynamic?: boolean;
};
declare type PreferHeaderProps = {
    code?: string;
    example?: string;
    dynamic?: boolean;
};
export declare type MockData = {
    url: string;
    header?: Record<'Prefer', string>;
};
export declare type MockUrlResult = {
    servicePath: string;
    operationPath?: string;
    id: number;
};
export declare function getMockData(url: string | undefined, httpOperation: IHttpOperation, { isEnabled, code, dynamic, example }: MockingOptions): MockData | undefined;
export declare function buildPreferHeader({ code, example, dynamic }: PreferHeaderProps, httpOperation: IHttpOperation): Record<'Prefer', string>;
export declare function useMockUrl(info: IActiveInfo, nodeUri: string | undefined): MockUrlResult | undefined;
export {};
