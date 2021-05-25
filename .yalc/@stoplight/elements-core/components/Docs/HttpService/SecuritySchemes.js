"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOAuthFlowDescription = exports.SecuritySchemes = void 0;
const tslib_1 = require("tslib");
const mosaic_1 = require("@stoplight/mosaic");
const lodash_1 = require("lodash");
const react_1 = tslib_1.__importDefault(require("react"));
const security_1 = require("../../../utils/oas/security");
const MarkdownViewer_1 = require("../../MarkdownViewer");
const oauthFlowNames = {
    implicit: 'Implicit',
    authorizationCode: 'Authorization Code',
    clientCredentials: 'Client Credentials',
    password: 'Password',
};
const SecuritySchemes = ({ schemes, defaultScheme }) => {
    return (react_1.default.createElement(mosaic_1.Panel, { rounded: true, isCollapsible: false },
        react_1.default.createElement(mosaic_1.Panel.Titlebar, { bg: "canvas-300" },
            react_1.default.createElement("span", { role: "heading" }, "Security")),
        react_1.default.createElement(mosaic_1.Panel.Content, { p: 0 }, lodash_1.sortBy(schemes, 'type').map((scheme, i) => (react_1.default.createElement(mosaic_1.Panel, { key: i, defaultIsOpen: defaultScheme ? scheme.key === defaultScheme : i === 0, isCollapsible: schemes.length > 1 },
            react_1.default.createElement(mosaic_1.Panel.Titlebar, null,
                react_1.default.createElement("span", { role: "heading" }, security_1.getReadableSecurityName(scheme))),
            react_1.default.createElement(mosaic_1.Panel.Content, null,
                react_1.default.createElement(MarkdownViewer_1.MarkdownViewer, { markdown: scheme.description || getDefaultDescription(scheme) }))))))));
};
exports.SecuritySchemes = SecuritySchemes;
function getDefaultDescription(scheme) {
    switch (scheme.type) {
        case 'apiKey':
            return getApiKeyDescription(scheme.in, scheme.name);
        case 'http':
            switch (scheme.scheme) {
                case 'basic':
                    return getBasicAuthDescription();
                case 'bearer':
                    return getBearerAuthDescription();
                case 'digest':
                    return getDigestAuthDescription();
            }
        case 'oauth2':
            return getOAuthDescription(scheme);
    }
    return '';
}
function getApiKeyDescription(inProperty, name) {
    return `An API key is a token that you provide when making API calls. Include the token in a ${inProperty} parameter called \`${name}\`.

  Example: ${inProperty === 'query' ? `\`?${name}=123\`` : `\`${name}: 123\``}`;
}
function getBasicAuthDescription() {
    return `Basic authentication is a simple authentication scheme built into the HTTP protocol.
  To use it, send your HTTP requests with an Authorization header that contains the word Basic
  followed by a space and a base64-encoded string \`username:password\`.

  Example: \`Authorization: Basic ZGVtbzpwQDU1dzByZA==\``;
}
function getBearerAuthDescription() {
    return `Provide your bearer token in the Authorization header when making requests to protected resources.

  Example: \`Authorization: Bearer 123\``;
}
function getDigestAuthDescription() {
    return `Provide your encrypted digest scheme data in the Authorization header when making requests to protected resources.

  Example: \`Authorization: Digest username=guest, realm="test", nonce="2", uri="/uri", response="123"\``;
}
function getOAuthDescription(scheme) {
    const flows = lodash_1.keys(scheme.flows);
    return flows.map(flow => getOAuthFlowDescription(oauthFlowNames[flow], scheme.flows[flow])).join('\n\n');
}
function getOAuthFlowDescription(title, flow) {
    let description = `**${title} OAuth Flow**`;
    description +=
        security_1.isOAuth2ImplicitFlow(flow) || security_1.isOauth2AuthorizationCodeFlow(flow)
            ? `\n\nAuthorize URL: ${flow.authorizationUrl}`
            : '';
    description +=
        security_1.isOauth2AuthorizationCodeFlow(flow) || security_1.isOauth2ClientCredentialsOrPasswordFlow(flow)
            ? `\n\nToken URL: ${flow.tokenUrl}`
            : '';
    description += flow.refreshUrl ? `\n\nRefresh URL: ${flow.refreshUrl}` : '';
    description += `\n\nScopes:
${lodash_1.entries(flow.scopes)
        .map(([key, value]) => `- \`${key}\` - ${value}`)
        .join('\n')}`;
    return description;
}
exports.getOAuthFlowDescription = getOAuthFlowDescription;
//# sourceMappingURL=SecuritySchemes.js.map