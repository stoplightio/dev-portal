"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OAuth2Auth = void 0;
const tslib_1 = require("tslib");
const mosaic_1 = require("@stoplight/mosaic");
const React = tslib_1.__importStar(require("react"));
const AuthTokenInput_1 = require("./AuthTokenInput");
const OAuth2Auth = ({ value, onChange }) => {
    return (React.createElement(mosaic_1.Panel.Content, { className: "ParameterGrid" },
        React.createElement(AuthTokenInput_1.AuthTokenInput, { type: "oauth2", name: "Token", value: value, onChange: onChange })));
};
exports.OAuth2Auth = OAuth2Auth;
//# sourceMappingURL=OAuth2Auth.js.map