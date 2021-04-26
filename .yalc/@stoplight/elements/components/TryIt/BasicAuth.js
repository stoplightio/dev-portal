"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicAuth = void 0;
const tslib_1 = require("tslib");
const mosaic_1 = require("@stoplight/mosaic");
const React = tslib_1.__importStar(require("react"));
const BasicAuth = ({ onChange, value }) => {
    const [username = '', password = ''] = decode(value).split(':');
    const onCredentialsChange = (username, password) => {
        onChange(encode(`${username}:${password}`));
    };
    return (React.createElement(mosaic_1.Panel.Content, { className: "ParameterGrid" },
        React.createElement("div", null, "Username"),
        React.createElement(mosaic_1.Text, { mx: 3 }, ":"),
        React.createElement(mosaic_1.Flex, { flex: 1 },
            React.createElement(mosaic_1.Input, { style: { paddingLeft: 15 }, "aria-label": "Username", appearance: "minimal", flex: 1, placeholder: "username", value: username, type: "text", required: true, onChange: e => onCredentialsChange(e.currentTarget.value, password) })),
        React.createElement("div", null, "Password"),
        React.createElement(mosaic_1.Text, { mx: 3 }, ":"),
        React.createElement(mosaic_1.Flex, { flex: 1 },
            React.createElement(mosaic_1.Input, { style: { paddingLeft: 15 }, "aria-label": "Password", appearance: "minimal", flex: 1, placeholder: "password", value: password, type: "password", required: true, onChange: e => onCredentialsChange(username, e.currentTarget.value) }))));
};
exports.BasicAuth = BasicAuth;
function encode(value) {
    return btoa(value);
}
function decode(encoded) {
    try {
        return atob(encoded);
    }
    catch (_a) {
        return '';
    }
}
//# sourceMappingURL=BasicAuth.js.map