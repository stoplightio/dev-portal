import { HttpSecurityScheme, IApiKeySecurityScheme, IBasicSecurityScheme, IBearerSecurityScheme, IHttpHeaderParam, IHttpQueryParam, IOauth2SecurityScheme } from '@stoplight/types';
import React from 'react';
export declare type HttpSecuritySchemeWithValues = {
    scheme: HttpSecurityScheme;
    authValue: string | undefined;
};
export declare const isApiKeySecurityScheme: (maybeIApiKey: HttpSecurityScheme) => maybeIApiKey is IApiKeySecurityScheme;
export declare const isOAuth2SecurityScheme: (maybeIOAuth2: HttpSecurityScheme) => maybeIOAuth2 is IOauth2SecurityScheme;
export declare const isBasicSecurityScheme: (maybeIBasic: HttpSecurityScheme) => maybeIBasic is IBasicSecurityScheme;
export declare const isBearerSecurityScheme: (maybeIBearer: HttpSecurityScheme) => maybeIBearer is IBearerSecurityScheme;
export declare const isDigestSecurityScheme: (maybeIBearer: HttpSecurityScheme) => maybeIBearer is IBasicSecurityScheme;
export declare function filterOutAuthorizationParams(queryParams: IHttpQueryParam[], securitySchemes?: HttpSecurityScheme[][]): IHttpQueryParam[];
export declare function filterOutAuthorizationParams(queryParams: IHttpHeaderParam[], securitySchemes?: HttpSecurityScheme[][]): IHttpHeaderParam[];
export declare const usePersistedSecuritySchemeWithValues: () => [
    HttpSecuritySchemeWithValues | undefined,
    React.Dispatch<HttpSecuritySchemeWithValues | undefined>
];
