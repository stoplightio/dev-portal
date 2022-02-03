import { HttpSecurityScheme, IOauth2AuthorizationCodeFlow, IOauth2ClientCredentialsFlow, IOauth2Flow, IOauth2ImplicitFlow, IOauth2PasswordFlow } from '@stoplight/types';
export declare function getReadableSecurityName(securityScheme: HttpSecurityScheme, includeKey?: boolean): string;
export declare function getServiceUriFromOperation(uri: string): string | undefined;
export declare const isOAuth2ImplicitFlow: (maybeFlow: IOauth2Flow) => maybeFlow is IOauth2ImplicitFlow;
export declare const isOauth2AuthorizationCodeFlow: (maybeFlow: IOauth2Flow) => maybeFlow is IOauth2AuthorizationCodeFlow;
export declare const isOauth2ClientCredentialsOrPasswordFlow: (maybeFlow: IOauth2Flow) => maybeFlow is IOauth2ClientCredentialsFlow | IOauth2PasswordFlow;
export declare function shouldIncludeKey(schemes: HttpSecurityScheme[], type: HttpSecurityScheme['type']): boolean;
