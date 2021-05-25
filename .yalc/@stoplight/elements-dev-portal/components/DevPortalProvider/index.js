"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DevPortalProvider = exports.PlatformUrlContext = void 0;
const tslib_1 = require("tslib");
const elements_core_1 = require("@stoplight/elements-core");
const React = tslib_1.__importStar(require("react"));
exports.PlatformUrlContext = React.createContext('https://stoplight.io');
const PlatformUrlProvider = ({ platformUrl = 'https://stoplight.io', children }) => {
    return React.createElement(exports.PlatformUrlContext.Provider, { value: platformUrl }, children);
};
exports.DevPortalProvider = elements_core_1.withQueryClientProvider(PlatformUrlProvider);
//# sourceMappingURL=index.js.map