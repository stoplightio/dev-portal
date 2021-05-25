"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockingProvider = exports.MockingContext = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
exports.MockingContext = createNamedContext('MockingContext', { mockUrl: undefined, hideMocking: undefined });
const MockingProvider = ({ mockUrl, hideMocking, children }) => {
    const info = {
        mockUrl,
        hideMocking: hideMocking || !mockUrl,
    };
    return React.createElement(exports.MockingContext.Provider, { value: info }, children);
};
exports.MockingProvider = MockingProvider;
function createNamedContext(name, defaultValue) {
    const context = React.createContext(defaultValue);
    context.displayName = name;
    return context;
}
//# sourceMappingURL=MockingProvider.js.map