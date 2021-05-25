"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TryItAuth = void 0;
const tslib_1 = require("tslib");
const mosaic_1 = require("@stoplight/mosaic");
const lodash_1 = require("lodash");
const React = tslib_1.__importStar(require("react"));
const security_1 = require("../../utils/oas/security");
const APIKeyAuth_1 = require("./APIKeyAuth");
const BasicAuth_1 = require("./BasicAuth");
const BearerAuth_1 = require("./BearerAuth");
const OAuth2Auth_1 = require("./OAuth2Auth");
const TryItAuth = ({ operationSecurityScheme: operationAuth, onChange, value }) => {
    var _a;
    const operationSecurityArray = lodash_1.flatten(operationAuth);
    const filteredSecurityItems = operationSecurityArray.filter(scheme => securitySchemeKeys.includes(scheme === null || scheme === void 0 ? void 0 : scheme.type));
    const securityScheme = value ? value.scheme : filteredSecurityItems[0];
    const menuName = securityScheme ? security_1.getReadableSecurityName(securityScheme) : 'Security Scheme';
    const handleChange = (authValue) => {
        onChange(securityScheme && { scheme: securityScheme, authValue: authValue });
    };
    React.useEffect(() => {
        handleChange();
    }, []);
    if (filteredSecurityItems.length === 0)
        return null;
    return (React.createElement(mosaic_1.Panel, { defaultIsOpen: true },
        React.createElement(mosaic_1.Panel.Titlebar, { rightComponent: filteredSecurityItems.length > 1 && (React.createElement(mosaic_1.Menu, { label: "security-schemes", trigger: React.createElement(mosaic_1.Button, { appearance: "minimal", iconRight: "caret-down" }, menuName) }, filteredSecurityItems.map(auth => (React.createElement(mosaic_1.MenuItem, { key: auth.key, text: security_1.getReadableSecurityName(auth), onClick: () => {
                    onChange({ scheme: auth, authValue: undefined });
                } }))))) }, "Auth"),
        React.createElement(SecuritySchemeComponent, { scheme: value ? value.scheme : filteredSecurityItems[0], onChange: handleChange, value: (_a = (value && value.authValue)) !== null && _a !== void 0 ? _a : '' })));
};
exports.TryItAuth = TryItAuth;
const GenericMessageContainer = ({ scheme }) => {
    return React.createElement(mosaic_1.Panel.Content, null,
        "Coming Soon: ",
        security_1.getReadableSecurityName(scheme));
};
const SecuritySchemeComponent = (_a) => {
    var { scheme } = _a, rest = tslib_1.__rest(_a, ["scheme"]);
    switch (scheme.type) {
        case 'apiKey':
            return React.createElement(APIKeyAuth_1.APIKeyAuth, Object.assign({ scheme: scheme }, rest));
        case 'oauth2':
            return React.createElement(OAuth2Auth_1.OAuth2Auth, Object.assign({ scheme: scheme }, rest));
        case 'http':
            switch (scheme.scheme) {
                case 'basic':
                    return React.createElement(BasicAuth_1.BasicAuth, Object.assign({}, rest));
                case 'bearer':
                    return React.createElement(BearerAuth_1.BearerAuth, Object.assign({ scheme: scheme }, rest));
                default:
                    return React.createElement(GenericMessageContainer, Object.assign({ scheme: scheme }, rest));
            }
        default:
            return React.createElement(GenericMessageContainer, Object.assign({ scheme: scheme }, rest));
    }
};
const securitySchemeKeys = ['apiKey', 'http', 'oauth2', 'openIdConnect'];
//# sourceMappingURL=Auth.js.map