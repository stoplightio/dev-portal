"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthTokenInput = void 0;
const tslib_1 = require("tslib");
const mosaic_1 = require("@stoplight/mosaic");
const React = tslib_1.__importStar(require("react"));
const useUniqueId_1 = require("../../hooks/useUniqueId");
const AuthTokenInput = ({ type, name, value, onChange }) => {
    const inputId = useUniqueId_1.useUniqueId(`id_auth_${name}_`);
    return (React.createElement(React.Fragment, null,
        React.createElement("label", { "aria-hidden": "true", htmlFor: inputId }, name),
        React.createElement(mosaic_1.Text, { mx: 3 }, ":"),
        React.createElement(mosaic_1.Flex, { flex: 1 },
            React.createElement(mosaic_1.Input, { id: inputId, "aria-label": name, appearance: "minimal", flex: 1, placeholder: type === 'oauth2' ? 'Bearer 123' : '123', value: value, type: "text", required: true, onChange: e => onChange(e.currentTarget.value) }))));
};
exports.AuthTokenInput = AuthTokenInput;
//# sourceMappingURL=AuthTokenInput.js.map