"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BearerAuth = void 0;
const tslib_1 = require("tslib");
const mosaic_1 = require("@stoplight/mosaic");
const React = tslib_1.__importStar(require("react"));
const AuthTokenInput_1 = require("./AuthTokenInput");
const BearerAuth = ({ value, onChange }) => {
    return (React.createElement(mosaic_1.Panel.Content, { className: "ParameterGrid" },
        React.createElement(AuthTokenInput_1.AuthTokenInput, { type: "http", name: "Token", value: value, onChange: onChange })));
};
exports.BearerAuth = BearerAuth;
//# sourceMappingURL=BearerAuth.js.map