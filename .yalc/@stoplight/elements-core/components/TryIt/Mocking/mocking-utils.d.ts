import { IHttpOperation } from '@stoplight/types';
export declare type MockingOptions = {
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
export declare function getMockData(url: string | undefined, httpOperation: IHttpOperation, { code, dynamic, example }: MockingOptions): MockData | undefined;
export declare function buildPreferHeader({ code, example, dynamic }: PreferHeaderProps, httpOperation: IHttpOperation): Record<'Prefer', string> | undefined;
export {};
