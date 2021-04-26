"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactRouterMarkdownLink = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const react_router_hash_link_1 = require("react-router-hash-link");
const externalRegex = new RegExp('^(?:[a-z]+:)?//', 'i');
const ReactRouterMarkdownLink = ({ node: { url, title }, children }) => {
    const isExternal = externalRegex.test(url);
    if (isExternal) {
        return (react_1.default.createElement("a", { target: "_blank", rel: "noreferrer noopener", href: url, title: title }, children));
    }
    return (react_1.default.createElement(react_router_hash_link_1.HashLink, { to: url, title: title }, children));
};
exports.ReactRouterMarkdownLink = ReactRouterMarkdownLink;
//# sourceMappingURL=ReactRouterLink.js.map