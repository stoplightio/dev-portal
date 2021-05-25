import { Dictionary, IHttpOperation, IMediaTypeContent } from '@stoplight/types';
import { Request as HarRequest } from 'har-format';
import { HttpSecuritySchemeWithValues } from './authentication-utils';
import { MockData } from './mocking-utils';
import { BodyParameterValues } from './request-body-utils';
interface BuildRequestInput {
    httpOperation: IHttpOperation;
    mediaTypeContent: IMediaTypeContent | undefined;
    parameterValues: Dictionary<string, string>;
    bodyInput?: BodyParameterValues | string;
    mockData?: MockData;
    auth?: HttpSecuritySchemeWithValues;
}
export declare function buildFetchRequest({ httpOperation, mediaTypeContent, bodyInput, parameterValues, mockData, auth, }: BuildRequestInput): Promise<Parameters<typeof fetch>>;
export declare function buildHarRequest({ httpOperation, bodyInput, parameterValues, mediaTypeContent, auth, }: BuildRequestInput): Promise<HarRequest>;
export {};
