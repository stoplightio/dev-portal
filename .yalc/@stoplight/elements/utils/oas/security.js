"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isOauth2ClientCredentialsOrPasswordFlow = exports.isOauth2AuthorizationCodeFlow = exports.isOAuth2ImplicitFlow = exports.getServiceUriFromOperation = exports.getReadableSecurityName = void 0;
const lodash_1 = require("lodash");
function getReadableSecurityName(securityScheme, includeScope = false) {
    switch (securityScheme.type) {
        case 'apiKey':
            return 'API Key';
        case 'http':
            return `${lodash_1.capitalize(securityScheme.scheme)} Auth`;
        case 'oauth2':
            if (!includeScope)
                return 'OAuth 2.0';
            const scopes = lodash_1.uniq(lodash_1.flatMap(lodash_1.keys(securityScheme.flows), getOauthScopeMapper(securityScheme)));
            return `OAuth 2.0 (${scopes.join(', ')})`;
        case 'openIdConnect':
            return 'OpenID Connect';
        case 'mutualTLS':
            return 'Mutual TLS';
    }
}
exports.getReadableSecurityName = getReadableSecurityName;
const getOauthScopeMapper = (securityScheme) => (flow) => {
    var _a;
    if (!['implicit', 'password', 'clientCredentials', 'authorizationCode'].includes(flow))
        return [];
    return lodash_1.keys((_a = securityScheme.flows[flow]) === null || _a === void 0 ? void 0 : _a.scopes);
};
function getServiceUriFromOperation(uri) {
    const match = uri === null || uri === void 0 ? void 0 : uri.match(/(.*)\/(paths|operations)/);
    return match && match.length > 1 ? match[1] || '/' : undefined;
}
exports.getServiceUriFromOperation = getServiceUriFromOperation;
const isOAuth2ImplicitFlow = (maybeFlow) => lodash_1.isObject(maybeFlow) && 'authorizationUrl' in maybeFlow && !('tokenUrl' in maybeFlow);
exports.isOAuth2ImplicitFlow = isOAuth2ImplicitFlow;
const isOauth2AuthorizationCodeFlow = (maybeFlow) => lodash_1.isObject(maybeFlow) && 'authorizationUrl' in maybeFlow && 'tokenUrl' in maybeFlow;
exports.isOauth2AuthorizationCodeFlow = isOauth2AuthorizationCodeFlow;
const isOauth2ClientCredentialsOrPasswordFlow = (maybeFlow) => lodash_1.isObject(maybeFlow) && !('authorizationUrl' in maybeFlow) && 'tokenUrl' in maybeFlow;
exports.isOauth2ClientCredentialsOrPasswordFlow = isOauth2ClientCredentialsOrPasswordFlow;
//# sourceMappingURL=security.js.map