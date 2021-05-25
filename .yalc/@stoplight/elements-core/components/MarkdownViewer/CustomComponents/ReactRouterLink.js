"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactRouterMarkdownLink = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const react_router_hash_link_1 = require("react-router-hash-link");
const externalRegex = new RegExp('^(?:[a-z]+:)?//', 'i');
const ReactRouterMarkdownLink = ({ href, title, children }) => {
    if (!href)
        return null;
    const isExternal = externalRegex.test(href);
    if (isExternal) {
        return (react_1.default.createElement("a", { target: "_blank", rel: "noreferrer noopener", href: href, title: title }, children));
    }
    return (react_1.default.createElement(react_router_hash_link_1.HashLink, { to: href, title: title }, children));
};
exports.ReactRouterMarkdownLink = ReactRouterMarkdownLink;
//# sourceMappingURL=ReactRouterLink.js.map